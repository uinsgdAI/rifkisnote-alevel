import test from 'node:test';
import assert from 'node:assert/strict';
import {
  parseAppRoute,
  buildAppRoutePath,
  resolvePracticeSection,
  evaluateStudentAnswer,
  estimateCambridgeGrade,
  gradeStudentAnswer,
  mapPaperNumberToModule,
  parsePapaCambridgeFilename,
  parsePaperReference,
  extractWeakTopicsFromResults,
  findMatchingSyllabusTopics,
} from './examLogic';
import {
  isBackgroundWarmupPaused,
  setBackgroundWarmupPaused,
} from './backgroundPreloader';
import {
  buildGoogleDocsViewerUrl,
  FALLBACK_SESSIONS,
  generateSessionPaperFallback,
  isAllowedPapaCambridgePdfUrl,
  isAllowedPdfProxyUrl,
  parsePapersFromHtml,
  parseSessionsFromHtml,
  resolvePdfIframeUrl,
} from './papacambridge';
import {
  createSyllabusShell9709,
  loadAllP1SyllabusChapters,
  loadP1ChapterNotes,
  PAPER_MODULES_9709,
} from '../data/syllabus9709';
import { PRACTICE_BANK_9709 } from '../data/practiceBank9709';
import { generateMockExamQuestions } from './questionGenerator';
import {
  computePinchZoomScale,
  computeScrollThumbMetrics,
  computeScrollTopFromTrackY,
  countTotalStrokes,
  createInitialAnnotationHistory,
  eraseStrokesNearPoint,
  estimateVisiblePage,
  hasPdfHeader,
  normalizePointerToPage,
  parseAnnotationsJson,
  pushAnnotationHistory,
  redoAnnotationHistory,
  snapClientPointToRulerEdge,
  undoAnnotationHistory,
  type AnnotationStroke,
} from './pdfAnnotations';
import { buildR2PdfObjectKey, handleApiRequest } from './workerApi';

test('parseAppRoute and buildAppRoutePath handle 9709 notes, past papers, and practice routes cleanly', () => {
  assert.deepEqual(parseAppRoute('/'), {
    view: 'notes',
    subject: '9709',
    chapterId: 1,
    topicId: '1.1',
  });
  assert.deepEqual(parseAppRoute('/notes/9709/8/8.2'), {
    view: 'notes',
    subject: '9709',
    chapterId: 8,
    topicId: '8.2',
  });
  assert.deepEqual(parseAppRoute('/notes/9709/6/6.3/'), {
    view: 'notes',
    subject: '9709',
    chapterId: 6,
    topicId: '6.3',
  });
  assert.deepEqual(parseAppRoute('/past-papers/9709/2026-may-june'), {
    view: 'past-papers',
    subject: '9709',
    sessionSlug: '2026-may-june',
    paperFilename: undefined,
  });
  assert.deepEqual(
    parseAppRoute('/past-papers/9709/2026-may-june', '?paper=9709_s26_gt.pdf'),
    {
      view: 'past-papers',
      subject: '9709',
      sessionSlug: '2026-may-june',
      paperFilename: '9709_s26_gt.pdf',
    }
  );
  assert.deepEqual(parseAppRoute('/practice/9709/mock-p1-full'), {
    view: 'practice',
    subject: '9709',
    mode: 'mock-p1-full',
    topicId: undefined,
  });

  assert.equal(
    buildAppRoutePath({ view: 'notes', subject: '9709', chapterId: 8, topicId: '8.2' }),
    '/notes/9709/8/8.2'
  );
  assert.equal(
    buildAppRoutePath({
      view: 'past-papers',
      subject: '9709',
      sessionSlug: '2026-may-june',
      paperFilename: '9709_s26_gt.pdf',
    }),
    '/past-papers/9709/2026-may-june?paper=9709_s26_gt.pdf'
  );
  assert.equal(
    buildAppRoutePath({ view: 'practice', subject: '9709', mode: 'mock-p1-full' }),
    '/practice/9709/mock-p1-full'
  );
  assert.equal(resolvePracticeSection('mock-p1-full'), 'practice-test');
});

