import test from 'node:test';
import assert from 'node:assert/strict';
import {
  fetchUpstreamPdfWithFallback,
  getPdfUpstreamHeaders,
  isAllowedPdfProxyUrl,
} from './papacambridge';
import {
  buildPdfByteCandidateUrls,
  clearPdfBytesCache,
  fetchPdfBytesWithFallback,
} from './pdfAnnotations';
import {
  buildR2PdfObjectKey,
  handleApiRequest,
  type R2BucketBinding,
  type WorkerExecutionContext,
} from './workerApi';
import workerEntry from '../worker';

test('9709 PDF proxy allowlist and upstream retry fallback work securely', async () => {
  const papaGt =
    'https://pastpapers.papacambridge.com/directories/CAIE/CAIE-pastpapers/upload/9709_s26_gt.pdf#view=FitH';
  const parsedPapa = isAllowedPdfProxyUrl(papaGt);
  assert.ok(parsedPapa);
  assert.equal(parsedPapa.hash, '');
  assert.equal(getPdfUpstreamHeaders(parsedPapa).Referer, 'https://pastpapers.papacambridge.com/');

  assert.equal(
    isAllowedPdfProxyUrl('https://pastpapers.papacambridge.com/directories/CAIE/CAIE-pastpapers/upload/0580_s24_qp_42.pdf'),
    null
  );
  assert.equal(isAllowedPdfProxyUrl('https://evil.example.com/9709_s26_gt.pdf'), null);

  let attempt = 0;
  const upstreamRes = await fetchUpstreamPdfWithFallback(parsedPapa, (async () => {
    attempt += 1;
    if (attempt === 1) {
      return new Response('Forbidden', { status: 403 });
    }
    return new Response(new TextEncoder().encode('%PDF-1.7\n'), {
      status: 200,
      headers: { 'Content-Type': 'application/pdf' },
    });
  }) as typeof fetch);

  assert.equal(attempt, 2);
  assert.equal(upstreamRes.status, 200);
});

test('PDF byte fallback and cache deduplicate concurrent 9709 fetches and isolate byte copies', async () => {
  clearPdfBytesCache();
  const papaUrl =
    'https://pastpapers.papacambridge.com/directories/CAIE/CAIE-pastpapers/upload/9709_s24_qp_12.pdf';
  const proxyUrl = `/api/papacambridge/pdf?url=${encodeURIComponent(papaUrl)}`;

  assert.deepEqual(buildPdfByteCandidateUrls(proxyUrl, papaUrl), [proxyUrl, papaUrl]);
  assert.deepEqual(buildPdfByteCandidateUrls('blob:http://localhost:3000/abc'), [
    'blob:http://localhost:3000/abc',
  ]);

  let networkHits = 0;
  const mockFetch = (async () => {
    networkHits += 1;
    await new Promise((r) => setTimeout(r, 10));
    return new Response(new TextEncoder().encode('%PDF-1.7\n%9709-cached'), {
      status: 200,
      headers: { 'Content-Type': 'application/pdf' },
    });
  }) as typeof fetch;

  const [r1, r2] = await Promise.all([
    fetchPdfBytesWithFallback([proxyUrl], { fetchImpl: mockFetch }),
    fetchPdfBytesWithFallback([proxyUrl], { fetchImpl: mockFetch }),
  ]);
  assert.equal(networkHits, 1);
  assert.notEqual(r1.bytes.buffer, r2.bytes.buffer);

  r1.bytes[0] = 0;
  const r3 = await fetchPdfBytesWithFallback([proxyUrl], { fetchImpl: mockFetch });
  assert.equal(networkHits, 1);
  assert.equal(new TextDecoder('latin1').decode(r3.bytes.slice(0, 5)), '%PDF-');

  clearPdfBytesCache();
});

