import type {
  PaperModuleMeta,
  SubtopicNote,
  SyllabusChapter,
  SyllabusChapterMeta,
} from '../types/syllabus';

export const PAPER_MODULES_9709: PaperModuleMeta[] = [
  {
    code: 'P1',
    name: 'Pure Mathematics 1',
    paperNumber: '1',
    status: 'live',
    description: 'AS Level Compulsory Pure · 8 Chapters · 1h 50m (75 marks)',
  },
  {
    code: 'P2',
    name: 'Pure Mathematics 2',
    paperNumber: '2',
    status: 'coming-soon',
    description: 'AS Only Pure · Algebra, Logs, Trig & Calculus',
  },
  {
    code: 'P3',
    name: 'Pure Mathematics 3',
    paperNumber: '3',
    status: 'coming-soon',
    description: 'A Level Compulsory Pure · Differential Equations, Vectors & Complex Numbers',
  },
  {
    code: 'M1',
    name: 'Mechanics',
    paperNumber: '4',
    status: 'coming-soon',
    description: 'Forces, Kinematics, Newton’s Laws, Momentum & Work/Energy',
  },
  {
    code: 'S1',
    name: 'Probability & Statistics 1',
    paperNumber: '5',
    status: 'coming-soon',
    description: 'Data Representation, Permutations, Binomial, Geometric & Normal Distributions',
  },
  {
    code: 'S2',
    name: 'Probability & Statistics 2',
    paperNumber: '6',
    status: 'coming-soon',
    description: 'Poisson, Hypothesis Testing, Central Limit Theorem & Type I/II Errors',
  },
];