test('evaluateStudentAnswer handles fractions, negatives, and Cambridge rounding tolerances', () => {
  assert.equal(
    evaluateStudentAnswer('4/11', {
      questionType: 'text',
      correctAnswer: '4/11',
      acceptedAnswers: ['4/11'],
      numericAnswer: 4 / 11,
      tolerance: 0.0001,
    }),
    true
  );
  assert.equal(
    evaluateStudentAnswer('0.16', {
      questionType: 'text',
      correctAnswer: '4/25',
      acceptedAnswers: ['4/25', '0.16'],
      numericAnswer: 0.16,
      tolerance: 0.001,
    }),
    true
  );
  assert.equal(
    evaluateStudentAnswer('25.1', {
      questionType: 'numeric',
      correctAnswer: '25.13',
      numericAnswer: 25.13,
      tolerance: 0.02,
    }),
    true
  );
  assert.equal(
    evaluateStudentAnswer('999', {
      questionType: 'numeric',
      correctAnswer: '25.13',
      numericAnswer: 25.13,
      tolerance: 0.02,
    }),
    false
  );
});

test('estimateCambridgeGrade reflects 9709 AS (A-U) and A-Level (A*-U) thresholds', () => {
  assert.equal(estimateCambridgeGrade(90, 100, 'AS').grade, 'A');
  assert.equal(estimateCambridgeGrade(75, 100, 'AS').grade, 'A');
  assert.equal(estimateCambridgeGrade(65, 100, 'AS').grade, 'B');
  assert.equal(estimateCambridgeGrade(52, 100, 'AS').grade, 'C');
  assert.equal(estimateCambridgeGrade(40, 100, 'AS').grade, 'D');
  assert.equal(estimateCambridgeGrade(30, 100, 'AS').grade, 'E');
  assert.equal(estimateCambridgeGrade(20, 100, 'AS').grade, 'U');
  assert.equal(estimateCambridgeGrade(90, 100, 'ALevel').grade, 'A*');
});

test('mapPaperNumberToModule, parsePaperReference, and parsePapaCambridgeFilename classify 9709 papers accurately', () => {
  assert.equal(mapPaperNumberToModule('1'), 'P1');
  assert.equal(mapPaperNumberToModule('2'), 'P2');
  assert.equal(mapPaperNumberToModule('3'), 'P3');
  assert.equal(mapPaperNumberToModule('4'), 'M1');
  assert.equal(mapPaperNumberToModule('5'), 'S1');
  assert.equal(mapPaperNumberToModule('6'), 'S2');
  assert.equal(mapPaperNumberToModule('9'), 'All');

  const ref = parsePaperReference('9709/12/M/J/24');
  assert.ok(ref);
  assert.equal(ref.sessionSlug, '2024-may-june');
  assert.equal(ref.paperNumber, '1');
  assert.equal(ref.variant, '2');
  assert.equal(ref.paperComponent, 'P1');
  assert.equal(ref.qpFilename, '9709_s24_qp_12.pdf');
  assert.equal(ref.msFilename, '9709_s24_ms_12.pdf');

  const qp1 = parsePapaCambridgeFilename(
    '9709_s24_qp_12.pdf',
    'https://pastpapers.papacambridge.com/directories/CAIE/CAIE-pastpapers/upload/9709_s24_qp_12.pdf',
    '2024-may-june'
  );
  assert.equal(qp1.docType, 'QP');
  assert.equal(qp1.paperNumber, '1');
  assert.equal(qp1.variant, '2');
  assert.equal(qp1.paperComponent, 'P1');

  const ms5 = parsePapaCambridgeFilename(
    '9709_w23_ms_52.pdf',
    'https://pastpapers.papacambridge.com/directories/CAIE/CAIE-pastpapers/upload/9709_w23_ms_52.pdf',
    '2023-oct-nov'
  );
  assert.equal(ms5.docType, 'MS');
  assert.equal(ms5.paperNumber, '5');
  assert.equal(ms5.paperComponent, 'S1');

  const gt = parsePapaCambridgeFilename(
    '9709_s26_gt.pdf',
    'https://pastpapers.papacambridge.com/directories/CAIE/CAIE-pastpapers/upload/9709_s26_gt.pdf',
    '2026-may-june'
  );
  assert.equal(gt.docType, 'GT');
  assert.equal(gt.paperNumber, '-');
  assert.equal(gt.paperComponent, 'All');

  const pre2010 = parsePapaCambridgeFilename(
    '9709_s05_qp_4.pdf',
    'https://pastpapers.papacambridge.com/directories/CAIE/CAIE-pastpapers/upload/9709_s05_qp_4.pdf',
    '2005-jun'
  );
  assert.equal(pre2010.docType, 'QP');
  assert.equal(pre2010.paperNumber, '4');
  assert.equal(pre2010.variant, '-');
  assert.equal(pre2010.paperComponent, 'M1');
});

