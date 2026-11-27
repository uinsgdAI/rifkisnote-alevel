import type { SubtopicNote } from '../../../types/syllabus';

export const CHAPTER_2_NOTES: SubtopicNote[] = [
  {
    id: '2.1',
    chapterId: 2,
    code: '2.1',
    title: 'Mapping, Relations, Vertical Line Test, Domain & Range',
    paperCode: 'P1',
    summary:
      'Distinguish relations from functions using mapping diagrams and the vertical line test, and find the domain and range of linear, quadratic, radical, rational, and trigonometric functions.',
    aims: [
      'Classify mappings as one-one, many-one, one-many, or many-many, and apply the vertical line test.',
      'Find exact domains and ranges across linear, quadratic ($a(x-h)^2+k$), radical ($\\sqrt{f(x)}+k$), rational ($\\frac{ax+b}{cx+d}$), and trig functions.',
    ],
    bigIdea:
      'A relation connects inputs and outputs, whereas a function is a relation with ONLY ONE output for each input (one-one or many-one). The domain $D_f$ is the set of valid $x$-values, and the range $R_f$ is the resulting set of $y$-values.',
    keyFindings: [
      {
        title: 'Relation vs Function & Vertical Line Test',
        finding:
          'One-one (e.g. $y = ax + b$) and many-one (e.g. $y = ax^2 + bx + c$, even functions) are functions. One-many (e.g. circle $(x - a)^2 + (y - b)^2 = r^2$) and many-many (e.g. $\\pm y = \\pm 2x$) are NOT functions.',
        noteBox:
          '<u>Vertical Line Test</u>: a graph represents a function if and only if every vertical line cuts the curve at most once. If a vertical line cuts the graph twice or more, it is NOT a function.',
      },
      {
        title: 'Domain & Range Rules by Function Family',
        finding:
          'Linear $y = ax + b$: largest $D: x \\in \\mathbb{R}$, $R: y \\in \\mathbb{R}$. Quadratic $a(x - h)^2 + k$: largest $D: x \\in \\mathbb{R}$; if $a > 0$, $y \\ge y_{\\text{vertex}}$; if $a < 0$, $y \\le y_{\\text{vertex}}$ (check if vertex lies inside restricted domain!).',
        noteBox:
          'Radical $y = \\sqrt{f(x)} + k$: since $\\sqrt{(\\dots)} \\ge 0$, largest domain is $f(x) \\ge 0$ and $R: y \\ge k$. Rational $y = \\frac{ax + b}{cx + d} = k + \\frac{h}{cx + d}$: denominator $cx + d \\neq 0$ and $y \\neq \\frac{a}{c}$ (or $y \\neq k$).',
      },
    ],
    objectives: [
      'Identify one-one, many-one, one-many, and many-many relations and test curves with the vertical line test.',
      'Determine the largest possible domain and corresponding range for linear, quadratic, radical, rational, and trig functions.',
      'Find the exact range of a function over a restricted interval (including checking whether a quadratic vertex lies inside the domain).',
    ],
    keyFormulas: [
      {
        label: 'Quadratic Domain & Range',
        latex: 'y = a(x - h)^2 + k \\implies y \\ge k \\;(a > 0), \\quad y \\le k \\;(a < 0)',
        note: 'When domain is restricted (e.g. $x \\ge 2$), check if vertex $x = h$ lies inside the domain before stating the range.',
      },
      {
        label: 'Radical Function ($\\sqrt{f(x)} \\ge 0$)',
        latex: 'y = \\sqrt{f(x)} + k \\implies D: f(x) \\ge 0, \\qquad R: y \\ge k',
        note: 'If there is a minus sign in front, e.g. $k - \\sqrt{f(x)}$, then $-\\sqrt{f(x)} \\le 0 \\implies y \\le k$.',
      },
      {
        label: 'Rational Function (Zero Denominator Excluded)',
        latex: 'y = \\frac{ax + b}{cx + d} = k + \\frac{h}{cx + d} \\implies D: cx + d \\neq 0, \\quad R: y \\neq \\frac{a}{c}',
        note: 'On a restricted domain such as $x > 2$, inspect the sign of $\\frac{h}{cx + d}$ to narrow $R$ further.',
      },
      {
        label: 'Trigonometric Domains & Ranges',
        latex: '-1 \\le \\sin x \\le 1,\\; -1 \\le \\cos x \\le 1 \\;(x \\in \\mathbb{R}); \\qquad \\tan x: x \\neq \\frac{\\pi}{2} + k\\pi,\\; y \\in \\mathbb{R}',
        note: 'For $\\tan x$, vertical asymptotes occur at odd multiples of $\\frac{\\pi}{2}$.',
      },
    ],
    stepByStepMethod: [
      'Check whether the mapping passes the Vertical Line Test (one-one or many-one $\\implies$ function).',
      'Identify natural restrictions on $x$ for the Domain: keep expressions inside $\\sqrt{\\dots} \\ge 0$ and denominators $\\neq 0$.',
      'To find Range on a restricted domain: for linear, transform the inequality $a \\le x < b$ directly; for quadratic, check whether vertex $x = h$ lies inside $D_f$; for rational, rewrite as $k + \\frac{h}{cx + d}$.',
    ],
    diagrams: [
      {
        id: 'mapping-types',
        title: 'Four Types of Mapping Relations',
        caption: 'One-one and many-one have only one output per input (functions); one-many and many-many have multiple outputs for an input (not functions).',
      },
      {
        id: 'vertical-line-test',
        title: 'Vertical Line Test',
        caption: 'A vertical line cutting once confirms a function; cutting twice (e.g. a sideways parabola or circle) proves it is not a function.',
      },
      {
        id: 'linear-domain-range',
        title: 'Linear Function Domain & Range: $f(x) = 2x - 1,\\; -1 \\le x < 2$',
        caption: 'Closed circle at $(-1, -3)$ and open circle at $(2, 3)$ show $D_f: -1 \\le x < 2$ and $R_f: -3 \\le y < 3$.',
      },
    ],
    comparisonTable: {
      title: 'Domain & Range by Function Family',
      headers: ['Function Type', 'Standard Form', 'Largest Domain $D$', 'Range $R$ (Unrestricted)'],
      rows: [
        ['Linear', '$y = ax + b$', '$x \\in \\mathbb{R}$', '$y \\in \\mathbb{R}$'],
        ['Quadratic', '$y = a(x - h)^2 + k$', '$x \\in \\mathbb{R}$', '$y \\ge k$ ($a > 0$) or $y \\le k$ ($a < 0$)'],
        ['Radical', '$y = \\sqrt{f(x)} + k$', '$f(x) \\ge 0$', '$y \\ge k$'],
        ['Rational', '$y = \\frac{ax + b}{cx + d}$', '$cx + d \\neq 0$', '$y \\neq \\frac{a}{c}$'],
        ['Sine / Cosine', '$y = \\sin x,\\; \\cos x$', '$x \\in \\mathbb{R}$', '$-1 \\le y \\le 1$'],
        ['Tangent', '$y = \\tan x$', '$x \\neq \\frac{\\pi}{2} + k\\pi,\\; k \\in \\mathbb{Z}$', '$y \\in \\mathbb{R}$'],
      ],
    },
    studyNotes: [
      {
        heading: 'Closed vs Open Endpoints & Vertex Checks',
        body: 'In a linear inequality $-1 \\le x < 2$, transform step by step to preserve strict vs inclusive inequality signs. In a restricted quadratic like $f(x) = 2(x - 1)^2 + 5$ for $x \\ge 2$, the vertex at $x = 1$ lies OUTSIDE the domain, so the minimum occurs at the boundary $x = 2$, not at $y = 5$.',
      },
      {
        heading: 'Rewriting Rational Functions Before Finding Range',
        body: 'Write $\\frac{2x - 1}{2 - x}$ in quotient-remainder form $k + \\frac{h}{x - 2}$ so $x$ appears only once. Once $x$ appears in a single denominator, checking the sign of $x - 2$ gives the exact range immediately.',
        noteBox:
          'State range using $y$ or $f(x)$ (e.g. $R_f: y \\ge 7$), and NEVER leave range written in terms of $x$!',
      },
    ],
    workedExamples: [
      {
        title: 'Linear Function Domain & Range ($f(x) = 2x - 1,\\; -1 \\le x < 2$)',
        question: 'Find the domain and range of $f(x) = 2x - 1$ for $-1 \\le x < 2$.',
        marks: 3,
        steps: [
          'The domain is given directly: $D_f: -1 \\le x < 2$.',
          'Multiply all parts of $-1 \\le x < 2$ by $2$: $-2 \\le 2x < 4$.',
          'Subtract $1$ from all parts: $-3 \\le 2x - 1 < 3$.',
          'Since $y = 2x - 1$, the range keeps the exact closed/open inequality signs.',
        ],
        answer: '$D_f: -1 \\le x < 2$; $R_f: -3 \\le y < 3$',
        markSchemeNotes: 'B1 domain, M1 scaling/shifting endpoints, A1 for $-3 \\le y < 3$.',
      },
      {
        title: 'Quadratic Range When Vertex Lies Outside Domain',
        question: 'Find the domain and range of $f(x) = 2(x - 1)^2 + 5$ for $x \\ge 2$.',
        marks: 3,
        steps: [
          'State the domain: $D_f: x \\ge 2$.',
          'Identify the vertex of $2(x - 1)^2 + 5$: $(1, 5)$. Note that $x = 1$ is NOT in the domain $x \\ge 2$.',
          'Since $a = 2 > 0$, $f(x)$ is strictly increasing for $x \\ge 1$, hence for $x \\ge 2$.',
          'Evaluate at the domain boundary $x = 2$: $f(2) = 2(2 - 1)^2 + 5 = 2(1) + 5 = 7$.',
        ],
        answer: '$D_f: x \\ge 2$; $R_f: y \\ge 7$',
        markSchemeNotes: 'B1 noting $x = 1 \\notin [2, \\infty)$, M1 evaluating $f(2) = 7$, A1 for $y \\ge 7$.',
      },
      {
        title: 'Domain & Range of a Radical Function ($f(x) = 5 - \\sqrt{2 - x}$)',
        question: 'Find the largest possible domain and corresponding range of $f(x) = 5 - \\sqrt{2 - x}$.',
        marks: 3,
        steps: [
          'For $\\sqrt{2 - x}$ to be real, we need $2 - x \\ge 0 \\implies x \\le 2$, so $D_f: x \\le 2$.',
          'For every $x \\le 2$, the principal square root satisfies $\\sqrt{2 - x} \\ge 0$.',
          'Multiply by $-1$ (reverses sign): $-\\sqrt{2 - x} \\le 0$.',
          'Add $5$: $5 - \\sqrt{2 - x} \\le 5$, so $y \\le 5$.',
        ],
        answer: '$D_f: x \\le 2$; $R_f: y \\le 5$',
        markSchemeNotes: 'M1 setting $2 - x \\ge 0$, A1 $x \\le 2$, A1 $y \\le 5$.',
      },
      {
        title: 'Range of a Rational Function on $x > 2$',
        question: 'Find the domain and range of $f(x) = \\frac{2x - 1}{2 - x}$ for $x > 2$.',
        marks: 4,
        steps: [
          'The domain is $D_f: x > 2$ (which naturally excludes $2 - x = 0$).',
          'Rewrite by polynomial division: $\\frac{2x - 1}{2 - x} = -\\frac{2x - 1}{x - 2} = -\\frac{2(x - 2) + 3}{x - 2} = -2 - \\frac{3}{x - 2}$.',
          'Since $x > 2$, we have $x - 2 > 0$, so $\\frac{3}{x - 2} > 0$, meaning $-\\frac{3}{x - 2} < 0$.',
          'Therefore $y = -2 - \\frac{3}{x - 2} < -2$ (and can take any value strictly below $-2$).',
        ],
        answer: '$D_f: x > 2$; $R_f: y < -2$',
        markSchemeNotes: 'M1 rewriting as $-2 - \\frac{3}{x - 2}$, M1 sign analysis for $x > 2$, A1 for $y < -2$.',
      },
    ],
    commonMistakes: [
      'Taking the vertex $y = 5$ of $2(x - 1)^2 + 5$ as the range minimum even though $x = 1$ is outside $x \\ge 2$.',
      'Forgetting that $-\\sqrt{2 - x} \\le 0$ reverses the inequality direction to $y \\le 5$ instead of $y \\ge 5$.',
      'Leaving the range written with $x$ instead of $y$ or $f(x)$.',
    ],
    rapidSummary: [
      {
        rule: 'Function = 1 output per input',
        detail: 'One-one and many-one pass the Vertical Line Test; one-many and many-many fail.',
      },
      {
        rule: 'Check vertex & asymptotes',
        detail: 'For quadratics check if $h \\in D_f$; for rationals isolate $x$ in one denominator.',
      },
    ],
    quickCheck: {
      id: 'qc-9709-2.1',
      paperType: 'Pure Mathematics 1',
      marks: 3,
      prompt: 'Given $f(x) = (x - 4)^2 + 7$ for $1 \\le x \\le 6$, what is the maximum value in the range of $f$?',
      answer: '16',
      acceptedAnswers: ['16'],
      numericAnswer: 16,
      tolerance: 0,
      hint: 'Check endpoints $x = 1$ and $x = 6$; vertex at $x = 4$ gives the minimum.',
      solution: '$f(4) = 7$ (min), $f(1) = (-3)^2 + 7 = 16$, $f(6) = 2^2 + 7 = 11$. Maximum is $16$.',
    },
    sandbox: 'geogebra-graph',
  },
  {
    id: '2.2',
    chapterId: 2,
    code: '2.2',
    title: 'Composite Functions',
    paperCode: 'P1',
    summary:
      'Construct composite functions $(f \\circ g)(x) = fg(x) = f(g(x))$ and $f^2(x)$, verify the existence condition $R_g \\subseteq D_f$ (and $D_{fg} = \\{x \\in D_g : g(x) \\in D_f\\}$), and compute exact domains and ranges of composites.',
    aims: [
      'Understand composition notation $(f \\circ g)(x) = fg(x) = f(g(x))$ and why generally $fg(x) \\neq gf(x)$.',
      'Determine whether $fg$ exists and find the exact domain $D_{fg}$ and range $R_{fg}$.',
    ],
    bigIdea:
      'A composite function $fg(x) = f(g(x))$ chains two machines in sequence: $x$ enters $g$ first, producing $g(x) \\in R_g$, which then feeds directly into $f$ ($D_f$). The chain works cleanly iff $R_g \\subseteq D_f$ (or on the restricted domain where $g(x) \\in D_f$).',
    keyFindings: [
      {
        title: 'Composite Definition & Existence Criteria',
        finding:
          '$(f \\circ g)(x) = fg(x) = f(g(x))$ applies $g$ first, then $f$. In general, $fg(x) \\neq gf(x)$ (they are equal only in special cases).',
        noteBox:
          '<u>Existence Condition</u>: $fg(x)$ is defined on all of $D_g$ iff $R_g \\subseteq D_f$ (and can be formed on a restricted domain whenever $R_g \\cap D_f \\neq \\emptyset$). Specifically, <u>$D_{fg} = \\{x \\in D_g \\text{ such that } g(x) \\in D_f\\}$</u>.',
      },
      {
        title: 'Tracing Domain and Range Through Two Maps',
        finding:
          'Start with $x \\in D_g$, restrict $x$ so that $g(x) \\in D_f$ to get $D_{fg}$, then apply $f$ to the outputs of $g$ on $D_{fg}$ to find $R_{fg}$.',
        noteBox:
          'Remember $f^2(x)$ ALWAYS means $f(f(x))$ (apply $f$ twice), NEVER $[f(x)]^2$!',
      },
    ],
    objectives: [
      'Form $fg(x)$, $gf(x)$, and $f^2(x)$ algebraically and evaluate composite expressions.',
      'Check $R_g \\subseteq D_f$ and determine $D_{fg}$ and $R_{fg}$ when $g(x)$ must be restricted to enter $D_f$.',
    ],
    keyFormulas: [
      {
        label: 'Composite Notation',
        latex: '(f \\circ g)(x) = fg(x) = f\\big(g(x)\\big) \\qquad f^2(x) = f\\big(f(x)\\big)',
        note: 'Inner function ($g$) acts first; outer function ($f$) acts second.',
      },
      {
        label: 'Domain & Existence of $fg$',
        latex: 'R_g \\subseteq D_f \\text{ (full domain)} \\qquad D_{fg} = \\{x \\in D_g : g(x) \\in D_f\\}',
        note: 'Equivalently $R_g \\cap D_f \\neq \\emptyset$ must hold for $fg$ to exist on a non-empty domain.',
      },
    ],
    stepByStepMethod: [
      'Determine $D_g, R_g$ and $D_f, R_f$ separately first.',
      'Substitute $g(x)$ for every $x$ in $f(x)$ to write $fg(x) = f(g(x))$.',
      'Find $D_{fg}$ by keeping $x \\in D_g$ AND enforcing the condition $g(x) \\in D_f$.',
      'Find $R_{fg}$ by tracing the values of $g(x)$ on $D_{fg}$ through the outer formula $f$.',
    ],
    diagrams: [
      {
        id: 'composite-mapping',
        title: 'Three-Set Pipeline for $(f \\circ g)(x) = fg(x)$',
        caption: 'Input $x \\in D_g$ maps under $g$ into $R_g \\subseteq D_f$, then maps under $f$ to output $fg(x) \\in R_f$.',
      },
    ],
    comparisonTable: {
      title: 'Notation Watch-Outs in Composite Functions',
      headers: ['Notation', 'Correct Meaning', 'Common Error to Avoid'],
      rows: [
        ['$fg(x)$', '$f(g(x))$: $g$ first, then $f$', 'Multiplying $f(x) \\cdot g(x)$ or computing $g(f(x))$'],
        ['$f^2(x)$', '$f(f(x))$: apply $f$ twice', 'Squaring $[f(x)]^2$'],
        ['$R_g \\subseteq D_f$', 'Every output of $g$ is valid input for $f$', 'Checking $R_f \\subseteq D_g$ (backwards!)'],
      ],
    },
    studyNotes: [
      {
        heading: 'Handling $R_g$ When Only Part of $R_g$ Fits Inside $D_f$',
        body: 'In the PDF example $f(x) = \\sqrt{x}$ and $g(x) = \\frac{1}{x + 1}$, we have $D_f: x \\ge 0$ and $R_g: y \\neq 0$ (where $g$ takes both negative and positive values). Because only positive outputs of $g$ are allowed inside $\\sqrt{\\cdot}$, $fg$ only accepts $x$ where $\\frac{1}{x + 1} \\ge 0$, which requires $x + 1 > 0 \\implies D_{fg}: x > -1$.',
        noteBox:
          'Notice $\\frac{1}{x+1}$ can NEVER equal $0$, so $\\sqrt{\\frac{1}{x+1}}$ is always strictly positive: $R_{fg}: y > 0$!',
      },
      {
        heading: 'Solving $fg(x) = k$',
        body: 'After forming $fg(x)$, equate to $k$ and solve for $x$, then verify every candidate solution actually lies in $D_{fg}$.',
      },
    ],
    workedExamples: [
      {
        title: 'Composite of Radical & Rational ($f(x) = \\sqrt{x}$, $g(x) = \\frac{1}{x + 1}$)',
        question:
          'Given $f(x) = \\sqrt{x}$ and $g(x) = \\frac{1}{x + 1}$, find (i) $fg(x)$, (ii) $D_{fg}$, and (iii) $R_{fg}$.',
        marks: 4,
        steps: [
          'First find natural domains & ranges: $D_f: x \\ge 0$ and $R_f: y \\ge 0$; for $g$, $x + 1 \\neq 0 \\implies D_g: x \\neq -1$ and $R_g: y \\neq 0$.',
          '(i) Substitute $g(x)$ into $f$: $fg(x) = f(g(x)) = \\sqrt{g(x)} = \\sqrt{\\frac{1}{x + 1}}$.',
          '(ii) $fg$ requires $x \\in D_g$ ($x \\neq -1$) AND $g(x) \\in D_f$ ($\\frac{1}{x + 1} \\ge 0$). Since $1 > 0$, $\\frac{1}{x + 1} > 0 \\iff x + 1 > 0 \\iff x > -1$. Hence $D_{fg}: x > -1$.',
          '(iii) For $x > -1$, $\\frac{1}{x + 1}$ takes all positive values $(0, \\infty)$, so taking the square root gives $R_{fg}: y > 0$.',
        ],
        answer: '(i) $fg(x) = \\sqrt{\\frac{1}{x + 1}}$; (ii) $D_{fg}: x > -1$; (iii) $R_{fg}: y > 0$',
        markSchemeNotes: 'B1 for $\\sqrt{\\frac{1}{x+1}}$, M1 enforcing $g(x) \\in D_f$, A1 for $x > -1$, A1 for $y > 0$.',
      },
      {
        title: 'Repeated Composite $f^2(x)$ & Existence Check',
        question:
          'Functions $f$ and $g$ are defined by $f(x) = 3x - 4$ ($x \\in \\mathbb{R}$) and $g(x) = x^2 + 3$ ($x \\in \\mathbb{R}$). Find $f^2(x)$ and $fg(x)$, and verify why $fg$ exists.',
        marks: 4,
        steps: [
          '$R_g: y \\ge 3$ and $D_f: x \\in \\mathbb{R}$. Since $R_g \\subseteq D_f$, $fg$ exists for all $x \\in \\mathbb{R}$.',
          '$f^2(x) = f(f(x)) = f(3x - 4) = 3(3x - 4) - 4 = 9x - 16$.',
          '$fg(x) = f(x^2 + 3) = 3(x^2 + 3) - 4 = 3x^2 + 5$.',
        ],
        answer: '$f^2(x) = 9x - 16$; $fg(x) = 3x^2 + 5$ (exists since $R_g \\subseteq \\mathbb{R} = D_f$)',
        markSchemeNotes: 'B1 existence reason $R_g \\subseteq D_f$, M1+A1 for $f^2(x) = 9x - 16$, A1 for $3x^2 + 5$.',
      },
    ],
    commonMistakes: [
      'Computing $f^2(x)$ as $(f(x))^2$ instead of $f(f(x))$.',
      'Reversing $fg(x)$ into $g(f(x))$.',
      'Including $y = 0$ in the range of $\\sqrt{\\frac{1}{x + 1}}$ when $\\frac{1}{x + 1}$ can never equal zero.',
    ],
    rapidSummary: [
      {
        rule: '$fg(x) = f(g(x))$',
        detail: 'Apply $g$ first, then $f$; $fg(x) \\neq gf(x)$ in general.',
      },
      {
        rule: '$D_{fg}$ criterion',
        detail: 'Keep $x \\in D_g$ such that $g(x) \\in D_f$.',
      },
    ],
    quickCheck: {
      id: 'qc-9709-2.2',
      paperType: 'Pure Mathematics 1',
      marks: 2,
      prompt: 'If $f(x) = 2x + 1$ and $g(x) = x^2 - 3$, evaluate $fg(2)$.',
      answer: '3',
      acceptedAnswers: ['3'],
      numericAnswer: 3,
      tolerance: 0,
      hint: 'Evaluate $g(2)$ first, then substitute that number into $f$.',
      solution: '$g(2) = 2^2 - 3 = 1$, then $fg(2) = f(1) = 2(1) + 1 = 3$.',
    },
    sandbox: 'none',
  },
  {
    id: '2.3',
    chapterId: 2,
    code: '2.3',
    title: 'Inverse Functions, Sketching & Graph Transformations',
    paperCode: 'P1',
    summary:
      'Use the one-one condition and horizontal line test to find inverse functions $f^{-1}(x)$ (including restricted quadratics via vertex form), sketch $f$ and $f^{-1}$ by reflection in $y = x$, and apply translations, reflections, and stretches.',
    aims: [
      'Apply the 3-step inverse procedure, domain–range swap ($D_{f^{-1}} = R_f, R_{f^{-1}} = D_f$), and self-inverse property ($ff(x) = x$).',
      'Determine exact inverses of restricted quadratic functions using vertex form $a(x - h)^2 + k$.',
      'Sketch $f^{-1}$ by reflecting $f$ across $y = x$, and apply translations $\\binom{c}{d}$, reflections, and vertical/horizontal stretches.',
    ],
    bigIdea:
      'An inverse function $f^{-1}$ reverses every arrow of $f$, so $f$ has an inverse if and only if $f$ is one-one (passes the Horizontal Line Test). Swapping $x$ and $y$ swaps domain and range and reflects the graph across $y = x$, while graph transformations modify $f(x)$ via $y = af(b(x - c)) + d$.',
    keyFindings: [
      {
        title: 'Existence & Core Identities of Inverse Functions',
        finding:
          '$f(x)$ has an inverse $f^{-1}(x)$ if and only if $f$ is <u>one-one</u> (passes the Horizontal Line Test). Always: $D_{f^{-1}} = R_f$, $R_{f^{-1}} = D_f$, and $ff^{-1}(x) = f^{-1}f(x) = x$. A function is <u>self-inverse</u> ($f = f^{-1}$) if $ff(x) = x$.',
        noteBox:
          '3 Steps to Find Inverse: (1) Swap $x$ and $y$, (2) Make $y$ the subject, (3) Change $y$ into $f^{-1}(x)$. Special case — <u>Quadratic function</u>: convert to vertex form $a(x - h)^2 + k$ first, apply the 3 steps, and restrict domain to $x \\ge h$ ($+$ branch) or $x \\le h$ ($-$ branch) so it is one-one!',
      },
      {
        title: 'Sketching $f$ & $f^{-1}$ and Graph Transformations',
        finding:
          'To sketch a function and its inverse: (1) find $x$-int and $y$-int, (2) find turning point (if any), (3) find asymptotes (if any), and (4) sketch $f^{-1}$ by reflecting $f$ in the line $y = x$.',
        noteBox:
          'Transformations from $y = f(x)$: Translation $\\binom{c}{d} \\implies y = f(x - c) + d$; Reflection in $x$-axis $\\implies y = -f(x)$; Reflection in $y$-axis $\\implies y = f(-x)$; Vertical stretch factor $a \\implies y = af(x)$; Horizontal stretch factor $\\frac{1}{b} \\implies y = f(bx)$.',
      },
    ],
    objectives: [
      'Test for invertibility using the Horizontal Line Test and restrict domains on sine or quadratic curves to make them one-one.',
      'Find algebraic expressions for $f^{-1}(x)$ along with $D_{f^{-1}}$ and $R_{f^{-1}}$ for linear, radical, and restricted quadratic functions.',
      'Sketch $y = f(x)$ and $y = f^{-1}(x)$ reflected across $y = x$, and write equations after combined translations, reflections, and stretches.',
    ],
    keyFormulas: [
      {
        label: 'Domain–Range Swap & Self-Inverse',
        latex: 'D_{f^{-1}} = R_f, \\quad R_{f^{-1}} = D_f, \\qquad ff^{-1}(x) = f^{-1}f(x) = x',
        note: 'Self-inverse condition: $ff(x) = x \\iff f(x) = f^{-1}(x)$.',
      },
      {
        label: 'Inverse of a Restricted Quadratic (Vertex Form)',
        latex: 'f(x) = a(x - h)^2 + k \\implies f^{-1}(x) = h \\pm \\sqrt{\\frac{x - k}{a}}',
        note: 'Use $+$ if $D_f: x \\ge h$, and use $-$ if $D_f: x \\le h$.',
      },
      {
        label: 'Combined Graph Transformation Chain',
        latex: 'y = f(x) \\xrightarrow{\\text{VS } a} af(x) \\xrightarrow{\\text{HS } \\frac{1}{b}} af(bx) \\xrightarrow{T\\binom{c}{d}} y = af\\big(b(x - c)\\big) + d',
        note: 'Reflection & stretches can commute, whereas translation order relative to stretches changes $c$ vs $bc$!',
      },
    ],
    stepByStepMethod: [
      'Inverse Steps: Set $y = f(x)$, (1) swap $x$ and $y$, (2) make $y$ the subject, (3) rename $y$ as $f^{-1}(x)$, and write $D_{f^{-1}} = R_f$ and $R_{f^{-1}} = D_f$.',
      'Quadratic Inverse: Complete the square into $a(x - h)^2 + k$ BEFORE swapping $x$ and $y$; restrict $D_f$ to $x \\ge h$ ($+$ root) or $x \\le h$ ($-$ root).',
      'Sketching: Plot $x$-intercepts, $y$-intercept, turning points, and asymptotes of $f$, draw $y = x$, and reflect $(a, b) \\mapsto (b, a)$ to obtain $f^{-1}$.',
      'Transformations: Apply horizontal changes inside $f(\\dots)$ with opposite intuition ($x - c$ shifts $+c$ right; $bx$ stretches horizontally by $\\frac{1}{b}$) and vertical changes outside $f$.',
    ],
    diagrams: [
      {
        id: 'inverse-mapping',
        title: 'Inverse Function Loop ($f$ and $f^{-1}$)',
        caption: '$f$ maps $D_f \\to R_f$ and $f^{-1}$ reverses it from $D_{f^{-1}} = R_f$ back to $R_{f^{-1}} = D_f$.',
      },
      {
        id: 'horizontal-line-test',
        title: 'Horizontal Line Test Across Cubic, Sine & Quadratic Curves',
        caption: 'A horizontal line cuts a one-one cubic once (has inverse), while sine and parabolas are cut multiple times (no inverse unless domain restricted).',
      },
      {
        id: 'inverse-reflection',
        title: 'Geometric Reflection Across $y = x$',
        caption: 'Every point $(a, b)$ on $y = f(x)$ reflects across the dashed mirror $y = x$ to $(b, a)$ on $y = f^{-1}(x)$.',
      },
    ],
    comparisonTable: {
      title: 'Summary of Function Transformations on $y = f(x)$',
      headers: ['Transformation', 'Algebraic Change', 'Point Mapping $(x, y) \\mapsto$'],
      rows: [
        ['Translation by $\\binom{c}{d}$', '$y = f(x - c) + d$', '$(x + c,\\; y + d)$ ($c>0 \\to,\\; d>0 \\uparrow$)'],
        ['Reflection in $x$-axis', '$y = -f(x)$', '$(x,\\; -y)$'],
        ['Reflection in $y$-axis', '$y = f(-x)$', '$(-x,\\; y)$'],
        ['Vertical stretch (scale factor $a$, $x$-axis invariant)', '$y = af(x)$', '$(x,\\; ay)$'],
        ['Horizontal stretch (scale factor $\\frac{1}{b}$, $y$-axis invariant)', '$y = f(bx)$', '$\\left(\\frac{x}{b},\\; y\\right)$'],
      ],
    },
    studyNotes: [
      {
        heading: 'Order of Combined Transformations',
        body: 'In $y = f(x) \\xrightarrow{\\text{VS } a} y = af(x) \\xrightarrow{\\text{HS } \\frac{1}{b}} y = af(bx) \\xrightarrow{T\\binom{c}{d}} y = af(b(x - c)) + d$, notice that $T\\binom{c}{d}$ replaces $x$ by $(x - c)$ inside $b(\\dots)$, producing $bx - bc$. If you translated first and then stretched horizontally by $\\frac{1}{b}$, you would instead get $f(bx - c) = f(b(x - c/b))$ — so ALWAYS track substitutions step by step!',
        noteBox:
          'Reflections ($-f(x)$ or $f(-x)$) and stretches ($af(x)$ or $f(bx)$) can swap order freely, but NEVER swap a stretch and a translation along the same axis without rewriting the algebra!',
      },
      {
        heading: 'Solving $f(x) = f^{-1}(x)$',
        body: 'Because $y = f(x)$ and $y = f^{-1}(x)$ mirror across $y = x$, intersections typically lie on $y = x$. Solving $f(x) = x$ and checking solutions against $D_f$ is far faster than equating $f$ and $f^{-1}$.',
      },
    ],
    workedExamples: [
      {
        title: 'Linear Inverse ($f(x) = 2x - 1$)',
        question: 'For $f(x) = 2x - 1$, find (i) $f^{-1}(x)$, (ii) $D_f$ and $R_f$, and (iii) $D_{f^{-1}}$ and $R_{f^{-1}}$.',
        marks: 3,
        steps: [
          'Write $y = 2x - 1$.',
          'Step 1 (Swap $x$ and $y$): $x = 2y - 1$.',
          'Step 2 (Make $y$ the subject): $2y = x + 1 \\implies y = \\frac{x + 1}{2}$.',
          'Step 3 (Rename as inverse): $f^{-1}(x) = \\frac{x + 1}{2}$.',
          'Since $f$ is linear, $D_f: x \\in \\mathbb{R}$, $R_f: y \\in \\mathbb{R}$, so $D_{f^{-1}}: x \\in \\mathbb{R}$ and $R_{f^{-1}}: y \\in \\mathbb{R}$.',
        ],
        answer: '$f^{-1}(x) = \\frac{x + 1}{2}$; $D_f = R_f = D_{f^{-1}} = R_{f^{-1}} = \\mathbb{R}$',
        markSchemeNotes: 'M1 swapping $x, y$ and isolating $y$, A1 for $\\frac{x + 1}{2}$, B1 for domains & ranges.',
      },
      {
        title: 'Radical Inverse ($g(x) = \\sqrt{x - 2}$)',
        question: 'For $g(x) = \\sqrt{x - 2}$, find (i) $g^{-1}(x)$, (ii) $D_g$ and $R_g$, and (iii) $D_{g^{-1}}$ and $R_{g^{-1}}$.',
        marks: 4,
        steps: [
          'Find $D_g$ and $R_g$ first: $x - 2 \\ge 0 \\implies D_g: x \\ge 2$; since $\\sqrt{x - 2} \\ge 0$, $R_g: y \\ge 0$.',
          'Swap $x$ and $y$ in $y = \\sqrt{x - 2}$: $x = \\sqrt{y - 2}$.',
          'Square both sides and make $y$ the subject: $x^2 = y - 2 \\implies y = x^2 + 2$.',
          'Write $g^{-1}(x) = x^2 + 2$ and swap domain & range: $D_{g^{-1}} = R_g: x \\ge 0$, and $R_{g^{-1}} = D_g: y \\ge 2$.',
        ],
        answer: '$g^{-1}(x) = x^2 + 2$ with $D_{g^{-1}}: x \\ge 0$ and $R_{g^{-1}}: y \\ge 2$',
        markSchemeNotes: 'B1 for $D_g: x \\ge 2, R_g: y \\ge 0$, M1+A1 for $x^2 + 2$, B1 for $D_{g^{-1}}: x \\ge 0$.',
      },
      {
        title: 'Restricted Quadratic Inverse ($h(x) = 2x^2 - 4x - 6$)',
        question:
          'For $h(x) = 2x^2 - 4x - 6$, (i) convert to vertex form and find $h^{-1}(x)$ in general form, (ii) state $D_h$ and $R_h$, and (iii) state the two one-one domain restrictions and corresponding $D_{h^{-1}}, R_{h^{-1}}$.',
        marks: 6,
        steps: [
          'Convert to vertex form: $h(x) = 2(x^2 - 2x) - 6 = 2[(x - 1)^2 - 1] - 6 = 2(x - 1)^2 - 8$. Vertex is $(1, -8)$.',
          'On the full domain $D_h: x \\in \\mathbb{R}$, since $a = 2 > 0$, $R_h: y \\ge -8$. Because a parabola is many-one, we must restrict the domain around $x = 1$ for $h^{-1}$ to exist.',
          'Swap $x$ and $y$: $x = 2(y - 1)^2 - 8 \\implies 2(y - 1)^2 = x + 8 \\implies (y - 1)^2 = \\frac{x + 8}{2}$.',
          'Take square roots: $y - 1 = \\pm\\sqrt{\\frac{x + 8}{2}} \\implies y = 1 \\pm \\sqrt{\\frac{x + 8}{2}}$.',
          'Case 1 (Right branch): Restrict $D_h: x \\ge 1$ ($R_h: y \\ge -8$). Then $h^{-1}(x) = 1 + \\sqrt{\\frac{x + 8}{2}}$ with $D_{h^{-1}}: x \\ge -8$ and $R_{h^{-1}}: y \\ge 1$.',
          'Case 2 (Left branch): Restrict $D_h: x \\le 1$ ($R_h: y \\ge -8$). Then $h^{-1}(x) = 1 - \\sqrt{\\frac{x + 8}{2}}$ with $D_{h^{-1}}: x \\ge -8$ and $R_{h^{-1}}: y \\le 1$.',
        ],
        answer: 'Vertex form $2(x - 1)^2 - 8$; $h^{-1}(x) = 1 + \\sqrt{\\frac{x + 8}{2}}$ for $x \\ge 1$ (or $1 - \\sqrt{\\frac{x + 8}{2}}$ for $x \\le 1$), $D_{h^{-1}}: x \\ge -8$',
        markSchemeNotes: 'M1+A1 vertex form $2(x-1)^2-8$, M1 solving for $y$, A1 for $1 \\pm \\sqrt{(x+8)/2}$, B2 pairing both domain restrictions.',
      },
    ],
    commonMistakes: [
      'Forgetting to state $D_{g^{-1}}: x \\ge 0$ for $g^{-1}(x) = x^2 + 2$ (without $x \\ge 0$, $x^2 + 2$ is not even one-one!).',
      'Always choosing the $+$ square root even when the restricted domain is $x \\le h$.',
      'Multiplying horizontal stretch factor by $b$ instead of $\\frac{1}{b}$ in $y = f(bx)$, or shifting $f(x - c)$ left instead of right when $c > 0$.',
    ],
    rapidSummary: [
      {
        rule: 'One-one $\\iff$ inverse exists',
        detail: 'Swap $x, y$ to find $f^{-1}$; $D_{f^{-1}} = R_f$ and $R_{f^{-1}} = D_f$.',
      },
      {
        rule: 'Transformations',
        detail: 'Horizontal: $f(x - c)$ shifts right $c$, $f(bx)$ scales by $1/b$. Vertical: $af(x) + d$ scales by $a$ and shifts up $d$.',
      },
    ],
    quickCheck: {
      id: 'qc-9709-2.3',
      paperType: 'Pure Mathematics 1',
      marks: 3,
      prompt: 'Given $f(x) = x^2 - 4x + 9$ for $x \\ge 2$, evaluate $f^{-1}(14)$.',
      answer: '5',
      acceptedAnswers: ['5'],
      numericAnswer: 5,
      tolerance: 0,
      hint: 'Solve $f(x) = 14$ directly for $x \\ge 2$ instead of deriving $f^{-1}(x)$ first.',
      solution: '$f(x) = (x - 2)^2 + 5 = 14 \\implies (x - 2)^2 = 9 \\implies x - 2 = 3$ (since $x \\ge 2$) $\\implies x = 5$.',
    },
    sandbox: 'geogebra-graph',
  },
];
