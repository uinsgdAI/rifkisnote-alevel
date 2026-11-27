import type { SubtopicNote } from '../../../types/syllabus';

export const CHAPTER_1_NOTES: SubtopicNote[] = [
  {
    id: '1.1',
    chapterId: 1,
    code: '1.1',
    title: 'Forms of Quadratics, Factorisation, Completing the Square & Sketching',
    paperCode: 'P1',
    summary:
      'Switch fluently between general form $f(x) = ax^2 + bx + c$ and completing-the-square form $a(x - h)^2 + k$, solve quadratics by factorisation and completing the square, locate the vertex and axis of symmetry, and sketch parabolas cleanly.',
    aims: [
      'Recognise both standard forms: general form $f(x) = ax^2 + bx + c$ and completing-the-square vertex form $f(x) = a(x - h)^2 + k$.',
      'Solve quadratic equations step by step by factorisation ($\\frac{1}{a}(ax \\pm \\alpha)(ax \\pm \\beta) = 0$) and by completing the square.',
      'Find the vertex $(h, k)$, minimum/maximum type, axis of symmetry, $x$-intercepts, and $y$-intercept to sketch any quadratic accurately.',
    ],
    bigIdea:
      'Every quadratic curve $y = ax^2 + bx + c$ can be rewritten in completing-the-square form $y = a(x - h)^2 + k$. Because $(x - h)^2 \\ge 0$, the vertex $(h, k)$ gives the exact turning point (minimum if $a > 0$, maximum if $a < 0$) and axis of symmetry $x = h$ midway between the $x$-intercepts.',
    keyFindings: [
      {
        title: 'Two Fundamental Forms of a Quadratic Function',
        finding:
          'General form is $f(x) = ax^2 + bx + c$, while completing-the-square form is $f(x) = a(x - h)^2 + k$ ($a \\neq 0$).',
        noteBox:
          'In general form, vertex is $x = -\\frac{b}{2a}$ and $y = f\\left(-\\frac{b}{2a}\\right)$. In completed-square form $a(x - h)^2 + k$, vertex is immediately $(h, k)$!',
      },
      {
        title: 'Factorisation Split & Completing-the-Square Identity',
        finding:
          'To factorise $ax^2 + bx + c = 0$, find $\\pm\\alpha$ and $\\pm\\beta$ such that $(\\pm\\alpha)(\\pm\\beta) = ac$ and $(\\pm\\alpha) + (\\pm\\beta) = b$, then write $\\frac{1}{a}(ax \\pm \\alpha)(ax \\pm \\beta) = 0$. To complete the square, factor out $a$ from the $x^2$ and $x$ terms: $a\\left[\\left(x + \\frac{b}{2a}\\right)^2 - \\left(\\frac{b}{2a}\\right)^2\\right] + c$.',
        noteBox:
          '<u>Minimum if $a > 0$</u> ($\\cup$-shaped parabola) and <u>Maximum if $a < 0$</u> ($\\cap$-shaped parabola). The axis of symmetry $x = -\\frac{b}{2a} = h$ also equals the midpoint of the $x$-intercepts.',
      },
    ],
    objectives: [
      'Factorise monic ($a = 1$) and non-monic ($a \\neq 1$) quadratic equations using the $\\alpha \\times \\beta = ac$ and $\\alpha + \\beta = b$ method.',
      'Carry out completing the square on $ax^2 + bx + c$ for $a = 1$ and $a \\neq 1$ to solve equations and find extreme values.',
      'Determine the vertex, line of symmetry, $x$-intercepts, and $y$-intercept, and sketch $y = f(x)$.',
    ],
    keyFormulas: [
      {
        label: 'General Form & Completed-Square Vertex Form',
        latex: 'f(x) = ax^2 + bx + c = a(x - h)^2 + k',
        note: 'Minimum at $(h, k)$ if $a > 0$; Maximum at $(h, k)$ if $a < 0$.',
      },
      {
        label: 'General Factorisation Template',
        latex: 'ax^2 + bx + c = \\frac{1}{a}(ax \\pm \\alpha)(ax \\pm \\beta), \\quad (\\pm\\alpha)(\\pm\\beta) = ac,\\; (\\pm\\alpha) + (\\pm\\beta) = b',
        note: 'Set each bracket equal to $0$ after cancelling the factor $\\frac{1}{a}$.',
      },
      {
        label: 'Completing the Square Algebraic Rule',
        latex: 'a\\left(x^2 + \\frac{b}{a}x\\right) + c = a\\left[\\left(x + \\frac{b}{2a}\\right)^2 - \\left(\\frac{b}{2a}\\right)^2\\right] + c',
        note: 'Always remember to multiply $-\\left(\\frac{b}{2a}\\right)^2$ by $a$ when expanding out.',
      },
      {
        label: 'Vertex & Axis of Symmetry',
        latex: 'x_{\\text{vertex}} = -\\frac{b}{2a} = h = \\frac{x_1 + x_2}{2}, \\qquad y_{\\text{vertex}} = f\\left(-\\frac{b}{2a}\\right) = k',
        note: 'Axis of symmetry is the vertical line $x = h$ (or midpoint of roots $x_1, x_2$).',
      },
    ],
    stepByStepMethod: [
      'Method 1 (Factorisation): Compute $ac$ and find two numbers $\\pm\\alpha, \\pm\\beta$ multiplying to $ac$ and adding to $b$. Write $\\frac{1}{a}(ax \\pm \\alpha)(ax \\pm \\beta) = 0$ and solve.',
      'Method 2 (Completing the Square): Factor $a$ out of the first two terms $a\\left(x^2 + \\frac{b}{a}x\\right) + c$, replace $x^2 + \\frac{b}{a}x$ with $\\left(x + \\frac{b}{2a}\\right)^2 - \\left(\\frac{b}{2a}\\right)^2$, and simplify.',
      'Sketching a Quadratic (3 key features): (1) $x$-intercepts by setting $y = 0$; (2) $y$-intercept by setting $x = 0$; (3) vertex $(h, k)$ using $x = -\\frac{b}{2a}$ or completed-square form, noting $a > 0$ (min) or $a < 0$ (max).',
    ],
    diagrams: [
      {
        id: 'quad-sketch-fx',
        title: 'Sketch of $f(x) = x^2 - 5x + 6$',
        caption: 'Upward parabola ($a = 1 > 0$) with $x$-intercepts $(2, 0)$ and $(3, 0)$, $y$-intercept $(0, 6)$, and minimum vertex $\\left(\\frac{5}{2}, -\\frac{1}{4}\\right)$.',
      },
      {
        id: 'quad-sketch-gx',
        title: 'Sketch of $g(x) = 4x^2 - 8x + 3 = 4(x - 1)^2 - 1$',
        caption: 'Upward parabola ($a = 4 > 0$) with $x$-intercepts $\\left(\\frac{1}{2}, 0\\right)$ and $\\left(\\frac{3}{2}, 0\\right)$, $y$-intercept $(0, 3)$, and minimum vertex $(1, -1)$.',
      },
    ],
    comparisonTable: {
      title: 'Vertex & Shape Summary for $f(x) = ax^2 + bx + c = a(x - h)^2 + k$',
      headers: ['Form / Sign of $a$', 'Vertex Coordinates', 'Axis of Symmetry', 'Extreme Value Type'],
      rows: [
        ['General $ax^2 + bx + c$ ($a > 0$)', '$\\left(-\\frac{b}{2a},\\; f\\left(-\\frac{b}{2a}\\right)\\right)$', '$x = -\\frac{b}{2a}$', 'Minimum ($\\cup$-shape)'],
        ['General $ax^2 + bx + c$ ($a < 0$)', '$\\left(-\\frac{b}{2a},\\; f\\left(-\\frac{b}{2a}\\right)\\right)$', '$x = -\\frac{b}{2a}$', 'Maximum ($\\cap$-shape)'],
        ['Completed square $a(x - h)^2 + k$', '$(h, k)$', '$x = h$', 'Min $k$ if $a > 0$; Max $k$ if $a < 0$'],
      ],
    },
    studyNotes: [
      {
        heading: 'Solving by Factorisation ($a = 1$ and $a \\neq 1$)',
        body: 'To factorise $ax^2 + bx + c = 0$, split the middle term using two signed factors $\\pm\\alpha$ and $\\pm\\beta$ whose product is $ac$ and whose sum is $b$. Writing $\\frac{1}{a}(ax \\pm \\alpha)(ax \\pm \\beta) = 0$ works cleanly for every $a \\neq 0$.',
        bullets: [
          'For $x^2 - 5x + 6 = 0$: $ac = 6, b = -5$. Since $(-3)(-2) = 6$ and $(-3)+(-2) = -5$, we get $(x - 3)(x - 2) = 0$.',
          'For $2x^2 - 3x + 1 = 0$: $ac = 2, b = -3$. Using $(-2)(-1) = 2$ and $(-2)+(-1) = -3$, write $\\frac{1}{2}(2x - 2)(2x - 1) = (x - 1)(2x - 1) = 0$.',
        ],
      },
      {
        heading: 'Completing the Square & Finding Vertex Coordinates',
        body: 'Completing the square turns any quadratic into a single shifted square plus a constant. It simultaneously solves equations and exposes the turning point $(h, k)$ without calculus.',
        bullets: [
          'Take half of $\\frac{b}{a}$ inside the bracket, subtract its square inside the bracket, and multiply by $a$ carefully.',
          'The axis of symmetry $x = h$ always passes through the midpoint of the two $x$-intercepts whenever real roots exist.',
        ],
        noteBox:
          'To sketch a quadratic accurately, mark and label all three essentials: (1) $x$-intercept(s), (2) $y$-intercept, and (3) vertex $(h, k)$.',
      },
    ],
    workedExamples: [
      {
        title: 'Factorisation Example 1 ($a = 1$)',
        question: 'Solve $x^2 - 5x + 6 = 0$ by factorisation.',
        marks: 2,
        steps: [
          'Find two numbers multiplying to $ac = 1 \\times 6 = 6$ and adding to $b = -5$: $(-3) \\times (-2) = 6$ and $(-3) + (-2) = -5$.',
          'Write in factorised form: $\\frac{1}{1}(x - 3)(x - 2) = 0$.',
          'Set each factor to zero: $x - 3 = 0$ or $x - 2 = 0$.',
        ],
        answer: '$x = 3$ or $x = 2$',
        markSchemeNotes: 'M1 for factorising $(x - 3)(x - 2) = 0$, A1 for $x = 3$ or $x = 2$.',
      },
      {
        title: 'Factorisation Example 2 ($a = 2$)',
        question: 'Solve $2x^2 - 3x + 1 = 0$ by factorisation.',
        marks: 2,
        steps: [
          'Find two numbers multiplying to $ac = 2 \\times 1 = 2$ and adding to $b = -3$: $(-2) \\times (-1) = 2$ and $(-2) + (-1) = -3$.',
          'Apply $\\frac{1}{a}(ax \\pm \\alpha)(ax \\pm \\beta) = 0$: $\\frac{1}{2}(2x - 2)(2x - 1) = 0$.',
          'Cancel $\\frac{1}{2}$ into $(2x - 2)$: $(x - 1)(2x - 1) = 0$.',
          'Solve: $x - 1 = 0$ or $2x - 1 = 0$.',
        ],
        answer: '$x = 1$ or $x = \\frac{1}{2}$',
        markSchemeNotes: 'M1 for $(x - 1)(2x - 1) = 0$, A1 for both exact roots.',
      },
      {
        title: 'Completing the Square Example 1 ($a = 1$)',
        question: 'Solve $x^2 - 6x + 8 = 0$ by completing the square.',
        marks: 3,
        steps: [
          'Halve $-6$ to get $-3$: $\\big[(x - 3)^2 - (-3)^2\\big] + 8 = 0$.',
          'Simplify the constant: $(x - 3)^2 - 9 + 8 = 0 \\implies (x - 3)^2 - 1 = 0$.',
          'Isolate the squared bracket: $(x - 3)^2 = 1$.',
          'Take square roots: $x - 3 = \\pm 1 \\implies x = 3 \\pm 1$.',
        ],
        answer: '$x = 4$ or $x = 2$',
        markSchemeNotes: 'M1 completing square $(x - 3)^2 - 1 = 0$, M1 taking $\\pm 1$, A1 for $x = 4, 2$.',
      },
      {
        title: 'Completing the Square Example 2 ($a = 4$)',
        question: 'Solve $4x^2 - 8x + 3 = 0$ by completing the square.',
        marks: 4,
        steps: [
          'Factor out $a = 4$ from the $x^2$ and $x$ terms: $4(x^2 - 2x) + 3 = 0$.',
          'Complete the square inside the brackets: $4\\big[(x - 1)^2 - (-1)^2\\big] + 3 = 0$.',
          'Distribute $4$ back through: $4(x - 1)^2 - 4 + 3 = 0 \\implies 4(x - 1)^2 - 1 = 0$.',
          'Rearrange: $4(x - 1)^2 = 1 \\implies (x - 1)^2 = \\frac{1}{4}$.',
          'Take square roots: $x - 1 = \\pm\\frac{1}{2} \\implies x = 1 \\pm \\frac{1}{2}$.',
        ],
        answer: '$x = \\frac{3}{2}$ or $x = \\frac{1}{2}$',
        markSchemeNotes: 'M1 factoring $4$, A1 for $4(x - 1)^2 - 1 = 0$, M1 taking $\\pm\\frac{1}{2}$, A1 for $\\frac{3}{2}, \\frac{1}{2}$.',
      },
      {
        title: 'Sketching $f(x) = x^2 - 5x + 6$ (Intercepts & Vertex)',
        question: 'Find the $x$-intercepts, $y$-intercept, and vertex of $f(x) = x^2 - 5x + 6$, and describe its sketch.',
        marks: 4,
        steps: [
          '$x$-intercepts ($y = 0$): $x^2 - 5x + 6 = 0 \\implies (x - 3)(x - 2) = 0 \\implies x = 3$ or $x = 2$, i.e. $(2, 0)$ and $(3, 0)$.',
          '$y$-intercept ($x = 0$): $y = 0^2 - 5(0) + 6 = 6$, i.e. $(0, 6)$.',
          'Vertex $x$-coordinate: $x = -\\frac{b}{2a} = -\\frac{-5}{2(1)} = \\frac{5}{2}$ (notice $\\frac{2 + 3}{2} = \\frac{5}{2}$).',
          'Vertex $y$-coordinate: $y = f\\left(\\frac{5}{2}\\right) = \\left(\\frac{5}{2}\\right)^2 - 5\\left(\\frac{5}{2}\\right) + 6 = \\frac{25}{4} - \\frac{25}{2} + 6 = -\\frac{1}{4}$.',
          'Since $a = 1 > 0$, the curve opens upwards with minimum vertex $\\left(\\frac{5}{2}, -\\frac{1}{4}\\right)$.',
        ],
        answer: '$x$-int: $(2, 0), (3, 0)$; $y$-int: $(0, 6)$; minimum vertex $\\left(\\frac{5}{2}, -\\frac{1}{4}\\right)$',
        markSchemeNotes: 'B1 $x$-intercepts, B1 $y$-intercept, M1 vertex $x = 5/2$, A1 minimum at $(5/2, -1/4)$.',
      },
      {
        title: 'Sketching $g(x) = 4x^2 - 8x + 3$ from Completed-Square Form',
        question: 'Given $g(x) = 4x^2 - 8x + 3 = 4(x - 1)^2 - 1$, find its $x$-intercepts, $y$-intercept, and vertex.',
        marks: 4,
        steps: [
          '$x$-intercepts ($y = 0$): $4(x - 1)^2 - 1 = 0 \\implies (x - 1)^2 = \\frac{1}{4} \\implies x = \\frac{3}{2}$ or $x = \\frac{1}{2}$, giving $\\left(\\frac{1}{2}, 0\\right)$ and $\\left(\\frac{3}{2}, 0\\right)$.',
          '$y$-intercept ($x = 0$): $g(0) = 4(0)^2 - 8(0) + 3 = 3$, giving $(0, 3)$.',
          'Read vertex directly from $a(x - h)^2 + k = 4(x - 1)^2 - 1$: $x = h = 1$ and $y = k = -1$.',
          'Since $a = 4 > 0$, $(1, -1)$ is a minimum turning point.',
        ],
        answer: '$x$-int: $\\left(\\frac{1}{2}, 0\\right), \\left(\\frac{3}{2}, 0\\right)$; $y$-int: $(0, 3)$; minimum vertex $(1, -1)$',
        markSchemeNotes: 'B1 $x$-intercepts, B1 $y$-intercept $(0, 3)$, B1 vertex $(1, -1)$, B1 upward opening shape.',
      },
    ],
    commonMistakes: [
      'Forgetting to multiply $-(-1)^2$ by $4$ when expanding $4[(x - 1)^2 - (-1)^2] + 3$ (writing $-1 + 3$ instead of $-4 + 3$).',
      'Misreading the vertex of $a(x + 2)^2 - 1$ as $(2, -1)$ instead of $(-2, -1)$ — compare carefully with $a(x - h)^2 + k$.',
      'Dropping the $\\frac{1}{a}$ factor or forgetting one of the two $\\pm$ roots when solving $(x - h)^2 = c$.',
    ],
    rapidSummary: [
      {
        rule: '$f(x) = a(x - h)^2 + k$',
        detail: 'Vertex $(h, k)$, symmetry $x = h$; Minimum if $a > 0$, Maximum if $a < 0$.',
      },
      {
        rule: '3 Sketch Points',
        detail: 'Always compute $x$-intercepts ($y = 0$), $y$-intercept ($x = 0$), and vertex $(h, k)$.',
      },
    ],
    quickCheck: {
      id: 'qc-9709-1.1',
      paperType: 'Pure Mathematics 1',
      marks: 3,
      prompt:
        'Express $4x^2 - 8x + 3$ in the form $a(x - h)^2 + k$ and state the minimum $y$-value at its vertex.',
      answer: '-1',
      acceptedAnswers: ['-1'],
      numericAnswer: -1,
      tolerance: 0,
      hint: 'Factor out $4$ from $4x^2 - 8x$ to get $4(x^2 - 2x) + 3$, then complete the square.',
      solution:
        '$4(x^2 - 2x) + 3 = 4[(x - 1)^2 - 1] + 3 = 4(x - 1)^2 - 4 + 3 = 4(x - 1)^2 - 1$. The minimum value is $-1$ (at $x = 1$).',
    },
    sandbox: 'geogebra-graph',
  },
  {
    id: '1.2',
    chapterId: 1,
    code: '1.2',
    title: 'Quadratic Formula & Discriminant Conditions',
    paperCode: 'P1',
    summary:
      'Use the quadratic formula $x = \\frac{-b \\pm \\sqrt{D}}{2a}$ with discriminant $D = b^2 - 4ac$ to solve quadratics in exact surd form and classify whether an equation or line–curve pair has two real roots ($D > 0$), one equal root ($D = 0$), or no real solutions ($D < 0$).',
    aims: [
      'Apply $x = \\frac{-b \\pm \\sqrt{D}}{2a}$ where $D = b^2 - 4ac$ and simplify surds cleanly.',
      'Use the sign of $D = b^2 - 4ac$ ($D > 0$, $D = 0$, $D < 0$) to classify roots and solve parameter problems in $k$.',
    ],
    bigIdea:
      'In the quadratic formula $x = \\frac{-b \\pm \\sqrt{D}}{2a}$, the discriminant $D = b^2 - 4ac$ sits inside the square root and decides everything: positive gives two real roots, zero gives one repeated (equal/similar) root, and negative means no real solutions.',
    keyFindings: [
      {
        title: 'Quadratic Formula & Discriminant $D$',
        finding:
          'For $ax^2 + bx + c = 0$, $x = \\frac{-b \\pm \\sqrt{D}}{2a}$ where the discriminant is $D = b^2 - 4ac$.',
        noteBox:
          'Conditions on $D$: <u>$D > 0 \\implies$ two real roots</u>; <u>$D = 0 \\implies$ one real root / equal (similar) roots</u>; <u>$D < 0 \\implies$ no real solutions</u>.',
      },
      {
        title: 'Always-Positive ($ax^2 + bx + c > 0$) Condition',
        finding:
          'A quadratic expression stays strictly above the $x$-axis for all real $x$ if and only if it opens upwards ($a > 0$) AND never meets the $x$-axis ($D = b^2 - 4ac < 0$).',
        noteBox:
          'ALWAYS check BOTH $a > 0$ and $D < 0$ when proving a quadratic is positive definite for all $x \\in \\mathbb{R}$.',
      },
    ],
    objectives: [
      'Solve quadratic equations in exact surd form using $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$.',
      'Identify $D > 0$, $D = 0$, and $D < 0$ from equations and parabolic sketches.',
      'Find parameter ranges for $k$ given root conditions or line–curve intersections.',
    ],
    keyFormulas: [
      {
        label: 'Quadratic Formula',
        latex: 'x = \\frac{-b \\pm \\sqrt{D}}{2a}, \\qquad D = b^2 - 4ac',
        note: 'Simplify $\\sqrt{D}$ by extracting square factors, e.g. $\\sqrt{12} = 2\\sqrt{3}$.',
      },
      {
        label: 'Three Discriminant Cases',
        latex: 'D > 0 \\;(\\text{2 real roots}) \\qquad D = 0 \\;(\\text{1 equal root}) \\qquad D < 0 \\;(\\text{no real solutions})',
        note: 'For "has real roots" (whether distinct or equal), use $D \\ge 0$.',
      },
    ],
    stepByStepMethod: [
      'Rearrange the equation into $ax^2 + bx + c = 0$ and list $a$, $b$, and $c$ clearly with their signs.',
      'Evaluate the discriminant $D = b^2 - 4ac$ first before taking $\\sqrt{D}$.',
      'If $D < 0$, stop immediately and conclude there are NO real solutions.',
      'If solving for an unknown constant $k$, apply the condition ($D > 0$, $D = 0$, $D \\ge 0$, or $D < 0$) and solve the resulting equation or inequality in $k$.',
    ],
    diagrams: [
      {
        id: 'discriminant-cases',
        title: 'Discriminant Cases: $D > 0$, $D = 0$, and $D < 0$',
        caption: 'Geometrically, $D > 0$ cuts the $x$-axis twice, $D = 0$ touches at one repeated root, and $D < 0$ never crosses the $x$-axis.',
      },
    ],
    comparisonTable: {
      title: 'Discriminant Criteria ($D = b^2 - 4ac$)',
      headers: ['Condition', 'Roots of $ax^2 + bx + c = 0$', 'Parabola & $x$-axis', 'Line & Curve Intersection'],
      rows: [
        ['$D > 0$', 'Two distinct real roots', 'Crosses $x$-axis at 2 points', 'Line cuts curve twice'],
        ['$D = 0$', 'One real root (equal / similar roots)', 'Touches $x$-axis at vertex', 'Line is tangent to curve'],
        ['$D \\ge 0$', 'At least one real root', 'Meets $x$-axis', 'Line meets or intersects curve'],
        ['$D < 0$', 'No real solutions', 'No $x$-intercepts', 'Line misses curve'],
      ],
    },
    studyNotes: [
      {
        heading: 'Using the Quadratic Formula Cleanly',
        body: 'Evaluating $D = b^2 - 4ac$ separately prevents sign mistakes with $-4ac$ and tells you immediately if real solutions exist before simplifying any surds.',
        bullets: [
          'Always enclose negative $b$ in parentheses when squaring: $(-4)^2 = +16$, never $-4^2 = -16$.',
          'Divide EVERY term in the numerator by $2a$, e.g. $\\frac{4 \\pm 2\\sqrt{3}}{2} = 2 \\pm \\sqrt{3}$.',
        ],
      },
      {
        heading: 'Discriminant Inequalities in Parameter $k$',
        body: 'When $k$ sits inside $b$ or $c$, the condition $D > 0$ or $D < 0$ frequently produces a quadratic inequality in $k$. Factorise in $k$ and sketch the $k$-parabola to select the right interval.',
      },
    ],
    workedExamples: [
      {
        title: 'Quadratic Formula with Simplified Surd Roots',
        question: 'Solve $x^2 - 4x + 1 = 0$ using the quadratic formula, giving exact answers.',
        marks: 3,
        steps: [
          'Identify $a = 1$, $b = -4$, $c = 1$.',
          'Compute $D = b^2 - 4ac = (-4)^2 - 4(1)(1) = 16 - 4 = 12 > 0$ (two real roots).',
          'Apply the formula: $x = \\frac{-(-4) \\pm \\sqrt{12}}{2(1)} = \\frac{4 \\pm \\sqrt{4 \\times 3}}{2} = \\frac{4 \\pm 2\\sqrt{3}}{2}$.',
          'Divide numerator and denominator by $2$: $x = 2 \\pm \\sqrt{3}$.',
        ],
        answer: '$x = 2 + \\sqrt{3}$ or $x = 2 - \\sqrt{3}$',
        markSchemeNotes: 'M1 substituting into formula, A1 for $\\sqrt{12}$, A1 simplified exact roots $2 \\pm \\sqrt{3}$.',
      },
      {
        title: 'Detecting No Real Solutions ($D < 0$)',
        question: 'Determine the solutions of $2x^2 + x + 4 = 0$.',
        marks: 2,
        steps: [
          'Identify $a = 2$, $b = 1$, $c = 4$.',
          'Substitute into the quadratic formula: $x = \\frac{-1 \\pm \\sqrt{1^2 - 4(2)(4)}}{2(2)} = \\frac{-1 \\pm \\sqrt{1 - 32}}{4} = \\frac{-1 \\pm \\sqrt{-31}}{4}$.',
          'Because $D = -31 < 0$, $\\sqrt{-31}$ is not a real number.',
        ],
        answer: 'No real solutions ($D = -31 < 0$)',
        markSchemeNotes: 'M1 computing $D = 1^2 - 4(2)(4) = -31$, A1 concluding $D < 0 \\implies$ no real solutions.',
      },
      {
        title: 'Parameter Range Using $D < 0$',
        question:
          'Find the set of values of $k$ for which the equation $x^2 + (k - 2)x + (k + 1) = 0$ has no real roots.',
        marks: 4,
        steps: [
          'Identify $a = 1$, $b = k - 2$, $c = k + 1$.',
          'For no real roots, $D = b^2 - 4ac < 0$: $(k - 2)^2 - 4(1)(k + 1) < 0$.',
          'Expand and simplify: $k^2 - 4k + 4 - 4k - 4 < 0 \\implies k^2 - 8k < 0$.',
          'Factorise: $k(k - 8) < 0$. Since the $k$-parabola opens upwards with roots $0$ and $8$, it lies below the axis between $0$ and $8$.',
        ],
        answer: '$0 < k < 8$',
        markSchemeNotes: 'M1 for $D < 0$, A1 for $k^2 - 8k < 0$, M1 inequality sketch, A1 for $0 < k < 8$.',
      },
    ],
    commonMistakes: [
      'Cancelling only one term in $\\frac{4 \\pm 2\\sqrt{3}}{2}$ to write $2 \\pm 2\\sqrt{3}$ instead of $2 \\pm \\sqrt{3}$.',
      'Forgetting parentheses around negative $b$ when computing $b^2$.',
      'Confusing "has real roots" ($D \\ge 0$) with "has two distinct real roots" ($D > 0$).',
    ],
    rapidSummary: [
      {
        rule: '$D = b^2 - 4ac$',
        detail: '$D > 0$: 2 real roots; $D = 0$: 1 equal root; $D < 0$: no real solutions.',
      },
      {
        rule: 'Exact surd simplification',
        detail: 'Always simplify $\\sqrt{D}$ (e.g. $\\sqrt{12} = 2\\sqrt{3}$) and divide both parts by $2a$.',
      },
    ],
    quickCheck: {
      id: 'qc-9709-1.2',
      paperType: 'Pure Mathematics 1',
      marks: 3,
      prompt: 'Find the positive value of $k$ for which the equation $2x^2 + kx + 8 = 0$ has equal roots.',
      answer: '8',
      acceptedAnswers: ['8'],
      numericAnswer: 8,
      tolerance: 0,
      hint: 'Equal roots occur when $D = b^2 - 4ac = 0$ with $a = 2$, $b = k$, $c = 8$.',
      solution: '$k^2 - 4(2)(8) = 0 \\implies k^2 = 64 \\implies k = 8$ (since $k > 0$).',
    },
    sandbox: 'geogebra-graph',
  },
  {
    id: '1.3',
    chapterId: 1,
    code: '1.3',
    title: 'Quadratic Inequalities & Disguised Quadratics',
    paperCode: 'P1',
    summary:
      'Use quadratic sketching ($x$-intercepts and sign of $a$) to solve quadratic inequalities in one unknown, and reduce disguised quadratics in $x^4$, $\\sqrt{x}$, $x^{-1}$, or $2^x$ to standard form via substitution.',
    aims: [
      'Read off solution intervals directly from a quick parabola sketch using the $x$-intercepts.',
      'Solve equations reducible to $au^2 + bu + c = 0$ while respecting domain constraints on $u$.',
    ],
    bigIdea:
      'Because you already know how to find the $x$-intercepts and orientation ($a > 0$ opens up) of any quadratic, solving $ax^2 + bx + c < 0$ or $> 0$ is simply reading where the graph lies below or above the $x$-axis.',
    keyFindings: [
      {
        title: 'Sketching Method for Quadratic Inequalities',
        finding:
          'Arrange the inequality as $a(x - \\alpha)(x - \\beta) < 0$ or $> 0$ with $a > 0$ and $\\alpha < \\beta$. Between the $x$-intercepts ($\\alpha < x < \\beta$), the upward parabola is below the axis ($< 0$); outside ($x < \\alpha$ or $x > \\beta$), it is above ($> 0$).',
        noteBox:
          'ALWAYS write disconnected outer tails with "or" ($x < \\alpha$ or $x > \\beta$) and inner bounded intervals as a single chain ($\\alpha < x < \\beta$).',
      },
      {
        title: 'Disguised Quadratics via $u$-Substitution',
        finding:
          'Equations of the form $a[f(x)]^2 + b[f(x)] + c = 0$ reduce to $au^2 + bu + c = 0$ via $u = f(x)$, such as $u = x^2$, $u = \\sqrt{x}$, or $u = 2^x$.',
        noteBox:
          'Check $u$-domain restrictions before solving for $x$: $u = \\sqrt{x} \\ge 0$, $u = x^2 \\ge 0$, and $u = 2^x > 0$. Reject negative $u$ values!',
      },
    ],
    objectives: [
      'Solve quadratic inequalities cleanly using critical values and a parabola sketch.',
      'Solve equations in quadratic form by substituting $u = x^2$, $u = \\sqrt{x}$, $u = x^{-1}$, or exponential terms.',
    ],
    keyFormulas: [
      {
        label: 'Positive Leading Coeff ($a > 0$, roots $\\alpha < \\beta$)',
        latex:
          'a(x - \\alpha)(x - \\beta) < 0 \\iff \\alpha < x < \\beta \\qquad a(x - \\alpha)(x - \\beta) > 0 \\iff x < \\alpha \\text{ or } x > \\beta',
        note: 'Multiply through by $-1$ (and flip the inequality sign) first if $a < 0$.',
      },
      {
        label: 'Disguised Quadratic Substitutions',
        latex: 'x^4 + bx^2 + c = 0 \\; (u = x^2 \\ge 0) \\qquad x + b\\sqrt{x} + c = 0 \\; (u = \\sqrt{x} \\ge 0)',
        note: 'Principal square root $\\sqrt{x}$ is never negative.',
      },
    ],
    stepByStepMethod: [
      'Bring all terms to one side so RHS $= 0$ and make the $x^2$ coefficient positive.',
      'Find the $x$-intercepts (critical values) $\\alpha < \\beta$ by factorisation or quadratic formula.',
      'Sketch the $\\cup$-parabola crossing at $\\alpha$ and $\\beta$ and read off the required region ($<, \\le, >, \\ge$).',
      'For disguised quadratics, state $u = f(x)$, solve for $u$, filter by $u \\ge 0$ (or $u > 0$), then solve for $x$.',
    ],
    comparisonTable: {
      title: 'Disguised Quadratic Reference',
      headers: ['Equation Type', 'Substitution', 'Constraint on $u$', 'Back-Substitution'],
      rows: [
        ['$ax^4 + bx^2 + c = 0$', '$u = x^2$', '$u \\ge 0$', '$x = \\pm\\sqrt{u}$'],
        ['$ax + b\\sqrt{x} + c = 0$', '$u = \\sqrt{x}$', '$u \\ge 0$', '$x = u^2$'],
        ['$a(2^{2x}) + b(2^x) + c = 0$', '$u = 2^x$', '$u > 0$', '$x = \\log_2 u$'],
        ['$ax^{-2} + bx^{-1} + c = 0$', '$u = x^{-1}$', '$u \\neq 0$', '$x = \\frac{1}{u}$'],
      ],
    },
    studyNotes: [
      {
        heading: 'Why We Never Take Square Roots Blindly in Inequalities',
        body: 'Writing $x^2 > 9 \\implies x > \\pm 3$ is invalid. Rewrite as $x^2 - 9 > 0 \\implies (x - 3)(x + 3) > 0$, sketch the parabola with roots $-3$ and $3$, and read off $x < -3$ or $x > 3$.',
      },
      {
        heading: 'Handling Extraneous Roots in $u = \\sqrt{x}$',
        body: 'In Cambridge P1, $\\sqrt{x} \\ge 0$. If $2u^2 - 7u + 3 = 0$ yields two positive roots $u = \\frac{1}{2}$ and $u = 3$, both give valid $x$; if a root is negative (e.g. $u = -2$), explicitly state "no real solution for $\\sqrt{x} = -2$" and reject it.',
      },
    ],
    workedExamples: [
      {
        title: 'Quadratic Inequality After Rearrangement',
        question: 'Find the set of values of $x$ satisfying $2x^2 + 5 < 11x$.',
        marks: 3,
        steps: [
          'Move all terms to the LHS: $2x^2 - 11x + 5 < 0$.',
          'Factorise ($ac = 10, b = -11 \\implies -10$ and $-1$): $\\frac{1}{2}(2x - 10)(2x - 1) = (x - 5)(2x - 1) < 0$.',
          'Critical values ($x$-intercepts) are $x = \\frac{1}{2}$ and $x = 5$.',
          'Since $a = 2 > 0$, the parabola is below the $x$-axis between the roots.',
        ],
        answer: '$\\frac{1}{2} < x < 5$',
        markSchemeNotes: 'M1 factorising to critical values $\\frac{1}{2}$ and $5$, M1 sketch/region, A1 for $\\frac{1}{2} < x < 5$.',
      },
      {
        title: 'Disguised Quadratic in $\\sqrt{x}$',
        question: 'Solve the equation $2x - 7\\sqrt{x} + 3 = 0$.',
        marks: 4,
        steps: [
          'Substitute $u = \\sqrt{x}$ ($u \\ge 0$), so $x = u^2$.',
          'The equation becomes $2u^2 - 7u + 3 = 0$.',
          'Factorise: $(2u - 1)(u - 3) = 0 \\implies u = \\frac{1}{2}$ or $u = 3$ (both $\\ge 0$).',
          'Back-substitute $x = u^2$: $x = \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$ or $x = 3^2 = 9$.',
        ],
        answer: '$x = \\frac{1}{4}$ or $x = 9$',
        markSchemeNotes: 'M1 substitution $u = \\sqrt{x}$, A1 $u = \\frac{1}{2}, 3$, M1 squaring, A1 both values.',
      },
    ],
    commonMistakes: [
      'Writing $\\frac{1}{2} > x > 5$ or using "and" instead of "or" for outer tails ($x < -3$ or $x > 5$).',
      'Keeping $x = (-2)^2 = 4$ when $\\sqrt{x} = -2$ is impossible.',
      'Forgetting the negative root when undoing $u = x^2$ (e.g. $x^2 = 9 \\implies x = \\pm 3$).',
    ],
    rapidSummary: [
      {
        rule: 'Sketch to solve inequalities',
        detail: 'Find $x$-intercepts first; $< 0$ is between roots, $> 0$ is outside roots (for $a > 0$).',
      },
      {
        rule: 'Check $u \\ge 0$',
        detail: 'Discard negative $u$ when $u = x^2$ or $u = \\sqrt{x}$.',
      },
    ],
    quickCheck: {
      id: 'qc-9709-1.3',
      paperType: 'Pure Mathematics 1',
      marks: 3,
      prompt: 'Find the largest integer $x$ satisfying $x^2 - 2x - 15 < 0$.',
      answer: '4',
      acceptedAnswers: ['4'],
      numericAnswer: 4,
      tolerance: 0,
      hint: 'Factorise $(x - 5)(x + 3) < 0$ to find the strict interval of $x$.',
      solution: '$(x - 5)(x + 3) < 0 \\implies -3 < x < 5$. The largest integer strictly below $5$ is $4$.',
    },
    sandbox: 'quadratic-solver',
  },
  {
    id: '1.4',
    chapterId: 1,
    code: '1.4',
    title: 'Simultaneous Equations & Line–Curve Intersections',
    paperCode: 'P1',
    summary:
      'Solve simultaneous systems containing one linear and one quadratic equation by substitution, and combine substitution with $D = b^2 - 4ac$ to solve line–curve tangency and intersection problems.',
    aims: [
      'Eliminate one variable cleanly from a linear and quadratic pair without unnecessary fractions.',
      'Interpret the combined quadratic discriminant $D > 0$, $D = 0$, $D < 0$ geometrically for lines and curves.',
    ],
    bigIdea:
      'Intersecting a straight line with a quadratic curve or circle turns a 2D geometry question into a 1D quadratic equation $Ax^2 + Bx + C = 0$. Its roots locate the intersection points, and $D = B^2 - 4AC$ tells you whether the line cuts twice, touches as a tangent, or misses completely.',
    keyFindings: [
      {
        title: 'Substitution Always Moves from Linear into Quadratic',
        finding:
          'Isolate whichever variable has coefficient $\\pm 1$ in the linear equation, substitute into the quadratic to get $Ax^2 + Bx + C = 0$, and substitute each solved value back into the LINEAR equation to get matched $(x, y)$ pairs.',
        noteBox:
          'NEVER substitute $x$ back into the quadratic equation when finding $y$ — that can generate extra false coordinates that do not lie on the straight line!',
      },
      {
        title: 'Tangency Criterion ($D = 0$)',
        finding:
          'A line $y = mx + k$ is tangent to a quadratic curve if and only if the combined equation has $D = B^2 - 4AC = 0$, giving one repeated intersection at $x = -\\frac{B}{2A}$.',
        noteBox:
          'Line cuts curve twice ($D > 0$); line is tangent ($D = 0$); line does not meet curve ($D < 0$).',
      },
    ],
    objectives: [
      'Solve simultaneous equations where one is linear and one is quadratic.',
      'Find exact coordinates of intersection between a line and a curve.',
      'Determine constant values $k$ for tangency or non-intersection via the discriminant.',
    ],
    keyFormulas: [
      {
        label: 'Elimination & Tangency Condition',
        latex: 'y = mx + c \\;\\text{ into }\\; f(x, y) = 0 \\implies Ax^2 + Bx + C = 0, \\quad D = B^2 - 4AC = 0',
        note: 'At tangency, the unique contact $x$-coordinate is immediately $x = -\\frac{B}{2A}$.',
      },
    ],
    stepByStepMethod: [
      'Rearrange the linear equation for $x$ or $y$ (choose the variable without a fraction coefficient).',
      'Substitute into the quadratic equation, expand carefully, and collect into $Ax^2 + Bx + C = 0$.',
      'Solve for the first variable (or apply $D = 0 / > 0 / < 0$ if solving for $k$).',
      'Substitute back into the LINEAR equation to pair every $x$ with its exact $y$.',
    ],
    comparisonTable: {
      title: 'Line–Curve Intersection Cases',
      headers: ['Geometry', 'Discriminant of Combined Quadratic', 'Intersection Pairs'],
      rows: [
        ['Secant line cuts curve twice', '$B^2 - 4AC > 0$', '2 distinct points $(x, y)$'],
        ['Line is tangent to curve', '$B^2 - 4AC = 0$', '1 repeated contact point'],
        ['Line misses curve', '$B^2 - 4AC < 0$', '0 real intersections'],
      ],
    },
    studyNotes: [
      {
        heading: 'Choosing the Cleanest Substitution',
        body: 'In $2x - y = 3$ and $x^2 - xy + y^2 = 7$, isolating $y = 2x - 3$ avoids fractions completely. Always pair final solutions explicitly as coordinates $(x_1, y_1)$ and $(x_2, y_2)$.',
      },
      {
        heading: 'Point of Tangency Shortcut',
        body: 'Once you find the parameter $k$ making $D = 0$, the combined quadratic is guaranteed to be a perfect square $A(x - h)^2 = 0$, so the contact point $x = -\\frac{B}{2A}$ follows immediately.',
      },
    ],
    workedExamples: [
      {
        title: 'Solving a Linear and Quadratic Simultaneous Pair',
        question: 'Solve the simultaneous equations $2x - y = 3$ and $x^2 - xy + y^2 = 7$.',
        marks: 5,
        steps: [
          'From the linear equation, $y = 2x - 3$.',
          'Substitute into the quadratic: $x^2 - x(2x - 3) + (2x - 3)^2 = 7$.',
          'Expand carefully: $x^2 - 2x^2 + 3x + 4x^2 - 12x + 9 = 7$.',
          'Simplify: $3x^2 - 9x + 2 = 0$.',
          'Use the quadratic formula: $x = \\frac{9 \\pm \\sqrt{(-9)^2 - 4(3)(2)}}{6} = \\frac{9 \\pm \\sqrt{57}}{6}$.',
          'Substitute into $y = 2x - 3$: $y = \\frac{9 \\pm \\sqrt{57}}{3} - 3 = \\pm\\frac{\\sqrt{57}}{3}$.',
        ],
        answer: '$\\left(\\frac{9 + \\sqrt{57}}{6}, \\frac{\\sqrt{57}}{3}\\right)$ and $\\left(\\frac{9 - \\sqrt{57}}{6}, -\\frac{\\sqrt{57}}{3}\\right)$',
        markSchemeNotes: 'M1 substituting $y = 2x - 3$, A1 for $3x^2 - 9x + 2 = 0$, M1 formula, A1 $x$, A1 paired $y$.',
      },
      {
        title: 'Line Tangent to a Parabola',
        question:
          'The line $y = 2x + k$ is a tangent to the curve $y = x^2 - 4x + 5$. Find $k$ and the point of contact.',
        marks: 4,
        steps: [
          'Equate $y$: $x^2 - 4x + 5 = 2x + k \\implies x^2 - 6x + (5 - k) = 0$.',
          'For tangency, $D = 0$: $(-6)^2 - 4(1)(5 - k) = 0$.',
          'Solve: $36 - 20 + 4k = 0 \\implies 4k = -16 \\implies k = -4$.',
          'Substitute $k = -4$: $x^2 - 6x + 9 = 0 \\implies (x - 3)^2 = 0 \\implies x = 3$, then $y = 2(3) - 4 = 2$.',
        ],
        answer: '$k = -4$; point of contact $(3, 2)$',
        markSchemeNotes: 'M1 equating, M1 setting $D = 0$, A1 $k = -4$, A1 $(3, 2)$.',
      },
    ],
    commonMistakes: [
      'Listing $x$ and $y$ values separately without matching each $x$ to its partner $y$.',
      'Plugging $x$ back into the quadratic instead of the linear equation.',
      'Dropping negative signs when expanding $-x(2x - 3)$ or $-(mx + c)$.',
    ],
    rapidSummary: [
      {
        rule: 'Linear into quadratic',
        detail: 'Isolate the coefficient-$1$ variable in the linear equation, substitute, solve, then return to the linear equation.',
      },
      {
        rule: 'Tangency = $D = 0$',
        detail: 'Equate line and curve first, then set $B^2 - 4AC = 0$.',
      },
    ],
    quickCheck: {
      id: 'qc-9709-1.4',
      paperType: 'Pure Mathematics 1',
      marks: 3,
      prompt: 'The line $y = 4x + c$ is a tangent to $y = x^2 + 2x + 5$. Find $c$.',
      answer: '4',
      acceptedAnswers: ['4'],
      numericAnswer: 4,
      tolerance: 0,
      hint: 'Set $x^2 + 2x + 5 = 4x + c$, collect terms to $= 0$, and solve $b^2 - 4ac = 0$.',
      solution: '$x^2 - 2x + (5 - c) = 0 \\implies (-2)^2 - 4(1)(5 - c) = 0 \\implies 4 - 20 + 4c = 0 \\implies c = 4$.',
    },
    sandbox: 'geogebra-graph',
  },
];
