import type { SubtopicNote } from '../../../types/syllabus';

export const CHAPTER_8_NOTES: SubtopicNote[] = [
  {
    id: '8.1',
    chapterId: 8,
    code: '8.1',
    title: 'Indefinite Integral (Antiderivative) & Constant of Integration $c$',
    paperCode: 'P1',
    summary:
      'Reverse differentiation using $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + c$ ($n \\neq -1$) and $\\int (ax + b)^n\\,dx = \\frac{(ax + b)^{n+1}}{a(n+1)} + c$, and recover the equation of a curve from $\\frac{dy}{dx}$ and a given point.',
    aims: [
      'Master the antiderivative power rule and linear composite rule $(ax + b)^n \\to \\frac{(ax + b)^{n+1}}{a(n+1)}$.',
      'Recover $y = f(x)$ from $\\frac{dy}{dx}$ (or $\\frac{d^2y}{dx^2}$) by solving for the constant $c$ using boundary coordinates.',
    ],
    bigIdea:
      'Integration is the antiderivative (reverse of differentiation): add $1$ to the exponent and divide by the new exponent ($x^n \\to \\frac{x^{n+1}}{n+1}$). For linear brackets $(ax + b)^n$, also divide by $a$. An indefinite integral $\\int f(x)\\,dx = F(x) + c$ always includes $+c$ until a point $(x_0, y_0)$ fixes $c$.',
    keyFindings: [
      {
        title: 'Antiderivative Power Rule & Linear Composite Formula',
        finding:
          'For $n \\neq -1$: $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + c$ and $\\int (ax + b)^n\\,dx = \\frac{(ax + b)^{n+1}}{a(n+1)} + c$.',
        noteBox:
          'Notice $(2x - 3)^3 \\to \\frac{(2x - 3)^4}{2(4)} = \\frac{(2x - 3)^4}{8}$: divide by BOTH the new power $4$ AND the $x$-coefficient $2$!',
      },
      {
        title: 'Indefinite Integral & Solving for $c$ on a Curve',
        finding:
          'Writing $\\int f(x)\\,dx = F(x) + c$ leaves a family of parallel curves. Substituting one point $(x_0, y_0)$ on the curve fixes the unique constant $c$.',
        noteBox:
          'Always check your antiderivative by differentiating it mentally—if $\\frac{d}{dx}[F(x) + c]$ does not equal $f(x)$, adjust the coefficient immediately!',
      },
    ],
    objectives: [
      'Understand integration as the reverse process of differentiation (antiderivative) and integrate $(ax + b)^n$ for any rational $n \\neq -1$, together with constant multiples, sums, and differences.',
      'Solve problems involving the evaluation of the arbitrary constant $c$ given $\\frac{dy}{dx}$ and a point on the curve.',
      'Integrate twice to find $y$ given $\\frac{d^2y}{dx^2}$ and two boundary conditions.',
    ],
    keyFormulas: [
      {
        label: 'Indefinite Integral / Power Rule ($n \\neq -1$)',
        latex: '\\int f(x)\\,dx = F(x) + c \\qquad \\int x^n\\,dx = \\frac{x^{n+1}}{n + 1} + c \\qquad \\int k\\,dx = kx + c',
        note: 'Remember $n = -1$ ($\\int x^{-1}\\,dx = \\ln|x| + c$) is NOT in P1—it belongs to P2/P3.',
      },
      {
        label: 'Linear Composite Antiderivative ($n \\neq -1$)',
        latex: '\\int (ax + b)^n\\,dx = \\frac{(ax + b)^{n+1}}{a(n + 1)} + c',
        note: 'Divide by BOTH $(n + 1)$ AND the $x$-coefficient $a$.',
      },
    ],
    stepByStepMethod: [
      'Rewrite products, roots, and single-term fractions as sums of $kx^n$ or $k(ax + b)^n$ BEFORE integrating.',
      'Increase every exponent by $1$ and divide by the new exponent (and by $a$ inside $(ax + b)^n$).',
      'Write $+c$ immediately on the integration line.',
      'Substitute the given point $(x_0, y_0)$ (or gradient value) to solve for $c$ and write the complete curve equation.',
    ],
    comparisonTable: {
      title: 'Antiderivative Table (from Notes)',
      headers: ['$f(x)$', '$\\int f(x)\\,dx$ (Antiderivative)', 'Check by Differentiating'],
      rows: [
        ['$x^n$ ($n \\neq -1$)', '$\\frac{x^{n+1}}{n + 1} + c$', '$\\frac{n+1}{n+1}x^n = x^n$'],
        ['$3x^2$', '$\\frac{3x^3}{3} + c = x^3 + c$', '$3x^2$'],
        ['$4x$', '$\\frac{4x^2}{2} + c = 2x^2 + c$', '$4x$'],
        ['$1000$', '$1000x + c$', '$1000$'],
        ['$(ax + b)^n$ ($n \\neq -1$)', '$\\frac{(ax + b)^{n+1}}{a(n + 1)} + c$', '$a(n+1)\\cdot\\frac{(ax+b)^n}{a(n+1)} = (ax+b)^n$'],
        ['$(2x - 3)^3$', '$\\frac{(2x - 3)^4}{2(4)} + c = \\frac{(2x - 3)^4}{8} + c$', '$\\frac{4(2)(2x-3)^3}{8} = (2x-3)^3$'],
      ],
    },
    studyNotes: [
      {
        heading: 'Two-Step Integration from $\\frac{d^2y}{dx^2}$',
        body: 'When given $\\frac{d^2y}{dx^2}$, a stationary point at $x = x_0$, and a curve point $(x_1, y_1)$: integrate once to get $\\frac{dy}{dx} + c_1$, plug in $\\frac{dy}{dx} = 0$ at $x = x_0$ to find $c_1$, THEN integrate a second time to get $y + c_2$ and use $(x_1, y_1)$ for $c_2$.',
        noteBox:
          'NEVER substitute $(x_1, y_1)$ into the derivative $\\frac{dy}{dx}$—only $(x, y)$ satisfies the integrated curve equation $y = F(x) + c$!',
      },
      {
        heading: 'Preparing Quotients and Products Before Integrating',
        body: 'There is no product or quotient rule for integration in P1. Split single-term denominators term by term—e.g. $\\int \\frac{x^3 - 4}{x^2}\\,dx = \\int (x - 4x^{-2})\\,dx$—and rewrite radicals like $\\frac{6}{\\sqrt{3x + 4}} = 6(3x + 4)^{-1/2}$ before integrating.',
        bullets: [
          'Check every fractional exponent after adding $1$: $-\\frac{1}{2} + 1 = +\\frac{1}{2}$, and dividing by $\\frac{1}{2}$ multiplies by $2$.',
        ],
      },
    ],
    workedExamples: [
      {
        title: 'Recovering a Curve Through $(-1, 0)$ (PDF Example)',
        question:
          'A curve passes through $(-1, 0)$ and has gradient $\\frac{dy}{dx} = 2x - 1$. Find the equation of the curve.',
        marks: 3,
        steps: [
          'Integrate $\\frac{dy}{dx} = 2x - 1$: $y = \\int (2x - 1)\\,dx = \\frac{2x^2}{2} - x + c = x^2 - x + c$.',
          'Substitute $(-1, 0)$: $0 = (-1)^2 - (-1) + c = 1 + 1 + c = 2 + c$.',
          'Solve for $c$: $c = -2$.',
        ],
        answer: '$y = x^2 - x - 2$',
        markSchemeNotes: 'M1 integrating $2x - 1$ to $x^2 - x + c$, M1 substituting $(-1, 0)$, A1 for $y = x^2 - x - 2$.',
      },
      {
        title: 'Finding a Curve Equation with Negative Powers',
        question:
          'A curve passes through $(2, 5)$ and has gradient $\\frac{dy}{dx} = 6x^2 - \\frac{8}{x^2}$. Find the equation of the curve.',
        marks: 4,
        steps: [
          'Rewrite $\\frac{dy}{dx} = 6x^2 - 8x^{-2}$.',
          'Integrate term by term: $y = \\frac{6x^3}{3} - \\frac{8x^{-1}}{-1} + c = 2x^3 + \\frac{8}{x} + c$.',
          'Substitute $(2, 5)$: $5 = 2(2)^3 + \\frac{8}{2} + c = 16 + 4 + c = 20 + c \\implies c = -15$.',
        ],
        answer: '$y = 2x^3 + \\frac{8}{x} - 15$',
        markSchemeNotes:
          'M1 rewriting $x^{-2}$, A1 integrating $2x^3 + 8x^{-1}$, M1 substituting $(2, 5)$, A1 final equation with $c = -15$.',
      },
      {
        title: 'Integrating a Linear Composite Radical',
        question:
          'Given $f\'(x) = \\frac{6}{\\sqrt{3x + 4}}$ and $f(0) = 5$, find $f(x)$.',
        marks: 4,
        steps: [
          'Write $f\'(x) = 6(3x + 4)^{-1/2}$.',
          'Integrate: $f(x) = 6 \\cdot \\frac{(3x + 4)^{1/2}}{3 \\cdot \\frac{1}{2}} + c = 4\\sqrt{3x + 4} + c$.',
          'Substitute $f(0) = 5$: $5 = 4\\sqrt{4} + c = 8 + c \\implies c = -3$.',
        ],
        answer: '$f(x) = 4\\sqrt{3x + 4} - 3$',
        markSchemeNotes: 'M1 reverse chain rule with $(3x+4)^{1/2}$, A1 coefficient $4$, M1 $f(0)=5$, A1 $c = -3$.',
      },
    ],
    commonMistakes: [
      'Forgetting to divide by $a$ when integrating $(ax + b)^n$.',
      'Omitting $+c$ or assuming $c = y_0$ without substituting $x_0$ (at $(2, 5)$, $c \\neq 5$).',
      'Integrating $\\frac{1}{x^2}$ as $\\ln(x^2)$ instead of $-\\frac{1}{x}$.',
    ],
    rapidSummary: [
      {
        rule: '$\\int (ax+b)^n\\,dx$',
        detail: '$\\frac{(ax+b)^{n+1}}{a(n+1)} + c$ for $n \\neq -1$.',
      },
      {
        rule: 'Find $c$ from $(x_0, y_0)$',
        detail: 'Always substitute the given point into the integrated expression.',
      },
    ],
    quickCheck: {
      id: 'qc-9709-8.1',
      paperType: 'Pure Mathematics 1',
      marks: 3,
      prompt:
        'A curve has gradient $\\frac{dy}{dx} = 3x^2 - 4x + 1$ and passes through $(2, 7)$. Find the $y$-intercept of the curve.',
      answer: '5',
      acceptedAnswers: ['5'],
      numericAnswer: 5,
      tolerance: 0,
      hint: 'Integrate to get $y = x^3 - 2x^2 + x + c$, then plug in $(2, 7)$ to find $c$ (the $y$-intercept).',
      solution:
        '$y = x^3 - 2x^2 + x + c$. At $(2, 7)$: $7 = 8 - 8 + 2 + c \\implies c = 5$. Since $y(0) = c$, the $y$-intercept is $5$.',
    },
    sandbox: 'none',
  },
  {
    id: '8.2',
    chapterId: 8,
    code: '8.2',
    title: 'Definite Integrals & All 4 Area Under/Between Curve Cases',
    paperCode: 'P1',
    summary:
      'Evaluate definite integrals $\\int_a^b f(x)\\,dx = F(x)\\big]_a^b = F(b) - F(a)$ and compute exact areas across all 4 geometric configurations: under $y = f(x)$ to the $x$-axis, between $y_2 - y_1$ ($dx$), to the $y$-axis via $\\int_c^d f(y)\\,dy$, and between $x_2 - x_1$ ($dy$).',
    aims: [
      'Evaluate definite integrals cleanly using $F(b) - F(a)$ with protected parentheses.',
      'Select the cleanest of the 4 area formulas ($\\int f(x)\\,dx$, $\\int (y_2 - y_1)\\,dx$, $\\int f(y)\\,dy$, $\\int (x_2 - x_1)\\,dy$) from a sketch.',
    ],
    bigIdea:
      'A definite integral $\\int_a^b f(x)\\,dx = F(b) - F(a)$ sums thin slices across an interval. Depending on whether the shaded region meets the $x$-axis ($dx$, top curve $y_2$ minus bottom curve $y_1$) or the $y$-axis ($dy$, right curve $x_2$ minus left curve $x_1$), one integral computes the exact area cleanly.',
    keyFindings: [
      {
        title: 'Definite Integral & The 4 Area Formulas',
        finding:
          '$\\int_a^b f(x)\\,dx = F(x)\\big]_a^b = F(b) - F(a)$. The four area cases are: (1) $A = \\int_a^b f(x)\\,dx$ to the $x$-axis; (2) $A = \\int_a^b (y_2 - y_1)\\,dx$ between $y_2 = f(x)$ and $y_1 = g(x)$; (3) $A = \\int_c^d f(y)\\,dy$ to the $y$-axis; (4) $A = \\int_c^d (x_2 - x_1)\\,dy$ between $x_2 = f(y)$ and $x_1 = g(y)$.',
        noteBox:
          'When a curve dips below the $x$-axis, split the integral at its $x$-intercept—otherwise positive and negative signed areas cancel!',
      },
    ],
    objectives: [
      'Evaluate definite integrals using $\\int_a^b f(x)\\,dx = F(b) - F(a)$.',
      'Apply integration to find the area bounded by a curve $y = f(x)$ and the $x$-axis, or between two curves $\\int_a^b (y_2 - y_1)\\,dx$.',
      'Find areas bounded by curves expressed as $x = f(y)$ against the $y$-axis ($\\int_c^d f(y)\\,dy$) or between two curves ($\\int_c^d (x_2 - x_1)\\,dy$).',
    ],
    keyFormulas: [
      {
        label: 'Definite Integral Evaluation',
        latex: '\\int_a^b f(x)\\,dx = F(x)\\Big]_a^b = F(b) - F(a)',
        note: 'The constant $+c$ cancels in $F(b) - F(a)$, so omit $+c$ inside definite brackets.',
      },
      {
        label: 'Cases 1 & 2: Vertical Strips ($dx$) to $x$-Axis or Between $y_2, y_1$',
        latex:
          'A = \\int_a^b f(x)\\,dx \\qquad\\qquad A = \\int_a^b (y_2 - y_1)\\,dx \\quad \\big(y_2 = f(x)\\text{ top},\\; y_1 = g(x)\\text{ bottom}\\big)',
        note: 'Find $a$ and $b$ by solving $f(x) = g(x)$ (or $f(x) = 0$) first.',
      },
      {
        label: 'Cases 3 & 4: Horizontal Strips ($dy$) to $y$-Axis or Between $x_2, x_1$',
        latex:
          'A = \\int_c^d f(y)\\,dy \\qquad\\qquad A = \\int_c^d (x_2 - x_1)\\,dy \\quad \\big(x_2 = f(y)\\text{ right},\\; x_1 = g(y)\\text{ left}\\big)',
        note: 'Remember to convert limits to $y$-values $c$ and $d$ whenever integrating $dy$!',
      },
    ],
    diagrams: [
      {
        id: 'area-under-curves',
        title: 'All 4 Area Under / Between Curves Configurations ($dx$ & $dy$)',
        caption: '(1) $A = \\int_a^b f(x)\\,dx$; (2) $A = \\int_a^b (y_2 - y_1)\\,dx$; (3) $A = \\int_c^d f(y)\\,dy$; (4) $A = \\int_c^d (x_2 - x_1)\\,dy$.',
      },
    ],
    stepByStepMethod: [
      'Sketch the curves and solve simultaneous equations to get exact intersection limits.',
      'Choose vertical strips ($dx$, top $y_2 - y_1$) or horizontal strips ($dy$, right $x_2 - x_1$).',
      'Simplify $(y_2 - y_1)$ or $(x_2 - x_1)$ algebraically BEFORE integrating.',
      'Evaluate $F(b) - F(a)$ using brackets around BOTH terms to protect negative signs.',
    ],
    comparisonTable: {
      title: 'The 4 Area Cases ($dx$ vs $dy$)',
      headers: ['Case & Boundary', 'Variable & Limits', 'Area Integral'],
      rows: [
        ['1. Curve $y = f(x)$ and $x$-axis', '$dx$, $x \\in [a, b]$', '$A = \\int_a^b f(x)\\,dx$ ($\\ge 0$)'],
        ['2. Between top $y_2 = f(x)$ & bottom $y_1 = g(x)$', '$dx$, intersections $a, b$', '$A = \\int_a^b (y_2 - y_1)\\,dx$'],
        ['3. Curve $x = f(y)$ and $y$-axis', '$dy$, $y \\in [c, d]$', '$A = \\int_c^d f(y)\\,dy$'],
        ['4. Between right $x_2 = f(y)$ & left $x_1 = g(y)$', '$dy$, intersections $c, d$', '$A = \\int_c^d (x_2 - x_1)\\,dy$'],
      ],
    },
    studyNotes: [
      {
        heading: 'Integrating With Respect to $y$: $A = \\int_c^d f(y)\\,dy$ & $\\int_c^d (x_2 - x_1)\\,dy$',
        body: 'When a shaded region sits against the $y$-axis (bounded by $y = c$ and $y = d$) or between two curves $x_2 = f(y)$ (right) and $x_1 = g(y)$ (left), expressing $x$ in terms of $y$ and integrating $dy$ avoids splitting the region into multiple pieces.',
        noteBox:
          'When a region lies partially above and partially below the $x$-axis, NEVER integrate across the $x$-intercept in one shot if asked for total AREA—positive and negative parts cancel!',
      },
      {
        heading: 'Combining Integration with Triangles & Trapezia',
        body: 'In 9709 Paper 1, shaded areas often sit between a curve and a tangent or normal down to an axis. Either subtract $\\int (y_2 - y_1)\\,dx$ over their shared $x$-span OR compute $\\int y_{\\text{curve}}\\,dx$ and add/subtract a right triangle or trapezium.',
      },
    ],
    workedExamples: [
      {
        title: 'Definite Integral Evaluation (PDF Example)',
        question: 'Evaluate the definite integral $\\int_0^2 (x + 2)\\,dx$.',
        marks: 2,
        steps: [
          'Find the antiderivative: $\\left[\\frac{x^2}{2} + 2x\\right]_0^2$.',
          'Evaluate $F(2) - F(0)$: $\\left(\\frac{2^2}{2} + 2(2)\\right) - \\left(\\frac{0^2}{2} + 2(0)\\right) = (2 + 4) - 0 = 6$.',
        ],
        answer: '$6$',
        markSchemeNotes: 'M1 antiderivative $\\frac{x^2}{2} + 2x$, A1 substituting $2$ and $0$ cleanly to get $6$.',
      },
      {
        title: 'Area Enclosed Between a Line and a Curve ($y_2 - y_1$)',
        question:
          'Find the area of the finite region enclosed by the curve $y = x^2 - 4x + 5$ and the line $y = x + 1$.',
        marks: 5,
        steps: [
          'Find intersections: $x^2 - 4x + 5 = x + 1 \\implies x^2 - 5x + 4 = 0 \\implies (x - 1)(x - 4) = 0$, so $x = 1$ and $x = 4$.',
          'Between $1$ and $4$, the line $y_2 = x + 1$ lies above the $\\cup$-parabola $y_1 = x^2 - 4x + 5$.',
          'Area $= \\int_1^4 (y_2 - y_1)\\,dx = \\int_1^4 \\big((x + 1) - (x^2 - 4x + 5)\\big)\\,dx = \\int_1^4 (-x^2 + 5x - 4)\\,dx$.',
          'Integrate: $\\left[-\\frac{x^3}{3} + \\frac{5x^2}{2} - 4x\\right]_1^4 = \\left(-\\frac{64}{3} + 40 - 16\\right) - \\left(-\\frac{1}{3} + \\frac{5}{2} - 4\\right) = \\frac{8}{3} - \\left(-\\frac{11}{6}\\right) = \\frac{9}{2}$.',
        ],
        answer: '$\\frac{9}{2}$ (or $4.5$)',
        markSchemeNotes:
          'M1 intersections $1, 4$, M1 subtracting $(x+1) - (x^2-4x+5)$, A1 integrating, M1 limits, A1 for $4.5$.',
      },
      {
        title: 'Area Bounded by the $y$-Axis ($\\int_c^d x\\,dy$)',
        question:
          'Find the area enclosed between the curve $y = \\sqrt{x} + 1$, the $y$-axis, and the lines $y = 2$ and $y = 4$.',
        marks: 4,
        steps: [
          'Rearrange for $x = f(y)$: $\\sqrt{x} = y - 1 \\implies x = (y - 1)^2$ (for $y \\ge 1$).',
          'Area $= \\int_2^4 (y - 1)^2\\,dy = \\left[\\frac{(y - 1)^3}{3}\\right]_2^4$.',
          'Evaluate: $\\frac{3^3}{3} - \\frac{1^3}{3} = 9 - \\frac{1}{3} = \\frac{26}{3}$.',
        ],
        answer: '$\\frac{26}{3}$',
        markSchemeNotes: 'M1 rearranging $x = (y - 1)^2$, A1 integrating, M1 limits $2$ and $4$, A1 for $\\frac{26}{3}$.',
      },
    ],
    commonMistakes: [
      'Integrating across an $x$-intercept in one piece when a curve crosses the axis, causing signed areas to cancel.',
      'Forgetting parentheses around $F(a)$ when computing $F(b) - F(a)$.',
      'Using $y$-limits inside a $dx$ integral or $x$-limits inside a $dy$ integral.',
    ],
    rapidSummary: [
      {
        rule: '4 Area Cases',
        detail: 'Vertical $dx$: $\\int f(x)\\,dx$ or $\\int (y_2 - y_1)\\,dx$; Horizontal $dy$: $\\int f(y)\\,dy$ or $\\int (x_2 - x_1)\\,dy$.',
      },
      {
        rule: '$F(b) - F(a)$',
        detail: 'Always wrap $F(b)$ and $F(a)$ in separate brackets so minus signs never flip.',
      },
    ],
    quickCheck: {
      id: 'qc-9709-8.2',
      paperType: 'Pure Mathematics 1',
      marks: 3,
      prompt: 'Evaluate the definite integral $\\int_1^3 (3x^2 - 2x)\\,dx$.',
      answer: '18',
      acceptedAnswers: ['18'],
      numericAnswer: 18,
      tolerance: 0,
      hint: 'Find the antiderivative $[x^3 - x^2]_1^3$.',
      solution: '$[x^3 - x^2]_1^3 = (27 - 9) - (1 - 1) = 18 - 0 = 18$.',
    },
    sandbox: 'geogebra-graph',
  },
  {
    id: '8.3',
    chapterId: 8,
    code: '8.3',
    title: 'Improper Integrals & All 4 Volume of Revolution Cases',
    paperCode: 'P1',
    summary:
      'Evaluate improper integrals by taking formal limits (using $\\frac{1}{x^k} \\to 0$ as $x \\to \\infty$ for $k > 0$), and calculate $360^\\circ$ ($2\\pi$) volumes of revolution across all 4 cases: $\\pi\\int_a^b [f(x)]^2\\,dx$, $\\pi\\int_a^b (y_2^2 - y_1^2)\\,dx$, $\\pi\\int_c^d [f(y)]^2\\,dy$, and $\\pi\\int_c^d (x_2^2 - x_1^2)\\,dy$.',
    aims: [
      'Replace $\\infty$ or an undefined endpoint with a limit variable ($b \\to \\infty$ or $a \\to -\\infty$ or $k \\to 0^+$) cleanly.',
      'Apply all 4 Volume of Revolution formulas ($x$-axis and $y$-axis, single curve and two-curve washer).',
    ],
    bigIdea:
      'An improper integral tests whether an unbounded domain or asymptote encloses a finite area using a formal limit (since $\\frac{1}{x^k} \\to 0$ as $x \\to \\infty$ for $k > 0$). Meanwhile, rotating a curve $360^\\circ$ ($2\\pi$ rad) creates stacked circular discs of area $\\pi r^2$ and thickness $dx$ (or $dy$), giving $V = \\pi\\int r^2\\,dx$ or $\\pi\\int (y_2^2 - y_1^2)\\,dx$.',
    keyFindings: [
      {
        title: 'Improper Integrals & Limit Rule ($\\frac{1}{x^k} \\to 0$)',
        finding:
          'Because $\\frac{1}{x^k} \\to 0$ as $x \\to \\infty$ for $k > 0$, evaluate $\\int_a^\\infty f(x)\\,dx = \\lim_{b \\to \\infty} \\int_a^b f(x)\\,dx$ (or $\\lim_{a \\to -\\infty} \\int_a^c f(x)\\,dx$, or $\\lim_{k \\to 0^+} \\int_k^a f(x)\\,dx$ at a vertical asymptote).',
        noteBox:
          'Never substitute $\\infty$ directly as a number ($1/\\infty$); always write $\\lim_{b \\to \\infty}$ cleanly and check whether the limit is finite (convergent) or infinite (divergent)!',
      },
      {
        title: 'All 4 Volumes of Revolution ($360^\\circ$ / $2\\pi$ Rotations)',
        finding:
          'Rotated $2\\pi$ about $x$-axis: (1) $V = \\pi\\int_a^b [f(x)]^2\\,dx$; (2) $V = \\pi\\int_a^b \\big((y_2)^2 - (y_1)^2\\big)\\,dx$. Rotated $2\\pi$ about $y$-axis: (3) $V = \\pi\\int_c^d [f(y)]^2\\,dy$; (4) $V = \\pi\\int_c^d \\big((x_2)^2 - (x_1)^2\\big)\\,dy$.',
        noteBox:
          'CRITICAL: Square EACH function BEFORE subtracting—it is $y_2^2 - y_1^2$ and $x_2^2 - x_1^2$, NEVER $(y_2 - y_1)^2$!',
      },
    ],
    objectives: [
      'Evaluate improper integrals with infinite bounds ($\\pm\\infty$) or undefined endpoints using explicit limits.',
      'Calculate volumes of revolution about the $x$-axis ($\\pi\\int_a^b [f(x)]^2\\,dx$) and $y$-axis ($\\pi\\int_c^d [f(y)]^2\\,dy$).',
      'Calculate hollow washer volumes between two curves: $\\pi\\int_a^b (y_2^2 - y_1^2)\\,dx$ and $\\pi\\int_c^d (x_2^2 - x_1^2)\\,dy$.',
    ],
    keyFormulas: [
      {
        label: 'Volumes Rotated $2\\pi$ About the $x$-Axis (Cases 1 & 2)',
        latex:
          'V = \\pi \\int_a^b \\big[f(x)\\big]^2\\,dx \\qquad\\qquad V = \\pi \\int_a^b \\big((y_2)^2 - (y_1)^2\\big)\\,dx',
        note: 'Derived from cylinder disc volume $\\pi r^2 h$ with radius $r = y$ and height $h = dx$.',
      },
      {
        label: 'Volumes Rotated $2\\pi$ About the $y$-Axis (Cases 3 & 4)',
        latex:
          'V = \\pi \\int_c^d \\big[f(y)\\big]^2\\,dy \\qquad\\qquad V = \\pi \\int_c^d \\big((x_2)^2 - (x_1)^2\\big)\\,dy',
        note: 'Isolate $x^2$ directly in terms of $y$ before integrating!',
      },
      {
        label: 'Improper Integral Convergence Limit',
        latex:
          '\\int_a^\\infty f(x)\\,dx = \\lim_{b \\to \\infty} \\int_a^b f(x)\\,dx \\qquad \\left(\\frac{1}{x^k} \\to 0 \\text{ as } x \\to \\infty \\text{ for } k > 0\\right)',
        note: 'If the resulting limit is finite, the integral converges; if it grows without bound, it diverges.',
      },
    ],
    diagrams: [
      {
        id: 'volume-of-revolution',
        title: 'All 4 Volume of Revolution Cases ($360^\\circ$ / $2\\pi$ About $x$-Axis & $y$-Axis)',
        caption: '(1) $\\pi\\int [f(x)]^2 dx$; (2) $\\pi\\int (y_2^2 - y_1^2) dx$; (3) $\\pi\\int [f(y)]^2 dy$; (4) $\\pi\\int (x_2^2 - x_1^2) dy$.',
      },
    ],
    stepByStepMethod: [
      'Improper integrals: replace $\\infty$ (or $-\\infty$, or an asymptote limit) with a parameter $b$ (or $a$, $k$), integrate normally, then take the limit explicitly.',
      'Volume around $x$-axis: square $y = f(x)$ and expand/simplify BEFORE integrating, then multiply by $\\pi$.',
      'Volume around $y$-axis: isolate $x^2$ directly in terms of $y$ and integrate $\\pi \\int_c^d x^2\\,dy$.',
      'Two-curve rotation: compute $y_{\\text{outer}}^2 - y_{\\text{inner}}^2$ (or $x_2^2 - x_1^2$) FIRST—never square the difference!',
    ],
    comparisonTable: {
      title: 'Improper Integral Convergence & Volume Summary',
      headers: ['Case', 'Condition / Formula', 'Key Rule'],
      rows: [
        ['$\\int_a^\\infty x^{-p}\\,dx$ ($a > 0$)', 'Converges iff $p > 1$', '$\\lim_{b \\to \\infty}$ leaves finite value when $p - 1 > 0$'],
        ['$\\int_0^a x^{-p}\\,dx$ ($a > 0$)', 'Converges iff $p < 1$', '$\\lim_{k \\to 0^+} k^{1-p} = 0$ iff $1 - p > 0$'],
        ['$x$-axis solid / washer', '$\\pi\\int_a^b y^2\\,dx$ or $\\pi\\int_a^b (y_2^2 - y_1^2)\\,dx$', 'Square $y$ first, keep $\\pi$'],
        ['$y$-axis solid / washer', '$\\pi\\int_c^d x^2\\,dy$ or $\\pi\\int_c^d (x_2^2 - x_1^2)\\,dy$', 'Use $y$-limits $c, d$ and $x^2$'],
      ],
    },
    studyNotes: [
      {
        heading: 'Washer Method Trap: $y_2^2 - y_1^2$ vs $(y_2 - y_1)^2$',
        body: 'Rotating the area between $y_2 = f(x)$ and $y_1 = g(x)$ sweeps out a washer of outer radius $y_2$ and inner radius $y_1$, whose cross-sectional area is $\\pi y_2^2 - \\pi y_1^2 = \\pi(y_2^2 - y_1^2)$. Writing $\\pi\\int (y_2 - y_1)^2\\,dx$ is always wrong.',
        noteBox:
          'When rotating around the $y$-axis, notice the integrand uses $x^2$! If $y = \\sqrt{x - 3}$, then $x = y^2 + 3$, so $x^2 = (y^2 + 3)^2 = y^4 + 6y^2 + 9$.',
      },
      {
        heading: 'Improper Integrals at Vertical Asymptotes ($x = 0$)',
        body: 'An integral $\\int_0^4 x^{-1/2}\\,dx$ is also improper because $x^{-1/2} = \\frac{1}{\\sqrt{x}}$ is undefined at $x = 0$. Replace $0$ with $k > 0$, evaluate $[2\\sqrt{x}]_k^4 = 4 - 2\\sqrt{k}$, and state that as $k \\to 0^+$, $2\\sqrt{k} \\to 0$, giving $4$.',
      },
    ],
    workedExamples: [
      {
        title: 'Improper Integral Examples ($\\pm\\infty$ Bounds, PDF & 9709)',
        question:
          'Evaluate (a) $\\int_1^\\infty \\frac{1}{x^2}\\,dx$, (b) $\\int_{-\\infty}^0 \\frac{1}{(1 - x)^3}\\,dx$, and (c) $\\int_2^\\infty \\frac{8}{(2x - 1)^3}\\,dx$.',
        marks: 6,
        steps: [
          '(a) Write as a limit: $\\lim_{b \\to \\infty} \\int_1^b x^{-2}\\,dx = \\lim_{b \\to \\infty}\\left[-\\frac{1}{x}\\right]_1^b = \\lim_{b \\to \\infty}\\left(-\\frac{1}{b} - (-1)\\right) = 1 - 0 = 1$.',
          '(b) Write as a limit: $\\lim_{a \\to -\\infty} \\int_a^0 (1 - x)^{-3}\\,dx = \\lim_{a \\to -\\infty}\\left[\\frac{(1 - x)^{-2}}{(-1)(-2)}\\right]_a^0 = \\lim_{a \\to -\\infty}\\left[\\frac{1}{2(1 - x)^2}\\right]_a^0$.',
          'Evaluate (b): $\\lim_{a \\to -\\infty}\\left(\\frac{1}{2(1)^2} - \\frac{1}{2(1 - a)^2}\\right) = \\frac{1}{2} - 0 = \\frac{1}{2}$.',
          '(c) Write as a limit: $\\lim_{b \\to \\infty} \\int_2^b 8(2x - 1)^{-3}\\,dx = \\lim_{b \\to \\infty}\\left[\\frac{8(2x - 1)^{-2}}{2(-2)}\\right]_2^b = \\lim_{b \\to \\infty}\\left[-\\frac{2}{(2x - 1)^2}\\right]_2^b = \\frac{2}{9} - 0 = \\frac{2}{9}$.',
        ],
        answer: '(a) $1$; (b) $\\frac{1}{2}$; (c) $\\frac{2}{9}$',
        markSchemeNotes:
          'M1 introducing explicit limit ($b \\to \\infty$ / $a \\to -\\infty$), A1 correct antiderivatives, M1 showing reciprocal term $\\to 0$, A1 exact answers.',
      },
      {
        title: 'Volume of Revolution About the $y$-Axis',
        question:
          'The region bounded by $y = x^2 + 1$, $y = 5$, and the $y$-axis (for $x \\ge 0$) is rotated through $360^\\circ$ about the $y$-axis. Find the exact volume of the solid formed.',
        marks: 4,
        steps: [
          'Rotating $2\\pi$ about the $y$-axis uses Case 3: $V = \\pi \\int_{y_1}^{y_2} x^2\\,dy$.',
          'Rearrange $y = x^2 + 1$ directly for $x^2$: $x^2 = y - 1$.',
          'When $x = 0$, $y = 1$; upper boundary is $y = 5$.',
          '$V = \\pi \\int_1^5 (y - 1)\\,dy = \\pi\\left[\\frac{y^2}{2} - y\\right]_1^5 = \\pi\\left(\\left(\\frac{25}{2} - 5\\right) - \\left(\\frac{1}{2} - 1\\right)\\right) = \\pi\\left(\\frac{15}{2} + \\frac{1}{2}\\right) = 8\\pi$.',
        ],
        answer: '$8\\pi$',
        markSchemeNotes:
          'M1 formula $\\pi\\int x^2\\,dy$ with $x^2 = y - 1$, B1 limits $1$ and $5$, M1 integrating, A1 exact $8\\pi$.',
      },
    ],
    commonMistakes: [
      'Integrating $\\pi(y_2 - y_1)^2$ instead of $\\pi(y_2^2 - y_1^2)$ for two curves.',
      'Forgetting the $\\pi$ multiplier or forgetting to square $y$ in $\\pi \\int y^2\\,dx$.',
      'Plugging in $\\infty$ directly instead of writing a formal limit $\\lim_{b\\to\\infty}$.',
    ],
    rapidSummary: [
      {
        rule: '4 Volume Cases',
        detail: '$V_x = \\pi\\int y^2\\,dx$ or $\\pi\\int (y_2^2 - y_1^2)\\,dx$; $V_y = \\pi\\int x^2\\,dy$ or $\\pi\\int (x_2^2 - x_1^2)\\,dy$.',
      },
      {
        rule: 'Improper integrals',
        detail: 'Integrate to variable $b$, then take $\\lim_{b\\to\\infty}$ using $\\frac{1}{x^k} \\to 0$ ($k > 0$).',
      },
    ],
    quickCheck: {
      id: 'qc-9709-8.3',
      paperType: 'Pure Mathematics 1',
      marks: 3,
      prompt: 'Find the exact value of the improper integral $\\int_1^\\infty \\frac{6}{x^3}\\,dx$.',
      answer: '3',
      acceptedAnswers: ['3'],
      numericAnswer: 3,
      tolerance: 0,
      hint: 'Integrate $6x^{-3}$ up to $b$, giving $\\left[-3x^{-2}\\right]_1^b$, then let $b \\to \\infty$.',
      solution:
        '$\\lim_{b\\to\\infty} \\left[-\\frac{3}{x^2}\\right]_1^b = \\lim_{b\\to\\infty}\\left(-\\frac{3}{b^2} + 3\\right) = 3$.',
    },
    sandbox: 'none',
  },
];
