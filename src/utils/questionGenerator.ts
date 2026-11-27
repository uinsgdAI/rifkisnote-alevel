import type { PracticeQuestion } from '../types/syllabus';

export type MockPaperMode =
  | 'mock-p1-full'
  | 'mock-p1-algebra'
  | 'mock-p1-calculus'
  | 'topical';

export interface MockGenerationOptions {
  mode: MockPaperMode;
  attemptNumber: number;
  chapterId?: number | 'all';
  topicId?: string;
  avoidSignatures?: Set<string>;
}

export interface GeneratedQuestionResult {
  questions: PracticeQuestion[];
  signatures: string[];
}

function hashSeed(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function createRng(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pick<T>(rng: () => number, items: readonly T[]): T {
  return items[Math.floor(rng() * items.length)];
}

function randInt(rng: () => number, min: number, max: number): number {
  return min + Math.floor(rng() * (max - min + 1));
}

function shuffle<T>(rng: () => number, items: readonly T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function gcd(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y !== 0) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x || 1;
}

function formatFraction(num: number, den: number): string {
  if (den < 0) {
    num = -num;
    den = -den;
  }
  const g = gcd(num, den);
  const n = num / g;
  const d = den / g;
  return d === 1 ? String(n) : `${n}/${d}`;
}

function comb(n: number, r: number): number {
  if (r < 0 || r > n) return 0;
  let res = 1;
  for (let i = 1; i <= r; i += 1) {
    res = (res * (n - i + 1)) / i;
  }
  return Math.round(res);
}

function buildUniqueMcqOptions(
  rng: () => number,
  correct: string,
  candidates: string[]
): string[] {
  const unique: string[] = [correct];
  for (const c of candidates) {
    if (c && !unique.includes(c)) {
      unique.push(c);
    }
    if (unique.length === 4) break;
  }
  let guard = 1;
  while (unique.length < 4) {
    const fallback = `${correct} (${guard})`;
    if (!unique.includes(fallback)) unique.push(fallback);
    guard += 1;
  }
  return shuffle(rng, unique);
}

function fmtSigned(coeff: number, variable = ''): string {
  if (coeff === 0) return '';
  const sign = coeff >= 0 ? '+' : '-';
  const absVal = Math.abs(coeff);
  const mag = absVal === 1 && variable ? '' : String(absVal);
  return `${sign} ${mag}${variable}`;
}

interface GeneratedTemplateItem {
  signature: string;
  question: PracticeQuestion;
}

type TemplateFn = (rng: () => number, idSuffix: string) => GeneratedTemplateItem;

interface TemplateDef {
  key: string;
  chapterId: number;
  topicId: string;
  group: 'algebra' | 'calculus';
  isMcq?: boolean;
  build: TemplateFn;
}

const TEMPLATES: TemplateDef[] = [
  // 1.1 Completing the square & minimum/maximum value
  {
    key: 'ch1-complete-square-vertex',
    chapterId: 1,
    topicId: '1.1',
    group: 'algebra',
    build: (rng, idSuffix) => {
      const a = pick(rng, [1, 2, 3]);
      const p = pick(rng, [-4, -3, -2, 2, 3, 4]);
      const q = pick(rng, [-7, -5, -3, 1, 4, 7]);
      const b = -2 * a * p;
      const c = a * p * p + q;
      const expr = `${a === 1 ? '' : a}x^2 ${fmtSigned(b, 'x')} ${fmtSigned(c)}`.trim();
      return {
        signature: `1.1-min:${a}:${p}:${q}`,
        question: {
          id: `gen-1.1-${idSuffix}`,
          chapterId: 1,
          topicId: '1.1',
          topicTitle: 'Completing the Square & Quadratic Forms',
          paperModule: 'P1',
          paperType: 'Pure Mathematics 1',
          marks: 3,
          sourceRef: '9709 P1 Syllabus 1.1',
          question: `Express $${expr}$ in the form $a(x - p)^2 + q$, and state the minimum value of the expression.`,
          questionType: 'numeric',
          correctAnswer: String(q),
          acceptedAnswers: [String(q)],
          numericAnswer: q,
          tolerance: 0,
          markScheme: [
            { code: 'M1', detail: `Factor out $${a}$ from the $x^2$ and $x$ terms and halve the $x$ coefficient` },
            { code: 'A1', detail: `Completed square $${a === 1 ? '' : a}(x ${fmtSigned(-p)})^2 ${fmtSigned(q)}$` },
            { code: 'A1', detail: `Minimum value $= ${q}$ (at $x = ${p}$)` },
          ],
          fullSolution: `$${expr} = ${a}(x^2 ${fmtSigned(b / a, 'x')}) ${fmtSigned(c)} = ${a === 1 ? '' : a}(x ${fmtSigned(-p)})^2 ${fmtSigned(q)}$. Since $(x ${fmtSigned(-p)})^2 \\ge 0$, the minimum value is $${q}$.`,
        },
      };
    },
  },
  // 1.2 Discriminant & tangent line
  {
    key: 'ch1-discriminant-tangent',
    chapterId: 1,
    topicId: '1.2',
    group: 'algebra',
    build: (rng, idSuffix) => {
      const m = pick(rng, [2, 4, 6]);
      const b = pick(rng, [-4, -2, 2, 4]);
      // Curve y = x^2 + bx + c_0, line y = mx + k. Tangency: x^2 + (b - m)x + (c_0 - k) = 0
      // Make (b - m) even so k is clean integer! Ensure (b - m) is even: b and m are both even here.
      const c0 = randInt(rng, 4, 12);
      const diff = b - m;
      const k = c0 - (diff * diff) / 4;
      const curveExpr = `x^2 ${fmtSigned(b, 'x')} + ${c0}`;
      const lineExpr = `${m}x + k`;
      return {
        signature: `1.2-disc:${b}:${c0}:${m}`,
        question: {
          id: `gen-1.2-${idSuffix}`,
          chapterId: 1,
          topicId: '1.2',
          topicTitle: 'The Discriminant & Nature of Roots',
          paperModule: 'P1',
          paperType: 'Pure Mathematics 1',
          marks: 4,
          sourceRef: '9709 P1 Syllabus 1.2',
          question: `The line $y = ${lineExpr}$ is a tangent to the curve $y = ${curveExpr}$. Find the exact value of the constant $k$.`,
          questionType: 'numeric',
          correctAnswer: String(k),
          acceptedAnswers: [String(k)],
          numericAnswer: k,
          tolerance: 0,
          markScheme: [
            { code: 'M1', detail: `Equate line and curve: $x^2 ${fmtSigned(diff, 'x')} + (${c0} - k) = 0$` },
            { code: 'M1', detail: `Set discriminant $b^2 - 4ac = 0$: $(${diff})^2 - 4(1)(${c0} - k) = 0$` },
            { code: 'A1', detail: `$${diff * diff} - 4(${c0} - k) = 0$` },
            { code: 'A1', detail: `$k = ${k}$` },
          ],
          fullSolution: `Setting $${curveExpr} = ${lineExpr}$ gives $x^2 ${fmtSigned(diff, 'x')} + (${c0} - k) = 0$. For tangency, $b^2 - 4ac = 0$, so $(${diff})^2 - 4(${c0} - k) = 0 \\implies ${diff * diff} = 4(${c0} - k) \\implies ${c0} - k = ${(diff * diff) / 4} \\implies k = ${k}$.`,
        },
      };
    },
  },
  // 1.3 Quadratic inequalities (MCQ)
  {
    key: 'ch1-quad-ineq-mcq',
    chapterId: 1,
    topicId: '1.3',
    group: 'algebra',
    isMcq: true,
    build: (rng, idSuffix) => {
      const r1 = pick(rng, [-4, -3, -2, -1]);
      const r2 = pick(rng, [2, 3, 4, 5]);
      const outside = pick(rng, [true, false]);
      const b = -(r1 + r2);
      const c = r1 * r2;
      const ineqSign = outside ? '>' : '<';
      const expr = `x^2 ${fmtSigned(b, 'x')} ${fmtSigned(c)} ${ineqSign} 0`;
      const correct = outside
        ? `x < ${r1} or x > ${r2}`
        : `${r1} < x < ${r2}`;
      const wrong1 = outside ? `${r1} < x < ${r2}` : `x < ${r1} or x > ${r2}`;
      const wrong2 = outside ? `x < ${-r2} or x > ${-r1}` : `${-r2} < x < ${-r1}`;
      const wrong3 = `x > ${r2}`;
      return {
        signature: `1.3-ineq:${r1}:${r2}:${outside ? 1 : 0}`,
        question: {
          id: `gen-1.3-${idSuffix}`,
          chapterId: 1,
          topicId: '1.3',
          topicTitle: 'Quadratic Inequalities & Disguised Quadratics',
          paperModule: 'P1',
          paperType: 'Pure Mathematics 1',
          marks: 3,
          sourceRef: '9709 P1 Syllabus 1.3',
          question: `Solve the quadratic inequality $${expr}$.`,
          questionType: 'mcq',
          options: buildUniqueMcqOptions(rng, correct, [wrong1, wrong2, wrong3]),
          correctAnswer: correct,
          markScheme: [
            { code: 'B1', detail: `Critical values $x = ${r1}$ and $x = ${r2}$` },
            { code: 'M1', detail: 'Sketch upward parabola $y = (x - r_1)(x - r_2)$' },
            { code: 'A1', detail: `Correct interval $${correct}$` },
          ],
          fullSolution: `Factorising gives $(x ${fmtSigned(-r1)})(x ${fmtSigned(-r2)}) ${ineqSign} 0$, with roots $x = ${r1}$ and $x = ${r2}$. Since the parabola opens upwards, the curve is ${outside ? 'above the x-axis outside the roots' : 'below the x-axis between the roots'}: $${correct}$.`,
        },
      };
    },
  },
  // 1.4 Disguised quadratic (exponential / surd)
  {
    key: 'ch1-disguised-quadratic',
    chapterId: 1,
    topicId: '1.4',
    group: 'algebra',
    build: (rng, idSuffix) => {
      // Solve 2^(2x) - (a+b)*2^x + ab = 0 where a=2^p, b=2^q or one negative root!
      const p = pick(rng, [1, 2, 3]);
      const negB = pick(rng, [-3, -2, -1]);
      const u1 = 2 ** p; // positive root: 2^x = 2^p -> x = p
      const sum = u1 + negB;
      const prod = u1 * negB; // negative -> only 1 real solution!
      return {
        signature: `1.4-exp:${p}:${negB}`,
        question: {
          id: `gen-1.4-${idSuffix}`,
          chapterId: 1,
          topicId: '1.4',
          topicTitle: 'Simultaneous Equations (Linear & Quadratic)',
          paperModule: 'P1',
          paperType: 'Pure Mathematics 1',
          marks: 4,
          sourceRef: '9709 P1 Syllabus 1.4',
          question: `Use the substitution $u = 2^x$ to solve $4^x ${fmtSigned(-sum)} \\cdot 2^x ${fmtSigned(prod)} = 0$. State the real value of $x$.`,
          questionType: 'numeric',
          correctAnswer: String(p),
          acceptedAnswers: [String(p)],
          numericAnswer: p,
          tolerance: 0,
          markScheme: [
            { code: 'M1', detail: `Rewrite $4^x = (2^x)^2 = u^2$ to form $u^2 ${fmtSigned(-sum, 'u')} ${fmtSigned(prod)} = 0$` },
            { code: 'A1', detail: `Factorise $(u - ${u1})(u + ${Math.abs(negB)}) = 0$` },
            { code: 'B1', detail: `Reject $u = ${negB} < 0$ since $2^x > 0$` },
            { code: 'A1', detail: `$2^x = ${u1} \\implies x = ${p}$` },
          ],
          fullSolution: `Letting $u = 2^x > 0$, we obtain $u^2 ${fmtSigned(-sum, 'u')} ${fmtSigned(prod)} = 0$, so $(u - ${u1})(u + ${Math.abs(negB)}) = 0$. Since $2^x > 0$, discard $u = ${negB}$; thus $2^x = ${u1} = 2^{${p}} \\implies x = ${p}$.`,
        },
      };
    },
  },
  // 2.1 Composite function evaluation
  {
    key: 'ch2-composite-fn',
    chapterId: 2,
    topicId: '2.1',
    group: 'algebra',
    build: (rng, idSuffix) => {
      const m = pick(rng, [2, 3, -2]);
      const c = pick(rng, [-3, -1, 1, 4, 5]);
      const a = pick(rng, [1, 2]);
      const x0 = pick(rng, [1, 2, 3]);
      // f(x) = m x + c, g(x) = a x^2 + 1 -> find fg(x0)
      const gx = a * x0 * x0 + 1;
      const fgx = m * gx + c;
      return {
        signature: `2.1-fg:${m}:${c}:${a}:${x0}`,
        question: {
          id: `gen-2.1-${idSuffix}`,
          chapterId: 2,
          topicId: '2.1',
          topicTitle: 'Functions, Domain, Range & One-One Conditions',
          paperModule: 'P1',
          paperType: 'Pure Mathematics 1',
          marks: 3,
          sourceRef: '9709 P1 Syllabus 2.1',
          question: `Functions $f$ and $g$ are defined for $x \\in \\mathbb{R}$ by $f(x) = ${m}x ${fmtSigned(c)}$ and $g(x) = ${a === 1 ? '' : a}x^2 + 1$. Find the value of $fg(${x0})$.`,
          questionType: 'numeric',
          correctAnswer: String(fgx),
          acceptedAnswers: [String(fgx)],
          numericAnswer: fgx,
          tolerance: 0,
          markScheme: [
            { code: 'M1', detail: `Evaluate inner function first: $g(${x0}) = ${a}(${x0})^2 + 1 = ${gx}$` },
            { code: 'M1', detail: `Substitute into outer function: $f(${gx}) = ${m}(${gx}) ${fmtSigned(c)}$` },
            { code: 'A1', detail: `$${fgx}$` },
          ],
          fullSolution: `$g(${x0}) = ${a}(${x0})^2 + 1 = ${gx}$. Then $fg(${x0}) = f(${gx}) = ${m}(${gx}) ${fmtSigned(c)} = ${fgx}$.`,
        },
      };
    },
  },
  // 2.2 Inverse function evaluation
  {
    key: 'ch2-inverse-fn',
    chapterId: 2,
    topicId: '2.2',
    group: 'algebra',
    build: (rng, idSuffix) => {
      const k = pick(rng, [2, 3, 4]);
      const c = pick(rng, [-5, -3, 1, 3, 5]);
      // f(x) = (x - c)^2 + k for x >= c, find f^-1(target)
      const offset = pick(rng, [2, 3, 4, 5]);
      const targetY = offset * offset + k;
      const ans = c + offset;
      return {
        signature: `2.2-inv:${k}:${c}:${offset}`,
        question: {
          id: `gen-2.2-${idSuffix}`,
          chapterId: 2,
          topicId: '2.2',
          topicTitle: 'Composite & Inverse Functions',
          paperModule: 'P1',
          paperType: 'Pure Mathematics 1',
          marks: 3,
          sourceRef: '9709 P1 Syllabus 2.2',
          question: `The function $f$ is defined by $f(x) = (x ${fmtSigned(-c)})^2 + ${k}$ for $x \\ge ${c}$. Find the exact value of $f^{-1}(${targetY})$.`,
          questionType: 'numeric',
          correctAnswer: String(ans),
          acceptedAnswers: [String(ans)],
          numericAnswer: ans,
          tolerance: 0,
          markScheme: [
            { code: 'M1', detail: `Set $(x ${fmtSigned(-c)})^2 + ${k} = ${targetY} \\implies (x ${fmtSigned(-c)})^2 = ${offset * offset}$` },
            { code: 'M1', detail: `Take positive square root because domain is $x \\ge ${c}$` },
            { code: 'A1', detail: `$x = ${c} + ${offset} = ${ans}$` },
          ],
          fullSolution: `Solve $f(x) = ${targetY}$: $(x ${fmtSigned(-c)})^2 = ${targetY - k} = ${offset * offset}$. Since $x \\ge ${c}$, take the positive root: $x ${fmtSigned(-c)} = ${offset} \\implies f^{-1}(${targetY}) = ${ans}$.`,
        },
      };
    },
  },
  // 2.3 Graph transformations (MCQ)
  {
    key: 'ch2-transform-mcq',
    chapterId: 2,
    topicId: '2.3',
    group: 'algebra',
    isMcq: true,
    build: (rng, idSuffix) => {
      const a = pick(rng, [2, 3, 4]);
      const h = pick(rng, [2, 3, 5]);
      const k = pick(rng, [1, 2, 4]);
      // Start with (x0, y0) on y = f(x), transform to y = k + f(x/a - h)? Let's use clean: y = a f(x + h) - k
      const x0 = pick(rng, [4, 6]);
      const y0 = pick(rng, [3, 5]);
      const xNew = x0 - h;
      const yNew = a * y0 - k;
      const correct = `(${xNew}, ${yNew})`;
      const w1 = `(${x0 + h}, ${yNew})`;
      const w2 = `(${xNew}, ${a * y0 + k})`;
      const w3 = `(${x0 * a}, ${y0 - k})`;
      return {
        signature: `2.3-trans:${a}:${h}:${k}:${x0}:${y0}`,
        question: {
          id: `gen-2.3-${idSuffix}`,
          chapterId: 2,
          topicId: '2.3',
          topicTitle: 'Transformations of Graphs',
          paperModule: 'P1',
          paperType: 'Pure Mathematics 1',
          marks: 3,
          sourceRef: '9709 P1 Syllabus 2.3',
          question: `The point $P(${x0}, ${y0})$ lies on $y = f(x)$. Find the new coordinates of $P$ on the transformed curve $y = ${a}f(x + ${h}) - ${k}$.`,
          questionType: 'mcq',
          options: buildUniqueMcqOptions(rng, correct, [w1, w2, w3]),
          correctAnswer: correct,
          markScheme: [
            { code: 'B1', detail: `Horizontal translation by vector $\\binom{-${h}}{0}$ gives $x = ${x0} - ${h} = ${xNew}$` },
            { code: 'M1', detail: `Vertical stretch factor $${a}$ then translation $-${k}$: $y = ${a}(${y0}) - ${k}$` },
            { code: 'A1', detail: `Coordinates $${correct}$` },
          ],
          fullSolution: `Replacing $x$ with $x + ${h}$ shifts left by $${h}$: $x' = ${x0} - ${h} = ${xNew}$. Outside $f$, multiplying by $${a}$ and subtracting $${k}$ gives $y' = ${a}(${y0}) - ${k} = ${yNew}$. Thus $P'$ is $${correct}$.`,
        },
      };
    },
  },
  // 3.1/3.2 Perpendicular bisector y-intercept
  {
    key: 'ch3-perp-bisector',
    chapterId: 3,
    topicId: '3.2',
    group: 'algebra',
    build: (rng, idSuffix) => {
      // Pick A(x1, y1), B(x2, y2) with midpoint M and integer perpendicular bisector intercept!
      // Let A = (0, y1), B = (2*dx, y1 + 2*dy) -> M = (dx, y1 + dy).
      // Slope AB = dy/dx. Perp slope = -dx/dy.
      // Perp bisector: y = (-dx/dy)(x - dx) + (y1 + dy). At x = 0: c = dx^2/dy + y1 + dy.
      const dy = pick(rng, [1, 2]);
      const mult = pick(rng, [1, 2, 3]);
      const dx = dy * mult; // ensures dx^2 / dy is integer!
      const x1 = randInt(rng, -2, 2);
      const y1 = randInt(rng, 1, 5);
      const x2 = x1 + 2 * dx;
      const y2 = y1 + 2 * dy;
      const mx = (x1 + x2) / 2;
      const my = (y1 + y2) / 2;
      // perp slope = -dx/dy = -mult
      const perpSlope = -mult;
      const yIntercept = my - perpSlope * mx;
      return {
        signature: `3.2-perp:${x1}:${y1}:${dx}:${dy}`,
        question: {
          id: `gen-3.2-${idSuffix}`,
          chapterId: 3,
          topicId: '3.2',
          topicTitle: 'Equations of Lines, Parallel & Perpendicular',
          paperModule: 'P1',
          paperType: 'Pure Mathematics 1',
          marks: 4,
          sourceRef: '9709 P1 Syllabus 3.2',
          question: `Points $A(${x1}, ${y1})$ and $B(${x2}, ${y2})$ are joined by a line segment. Find the $y$-coordinate where the perpendicular bisector of $AB$ crosses the $y$-axis.`,
          questionType: 'numeric',
          correctAnswer: String(yIntercept),
          acceptedAnswers: [String(yIntercept)],
          numericAnswer: yIntercept,
          tolerance: 0,
          markScheme: [
            { code: 'B1', detail: `Midpoint $M = (${mx}, ${my})$` },
            { code: 'M1', detail: `Gradient of $AB = \\frac{${y2 - y1}}{${x2 - x1}} = ${formatFraction(dy, dx)}$, so perpendicular gradient $= ${perpSlope}$` },
            { code: 'M1', detail: `Line equation $y - ${my} = ${perpSlope}(x - (${mx}))$` },
            { code: 'A1', detail: `At $x = 0$, $y = ${yIntercept}$` },
          ],
          fullSolution: `Midpoint $M = \\left(\\frac{${x1}+${x2}}{2}, \\frac{${y1}+${y2}}{2}\\right) = (${mx}, ${my})$. Gradient of $AB$ is $\\frac{${y2 - y1}}{${x2 - x1}} = ${formatFraction(dy, dx)}$, so the perpendicular gradient is $${perpSlope}$. Substituting $M(${mx}, ${my})$ and $x = 0$ gives $y = ${my} - (${perpSlope})(${mx}) = ${yIntercept}$.`,
        },
      };
    },
  },
  // 3.3 Circle centre & radius from expanded equation
  {
    key: 'ch3-circle-radius',
    chapterId: 3,
    topicId: '3.3',
    group: 'algebra',
    build: (rng, idSuffix) => {
      const a = pick(rng, [-4, -3, 2, 3, 5]);
      const b = pick(rng, [-5, -2, 1, 4, 6]);
      const r = pick(rng, [3, 4, 5, 6, 7]);
      // (x - a)^2 + (y - b)^2 = r^2 -> x^2 + y^2 - 2ax - 2by + (a^2 + b^2 - r^2) = 0
      const d = -2 * a;
      const e = -2 * b;
      const c = a * a + b * b - r * r;
      const eq = `x^2 + y^2 ${fmtSigned(d, 'x')} ${fmtSigned(e, 'y')} ${fmtSigned(c)} = 0`;
      return {
        signature: `3.3-rad:${a}:${b}:${r}`,
        question: {
          id: `gen-3.3-${idSuffix}`,
          chapterId: 3,
          topicId: '3.3',
          topicTitle: 'Equation of a Circle & Tangents',
          paperModule: 'P1',
          paperType: 'Pure Mathematics 1',
          marks: 3,
          sourceRef: '9709 P1 Syllabus 3.3',
          question: `A circle has equation $${eq}$. Find the radius of the circle.`,
          questionType: 'numeric',
          correctAnswer: String(r),
          acceptedAnswers: [String(r)],
          numericAnswer: r,
          tolerance: 0,
          markScheme: [
            { code: 'M1', detail: `Complete the square: $(x ${fmtSigned(-a)})^2 + (y ${fmtSigned(-b)})^2 = ${a * a} + ${b * b} - (${c})$` },
            { code: 'A1', detail: `Centre $(${a}, ${b})$ and $r^2 = ${r * r}$` },
            { code: 'A1', detail: `Radius $r = ${r}$` },
          ],
          fullSolution: `Completing the square gives $(x ${fmtSigned(-a)})^2 - ${a * a} + (y ${fmtSigned(-b)})^2 - ${b * b} ${fmtSigned(c)} = 0$, so $(x ${fmtSigned(-a)})^2 + (y ${fmtSigned(-b)})^2 = ${r * r}$. Therefore the radius is $\\sqrt{${r * r}} = ${r}$.`,
        },
      };
    },
  },
  // 4.1/4.2 Circular measure (arc length / sector area)
  {
    key: 'ch4-sector-area',
    chapterId: 4,
    topicId: '4.2',
    group: 'calculus',
    build: (rng, idSuffix) => {
      const r = pick(rng, [4, 6, 8, 10, 12]);
      const theta = pick(rng, [0.8, 1.2, 1.4, 1.5, 1.8]);
      const area = Number((0.5 * r * r * theta).toFixed(2));
      const arc = Number((r * theta).toFixed(2));
      const perim = Number((2 * r + arc).toFixed(2));
      return {
        signature: `4.2-sector:${r}:${theta}`,
        question: {
          id: `gen-4.2-${idSuffix}`,
          chapterId: 4,
          topicId: '4.2',
          topicTitle: 'Arc Length, Sector Area & Segment Area',
          paperModule: 'P1',
          paperType: 'Pure Mathematics 1',
          marks: 3,
          sourceRef: '9709 P1 Syllabus 4.2',
          question: `A sector of a circle of radius $${r}\\text{ cm}$ has perimeter $${perim}\\text{ cm}$. Calculate the area of the sector in $\\text{cm}^2$.`,
          questionType: 'numeric',
          correctAnswer: String(area),
          acceptedAnswers: [String(area)],
          numericAnswer: area,
          tolerance: 0.05,
          unit: 'cm²',
          markScheme: [
            { code: 'M1', detail: `Perimeter $= 2r + r\\theta \\implies ${2 * r} + ${r}\\theta = ${perim}$` },
            { code: 'A1', detail: `$\\theta = ${theta}\\text{ rad}$` },
            { code: 'A1', detail: `Area $= \\frac{1}{2}r^2\\theta = \\frac{1}{2}(${r})^2(${theta}) = ${area}\\text{ cm}^2$` },
          ],
          fullSolution: `Using $P = 2r + r\\theta$, $${2 * r} + ${r}\\theta = ${perim} \\implies \\theta = \\frac{${arc}}{${r}} = ${theta}\\text{ rad}$. Then $A = \\frac{1}{2}r^2\\theta = \\frac{1}{2}(${r * r})(${theta}) = ${area}\\text{ cm}^2$.`,
        },
      };
    },
  },
  // 5.1/5.2 Exact trig / Pythagorean identity
  {
    key: 'ch5-trig-identity-mcq',
    chapterId: 5,
    topicId: '5.2',
    group: 'calculus',
    isMcq: true,
    build: (rng, idSuffix) => {
      // Acute or obtuse theta: given sin theta = p/q (3/5, 5/13, 8/17) and pi/2 < theta < pi, find tan theta
      const triples = [
        [3, 4, 5],
        [5, 12, 13],
        [8, 15, 17],
      ] as const;
      const [opp, adj, hyp] = pick(rng, triples);
      const obtuse = pick(rng, [true, false]);
      const cosStr = obtuse ? `-${formatFraction(adj, hyp)}` : formatFraction(adj, hyp);
      const tanStr = obtuse ? `-${formatFraction(opp, adj)}` : formatFraction(opp, adj);
      const rangeText = obtuse
        ? `\\frac{\\pi}{2} < \\theta < \\pi`
        : `0 < \\theta < \\frac{\\pi}{2}`;
      const wrong1 = obtuse ? formatFraction(opp, adj) : `-${formatFraction(opp, adj)}`;
      const wrong2 = obtuse ? `-${formatFraction(adj, opp)}` : formatFraction(adj, opp);
      const wrong3 = cosStr;
      return {
        signature: `5.2-id:${opp}:${hyp}:${obtuse ? 1 : 0}`,
        question: {
          id: `gen-5.2-${idSuffix}`,
          chapterId: 5,
          topicId: '5.2',
          topicTitle: 'Trigonometric Identities (tan & sin²+cos²=1)',
          paperModule: 'P1',
          paperType: 'Pure Mathematics 1',
          marks: 3,
          sourceRef: '9709 P1 Syllabus 5.2',
          question: `Given that $\\sin\\theta = \\frac{${opp}}{${hyp}}$ and $${rangeText}$, find the exact value of $\\tan\\theta$.`,
          questionType: 'mcq',
          options: buildUniqueMcqOptions(rng, tanStr, [wrong1, wrong2, wrong3]),
          correctAnswer: tanStr,
          markScheme: [
            { code: 'M1', detail: `Use $\\cos^2\\theta = 1 - \\sin^2\\theta = 1 - \\frac{${opp * opp}}{${hyp * hyp}} = \\frac{${adj * adj}}{${hyp * hyp}}$` },
            { code: 'A1', detail: `From quadrant $${rangeText}$, $\\cos\\theta = ${cosStr}$` },
            { code: 'A1', detail: `$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = ${tanStr}$` },
          ],
          fullSolution: `$\\cos^2\\theta = 1 - \\left(\\frac{${opp}}{${hyp}}\\right)^2 = \\frac{${adj * adj}}{${hyp * hyp}}$. Since $${rangeText}$, $\\cos\\theta = ${cosStr}$, so $\\tan\\theta = \\frac{${opp}/${hyp}}{${cosStr}} = ${tanStr}$.`,
        },
      };
    },
  },
  // 5.3 Trig equation root count / sum of roots
  {
    key: 'ch5-trig-eq-roots',
    chapterId: 5,
    topicId: '5.3',
    group: 'calculus',
    build: (rng, idSuffix) => {
      // Solve k sin(m x) = c for 0 <= x <= 2 pi -> number of roots is 2*m (for 0 < c/k < 1)
      const m = pick(rng, [2, 3, 4]);
      const c = pick(rng, [1, 2, 3]);
      const k = c + pick(rng, [1, 2]);
      const numRoots = 2 * m;
      return {
        signature: `5.3-roots:${m}:${c}:${k}`,
        question: {
          id: `gen-5.3-${idSuffix}`,
          chapterId: 5,
          topicId: '5.3',
          topicTitle: 'Solving Trigonometric Equations',
          paperModule: 'P1',
          paperType: 'Pure Mathematics 1',
          marks: 3,
          sourceRef: '9709 P1 Syllabus 5.3',
          question: `How many distinct solutions does the equation $${k}\\sin(${m}x) = ${c}$ have in the interval $0 \\le x \\le 2\\pi$?`,
          questionType: 'numeric',
          correctAnswer: String(numRoots),
          acceptedAnswers: [String(numRoots)],
          numericAnswer: numRoots,
          tolerance: 0,
          markScheme: [
            { code: 'M1', detail: `Rewrite interval for $${m}x$: $0 \\le ${m}x \\le ${2 * m}\\pi$ (${m} full cycles)` },
            { code: 'M1', detail: `Since $0 < \\frac{${c}}{${k}} < 1$, $\\sin u = \\frac{${c}}{${k}}$ has $2$ roots per cycle` },
            { code: 'A1', detail: `Total solutions $= ${m} \\times 2 = ${numRoots}$` },
          ],
          fullSolution: `Let $u = ${m}x$, so $0 \\le u \\le ${2 * m}\\pi$. Since $\\sin u = \\frac{${c}}{${k}} \\in (0, 1)$, there are $2$ positive roots in every $2\\pi$ cycle, giving $2 \\times ${m} = ${numRoots}$ solutions in $0 \\le x \\le 2\\pi$.`,
        },
      };
    },
  },
  // 6.1 Binomial coefficient
  {
    key: 'ch6-binomial-coeff',
    chapterId: 6,
    topicId: '6.1',
    group: 'algebra',
    build: (rng, idSuffix) => {
      const n = pick(rng, [4, 5, 6]);
      const r = pick(rng, [2, 3]);
      const a = pick(rng, [1, 2, 3]);
      const b = pick(rng, [-3, -2, 2, 3]);
      // Coefficient of x^r in (a + b x)^n
      const coeff = comb(n, r) * a ** (n - r) * b ** r;
      const expr = `(${a} ${fmtSigned(b, 'x')})^{${n}}`;
      return {
        signature: `6.1-binom:${n}:${r}:${a}:${b}`,
        question: {
          id: `gen-6.1-${idSuffix}`,
          chapterId: 6,
          topicId: '6.1',
          topicTitle: 'Binomial Expansion of (a + b)^n',
          paperModule: 'P1',
          paperType: 'Pure Mathematics 1',
          marks: 3,
          sourceRef: '9709 P1 Syllabus 6.1',
          question: `Find the coefficient of $x^{${r}}$ in the expansion of $${expr}$.`,
          questionType: 'numeric',
          correctAnswer: String(coeff),
          acceptedAnswers: [String(coeff)],
          numericAnswer: coeff,
          tolerance: 0,
          markScheme: [
            { code: 'M1', detail: `Select term $\\binom{${n}}{${r}} (${a})^{${n - r}} (${b}x)^{${r}}$` },
            { code: 'A1', detail: `$${comb(n, r)} \\times ${a ** (n - r)} \\times (${b ** r})$` },
            { code: 'A1', detail: `Coefficient $= ${coeff}$` },
          ],
          fullSolution: `The $x^{${r}}$ term is $\\binom{${n}}{${r}} (${a})^{${n - r}} (${b}x)^{${r}} = ${comb(n, r)} \\times ${a ** (n - r)} \\times (${b ** r})x^{${r}} = ${coeff}x^{${r}}$. Thus the coefficient is $${coeff}$.`,
        },
      };
    },
  },
  // 6.2 Arithmetic progression
  {
    key: 'ch6-ap-sum',
    chapterId: 6,
    topicId: '6.2',
    group: 'algebra',
    build: (rng, idSuffix) => {
      const a = randInt(rng, 4, 15);
      const d = pick(rng, [3, 4, 5, 6, -3, -4]);
      const n = pick(rng, [10, 12, 14, 15, 16]);
      const k1 = 3;
      const k2 = 7;
      const u3 = a + (k1 - 1) * d;
      const u7 = a + (k2 - 1) * d;
      const sum = (n / 2) * (2 * a + (n - 1) * d);
      return {
        signature: `6.2-ap:${a}:${d}:${n}`,
        question: {
          id: `gen-6.2-${idSuffix}`,
          chapterId: 6,
          topicId: '6.2',
          topicTitle: 'Arithmetic Progressions',
          paperModule: 'P1',
          paperType: 'Pure Mathematics 1',
          marks: 4,
          sourceRef: '9709 P1 Syllabus 6.2',
          question: `In an arithmetic progression, the $3$rd term is $${u3}$ and the $7$th term is $${u7}$. Find the sum of the first $${n}$ terms, $S_{${n}}$.`,
          questionType: 'numeric',
          correctAnswer: String(sum),
          acceptedAnswers: [String(sum)],
          numericAnswer: sum,
          tolerance: 0,
          markScheme: [
            { code: 'M1', detail: `Subtract equations: $(a + 6d) - (a + 2d) = ${u7 - u3} \\implies 4d = ${4 * d}$` },
            { code: 'A1', detail: `$d = ${d}$ and $a = ${u3} - 2(${d}) = ${a}$` },
            { code: 'M1', detail: `Apply $S_{${n}} = \\frac{${n}}{2}\\left[2(${a}) + ${n - 1}(${d})\\right]$` },
            { code: 'A1', detail: `$S_{${n}} = ${sum}$` },
          ],
          fullSolution: `$u_7 - u_3 = 4d = ${u7 - u3} \\implies d = ${d}$, and $a = ${u3} - 2(${d}) = ${a}$. Hence $S_{${n}} = \\frac{${n}}{2}(${2 * a} + ${(n - 1) * d}) = ${sum}$.`,
        },
      };
    },
  },
  // 6.3 Geometric progression S_infinity
  {
    key: 'ch6-gp-infinity',
    chapterId: 6,
    topicId: '6.3',
    group: 'algebra',
    build: (rng, idSuffix) => {
      // Pick r = p/q with |r|<1 and a divisible by (q - p)*q so both u2 and S_inf are integers!
      const [p, q] = pick(rng, [
        [1, 3],
        [2, 3],
        [1, 4],
        [3, 4],
        [2, 5],
      ] as const);
      const mult = randInt(rng, 2, 5);
      const a = q * (q - p) * mult;
      const u2 = (a * p) / q;
      const sInf = (a * q) / (q - p);
      return {
        signature: `6.3-sinf:${p}:${q}:${mult}`,
        question: {
          id: `gen-6.3-${idSuffix}`,
          chapterId: 6,
          topicId: '6.3',
          topicTitle: 'Geometric Progressions & Sum to Infinity',
          paperModule: 'P1',
          paperType: 'Pure Mathematics 1',
          marks: 4,
          sourceRef: '9709 P1 Syllabus 6.3',
          question: `A geometric progression has first term $a = ${a}$ and second term $u_2 = ${u2}$. Find the sum to infinity, $S_\\infty$.`,
          questionType: 'numeric',
          correctAnswer: String(sInf),
          acceptedAnswers: [String(sInf)],
          numericAnswer: sInf,
          tolerance: 0,
          markScheme: [
            { code: 'M1', detail: `Find common ratio $r = \\frac{u_2}{a} = \\frac{${u2}}{${a}} = \\frac{${p}}{${q}}$` },
            { code: 'B1', detail: `Verify $|r| = \\frac{${p}}{${q}} < 1$ so $S_\\infty$ exists` },
            { code: 'M1', detail: `Use $S_\\infty = \\frac{a}{1 - r} = \\frac{${a}}{1 - ${p}/${q}}$` },
            { code: 'A1', detail: `$S_\\infty = ${sInf}$` },
          ],
          fullSolution: `$r = \\frac{${u2}}{${a}} = \\frac{${p}}{${q}}$. Since $|r| < 1$, $S_\\infty = \\frac{${a}}{1 - \\frac{${p}}{${q}}} = \\frac{${a}}{\\frac{${q - p}}{${q}}} = ${sInf}$.`,
        },
      };
    },
  },
  // 7.1 Chain rule differentiation at a point
  {
    key: 'ch7-chain-rule-grad',
    chapterId: 7,
    topicId: '7.1',
    group: 'calculus',
    build: (rng, idSuffix) => {
      const k = pick(rng, [2, 3, 4]);
      const a = pick(rng, [2, 3]);
      const x0 = pick(rng, [1, 2, 3]);
      // y = k * (a*x - c)^3 or k / sqrt(ax + b) -> clean integer with y = k (ax - c)^3 where c = a*x0 - d
      const innerVal = pick(rng, [1, 2, -1]);
      const c = innerVal - a * x0; // so a*x0 + c = innerVal
      const n = pick(rng, [3, 4]);
      const grad = k * n * a * innerVal ** (n - 1);
      return {
        signature: `7.1-chain:${k}:${a}:${c}:${n}:${x0}`,
        question: {
          id: `gen-7.1-${idSuffix}`,
          chapterId: 7,
          topicId: '7.1',
          topicTitle: 'Differentiation of Power Functions & Chain Rule',
          paperModule: 'P1',
          paperType: 'Pure Mathematics 1',
          marks: 3,
          sourceRef: '9709 P1 Syllabus 7.1',
          question: `A curve has equation $y = ${k}(${a}x ${fmtSigned(c)})^{${n}}$. Find the gradient $\\frac{dy}{dx}$ at the point where $x = ${x0}$.`,
          questionType: 'numeric',
          correctAnswer: String(grad),
          acceptedAnswers: [String(grad)],
          numericAnswer: grad,
          tolerance: 0,
          markScheme: [
            { code: 'M1', detail: `Apply chain rule: $\\frac{dy}{dx} = ${k * n}(${a}x ${fmtSigned(c)})^{${n - 1}} \\times ${a}$` },
            { code: 'A1', detail: `Simplified derivative $${k * n * a}(${a}x ${fmtSigned(c)})^{${n - 1}}$` },
            { code: 'A1', detail: `At $x = ${x0}$, $\\frac{dy}{dx} = ${grad}$` },
          ],
          fullSolution: `$\\frac{dy}{dx} = ${k} \\cdot ${n}(${a}x ${fmtSigned(c)})^{${n - 1}} \\cdot ${a} = ${k * n * a}(${a}x ${fmtSigned(c)})^{${n - 1}}$. Substituting $x = ${x0}$ gives ${k * n * a}(${innerVal})^{${n - 1}} = ${grad}$.`,
        },
      };
    },
  },
  // 7.2 Normal gradient & y-intercept
  {
    key: 'ch7-normal-line',
    chapterId: 7,
    topicId: '7.2',
    group: 'calculus',
    build: (rng, idSuffix) => {
      // Curve y = x^2 - b x + c at x = x0 where tangent gradient m_T is non-zero clean factor of 2 or 4
      // Let y = (1/2)x^2 ... better: y = x^3 - k x at x = 1, dy/dx = 3 - k. Pick k = 1 -> m_T = 2, or k = 2 -> m_T = 1.
      const x0 = pick(rng, [1, 2]);
      const c = randInt(rng, 2, 7);
      // Use y = x^2 + b x + c -> dy/dx = 2 x + b. Force m_T = +/-1 or +/-2 so normal gradient is clean!
      const mT = pick(rng, [1, -1, 2, -2]);
      const b = mT - 2 * x0;
      const y0 = x0 * x0 + b * x0 + c;
      const mN = -1 / mT;
      // Normal: y - y0 = mN (x - x0) -> at x = 0: y_int = y0 - mN * x0
      const num = y0 * mT + x0; // y0 - (-1/mT)*x0 = (y0*mT + x0)/mT
      const ansStr = formatFraction(num, mT);
      const numAns = num / mT;
      return {
        signature: `7.2-norm:${x0}:${mT}:${c}`,
        question: {
          id: `gen-7.2-${idSuffix}`,
          chapterId: 7,
          topicId: '7.2',
          topicTitle: 'Tangents, Normals & Rates of Change',
          paperModule: 'P1',
          paperType: 'Pure Mathematics 1',
          marks: 4,
          sourceRef: '9709 P1 Syllabus 7.2',
          question: `Find the $y$-intercept of the normal to the curve $y = x^2 ${fmtSigned(b, 'x')} + ${c}$ at the point where $x = ${x0}$. Give your answer as an exact integer or fraction ($a/b$).`,
          questionType: 'numeric',
          correctAnswer: ansStr,
          acceptedAnswers: [ansStr, String(numAns)],
          numericAnswer: numAns,
          tolerance: 0.005,
          markScheme: [
            { code: 'B1', detail: `When $x = ${x0}$, $y = ${y0}$` },
            { code: 'M1', detail: `$\\frac{dy}{dx} = 2x ${fmtSigned(b)}$, so tangent gradient at $x = ${x0}$ is $m_T = ${mT}$` },
            { code: 'M1', detail: `Normal gradient $m_N = -\\frac{1}{${mT}} = ${mN}$; line $y - ${y0} = ${formatFraction(-1, mT)}(x - ${x0})$` },
            { code: 'A1', detail: `$y$-intercept $= ${ansStr}$` },
          ],
          fullSolution: `At $x = ${x0}$, $y = ${y0}$ and $\\frac{dy}{dx} = 2(${x0}) ${fmtSigned(b)} = ${mT}$. The normal has gradient $m_N = ${formatFraction(-1, mT)}$, so $y = ${formatFraction(-1, mT)}(0 - ${x0}) + ${y0} = ${ansStr}$.`,
        },
      };
    },
  },
  // 7.3 Stationary point classification & value
  {
    key: 'ch7-stationary-point',
    chapterId: 7,
    topicId: '7.3',
    group: 'calculus',
    build: (rng, idSuffix) => {
      // y = x^3 - 3 a^2 x + d -> dy/dx = 3(x^2 - a^2) -> stationary at x = a (local min) and x = -a (local max)
      const a = pick(rng, [1, 2, 3]);
      const d = randInt(rng, 2, 10);
      const askMin = pick(rng, [true, false]);
      const xStat = askMin ? a : -a;
      const yStat = xStat ** 3 - 3 * a * a * xStat + d;
      const nature = askMin ? 'minimum' : 'maximum';
      return {
        signature: `7.3-stat:${a}:${d}:${askMin ? 1 : 0}`,
        question: {
          id: `gen-7.3-${idSuffix}`,
          chapterId: 7,
          topicId: '7.3',
          topicTitle: 'Stationary Points & Second Derivatives',
          paperModule: 'P1',
          paperType: 'Pure Mathematics 1',
          marks: 4,
          sourceRef: '9709 P1 Syllabus 7.3',
          question: `A curve has equation $y = x^3 - ${3 * a * a}x + ${d}$. Find the $y$-coordinate of the local ${nature} stationary point.`,
          questionType: 'numeric',
          correctAnswer: String(yStat),
          acceptedAnswers: [String(yStat)],
          numericAnswer: yStat,
          tolerance: 0,
          markScheme: [
            { code: 'M1', detail: `Differentiate and set $\\frac{dy}{dx} = 3x^2 - ${3 * a * a} = 0$` },
            { code: 'A1', detail: `Stationary $x$-values $x = ${a}$ and $x = ${-a}$` },
            { code: 'M1', detail: `Check $\\frac{d^2y}{dx^2} = 6x$ to select local ${nature} at $x = ${xStat}$` },
            { code: 'A1', detail: `$y = ${yStat}$` },
          ],
          fullSolution: `$\\frac{dy}{dx} = 3x^2 - ${3 * a * a} = 0 \\implies x = \\pm ${a}$. Since $\\frac{d^2y}{dx^2} = 6x$, $x = ${xStat}$ gives $\\frac{d^2y}{dx^2} = ${6 * xStat} ${askMin ? '> 0\\text{ (min)}' : '< 0\\text{ (max)}'}$. Substituting $x = ${xStat}$ yields $y = (${xStat})^3 - ${3 * a * a}(${xStat}) + ${d} = ${yStat}$.`,
        },
      };
    },
  },
  // 8.1 Recovering curve equation f(x) from f'(x)
  {
    key: 'ch8-curve-from-grad',
    chapterId: 8,
    topicId: '8.1',
    group: 'calculus',
    build: (rng, idSuffix) => {
      // dy/dx = a x^2 + b, passes through (1, y1), find y at x = 2
      const k = pick(rng, [3, 6, 9]); // multiple of 3 for clean x^3 term
      const b = pick(rng, [-4, -2, 2, 4]);
      const c = randInt(rng, -3, 6);
      const yAt1 = (k / 3) * 1 + b * 1 + c;
      const yAt2 = (k / 3) * 8 + b * 2 + c;
      return {
        signature: `8.1-curve:${k}:${b}:${c}`,
        question: {
          id: `gen-8.1-${idSuffix}`,
          chapterId: 8,
          topicId: '8.1',
          topicTitle: 'Indefinite Integration & Finding Constant c',
          paperModule: 'P1',
          paperType: 'Pure Mathematics 1',
          marks: 4,
          sourceRef: '9709 P1 Syllabus 8.1',
          question: `A curve has gradient $\\frac{dy}{dx} = ${k}x^2 ${fmtSigned(b)}$ and passes through the point $(1, ${yAt1})$. Find the $y$-coordinate on the curve when $x = 2$.`,
          questionType: 'numeric',
          correctAnswer: String(yAt2),
          acceptedAnswers: [String(yAt2)],
          numericAnswer: yAt2,
          tolerance: 0,
          markScheme: [
            { code: 'M1', detail: `Integrate: $y = ${k / 3 === 1 ? '' : k / 3}x^3 ${fmtSigned(b, 'x')} + c$` },
            { code: 'M1', detail: `Substitute $(1, ${yAt1})$ to find $c$` },
            { code: 'A1', detail: `$c = ${c}$` },
            { code: 'A1', detail: `At $x = 2$, $y = ${yAt2}$` },
          ],
          fullSolution: `Integrating gives $y = ${k / 3 === 1 ? '' : k / 3}x^3 ${fmtSigned(b, 'x')} + c$. At $(1, ${yAt1})$, $${k / 3} ${fmtSigned(b)} + c = ${yAt1} \\implies c = ${c}$. Setting $x = 2$ gives $y = ${k / 3}(8) ${fmtSigned(b * 2)} + ${c} = ${yAt2}$.`,
        },
      };
    },
  },
  // 8.2 Definite integral / area under curve
  {
    key: 'ch8-definite-area',
    chapterId: 8,
    topicId: '8.2',
    group: 'calculus',
    build: (rng, idSuffix) => {
      // Area between y = k x (b - x) and x-axis from 0 to b -> integral = k (b*x^2/2 - x^3/3)_0^b = k b^3 / 6
      const b = pick(rng, [3, 6]); // divisible by 3 and 6 works cleanly
      const k = pick(rng, [1, 2, 3]);
      const area = (k * b ** 3) / 6;
      const expr = k === 1 ? `${b}x - x^2` : `${k * b}x - ${k}x^2`;
      return {
        signature: `8.2-area:${k}:${b}`,
        question: {
          id: `gen-8.2-${idSuffix}`,
          chapterId: 8,
          topicId: '8.2',
          topicTitle: 'Definite Integrals & Areas Between Curves',
          paperModule: 'P1',
          paperType: 'Pure Mathematics 1',
          marks: 4,
          sourceRef: '9709 P1 Syllabus 8.2',
          question: `Find the exact area of the finite region bounded by the curve $y = ${expr}$ and the $x$-axis.`,
          questionType: 'numeric',
          correctAnswer: String(area),
          acceptedAnswers: [String(area)],
          numericAnswer: area,
          tolerance: 0,
          markScheme: [
            { code: 'B1', detail: `Roots on $x$-axis at $x = 0$ and $x = ${b}$` },
            { code: 'M1', detail: `Integrate $\\int_0^{${b}} (${expr})\\,dx = \\left[${formatFraction(k * b, 2)}x^2 - ${formatFraction(k, 3)}x^3\\right]_0^{${b}}$` },
            { code: 'M1', detail: `Evaluate upper limit minus lower limit` },
            { code: 'A1', detail: `Area $= ${area}$` },
          ],
          fullSolution: `$y = 0 \\implies x(${expr.includes('x^2') ? `${k === 1 ? b : k * b} - ${k === 1 ? '' : k}x` : ''}) = 0$, giving $x = 0$ and $x = ${b}$. Integrating from $0$ to $${b}$ gives $\\left[${formatFraction(k * b, 2)}x^2 - ${formatFraction(k, 3)}x^3\\right]_0^{${b}} = ${area}$.`,
        },
      };
    },
  },
  // 8.3 Volume of revolution about x-axis
  {
    key: 'ch8-volume-rev',
    chapterId: 8,
    topicId: '8.3',
    group: 'calculus',
    build: (rng, idSuffix) => {
      // Rotate y = k * sqrt(x) from x = 0 to x = b -> pi * int_0^b k^2 x dx = pi * k^2 * b^2 / 2
      const k = pick(rng, [1, 2, 3]);
      const b = pick(rng, [2, 4, 6]);
      const piCoeff = (k * k * b * b) / 2;
      const expr = k === 1 ? '\\sqrt{x}' : `${k}\\sqrt{x}`;
      return {
        signature: `8.3-vol:${k}:${b}`,
        question: {
          id: `gen-8.3-${idSuffix}`,
          chapterId: 8,
          topicId: '8.3',
          topicTitle: 'Volumes of Revolution & Improper Integrals',
          paperModule: 'P1',
          paperType: 'Pure Mathematics 1',
          marks: 4,
          sourceRef: '9709 P1 Syllabus 8.3',
          question: `The region under $y = ${expr}$ between $x = 0$ and $x = ${b}$ is rotated $360^\\circ$ about the $x$-axis. If the exact volume is $V = k\\pi$, find the integer value of $k$.`,
          questionType: 'numeric',
          correctAnswer: String(piCoeff),
          acceptedAnswers: [String(piCoeff)],
          numericAnswer: piCoeff,
          tolerance: 0,
          markScheme: [
            { code: 'M1', detail: `Use $V = \\pi \\int_0^{${b}} y^2\\,dx = \\pi \\int_0^{${b}} ${k * k}x\\,dx$` },
            { code: 'A1', detail: `Antiderivative $\\pi \\left[${formatFraction(k * k, 2)}x^2\\right]_0^{${b}}$` },
            { code: 'M1', detail: `Substitute limits $x = ${b}$ and $x = 0$` },
            { code: 'A1', detail: `$V = ${piCoeff}\\pi$, so $k = ${piCoeff}$` },
          ],
          fullSolution: `$V = \\pi \\int_0^{${b}} (${expr})^2\\,dx = \\pi \\int_0^{${b}} ${k * k}x\\,dx = \\pi\\left[\\frac{${k * k}}{2}x^2\\right]_0^{${b}} = ${piCoeff}\\pi$, giving $k = ${piCoeff}$.`,
        },
      };
    },
  },
];

function selectMatchingTemplates(options: MockGenerationOptions): TemplateDef[] {
  switch (options.mode) {
    case 'mock-p1-algebra':
      return TEMPLATES.filter((t) => t.group === 'algebra');
    case 'mock-p1-calculus':
      return TEMPLATES.filter((t) => t.group === 'calculus');
    case 'topical': {
      if (options.topicId) {
        const exact = TEMPLATES.filter((t) => t.topicId === options.topicId);
        if (exact.length > 0) return exact;
        const fallbackCh = Number(options.topicId.split('.')[0]) || 1;
        const chMatches = TEMPLATES.filter((t) => t.chapterId === fallbackCh);
        if (chMatches.length > 0) return chMatches;
      }
      if (typeof options.chapterId === 'number') {
        const chMatches = TEMPLATES.filter((t) => t.chapterId === options.chapterId);
        if (chMatches.length > 0) return chMatches;
      }
      return TEMPLATES;
    }
    case 'mock-p1-full':
    default:
      return TEMPLATES;
  }
}

export function generateMockExamQuestions(
  options: MockGenerationOptions
): GeneratedQuestionResult {
  const pool = selectMatchingTemplates(options);
  const seedKey = `${options.mode}|${options.chapterId ?? 'all'}|${options.topicId ?? ''}|attempt:${options.attemptNumber}`;
  const rng = createRng(hashSeed(seedKey));

  const desiredCount =
    options.mode === 'mock-p1-full'
      ? 10
      : options.mode === 'topical'
        ? Math.max(4, Math.min(6, pool.length * 2))
        : 6;

  const orderedTemplates: TemplateDef[] = [];
  let roundPool = shuffle(rng, pool);
  while (orderedTemplates.length < desiredCount) {
    if (roundPool.length === 0) {
      roundPool = shuffle(rng, pool);
    }
    const nextTpl = roundPool.shift();
    if (nextTpl) orderedTemplates.push(nextTpl);
  }

  const hasMcqInPool = pool.some((t) => t.isMcq);
  if (hasMcqInPool && !orderedTemplates.some((t) => t.isMcq)) {
    const mcqTpl = pool.find((t) => t.isMcq);
    if (mcqTpl) orderedTemplates[orderedTemplates.length - 1] = mcqTpl;
  }

  const usedInPaper = new Set<string>();
  const questions: PracticeQuestion[] = [];
  const signatures: string[] = [];

  orderedTemplates.forEach((tpl, idx) => {
    let chosen: GeneratedTemplateItem | null = null;
    for (let retry = 0; retry < 25; retry += 1) {
      const subSeed = hashSeed(`${seedKey}|slot:${idx}|tpl:${tpl.key}|try:${retry}`);
      const subRng = createRng(subSeed);
      const candidate = tpl.build(subRng, `a${options.attemptNumber}-q${idx + 1}`);
      const alreadyAvoided = options.avoidSignatures?.has(candidate.signature);
      const dupInSamePaper = usedInPaper.has(candidate.signature);
      if (!alreadyAvoided && !dupInSamePaper) {
        chosen = candidate;
        break;
      }
      if (!dupInSamePaper && !chosen) {
        chosen = candidate;
      }
    }

    if (chosen) {
      usedInPaper.add(chosen.signature);
      signatures.push(chosen.signature);
      questions.push(chosen.question);
    }
  });

  return { questions, signatures };
}