test('9709 /api/papacambridge/pdf follows Edge Cache -> R2 alevel/mirror -> Upstream -> async R2 mirror', async () => {
  const gtUrl =
    'https://pastpapers.papacambridge.com/directories/CAIE/CAIE-pastpapers/upload/9709_s26_gt.pdf';
  const expectedKey = buildR2PdfObjectKey(isAllowedPdfProxyUrl(gtUrl)!);
  assert.equal(
    expectedKey,
    'alevel/mirror/pastpapers.papacambridge.com/directories/CAIE/CAIE-pastpapers/upload/9709_s26_gt.pdf'
  );

  const edgeStore = new Map<string, Response>();
  const mockEdgeCache = {
    async match(req: RequestInfo | URL) {
      const key = typeof req === 'string' ? req : req instanceof URL ? req.toString() : req.url;
      return edgeStore.get(key)?.clone() ?? undefined;
    },
    async put(req: RequestInfo | URL, res: Response) {
      const key = typeof req === 'string' ? req : req instanceof URL ? req.toString() : req.url;
      edgeStore.set(key, res);
    },
  } as unknown as Cache;

  const r2Store = new Map<string, { bytes: Uint8Array; contentType?: string }>();
  let r2GetCalls = 0;
  let r2PutCalls = 0;

  const mockR2Bucket: R2BucketBinding = {
    async get(key: string) {
      r2GetCalls += 1;
      const entry = r2Store.get(key);
      if (!entry) return null;
      return {
        body: entry.bytes,
        size: entry.bytes.byteLength,
        httpMetadata: { contentType: entry.contentType },
      };
    },
    async put(
      key: string,
      value: ArrayBuffer | ArrayBufferView | ReadableStream<Uint8Array> | string,
      options
    ) {
      r2PutCalls += 1;
      const bytes =
        value instanceof ArrayBuffer
          ? new Uint8Array(value.slice(0))
          : ArrayBuffer.isView(value)
            ? new Uint8Array(value.buffer.slice(value.byteOffset, value.byteOffset + value.byteLength))
            : new TextEncoder().encode(String(value));
      r2Store.set(key, {
        bytes,
        contentType: options?.httpMetadata?.contentType,
      });
    },
  };

  let upstreamCalls = 0;
  const mockUpstreamFetch = (async () => {
    upstreamCalls += 1;
    return new Response(new TextEncoder().encode('%PDF-1.7\n1 0 obj\n<<>>\nendobj'), {
      status: 200,
      headers: { 'Content-Type': 'application/pdf' },
    });
  }) as typeof fetch;

  const pendingWaitUntil: Promise<unknown>[] = [];
  const mockCtx: WorkerExecutionContext = {
    waitUntil(p) {
      pendingWaitUntil.push(p);
    },
  };

  const apiUrl = `https://alevel.rifkisnote.my.id/api/papacambridge/pdf?url=${encodeURIComponent(gtUrl)}`;

  // 1. Cold miss -> upstream + Edge Cache + async R2 alevel/mirror
  const res1 = await handleApiRequest(
    new Request(apiUrl),
    mockUpstreamFetch,
    { PDF_BUCKET: mockR2Bucket },
    mockCtx,
    mockEdgeCache
  );
  assert.ok(res1);
  assert.equal(res1.status, 200);
  assert.equal(upstreamCalls, 1);
  assert.equal(r2GetCalls, 1);
  await Promise.all(pendingWaitUntil.splice(0));
  assert.equal(r2PutCalls, 1);
  assert.equal(r2Store.get(expectedKey)?.contentType, 'application/pdf');
  assert.ok(edgeStore.has(apiUrl));

  // 2. Warm Edge Cache hit
  const res2 = await handleApiRequest(
    new Request(apiUrl),
    mockUpstreamFetch,
    { PDF_BUCKET: mockR2Bucket },
    mockCtx,
    mockEdgeCache
  );
  assert.equal(res2?.status, 200);
  assert.equal(upstreamCalls, 1);
  assert.equal(r2GetCalls, 1);

  // 3. Edge Cache evicted -> R2 warm hit
  edgeStore.clear();
  const res3 = await handleApiRequest(
    new Request(apiUrl),
    mockUpstreamFetch,
    { PDF_BUCKET: mockR2Bucket },
    mockCtx,
    mockEdgeCache
  );
  assert.equal(res3?.status, 200);
  assert.equal(new TextDecoder('latin1').decode((await res3!.arrayBuffer()).slice(0, 5)), '%PDF-');
  assert.equal(upstreamCalls, 1);
  assert.equal(r2GetCalls, 2);
  await Promise.all(pendingWaitUntil.splice(0));
  assert.ok(edgeStore.has(apiUrl));

  // 4. Worker entry works with optional PDF_BUCKET and routes SPA paths to ASSETS
  let assetsFetchCalled = false;
  const assetRes = await workerEntry.fetch(
    new Request('https://alevel.rifkisnote.my.id/notes/9709/8/8.2'),
    {
      ASSETS: {
        async fetch() {
          assetsFetchCalled = true;
          return new Response('<html>SPA</html>', { status: 200 });
        },
      },
    },
    mockCtx
  );
  assert.equal(assetsFetchCalled, true);
  assert.equal(assetRes.status, 200);
});