test('9709 syllabus exposes P1 live (8 chapters, 24 subtopics) with lazy loading and marks P2/P3/M1/S1/S2 Coming Soon', async () => {
  assert.equal(PAPER_MODULES_9709.length, 6);
  assert.equal(PAPER_MODULES_9709[0].code, 'P1');
  assert.equal(PAPER_MODULES_9709[0].status, 'live');
  for (const mod of PAPER_MODULES_9709.slice(1)) {
    assert.equal(mod.status, 'coming-soon', `Expected ${mod.code} to be coming-soon`);
  }

  const shell = createSyllabusShell9709();
  assert.equal(shell.length, 8);
  assert.equal(shell[0].subtopics[0].isLoaded, false);

  for (const chId of [1, 2, 3, 4, 5, 6, 7, 8]) {
    const chNotes = await loadP1ChapterNotes(chId);
    assert.ok(chNotes.length >= 2, `Expected >=2 notes in Ch ${chId}`);
    assert.ok(
      chNotes.some((n) => Array.isArray(n.diagrams) && n.diagrams.length > 0),
      `Expected inline SVG diagrams metadata in Ch ${chId}`
    );
  }

  const fullChapters = await loadAllP1SyllabusChapters();
  const allSubtopics = fullChapters.flatMap((c) => c.subtopics);
  assert.equal(fullChapters.length, 8);
  assert.equal(allSubtopics.length, 24);

  for (let i = 0; i < fullChapters.length; i += 1) {
    assert.equal(fullChapters[i].id, i + 1);
    assert.equal(fullChapters[i].paperCode, 'P1');
    assert.ok(fullChapters[i].subtopics.length >= 2);
  }

  for (const topic of allSubtopics) {
    assert.equal(topic.paperCode, 'P1');
    assert.equal(topic.isLoaded, true);
    assert.ok(topic.title.length > 0, `Missing title on ${topic.id}`);
    assert.ok(topic.objectives.length > 0, `Missing objectives on ${topic.id}`);
    assert.ok(topic.keyFormulas.length > 0, `Missing keyFormulas on ${topic.id}`);
    assert.ok(topic.studyNotes.length >= 1, `Expected >=1 studyNote on ${topic.id}`);
    assert.ok(topic.workedExamples.length >= 2, `Expected >=2 workedExamples on ${topic.id}`);
    assert.ok(topic.commonMistakes.length >= 2, `Expected >=2 commonMistakes on ${topic.id}`);
    assert.ok(topic.quickCheck.prompt.length > 0, `Missing quickCheck on ${topic.id}`);
    assert.ok(
      typeof topic.quickCheck.marks === 'number' && topic.quickCheck.marks >= 1,
      `Invalid quickCheck marks on ${topic.id}`
    );
    assert.equal(
      topic.workedExamples.some((ex) => /placeholder|todo|tbd/i.test(ex.question + ex.steps.join(' '))),
      false,
      `Draft placeholder found in workedExamples for ${topic.id}`
    );
  }
});