export const SYLLABUS_9709_METADATA: SyllabusChapterMeta[] = [
  {
    id: 1,
    title: 'Quadratics',
    paperCode: 'P1',
    description:
      'General & completed-square forms, factorisation, quadratic formula, discriminant, quadratic inequalities, disguised quadratics, and simultaneous equations.',
    subtopics: [
      {
        id: '1.1',
        chapterId: 1,
        code: '1.1',
        title: 'Forms of Quadratics, Factorisation, Completing the Square & Sketching',
        paperCode: 'P1',
        summary:
          'Switch between general form and completing-the-square form, solve by factorisation and completing the square, find vertex and symmetry, and sketch parabolas.',
      },
      {
        id: '1.2',
        chapterId: 1,
        code: '1.2',
        title: 'Quadratic Formula & Discriminant Conditions',
        paperCode: 'P1',
        summary:
          'Use the quadratic formula and discriminant D = b^2 - 4ac to determine two real roots, equal roots, or no real solutions.',
      },
      {
        id: '1.3',
        chapterId: 1,
        code: '1.3',
        title: 'Quadratic Inequalities & Disguised Quadratics',
        paperCode: 'P1',
        summary:
          'Solve quadratic inequalities using parabola sketches and reduce disguised quadratics via substitution.',
      },
      {
        id: '1.4',
        chapterId: 1,
        code: '1.4',
        title: 'Simultaneous Equations & Line–Curve Intersections',
        paperCode: 'P1',
        summary:
          'Solve linear–quadratic simultaneous systems and apply discriminant tangency conditions.',
      },
    ],
  },
  {
    id: 2,
    title: 'Functions',
    paperCode: 'P1',
    description:
      'Mappings, vertical line test, domain & range across function families, composite functions, inverse functions with y = x symmetry, and graph transformations.',
    subtopics: [
      {
        id: '2.1',
        chapterId: 2,
        code: '2.1',
        title: 'Mapping, Relations, Vertical Line Test, Domain & Range',
        paperCode: 'P1',
        summary:
          'Classify mappings, apply the vertical line test, and find domains and ranges of linear, quadratic, radical, rational, and trig functions.',
      },
      {
        id: '2.2',
        chapterId: 2,
        code: '2.2',
        title: 'Composite Functions',
        paperCode: 'P1',
        summary:
          'Form composite functions fg(x) = f(g(x)) and f^2(x), and apply existence and domain conditions.',
      },
      {
        id: '2.3',
        chapterId: 2,
        code: '2.3',
        title: 'Inverse Functions, Sketching & Graph Transformations',
        paperCode: 'P1',
        summary:
          'Find inverse functions with horizontal line test and domain restrictions, reflect in y = x, and apply translations, reflections, and stretches.',
      },
    ],
  },
  {
    id: 3,
    title: 'Coordinate Geometry',
    paperCode: 'P1',
    description:
      'Distance, midpoint, gradient, parallel & perpendicular lines, perpendicular bisectors, and circle diameter/tangent equations.',
    subtopics: [
      {
        id: '3.1',
        chapterId: 3,
        code: '3.1',
        title: 'Line Segment, Distance & Midpoint',
        paperCode: 'P1',
        summary:
          'Compute segment distance |AB| and midpoint coordinates in forward and reverse geometry problems.',
      },
      {
        id: '3.2',
        chapterId: 3,
        code: '3.2',
        title: 'Equation of a Line, Parallel/Perpendicular & Perpendicular Bisector',
        paperCode: 'P1',
        summary:
          'Compute gradients, form straight-line equations, apply m1 * m2 = -1, and construct perpendicular bisectors.',
      },
      {
        id: '3.3',
        chapterId: 3,
        code: '3.3',
        title: 'Equation of a Circle, Diameter Form & Tangents',
        paperCode: 'P1',
        summary:
          'Construct circle equations from centre/radius or diameter endpoints, complete the square, and find tangents.',
      },
    ],
  },
  {
    id: 4,
    title: 'Circular Measure',
    paperCode: 'P1',
    description:
      'Degree–radian conversions, arc length rθ, sector perimeter 2r + rθ, sector area ½r²θ, triangle area ½r²sinθ, and shaded segment area ½r²(θ - sinθ).',
    subtopics: [
      {
        id: '4.1',
        chapterId: 4,
        code: '4.1',
        title: 'Converting Angles Between Degrees & Radians',
        paperCode: 'P1',
        summary:
          'Convert angles between degrees and radians cleanly and recall exact trigonometric radian multiples.',
      },
      {
        id: '4.2',
        chapterId: 4,
        code: '4.2',
        title: 'Sector Arc Length, Perimeter, Sector Area & Shaded Segment',
        paperCode: 'P1',
        summary:
          'Use radian formulas for arc length, sector perimeter, sector area, triangle area, and shaded circular segments.',
      },
    ],
  },
  {
    id: 5,
    title: 'Trigonometry',
    paperCode: 'P1',
    description:
      'Trig graphs, amplitude and period transformations, exact values, quotient & Pythagorean identities, and solving trigonometry equations.',
    subtopics: [
      {
        id: '5.1',
        chapterId: 5,
        code: '5.1',
        title: 'Trigonometric Graphs & Exact Values',
        paperCode: 'P1',
        summary:
          'Sketch sin, cos, and tan graphs with transformations and recall exact trigonometry ratios.',
      },
      {
        id: '5.2',
        chapterId: 5,
        code: '5.2',
        title: 'Trigonometric Identities (tan & sin²+cos²=1)',
        paperCode: 'P1',
        summary:
          'Prove and apply tanθ = sinθ/cosθ and sin²θ + cos²θ = 1 in P1 trigonometry proofs.',
      },
      {
        id: '5.3',
        chapterId: 5,
        code: '5.3',
        title: 'Solving Trigonometric Equations',
        paperCode: 'P1',
        summary:
          'Solve trigonometric equations over given radian or degree intervals without losing roots.',
      },
    ],
  },
  {
    id: 6,
    title: 'Series',
    paperCode: 'P1',
    description:
      'Binomial expansion of (a + b)^n, arithmetic progressions, geometric progressions, and sum to infinity (|r| < 1).',
    subtopics: [
      {
        id: '6.1',
        chapterId: 6,
        code: '6.1',
        title: 'Binomial Expansion of (a + b)^n',
        paperCode: 'P1',
        summary:
          'Expand binomial expressions for positive integer powers and extract specific x^r coefficients.',
      },
      {
        id: '6.2',
        chapterId: 6,
        code: '6.2',
        title: 'Arithmetic Progressions',
        paperCode: 'P1',
        summary:
          'Use nth term and sum formulas for arithmetic sequences in simultaneous and word problems.',
      },
      {
        id: '6.3',
        chapterId: 6,
        code: '6.3',
        title: 'Geometric Progressions & Sum to Infinity',
        paperCode: 'P1',
        summary:
          'Apply geometric progression nth term, finite sum, and infinite sum formulas when |r| < 1.',
      },
    ],
  },
  {
    id: 7,
    title: 'Differentiation',
    paperCode: 'P1',
    description:
      'Power rule, chain rule for (ax + b)^n, tangents, normals, increasing/decreasing intervals, stationary points & connected rates.',
    subtopics: [
      {
        id: '7.1',
        chapterId: 7,
        code: '7.1',
        title: 'Differentiation of Power Functions & Chain Rule',
        paperCode: 'P1',
        summary:
          'Differentiate rational powers and composite expressions using the chain rule.',
      },
      {
        id: '7.2',
        chapterId: 7,
        code: '7.2',
        title: 'Tangents, Normals & Connected Rates of Change',
        paperCode: 'P1',
        summary:
          'Use differentiation gradients to find tangent/normal equations and linked rates of change.',
      },
      {
        id: '7.3',
        chapterId: 7,
        code: '7.3',
        title: 'Stationary Points, Increasing/Decreasing & Optimisation',
        paperCode: 'P1',
        summary:
          'Classify maxima and minima using first and second derivatives and solve optimisation problems.',
      },
    ],
  },
  {
    id: 8,
    title: 'Integration',
    paperCode: 'P1',
    description:
      'Indefinite integrals, reverse chain rule, boundary constants, areas under/between curves, improper integrals & volumes of revolution.',
    subtopics: [
      {
        id: '8.1',
        chapterId: 8,
        code: '8.1',
        title: 'Indefinite Integration & Reverse Chain Rule',
        paperCode: 'P1',
        summary:
          'Integrate polynomial powers and (ax + b)^n and recover curve equations using boundary constants.',
      },
      {
        id: '8.2',
        chapterId: 8,
        code: '8.2',
        title: 'Definite Integrals & Areas Between Curves',
        paperCode: 'P1',
        summary:
          'Evaluate definite integrals and compute areas bounded by curves and lines.',
      },
      {
        id: '8.3',
        chapterId: 8,
        code: '8.3',
        title: 'Improper Integrals & Volumes of Revolution',
        paperCode: 'P1',
        summary:
          'Evaluate convergent improper integrals and calculate solid volumes of revolution about axes.',
      },
    ],
  },
];

