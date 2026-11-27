import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  Calculator,
  CheckCircle2,
  Clock,
  FileSpreadsheet,
  Lock,
  Play,
  RefreshCw,
  RotateCcw,
  XCircle,
} from 'lucide-react';
import { PAPER_MODULES_9709 } from '../data/syllabus9709';
import type {
  AppRoute,
  PracticeQuestion,
  SubjectCode,
  SyllabusChapter,
} from '../types/syllabus';
import {
  estimateCambridgeGrade,
  extractWeakTopicsFromResults,
  formatCountdown,
  gradeStudentAnswer,
} from '../utils/examLogic';
import {
  generateMockExamQuestions,
  type MockPaperMode,
} from '../utils/questionGenerator';
import { MathText } from './MathText';
import { getActiveSubjectVfxVariant, triggerSakugaBurst } from '../utils/sakugaVfx';

interface PracticeExamViewProps {
  subject: SubjectCode;
  syllabus: SyllabusChapter[];
  initialMode?: string;
  initialTopicId?: string;
  navNonce?: number;
  onOpenFormulaSheet: () => void;
  onFlagWeakTopics?: (topicIds: string[]) => void;
  onNavigate: (route: AppRoute) => void;
}

interface PresetMetadata {
  id: string;
  mode: MockPaperMode;
  title: string;
  subtitle: string;
  badgeLabel: string;
  durationSeconds: number;
  questionCountLabel: string;
  formatLabel: string;
  isFeatured?: boolean;
}

interface ActiveExamSession {
  id: string;
  mode: MockPaperMode;
  title: string;
  subtitle: string;
  durationSeconds: number;
  attemptNumber: number;
  chapterId?: number | 'all';
  topicId?: string;
  questions: PracticeQuestion[];
}

function getQuestionFormatLabel(questionType: PracticeQuestion['questionType']): string {
  if (questionType === 'mcq') return 'Multiple Choice';
  if (questionType === 'text') return 'Exact Fraction / Value';
  return 'Numeric Answer';
}