test('PRACTICE_BANK_9709 covers Chapters 1-8 and self-grades accurately', () => {
  assert.ok(PRACTICE_BANK_9709.length >= 32);
  for (const chId of [1, 2, 3, 4, 5, 6, 7, 8]) {
    assert.ok(
      PRACTICE_BANK_9709.some((q) => q.chapterId === chId),
      `Expected practiceBank9709 questions for Chapter ${chId}`
    );
  }
  for (const q of PRACTICE_BANK_9709) {
    assert.equal(q.paperModule, 'P1');
    assert.equal(
      evaluateStudentAnswer(q.correctAnswer, q),
      true,
      `Practice bank question ${q.id} failed self-check for "${q.correctAnswer}"`
    );
    if (q.questionType === 'mcq') {
      assert.ok(q.options && q.options.length === 4, `Expected 4 options on ${q.id}`);
      assert.ok(q.options.includes(q.correctAnswer), `Correct answer missing from options on ${q.id}`);
    }
  }
});

test('extractWeakTopicsFromResults and findMatchingSyllabusTopics map 9709 topics accurately', async () => {
  const fullChapters = await loadAllP1SyllabusChapters();
  const weak = extractWeakTopicsFromResults(
    [
      {
        question: { chapterId: 3, topicId: '3.3', topicTitle: 'Circles', marks: 3, sourceRef: '9709 P1 Syllabus 3.3' },
        isCorrect: false,
        marksEarned: 0,
      },
      {
        question: { chapterId: 8, topicId: '8.2', topicTitle: 'Definite Integrals & Areas', marks: 5, sourceRef: '9709 P1 Syllabus 8.2' },
        isCorrect: false,
        marksEarned: 1,
      },
      {
        question: { chapterId: 1, topicId: '1.1', topicTitle: 'Completing the Square', marks: 2, sourceRef: '9709 P1 Syllabus 1.1' },
        isCorrect: true,
        marksEarned: 2,
      },
    ],
    fullChapters
  );

  assert.equal(weak.length, 2);
  assert.equal(weak[0].topicId, '8.2');
  assert.equal(weak[0].marksLost, 4);
  assert.equal(weak[0].chapterTitle, 'Integration');
  assert.equal(weak[1].topicId, '3.3');
  assert.equal(weak[1].marksLost, 3);
  assert.equal(weak[1].chapterTitle, 'Coordinate Geometry');

  const quadMatches = findMatchingSyllabusTopics('quadratic discriminant', fullChapters);
  assert.ok(quadMatches.some((m) => m.chapterId === 1 && m.topic.id === '1.2'));

  const calcMatches = findMatchingSyllabusTopics('volume of revolution', fullChapters);
  assert.ok(calcMatches.some((m) => m.chapterId === 8 && m.topic.id === '8.3'));
});

