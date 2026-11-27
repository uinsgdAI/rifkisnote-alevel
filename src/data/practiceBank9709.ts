import type { PracticeQuestion } from '../types/syllabus';

export const PRACTICE_BANK_9709: PracticeQuestion[] = [
  // =========================================================================
  // CHAPTER 1: QUADRATICS
  // =========================================================================
  {
    id: 'p1-ch1-q1',
    chapterId: 1,
    topicId: '1.1',
    topicTitle: 'Forms of Quadratics, Factorisation & Completing the Square',
    paperModule: 'P1',
    paperType: 'Pure Mathematics 1',
    marks: 4,
    sourceRef: '9709 P1 · Ch 1 Notes 1.1',
    question:
      'Express $f(x) = 3x^2 - 12x + 17$ in the completing-the-square form $a(x - h)^2 + k$, and state the minimum $y$-value at the vertex of $y = f(x)$.',
    questionType: 'numeric',
    correctAnswer: '5',
    acceptedAnswers: ['5'],
    numericAnswer: 5,
    tolerance: 0,
    markScheme: [
      { code: 'M1', detail: 'Factorise $3$ out of the $x^2$ and $x$ terms: $3(x^2 - 4x) + 17$' },
      { code: 'M1', detail: 'Complete the square inside brackets: $3\\big[(x - 2)^2 - (-2)^2\\big] + 17$' },
      { code: 'A1', detail: 'Expand cleanly: $3(x - 2)^2 - 12 + 17 = 3(x - 2)^2 + 5$' },
      { code: 'A1', detail: 'Minimum vertex value is $k = 5$ (at $x = 2$)' },
    ],
    fullSolution:
      '$f(x) = 3(x^2 - 4x) + 17 = 3\\big[(x - 2)^2 - 4\\big] + 17 = 3(x - 2)^2 - 12 + 17 = 3(x - 2)^2 + 5$. Since $a = 3 > 0$, the parabola opens upwards with minimum vertex $(2, 5)$, so the minimum value is $5$.',
  },
  {
    id: 'p1-ch1-q2',
    chapterId: 1,
    topicId: '1.2',
    topicTitle: 'Quadratic Formula & Discriminant Conditions',
    paperModule: 'P1',
    paperType: 'Pure Mathematics 1',
    marks: 4,
    sourceRef: '9709 P1 · Ch 1 Notes 1.2',
    question:
      'Find the set of values of $k$ for which the quadratic equation $x^2 + (k - 2)x + (k + 1) = 0$ has no real solutions.',
    questionType: 'mcq',
    options: ['0 < k < 8', 'k < 0 or k > 8', '-8 < k < 0', 'k >= 8'],
    correctAnswer: '0 < k < 8',
    markScheme: [
      { code: 'M1', detail: 'Set discriminant $D = b^2 - 4ac < 0$: $(k - 2)^2 - 4(1)(k + 1) < 0$' },
      { code: 'A1', detail: 'Simplify to $k^2 - 8k < 0$' },
      { code: 'M1', detail: 'Factorise $k(k - 8) < 0$ and sketch the $k$-parabola' },
      { code: 'A1', detail: 'Read off inner interval $0 < k < 8$' },
    ],
    fullSolution:
      'No real solutions requires $D < 0$: $(k - 2)^2 - 4(1)(k + 1) < 0 \\implies k^2 - 4k + 4 - 4k - 4 < 0 \\implies k(k - 8) < 0$. Because the $k$-parabola opens upwards with $k$-intercepts $0$ and $8$, it lies below the axis for $0 < k < 8$.',
  },
  {
    id: 'p1-ch1-q3',
    chapterId: 1,
    topicId: '1.3',
    topicTitle: 'Quadratic Inequalities & Disguised Quadratics',
    paperModule: 'P1',
    paperType: 'Pure Mathematics 1',
    marks: 4,
    sourceRef: '9709 P1 · Ch 1 Notes 1.3',
    question:
      'Solve the disguised quadratic equation $2x - 7\\sqrt{x} + 3 = 0$. Give the larger real value of $x$.',
    questionType: 'numeric',
    correctAnswer: '9',
    acceptedAnswers: ['9'],
    numericAnswer: 9,
    tolerance: 0,
    markScheme: [
      { code: 'M1', detail: 'Substitute $u = \\sqrt{x}$ ($u \\ge 0$) to obtain $2u^2 - 7u + 3 = 0$' },
      { code: 'A1', detail: 'Factorise $(2u - 1)(u - 3) = 0 \\implies u = \\frac{1}{2}$ or $u = 3$' },
      { code: 'M1', detail: 'Square both valid non-negative $u$ values: $x = u^2$' },
      { code: 'A1', detail: '$x = \\frac{1}{4}$ or $x = 9$ (larger value is $9$)' },
    ],
    fullSolution:
      'Let $u = \\sqrt{x} \\ge 0$. Then $2u^2 - 7u + 3 = 0 \\implies (2u - 1)(u - 3) = 0$, giving $u = \\frac{1}{2}$ or $u = 3$. Squaring back yields $x = \\frac{1}{4}$ and $x = 9$; the larger solution is $9$.',
  },
  {
    id: 'p1-ch1-q4',
    chapterId: 1,
    topicId: '1.4',
    topicTitle: 'Simultaneous Equations & Line–Curve Intersections',
    paperModule: 'P1',
    paperType: 'Pure Mathematics 1',
    marks: 4,
    sourceRef: '9709 P1 · Ch 1 Notes 1.4',
    question:
      'The straight line $y = 2x + k$ is a tangent to the parabola $y = x^2 - 4x + 5$. Find the value of the constant $k$.',
    questionType: 'numeric',
    correctAnswer: '-4',
    acceptedAnswers: ['-4'],
    numericAnswer: -4,
    tolerance: 0,
    markScheme: [
      { code: 'M1', detail: 'Equate line and curve: $x^2 - 4x + 5 = 2x + k$' },
      { code: 'A1', detail: 'Collect into standard form: $x^2 - 6x + (5 - k) = 0$' },
      { code: 'M1', detail: 'Apply tangency condition $D = 0$: $(-6)^2 - 4(1)(5 - k) = 0$' },
      { code: 'A1', detail: '$36 - 20 + 4k = 0 \\implies k = -4$' },
    ],
    fullSolution:
      'Setting $x^2 - 4x + 5 = 2x + k$ produces $x^2 - 6x + (5 - k) = 0$. Tangency requires equal roots ($D = 0$), so $(-6)^2 - 4(5 - k) = 0 \\implies 16 + 4k = 0 \\implies k = -4$.',
  },

  // =========================================================================
  // CHAPTER 2: FUNCTIONS
  // =========================================================================
  {
    id: 'p1-ch2-q1',
    chapterId: 2,
    topicId: '2.1',
    topicTitle: 'Mapping, Vertical Line Test, Domain & Range',
    paperModule: 'P1',
    paperType: 'Pure Mathematics 1',
    marks: 3,
    sourceRef: '9709 P1 · Ch 2 Notes 2.1',
    question:
      'The function $f$ is defined by $f(x) = 2(x - 1)^2 + 5$ for $x \\ge 2$. State the range of $f$.',
    questionType: 'mcq',
    options: ['y >= 7', 'y >= 5', 'y > 7', 'y <= 7'],
    correctAnswer: 'y >= 7',
    markScheme: [
      { code: 'B1', detail: 'Note vertex is $(1, 5)$ and $x = 1$ lies outside domain $x \\ge 2$' },
      { code: 'M1', detail: 'Since $a = 2 > 0$, evaluate minimum at boundary $f(2) = 2(2 - 1)^2 + 5$' },
      { code: 'A1', detail: '$f(2) = 7$, so range is $y \\ge 7$' },
    ],
    fullSolution:
      'The parabola $2(x - 1)^2 + 5$ has vertex at $x = 1$, which is NOT in the restricted domain $x \\ge 2$. Since $a = 2 > 0$, $f$ increases strictly on $x \\ge 2$, starting from $f(2) = 2(1)^2 + 5 = 7$. Thus $R_f: y \\ge 7$.',
  },
  {
    id: 'p1-ch2-q2',
    chapterId: 2,
    topicId: '2.1',
    topicTitle: 'Domain & Range of Radical & Rational Functions',
    paperModule: 'P1',
    paperType: 'Pure Mathematics 1',
    marks: 4,
    sourceRef: '9709 P1 · Ch 2 Notes 2.1',
    question:
      'Find the largest possible domain $D_f$ and corresponding range $R_f$ of the radical function $f(x) = 5 - \\sqrt{2 - x}$.',
    questionType: 'mcq',
    options: [
      'D_f: x <= 2, R_f: y <= 5',
      'D_f: x <= 2, R_f: y >= 5',
      'D_f: x >= 2, R_f: y <= 5',
      'D_f: x >= 2, R_f: y >= 5',
    ],
    correctAnswer: 'D_f: x <= 2, R_f: y <= 5',
    markScheme: [
      { code: 'M1', detail: 'Enforce inside of radical $\\ge 0$: $2 - x \\ge 0$' },
      { code: 'A1', detail: '$D_f: x \\le 2$' },
      { code: 'M1', detail: 'Use $\\sqrt{2 - x} \\ge 0 \\implies -\\sqrt{2 - x} \\le 0$' },
      { code: 'A1', detail: '$R_f: y \\le 5$' },
    ],
    fullSolution:
      'For $\\sqrt{2 - x}$ to be real, $2 - x \\ge 0 \\implies x \\le 2$. Because $\\sqrt{2 - x} \\ge 0$, negating gives $-\\sqrt{2 - x} \\le 0$, and adding $5$ gives $5 - \\sqrt{2 - x} \\le 5$.',
  },
  {
    id: 'p1-ch2-q3',
    chapterId: 2,
    topicId: '2.2',
    topicTitle: 'Composite Functions & Domain Existence',
    paperModule: 'P1',
    paperType: 'Pure Mathematics 1',
    marks: 4,
    sourceRef: '9709 P1 · Ch 2 Notes 2.2',
    question:
      'Functions $f$ and $g$ are defined by $f(x) = \\sqrt{x}$ ($x \\ge 0$) and $g(x) = \\frac{1}{x + 1}$ ($x \\neq -1$). What are the exact domain $D_{fg}$ and range $R_{fg}$ of the composite function $fg(x)$?',
    questionType: 'mcq',
    options: [
      'D_fg: x > -1, R_fg: y > 0',
      'D_fg: x >= -1, R_fg: y >= 0',
      'D_fg: x != -1, R_fg: y > 0',
      'D_fg: x > 0, R_fg: y >= 0',
    ],
    correctAnswer: 'D_fg: x > -1, R_fg: y > 0',
    markScheme: [
      { code: 'B1', detail: 'Form $fg(x) = \\sqrt{\\frac{1}{x + 1}}$' },
      { code: 'M1', detail: 'Require $x \\neq -1$ and $\\frac{1}{x + 1} \\ge 0$' },
      { code: 'A1', detail: 'Denominator positive gives $D_{fg}: x > -1$' },
      { code: 'A1', detail: 'Since $\\frac{1}{x+1}$ never equals $0$, $R_{fg}: y > 0$' },
    ],
    fullSolution:
      '$fg(x) = \\sqrt{\\frac{1}{x + 1}}$. For $g(x) \\in D_f$, we need $\\frac{1}{x + 1} \\ge 0$ and $x + 1 \\neq 0$, which holds iff $x + 1 > 0 \\iff x > -1$. Because $\\frac{1}{x + 1}$ spans $(0, \\infty)$, its square root gives $R_{fg}: y > 0$.',
  },
  {
    id: 'p1-ch2-q4',
    chapterId: 2,
    topicId: '2.3',
    topicTitle: 'Inverse Functions & Restricted Quadratics',
    paperModule: 'P1',
    paperType: 'Pure Mathematics 1',
    marks: 5,
    sourceRef: '9709 P1 · Ch 2 Notes 2.3',
    question:
      'The function $h$ is defined by $h(x) = 2x^2 - 4x - 6$ for $x \\le 1$. Which expression gives $h^{-1}(x)$ and its domain?',
    questionType: 'mcq',
    options: [
      '1 - sqrt((x + 8)/2), x >= -8',
      '1 + sqrt((x + 8)/2), x >= -8',
      '1 - sqrt((x - 8)/2), x >= 8',
      '-1 - sqrt((x + 8)/2), x >= -8',
    ],
    correctAnswer: '1 - sqrt((x + 8)/2), x >= -8',
    markScheme: [
      { code: 'M1', detail: 'Complete square to vertex form: $h(x) = 2(x - 1)^2 - 8$' },
      { code: 'B1', detail: 'Range $R_h: y \\ge -8$, so $D_{h^{-1}}: x \\ge -8$' },
      { code: 'M1', detail: 'Swap $x$ and $y$: $x = 2(y - 1)^2 - 8 \\implies y = 1 \\pm \\sqrt{\\frac{x + 8}{2}}$' },
      { code: 'A2', detail: 'Because $D_h: x \\le 1$, pick minus branch $1 - \\sqrt{\\frac{x + 8}{2}}$' },
    ],
    fullSolution:
      '$h(x) = 2(x - 1)^2 - 8$ has vertex $(1, -8)$, so $R_h: y \\ge -8$. Swapping gives $x = 2(y - 1)^2 - 8 \\implies y = 1 \\pm \\sqrt{\\frac{x + 8}{2}}$. Because $D_h$ is restricted to $x \\le 1$, $R_{h^{-1}}$ must be $y \\le 1$, forcing the negative root: $h^{-1}(x) = 1 - \\sqrt{\\frac{x + 8}{2}}$ with $D_{h^{-1}}: x \\ge -8$.',
  },

  // =========================================================================
  // CHAPTER 3: COORDINATE GEOMETRY
  // =========================================================================
  {
    id: 'p1-ch3-q1',
    chapterId: 3,
    topicId: '3.1',
    topicTitle: 'Line Segment, Distance & Midpoint',
    paperModule: 'P1',
    paperType: 'Pure Mathematics 1',
    marks: 3,
    sourceRef: '9709 P1 · Ch 3 Notes 3.1',
    question:
      'Point $A$ has coordinates $(-2, 3)$ and $M(3, 1)$ is the midpoint of $AB$. Calculate the exact length $|AB|$. Give your answer as a decimal to 2 decimal places or exact value.',
    questionType: 'numeric',
    correctAnswer: '10.77',
    acceptedAnswers: ['10.77', '2*sqrt(29)', 'sqrt(116)'],
    numericAnswer: 10.7703,
    tolerance: 0.02,
    markScheme: [
      { code: 'M1', detail: 'Find $B$: $\\frac{-2 + x_B}{2} = 3 \\implies x_B = 8$; $\\frac{3 + y_B}{2} = 1 \\implies y_B = -1$' },
      { code: 'M1', detail: 'Apply distance formula $|AB| = \\sqrt{(8 - (-2))^2 + (-1 - 3)^2}$' },
      { code: 'A1', detail: '$|AB| = \\sqrt{100 + 16} = \\sqrt{116} = 2\\sqrt{29} \\approx 10.77$' },
    ],
    fullSolution:
      'Since $M$ is the midpoint, $B = (2(3) - (-2),\\; 2(1) - 3) = (8, -1)$. Then $|AB| = \\sqrt{(8 - (-2))^2 + (-1 - 3)^2} = \\sqrt{10^2 + (-4)^2} = \\sqrt{116} = 2\\sqrt{29} \\approx 10.77$.',
  },
  {
    id: 'p1-ch3-q2',
    chapterId: 3,
    topicId: '3.2',
    topicTitle: 'Perpendicular Bisector of a Segment',
    paperModule: 'P1',
    paperType: 'Pure Mathematics 1',
    marks: 4,
    sourceRef: '9709 P1 · Ch 3 Notes 3.2',
    question:
      'Find the $y$-intercept of the perpendicular bisector of the line segment joining $A(-1, 6)$ and $B(5, 2)$.',
    questionType: 'numeric',
    correctAnswer: '1',
    acceptedAnswers: ['1'],
    numericAnswer: 1,
    tolerance: 0,
    markScheme: [
      { code: 'B1', detail: 'Step 1 (Midpoint): $M = \\left(\\frac{-1 + 5}{2}, \\frac{6 + 2}{2}\\right) = (2, 4)$' },
      { code: 'M1', detail: 'Step 2 (Perpendicular gradient): $m_{AB} = \\frac{2 - 6}{5 - (-1)} = -\\frac{2}{3} \\implies m_{\\perp} = \\frac{3}{2}$' },
      { code: 'M1', detail: 'Step 3 (Line through $M$): $y - 4 = \\frac{3}{2}(x - 2)$' },
      { code: 'A1', detail: 'Set $x = 0$: $y = \\frac{3}{2}(-2) + 4 = 1$' },
    ],
    fullSolution:
      'Midpoint $M = (2, 4)$. Gradient $m_{AB} = -\\frac{2}{3}$, so $m_{\\perp} = \\frac{3}{2}$. Equation: $y - 4 = \\frac{3}{2}(x - 2) \\implies y = \\frac{3}{2}x + 1$. Thus the $y$-intercept is $1$.',
  },
  {
    id: 'p1-ch3-q3',
    chapterId: 3,
    topicId: '3.3',
    topicTitle: 'Circle Equation from Diameter Endpoints',
    paperModule: 'P1',
    paperType: 'Pure Mathematics 1',
    marks: 4,
    sourceRef: '9709 P1 · Ch 3 Notes 3.3',
    question:
      'A circle has diameter $AB$ with endpoints $A(-2, 1)$ and $B(4, 9)$. What is the equation of the circle?',
    questionType: 'mcq',
    options: [
      '(x - 1)^2 + (y - 5)^2 = 25',
      '(x - 1)^2 + (y - 5)^2 = 5',
      '(x + 1)^2 + (y + 5)^2 = 25',
      '(x - 1)^2 + (y - 5)^2 = 100',
    ],
    correctAnswer: '(x - 1)^2 + (y - 5)^2 = 25',
    markScheme: [
      { code: 'B1', detail: 'Centre $M(a, b) = \\left(\\frac{-2 + 4}{2}, \\frac{1 + 9}{2}\\right) = (1, 5)$' },
      { code: 'M1', detail: 'Radius $r = |AM| = \\sqrt{(1 - (-2))^2 + (5 - 1)^2} = \\sqrt{9 + 16} = 5$' },
      { code: 'A1', detail: 'Compute $r^2 = 25$' },
      { code: 'A1', detail: 'Circle equation $(x - 1)^2 + (y - 5)^2 = 25$' },
    ],
    fullSolution:
      'Centre $M$ is the midpoint of $AB$: $(1, 5)$. Radius $r = |AM| = \\sqrt{3^2 + 4^2} = 5$, so $r^2 = 25$. Hence $(x - 1)^2 + (y - 5)^2 = 25$.',
  },
  {
    id: 'p1-ch3-q4',
    chapterId: 3,
    topicId: '3.3',
    topicTitle: 'Circle Radius & Tangent Gradient',
    paperModule: 'P1',
    paperType: 'Pure Mathematics 1',
    marks: 4,
    sourceRef: '9709 P1 · Ch 3 Notes 3.3',
    question:
      'A circle has equation $x^2 + y^2 - 6x + 4y - 12 = 0$. Find the $x$-intercept of the tangent to the circle at the point $P(6, 2)$. Give an exact fraction ($a/b$) or decimal.',
    questionType: 'numeric',
    correctAnswer: '26/3',
    acceptedAnswers: ['26/3', '8.67'],
    numericAnswer: 26 / 3,
    tolerance: 0.02,
    markScheme: [
      { code: 'M1', detail: 'Complete the square: $(x - 3)^2 + (y + 2)^2 = 25 \\implies$ centre $M(3, -2)$' },
      { code: 'M1', detail: 'Radius gradient $m_{MP} = \\frac{2 - (-2)}{6 - 3} = \\frac{4}{3}$, so $m_{\\text{tan}} = -\\frac{3}{4}$' },
      { code: 'M1', detail: 'Tangent equation: $y - 2 = -\\frac{3}{4}(x - 6)$' },
      { code: 'A1', detail: 'Set $y = 0$: $-2 = -\\frac{3}{4}(x - 6) \\implies x - 6 = \\frac{8}{3} \\implies x = \\frac{26}{3}$' },
    ],
    fullSolution:
      'Completing the square gives $(x - 3)^2 + (y + 2)^2 = 25$, so centre $M(3, -2)$. $m_{MP} = \\frac{4}{3} \\implies m_{\\text{tan}} = -\\frac{3}{4}$. Setting $y = 0$ in $y - 2 = -\\frac{3}{4}(x - 6)$ yields $x = \\frac{26}{3}$.',
  },

  // =========================================================================
  // CHAPTER 4: CIRCULAR MEASURE
  // =========================================================================
  {
    id: 'p1-ch4-q1',
    chapterId: 4,
    topicId: '4.1',
    topicTitle: 'Converting Degrees & Radians',
    paperModule: 'P1',
    paperType: 'Pure Mathematics 1',
    marks: 2,
    sourceRef: '9709 P1 · Ch 4 Notes 4.1',
    question: 'Convert $\\frac{7\\pi}{12}$ radians into degrees.',
    questionType: 'numeric',
    correctAnswer: '105',
    acceptedAnswers: ['105', '105°'],
    numericAnswer: 105,
    tolerance: 0,
    markScheme: [
      { code: 'M1', detail: 'Multiply by $\\frac{180^\\circ}{\\pi}$: $\\frac{7\\pi}{12} \\times \\frac{180^\\circ}{\\pi}$' },
      { code: 'A1', detail: '$7 \\times 15^\\circ = 105^\\circ$' },
    ],
    fullSolution:
      'To convert radians to degrees, multiply by $\\frac{180^\\circ}{\\pi}$: $\\frac{7\\pi}{12} \\times \\frac{180^\\circ}{\\pi} = 7 \\times 15^\\circ = 105^\\circ$.',
  },
  {
    id: 'p1-ch4-q2',
    chapterId: 4,
    topicId: '4.2',
    topicTitle: 'Arc Length & Sector Perimeter',
    paperModule: 'P1',
    paperType: 'Pure Mathematics 1',
    marks: 3,
    sourceRef: '9709 P1 · Ch 4 Notes 4.2',
    question:
      'A sector $AOB$ of a circle of radius $r = 9\\text{ cm}$ has perimeter $31.5\\text{ cm}$. Calculate the angle $\\theta = \\angle AOB$ in radians.',
    questionType: 'numeric',
    correctAnswer: '1.5',
    acceptedAnswers: ['1.5', '3/2'],
    numericAnswer: 1.5,
    tolerance: 0.001,
    unit: 'rad',
    markScheme: [
      { code: 'M1', detail: 'Use perimeter formula $P = 2r + \\widehat{AB} = 2r + r\\theta$' },
      { code: 'M1', detail: 'Substitute $r = 9$: $18 + 9\\theta = 31.5 \\implies 9\\theta = 13.5$' },
      { code: 'A1', detail: '$\\theta = \\frac{13.5}{9} = 1.5\\text{ rad}$' },
    ],
    fullSolution:
      'Perimeter of sector $AOB$ is $2r + r\\theta = 2(9) + 9\\theta = 31.5$. Subtracting $18$ gives $9\\theta = 13.5$, so $\\theta = 1.5\\text{ radians}$.',
  },
  {
    id: 'p1-ch4-q3',
    chapterId: 4,
    topicId: '4.2',
    topicTitle: 'Sector Area & Triangle Area',
    paperModule: 'P1',
    paperType: 'Pure Mathematics 1',
    marks: 3,
    sourceRef: '9709 P1 · Ch 4 Notes 4.2',
    question:
      'A sector $AOB$ has radius $8\\text{ cm}$ and arc length $\\widehat{AB} = 10\\text{ cm}$. Find the area of the sector in $\\text{cm}^2$.',
    questionType: 'numeric',
    correctAnswer: '40',
    acceptedAnswers: ['40'],
    numericAnswer: 40,
    tolerance: 0,
    unit: 'cm²',
    markScheme: [
      { code: 'M1', detail: 'Find angle from $\\widehat{AB} = r\\theta \\implies 10 = 8\\theta \\implies \\theta = 1.25\\text{ rad}$' },
      { code: 'M1', detail: 'Apply $A = \\frac{1}{2}r^2\\theta = \\frac{1}{2}(8)^2(1.25)$' },
      { code: 'A1', detail: '$A = 40\\text{ cm}^2$' },
    ],
    fullSolution:
      '$r\\theta = 10$ with $r = 8$ gives $\\theta = \\frac{10}{8} = 1.25\\text{ rad}$. Then $\\text{Area} = \\frac{1}{2}r^2\\theta = \\frac{1}{2}(64)(1.25) = 40\\text{ cm}^2$.',
  },
  {
    id: 'p1-ch4-q4',
    chapterId: 4,
    topicId: '4.2',
    topicTitle: 'Area of Shaded Segment',
    paperModule: 'P1',
    paperType: 'Pure Mathematics 1',
    marks: 4,
    sourceRef: '9709 P1 · Ch 4 Notes 4.2',
    question:
      'Sector $AOB$ has centre $O$, radius $10\\text{ cm}$, and $\\angle AOB = 1.2\\text{ radians}$. Calculate the area of the minor shaded segment cut off by chord $AB$, giving your answer in $\\text{cm}^2$ correct to 1 decimal place.',
    questionType: 'numeric',
    correctAnswer: '13.4',
    acceptedAnswers: ['13.4', '13.40'],
    numericAnswer: 13.4,
    tolerance: 0.05,
    unit: 'cm²',
    markScheme: [
      { code: 'M1', detail: 'Sector area $= \\frac{1}{2}(10)^2(1.2) = 60\\text{ cm}^2$' },
      { code: 'M1', detail: 'Triangle area $A_{\\triangle AOB} = \\frac{1}{2}(10)^2\\sin(1.2) \\approx 46.602\\text{ cm}^2$ (RAD mode)' },
      { code: 'M1', detail: 'Shaded segment $= \\frac{1}{2}r^2(\\theta - \\sin\\theta) = 50(1.2 - \\sin 1.2)$' },
      { code: 'A1', detail: '$13.398 \\approx 13.4\\text{ cm}^2$' },
    ],
    fullSolution:
      'Using $\\text{Area of segment} = \\text{Area of sector } AOB - A_{\\triangle AOB} = \\frac{1}{2}r^2(\\theta - \\sin\\theta)$ with calculator in RAD mode: $\\frac{1}{2}(10)^2(1.2 - \\sin 1.2) = 50(1.2 - 0.932039) \\approx 13.4\\text{ cm}^2$.',
  },

  // =========================================================================
  // CHAPTER 5: TRIGONOMETRY
  // =========================================================================
  {
    id: 'p1-ch5-q1',
    chapterId: 5,
    topicId: '5.1',
    topicTitle: 'Trigonometric Graphs & Amplitude/Period',
    paperModule: 'P1',
    paperType: 'Pure Mathematics 1',
    marks: 3,
    sourceRef: '9709 P1 · Ch 5 Notes 5.1',
    question:
      'The function $f$ is defined by $f(x) = 3 - 5\\cos(2x)$ for $0 \\le x \\le \\pi$. What are the range of $f$ and its period in radians?',
    questionType: 'mcq',
    options: [
      'Range: -2 <= f(x) <= 8, Period: pi',
      'Range: -5 <= f(x) <= 5, Period: 2pi',
      'Range: -2 <= f(x) <= 8, Period: 2pi',
      'Range: 3 <= f(x) <= 8, Period: pi/2',
    ],
    correctAnswer: 'Range: -2 <= f(x) <= 8, Period: pi',
    markScheme: [
      { code: 'B1', detail: 'Period $= \\frac{2\\pi}{2} = \\pi$' },
      { code: 'M1', detail: 'Since $-1 \\le \\cos(2x) \\le 1$, $-5 \\le -5\\cos(2x) \\le 5$' },
      { code: 'A1', detail: 'Adding $3$ gives range $-2 \\le f(x) \\le 8$' },
    ],
    fullSolution:
      'For $f(x) = 3 - 5\\cos(2x)$, $b = 2$ gives period $\\frac{2\\pi}{2} = \\pi$. Because $-1 \\le \\cos(2x) \\le 1$, multiplying by $-5$ and adding $3$ yields $3 - 5 \\le f(x) \\le 3 + 5$, i.e. $-2 \\le f(x) \\le 8$.',
  },
  {
    id: 'p1-ch5-q2',
    chapterId: 5,
    topicId: '5.2',
    topicTitle: 'Exact Trig Values & Identities',
    paperModule: 'P1',
    paperType: 'Pure Mathematics 1',
    marks: 3,
    sourceRef: '9709 P1 · Ch 5 Notes 5.2',
    question:
      'Given that $\\cos\\theta = -\\frac{3}{5}$ and $\\frac{\\pi}{2} < \\theta < \\pi$ (Quadrant 2), find the exact value of $\\tan\\theta$ as a simplified fraction ($a/b$).',
    questionType: 'text',
    correctAnswer: '-4/3',
    acceptedAnswers: ['-4/3'],
    numericAnswer: -4 / 3,
    tolerance: 0.0001,
    markScheme: [
      { code: 'M1', detail: 'Use $\\sin^2\\theta + \\cos^2\\theta = 1 \\implies \\sin^2\\theta = 1 - \\frac{9}{25} = \\frac{16}{25}$' },
      { code: 'A1', detail: 'In Quadrant 2, $\\sin\\theta > 0$, so $\\sin\\theta = +\\frac{4}{5}$' },
      { code: 'A1', detail: '$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{4/5}{-3/5} = -\\frac{4}{3}$' },
    ],
    fullSolution:
      'From $\\sin^2\\theta = 1 - \\left(-\\frac{3}{5}\\right)^2 = \\frac{16}{25}$ and Quadrant 2 ($\\sin\\theta > 0$), $\\sin\\theta = \\frac{4}{5}$. Dividing by $\\cos\\theta = -\\frac{3}{5}$ gives $\\tan\\theta = -\\frac{4}{3}$.',
  },
  {
    id: 'p1-ch5-q3',
    chapterId: 5,
    topicId: '5.2',
    topicTitle: 'Trigonometric Identity Simplification',
    paperModule: 'P1',
    paperType: 'Pure Mathematics 1',
    marks: 4,
    sourceRef: '9709 P1 · Ch 5 Notes 5.2',
    question:
      'Which expression is identically equal to $\\frac{1}{\\cos\\theta} - \\frac{\\cos\\theta}{1 + \\sin\\theta}$ for $\\cos\\theta \\neq 0$ and $\\sin\\theta \\neq -1$?',
    questionType: 'mcq',
    options: ['tan theta', 'sin theta', '1 / cos theta', 'cos theta'],
    correctAnswer: 'tan theta',
    markScheme: [
      { code: 'M1', detail: 'Combine over $\\cos\\theta(1 + \\sin\\theta)$: $\\frac{(1 + \\sin\\theta) - \\cos^2\\theta}{\\cos\\theta(1 + \\sin\\theta)}$' },
      { code: 'M1', detail: 'Replace $1 - \\cos^2\\theta$ with $\\sin^2\\theta$' },
      { code: 'M1', detail: 'Factorise $\\sin\\theta(\\sin\\theta + 1)$ in numerator' },
      { code: 'A1', detail: 'Cancel $(1 + \\sin\\theta)$ to obtain $\\frac{\\sin\\theta}{\\cos\\theta} \\equiv \\tan\\theta$' },
    ],
    fullSolution:
      '$\\frac{1 + \\sin\\theta - \\cos^2\\theta}{\\cos\\theta(1 + \\sin\\theta)} = \\frac{\\sin^2\\theta + \\sin\\theta}{\\cos\\theta(1 + \\sin\\theta)} = \\frac{\\sin\\theta(\\sin\\theta + 1)}{\\cos\\theta(1 + \\sin\\theta)} = \\frac{\\sin\\theta}{\\cos\\theta} \\equiv \\tan\\theta$.',
  },
  {
    id: 'p1-ch5-q4',
    chapterId: 5,
    topicId: '5.3',
    topicTitle: 'Solving Trigonometric Equations',
    paperModule: 'P1',
    paperType: 'Pure Mathematics 1',
    marks: 4,
    sourceRef: '9709 P1 · Ch 5 Notes 5.3',
    question:
      'Solve the equation $2\\sin^2 x + 3\\cos x = 3$ for $0^\\circ < x < 360^\\circ$. What is the largest solution (strictly less than $360^\\circ$) in degrees?',
    questionType: 'numeric',
    correctAnswer: '300',
    acceptedAnswers: ['300', '300°'],
    numericAnswer: 300,
    tolerance: 0,
    unit: '°',
    markScheme: [
      { code: 'M1', detail: 'Replace $\\sin^2 x = 1 - \\cos^2 x$: $2\\cos^2 x - 3\\cos x + 1 = 0$' },
      { code: 'A1', detail: 'Factorise $(2\\cos x - 1)(\\cos x - 1) = 0 \\implies \\cos x = \\frac{1}{2}$ or $1$' },
      { code: 'A1', detail: 'On $0^\\circ < x < 360^\\circ$, $\\cos x = \\frac{1}{2}$ gives $x = 60^\\circ, 300^\\circ$' },
      { code: 'A1', detail: 'Largest root strictly less than $360^\\circ$ is $300^\\circ$' },
    ],
    fullSolution:
      '$2(1 - \\cos^2 x) + 3\\cos x = 3 \\implies 2\\cos^2 x - 3\\cos x + 1 = 0 \\implies (2\\cos x - 1)(\\cos x - 1) = 0$. Since $0^\\circ < x < 360^\\circ$ excludes $0^\\circ$ and $360^\\circ$, the solutions are $60^\\circ$ and $300^\\circ$; the largest is $300^\\circ$.',
  },

  // =========================================================================
  // CHAPTER 6: SERIES
  // =========================================================================
  {
    id: 'p1-ch6-q1',
    chapterId: 6,
    topicId: '6.1',
    topicTitle: 'Binomial Expansion of (a + b)^n',
    paperModule: 'P1',
    paperType: 'Pure Mathematics 1',
    marks: 3,
    sourceRef: '9709 P1 · Ch 6 Notes 6.1',
    question:
      'Find the coefficient of $x^5$ in the binomial expansion of $(x + 2)^{12}$.',
    questionType: 'numeric',
    correctAnswer: '101376',
    acceptedAnswers: ['101376', '101,376'],
    numericAnswer: 101376,
    tolerance: 0,
    markScheme: [
      { code: 'M1', detail: 'General term ${}^{12}C_r \\cdot x^{12-r} \\cdot 2^r$' },
      { code: 'A1', detail: 'Match $x^{12-r} = x^5 \\implies r = 7$' },
      { code: 'A1', detail: 'Evaluate ${}^{12}C_7 \\times 2^7 = 792 \\times 128 = 101\\,376$' },
    ],
    fullSolution:
      'Using general term ${}^{12}C_r \\cdot x^{12-r} \\cdot 2^r$, setting $12 - r = 5$ gives $r = 7$. The coefficient is ${}^{12}C_7 \\times 2^7 = 792 \\times 128 = 101\\,376$.',
  },
  {
    id: 'p1-ch6-q2',
    chapterId: 6,
    topicId: '6.1',
    topicTitle: 'Term Independent of x & Binomial Products',
    paperModule: 'P1',
    paperType: 'Pure Mathematics 1',
    marks: 4,
    sourceRef: '9709 P1 · Ch 6 Notes 6.1',
    question:
      'Find the term independent of $x$ in the expansion of $\\left(2x^2 - \\frac{1}{x}\\right)^6$.',
    questionType: 'numeric',
    correctAnswer: '60',
    acceptedAnswers: ['60'],
    numericAnswer: 60,
    tolerance: 0,
    markScheme: [
      { code: 'M1', detail: 'General term $\\binom{6}{r}(2x^2)^{6-r}(-x^{-1})^r$' },
      { code: 'A1', detail: 'Exponent of $x$ is $12 - 3r = 0 \\implies r = 4$' },
      { code: 'M1', detail: 'Substitute $r = 4$: $\\binom{6}{4} \\cdot 2^2 \\cdot (-1)^4$' },
      { code: 'A1', detail: '$15 \\times 4 \\times 1 = 60$' },
    ],
    fullSolution:
      'The $x$-power is $(x^2)^{6-r}(x^{-1})^r = x^{12 - 3r}$. Setting $12 - 3r = 0$ gives $r = 4$, yielding $\\binom{6}{4}2^2(-1)^4 = 15 \\times 4 = 60$.',
  },
  {
    id: 'p1-ch6-q3',
    chapterId: 6,
    topicId: '6.2',
    topicTitle: 'Arithmetic Progressions & Maximum Sum',
    paperModule: 'P1',
    paperType: 'Pure Mathematics 1',
    marks: 4,
    sourceRef: '9709 P1 · Ch 6 Notes 6.2',
    question:
      'An arithmetic progression has $4$th term $u_4 = 23$ and sum of the first $10$ terms $S_{10} = 155$. Find the maximum possible value of $S_n$.',
    questionType: 'numeric',
    correctAnswer: '164',
    acceptedAnswers: ['164'],
    numericAnswer: 164,
    tolerance: 0,
    markScheme: [
      { code: 'M1', detail: 'Solve $a + 3d = 23$ and $5(2a + 9d) = 155 \\implies a = 38,\\; d = -5$' },
      { code: 'M1', detail: 'Set $u_n = 38 - 5(n - 1) > 0 \\implies n < 8.6 \\implies n = 8$' },
      { code: 'M1', detail: 'Evaluate $S_8 = \\frac{8}{2}(2(38) + 7(-5))$' },
      { code: 'A1', detail: '$S_8 = 4 \\times 41 = 164$' },
    ],
    fullSolution:
      'Solving $a + 3d = 23$ and $2a + 9d = 31$ gives $d = -5$ and $a = 38$. Terms stay positive until $38 - 5(n - 1) > 0 \\implies n = 8$. Thus maximum sum is $S_8 = 4(76 - 35) = 164$.',
  },
  {
    id: 'p1-ch6-q4',
    chapterId: 6,
    topicId: '6.3',
    topicTitle: 'Geometric Progressions & Sum to Infinity',
    paperModule: 'P1',
    paperType: 'Pure Mathematics 1',
    marks: 4,
    sourceRef: '9709 P1 · Ch 6 Notes 6.3',
    question:
      'A geometric progression with positive terms has second term $18$ and fourth term $8$. Find the sum to infinity $S_\\infty$ of the progression.',
    questionType: 'numeric',
    correctAnswer: '81',
    acceptedAnswers: ['81'],
    numericAnswer: 81,
    tolerance: 0,
    markScheme: [
      { code: 'M1', detail: 'Divide $ar^3 / ar = 8/18 \\implies r^2 = \\frac{4}{9}$' },
      { code: 'A1', detail: 'Positive terms give $r = \\frac{2}{3}$ (and $|r| < 1$), so $a = 27$' },
      { code: 'M1', detail: 'Apply $S_\\infty = \\frac{a}{1 - r} = \\frac{27}{1 - 2/3}$' },
      { code: 'A1', detail: '$S_\\infty = 81$' },
    ],
    fullSolution:
      '$\\frac{ar^3}{ar} = \\frac{8}{18} \\implies r^2 = \\frac{4}{9}$. Since terms are positive, $r = \\frac{2}{3}$, giving $a = \\frac{18}{2/3} = 27$. Because $|r| < 1$, $S_\\infty = \\frac{27}{1 - 2/3} = 81$.',
  },

  // =========================================================================
  // CHAPTER 7: DIFFERENTIATION
  // =========================================================================
  {
    id: 'p1-ch7-q1',
    chapterId: 7,
    topicId: '7.1',
    topicTitle: 'Differentiation of Power Functions & Chain Rule',
    paperModule: 'P1',
    paperType: 'Pure Mathematics 1',
    marks: 3,
    sourceRef: '9709 P1 · Ch 7 Notes 7.1',
    question:
      'Given $f(x) = \\frac{12}{\\sqrt{3x + 1}}$, find the exact value of $f\'(1)$ as a simplified fraction ($a/b$).',
    questionType: 'text',
    correctAnswer: '-9/4',
    acceptedAnswers: ['-9/4', '-2.25'],
    numericAnswer: -2.25,
    tolerance: 0.001,
    markScheme: [
      { code: 'M1', detail: 'Rewrite $f(x) = 12(3x + 1)^{-1/2}$' },
      { code: 'A1', detail: 'Chain rule: $f\'(x) = -18(3x + 1)^{-3/2}$' },
      { code: 'A1', detail: 'At $x = 1$, $f\'(1) = -18(4)^{-3/2} = -\\frac{18}{8} = -\\frac{9}{4}$' },
    ],
    fullSolution:
      'Writing $f(x) = 12(3x + 1)^{-1/2}$ and differentiating gives $f\'(x) = 12(-\\frac{1}{2})(3x + 1)^{-3/2} \\times 3 = -18(3x + 1)^{-3/2}$. At $x = 1$, $f\'(1) = -18(4)^{-3/2} = -\\frac{9}{4}$.',
  },
  {
    id: 'p1-ch7-q2',
    chapterId: 7,
    topicId: '7.2',
    topicTitle: 'Tangents & Normals',
    paperModule: 'P1',
    paperType: 'Pure Mathematics 1',
    marks: 4,
    sourceRef: '9709 P1 · Ch 7 Notes 7.2',
    question:
      'A curve has equation $y = x^2 - \\frac{16}{x}$. Find the $y$-intercept of the normal to the curve at the point where $x = 2$. Give an exact fraction ($a/b$) or decimal.',
    questionType: 'text',
    correctAnswer: '-15/4',
    acceptedAnswers: ['-15/4', '-3.75'],
    numericAnswer: -3.75,
    tolerance: 0.001,
    markScheme: [
      { code: 'B1', detail: 'At $x = 2$, $y = 4 - 8 = -4$' },
      { code: 'M1', detail: '$\\frac{dy}{dx} = 2x + 16x^{-2}$, so at $x = 2$, $m_{\\text{tan}} = 8$' },
      { code: 'M1', detail: 'Normal has gradient $m_{\\text{normal}} = -\\frac{1}{8}$: $y + 4 = -\\frac{1}{8}(x - 2)$' },
      { code: 'A1', detail: 'At $x = 0$, $y = \\frac{1}{4} - 4 = -\\frac{15}{4}$' },
    ],
    fullSolution:
      'At $x = 2$, $y = -4$ and $\\frac{dy}{dx} = 2(2) + \\frac{16}{4} = 8$. Hence $m_{\\text{normal}} = -\\frac{1}{8}$, giving $y = -\\frac{1}{8}x - \\frac{15}{4}$, whose $y$-intercept is $-\\frac{15}{4}$.',
  },
  {
    id: 'p1-ch7-q3',
    chapterId: 7,
    topicId: '7.2',
    topicTitle: 'Increasing & Decreasing Functions',
    paperModule: 'P1',
    paperType: 'Pure Mathematics 1',
    marks: 3,
    sourceRef: '9709 P1 · Ch 7 Notes 7.2',
    question:
      'Find the set of values of $x$ for which the cubic function $f(x) = 2x^3 - 9x^2 + 12x - 5$ is decreasing.',
    questionType: 'mcq',
    options: ['1 < x < 2', 'x < 1 or x > 2', '-2 < x < -1', 'x > 3/2'],
    correctAnswer: '1 < x < 2',
    markScheme: [
      { code: 'M1', detail: 'Differentiate: $f\'(x) = 6x^2 - 18x + 12$' },
      { code: 'A1', detail: 'Factorise: $6(x - 1)(x - 2) < 0$' },
      { code: 'A1', detail: 'Upward quadratic negative between roots: $1 < x < 2$' },
    ],
    fullSolution:
      '$f\'(x) = 6(x^2 - 3x + 2) = 6(x - 1)(x - 2)$. Solving $f\'(x) < 0$ gives the interval $1 < x < 2$.',
  },
  {
    id: 'p1-ch7-q4',
    chapterId: 7,
    topicId: '7.3',
    topicTitle: 'Stationary Points, SDT & Connected Rates',
    paperModule: 'P1',
    paperType: 'Pure Mathematics 1',
    marks: 4,
    sourceRef: '9709 P1 · Ch 7 Notes 7.3',
    question:
      'Find the $y$-coordinate of the local minimum stationary point on the curve $y = x^3 - 3x^2 - 9x + 5$.',
    questionType: 'numeric',
    correctAnswer: '-22',
    acceptedAnswers: ['-22'],
    numericAnswer: -22,
    tolerance: 0,
    markScheme: [
      { code: 'M1', detail: 'Set $\\frac{dy}{dx} = 3x^2 - 6x - 9 = 3(x - 3)(x + 1) = 0$' },
      { code: 'A1', detail: 'Stationary $x$-values are $x = -1$ and $x = 3$' },
      { code: 'M1', detail: 'Use SDT $\\frac{d^2y}{dx^2} = 6x - 6$: positive ($12 > 0$) at $x = 3 \\implies$ local minimum' },
      { code: 'A1', detail: 'At $x = 3$, $y = 27 - 27 - 27 + 5 = -22$' },
    ],
    fullSolution:
      '$\\frac{dy}{dx} = 3(x - 3)(x + 1) = 0$ gives $x = -1$ and $x = 3$. Since $\\frac{d^2y}{dx^2} = 6(3) - 6 = 12 > 0$ at $x = 3$, the minimum is at $(3, 3^3 - 3(3)^2 - 9(3) + 5) = (3, -22)$.',
  },

  // =========================================================================
  // CHAPTER 8: INTEGRATION
  // =========================================================================
  {
    id: 'p1-ch8-q1',
    chapterId: 8,
    topicId: '8.1',
    topicTitle: 'Indefinite Integral & Constant c',
    paperModule: 'P1',
    paperType: 'Pure Mathematics 1',
    marks: 4,
    sourceRef: '9709 P1 · Ch 8 Notes 8.1',
    question:
      'A curve has gradient $\\frac{dy}{dx} = \\frac{6}{\\sqrt{3x + 4}}$ and passes through $(0, 5)$. Find the value of $y$ when $x = 4$.',
    questionType: 'numeric',
    correctAnswer: '13',
    acceptedAnswers: ['13'],
    numericAnswer: 13,
    tolerance: 0,
    markScheme: [
      { code: 'M1', detail: 'Integrate $6(3x + 4)^{-1/2}$: $y = 4\\sqrt{3x + 4} + c$' },
      { code: 'M1', detail: 'Substitute $(0, 5)$: $5 = 4\\sqrt{4} + c \\implies c = -3$' },
      { code: 'A1', detail: '$y = 4\\sqrt{3x + 4} - 3$' },
      { code: 'A1', detail: 'At $x = 4$, $y = 4\\sqrt{16} - 3 = 16 - 3 = 13$' },
    ],
    fullSolution:
      '$y = \\int 6(3x + 4)^{-1/2}\\,dx = 6\\cdot\\frac{(3x + 4)^{1/2}}{3(\\frac{1}{2})} + c = 4\\sqrt{3x + 4} + c$. Since $y(0) = 5$, $8 + c = 5 \\implies c = -3$. At $x = 4$, $y = 4(4) - 3 = 13$.',
  },
  {
    id: 'p1-ch8-q2',
    chapterId: 8,
    topicId: '8.2',
    topicTitle: 'Area Between Two Curves',
    paperModule: 'P1',
    paperType: 'Pure Mathematics 1',
    marks: 5,
    sourceRef: '9709 P1 · Ch 8 Notes 8.2',
    question:
      'Find the exact area of the finite region enclosed between the curve $y = x^2 - 4x + 5$ and the line $y = x + 1$. Give an exact fraction ($a/b$) or decimal.',
    questionType: 'text',
    correctAnswer: '9/2',
    acceptedAnswers: ['9/2', '4.5'],
    numericAnswer: 4.5,
    tolerance: 0.001,
    markScheme: [
      { code: 'M1', detail: 'Solve $x^2 - 4x + 5 = x + 1 \\implies x = 1, 4$' },
      { code: 'M1', detail: 'Integrate upper minus lower: $\\int_1^4 (-x^2 + 5x - 4)\\,dx$' },
      { code: 'A1', detail: 'Antiderivative $\\left[-\\frac{x^3}{3} + \\frac{5x^2}{2} - 4x\\right]_1^4$' },
      { code: 'A2', detail: 'Evaluate $\\frac{8}{3} - (-\\frac{11}{6}) = \\frac{9}{2}$' },
    ],
    fullSolution:
      'Intersections occur at $x^2 - 5x + 4 = 0 \\implies x = 1, 4$. Since $y = x + 1$ lies above $y = x^2 - 4x + 5$, $\\text{Area} = \\int_1^4 (-x^2 + 5x - 4)\\,dx = \\frac{9}{2}$.',
  },
  {
    id: 'p1-ch8-q3',
    chapterId: 8,
    topicId: '8.3',
    topicTitle: 'Improper Integrals',
    paperModule: 'P1',
    paperType: 'Pure Mathematics 1',
    marks: 4,
    sourceRef: '9709 P1 · Ch 8 Notes 8.3',
    question:
      'Find the exact value of the improper integral $\\int_2^\\infty \\frac{8}{(2x - 1)^3}\\,dx$ as a simplified fraction ($a/b$).',
    questionType: 'text',
    correctAnswer: '2/9',
    acceptedAnswers: ['2/9'],
    numericAnswer: 2 / 9,
    tolerance: 0.0001,
    markScheme: [
      { code: 'M1', detail: 'Integrate $\\int_2^b 8(2x - 1)^{-3}\\,dx = \\left[-\\frac{2}{(2x - 1)^2}\\right]_2^b$' },
      { code: 'A1', detail: 'Expression $\\frac{2}{9} - \\frac{2}{(2b - 1)^2}$' },
      { code: 'M1', detail: 'Take $\\lim_{b \\to \\infty}$, noting $\\frac{2}{(2b - 1)^2} \\to 0$' },
      { code: 'A1', detail: '$\\frac{2}{9}$' },
    ],
    fullSolution:
      '$\\lim_{b \\to \\infty} \\left[-\\frac{2}{(2x - 1)^2}\\right]_2^b = \\lim_{b \\to \\infty}\\left(\\frac{2}{9} - \\frac{2}{(2b - 1)^2}\\right) = \\frac{2}{9}$.',
  },
  {
    id: 'p1-ch8-q4',
    chapterId: 8,
    topicId: '8.3',
    topicTitle: 'Volume of Revolution Around y-Axis',
    paperModule: 'P1',
    paperType: 'Pure Mathematics 1',
    marks: 4,
    sourceRef: '9709 P1 · Ch 8 Notes 8.3',
    question:
      'The region bounded by $y = x^2 + 1$, $y = 5$, and the $y$-axis ($x \\ge 0$) is rotated through $2\\pi$ radians about the $y$-axis, forming a solid of volume $k\\pi$. Find the value of the integer $k$.',
    questionType: 'numeric',
    correctAnswer: '8',
    acceptedAnswers: ['8'],
    numericAnswer: 8,
    tolerance: 0,
    markScheme: [
      { code: 'M1', detail: 'Use $V = \\pi \\int_{y_1}^{y_2} x^2\\,dy$ with $x^2 = y - 1$' },
      { code: 'B1', detail: 'Limits $y = 1$ (at $x = 0$) to $y = 5$' },
      { code: 'M1', detail: '$V = \\pi \\left[\\frac{y^2}{2} - y\\right]_1^5 = \\pi\\left(\\frac{15}{2} - (-\\frac{1}{2})\\right)$' },
      { code: 'A1', detail: '$V = 8\\pi$, so $k = 8$' },
    ],
    fullSolution:
      '$x^2 = y - 1$ for $1 \\le y \\le 5$, so $V = \\pi\\int_1^5 (y - 1)\\,dy = \\pi\\left[\\frac{y^2}{2} - y\\right]_1^5 = 8\\pi \\implies k = 8$.',
  },
];
