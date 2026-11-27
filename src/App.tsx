import { lazy, Suspense, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Header } from './components/Header';
import { SakugaCanvasOverlay } from './components/SakugaCanvasOverlay';
import { UniversalPageScroller } from './components/UniversalPageScroller';
import type { AppRoute, SubjectCode, SyllabusChapter } from './types/syllabus';
import {
  buildAppRoutePath,
  findSubtopicInSyllabus,
  parseAppRoute,
  resolveRouteSubject,
} from './utils/examLogic';
import { startBackgroundAppWarmup, setBackgroundWarmupPaused } from './utils/backgroundPreloader';
import {
  loadChapterNotesForRoute,
  loadFormulaSheetModal,
  loadGraphCalculatorModal,
  loadNotesView,
  loadPastPapersView,
  loadPracticeExamView,
  loadSubjectSyllabus,
  preloadAllAppViews,
} from './utils/routePreloaders';

const NotesView = lazy(loadNotesView);
const PastPapersView = lazy(loadPastPapersView);
const PracticeExamView = lazy(loadPracticeExamView);
const FormulaSheetModal = lazy(loadFormulaSheetModal);
const GraphCalculatorModal = lazy(loadGraphCalculatorModal);

const STORAGE_KEYS = {
  studied: 'cambridge_9709_studied_topics_v1',
  weak: 'cambridge_9709_weak_topics_v1',
};