test('PapaCambridge 9709 utilities parse HTML sessions/papers, enforce 9709-only PDF proxy URLs, and provide static fallback', () => {
  assert.ok(FALLBACK_SESSIONS.length >= 20);
  assert.ok(FALLBACK_SESSIONS.some((s) => s.slug === '2026-may-june'));
  assert.ok(FALLBACK_SESSIONS.some((s) => s.slug === '2024-oct-nov'));
  assert.ok(FALLBACK_SESSIONS.some((s) => s.slug === '2001-nov'));

  const s26Papers = generateSessionPaperFallback('2026-may-june', '9709');
  assert.ok(s26Papers.some((p) => p.filename === '9709_s26_gt.pdf'));
  assert.ok(s26Papers.some((p) => p.filename === '9709_s26_qp_12.pdf' && p.paperComponent === 'P1'));
  assert.ok(s26Papers.some((p) => p.filename === '9709_s26_qp_32.pdf' && p.paperComponent === 'P3'));
  assert.ok(s26Papers.some((p) => p.filename === '9709_s26_qp_42.pdf' && p.paperComponent === 'M1'));
  assert.ok(s26Papers.some((p) => p.filename === '9709_s26_qp_52.pdf' && p.paperComponent === 'S1'));
  assert.ok(s26Papers.some((p) => p.filename === '9709_s26_qp_62.pdf' && p.paperComponent === 'S2'));

  const pre2010 = generateSessionPaperFallback('2005-jun', '9709');
  assert.ok(pre2010.some((p) => p.filename === '9709_s05_qp_1.pdf' && p.variant === '-'));
  assert.ok(pre2010.some((p) => p.filename === '9709_s05_er.pdf'));

  const sampleSessionHtml = `
    <a href="https://pastpapers.papacambridge.com/papers/caie/as-and-a-level-mathematics-9709-2026-may-june">May June 2026</a>
    <a href="/papers/caie/as-and-a-level-mathematics-9709-mathematics-97092024-oct-nov">Oct Nov 2024</a>
    <a href="/papers/caie/as-and-a-level-mathematics-9709-syllabus">Syllabus</a>
  `;
  const parsedSessions = parseSessionsFromHtml(sampleSessionHtml, '9709');
  assert.equal(parsedSessions.length, 2);
  assert.equal(parsedSessions[0].slug, '2026-may-june');
  assert.equal(parsedSessions[1].slug, '2024-oct-nov');
  assert.equal(parsedSessions[1].upstreamSlug, 'mathematics-97092024-oct-nov');

  const samplePaperHtml = `
    <a href="https://pastpapers.papacambridge.com/directories/CAIE/CAIE-pastpapers/upload/9709_s26_gt.pdf#view=FitH">GT</a>
    <a href="download_file.php?files=https%3A%2F%2Fpastpapers.papacambridge.com%2Fdirectories%2FCAIE%2FCAIE-pastpapers%2Fupload%2F9709_s26_qp_12.pdf">QP12</a>
    <a href="https://pastpapers.papacambridge.com/directories/CAIE/CAIE-pastpapers/upload/0580_s26_gt.pdf">0580 GT</a>
  `;
  const parsedPapers = parsePapersFromHtml(samplePaperHtml, '2026-may-june', '9709');
  assert.equal(parsedPapers.length, 2);
  assert.equal(parsedPapers[0].filename, '9709_s26_gt.pdf');
  assert.equal(parsedPapers[0].docType, 'GT');
  assert.equal(parsedPapers[1].filename, '9709_s26_qp_12.pdf');
  assert.equal(parsedPapers[1].paperComponent, 'P1');

  const gtWithHash =
    'https://pastpapers.papacambridge.com/directories/CAIE/CAIE-pastpapers/upload/9709_s26_gt.pdf#view=FitH';
  const allowedGt = isAllowedPdfProxyUrl(gtWithHash);
  assert.ok(allowedGt);
  assert.equal(allowedGt.hash, '');
  assert.ok(isAllowedPapaCambridgePdfUrl(gtWithHash));

  assert.equal(
    isAllowedPdfProxyUrl('https://pastpapers.papacambridge.com/directories/CAIE/CAIE-pastpapers/upload/0580_s24_qp_42.pdf'),
    null
  );
  assert.equal(isAllowedPdfProxyUrl('https://evil.example.com/9709_s26_gt.pdf'), null);
  assert.equal(isAllowedPdfProxyUrl('http://pastpapers.papacambridge.com/directories/CAIE/CAIE-pastpapers/upload/9709_s26_gt.pdf'), null);

  const samplePdf =
    'https://pastpapers.papacambridge.com/directories/CAIE/CAIE-pastpapers/upload/9709_s26_gt.pdf';
  assert.equal(
    buildGoogleDocsViewerUrl(samplePdf),
    `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(samplePdf)}`
  );
  assert.equal(
    resolvePdfIframeUrl(samplePdf, { apiProxyAvailable: true, viewerMode: 'proxy' }),
    `/api/papacambridge/pdf?url=${encodeURIComponent(samplePdf)}`
  );
  assert.equal(
    resolvePdfIframeUrl(samplePdf, { apiProxyAvailable: false, viewerMode: 'proxy' }),
    `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(samplePdf)}`
  );
});

