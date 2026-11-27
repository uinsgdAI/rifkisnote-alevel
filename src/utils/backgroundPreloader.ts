import type { SubjectCode, TopicalPaperPack } from '../types/syllabus';
import {
  buildPdfByteCandidateUrls,
  fetchPdfBytesWithFallback,
  hasActiveHighPriorityPdfFetch,
  hasCachedPdfBytes,
  waitForHighPriorityPdfFetches,
} from './pdfAnnotations';

export interface WarmupQueueItem {
  packId: string;
  kind: 'Q' | 'A';
  candidates: string[];
}

function getTopicalPdfBytesUrlInline(rawUrl: string): string {
  const cleanUrl = rawUrl.split('#')[0];
  return `/api/papacambridge/pdf?url=${encodeURIComponent(cleanUrl)}`;
}

/**
 * Queues ONLY Q + A PDFs belonging to the single active topicId.
 * Never preloads the full catalog of topical PDFs automatically.
 */
export function buildTopicalWarmupQueue(
  packs: TopicalPaperPack[],
  activeTopicId?: string
): WarmupQueueItem[] {
  if (!activeTopicId) return [];

  const queue: WarmupQueueItem[] = [];
  const seen = new Set<string>();

  const pushUrl = (packId: string, kind: 'Q' | 'A', url: string) => {
    if (!url || seen.has(url)) return;
    seen.add(url);
    queue.push({
      packId,
      kind,
      candidates: buildPdfByteCandidateUrls(getTopicalPdfBytesUrlInline(url), url),
    });
  };

  for (const pack of packs) {
    if (pack.topicIds.includes(activeTopicId)) {
      pushUrl(pack.id, 'Q', pack.questionsUrl);
      if (pack.answersUrl) {
        pushUrl(pack.id, 'A', pack.answersUrl);
      }
    }
  }

  return queue;
}

const PDFJS_WARM_ASSETS = [
  '/pdfjs/wasm/openjpeg.wasm',
  '/pdfjs/wasm/openjpeg_nowasm_fallback.js',
  '/pdfjs/wasm/qcms_bg.wasm',
];

let warmupStarted = false;
let warmupPaused = false;
const warmupResumeResolvers: Array<() => void> = [];

export function setBackgroundWarmupPaused(paused: boolean): void {
  warmupPaused = paused;
  if (!paused) {
    while (warmupResumeResolvers.length > 0) {
      const resolve = warmupResumeResolvers.shift();
      resolve?.();
    }
  }
}

export function isBackgroundWarmupPaused(): boolean {
  return warmupPaused;
}

function waitWhileBackgroundWarmupPaused(): Promise<void> {
  if (!warmupPaused) return Promise.resolve();
  return new Promise((resolve) => {
    warmupResumeResolvers.push(resolve);
  });
}

function scheduleIdleWork(task: () => void, timeoutMs: number): () => void {
  if (typeof window === 'undefined') return () => {};
  const win = window as Window & {
    requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
    cancelIdleCallback?: (id: number) => void;
  };
  if (typeof win.requestIdleCallback === 'function') {
    const idleId = win.requestIdleCallback(task, { timeout: timeoutMs });
    return () => win.cancelIdleCallback?.(idleId);
  }
  const timer = window.setTimeout(task, Math.min(timeoutMs, 250));
  return () => window.clearTimeout(timer);
}

export function isDataSaverEnabled(): boolean {
  if (typeof navigator === 'undefined') return false;
  const nav = navigator as Navigator & {
    connection?: { saveData?: boolean };
  };
  return Boolean(nav.connection?.saveData);
}

export function startBackgroundAppWarmup(options: {
  activeSubject?: SubjectCode;
  activeTopicId?: string;
  preloadViews: () => Promise<void>;
}): () => void {
  if (typeof window === 'undefined' || warmupStarted) {
    return () => {};
  }
  warmupStarted = true;
  let cancelled = false;

  const cancelIdle = scheduleIdleWork(() => {
    if (cancelled) return;

    // 1. Preload JS route/modal chunks & shared PDF.js worker
    void options.preloadViews().catch(() => undefined);

    if (typeof navigator !== 'undefined' && navigator.onLine === false) {
      return;
    }

    // 2. Warm essential PDF.js WASM decoders
    for (const assetUrl of PDFJS_WARM_ASSETS) {
      void fetch(assetUrl, { cache: 'force-cache' }).catch(() => undefined);
    }

    // 3. Skip automatic PDF prefetching on 9709 (on-demand fetching + R2 mirror + caches.default only)
    if (isDataSaverEnabled() || !options.activeTopicId) {
      return;
    }
    void buildTopicalWarmupQueue;
    void hasActiveHighPriorityPdfFetch;
    void waitForHighPriorityPdfFetches;
    void hasCachedPdfBytes;
    void fetchPdfBytesWithFallback;
    void waitWhileBackgroundWarmupPaused;
  }, 200);

  return () => {
    cancelled = true;
    cancelIdle();
  };
}
