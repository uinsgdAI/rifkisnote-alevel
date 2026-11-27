import type { PastPaperFile, PastPaperSession, SubjectCode } from '../types/syllabus';
import { parsePapaCambridgeFilename } from './examLogic';

export const PAPACAMBRIDGE_BASE = 'https://pastpapers.papacambridge.com';
export const SUBJECT_PATHS: Record<SubjectCode, string> = {
  '9709': '/papers/caie/as-and-a-level-mathematics-9709',
};
export const SUBJECT_PATH = SUBJECT_PATHS['9709'];

const UPSTREAM_SLUG_ALIASES: Record<string, string[]> = {
  '2024-oct-nov': ['mathematics-97092024-oct-nov', '2024-oct-nov'],
};

function buildFallbackSessions(subject: SubjectCode = '9709'): PastPaperSession[] {
  const subjectPath = SUBJECT_PATHS[subject];
  const list: PastPaperSession[] = [
    {
      slug: '2026-may-june',
      label: 'May / June 2026',
      year: 2026,
      series: 'May/June',
      url: `${PAPACAMBRIDGE_BASE}${subjectPath}-2026-may-june`,
    },
    {
      slug: '2026-march',
      label: 'Feb / March 2026',
      year: 2026,
      series: 'March',
      url: `${PAPACAMBRIDGE_BASE}${subjectPath}-2026-march`,
    },
  ];

  for (let year = 2025; year >= 2001; year -= 1) {
    if (year === 2001) {
      list.push({
        slug: '2001-nov',
        label: 'Oct / Nov 2001',
        year: 2001,
        series: 'Oct/Nov',
        url: `${PAPACAMBRIDGE_BASE}${subjectPath}-2001-nov`,
      });
      continue;
    }

    const useShortSlugs = year <= 2017;
    const novSlug = useShortSlugs ? `${year}-nov` : `${year}-oct-nov`;
    const novUpstreamSlug = year === 2024 ? 'mathematics-97092024-oct-nov' : novSlug;
    const junSlug =
      year === 2020
        ? 'may-june-2020'
        : useShortSlugs
          ? `${year}-jun`
          : `${year}-may-june`;
    const marSlug =
      year === 2022
        ? '2022-feb-march'
        : useShortSlugs
          ? `${year}-mar`
          : `${year}-march`;

    list.push({
      slug: novSlug,
      label: `Oct / Nov ${year}`,
      year,
      series: 'Oct/Nov',
      url: `${PAPACAMBRIDGE_BASE}${subjectPath}-${novUpstreamSlug}`,
      ...(novUpstreamSlug !== novSlug ? { upstreamSlug: novUpstreamSlug } : {}),
    });
    list.push({
      slug: junSlug,
      label: `May / June ${year}`,
      year,
      series: 'May/June',
      url: `${PAPACAMBRIDGE_BASE}${subjectPath}-${junSlug}`,
    });
    if (year >= 2016) {
      list.push({
        slug: marSlug,
        label: `Feb / March ${year}`,
        year,
        series: 'March',
        url: `${PAPACAMBRIDGE_BASE}${subjectPath}-${marSlug}`,
      });
    }
  }

  return list;
}

export const FALLBACK_SESSIONS: PastPaperSession[] = buildFallbackSessions('9709');

export function getFallbackSessions(_subject: SubjectCode = '9709'): PastPaperSession[] {
  return FALLBACK_SESSIONS;
}

export function formatSessionMetadata(
  rawSlug: string,
  subject: SubjectCode = '9709'
): PastPaperSession {
  const cleanSlug = rawSlug.replace(/^mathematics-9709(?=\d{4})/, '');
  const yearMatch = cleanSlug.match(/(\d{4})/);
  const year = yearMatch ? Number(yearMatch[1]) : 2024;
  let series: PastPaperSession['series'] = 'May/June';
  let label = cleanSlug.replace(/-/g, ' ');

  if (cleanSlug.includes('topical')) {
    series = 'Topical';
    label = 'Topical Past Papers';
  } else if (cleanSlug.includes('specimen')) {
    series = 'Specimen';
    label = `${year} Specimen Papers`;
  } else if (cleanSlug.includes('may-june') || /(?:^|-)jun(?:e)?$/.test(cleanSlug)) {
    series = 'May/June';
    label = `May / June ${year}`;
  } else if (cleanSlug.includes('oct-nov') || /(?:^|-)nov(?:ember)?$/.test(cleanSlug)) {
    series = 'Oct/Nov';
    label = `Oct / Nov ${year}`;
  } else if (cleanSlug.includes('march') || /(?:^|-)mar(?:ch)?$/.test(cleanSlug)) {
    series = 'March';
    label = `Feb / March ${year}`;
  }

  return {
    slug: cleanSlug,
    label,
    year,
    series,
    url: `${PAPACAMBRIDGE_BASE}${SUBJECT_PATHS[subject]}-${rawSlug}`,
    ...(rawSlug !== cleanSlug ? { upstreamSlug: rawSlug } : {}),
  };
}