test('generateMockExamQuestions generates valid 9709 P1 questions across all modes and avoids repeats', () => {
  const modes = ['mock-p1-full', 'mock-p1-algebra', 'mock-p1-calculus', 'topical'] as const;

  for (const mode of modes) {
    const avoid = new Set<string>();
    const attempt1 = generateMockExamQuestions({ mode, attemptNumber: 1, avoidSignatures: avoid });
    for (const sig of attempt1.signatures) avoid.add(sig);

    const attempt2 = generateMockExamQuestions({ mode, attemptNumber: 2, avoidSignatures: avoid });
    for (const sig of attempt2.signatures) avoid.add(sig);

    const attempt3 = generateMockExamQuestions({ mode, attemptNumber: 3, avoidSignatures: avoid });

    assert.ok(attempt1.questions.length >= 6, `Expected >=6 questions for ${mode}`);
    assert.equal(attempt2.questions.length, attempt1.questions.length);
    assert.equal(attempt3.questions.length, attempt1.questions.length);

    for (const q of [...attempt1.questions, ...attempt2.questions, ...attempt3.questions]) {
      assert.equal(q.paperModule, 'P1');
      assert.equal(
        evaluateStudentAnswer(q.correctAnswer, q),
        true,
        `Generated question ${q.id} (${q.topicId}) failed self-check for answer ${q.correctAnswer}`
      );
      if (q.questionType === 'mcq') {
        assert.ok(q.options && q.options.length === 4, `Expected 4 options on ${q.id}`);
        assert.ok(
          q.options.includes(q.correctAnswer),
          `Correct answer "${q.correctAnswer}" missing from options ${JSON.stringify(q.options)} on ${q.id}`
        );
      }
    }

    const sig1 = new Set(attempt1.signatures);
    const sig2 = new Set(attempt2.signatures);
    const overlap12 = [...sig2].filter((s) => sig1.has(s));
    assert.ok(
      overlap12.length < attempt1.questions.length,
      `Retry attempt 2 for ${mode} should differ from attempt 1`
    );
  }
});

test('PDF annotation helpers normalize coordinates, erase hit strokes, and handle undo/redo & JSON parsing', () => {
  const pt = normalizePointerToPage(350, 200, { left: 100, top: 100, width: 500, height: 400 });
  assert.deepEqual(pt, { x: 0.5, y: 0.25 });

  const clamped = normalizePointerToPage(50, 700, { left: 100, top: 100, width: 500, height: 400 });
  assert.deepEqual(clamped, { x: 0, y: 1 });

  const s1: AnnotationStroke = {
    id: 'stroke-1',
    tool: 'pen',
    color: '#1d4ed8',
    size: 3.5,
    points: [
      { x: 0.1, y: 0.1 },
      { x: 0.4, y: 0.1 },
    ],
  };
  const s2: AnnotationStroke = {
    id: 'stroke-2',
    tool: 'highlighter',
    color: '#facc15',
    size: 18,
    points: [
      { x: 0.8, y: 0.8 },
      { x: 0.9, y: 0.8 },
    ],
  };

  const erased = eraseStrokesNearPoint([s1, s2], { x: 0.25, y: 0.105 }, 0.02);
  assert.equal(erased.removedAny, true);
  assert.equal(erased.remaining.length, 1);
  assert.equal(erased.remaining[0].id, 'stroke-2');

  let hist = createInitialAnnotationHistory({});
  hist = pushAnnotationHistory(hist, { 1: [s1] });
  hist = pushAnnotationHistory(hist, { 1: [s1, s2] });
  assert.equal(countTotalStrokes(hist.present), 2);

  hist = undoAnnotationHistory(hist);
  assert.equal(countTotalStrokes(hist.present), 1);
  assert.equal(hist.present[1][0].id, 'stroke-1');

  hist = redoAnnotationHistory(hist);
  assert.equal(countTotalStrokes(hist.present), 2);

  const roundtrip = parseAnnotationsJson(JSON.stringify(hist.present));
  assert.equal(countTotalStrokes(roundtrip), 2);
  assert.deepEqual(parseAnnotationsJson('{not-valid-json'), {});

  assert.equal(hasPdfHeader(new TextEncoder().encode('%PDF-1.4\n%...')), true);
  assert.equal(hasPdfHeader(new TextEncoder().encode('<!DOCTYPE html><html>')), false);
  assert.equal(hasPdfHeader(new Uint8Array([1, 2, 3])), false);
});

