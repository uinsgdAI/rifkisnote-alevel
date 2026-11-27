import type { SubjectCode, SyllabusChapter } from '../types/syllabus';

export const loadNotesView = () =>
  import('../components/NotesView').then((m) => ({
    default: m.NotesView,
  }));

export const loadPastPapersView = () =>
  import('../components/PastPapersView').then((m) => ({
    default: m.PastPapersView,
  }));

export const loadPracticeExamView = () =>
  import('../components/PracticeExamView').then((m) => ({
    default: m.PracticeExamView,
  }));

export const loadFormulaSheetModal = () =>
  import('../components/FormulaSheetModal').then((m) => ({
    default: m.FormulaSheetModal,
  }));

export const loadGraphCalculatorModal = () =>
  import('../components/GraphCalculatorModal').then((m) => ({
    default: m.GraphCalculatorModal,
  }));

export async function loadSubjectSyllabus(_subject?: SubjectCode): Promise<SyllabusChapter[]> {
  const mod = await import('../data/syllabus9709');
  return mod.createSyllabusShell9709();
}

export async function loadChapterNotesForRoute(chapterId: number) {
  const mod = await import('../data/syllabus9709');
  return mod.loadP1ChapterNotes(chapterId);
}

let preloadedAll = false;

export function preloadAllAppViews(): Promise<void> {
  if (preloadedAll) return Promise.resolve();
  preloadedAll = true;
  return Promise.allSettled([
    loadNotesView(),
    loadPracticeExamView(),
    loadPastPapersView(),
    loadFormulaSheetModal(),
    loadGraphCalculatorModal(),
    import('./pdfJsCache').then((m) => m.warmSharedPdfWorker()),
  ]).then(() => undefined);
}

export function preloadRouteView(
  target: 'notes' | 'past-papers' | 'practice' | 'formula' | 'graph'
): void {
  if (target === 'notes') {
    void loadNotesView().catch(() => undefined);
  } else if (target === 'past-papers') {
    void loadPastPapersView().catch(() => undefined);
  } else if (target === 'practice') {
    void loadPracticeExamView().catch(() => undefined);
  } else if (target === 'formula') {
    void loadFormulaSheetModal().catch(() => undefined);
  } else if (target === 'graph') {
    void loadGraphCalculatorModal().catch(() => undefined);
  }
}
