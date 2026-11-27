export type SubjectCode = '9709';

export type PaperModuleCode = 'P1' | 'P2' | 'P3' | 'M1' | 'S1' | 'S2';

export interface PaperModuleMeta {
  code: PaperModuleCode;
  name: string;
  paperNumber: string;
  status: 'live' | 'coming-soon';
  description: string;
}

export interface WorkedExample {
  title: string;
  question: string;
  marks: number;
  steps: string[];
  answer: string;
  markSchemeNotes: string;
}

export interface QuickCheckQuestion {
  id: string;
  paperCode?: string; // e.g. '9709/12/M/J/24'
  questionNumber?: string; // e.g. 'Q4'
  marks?: number;
  paperType?: 'Pure Mathematics 1' | 'Calculator Allowed';
  prompt: string;
  answer: string;
  acceptedAnswers?: string[];
  numericAnswer?: number;
  tolerance?: number;
  unit?: string;
  hint: string;
  solution: string;
}

export type SandboxType =
  | 'quadratic-solver'
  | 'geogebra-graph'
  | 'sequence-explorer'
  | 'none';

export interface CoursebookRef {
  unit: number;
  unitTitle: string;
  chapter: number;
  chapterTitle: string;
  sections: string;
  editionNote?: string;
}

export type P1DiagramId =
  | 'quad-sketch-fx'
  | 'quad-sketch-gx'
  | 'discriminant-cases'
  | 'mapping-types'
  | 'vertical-line-test'
  | 'linear-domain-range'
  | 'composite-mapping'
  | 'inverse-mapping'
  | 'horizontal-line-test'
  | 'inverse-reflection'
  | 'coord-midpoint-distance'
  | 'circle-diameter'
  | 'angle-conversion'
  | 'circular-sector-segment'
  | 'trig-waves'
  | 'astc-unit-circle'
  | 'pascal-binomial'
  | 'ap-gp-series'
  | 'tangent-normal'
  | 'stationary-fdt-sdt'
  | 'area-under-curves'
  | 'volume-of-revolution';

export interface NoteDiagramMeta {
  id: P1DiagramId;
  title: string;
  caption: string;
}

export interface KeyFindingItem {
  title: string;
  finding: string;
  noteBox?: string;
}

export interface SubtopicNote {
  id: string; // e.g. '1.1'
  chapterId: number; // e.g. 1
  code: string; // e.g. '1.1'
  title: string;
  paperCode: PaperModuleCode;
  summary: string;
  isLoaded?: boolean;
  aims?: string[];
  coursebookRef?: CoursebookRef;
  coursebookTip?: string;
  fastForward?: string;
  bigIdea?: string;
  keyFindings?: KeyFindingItem[];
  stepByStepMethod?: string[];
  diagrams?: NoteDiagramMeta[];
  objectives: string[];
  keyFormulas: {
    label: string;
    latex: string;
    note?: string;
  }[];
  comparisonTable?: {
    title: string;
    headers: string[];
    rows: string[][];
  };
  studyNotes: {
    heading: string;
    body: string;
    bullets?: string[];
    noteBox?: string;
  }[];
  workedExamples: WorkedExample[];
  commonMistakes: string[];
  rapidSummary?: {
    rule: string;
    detail: string;
  }[];
  quickCheck: QuickCheckQuestion;
  sandbox?: SandboxType;
}

export interface SyllabusChapter {
  id: number;
  title: string;
  paperCode: PaperModuleCode;
  description: string;
  subtopics: SubtopicNote[];
}

export interface SyllabusSubtopicMeta {
  id: string;
  chapterId: number;
  code: string;
  title: string;
  paperCode: PaperModuleCode;
  summary: string;
}

export interface SyllabusChapterMeta {
  id: number;
  title: string;
  paperCode: PaperModuleCode;
  description: string;
  subtopics: SyllabusSubtopicMeta[];
}

export interface PracticeQuestion {
  id: string;
  chapterId: number;
  topicId: string;
  topicTitle: string;
  paperModule: PaperModuleCode;
  paperType: 'Pure Mathematics 1' | 'Calculator Allowed';
  marks: number;
  sourceRef: string; // e.g. '9709/12/M/J/24 Q5'
  question: string;
  questionType: 'numeric' | 'mcq' | 'text';
  options?: string[];
  correctAnswer: string;
  acceptedAnswers?: string[];
  numericAnswer?: number;
  tolerance?: number;
  unit?: string;
  markScheme: {
    code: string; // e.g. 'M1', 'A1', 'B1'
    detail: string;
  }[];
  fullSolution: string;
}

export interface PastPaperSession {
  slug: string; // e.g. '2024-may-june'
  label: string; // e.g. 'May / June 2024'
  year: number;
  series: 'March' | 'May/June' | 'Oct/Nov' | 'Topical' | 'Specimen';
  url: string;
  upstreamSlug?: string;
}

export interface PastPaperFile {
  filename: string;
  docType: 'QP' | 'MS' | 'ER' | 'GT' | 'IN' | 'OTHER';
  docTypeLabel: string;
  paperNumber: string; // '1', '2', '3', '4', '5', '6', or '-'
  variant: string; // '1', '2', '3', '5', or '-'
  paperComponent: PaperModuleCode | 'All';
  url: string;
  sessionSlug: string;
}

export interface TopicalPaperPack {
  id: string;
  order: number;
  title: string;
  chapterId: number;
  topicIds: string[];
  paperMode: 'Non-Calc' | 'Calc' | 'Mixed';
  questionsUrl: string;
  answersUrl?: string;
  questionsFilename: string;
  answersFilename?: string;
}

export type AppRoute =
  | { view: 'notes'; subject?: SubjectCode; chapterId: number; topicId: string }
  | { view: 'past-papers'; subject?: SubjectCode; sessionSlug?: string; paperFilename?: string }
  | { view: 'practice'; subject?: SubjectCode; mode?: string; topicId?: string; topicalPackId?: string };
