import type { SubtopicNote } from '../../../types/syllabus';

export const CHAPTER_7_NOTES: SubtopicNote[] = [
  {
    id: '7.1',
    chapterId: 7,
    code: '7.1',
    title: 'Differentiation of $x^n$, Chain Rule & Product/Quotient Rules',
    paperCode: 'P1',
    summary:
      'Differentiate power functions $kx^n$ (including negative and fractional indices), compute second derivatives $\\frac{d^2 y}{dx^2}$, and apply the Chain Rule ($1$st and $2$nd method), Product Rule, and Quotient Rule cleanly.',
    aims: [
      'Rewrite roots, denominators, and fractions as sums of $kx^n$ BEFORE differentiating.',
      'Apply both Chain Rule methods ($a\\cdot n[f(x)]^{n-1}f\'(x)$ and $y = f(u),\\; u = g(x)$) plus Product and Quotient rules without algebraic errors.',
    ],
    bigIdea:
      'The derivative $\\frac{dy}{dx}$ (or $f\'(x)$) gives the exact gradient function of $y = f(x)$. Bring the power to the front and subtract $1$ from the exponent ($x^n \\to n\\cdot x^{n-1}$); for a composite function $y = f(g(x))$, also multiply by the inner derivative $g\'(x)$.',
    keyFindings: [
      {
        title: 'Power Rule Table & Pre-Differentiation Index Form',
        finding:
          'If $y = x^n$, then $\\frac{dy}{dx} = n\\cdot x^{n-1}$, and any constant differentiates to $0$. Always convert $\\frac{1}{x} = x^{-1}$ and $\\sqrt{x} = x^{1/2}$ into index form before differentiating term by term.',
        noteBox:
          'Never differentiate numerator and denominator separately! For $x^3 - \\frac{1}{x} + \\sqrt{x} = x^3 - x^{-1} + x^{\\frac{1}{2}}$, differentiate each index term to get $3x^2 + x^{-2} + \\frac{1}{2}x^{-\\frac{1}{2}} = 3x^2 + \\frac{1}{x^2} + \\frac{1}{2\\sqrt{x}}$.',
      },
      {
        title: 'Chain Rule (Both Methods), Product Rule & Quotient Rule',
        finding:
          'Chain Rule: $\\frac{dy}{dx} = \\frac{dy}{du}\\cdot\\frac{du}{dx} = f\'(g(x))\\cdot g\'(x)$ (or directly $a\\cdot n[f(x)]^{n-1}f\'(x)$). Product Rule: $(uv)\' = u\'v + v\'u$. Quotient Rule: $\\left(\\frac{u}{v}\\right)\' = \\frac{u\'v - v\'u}{v^2}$.',
        noteBox:
          'In 9709 Paper 1, algebraic products like $(x^2 + 3)(2x - \\sqrt{x})$ can also be expanded into $kx^n$ terms before differentiating, while Chain Rule handles $(ax + b)^n$ directly.',
      },
    ],
    objectives: [
      'Understand the gradient of a curve at a point as the limit of the gradients of suitable chords, and use $\\frac{dy}{dx}$, $f\'(x)$, and $\\frac{d^2y}{dx^2}$ notations.',
      'Differentiate $x^n$ for any rational $n$, together with constant multiples, sums, and differences.',
      'Apply differentiation to composite functions using both Chain Rule methods ($a[f(x)]^n$ and $u$-substitution), as well as Product Rule and Quotient Rule.',
    ],
    keyFormulas: [
      {
        label: 'Power Rule & Constant Derivative',
        latex: 'y = x^n \\implies \\frac{dy}{dx} = n\\cdot x^{n-1}, \\qquad \\frac{d}{dx}(kx) = k, \\qquad \\frac{d}{dx}(c) = 0',
        note: 'Applies to ALL rational $n$ (positive, negative, fractional). Rewrite $\\frac{1}{x^m} = x^{-m}$ and $\\sqrt[q]{x^p} = x^{p/q}$ first.',
      },
      {
        label: 'Chain Rule (1st & 2nd Method)',
        latex:
          'y = a\\big[f(x)\\big]^n \\implies \\frac{dy}{dx} = a\\cdot n\\cdot\\big[f(x)\\big]^{n-1}\\cdot f\'(x) \\qquad \\text{and} \\qquad \\frac{dy}{dx} = \\frac{dy}{du}\\cdot\\frac{du}{dx} = f\'\\big(g(x)\\big)\\cdot g\'(x)',
        note: 'For $y = (ax + b)^n$, this simplifies directly to $\\frac{dy}{dx} = a\\cdot n(ax + b)^{n-1}$.',
      },
      {
        label: 'Product Rule & Quotient Rule',
        latex:
          'y = uv \\implies \\frac{dy}{dx} = u\'v + v\'u \\qquad\\qquad y = \\frac{u}{v} \\implies \\frac{dy}{dx} = \\frac{u\'v - v\'u}{v^2}',
        note: 'Watch the minus sign order in the Quotient Rule: $u\'v$ comes FIRST, subtracted by $v\'u$, all over $v^2$.',
      },
    ],
    stepByStepMethod: [
      'Rewrite any roots or reciprocals in index form: e.g. $\\frac{1}{x} = x^{-1}$, $\\sqrt{x} = x^{1/2}$, or split single-term denominators $\\frac{3x^2 - 5}{\\sqrt{x}} = 3x^{3/2} - 5x^{-1/2}$.',
      'Differentiate term by term using $x^n \\to n\\cdot x^{n-1}$ (constants vanish to $0$).',
      'For composite powers $(ax + b)^n$ or $\\big[f(x)\\big]^n$, apply the Chain Rule and remember the inner derivative multiplier $f\'(x)$ (or $a$).',
      'For products $u\\cdot v$ (when unexpanded) use $u\'v + v\'u$; for quotients $\\frac{u}{v}$ with $v = ax + b$ or linear binomials use $\\frac{u\'v - v\'u}{v^2}$.',
    ],
    comparisonTable: {
      title: 'Basic Differentiation Table (from Notes)',
      headers: ['$y$', 'Index Rewrite (if needed)', '$\\frac{dy}{dx}$'],
      rows: [
        ['$x^n$', '$x^n$', '$n\\cdot x^{n-1}$'],
        ['$2x^2$', '$2x^2$', '$4x$'],
        ['$1000x$', '$1000x^1$', '$1000$'],
        ['$99$', '$99x^0$', '$0$'],
        [
          '$x^3 - \\frac{1}{x} + \\sqrt{x}$',
          '$x^3 - x^{-1} + x^{\\frac{1}{2}}$',
          '$3x^2 + x^{-2} + \\frac{1}{2}x^{-\\frac{1}{2}} = 3x^2 + \\frac{1}{x^2} + \\frac{1}{2\\sqrt{x}}$',
        ],
      ],
    },
    studyNotes: [
      {
        heading: 'Pre-Differentiation Rewrites vs Quotient Rule',
        body: 'Whenever the denominator is a single power of $x$ like $\\frac{4x^2 - 3}{\\sqrt{x}}$, dividing term by term ($4x^{3/2} - 3x^{-1/2}$) is much faster than Quotient Rule. Save Quotient Rule $\\frac{u\'v - v\'u}{v^2}$ for multi-term denominators like $\\frac{x}{x - 1}$!',
        noteBox:
          'Remember: $\\frac{d}{dx}\\left(\\frac{3}{2x^2}\\right) = \\frac{d}{dx}\\left(\\frac{3}{2}x^{-2}\\right) = -3x^{-3}$, NOT $\\frac{0}{4x}$ and NOT $6x^{-3}$!',
      },
      {
        heading: 'Two Equivalent Ways to Execute the Chain Rule',
        body: 'With the 1st method ($a[f(x)]^n \\to a\\cdot n[f(x)]^{n-1}\\cdot f\'(x)$), you differentiate outside-in on a single line. With the 2nd method ($y = f(u)$ and $u = g(x)$), you compute $\\frac{dy}{du}$ and $\\frac{du}{dx}$ separately and multiply $\\frac{dy}{du}\\cdot\\frac{du}{dx}$—ideal for avoiding sign errors on nested radicals.',
        bullets: [
          'For $(ax + b)^n$ with large $n$, apply $\\frac{d}{dx}(ax + b)^n = an(ax + b)^{n-1}$ directly rather than expanding.',
          'Always verify negative fractional indices: $-\\frac{1}{2} - 1 = -\\frac{3}{2}$.',
        ],
      },
    ],
    workedExamples: [
      {
        title: 'Chain Rule Using Both Methods ($y = (x^2 - 1)^3$, PDF Example)',
        question: 'Differentiate $y = (x^2 - 1)^3$ using (a) the direct power-chain formula and (b) the $u$-substitution Chain Rule.',
        marks: 3,
        steps: [
          'Method 1 ($y = a[f(x)]^n \\implies \\frac{dy}{dx} = a\\cdot n[f(x)]^{n-1}\\cdot f\'(x)$):',
          '$\\frac{dy}{dx} = 3(x^2 - 1)^2 \\cdot (2x) = 6x(x^2 - 1)^2$.',
          'Method 2 ($y = f(u),\\; u = g(x)$): set $y = u^3$ and $u = x^2 - 1$.',
          'Differentiate each: $\\frac{dy}{du} = 3u^2$ and $\\frac{du}{dx} = 2x$.',
          'Multiply: $\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx} = 3u^2 \\cdot 2x = 6x(x^2 - 1)^2$.',
        ],
        answer: '$\\frac{dy}{dx} = 6x(x^2 - 1)^2$',
        markSchemeNotes:
          'M1 outer derivative $3(x^2-1)^2$, M1 multiplying by inner derivative $2x$, A1 for $6x(x^2-1)^2$.',
      },
      {
        title: 'Product Rule & Quotient Rule Worked Examples (PDF Examples)',
        question:
          'Find $\\frac{dy}{dx}$ for (a) $y = (2x - 1)^2(3x)$ using the Product Rule, and (b) $y = \\frac{x}{x - 1}$ using the Quotient Rule.',
        marks: 5,
        steps: [
          'Part (a): Let $u = (2x - 1)^2$ and $v = 3x$.',
          'Compute $u\'$ by Chain Rule: $u\' = 2(2x - 1)^1 \\cdot 2 = 4(2x - 1) = 8x - 4$; and $v\' = 3$.',
          'Product Rule $\\frac{dy}{dx} = u\'v + v\'u = (8x - 4)(3x) + (3)(2x - 1)^2 = 24x^2 - 12x + 3(2x - 1)^2$ (expanding gives $36x^2 - 24x + 3$).',
          'Part (b): Let $u = x$ ($u\' = 1$) and $v = x - 1$ ($v\' = 1$).',
          'Quotient Rule $\\frac{dy}{dx} = \\frac{u\'v - v\'u}{v^2} = \\frac{(1)(x - 1) - (1)(x)}{(x - 1)^2} = \\frac{x - 1 - x}{(x - 1)^2} = -\\frac{1}{(x - 1)^2}$.',
        ],
        answer:
          '(a) $24x^2 - 12x + 3(2x - 1)^2 = 36x^2 - 24x + 3$; (b) $-\\frac{1}{(x - 1)^2}$',
        markSchemeNotes:
          'M1 Product rule with $u\' = 8x - 4$, A1 simplified product result; M1 Quotient rule $\\frac{u\'v - v\'u}{v^2}$, A1 for $-\\frac{1}{(x-1)^2}$.',
      },
      {
        title: 'Differentiating Negative & Fractional Powers + Second Derivative',
        question:
          'Given $y = \\frac{4x^2 - 3}{\\sqrt{x}}$, find $\\frac{dy}{dx}$ and $\\frac{d^2 y}{dx^2}$ at $x = 1$.',
        marks: 4,
        steps: [
          'Split the fraction into index powers: $y = 4x^{3/2} - 3x^{-1/2}$.',
          'Differentiate once: $\\frac{dy}{dx} = 4\\left(\\frac{3}{2}\\right)x^{1/2} - 3\\left(-\\frac{1}{2}\\right)x^{-3/2} = 6x^{1/2} + \\frac{3}{2}x^{-3/2}$.',
          'Differentiate again: $\\frac{d^2y}{dx^2} = 3x^{-1/2} - \\frac{9}{4}x^{-5/2}$.',
          'Evaluate at $x = 1$: $\\frac{dy}{dx} = 6 + \\frac{3}{2} = \\frac{15}{2}$ and $\\frac{d^2y}{dx^2} = 3 - \\frac{9}{4} = \\frac{3}{4}$.',
        ],
        answer: '$\\frac{dy}{dx}\\big|_{x=1} = \\frac{15}{2}$, $\\frac{d^2y}{dx^2}\\big|_{x=1} = \\frac{3}{4}$',
        markSchemeNotes:
          'M1 rewriting in index form, A1 for $\\frac{dy}{dx}$, A1 for $\\frac{d^2y}{dx^2}$, A1 evaluating both at $x = 1$.',
      },
      {
        title: 'Chain Rule on a Radical Denominator',
        question: 'Differentiate $f(x) = \\frac{12}{\\sqrt{3x + 1}}$ and evaluate $f\'(1)$.',
        marks: 3,
        steps: [
          'Rewrite in index form: $f(x) = 12(3x + 1)^{-1/2}$.',
          'Apply Chain Rule: $f\'(x) = 12\\left(-\\frac{1}{2}\\right)(3x + 1)^{-3/2} \\times 3 = -18(3x + 1)^{-3/2}$.',
          'At $x = 1$: $f\'(1) = -18(4)^{-3/2} = -18 \\times \\frac{1}{8} = -\\frac{9}{4}$.',
        ],
        answer: '$f\'(x) = -18(3x + 1)^{-3/2}$; $f\'(1) = -\\frac{9}{4}$',
        markSchemeNotes: 'M1 index form $(3x+1)^{-1/2}$, A1 chain rule with $\\times 3$, A1 for $-\\frac{9}{4}$.',
      },
    ],
    commonMistakes: [
      'Moving the constant $2$ into the denominator power: $\\frac{1}{2x^3} = \\frac{1}{2}x^{-3}$, NOT $2x^{-3}$.',
      'Forgetting the inner multiplier $f\'(x)$ (or $a$) when applying the Chain Rule to $[f(x)]^n$.',
      'Reversing the subtraction in Quotient Rule: it is $\\frac{u\'v - v\'u}{v^2}$, NOT $\\frac{v\'u - u\'v}{v^2}$.',
    ],
    rapidSummary: [
      {
        rule: 'Index form first',
        detail: 'Convert $\\frac{1}{x^k} = x^{-k}$ and $\\sqrt{x} = x^{1/2}$ before applying $x^n \\to n\\cdot x^{n-1}$.',
      },
      {
        rule: 'Chain / Product / Quotient',
        detail: 'Chain $\\frac{dy}{du}\\cdot\\frac{du}{dx}$; Product $u\'v + v\'u$; Quotient $\\frac{u\'v - v\'u}{v^2}$.',
      },
    ],
    quickCheck: {
      id: 'qc-9709-7.1',
      paperType: 'Pure Mathematics 1',
      marks: 3,
      prompt: 'Given $y = (2x - 5)^3$, find the value of $\\frac{dy}{dx}$ when $x = 4$.',
      answer: '54',
      acceptedAnswers: ['54'],
      numericAnswer: 54,
      tolerance: 0,
      hint: 'Use $\\frac{d}{dx}(2x - 5)^3 = 3(2x - 5)^2 \\times 2$.',
      solution: '$\\frac{dy}{dx} = 6(2x - 5)^2$. At $x = 4$, $\\frac{dy}{dx} = 6(8 - 5)^2 = 6(9) = 54$.',
    },
    sandbox: 'none',
  },
  {
    id: '7.2',
    chapterId: 7,
    code: '7.2',
    title: 'Tangents, Normals, Stationary Points & Increasing/Decreasing',
    paperCode: 'P1',
    summary:
      'Use $\\frac{dy}{dx} = m_{\\text{tan}} = m$ and $m_{\\text{normal}} = -\\frac{1}{m_{\\text{tan}}} = -\\frac{1}{m}$ to write tangent and normal equations, identify stationary points ($\\frac{dy}{dx} = 0$, parallel to the $x$-axis), and determine increasing ($\\frac{dy}{dx} > 0$) and decreasing ($\\frac{dy}{dx} < 0$) intervals.',
    aims: [
      'Compute equations of tangents ($y = mx + c$) and normals ($y = -\\frac{1}{m}x + c$) at any point $(x_1, y_1)$ on a curve.',
      'Solve $\\frac{dy}{dx} = 0$ for stationary points and $\\frac{dy}{dx} > 0$ / $\\frac{dy}{dx} < 0$ for increasing and decreasing intervals.',
    ],
    bigIdea:
      'Evaluating $\\frac{dy}{dx}$ at $x = x_1$ gives the tangent gradient $m_{\\text{tan}} = m$. Because the normal is perpendicular to the tangent at $(x_1, y_1)$, its gradient is $m_{\\text{normal}} = -\\frac{1}{m}$. Where $\\frac{dy}{dx} = 0$, the tangent is parallel to the $x$-axis (a stationary point); where $\\frac{dy}{dx} > 0$, $y$ increases; where $\\frac{dy}{dx} < 0$, $y$ decreases.',
    keyFindings: [
      {
        title: 'Tangent, Normal & Stationary Gradient Rules',
        finding:
          '$\\frac{dy}{dx} = m_{\\text{tan}} = m$ gives the tangent equation $y = mx + c$ (or $y - y_1 = m(x - x_1)$), while $m_{\\text{normal}} = -\\frac{1}{m_{\\text{tan}}} = -\\frac{1}{m}$ gives the normal equation $y = -\\frac{1}{m}x + c$. At a stationary point (s.p.), $\\frac{dy}{dx} = 0$ (gradient is parallel to the $x$-axis).',
        noteBox:
          'ALWAYS plug $x_1$ into $\\frac{dy}{dx}$ to get a constant NUMBER $m$ before writing $y = mx + c$—never leave $x$ inside the gradient!',
      },
      {
        title: 'Increasing vs Decreasing Conditions',
        finding:
          'A curve is increasing where $\\frac{dy}{dx} > 0$ ($f\'(x) > 0$) and decreasing where $\\frac{dy}{dx} < 0$ ($f\'(x) < 0$).',
        noteBox:
          'If $f\'(x) > 0$ (or $f\'(x) < 0$) across the entire domain, then $f$ is strictly monotonic and therefore one-one (guaranteed to have an inverse $f^{-1}$)!',
      },
    ],
    objectives: [
      'Apply differentiation to find gradients, tangents ($y = mx + c$), and normals ($y = -\\frac{1}{m}x + c$) to curves.',
      'Locate stationary points where $\\frac{dy}{dx} = 0$ (gradient parallel to the $x$-axis) and solve reverse gradient problems.',
      'Determine whether a function is increasing ($\\frac{dy}{dx} > 0$) or decreasing ($\\frac{dy}{dx} < 0$) over an interval.',
    ],
    keyFormulas: [
      {
        label: 'Gradient of Tangent & Normal',
        latex:
          'm_{\\text{tan}} = m = \\left.\\frac{dy}{dx}\\right|_{x = x_1} \\qquad m_{\\text{normal}} = -\\frac{1}{m_{\\text{tan}}} = -\\frac{1}{m}',
        note: 'Equation of tangent: $y = mx + c$ (or $y - y_1 = m(x - x_1)$); Equation of normal: $y = -\\frac{1}{m}x + c$.',
      },
      {
        label: 'Stationary Point & Monotonicity Conditions',
        latex:
          '\\text{Stationary point: } \\frac{dy}{dx} = 0 \\qquad \\text{Increasing: } \\frac{dy}{dx} > 0 \\qquad \\text{Decreasing: } \\frac{dy}{dx} < 0',
        note: 'At a stationary point, the tangent is horizontal (parallel to the $x$-axis).',
      },
    ],
    diagrams: [
      {
        id: 'tangent-normal',
        title: 'Stationary Point ($\\frac{dy}{dx} = 0$), Tangent ($m$), and Normal ($-\\frac{1}{m}$)',
        caption: 'At the stationary point the tangent is parallel to the $x$-axis; at $P(x_1, y_1)$ the normal meets the tangent at $90^\\circ$ with gradient $-\\frac{1}{m}$.',
      },
    ],
    stepByStepMethod: [
      'Differentiate $y = f(x)$ to find $\\frac{dy}{dx}$.',
      'If only $x_1$ is given, compute BOTH $y_1 = f(x_1)$ (from the ORIGINAL curve) and $m = f\'(x_1)$ (from $\\frac{dy}{dx}$).',
      'For the tangent, solve $y = mx + c$ through $(x_1, y_1)$; for the normal, use gradient $-\\frac{1}{m}$ through $(x_1, y_1)$.',
      'For increasing/decreasing intervals, solve $\\frac{dy}{dx} > 0$ or $\\frac{dy}{dx} < 0$ cleanly using a parabola sketch.',
    ],
    comparisonTable: {
      title: 'Gradient Rules at $(x_1, y_1)$',
      headers: ['Feature', 'Gradient Condition', 'Line / Interval Meaning'],
      rows: [
        ['Tangent', '$m_{\\text{tan}} = m = f\'(x_1)$', '$y = mx + c$ touching curve at $(x_1, y_1)$'],
        ['Normal', '$m_{\\text{normal}} = -\\frac{1}{m}$', '$y = -\\frac{1}{m}x + c$ perpendicular to tangent ($90^\\circ$)'],
        ['Stationary point (s.p.)', '$\\frac{dy}{dx} = 0$', 'Tangent is parallel to the $x$-axis'],
        ['Increasing / Decreasing', '$\\frac{dy}{dx} > 0$ / $\\frac{dy}{dx} < 0$', 'Curve slopes upward / downward left-to-right'],
      ],
    },
    studyNotes: [
      {
        heading: 'Reverse Gradient Problems: Parallel or Perpendicular to a Given Line',
        body: 'Questions frequently say "the tangent to $y = f(x)$ is parallel to $2x + y = 5$ (or perpendicular to $y = 3x - 1$)". Equate $f\'(x)$ to that target gradient $m$, solve for $x_1$, then substitute $x_1$ back into $y = f(x)$ to get $y_1$.',
        noteBox:
          'NEVER write $y - y_1 = (3x^2 - 2)(x - x_1)$! A tangent or normal is a STRAIGHT LINE, so its gradient MUST be evaluated at $x = x_1$ as a constant number.',
        bullets: [
          'Parallel to $ax + by + c = 0$: target gradient is $-\\frac{a}{b}$.',
          'Normal is parallel to a line of gradient $m$: then $m_{\\text{normal}} = m$, so $f\'(x_1) = -\\frac{1}{m}$.',
        ],
      },
      {
        heading: 'Link Between Increasing Functions & Inverse Existence',
        body: 'If you prove $f\'(x) > 0$ (for example by completing the square on $f\'(x) = 3(x - 1)^2 + 2 > 0$) across the domain, $f$ is strictly increasing, one-one, and therefore guaranteed to have an inverse $f^{-1}$.',
      },
    ],
    workedExamples: [
      {
        title: 'Normal Equation to a Curve at $x = 2$',
        question:
          'A curve has equation $y = x^2 - \\frac{16}{x}$. Find the equation of the normal to the curve at the point where $x = 2$.',
        marks: 4,
        steps: [
          'Find $y$ at $x = 2$: $y = 2^2 - \\frac{16}{2} = 4 - 8 = -4$, so the point is $(2, -4)$.',
          'Differentiate $y = x^2 - 16x^{-1}$: $\\frac{dy}{dx} = 2x + 16x^{-2}$.',
          'At $x = 2$: $m_{\\text{tan}} = 2(2) + \\frac{16}{4} = 8$.',
          'Normal gradient: $m_{\\text{normal}} = -\\frac{1}{8}$. Using $y = -\\frac{1}{8}x + c$ at $(2, -4)$: $-4 = -\\frac{1}{4} + c \\implies c = -\\frac{15}{4}$.',
        ],
        answer: '$y = -\\frac{1}{8}x - \\frac{15}{4}$ (or $x + 8y + 30 = 0$)',
        markSchemeNotes:
          'B1 for $y = -4$, M1 differentiating, A1 for $m_{\\text{tan}} = 8$, M1 normal gradient $-1/8$, A1 final line.',
      },
      {
        title: 'Intervals Where a Cubic is Decreasing',
        question:
          'Find the set of values of $x$ for which the function $f(x) = 2x^3 - 9x^2 + 12x - 5$ is decreasing.',
        marks: 3,
        steps: [
          'Differentiate: $f\'(x) = 6x^2 - 18x + 12 = 6(x^2 - 3x + 2) = 6(x - 1)(x - 2)$.',
          'Decreasing requires $f\'(x) < 0$: $(x - 1)(x - 2) < 0$.',
          'With critical values $1$ and $2$ on an upward parabola, $f\'(x) < 0$ between the roots.',
        ],
        answer: '$1 < x < 2$',
        markSchemeNotes: 'M1 differentiating, A1 factorised $f\'(x)$, A1 for $1 < x < 2$.',
      },
    ],
    commonMistakes: [
      'Using the tangent gradient $m$ instead of $-1/m$ for the normal.',
      'Substituting $x_1$ into $\\frac{dy}{dx}$ instead of $y = f(x)$ when finding the $y_1$-coordinate of the point.',
      'Leaving $x$ inside the gradient of the tangent or normal line equation.',
    ],
    rapidSummary: [
      {
        rule: '$m_{\\text{normal}} = -1 / m_{\\text{tan}}$',
        detail: 'Evaluate $m = f\'(x_1)$ as a number; use $y = mx + c$ or $y = -\\frac{1}{m}x + c$.',
      },
      {
        rule: 's.p. vs Monotonicity',
        detail: '$\\frac{dy}{dx} = 0$ at stationary points; $> 0$ increasing; $< 0$ decreasing.',
      },
    ],
    quickCheck: {
      id: 'qc-9709-7.2',
      paperType: 'Pure Mathematics 1',
      marks: 3,
      prompt:
        'Find the gradient of the normal to the curve $y = x^3 - 5x + 1$ at the point where $x = 2$.',
      answer: '-1/7',
      acceptedAnswers: ['-1/7'],
      numericAnswer: -1 / 7,
      tolerance: 1e-4,
      hint: 'Find $\\frac{dy}{dx}$ at $x = 2$ first, then take the negative reciprocal.',
      solution:
        '$\\frac{dy}{dx} = 3x^2 - 5$. At $x = 2$, $m_{\\text{tan}} = 3(4) - 5 = 7$, so $m_{\\text{normal}} = -\\frac{1}{7}$.',
    },
    sandbox: 'geogebra-graph',
  },
  {
    id: '7.3',
    chapterId: 7,
    code: '7.3',
    title: 'Nature of Stationary Points (1st & 2nd Derivative Tests) & Rate of Change',
    paperCode: 'P1',
    summary:
      'Classify stationary points ($\\frac{dy}{dx} = 0$) as maximum, minimum, or inflection using the $1$st Derivative Test (sign change of $\\frac{dy}{dx}$) and $2$nd Derivative Test ($\\frac{d^2y}{dx^2} < 0$ max, $> 0$ min, $= 0$ inflection), solve optimisation problems, and link connected rates via $\\frac{dy}{dx} = \\frac{dy}{dt}\\cdot\\frac{dt}{dx} \\iff \\frac{dy}{dt} = \\frac{dy}{dx}\\cdot\\frac{dx}{dt}$.',
    aims: [
      'Classify stationary points rigorously using both the 1st Derivative Test (FDT) sign chart and 2nd Derivative Test (SDT).',
      'Solve practical optimisation problems and connected rates of change problems via the chain rule $\\frac{dy}{dt} = \\frac{dy}{dx}\\cdot\\frac{dx}{dt}$.',
    ],
    bigIdea:
      'At any stationary point $\\frac{dy}{dx} = 0$, look at how $\\frac{dy}{dx}$ changes sign across the s.p. ($+ \\to -$ max, $- \\to +$ min, same sign $\\to$ inflection) OR check $\\frac{d^2y}{dx^2}$ ($< 0$ concave down $\\cap$ max, $> 0$ concave up $\\cup$ min, $= 0$ fallback to FDT). For connected rates, interpret $\\frac{dx}{dt} > 0$ as increasing and $\\frac{dx}{dt} < 0$ as decreasing, linked by $\\frac{dy}{dt} = \\frac{dy}{dx}\\cdot\\frac{dx}{dt}$.',
    keyFindings: [
      {
        title: '1st Derivative Test (FDT) vs 2nd Derivative Test (SDT)',
        finding:
          'Around a stationary point ($\\frac{dy}{dx} = 0$): FDT checks the sign of $\\frac{dy}{dx}$ ($+ \\to -$ max; $- \\to +$ min; $+ \\to +$ or $- \\to -$ inflection). SDT evaluates $\\frac{d^2y}{dx^2}$ at the s.p.: $\\frac{d^2y}{dx^2} < 0 \\implies$ max ($\\cap$); $\\frac{d^2y}{dx^2} > 0 \\implies$ min ($\\cup$); $\\frac{d^2y}{dx^2} = 0 \\implies$ check FDT / inflection.',
        noteBox:
          'When $\\frac{d^2y}{dx^2} = 0$ (such as $y = x^4$ vs $y = x^3$ at $x = 0$), SDT alone is inconclusive—ALWAYS test the sign of $\\frac{dy}{dx}$ just left and right of the s.p.!',
      },
      {
        title: 'Rate of Change Formula & Sign Interpretation',
        finding:
          '$\\frac{dy}{dt}$ is the rate of change in $y$ and $\\frac{dx}{dt}$ is the rate of change in $x$ ($> 0$ increase, $< 0$ decrease), connected by $\\frac{dy}{dx} = \\frac{dy}{dt} \\cdot \\frac{dt}{dx} \\iff \\frac{dy}{dt} = \\frac{dy}{dx} \\cdot \\frac{dx}{dt}$.',
        noteBox:
          'Differentiate the geometric formula (e.g. $\\frac{dV}{dr} = 4\\pi r^2$) FIRST, and substitute the instant value (e.g. $r = 5$) LAST!',
      },
    ],
    objectives: [
      'Locate stationary points ($\\frac{dy}{dx} = 0$) and determine their nature (max, min, or point of inflection) using both the 1st Derivative Test (FDT) and 2nd Derivative Test (SDT).',
      'Solve practical optimisation problems (maximising area/volume or minimising surface area/cost).',
      'Apply the chain rule $\\frac{dy}{dt} = \\frac{dy}{dx}\\cdot\\frac{dx}{dt}$ to connected rates of change problems.',
    ],
    keyFormulas: [
      {
        label: '1st Derivative Test (FDT) Sign Transitions Across s.p.',
        latex:
          '+ \\to - \\;(\\text{max}) \\qquad - \\to + \\;(\\text{min}) \\qquad + \\to + \\;\\text{or}\\; - \\to - \\;(\\text{inflection})',
        note: 'Evaluate $\\frac{dy}{dx}$ slightly to the left and slightly to the right of the stationary $x$-value.',
      },
      {
        label: '2nd Derivative Test (SDT) at $\\frac{dy}{dx} = 0$',
        latex:
          '\\frac{d^2y}{dx^2} < 0 \\;(\\text{max},\\; \\cap) \\qquad \\frac{d^2y}{dx^2} = 0 \\;(\\text{inflection / check FDT}) \\qquad \\frac{d^2y}{dx^2} > 0 \\;(\\text{min},\\; \\cup)',
        note: 'Remember: negative second derivative means concave down (peak/maximum); positive means concave up (valley/minimum).',
      },
      {
        label: 'Connected Rates of Change',
        latex:
          '\\frac{dy}{dx} = \\frac{dy}{dt}\\cdot\\frac{dt}{dx} \\iff \\frac{dy}{dt} = \\frac{dy}{dx}\\cdot\\frac{dx}{dt} \\qquad \\left(> 0 \\text{ increase},\\; < 0 \\text{ decrease}\\right)',
        note: 'Wait until after differentiation to substitute the given instant value of $x$, $r$, or $h$.',
      },
    ],
    diagrams: [
      {
        id: 'stationary-fdt-sdt',
        title: '1st Derivative Test (FDT) Sign Chart & 2nd Derivative Test (SDT) Concavity',
        caption: 'FDT tracks sign transitions across the stationary point (s.p.); SDT checks $\\frac{d^2y}{dx^2} < 0$ (max $\\cap$) vs $\\frac{d^2y}{dx^2} > 0$ (min $\\cup$).',
      },
    ],
    stepByStepMethod: [
      'Stationary points: solve $\\frac{dy}{dx} = 0$ for $x_0$, then substitute into $y = f(x)$ for $y_0$.',
      'Classify nature: evaluate $\\frac{d^2y}{dx^2}$ at $x_0$ (SDT). If $\\frac{d^2y}{dx^2} = 0$, test the sign of $\\frac{dy}{dx}$ either side of $x_0$ (FDT).',
      'Optimisation: write the target quantity ($A$ or $V$) in two variables, eliminate one using the constraint, set derivative $= 0$, and prove max/min with SDT.',
      'Connected rates: identify the given rate ($\\frac{dV}{dt}$) and target rate ($\\frac{dr}{dt}$), differentiate the linking geometry equation first, chain-multiply, and substitute the instant value last.',
    ],
    comparisonTable: {
      title: 'Classifying Stationary Points ($\\frac{dy}{dx} = 0$ at $x_0$)',
      headers: ['Nature of s.p.', '1st Derivative Test (FDT: sign of $\\frac{dy}{dx}$)', '2nd Derivative Test (SDT: $\\frac{d^2y}{dx^2}$)', 'Curve Shape'],
      rows: [
        ['Maximum', '$+ \\longrightarrow 0 \\longrightarrow -$', '$\\frac{d^2y}{dx^2} < 0$', 'Concave down ($\\cap$)'],
        ['Minimum', '$- \\longrightarrow 0 \\longrightarrow +$', '$\\frac{d^2y}{dx^2} > 0$', 'Concave up ($\\cup$)'],
        ['Point of Inflection', '$+ \\longrightarrow 0 \\longrightarrow +$ or $- \\longrightarrow 0 \\longrightarrow -$', '$\\frac{d^2y}{dx^2} = 0$ (confirm via FDT)', 'Flattens momentarily then continues'],
      ],
    },
    studyNotes: [
      {
        heading: 'Always Verify Max/Min in Optimisation Questions',
        body: 'In 9709 Paper 1, an optimisation question awards 1–2 method/accuracy marks specifically for proving that your stationary value is genuinely a maximum ($\\frac{d^2A}{dx^2} < 0$) or minimum ($\\frac{d^2S}{dx^2} > 0$). Never skip the second derivative step!',
        noteBox:
          'In connected rates of change, NEVER substitute the given instant value $r = 5$ BEFORE differentiating! Differentiate $\\frac{dV}{dr} = 4\\pi r^2$ symbolically first, then plug in $r = 5$.',
      },
      {
        heading: 'When $\\frac{d^2y}{dx^2} = 0$: Use the First-Derivative Sign Test',
        body: 'Both $y = x^3$ and $y = x^4$ satisfy $\\frac{dy}{dx} = 0$ and $\\frac{d^2y}{dx^2} = 0$ at $x = 0$. Testing $\\frac{dy}{dx}$ around $0$ distinguishes them immediately: $3x^2$ stays $+ \\to 0 \\to +$ (inflection on $y = x^3$), whereas $4x^3$ switches $- \\to 0 \\to +$ (minimum on $y = x^4$).',
      },
    ],
    workedExamples: [
      {
        title: 'Connected Rates of Change (Expanding Sphere)',
        question:
          'Air is pumped into a spherical balloon at a constant rate of $30\\text{ cm}^3\\text{ s}^{-1}$. Find the exact rate at which the radius is increasing when the radius is $5\\text{ cm}$. (Volume of sphere $V = \\frac{4}{3}\\pi r^3$.)',
        marks: 4,
        steps: [
          'Given $\\frac{dV}{dt} = 30$ ($> 0$, increasing); we want $\\frac{dr}{dt}$ when $r = 5$.',
          'Differentiate $V = \\frac{4}{3}\\pi r^3$ with respect to $r$: $\\frac{dV}{dr} = 4\\pi r^2$.',
          'Apply the rate-of-change chain rule: $\\frac{dV}{dt} = \\frac{dV}{dr} \\cdot \\frac{dr}{dt} \\implies 30 = 4\\pi r^2 \\frac{dr}{dt}$.',
          'Substitute $r = 5$ last: $\\frac{dr}{dt} = \\frac{30}{4\\pi(25)} = \\frac{30}{100\\pi} = \\frac{3}{10\\pi}\\text{ cm s}^{-1}$.',
        ],
        answer: '$\\frac{3}{10\\pi}\\text{ cm s}^{-1}$',
        markSchemeNotes:
          'B1 for $\\frac{dV}{dr} = 4\\pi r^2$, M1 chain rule $\\frac{dV}{dt} = \\frac{dV}{dr}\\frac{dr}{dt}$, M1 substituting $r = 5$, A1 for $\\frac{3}{10\\pi}$.',
      },
      {
        title: 'Stationary Points & Second Derivative Classification',
        question:
          'Find the coordinates of the stationary points on $y = x^3 - 3x^2 - 9x + 5$ and determine the nature of each.',
        marks: 5,
        steps: [
          'Differentiate: $\\frac{dy}{dx} = 3x^2 - 6x - 9 = 3(x^2 - 2x - 3) = 3(x - 3)(x + 1)$.',
          'Set $\\frac{dy}{dx} = 0 \\implies x = -1$ or $x = 3$.',
          'Find $y$-coordinates: at $x = -1$, $y = -1 - 3 + 9 + 5 = 10$; at $x = 3$, $y = 27 - 27 - 27 + 5 = -22$.',
          'Second derivative: $\\frac{d^2y}{dx^2} = 6x - 6$.',
          'At $(-1, 10)$, $\\frac{d^2y}{dx^2} = -12 < 0$ (Maximum). At $(3, -22)$, $\\frac{d^2y}{dx^2} = 12 > 0$ (Minimum).',
        ],
        answer: '$(-1, 10)$ is a maximum; $(3, -22)$ is a minimum',
        markSchemeNotes:
          'M1 setting $\\frac{dy}{dx} = 0$, A1 both $x$, A1 both $y$, M1 second derivative test, A1 both classifications.',
      },
    ],
    commonMistakes: [
      'Thinking $\\frac{d^2y}{dx^2} > 0$ means maximum because "$> 0$ feels bigger" (actually $> 0$ means $\\cup$-shaped MINIMUM).',
      'Plugging in the numerical radius or height before differentiating in a connected rates problem.',
      'Forgetting to solve for the $y$-coordinate when asked for the COORDINATES $(x, y)$ of a stationary point.',
    ],
    rapidSummary: [
      {
        rule: 'FDT & SDT',
        detail: '$\\frac{d^2y}{dx^2} < 0 \\to$ max; $> 0 \\to$ min; $= 0 \\to$ test sign of $\\frac{dy}{dx}$ (FDT).',
      },
      {
        rule: 'Connected rates',
        detail: 'Write $\\frac{dy}{dt} = \\frac{dy}{dx}\\cdot\\frac{dx}{dt}$, differentiate first, substitute instant value last.',
      },
    ],
    quickCheck: {
      id: 'qc-9709-7.3',
      paperType: 'Pure Mathematics 1',
      marks: 3,
      prompt:
        'A point moves along the curve $y = 2x^2 - 3x$ such that $\\frac{dx}{dt} = 4$ units/s. Find $\\frac{dy}{dt}$ when $x = 5$.',
      answer: '68',
      acceptedAnswers: ['68'],
      numericAnswer: 68,
      tolerance: 0,
      hint: 'Find $\\frac{dy}{dx}$, evaluate it at $x = 5$, and multiply by $\\frac{dx}{dt} = 4$.',
      solution:
        '$\\frac{dy}{dx} = 4x - 3$. At $x = 5$, $\\frac{dy}{dx} = 17$, so $\\frac{dy}{dt} = 17 \\times 4 = 68$.',
    },
    sandbox: 'geogebra-graph',
  },
];