export const PracticeExamView: React.FC<PracticeExamViewProps> = ({
  subject,
  syllabus,
  initialMode,
  initialTopicId,
  navNonce = 0,
  onOpenFormulaSheet,
  onFlagWeakTopics,
  onNavigate,
}) => {
  const [selectedChapterFilter, setSelectedChapterFilter] = useState<number | 'all'>('all');
  const [activeExam, setActiveExam] = useState<ActiveExamSession | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentIdx, setCurrentIdx] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [showWrongOnly, setShowWrongOnly] = useState(false);

  const seenSignaturesRef = useRef<Set<string>>(new Set());
  const handledRouteKeyRef = useRef<string>('');

  const presets: PresetMetadata[] = useMemo(
    () => [
      {
        id: 'mock-p1-algebra',
        mode: 'mock-p1-algebra',
        title: 'P1 Focus — Quadratics, Functions, Circles & Series',
        subtitle:
          'Paper 1 Pure Mathematics drill covering Completing the Square, Discriminant, Inverses, Perpendicular Bisectors, Circles, Binomial & AP/GP.',
        badgeLabel: 'Pure Maths 1 (P1)',
        durationSeconds: 25 * 60,
        questionCountLabel: '6 Qs · ~21 marks · 25 min',
        formatLabel: 'MCQ + Exact Value + Numeric',
      },
      {
        id: 'mock-p1-calculus',
        mode: 'mock-p1-calculus',
        title: 'P1 Focus — Circular Measure, Trig & Calculus',
        subtitle:
          'Paper 1 Pure Mathematics drill on Radians, Trig Identities & Equations, Chain Rule, Tangents/Normals, Stationary Points, Integration & Volumes.',
        badgeLabel: 'Pure Maths 1 (P1)',
        durationSeconds: 25 * 60,
        questionCountLabel: '6 Qs · ~22 marks · 25 min',
        formatLabel: 'Exact Fractions + Numeric + MCQ',
      },
      {
        id: 'mock-p1-full',
        mode: 'mock-p1-full',
        title: 'Complete 9709 Paper 1 (P1) Multi-Format Mock',
        subtitle:
          '10 fresh problems spanning all 8 Pure Mathematics 1 chapters with step-by-step M1/A1/B1 mark schemes and Cambridge AS A–E grading.',
        badgeLabel: 'Full P1 Mock',
        durationSeconds: 45 * 60,
        questionCountLabel: '10 Qs · ~36 marks · 45 min',
        formatLabel: 'All 8 P1 Chapters · Fresh on Every Retry',
        isFeatured: true,
      },
    ],
    []
  );

  const launchGeneratedSession = useCallback(
    async (config: {
      id: string;
      mode: MockPaperMode;
      title: string;
      subtitle: string;
      durationSeconds: number;
      attemptNumber: number;
      chapterId?: number | 'all';
      topicId?: string;
    }) => {
      const [{ PRACTICE_BANK_9709 }, generated] = await Promise.all([
        import('../data/practiceBank9709'),
        Promise.resolve(
          generateMockExamQuestions({
            mode: config.mode,
            attemptNumber: config.attemptNumber,
            chapterId: config.chapterId,
            topicId: config.topicId,
            avoidSignatures: seenSignaturesRef.current,
          })
        ),
      ]);

      const unseenCurated = PRACTICE_BANK_9709.filter((q) => {
        if (seenSignaturesRef.current.has(q.id)) return false;
        if (config.mode === 'topical') {
          if (config.topicId) return q.topicId === config.topicId;
          if (typeof config.chapterId === 'number') return q.chapterId === config.chapterId;
          return q.chapterId >= 1 && q.chapterId <= 8;
        }
        if (config.mode === 'mock-p1-algebra') {
          return [1, 2, 3, 6].includes(q.chapterId);
        }
        if (config.mode === 'mock-p1-calculus') {
          return [4, 5, 7, 8].includes(q.chapterId);
        }
        return true;
      });

      const curatedLimit =
        config.mode === 'topical' && typeof config.chapterId === 'number'
          ? 4
          : config.mode === 'mock-p1-full'
            ? 4
            : 2;
      const pickedCurated = unseenCurated.slice(0, curatedLimit);
      for (const q of pickedCurated) {
        seenSignaturesRef.current.add(q.id);
      }
      for (const sig of generated.signatures) {
        seenSignaturesRef.current.add(sig);
      }

      const targetTotal = generated.questions.length;
      const mergedQuestions = [
        ...pickedCurated,
        ...generated.questions.slice(0, Math.max(2, targetTotal - Math.min(2, pickedCurated.length))),
      ].slice(0, Math.max(targetTotal, pickedCurated.length));

      setActiveExam({
        ...config,
        questions: mergedQuestions,
      });
      setAnswers({});
      setCurrentIdx(0);
      setSecondsLeft(config.durationSeconds);
      setSubmitted(false);
      setShowWrongOnly(false);
    },
    []
  );

  const startPreset = useCallback(
    (preset: PresetMetadata) => {
      launchGeneratedSession({
        id: preset.id,
        mode: preset.mode,
        title: preset.title,
        subtitle: preset.subtitle,
        durationSeconds: preset.durationSeconds,
        attemptNumber: 1,
      });
    },
    [launchGeneratedSession]
  );

  const retakeExactExam = (exam: ActiveExamSession) => {
    setActiveExam(exam);
    setAnswers({});
    setCurrentIdx(0);
    setSecondsLeft(exam.durationSeconds);
    setSubmitted(false);
    setShowWrongOnly(false);
  };

  const retryWithNewQuestions = () => {
    if (!activeExam) return;
    launchGeneratedSession({
      id: activeExam.id,
      mode: activeExam.mode,
      title: activeExam.title,
      subtitle: activeExam.subtitle,
      durationSeconds: activeExam.durationSeconds,
      attemptNumber: activeExam.attemptNumber + 1,
      chapterId: activeExam.chapterId,
      topicId: activeExam.topicId,
    });
  };

  const startChapterDrill = useCallback(
    (chapterId: number | 'all', attemptNumber = 1) => {
      const chTitle =
        chapterId === 'all'
          ? `All ${syllabus.length} P1 Chapters`
          : `Chapter ${chapterId}: ${syllabus.find((c) => c.id === chapterId)?.title || ''}`;
      launchGeneratedSession({
        id: `chapter-9709-p1-${chapterId}`,
        mode: 'topical',
        title: `P1 Topical Practice — ${chTitle}`,
        subtitle: 'Fresh multi-format Cambridge 9709 Paper 1 problems with M1/A1/B1 mark schemes',
        durationSeconds: chapterId === 'all' ? 24 * 60 : 15 * 60,
        attemptNumber,
        chapterId,
      });
    },
    [launchGeneratedSession, syllabus]
  );

  useEffect(() => {
    if (!initialMode || initialMode === 'practice-test') {
      if (initialMode === 'practice-test') {
        setActiveExam(null);
      }
      handledRouteKeyRef.current = '';
      return;
    }
    const routeKey = `${subject}:${initialMode}:${initialTopicId || ''}:${navNonce}`;
    if (handledRouteKeyRef.current === routeKey) return;
    handledRouteKeyRef.current = routeKey;

    if (initialMode === 'topical' && initialTopicId) {
      const fallbackChapter = Number(initialTopicId.split('.')[0]) || 1;
      launchGeneratedSession({
        id: `topical-9709-p1-${initialTopicId}`,
        mode: 'topical',
        title: `P1 Topical Practice — Syllabus ${initialTopicId}`,
        subtitle: `Focused Cambridge 9709 Paper 1 questions aligned to Topic ${initialTopicId} & Chapter ${fallbackChapter}`,
        durationSeconds: 15 * 60,
        attemptNumber: 1,
        chapterId: fallbackChapter,
        topicId: initialTopicId,
      });
    } else {
      const matchingPreset = presets.find((p) => p.id === initialMode || p.mode === initialMode);
      if (matchingPreset) startPreset(matchingPreset);
    }
  }, [
    subject,
    initialMode,
    initialTopicId,
    navNonce,
    presets,
    launchGeneratedSession,
    startPreset,
  ]);

  useEffect(() => {
    if (!activeExam || submitted) return;
    const timer = window.setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [activeExam, submitted]);

  useEffect(() => {
    if (!submitted || !activeExam || !onFlagWeakTopics) return;
    const wrongTopicIds = activeExam.questions
      .filter((q) => !gradeStudentAnswer(answers[q.id] || '', q).isCorrect)
      .map((q) => q.topicId);
    if (wrongTopicIds.length > 0) {
      onFlagWeakTopics(wrongTopicIds);
    }
  }, [submitted, activeExam, answers, onFlagWeakTopics]);

  const previewQuestionCount = useMemo(
    () =>
      generateMockExamQuestions({
        mode: 'topical',
        attemptNumber: 1,
        chapterId: selectedChapterFilter,
      }).questions.length,
    [selectedChapterFilter]
  );

  if (!activeExam) {
    return (
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 py-6 flex flex-col lg:flex-row gap-6 items-stretch lg:items-start">
        {/* Left Paper Modules Sidebar: P1 Live, P2/P3/M1/S1/S2 Coming Soon */}
        <aside
          aria-label="9709 Practice Paper Modules"
          className="w-full lg:w-80 shrink-0 sk-card p-4 space-y-3"
        >
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--sk-dim)]">
              9709 Practice Papers
            </div>
            <h2 className="font-display text-sm font-bold text-[var(--sk-ink)] mt-0.5">
              Select Paper Module
            </h2>
          </div>

          <ul className="space-y-2">
            {PAPER_MODULES_9709.map((mod) => {
              const isLive = mod.status === 'live';
              if (isLive) {
                return (
                  <li key={mod.code}>
                    <div
                      aria-current="page"
                      className="p-3 rounded-xl bg-[var(--sk-chip)] border-2 border-[var(--sk-ink)] shadow-[2px_3px_0_var(--sk-soft)] space-y-1"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-xs font-bold text-[var(--sk-pri-hover)]">
                          {mod.code} · Paper {mod.paperNumber}
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-emerald-100 border border-emerald-600 text-[10px] font-mono font-bold text-emerald-900">
                          LIVE
                        </span>
                      </div>
                      <div className="font-display text-xs font-bold text-[var(--sk-ink)]">
                        {mod.name}
                      </div>
                      <div className="text-[11px] text-[var(--sk-dim)] leading-snug">
                        {mod.description}
                      </div>
                    </div>
                  </li>
                );
              }
              return (
                <li key={mod.code}>
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    title={`${mod.code} (${mod.name}) practice drills coming soon`}
                    className="w-full p-2.5 rounded-xl border border-[var(--sk-line)] bg-[var(--sk-surface)] text-left flex items-center justify-between gap-2 opacity-70 cursor-not-allowed"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <Lock className="w-3.5 h-3.5 text-[var(--sk-dim)] shrink-0" />
                      <div className="min-w-0">
                        <div className="text-xs font-semibold text-[var(--sk-ink)] truncate">
                          <span className="font-mono font-bold mr-1.5">{mod.code}</span>
                          {mod.name}
                        </div>
                      </div>
                    </div>
                    <span className="px-1.5 py-0.5 rounded bg-white border border-[var(--sk-line)] text-[10px] font-mono font-semibold text-[var(--sk-dim)] whitespace-nowrap shrink-0">
                      Coming Soon
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        {/* Main P1 Practice Content */}
        <div className="flex-1 min-w-0 space-y-6">
          <section className="p-6 sk-card flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="text-xs text-[var(--sk-dim)] mb-1">
                Cambridge AS &amp; A Level Mathematics (9709) · Paper 1 (P1) Live
              </div>
              <h1 className="font-display text-2xl font-bold text-[var(--sk-ink)]">
                9709 Pure Mathematics 1 (P1) Practice
              </h1>
              <p className="text-sm text-[var(--sk-body)] mt-1 max-w-2xl">
                Practise timed Paper 1 mock exams and chapter drills across all 8 P1 topics with randomized numerical parameters, M1/A1/B1 mark schemes, and Cambridge AS grading.
              </p>
            </div>
            <button
              type="button"
              onClick={onOpenFormulaSheet}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold sk-btn-secondary cursor-pointer shrink-0 whitespace-nowrap"
            >
              <FileSpreadsheet className="w-4 h-4 text-[var(--sk-pri)]" />
              View 9709 Formula Sheet
            </button>
          </section>

          {/* Timed Mock Exam Presets */}
          <section className="space-y-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-display text-base font-bold text-[var(--sk-ink)]">
                Timed 9709 P1 Mock Papers
              </h2>
              <span className="text-xs text-[var(--sk-dim)]">
                Unlimited retries — every retake swaps in fresh parameterised variants
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {presets.map((preset) => (
                <article
                  key={preset.id}
                  className={`p-5 flex flex-col justify-between gap-4 ${
                    preset.isFeatured ? 'md:col-span-2 sk-card-accent' : 'sk-card'
                  }`}
                >
                  <div className="space-y-2">
                    <div
                      className={`flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-[var(--sk-dim)] ${
                        preset.isFeatured ? 'items-center justify-between' : 'flex-col'
                      }`}
                    >
                      <span className="text-[var(--sk-pri-hover)] font-bold">
                        {preset.badgeLabel} · {preset.formatLabel}
                      </span>
                      <span className="font-mono tabular-nums">{preset.questionCountLabel}</span>
                    </div>
                    <h3 className="font-display text-base font-bold text-[var(--sk-ink)]">
                      {preset.title}
                    </h3>
                    <p className="text-xs text-[var(--sk-body)] leading-relaxed">
                      {preset.subtitle}
                    </p>
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={(e) => {
                        triggerSakugaBurst(e, getActiveSubjectVfxVariant('primary'), 'GO!');
                        startPreset(preset);
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold sk-btn-primary cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5" />
                      Begin P1 Paper
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Topical Practice Builder */}
          <section className="p-6 sk-card space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="font-display text-base font-bold text-[var(--sk-ink)]">
                  Topical Practice by P1 Syllabus Chapter
                </h2>
                <p className="text-xs text-[var(--sk-dim)] mt-0.5">
                  Target any of the 8 Pure Mathematics 1 chapters with non-repeating variants
                </p>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  triggerSakugaBurst(e, getActiveSubjectVfxVariant('accent'), 'DRILL!');
                  startChapterDrill(selectedChapterFilter, 1);
                }}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold sk-btn-ink cursor-pointer shrink-0"
              >
                <Play className="w-3.5 h-3.5" />
                Start Drill ({previewQuestionCount} Fresh Questions)
              </button>
            </div>

            <div
              role="tablist"
              aria-label="Filter P1 practice drill by chapter"
              className="flex flex-wrap gap-1.5 sk-tabs"
            >
              <button
                type="button"
                role="tab"
                aria-selected={selectedChapterFilter === 'all'}
                data-active={selectedChapterFilter === 'all'}
                onClick={() => setSelectedChapterFilter('all')}
                className="px-3 py-1.5 text-xs font-semibold cursor-pointer whitespace-nowrap sk-tab"
              >
                All P1 Chapters
              </button>
              {syllabus.map((ch) => (
                <button
                  key={ch.id}
                  type="button"
                  role="tab"
                  aria-selected={selectedChapterFilter === ch.id}
                  data-active={selectedChapterFilter === ch.id}
                  onClick={() => setSelectedChapterFilter(ch.id)}
                  className="px-3 py-1.5 text-xs font-semibold cursor-pointer whitespace-nowrap sk-tab"
                >
                  {ch.id}. {ch.title}
                </button>
              ))}
            </div>
          </section>
        </div>
      </main>
    );
  }

  // Active Exam or Results View
  const currentQ = activeExam.questions[currentIdx];
  const totalMarks = activeExam.questions.reduce((acc, q) => acc + q.marks, 0);
  const scoredResults = activeExam.questions.map((q, qIdx) => {
    const userVal = answers[q.id] || '';
    const graded = gradeStudentAnswer(userVal, q);
    return {
      question: q,
      questionNumber: qIdx + 1,
      userVal,
      isCorrect: graded.isCorrect,
      isPartial: graded.isPartial,
      matchReason: graded.matchReason,
      marksEarned: graded.marksEarned,
    };
  });
  const earnedMarks = scoredResults.reduce((acc, r) => acc + r.marksEarned, 0);
  const gradeInfo = estimateCambridgeGrade(earnedMarks, totalMarks, 'AS');
  const weakTopics = extractWeakTopicsFromResults(scoredResults, syllabus);
  const wrongCount = scoredResults.filter((r) => !r.isCorrect).length;
  const visibleResults = showWrongOnly
    ? scoredResults.filter((r) => !r.isCorrect)
    : scoredResults;
  const answeredCount = activeExam.questions.filter((q) => Boolean((answers[q.id] || '').trim())).length;
  const progressPct = Math.round((answeredCount / Math.max(1, activeExam.questions.length)) * 100);

  if (submitted) {
    return (
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        <section className="p-6 sk-card flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-xs text-[var(--sk-dim)]">
              {activeExam.title} · Attempt #{activeExam.attemptNumber} · 9709 AS Grading
            </div>
            <h1 className="font-display text-2xl font-bold text-[var(--sk-ink)]">
              Examination Results &amp; Mark Scheme
            </h1>
            <p className="text-sm text-[var(--sk-body)]">{gradeInfo.descriptor}</p>
          </div>

          <div className="flex items-center gap-6 shrink-0">
            <div className="text-right">
              <div className="text-xs text-[var(--sk-dim)]">Total Score</div>
              <div className="font-mono text-2xl font-bold tabular-nums text-[var(--sk-ink)]">
                {earnedMarks} / {totalMarks}{' '}
                <span className="text-sm font-normal text-[var(--sk-dim)]">
                  ({gradeInfo.percentage}%)
                </span>
              </div>
            </div>
            <div className="px-4 py-2 rounded-2xl bg-[var(--sk-surface)] border-2 border-[var(--sk-ink)] shadow-[3px_3px_0_var(--sk-ring)] text-center">
              <div className="text-[11px] font-semibold text-[var(--sk-pri)]">Est. Grade</div>
              <div className="font-display text-2xl font-extrabold text-[var(--sk-ink)]">
                {gradeInfo.grade}
              </div>
            </div>
          </div>
        </section>

        {weakTopics.length > 0 ? (
          <section
            aria-label="Topics to Revise Based on Wrong Answers"
            className="p-6 rounded-[18px] bg-white border-2 border-[var(--sk-acc)] shadow-[4px_5px_0_var(--sk-acc-line)] space-y-4"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h2 className="font-display text-base font-bold text-[var(--sk-ink)]">
                  Topics to Study Based on Your Wrong Answers
                </h2>
                <p className="text-xs text-[var(--sk-body)] mt-0.5">
                  You missed {wrongCount} {wrongCount === 1 ? 'question' : 'questions'} across{' '}
                  {weakTopics.length} P1 syllabus {weakTopics.length === 1 ? 'topic' : 'topics'}. Jump directly to the corresponding 9709 notes:
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {weakTopics.map((wt) => (
                <div
                  key={wt.topicId}
                  className="p-4 sk-card-soft flex items-center justify-between gap-3"
                >
                  <div className="min-w-0">
                    <div className="text-[11px] font-medium text-[var(--sk-dim)]">
                      Chapter {wt.chapterId}: {wt.chapterTitle}
                    </div>
                    <div className="font-display text-sm font-bold text-[var(--sk-ink)] truncate">
                      <span className="font-mono text-[var(--sk-pri)] mr-1.5">{wt.topicId}</span>
                      {wt.topicTitle}
                    </div>
                    <div className="text-xs font-mono font-semibold text-[var(--sk-acc-ink)] mt-0.5 tabular-nums">
                      {wt.marksLost} {wt.marksLost === 1 ? 'mark' : 'marks'} missed
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      onNavigate({
                        view: 'notes',
                        subject,
                        chapterId: wt.chapterId,
                        topicId: wt.topicId,
                      })
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold sk-btn-primary cursor-pointer shrink-0"
                  >
                    Study {wt.topicId} Notes
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </section>
        ) : (
          <section className="p-4 bg-emerald-50 border-2 border-emerald-700 rounded-2xl flex items-center gap-2 text-xs font-bold text-emerald-900 shadow-[3px_3px_0_#BBF7D0]">
            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
            100% accuracy on this P1 paper — no weak syllabus topics detected.
          </section>
        )}

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={(e) => {
                triggerSakugaBurst(e, getActiveSubjectVfxVariant('primary'), 'FRESH!');
                retryWithNewQuestions();
              }}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold sk-btn-primary cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Retry with New Questions
            </button>
            <button
              type="button"
              onClick={() => retakeExactExam(activeExam)}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold sk-btn-secondary cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Retake Exact Paper
            </button>
            {wrongCount > 0 && (
              <div
                role="group"
                aria-label="Filter results"
                className="flex gap-1 sk-tabs"
              >
                <button
                  type="button"
                  data-active={!showWrongOnly}
                  onClick={() => setShowWrongOnly(false)}
                  className="px-3 py-1 text-xs font-semibold cursor-pointer sk-tab"
                >
                  All Questions ({scoredResults.length})
                </button>
                <button
                  type="button"
                  data-active={showWrongOnly}
                  onClick={() => setShowWrongOnly(true)}
                  className="px-3 py-1 text-xs font-semibold cursor-pointer sk-tab"
                >
                  Wrong Answers Only ({wrongCount})
                </button>
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={() => {
              setActiveExam(null);
              onNavigate({ view: 'practice', subject, mode: 'practice-test' });
            }}
            className="px-4 py-2 text-xs font-bold sk-btn-ink cursor-pointer"
          >
            Back to All Practice Tests
          </button>
        </div>

        <section className="space-y-4">
          {visibleResults.map((res) => (
            <article
              key={res.question.id}
              className="p-5 sk-card space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--sk-dim)]">
                  <span className="font-mono font-bold text-[var(--sk-ink)]">
                    Q{res.questionNumber}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>
                    Topic {res.question.topicId} {res.question.topicTitle}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{getQuestionFormatLabel(res.question.questionType)}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono">{res.question.sourceRef}</span>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold">
                  {res.isCorrect ? (
                    <span className="inline-flex items-center gap-1 text-emerald-700">
                      <CheckCircle2 className="w-4 h-4" />
                      {res.marksEarned}/{res.question.marks} marks
                    </span>
                  ) : res.isPartial ? (
                    <span className="inline-flex items-center gap-1 text-amber-700">
                      <CheckCircle2 className="w-4 h-4" />
                      {res.marksEarned}/{res.question.marks} marks (Partial)
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-rose-700">
                      <XCircle className="w-4 h-4" />
                      0/{res.question.marks} marks
                    </span>
                  )}
                </div>
              </div>
              {res.matchReason && (
                <div className="text-[11px] font-medium text-[var(--sk-dim)] bg-[var(--sk-chip)] border border-[var(--sk-line)] rounded-lg px-2.5 py-1 inline-block">
                  {res.matchReason}
                </div>
              )}

              <p className="text-sm text-[var(--sk-ink)] leading-relaxed">
                <MathText text={res.question.question} />
              </p>

              <div className="grid sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 sk-card-soft">
                  <span className="text-[var(--sk-dim)] block mb-0.5">Your Answer</span>
                  <span className="font-mono font-semibold text-[var(--sk-ink)]">
                    {res.userVal ? <MathText text={res.userVal} /> : '(No answer entered)'}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-emerald-50 border-[1.5px] border-emerald-200">
                  <span className="text-emerald-800 block mb-0.5">Official Answer</span>
                  <span className="font-mono font-semibold text-emerald-900">
                    <MathText text={res.question.correctAnswer} />
                    {res.question.unit ? ` ${res.question.unit}` : ''}
                  </span>
                </div>
              </div>

              <div className="p-3.5 sk-card-soft space-y-2">
                <div className="text-xs font-bold text-[var(--sk-ink)]">
                  Cambridge 9709 Mark Scheme &amp; Working
                </div>
                <ul className="space-y-1 text-xs text-[var(--sk-body)]">
                  {res.question.markScheme.map((ms, mi) => (
                    <li key={mi} className="flex gap-2">
                      <span className="font-mono font-bold text-[var(--sk-pri)] shrink-0">
                        {ms.code}
                      </span>
                      <span>
                        <MathText text={ms.detail} />
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-[var(--sk-dim)] pt-1 border-t border-[var(--sk-line)]">
                  <MathText text={res.question.fullSolution} />
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-end gap-3">
                {!res.isCorrect ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        onNavigate({
                          view: 'practice',
                          subject,
                          mode: 'topical',
                          topicId: res.question.topicId,
                        })
                      }
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold sk-btn-subtle cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5" />
                      More Topic {res.question.topicId} Questions
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        onNavigate({
                          view: 'notes',
                          subject,
                          chapterId: res.question.chapterId,
                          topicId: res.question.topicId,
                        })
                      }
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold sk-btn-primary cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      Study Topic {res.question.topicId} Notes
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={() =>
                      onNavigate({
                        view: 'notes',
                        subject,
                        chapterId: res.question.chapterId,
                        topicId: res.question.topicId,
                      })
                    }
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--sk-pri)] hover:text-[var(--sk-ink)] cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    Revise Topic {res.question.topicId} Notes
                  </button>
                )}
              </div>
            </article>
          ))}
        </section>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Exam Top Bar */}
      <section className="p-4 sk-card space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-base font-bold text-[var(--sk-ink)]">
              {activeExam.title}
            </h1>
            <div className="text-xs text-[var(--sk-dim)] flex flex-wrap items-center gap-2 mt-0.5">
              <span>
                Question {currentIdx + 1} of {activeExam.questions.length}
              </span>
              <span aria-hidden="true">·</span>
              <span className="font-mono font-semibold text-[var(--sk-ink)]">
                Attempt #{activeExam.attemptNumber}
              </span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1">
                <Calculator className="w-3.5 h-3.5 text-[var(--sk-pri)]" />
                {currentQ.paperType}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenFormulaSheet}
              className="px-3 py-1.5 text-xs font-semibold sk-btn-subtle cursor-pointer whitespace-nowrap"
            >
              Formula Sheet
            </button>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[var(--sk-surface)] border-[1.5px] border-[var(--sk-ink)] font-mono text-xs font-bold tabular-nums text-[var(--sk-ink)]">
              <Clock className="w-3.5 h-3.5 text-[var(--sk-pri)]" />
              {formatCountdown(secondsLeft)}
            </div>
            <button
              type="button"
              onClick={(e) => {
                triggerSakugaBurst(e, 'emerald', 'SUBMIT!');
                setSubmitted(true);
              }}
              className="px-4 py-1.5 text-xs font-bold sk-btn-primary cursor-pointer whitespace-nowrap"
            >
              Submit Paper
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="h-2.5 flex-1 sk-progress-track">
            <div
              className="h-full sk-progress-fill rounded-full"
              style={{ width: `${Math.max(4, progressPct)}%` }}
            />
          </div>
          <span className="font-mono text-[11px] font-semibold tabular-nums text-[var(--sk-dim)] shrink-0">
            {answeredCount}/{activeExam.questions.length} answered
          </span>
        </div>
      </section>

      {/* Question Card */}
      <section className="p-6 sk-card space-y-5">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <div className="text-xs text-[var(--sk-dim)] flex flex-wrap items-center gap-2">
            <span className="font-mono font-bold text-[var(--sk-ink)]">
              Question {currentIdx + 1}
            </span>
            <span aria-hidden="true">·</span>
            <span>
              {currentQ.topicId} {currentQ.topicTitle}
            </span>
            <span aria-hidden="true">·</span>
            <span className="font-mono font-semibold text-[var(--sk-pri-hover)]">
              {currentQ.paperModule}
            </span>
            <span aria-hidden="true">·</span>
            <span className="font-semibold text-[var(--sk-pri)]">
              {getQuestionFormatLabel(currentQ.questionType)}
            </span>
          </div>
          <span className="font-mono text-xs font-bold tabular-nums text-[var(--sk-dim)]">
            [{currentQ.marks} {currentQ.marks === 1 ? 'mark' : 'marks'}]
          </span>
        </div>

        <p className="text-base text-[var(--sk-ink)] leading-relaxed">
          <MathText text={currentQ.question} />
        </p>

        {currentQ.questionType === 'mcq' && currentQ.options && currentQ.options.length > 0 ? (
          <fieldset className="pt-2 space-y-2.5">
            <legend className="text-xs font-semibold text-[var(--sk-dim)] mb-2">
              Select the correct answer
            </legend>
            <div className="grid sm:grid-cols-2 gap-3">
              {currentQ.options.map((opt, optIdx) => {
                const optionLetter = String.fromCharCode(65 + optIdx);
                const selected = answers[currentQ.id] === opt;
                return (
                  <label
                    key={`${currentQ.id}-opt-${optIdx}`}
                    className={`flex items-center gap-3 p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                      selected
                        ? 'bg-[var(--sk-surface)] border-[var(--sk-ink)] text-[var(--sk-ink)] shadow-[3px_3px_0_var(--sk-ring)]'
                        : 'bg-[var(--sk-chip)] border-[var(--sk-line)] text-[var(--sk-body)] hover:border-[var(--sk-pri-bright)] hover:bg-white'
                    }`}
                  >
                    <input
                      type="radio"
                      name={`mcq-${currentQ.id}`}
                      value={opt}
                      checked={selected}
                      onChange={() =>
                        setAnswers((prev) => ({ ...prev, [currentQ.id]: opt }))
                      }
                      className="sr-only"
                    />
                    <span
                      className={`w-7 h-7 rounded-lg font-mono text-xs font-bold flex items-center justify-center shrink-0 border-[1.5px] ${
                        selected
                          ? 'bg-[var(--sk-pri-bright)] text-white border-[var(--sk-ink)]'
                          : 'bg-white text-[var(--sk-ink)] border-[var(--sk-line)]'
                      }`}
                    >
                      {optionLetter}
                    </span>
                    <span className="text-sm font-semibold">
                      <MathText text={opt} />
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        ) : (
          <div className="pt-2">
            <label
              htmlFor={`exam-ans-${currentQ.id}`}
              className="block text-xs font-semibold text-[var(--sk-dim)] mb-1.5"
            >
              Your Final Answer {currentQ.unit ? `(in ${currentQ.unit})` : ''}
            </label>
            <input
              id={`exam-ans-${currentQ.id}`}
              type="text"
              value={answers[currentQ.id] || ''}
              onChange={(e) =>
                setAnswers((prev) => ({ ...prev, [currentQ.id]: e.target.value }))
              }
              placeholder={
                currentQ.questionType === 'text'
                  ? 'Enter simplified fraction (a/b) or exact decimal'
                  : 'Enter exact value or fraction (e.g. 5/2)'
              }
              className="w-full max-w-md px-3.5 py-2.5 text-sm font-mono sk-input"
            />
          </div>
        )}

        <div className="pt-4 border-t border-[var(--sk-line)] flex items-center justify-between gap-4">
          <button
            type="button"
            disabled={currentIdx === 0}
            onClick={() => setCurrentIdx((i) => Math.max(0, i - 1))}
            className="px-4 py-2 text-xs font-semibold sk-btn-subtle disabled:opacity-40 cursor-pointer"
          >
            Previous Question
          </button>

          {currentIdx < activeExam.questions.length - 1 ? (
            <button
              type="button"
              onClick={() =>
                setCurrentIdx((i) => Math.min(activeExam.questions.length - 1, i + 1))
              }
              className="px-4 py-2 text-xs font-bold sk-btn-ink cursor-pointer"
            >
              Next Question
            </button>
          ) : (
            <button
              type="button"
              onClick={(e) => {
                triggerSakugaBurst(e, 'emerald', 'DONE!');
                setSubmitted(true);
              }}
              className="px-4 py-2 text-xs font-bold sk-btn-primary cursor-pointer"
            >
              Finish &amp; Grade Paper
            </button>
          )}
        </div>
      </section>

      {/* Question Navigator Grid */}
      <section className="p-4 sk-card">
        <div className="text-xs font-semibold text-[var(--sk-dim)] mb-2.5">
          Question Navigator
        </div>
        <div className="flex flex-wrap gap-2">
          {activeExam.questions.map((q, idx) => {
            const answered = Boolean((answers[q.id] || '').trim());
            const active = idx === currentIdx;
            return (
              <button
                key={q.id}
                type="button"
                onClick={() => setCurrentIdx(idx)}
                className={`w-9 h-9 text-xs font-mono font-bold rounded-xl border-2 cursor-pointer transition-all ${
                  active
                    ? 'bg-[var(--sk-pri-bright)] text-white border-[var(--sk-ink)] shadow-[2px_2px_0_var(--sk-ring)]'
                    : answered
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-600'
                      : 'bg-[var(--sk-chip)] text-[var(--sk-body)] border-[var(--sk-line)] hover:border-[var(--sk-ink)]'
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </section>
    </main>
  );
};