export function generateSessionPaperFallback(
  slug: string,
  _subject: SubjectCode = '9709'
): PastPaperFile[] {
  const yearMatch = slug.match(/(\d{4})/);
  if (!yearMatch) return [];
  const year = Number(yearMatch[1]);
  const yy = yearMatch[1].slice(2);
  const code =
    slug.includes('march') || /(?:^|-)mar(?:ch)?$/.test(slug)
      ? 'm'
      : slug.includes('oct-nov') || /(?:^|-)nov(?:ember)?$/.test(slug)
        ? 'w'
        : 's';
  // Cambridge 9709 papers: 1 (P1), 2 (P2), 3 (P3), 4 (M1), 5 (S1), 6 (S2)
  const papers = ['1', '2', '3', '4', '5', '6'];
  const files: PastPaperFile[] = [];

  // Cambridge introduced numbered zone variants in Oct/Nov 2009; earlier sessions used _1.._6
  const isSingleVariantEra = year < 2009 || (year === 2009 && code === 's');

  if (isSingleVariantEra) {
    for (const p of papers) {
      for (const kind of ['qp', 'ms']) {
        const fn = `9709_${code}${yy}_${kind}_${p}.pdf`;
        files.push(
          parsePapaCambridgeFilename(
            fn,
            `${PAPACAMBRIDGE_BASE}/directories/CAIE/CAIE-pastpapers/upload/${fn}`,
            slug
          )
        );
      }
    }
  } else {
    const variants = code === 'm' ? ['2'] : ['1', '2', '3'];
    for (const p of papers) {
      for (const v of variants) {
        for (const kind of ['qp', 'ms']) {
          const fn = `9709_${code}${yy}_${kind}_${p}${v}.pdf`;
          files.push(
            parsePapaCambridgeFilename(
              fn,
              `${PAPACAMBRIDGE_BASE}/directories/CAIE/CAIE-pastpapers/upload/${fn}`,
              slug
            )
          );
        }
      }
    }
  }

  if (year >= 2008) {
    const gtFn = `9709_${code}${yy}_gt.pdf`;
    files.push(
      parsePapaCambridgeFilename(
        gtFn,
        `${PAPACAMBRIDGE_BASE}/directories/CAIE/CAIE-pastpapers/upload/${gtFn}`,
        slug
      )
    );
  }

  const erFn = `9709_${code}${yy}_er.pdf`;
  files.push(
    parsePapaCambridgeFilename(
      erFn,
      `${PAPACAMBRIDGE_BASE}/directories/CAIE/CAIE-pastpapers/upload/${erFn}`,
      slug
    )
  );
  return files;
}

export function parseSessionsFromHtml(
  html: string,
  subject: SubjectCode = '9709'
): PastPaperSession[] {
  const regex =
    /href="(?:https:\/\/pastpapers\.papacambridge\.com)?\/?(?:papers\/caie\/)+as-and-a-level-mathematics-9709-([a-z0-9-]+)"/gi;

  const seenKeys = new Set<string>();
  const sessions: PastPaperSession[] = [];

  let match: RegExpExecArray | null;
  while ((match = regex.exec(html)) !== null) {
    const rawSlug = match[1].toLowerCase();
    const cleanSlug = rawSlug.replace(/^mathematics-9709(?=\d{4})/, '');
    if (
      cleanSlug.includes('syllabus') ||
      cleanSlug.includes('timetable') ||
      cleanSlug.includes('solved') ||
      cleanSlug.includes('topical') ||
      !/^(?:\d{4}-(may-june|oct-nov|march|feb-march|jun|nov|mar|specimen)|may-june-\d{4})$/.test(
        cleanSlug
      )
    ) {
      continue;
    }
    const meta = formatSessionMetadata(rawSlug, subject);
    const canonicalKey = `${meta.year}-${meta.series}`;
    if (!seenKeys.has(canonicalKey)) {
      seenKeys.add(canonicalKey);
      sessions.push(meta);
    }
  }

  return sessions;
}