function readStoredTopicList(key: string): string[] {
  try {
    const saved = window.localStorage.getItem(key);
    const parsed = saved ? JSON.parse(saved) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeStoredTopicList(key: string, items: string[]): void {
  try {
    window.localStorage.setItem(key, JSON.stringify(items));
  } catch {
    // ignore storage quota errors
  }
}

const ViewLoadingFallback: React.FC = () => (
  <main className="max-w-[1440px] mx-auto px-4 sm:px-6 py-8">
    <div
      role="status"
      aria-live="polite"
      className="p-8 sk-card flex items-center justify-center text-sm font-semibold text-[var(--sk-dim)]"
    >
      Loading Cambridge AS &amp; A Level Mathematics (9709) resources...
    </div>
  </main>
);

export default function App() {
  const [route, setRoute] = useState<AppRoute>(() =>
    parseAppRoute(window.location.pathname, window.location.search)
  );
  const activeSubject: SubjectCode = resolveRouteSubject(route);

  const [syllabus, setSyllabus] = useState<SyllabusChapter[] | null>(null);
  const [formulaModalOpen, setFormulaModalOpen] = useState(false);
  const [graphModalOpen, setGraphModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [practiceNavNonce, setPracticeNavNonce] = useState(0);
  const [sakugaToast, setSakugaToast] = useState<string | null>(null);
  const toastTimerRef = useRef<number | null>(null);

  const [studiedTopicIds, setStudiedTopicIds] = useState<string[]>(() =>
    readStoredTopicList(STORAGE_KEYS.studied)
  );
  const [weakTopicIds, setWeakTopicIds] = useState<string[]>(() =>
    readStoredTopicList(STORAGE_KEYS.weak)
  );

  const loadedChaptersRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    let cancelled = false;
    loadedChaptersRef.current = new Set();
    loadSubjectSyllabus(activeSubject)
      .then((chapters) => {
        if (!cancelled) setSyllabus(chapters);
      })
      .catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, [activeSubject]);

  const activeNotesChapterId = route.view === 'notes' ? route.chapterId : null;

  useEffect(() => {
    if (!syllabus || activeNotesChapterId === null) return;
    const validChapterId = syllabus.some((c) => c.id === activeNotesChapterId)
      ? activeNotesChapterId
      : 1;
    if (loadedChaptersRef.current.has(validChapterId)) return;

    let cancelled = false;
    loadChapterNotesForRoute(validChapterId)
      .then((loadedNotes) => {
        if (cancelled) return;
        loadedChaptersRef.current.add(validChapterId);
        setSyllabus((prev) =>
          prev
            ? prev.map((ch) =>
                ch.id === validChapterId ? { ...ch, subtopics: loadedNotes } : ch
              )
            : prev
        );
      })
      .catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, [syllabus, activeNotesChapterId]);

  useLayoutEffect(() => {
    document.documentElement.dataset.subject = activeSubject;
  }, [activeSubject]);

  useEffect(() => {
    document.title = "Rifki's Notes — Cambridge AS & A Level Mathematics (9709)";
  }, []);

  useEffect(() => {
    setBackgroundWarmupPaused(route.view === 'past-papers');
  }, [route.view]);

  useEffect(() => {
    const handlePopState = () => {
      setRoute(parseAppRoute(window.location.pathname, window.location.search));
    };
    window.addEventListener('popstate', handlePopState);
    setBackgroundWarmupPaused(route.view === 'past-papers');
    const stopWarmup = startBackgroundAppWarmup({
      activeSubject,
      activeTopicId: route.view === 'notes' ? route.topicId : undefined,
      preloadViews: preloadAllAppViews,
    });
    return () => {
      stopWarmup();
      window.removeEventListener('popstate', handlePopState);
      if (toastTimerRef.current !== null) window.clearTimeout(toastTimerRef.current);
    };
    // Run background warmup once on initial mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showToast = useCallback((message: string) => {
    setSakugaToast(message);
    if (toastTimerRef.current !== null) window.clearTimeout(toastTimerRef.current);
    toastTimerRef.current = window.setTimeout(() => {
      setSakugaToast(null);
      toastTimerRef.current = null;
    }, 2400);
  }, []);

  const navigate = useCallback((nextRoute: AppRoute, explicitPath?: string) => {
    const nextPath = explicitPath ?? buildAppRoutePath(nextRoute);
    const currentFull = `${window.location.pathname}${window.location.search}`;
    if (currentFull !== nextPath) {
      window.history.pushState(null, '', nextPath);
    }
    setRoute(nextRoute);
    if (nextRoute.view === 'practice') {
      setPracticeNavNonce((n) => n + 1);
    }
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const flagWeakTopics = useCallback((topicIds: string[]) => {
    if (topicIds.length === 0) return;
    setWeakTopicIds((current) => {
      const nextList = Array.from(new Set([...current, ...topicIds]));
      writeStoredTopicList(STORAGE_KEYS.weak, nextList);
      return nextList;
    });
  }, []);

  const clearWeakTopic = useCallback((topicId: string) => {
    setWeakTopicIds((current) => {
      if (!current.includes(topicId)) return current;
      const nextList = current.filter((id) => id !== topicId);
      writeStoredTopicList(STORAGE_KEYS.weak, nextList);
      return nextList;
    });
  }, []);

  const toggleStudied = useCallback(
    (topicId: string) => {
      const totalCount = syllabus?.flatMap((c) => c.subtopics).length || 24;
      setStudiedTopicIds((current) => {
        const willBeStudied = !current.includes(topicId);
        const nextList = willBeStudied
          ? [...current, topicId]
          : current.filter((id) => id !== topicId);
        writeStoredTopicList(STORAGE_KEYS.studied, nextList);
        if (willBeStudied) {
          clearWeakTopic(topicId);
          showToast(
            `9709 P1 Topic ${topicId} marked as studied (${nextList.length}/${totalCount})`
          );
        }
        return nextList;
      });
    },
    [syllabus, clearWeakTopic, showToast]
  );

  const activeNote = syllabus
    ? (route.view === 'notes'
        ? findSubtopicInSyllabus(syllabus, route.chapterId, route.topicId)
        : undefined) ||
      findSubtopicInSyllabus(syllabus, 1, '1.1') ||
      syllabus[0]?.subtopics[0]
    : undefined;

  return (
    <div className="min-h-screen flex flex-col bg-[var(--sk-page)] text-[var(--sk-ink)] overflow-x-clip">
      <Header
        activeSubject={activeSubject}
        activeView={route.view}
        onNavigate={navigate}
        onGoHome={() =>
          navigate({ view: 'notes', subject: activeSubject, chapterId: 1, topicId: '1.1' }, '/')
        }
        onOpenFormulaSheet={() => setFormulaModalOpen(true)}
        onOpenGraphTool={() => setGraphModalOpen(true)}
        onStartQuickMock={() =>
          navigate({
            view: 'practice',
            subject: activeSubject,
            mode: 'mock-p1-full',
          })
        }
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={() => setMobileMenuOpen((o) => !o)}
      />

      <div className="flex-1 w-full min-w-0">
        {!syllabus ? (
          <ViewLoadingFallback />
        ) : (
          <Suspense fallback={<ViewLoadingFallback />}>
            {route.view === 'notes' && activeNote && (
              <NotesView
                subject={activeSubject}
                syllabus={syllabus}
                chapterId={activeNote.chapterId}
                topicId={activeNote.id}
                note={activeNote}
                studiedTopicIds={studiedTopicIds}
                weakTopicIds={weakTopicIds}
                onToggleStudied={toggleStudied}
                onClearWeakTopic={clearWeakTopic}
                onNavigate={navigate}
              />
            )}

            {route.view === 'past-papers' && (
              <PastPapersView
                subject={activeSubject}
                syllabus={syllabus}
                initialSessionSlug={route.sessionSlug}
                initialPaperFilename={route.paperFilename}
                weakTopicIds={weakTopicIds}
                onFlagWeakTopics={flagWeakTopics}
                onClearWeakTopic={clearWeakTopic}
                onNavigate={navigate}
              />
            )}

            {route.view === 'practice' && (
              <PracticeExamView
                subject={activeSubject}
                syllabus={syllabus}
                initialMode={route.mode}
                initialTopicId={route.topicId}
                navNonce={practiceNavNonce}
                onOpenFormulaSheet={() => setFormulaModalOpen(true)}
                onFlagWeakTopics={flagWeakTopics}
                onNavigate={navigate}
              />
            )}
          </Suspense>
        )}
      </div>

      <footer className="border-t-[1.5px] border-[var(--sk-line)] bg-white mt-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-5 flex flex-wrap items-center justify-between gap-4 text-xs text-[var(--sk-dim)]">
          <div className="space-y-1">
            <div className="font-semibold text-[var(--sk-ink)]">
              Cambridge AS &amp; A Level Mathematics (9709) · Pure Mathematics 1 (P1) Live · Full 9709 Past Papers Archive
            </div>
            <div className="flex flex-wrap items-center gap-3 text-[11px]">
              <a href="https://rifkisnote.my.id" className="hover:text-[var(--sk-ink)] underline-offset-2 hover:underline">
                Portal
              </a>
              <span aria-hidden="true">·</span>
              <a href="https://igcse.rifkisnote.my.id" className="hover:text-[var(--sk-ink)] underline-offset-2 hover:underline">
                IGCSE (0580 &amp; 0606)
              </a>
              <span aria-hidden="true">·</span>
              <span className="font-semibold text-[var(--sk-pri-hover)]">A-Level (9709)</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <button
              type="button"
              onClick={() => navigate({ view: 'notes', subject: '9709', chapterId: 1, topicId: '1.1' })}
              className="hover:text-[var(--sk-ink)] font-medium cursor-pointer"
            >
              1.1 Quadratics
            </button>
            <button
              type="button"
              onClick={() => navigate({ view: 'notes', subject: '9709', chapterId: 8, topicId: '8.2' })}
              className="hover:text-[var(--sk-ink)] font-medium cursor-pointer"
            >
              8.2 Integration
            </button>
            <button
              type="button"
              onClick={() => navigate({ view: 'past-papers', subject: '9709' })}
              className="hover:text-[var(--sk-ink)] font-medium cursor-pointer"
            >
              9709 Past Papers
            </button>
            <button
              type="button"
              onClick={() => navigate({ view: 'practice', subject: '9709', mode: 'practice-test' })}
              className="hover:text-[var(--sk-ink)] font-medium cursor-pointer"
            >
              P1 Practice
            </button>
          </div>
        </div>
      </footer>

      {sakugaToast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 px-4 py-2 bg-[var(--sk-ink)] text-white text-xs font-semibold rounded-xl border-2 border-[var(--sk-ink)] shadow-[3px_4px_0_var(--sk-soft)] pointer-events-none"
        >
          {sakugaToast}
        </div>
      )}

      {formulaModalOpen && (
        <Suspense fallback={null}>
          <FormulaSheetModal
            open={formulaModalOpen}
            subject={activeSubject}
            onClose={() => setFormulaModalOpen(false)}
          />
        </Suspense>
      )}
      {graphModalOpen && (
        <Suspense fallback={null}>
          <GraphCalculatorModal
            open={graphModalOpen}
            initialTopicId={route.view === 'notes' && activeNote ? activeNote.id : 'general'}
            onClose={() => setGraphModalOpen(false)}
          />
        </Suspense>
      )}
      <UniversalPageScroller />
      <SakugaCanvasOverlay />
    </div>
  );
}