test('Cloudflare Worker handleApiRequest routes 9709 /api/* cleanly and prefixes R2 keys with alevel/mirror/', async () => {
  const spaRes = await handleApiRequest(new Request('https://alevel.rifkisnote.my.id/notes/9709/8/8.2'));
  assert.equal(spaRes, null);

  const healthRes = await handleApiRequest(new Request('https://alevel.rifkisnote.my.id/api/health'));
  assert.ok(healthRes);
  assert.equal(healthRes.status, 200);
  assert.deepEqual(await healthRes.json(), {
    ok: true,
    runtime: 'cloudflare-worker',
    subject: '9709',
  });

  const badSubjectRes = await handleApiRequest(
    new Request('https://alevel.rifkisnote.my.id/api/papacambridge/sessions?subject=0580')
  );
  assert.ok(badSubjectRes);
  assert.equal(badSubjectRes.status, 400);

  const badSessionRes = await handleApiRequest(
    new Request('https://alevel.rifkisnote.my.id/api/papacambridge/papers?session=bad/../../')
  );
  assert.ok(badSessionRes);
  assert.equal(badSessionRes.status, 400);

  const forbiddenPdfRes = await handleApiRequest(
    new Request(
      `https://alevel.rifkisnote.my.id/api/papacambridge/pdf?url=${encodeURIComponent(
        'https://pastpapers.papacambridge.com/directories/CAIE/CAIE-pastpapers/upload/0580_s24_qp_22.pdf'
      )}`
    )
  );
  assert.ok(forbiddenPdfRes);
  assert.equal(forbiddenPdfRes.status, 403);

  const pdfUrl =
    'https://pastpapers.papacambridge.com/directories/CAIE/CAIE-pastpapers/upload/9709_s26_gt.pdf';
  assert.equal(
    buildR2PdfObjectKey(isAllowedPdfProxyUrl(pdfUrl)!),
    'alevel/mirror/pastpapers.papacambridge.com/directories/CAIE/CAIE-pastpapers/upload/9709_s26_gt.pdf'
  );

  const validPdfRes = await handleApiRequest(
    new Request(`https://alevel.rifkisnote.my.id/api/papacambridge/pdf?url=${encodeURIComponent(pdfUrl)}`),
    async () =>
      new Response(new TextEncoder().encode('%PDF-1.7\n1 0 obj\n<<>>\nendobj'), {
        status: 200,
        headers: { 'Content-Type': 'application/pdf' },
      })
  );
  assert.ok(validPdfRes);
  assert.equal(validPdfRes.status, 200);
  assert.equal(validPdfRes.headers.get('content-type'), 'application/pdf');
  assert.match(validPdfRes.headers.get('content-disposition') || '', /9709_s26_gt\.pdf/);

  const htmlPdfRes = await handleApiRequest(
    new Request(`https://alevel.rifkisnote.my.id/api/papacambridge/pdf?url=${encodeURIComponent(pdfUrl)}`),
    async () =>
      new Response('<!doctype html><html>Not Found</html>', {
        status: 200,
        headers: { 'Content-Type': 'text/html' },
      })
  );
  assert.ok(htmlPdfRes);
  assert.equal(htmlPdfRes.status, 404);

  const unknownApiRes = await handleApiRequest(
    new Request('https://alevel.rifkisnote.my.id/api/unknown-endpoint')
  );
  assert.ok(unknownApiRes);
  assert.equal(unknownApiRes.status, 404);
});