export function parsePapersFromHtml(
  html: string,
  sessionSlug: string,
  _subject: SubjectCode = '9709'
): PastPaperFile[] {
  const pdfRegex =
    /(?:files=|href=")(https?(?::|%3a)(?:\/\/|%2f%2f)pastpapers\.papacambridge\.com(?:\/|%2f)[^"&]+\.pdf|\/directories\/CAIE\/[^"&]+\.pdf)/gi;
  const seen = new Set<string>();
  const files: PastPaperFile[] = [];
  const prefixPattern = /^9709[_-]/i;

  let match: RegExpExecArray | null;
  while ((match = pdfRegex.exec(html)) !== null) {
    let rawUrl = match[1];
    if (/%2f|%3a/i.test(rawUrl)) {
      try {
        rawUrl = decodeURIComponent(rawUrl);
      } catch {
        // keep raw if malformed percent-encoding
      }
    }
    rawUrl = rawUrl.split('#')[0];
    const pdfUrl = rawUrl.startsWith('/') ? `${PAPACAMBRIDGE_BASE}${rawUrl}` : rawUrl;
    const filename = pdfUrl.split('/').pop() || '';
    if (!prefixPattern.test(filename)) {
      continue;
    }
    if (!seen.has(pdfUrl)) {
      seen.add(pdfUrl);
      files.push(parsePapaCambridgeFilename(filename, pdfUrl, sessionSlug));
    }
  }

  return files;
}

export function isAllowedPapaCambridgePdfUrl(rawUrl: string): URL | null {
  try {
    const parsed = new URL(rawUrl);
    const host = parsed.hostname.toLowerCase();
    if (
      parsed.protocol !== 'https:' ||
      Boolean(parsed.username || parsed.password) ||
      (host !== 'pastpapers.papacambridge.com' && host !== 'www.pastpapers.papacambridge.com') ||
      parsed.pathname.includes('..') ||
      !parsed.pathname.toLowerCase().endsWith('.pdf')
    ) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

const ALLOWED_PDF_PROXY_HOSTS = new Set([
  'pastpapers.papacambridge.com',
  'www.pastpapers.papacambridge.com',
]);

export function isAllowedPdfProxyUrl(rawUrl: string): URL | null {
  try {
    const parsed = new URL(rawUrl);
    const host = parsed.hostname.toLowerCase();
    const decodedPath = decodeURIComponent(parsed.pathname).toLowerCase();
    if (
      parsed.protocol !== 'https:' ||
      Boolean(parsed.username || parsed.password) ||
      !ALLOWED_PDF_PROXY_HOSTS.has(host) ||
      decodedPath.includes('..') ||
      !decodedPath.endsWith('.pdf')
    ) {
      return null;
    }

    const validPapaPath =
      (decodedPath.startsWith('/directories/caie/') || decodedPath.startsWith('/papers/caie/')) &&
      /(?:^|\/)[^/]*9709[^/]*\.pdf$/.test(decodedPath);
    if (!validPapaPath) return null;

    parsed.hash = '';
    return parsed;
  } catch {
    return null;
  }
}

export function isDirectCorsPdfUrl(_rawUrl: string): boolean {
  return false;
}

export function getPdfUpstreamHeaders(
  _parsed: URL,
  variant: 'browser' | 'minimal' = 'browser'
): Record<string, string> {
  if (variant === 'minimal') {
    return {
      Accept: 'application/pdf,application/octet-stream,*/*;q=0.8',
    };
  }
  return {
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    Accept: 'application/pdf,application/octet-stream,*/*;q=0.9',
    'Accept-Language': 'en-US,en;q=0.9',
    Referer: 'https://pastpapers.papacambridge.com/',
  };
}

export async function fetchUpstreamPdfWithFallback(
  parsed: URL,
  fetchImpl: typeof fetch = fetch
): Promise<Response> {
  const urlStr = parsed.toString();

  let upstream = await fetchImpl(urlStr, {
    headers: getPdfUpstreamHeaders(parsed, 'browser'),
    redirect: 'follow',
    signal: AbortSignal.timeout(9000),
  });

  if (upstream.status === 403 || upstream.status === 406) {
    upstream = await fetchImpl(urlStr, {
      headers: getPdfUpstreamHeaders(parsed, 'minimal'),
      redirect: 'follow',
      signal: AbortSignal.timeout(9000),
    });
  }

  return upstream;
}

export function buildGoogleDocsViewerUrl(pdfUrl: string): string {
  return `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(pdfUrl)}`;
}

export function resolvePdfIframeUrl(
  pdfUrl: string,
  options: { apiProxyAvailable: boolean; viewerMode: 'proxy' | 'web' }
): string {
  if (options.apiProxyAvailable && options.viewerMode === 'proxy') {
    return `/api/papacambridge/pdf?url=${encodeURIComponent(pdfUrl)}`;
  }
  return buildGoogleDocsViewerUrl(pdfUrl);
}

const sessionCache = new Map<SubjectCode, { data: PastPaperSession[]; expiresAt: number }>();
const papersCache = new Map<string, { data: PastPaperFile[]; expiresAt: number }>();

export async function fetchPapaCambridgeSessions(
  subject: SubjectCode = '9709',
  fetchImpl: typeof fetch = fetch
): Promise<{
  sessions: PastPaperSession[];
  source: 'live' | 'fallback';
}> {
  const cached = fetchImpl === fetch ? sessionCache.get(subject) : undefined;
  if (cached && cached.data.length > 0 && Date.now() < cached.expiresAt) {
    return { sessions: cached.data, source: 'live' };
  }

  try {
    const resp = await fetchImpl(`${PAPACAMBRIDGE_BASE}${SUBJECT_PATHS[subject]}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Cambridge9709StudyAssistant/1.0)',
      },
      signal: AbortSignal.timeout(4500),
    });

    if (resp.ok) {
      const html = await resp.text();
      const sessions = parseSessionsFromHtml(html, subject);

      if (sessions.length > 0) {
        const fallbackList = getFallbackSessions(subject);
        const existingKeys = new Set(sessions.map((s) => `${s.year}-${s.series}`));
        const seriesRank: Record<PastPaperSession['series'], number> = {
          'Oct/Nov': 3,
          'May/June': 2,
          March: 1,
          Specimen: 0,
          Topical: -1,
        };
        const merged = [
          ...sessions,
          ...fallbackList.filter((fs) => !existingKeys.has(`${fs.year}-${fs.series}`)),
        ].sort((a, b) => {
          if (b.year !== a.year) return b.year - a.year;
          return (seriesRank[b.series] ?? 0) - (seriesRank[a.series] ?? 0);
        });
        sessionCache.set(subject, {
          data: merged,
          expiresAt: Date.now() + 1000 * 60 * 30,
        });
        return { sessions: merged, source: 'live' };
      }
    }
  } catch {
    // Fall back cleanly
  }

  return { sessions: getFallbackSessions(subject), source: 'fallback' };
}

export async function fetchPapaCambridgePapers(
  slug: string,
  subject: SubjectCode = '9709',
  fetchImpl: typeof fetch = fetch
): Promise<{
  papers: PastPaperFile[];
  source: 'live' | 'fallback';
}> {
  const safeSlug = slug.replace(/[^a-z0-9-]/gi, '');
  const cacheKey = `${subject}:${safeSlug}`;
  const cached = fetchImpl === fetch ? papersCache.get(cacheKey) : undefined;
  if (cached && Date.now() < cached.expiresAt) {
    return { papers: cached.data, source: 'live' };
  }

  const candidateSlugs = UPSTREAM_SLUG_ALIASES[safeSlug] || [safeSlug];

  for (const upstreamSlug of candidateSlugs) {
    try {
      const targetUrl = `${PAPACAMBRIDGE_BASE}${SUBJECT_PATHS[subject]}-${upstreamSlug}`;
      const resp = await fetchImpl(targetUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; Cambridge9709StudyAssistant/1.0)',
        },
        signal: AbortSignal.timeout(4500),
      });

      if (!resp.ok) {
        continue;
      }

      const html = await resp.text();
      const files = parsePapersFromHtml(html, safeSlug, subject);

      if (files.length > 0) {
        papersCache.set(cacheKey, {
          data: files,
          expiresAt: Date.now() + 1000 * 60 * 30,
        });
        return { papers: files, source: 'live' };
      }
    } catch {
      // Try next candidate slug or fall back cleanly
    }
  }

  return {
    papers: generateSessionPaperFallback(safeSlug, subject),
    source: 'fallback',
  };
}