function buildStubNote(meta: SyllabusChapterMeta['subtopics'][number]): SubtopicNote {
  return {
    id: meta.id,
    chapterId: meta.chapterId,
    code: meta.code,
    title: meta.title,
    paperCode: meta.paperCode,
    summary: meta.summary,
    isLoaded: false,
    objectives: [],
    keyFormulas: [],
    studyNotes: [],
    workedExamples: [],
    commonMistakes: [],
    quickCheck: {
      id: `qc-9709-${meta.id}`,
      prompt: '',
      answer: '',
      hint: '',
      solution: '',
    },
  };
}

export function createSyllabusShell9709(): SyllabusChapter[] {
  return SYLLABUS_9709_METADATA.map((ch) => ({
    id: ch.id,
    title: ch.title,
    paperCode: ch.paperCode,
    description: ch.description,
    subtopics: ch.subtopics.map(buildStubNote),
  }));
}

const chapterCache = new Map<number, Promise<SubtopicNote[]>>();

export function loadP1ChapterNotes(chapterId: number): Promise<SubtopicNote[]> {
  const cached = chapterCache.get(chapterId);
  if (cached) return cached;

  const loader = (async (): Promise<SubtopicNote[]> => {
    let notes: SubtopicNote[] = [];
    switch (chapterId) {
      case 1:
        notes = (await import('./notes9709/p1/chapter1')).CHAPTER_1_NOTES;
        break;
      case 2:
        notes = (await import('./notes9709/p1/chapter2')).CHAPTER_2_NOTES;
        break;
      case 3:
        notes = (await import('./notes9709/p1/chapter3')).CHAPTER_3_NOTES;
        break;
      case 4:
        notes = (await import('./notes9709/p1/chapter4')).CHAPTER_4_NOTES;
        break;
      case 5:
        notes = (await import('./notes9709/p1/chapter5')).CHAPTER_5_NOTES;
        break;
      case 6:
        notes = (await import('./notes9709/p1/chapter6')).CHAPTER_6_NOTES;
        break;
      case 7:
        notes = (await import('./notes9709/p1/chapter7')).CHAPTER_7_NOTES;
        break;
      case 8:
        notes = (await import('./notes9709/p1/chapter8')).CHAPTER_8_NOTES;
        break;
      default:
        notes = [];
    }
    return notes.map((n) => ({ ...n, isLoaded: true }));
  })();

  chapterCache.set(chapterId, loader);
  return loader;
}

export async function loadAllP1SyllabusChapters(): Promise<SyllabusChapter[]> {
  const loadedChapters = await Promise.all(
    SYLLABUS_9709_METADATA.map((meta) => loadP1ChapterNotes(meta.id))
  );
  return SYLLABUS_9709_METADATA.map((meta, idx) => ({
    id: meta.id,
    title: meta.title,
    paperCode: meta.paperCode,
    description: meta.description,
    subtopics: loadedChapters[idx],
  }));
}