test('Scroll rail, pinch-to-zoom, and straight-edge ruler snap calculations work accurately', () => {
  const thumb = computeScrollThumbMetrics({
    scrollTop: 500,
    scrollHeight: 2500,
    clientHeight: 500,
    trackHeight: 400,
    minThumbHeight: 60,
  });
  assert.equal(thumb.canScroll, true);
  assert.equal(thumb.thumbHeight, 80);
  assert.equal(thumb.progress, 0.25);
  assert.equal(thumb.thumbTop, 80);

  const mappedTop = computeScrollTopFromTrackY({
    pointerY: 200,
    trackTop: 0,
    trackHeight: 400,
    thumbHeight: 80,
    scrollHeight: 2500,
    clientHeight: 500,
    grabOffsetRatio: 0.5,
  });
  assert.equal(mappedTop, 1000);

  assert.equal(
    estimateVisiblePage({
      scrollTop: 1200,
      scrollHeight: 4000,
      clientHeight: 500,
      numPages: 8,
    }),
    3
  );

  assert.equal(
    computePinchZoomScale({ initialZoom: 1, startDistance: 100, currentDistance: 150 }),
    1.5
  );
  assert.equal(
    computePinchZoomScale({ initialZoom: 1, startDistance: 100, currentDistance: 40 }),
    0.65
  );
  assert.equal(
    computePinchZoomScale({ initialZoom: 1.5, startDistance: 100, currentDistance: 300 }),
    2.5
  );

  const ruler = {
    centerX: 400,
    centerY: 300,
    angleDeg: 0,
    lengthPx: 300,
    thicknessPx: 40,
  };
  const topSnap = snapClientPointToRulerEdge(450, 272, ruler, { snapThresholdPx: 30 });
  assert.equal(topSnap.snapped, true);
  assert.equal(topSnap.edge, 'top');
  assert.equal(Math.round(topSnap.clientX), 450);
  assert.equal(Math.round(topSnap.clientY), 278);

  const farFreehand = snapClientPointToRulerEdge(450, 450, ruler, { snapThresholdPx: 30 });
  assert.equal(farFreehand.snapped, false);
  assert.equal(farFreehand.edge, null);
});

test('gradeStudentAnswer awards Cambridge rounding & partial marks cleanly', () => {
  const generalQuestion = {
    questionType: 'numeric' as const,
    question: 'Find the area between the curves.',
    correctAnswer: '88.25',
    numericAnswer: 88.25,
    tolerance: 0.01,
    marks: 3,
  };
  assert.equal(gradeStudentAnswer('88.2', generalQuestion).marksEarned, 3);
  assert.equal(gradeStudentAnswer('88,2', generalQuestion).marksEarned, 3);
  assert.equal(gradeStudentAnswer('88.3', generalQuestion).marksEarned, 3);

  const strictTwoDp = {
    questionType: 'numeric' as const,
    question: 'Find the value correct to $2$ decimal places.',
    correctAnswer: '88.25',
    numericAnswer: 88.25,
    tolerance: 0.02,
    marks: 3,
  };
  assert.equal(gradeStudentAnswer('88.25', strictTwoDp).marksEarned, 3);
  const partialRes = gradeStudentAnswer('88.2', strictTwoDp);
  assert.equal(partialRes.isPartial, true);
  assert.equal(partialRes.marksEarned, 2);

  assert.equal(gradeStudentAnswer('42.1', strictTwoDp).marksEarned, 0);
});

test('backgroundPreloader pauses cleanly when entering Past Papers and resumes when leaving', () => {
  setBackgroundWarmupPaused(true);
  assert.equal(isBackgroundWarmupPaused(), true);
  setBackgroundWarmupPaused(false);
  assert.equal(isBackgroundWarmupPaused(), false);
});
