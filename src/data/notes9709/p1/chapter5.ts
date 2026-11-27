import type { SubtopicNote } from '../../../types/syllabus';

export const CHAPTER_5_NOTES: SubtopicNote[] = [
  {
    id: '5.1',
    chapterId: 5,
    code: '5.1',
    title: 'Trig Graphs & Exact Values',
    paperCode: 'P1',
    summary:
      'Sketch and interpret the graphs of $y = \\sin\\theta$, $y = \\cos\\theta$, and $y = \\tan\\theta$, understand amplitude, period, and transformations $a\\sin(bx) + c$, and recall exact values across all four quadrants.',
    aims: [
      'Sketch $y = a\\sin(bx) + c$ and $y = a\\cos(bx) + c$, identifying maximum/minimum values, period, and intercepts.',
      'Use unit-circle symmetry (ASTC) to find exact trig values for angles in any quadrant.',
    ],
    bigIdea:
      'On the unit circle, a point at angle $\\theta$ from the positive $x$-axis has coordinates $(\\cos\\theta, \\sin\\theta)$ and slope $\\tan\\theta$. As $\\theta$ rotates, $\\sin$ and $\\cos$ oscillate smoothly between $-1$ and $1$ with period $360^\\circ$ ($2\\pi$), while $\\tan$ repeats every $180^\\circ$ ($\\pi$) with vertical asymptotes where $\\cos\\theta = 0$.',
    keyFindings: [
      {
        title: 'Amplitude, Period & Vertical Midline of Transformed Waves',
        finding:
          'For $y = a\\sin(bx) + c$ and $y = a\\cos(bx) + c$, the amplitude is $|a|$, the period is $\\frac{2\\pi}{b}$ radians ($\\frac{360^\\circ}{b}$), and the range is $c - |a| \\le y \\le c + |a|$.',
        noteBox:
          'ALWAYS check whether a graph starts at $0$ ($\\sin$) or $\\pm a$ ($\\cos$), and use $c = \\frac{\\text{max} + \\text{min}}{2}$ and $|a| = \\frac{\\text{max} - \\text{min}}{2}$ to read parameters off a sketch.',
      },
      {
        title: 'ASTC Quadrant Signs & Unit Circle Coordinates',
        finding:
          'On the unit circle, $x = \\cos\\theta$ and $y = \\sin\\theta$. All trig ratios are positive in Q1 ($\\alpha$), only $\\sin$ in Q2 ($\\pi - \\alpha$), only $\\tan$ in Q3 ($\\pi + \\alpha$), and only $\\cos$ in Q4 ($2\\pi - \\alpha$).',
        noteBox:
          'Number of solutions to $a\\sin(bx) + c = k$: sketch $y = a\\sin(bx) + c$ cleanly and count the intersections with $y = k$!',
      },
    ],
    objectives: [
      'Sketch and use graphs of the sine, cosine, and tangent functions for angles of any size using either degrees or radians.',
      'Determine the amplitude, period, and range of transformed trigonometric functions such as $y = a\\sin(bx) + c$ and $y = a\\cos(bx) + c$.',
      'Use exact values of $\\sin$, $\\cos$, and $\\tan$ of $30^\\circ, 45^\\circ, 60^\\circ$ and related angles in all quadrants.',
    ],
    keyFormulas: [
      {
        label: 'Transformed Sine & Cosine Waves',
        latex:
          'y = a\\sin(bx) + c \\implies \\text{Amplitude} = |a|, \\quad \\text{Period} = \\frac{2\\pi}{b} = \\frac{360^\\circ}{b}, \\quad c - |a| \\le y \\le c + |a|',
        note: 'For $\\tan(bx)$, the period is $\\frac{\\pi}{b}$ (or $\\frac{180^\\circ}{b}$).',
      },
      {
        label: 'ASTC Quadrant Symmetry',
        latex:
          '\\sin(\\pi - \\alpha) = \\sin\\alpha \\qquad \\cos(2\\pi - \\alpha) = \\cos\\alpha \\qquad \\tan(\\pi + \\alpha) = \\tan\\alpha',
        note: 'All ($0$ to $\\pi/2$), Sine ($\\pi/2$ to $\\pi$), Tangent ($\\pi$ to $3\\pi/2$), Cosine ($3\\pi/2$ to $2\\pi$).',
      },
    ],
    diagrams: [
      {
        id: 'trig-waves',
        title: 'Sine and Cosine Curves on $0 \\le x \\le 2\\pi$',
        caption: 'Key quarter-period landmarks at $0, \\frac{\\pi}{2}, \\pi, \\frac{3\\pi}{2}, 2\\pi$ with amplitude $1$ and period $2\\pi$.',
      },
      {
        id: 'astc-unit-circle',
        title: 'Unit Circle $(\\cos\\theta, \\sin\\theta)$ & ASTC Quadrants',
        caption: 'Reference angle $\\alpha$ maps cleanly across Quadrants I–IV: $\\alpha$, $\\pi - \\alpha$, $\\pi + \\alpha$, and $2\\pi - \\alpha$.',
      },
    ],
    stepByStepMethod: [
      'Read the domain (degrees vs radians) and note the total span (e.g. $0 \\le x \\le 2\\pi$).',
      'Find the period $\\frac{2\\pi}{b}$ to determine how many complete cycles fit inside the interval.',
      'Locate the vertical midline $y = c$, upper bound $c + |a|$, and lower bound $c - |a|$.',
      'Plot quarter-period keypoints (midline, max, midline, min, midline for $+\\sin$; max, midline, min, midline, max for $+\\cos$) and join with a smooth wave.',
    ],
    comparisonTable: {
      title: 'Standard Trigonometric Curves on $[0, 2\\pi]$',
      headers: ['Function', 'Period', 'Range', 'Asymptotes on $[0, 2\\pi]$', 'Symmetry'],
      rows: [
        ['$y = \\sin x$', '$2\\pi$ ($360^\\circ$)', '$-1 \\le y \\le 1$', 'None', 'Odd: $\\sin(-x) = -\\sin x$'],
        ['$y = \\cos x$', '$2\\pi$ ($360^\\circ$)', '$-1 \\le y \\le 1$', 'None', 'Even: $\\cos(-x) = \\cos x$'],
        ['$y = \\tan x$', '$\\pi$ ($180^\\circ$)', '$y \\in \\mathbb{R}$', '$x = \\frac{\\pi}{2}, \\frac{3\\pi}{2}$', 'Odd: $\\tan(-x) = -\\tan x$'],
      ],
    },
    studyNotes: [
      {
        heading: 'Finding Constants $a, b, c$ from a Sketch',
        body: 'In Paper 1, you are frequently given a sine or cosine graph with its maximum $M$ and minimum $m$ marked, and asked to find $a, b, c$. Always use $c = \\frac{M + m}{2}$ (midline) and $|a| = \\frac{M - m}{2}$ (amplitude), checking whether the wave starts inverted at $x = 0$.',
        noteBox:
          'Number of solutions to $a\\sin(bx) + c = k$: simply sketch $y = a\\sin(bx) + c$ and count how many times the horizontal line $y = k$ crosses the wave!',
      },
      {
        heading: 'Exact Values in Other Quadrants',
        body: 'To evaluate $\\cos\\left(\\frac{5\\pi}{6}\\right)$ without a calculator, note $\\frac{5\\pi}{6} = \\pi - \\frac{\\pi}{6}$ lies in Quadrant 2 where $\\cos < 0$, so $\\cos\\left(\\frac{5\\pi}{6}\\right) = -\\cos\\left(\\frac{\\pi}{6}\\right) = -\\frac{\\sqrt{3}}{2}$.',
      },
    ],
    workedExamples: [
      {
        title: 'Range & Period of a Transformed Cosine Function',
        question:
          'A function is defined by $f(x) = 3 - 4\\cos(2x)$ for $0 \\le x \\le \\pi$. State the period of $f$, find the range of $f$, and find the exact coordinates of the minimum point on this interval.',
        marks: 4,
        steps: [
          'The coefficient of $x$ is $b = 2$, so the period is $\\frac{2\\pi}{2} = \\pi$.',
          'Since $-1 \\le \\cos(2x) \\le 1$, multiplying by $-4$ gives $-4 \\le -4\\cos(2x) \\le 4$.',
          'Adding $3$ gives $-1 \\le f(x) \\le 7$.',
          'The minimum value $-1$ occurs when $\\cos(2x) = 1 \\implies 2x = 0, 2\\pi \\implies x = 0, \\pi$.',
        ],
        answer: 'Period $\\pi$; range $-1 \\le f(x) \\le 7$; minimum points $(0, -1)$ and $(\\pi, -1)$',
        markSchemeNotes:
          'B1 period $\\pi$, B1 lower bound $-1$, B1 upper bound $7$, B1 minimum points $(0, -1)$ and $(\\pi, -1)$.',
      },
      {
        title: 'Inverse of a Restricted Sine Function',
        question:
          'Given $g(x) = 2\\sin x + 1$ for $-\\frac{\\pi}{2} \\le x \\le \\frac{\\pi}{2}$, state the range of $g$ and find $g^{-1}(x)$.',
        marks: 3,
        steps: [
          'On $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$, $\\sin x$ increases from $-1$ to $1$, so $-1 \\le g(x) \\le 3$.',
          'Set $y = 2\\sin x + 1 \\implies \\sin x = \\frac{y - 1}{2} \\implies x = \\sin^{-1}\\!\\left(\\frac{y - 1}{2}\\right)$.',
          'Hence $g^{-1}(x) = \\sin^{-1}\\!\\left(\\frac{x - 1}{2}\\right)$ for $-1 \\le x \\le 3$.',
        ],
        answer: 'Range $-1 \\le g(x) \\le 3$; $g^{-1}(x) = \\sin^{-1}\\!\\left(\\frac{x - 1}{2}\\right)$ ($-1 \\le x \\le 3$)',
        markSchemeNotes: 'B1 range, M1 isolating $\\sin x$, A1 inverse expression and domain.',
      },
    ],
    commonMistakes: [
      'Forgetting to reverse inequality signs when multiplying $-1 \\le \\cos\\theta \\le 1$ by a negative amplitude.',
      'Reading the period of $\\sin(2x)$ as $4\\pi$ instead of $\\frac{2\\pi}{2} = \\pi$ ($b > 1$ compresses horizontally).',
      'Drawing sharp V-corners instead of smooth turning points on sine and cosine sketches.',
    ],
    rapidSummary: [
      {
        rule: 'Period $= \\frac{2\\pi}{b}$',
        detail: 'Amplitude $= |a|$, vertical midline $= c$, range $= [c - |a|, c + |a|]$.',
      },
      {
        rule: 'Exact quadrant signs',
        detail: 'Check ASTC sign first, then use reference angle $\\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}$.',
      },
    ],
    quickCheck: {
      id: 'qc-9709-5.1',
      paperType: 'Pure Mathematics 1',
      marks: 2,
      prompt: 'Find the maximum possible value of $f(x) = 5 - 3\\sin(2x)$.',
      answer: '8',
      acceptedAnswers: ['8'],
      numericAnswer: 8,
      tolerance: 0,
      hint: 'What is the minimum value of $\\sin(2x)$?',
      solution: 'Since $\\sin(2x) \\ge -1$, $f(x)$ reaches its maximum $5 - 3(-1) = 8$.',
    },
    sandbox: 'geogebra-graph',
  },
  {
    id: '5.2',
    chapterId: 5,
    code: '5.2',
    title: 'Identities $\\tan\\theta \\equiv \\frac{\\sin\\theta}{\\cos\\theta}$ & $\\sin^2\\theta + \\cos^2\\theta \\equiv 1$',
    paperCode: 'P1',
    summary:
      'Prove trigonometric identities and simplify algebraic trig expressions using $\\tan\\theta \\equiv \\frac{\\sin\\theta}{\\cos\\theta}$ and $\\sin^2\\theta + \\cos^2\\theta \\equiv 1$.',
    aims: [
      'Construct rigorous one-sided "show that / prove" identity chains from LHS to RHS (or RHS to LHS).',
      'Use exact Pythagorean triangles (without a calculator) to deduce $\\sin\\theta$ or $\\cos\\theta$ from a given ratio and quadrant.',
    ],
    bigIdea:
      'On the unit circle $(\\cos\\theta, \\sin\\theta)$, Pythagoras gives $\\cos^2\\theta + \\sin^2\\theta \\equiv 1$ for every angle $\\theta$, and gradient gives $\\tan\\theta \\equiv \\frac{\\sin\\theta}{\\cos\\theta}$. Almost every Paper 1 identity proof reduces everything to $\\sin\\theta$ and $\\cos\\theta$ and applies $\\sin^2\\theta + \\cos^2\\theta = 1$.',
    keyFindings: [
      {
        title: 'The Two Master P1 Identities',
        finding:
          '$\\tan\\theta \\equiv \\frac{\\sin\\theta}{\\cos\\theta}$ ($\\cos\\theta \\neq 0$) and $\\sin^2\\theta + \\cos^2\\theta \\equiv 1$ (giving $\\sin^2\\theta \\equiv 1 - \\cos^2\\theta$ and $\\cos^2\\theta \\equiv 1 - \\sin^2\\theta$).',
        noteBox:
          'ALWAYS keep identity proofs strictly one-sided ($\\text{LHS} = \\dots = \\text{RHS}$). Never move terms across the $\\equiv$ sign!',
      },
    ],
    objectives: [
      'Use the exact identities $\\frac{\\sin\\theta}{\\cos\\theta} \\equiv \\tan\\theta$ and $\\sin^2\\theta + \\cos^2\\theta \\equiv 1$.',
      'Prove trigonometric identities clearly by transforming one side into the other.',
      'Find exact values of other trigonometric ratios given one ratio and the quadrant of $\\theta$.',
    ],
    keyFormulas: [
      {
        label: 'Quotient Identity',
        latex: '\\tan\\theta \\equiv \\frac{\\sin\\theta}{\\cos\\theta} \\qquad (\\cos\\theta \\neq 0)',
        note: 'Also implies $\\frac{1}{\\tan\\theta} \\equiv \\frac{\\cos\\theta}{\\sin\\theta}$.',
      },
      {
        label: 'Pythagorean Identity & Rearrangements',
        latex:
          '\\sin^2\\theta + \\cos^2\\theta \\equiv 1 \\implies \\sin^2\\theta \\equiv 1 - \\cos^2\\theta, \\quad \\cos^2\\theta \\equiv 1 - \\sin^2\\theta',
        note: 'Look for difference of two squares: $1 - \\cos^2\\theta = (1 - \\cos\\theta)(1 + \\cos\\theta)$!',
      },
    ],
    stepByStepMethod: [
      'Start from the MORE COMPLICATED side (typically the LHS with fractions or $\\tan\\theta$). Never work across an equals sign in a proof!',
      'Rewrite every $\\tan\\theta$ as $\\frac{\\sin\\theta}{\\cos\\theta}$ so only $\\sin\\theta$ and $\\cos\\theta$ remain.',
      'Combine fractions over a common denominator (such as $\\cos\\theta(1 + \\sin\\theta)$) and expand the numerator.',
      'Spot $\\sin^2\\theta + \\cos^2\\theta = 1$ or replace $\\cos^2\\theta = 1 - \\sin^2\\theta$, factorise, and cancel common factors cleanly to reach the RHS.',
    ],
    comparisonTable: {
      title: 'Standard Proof Patterns in 9709 Paper 1',
      headers: ['Pattern Seen on LHS', 'Best Next Move'],
      rows: [
        [
          '$\\tan\\theta + \\frac{1}{\\tan\\theta}$',
          'Write $\\frac{\\sin\\theta}{\\cos\\theta} + \\frac{\\cos\\theta}{\\sin\\theta} = \\frac{\\sin^2\\theta + \\cos^2\\theta}{\\sin\\theta\\cos\\theta} = \\frac{1}{\\sin\\theta\\cos\\theta}$',
        ],
        [
          '$\\frac{1}{1 - \\sin\\theta} - \\frac{1}{1 + \\sin\\theta}$',
          'Combine over $(1 - \\sin\\theta)(1 + \\sin\\theta) = 1 - \\sin^2\\theta = \\cos^2\\theta$',
        ],
        [
          '$\\sin^4\\theta - \\cos^4\\theta$',
          'Factorise difference of squares $(\\sin^2\\theta - \\cos^2\\theta)(\\sin^2\\theta + \\cos^2\\theta) = \\sin^2\\theta - \\cos^2\\theta$',
        ],
      ],
    },
    studyNotes: [
      {
        heading: 'Proof Etiquette: Never Cross the Equals Sign',
        body: 'In a "Prove that LHS $\\equiv$ RHS" question, examiners award marks for a logical chain starting at LHS and ending at RHS (or simplifying both sides independently to the same intermediate expression). Moving terms across the $=$ sign assumes what you are trying to prove.',
        noteBox:
          'ALWAYS keep your working strictly on one side: $\\text{LHS} = \\dots = \\dots = \\text{RHS}$.',
      },
      {
        heading: 'Exact Trig Values from Quadrant Info',
        body: 'If $\\cos\\theta = -\\frac{3}{5}$ and $\\frac{\\pi}{2} < \\theta < \\pi$ (Quadrant 2), use $\\sin^2\\theta = 1 - \\frac{9}{25} = \\frac{16}{25}$. Because $\\theta$ is in Quadrant 2 where $\\sin\\theta > 0$, $\\sin\\theta = +\\frac{4}{5}$, and $\\tan\\theta = -\\frac{4}{3}$.',
      },
    ],
    workedExamples: [
      {
        title: 'Fraction Identity Proof',
        question:
          'Prove the identity $\\frac{1}{\\cos\\theta} - \\frac{\\cos\\theta}{1 + \\sin\\theta} \\equiv \\tan\\theta$.',
        marks: 4,
        steps: [
          'Start with LHS and put over common denominator $\\cos\\theta(1 + \\sin\\theta)$:',
          '$\\text{LHS} = \\frac{(1 + \\sin\\theta) - \\cos^2\\theta}{\\cos\\theta(1 + \\sin\\theta)}$.',
          'Replace $1 - \\cos^2\\theta$ by $\\sin^2\\theta$: $= \\frac{\\sin^2\\theta + \\sin\\theta}{\\cos\\theta(1 + \\sin\\theta)}$.',
          'Factorise $\\sin\\theta$ in numerator: $= \\frac{\\sin\\theta(\\sin\\theta + 1)}{\\cos\\theta(1 + \\sin\\theta)} = \\frac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta = \\text{RHS}$.',
        ],
        answer: 'Proven: $\\text{LHS} = \\frac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta$',
        markSchemeNotes:
          'M1 common denominator, M1 replacing $1 - \\cos^2\\theta$ by $\\sin^2\\theta$, A1 factorising & cancelling $(1+\\sin\\theta)$, A1 reaching $\\tan\\theta$.',
      },
      {
        title: 'Fourth-Power Trig Identity',
        question: 'Show that $\\cos^4 x - \\sin^4 x \\equiv 1 - 2\\sin^2 x$.',
        marks: 3,
        steps: [
          'Factorise LHS as a difference of two squares: $(\\cos^2 x - \\sin^2 x)(\\cos^2 x + \\sin^2 x)$.',
          'Use $\\cos^2 x + \\sin^2 x \\equiv 1$: $= \\cos^2 x - \\sin^2 x$.',
          'Substitute $\\cos^2 x = 1 - \\sin^2 x$: $= (1 - \\sin^2 x) - \\sin^2 x = 1 - 2\\sin^2 x$.',
        ],
        answer: 'Proven: $\\text{LHS} = 1 - 2\\sin^2 x$',
        markSchemeNotes: 'M1 difference of squares, B1 using $\\cos^2 x + \\sin^2 x = 1$, A1 final form.',
      },
    ],
    commonMistakes: [
      'Moving terms from LHS to RHS during an identity proof (e.g. cross-multiplying across $\\equiv$).',
      'Writing $\\sqrt{1 - \\cos^2\\theta} = 1 - \\cos\\theta$ (square roots do NOT distribute across subtraction!).',
      'Forgetting to check the quadrant sign when computing $\\sin\\theta = \\pm\\sqrt{1 - \\cos^2\\theta}$.',
    ],
    rapidSummary: [
      {
        rule: 'Two master identities',
        detail: '$\\tan\\theta \\equiv \\frac{\\sin\\theta}{\\cos\\theta}$ and $\\sin^2\\theta + \\cos^2\\theta \\equiv 1$.',
      },
      {
        rule: 'One-sided proof',
        detail: 'Convert $\\tan$ to $\\frac{\\sin}{\\cos}$, combine fractions, factorise, and cancel cleanly.',
      },
    ],
    quickCheck: {
      id: 'qc-9709-5.2',
      paperType: 'Pure Mathematics 1',
      marks: 3,
      prompt:
        'Given that $\\sin\\theta = \\frac{5}{13}$ and $\\theta$ is obtuse ($90^\\circ < \\theta < 180^\\circ$), find the exact value of $\\tan\\theta$ as a fraction (e.g. -a/b).',
      answer: '-5/12',
      acceptedAnswers: ['-5/12'],
      numericAnswer: -5 / 12,
      tolerance: 1e-4,
      hint: 'In Quadrant 2, $\\cos\\theta < 0$. Find $\\cos\\theta = -\\sqrt{1 - \\sin^2\\theta}$ first.',
      solution:
        '$\\cos^2\\theta = 1 - \\frac{25}{169} = \\frac{144}{169}$. Since $\\theta$ is obtuse, $\\cos\\theta = -\\frac{12}{13}$, so $\\tan\\theta = \\frac{5/13}{-12/13} = -\\frac{5}{12}$.',
    },
    sandbox: 'none',
  },
  {
    id: '5.3',
    chapterId: 5,
    code: '5.3',
    title: 'Solving Trig Equations',
    paperCode: 'P1',
    summary:
      'Find ALL solutions of trigonometric equations in a specified degree or radian interval, including quadratic trig equations and equations with transformed angles such as $\\sin(2x - 30^\\circ) = k$.',
    aims: [
      'Find every valid root in the given interval using reference angles and ASTC symmetry.',
      'Adjust the search interval for compound-angle equations like $\\cos(2\\theta + \\frac{\\pi}{3}) = k$ BEFORE unwrapping.',
    ],
    bigIdea:
      'Trigonometric functions repeat periodically, so a trig equation has multiple solutions in an interval. Find the positive acute reference angle $\\alpha$, place it into the correct ASTC quadrants, and—for $f(bx + c) = k$—transform the domain bounds FIRST so no root is ever missed.',
    keyFindings: [
      {
        title: 'Interval Adjustment Rule for $f(ax + b) = k$',
        finding:
          'When $p \\le x \\le q$, transform the bounds to $ap + b \\le u \\le aq + b$ for $u = ax + b$, find EVERY quadrant solution for $u$ inside that range, and solve for $x$ last.',
        noteBox:
          '<u>NEVER divide by $\\sin x$ or $\\cos x$</u> when solving an equation—move all terms to one side and <u>factorise</u> so zero roots are never lost!',
      },
    ],
    objectives: [
      'Find all solutions of simple trigonometric equations lying in a specified interval (degrees or radians).',
      'Solve trigonometric equations involving $\\sin^2\\theta$, $\\cos^2\\theta$, and $\\tan\\theta$ by reducing to a single trig function via identities.',
      'Solve trigonometric equations of the form $\\sin(ax + b) = k$, $\\cos(ax + b) = k$, and $\\tan(ax + b) = k$.',
    ],
    keyFormulas: [
      {
        label: 'Four-Quadrant Solutions on $[0, 2\\pi]$ (Reference $\\alpha \\in (0, \\frac{\\pi}{2})$)',
        latex:
          '\\sin u = +s \\implies \\alpha,\\; \\pi - \\alpha \\qquad \\sin u = -s \\implies \\pi + \\alpha,\\; 2\\pi - \\alpha',
        note: 'For $\\cos u = +c$: $\\alpha, 2\\pi - \\alpha$; for $\\cos u = -c$: $\\pi - \\alpha, \\pi + \\alpha$. For $\\tan u$: step by $\\pi$ ($180^\\circ$).',
      },
      {
        label: 'Interval Transformation Rule',
        latex: 'p \\le x \\le q \\implies ap + b \\le ax + b \\le aq + b',
        note: 'List ALL solutions $u = ax + b$ inside $[ap + b, aq + b]$ first, and ONLY THEN solve $ax + b = u$ for $x$!',
      },
    ],
    stepByStepMethod: [
      'Check if the question requires Degrees or Radians and set your calculator mode accordingly.',
      'If two trig functions appear: divide by $\\cos x$ (when $\\sin x$ and $\\cos x$ are linear, e.g. $3\\sin x = 2\\cos x \\implies \\tan x = \\frac{2}{3}$, check $\\cos x = 0$ is not a root) OR replace the squared function using $\\sin^2 x + \\cos^2 x = 1$.',
      'Solve the resulting quadratic or linear equation for $\\sin u$, $\\cos u$, or $\\tan u$ (rejecting $|\\sin u| > 1$ or $|\\cos u| > 1$).',
      'Compute the acute reference angle $\\alpha = \\text{trig}^{-1}(|\\text{value}|)$, generate ALL values of $u$ inside the adjusted interval $[ap + b, aq + b]$, then solve for $x$.',
    ],
    comparisonTable: {
      title: 'Choosing the Identity When Solving Equations',
      headers: ['Equation Type', 'Correct Algebraic Move', 'Pitfall to Avoid'],
      rows: [
        ['$a\\sin x = b\\cos x$', 'Divide by $\\cos x$ to get $\\tan x = \\frac{b}{a}$', 'Squaring both sides introduces false extra roots!'],
        ['$a\\sin x\\cos x = b\\sin x$', 'Factorise $\\sin x(a\\cos x - b) = 0$', 'Dividing by $\\sin x$ loses the roots where $\\sin x = 0$!'],
        ['$2\\cos^2 x - \\sin x - 1 = 0$', 'Replace $\\cos^2 x = 1 - \\sin^2 x$', 'Changing the linear term $\\sin x$ instead of the squared term'],
      ],
    },
    studyNotes: [
      {
        heading: 'Never Divide by $\\sin x$ or $\\cos x$ When It Can Be Zero',
        body: 'In $\\sin x\\tan x = \\sin x$, cancelling $\\sin x$ throws away $\\sin x = 0$ ($x = 0, \\pi, 2\\pi$). ALWAYS move everything to one side and factorise: $\\sin x(\\tan x - 1) = 0$.',
        noteBox:
          'You MAY divide $2\\sin x + 3\\cos x = 0$ by $\\cos x$ ONLY because if $\\cos x = 0$, then $\\sin x = \\pm 1 \\neq 0$, which cannot satisfy the equation.',
      },
      {
        heading: 'Shifted Angle Intervals (e.g. $-\\pi \\le x \\le \\pi$)',
        body: 'For $\\sin(2x - \\frac{\\pi}{6}) = 0.5$ on $0 \\le x \\le \\pi$, the range for $u = 2x - \\frac{\\pi}{6}$ is $-\\frac{\\pi}{6} \\le u \\le \\frac{11\\pi}{6}$. Finding $u$ in $[0, 2\\pi]$ first and adding/subtracting $2\\pi$ catches every valid root before solving for $x$.',
      },
    ],
    workedExamples: [
      {
        title: 'Quadratic Trigonometric Equation Using $\\sin^2\\theta + \\cos^2\\theta = 1$',
        question: 'Solve the equation $2\\sin^2 x + 3\\cos x = 3$ for $0^\\circ \\le x \\le 360^\\circ$.',
        marks: 4,
        steps: [
          'Replace $\\sin^2 x$ with $1 - \\cos^2 x$: $2(1 - \\cos^2 x) + 3\\cos x = 3$.',
          'Rearrange: $2\\cos^2 x - 3\\cos x + 1 = 0$.',
          'Factorise: $(2\\cos x - 1)(\\cos x - 1) = 0$, so $\\cos x = \\frac{1}{2}$ or $\\cos x = 1$.',
          'For $\\cos x = \\frac{1}{2}$ in $[0^\\circ, 360^\\circ]$: $x = 60^\\circ, 300^\\circ$.',
          'For $\\cos x = 1$ in $[0^\\circ, 360^\\circ]$: $x = 0^\\circ, 360^\\circ$.',
        ],
        answer: '$x = 0^\\circ, 60^\\circ, 300^\\circ, 360^\\circ$',
        markSchemeNotes:
          'M1 substituting $1 - \\cos^2 x$, A1 quadratic $2\\cos^2 x - 3\\cos x + 1 = 0$, M1 solving factorised form, A1 all 4 angles.',
      },
      {
        title: 'Compound Angle Equation in Radians',
        question:
          'Solve $\\cos\\!\\left(2x + \\frac{\\pi}{3}\\right) = -\\frac{\\sqrt{3}}{2}$ for $0 \\le x \\le \\pi$, giving exact answers in terms of $\\pi$.',
        marks: 4,
        steps: [
          'Let $u = 2x + \\frac{\\pi}{3}$. When $0 \\le x \\le \\pi$, the adjusted interval is $\\frac{\\pi}{3} \\le u \\le \\frac{7\\pi}{3}$.',
          'Reference angle: $\\cos\\alpha = \\frac{\\sqrt{3}}{2} \\implies \\alpha = \\frac{\\pi}{6}$.',
          'Since $\\cos u < 0$, $u$ lies in Quadrants 2 and 3: $u = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$ and $u = \\pi + \\frac{\\pi}{6} = \\frac{7\\pi}{6}$ (note $\\frac{5\\pi}{6} + 2\\pi = \\frac{17\\pi}{6} > \\frac{7\\pi}{3}$ is outside).',
          'Solve $2x + \\frac{\\pi}{3} = \\frac{5\\pi}{6} \\implies x = \\frac{\\pi}{4}$, and $2x + \\frac{\\pi}{3} = \\frac{7\\pi}{6} \\implies x = \\frac{5\\pi}{12}$.',
        ],
        answer: '$x = \\frac{\\pi}{4}$ or $x = \\frac{5\\pi}{12}$',
        markSchemeNotes:
          'M1 adjusted interval / principal values, A1 for $\\frac{5\\pi}{6}$ and $\\frac{7\\pi}{6}$, M1 unwrapping $2x + \\frac{\\pi}{3}$, A1 both exact roots.',
      },
    ],
    commonMistakes: [
      'Dividing both sides by $\\sin x$ or $\\cos x$ and losing roots where that factor is $0$.',
      'Adding $\\pm 360^\\circ$ AFTER dividing by $2$ instead of adding $\\pm 360^\\circ$ to $2x$ BEFORE dividing by $2$.',
      'Rounding intermediate angles too early (keep 2 decimal places in degrees or 4 s.f. in radians before unwrapping).',
    ],
    rapidSummary: [
      {
        rule: 'Factorise, never cancel',
        detail: 'Move all terms to LHS and factorise rather than dividing by $\\sin x$ or $\\cos x$.',
      },
      {
        rule: 'Adjust interval first',
        detail: 'Find ALL roots for $u = ax + b$ in $[ap+b, aq+b]$, then solve for $x$.',
      },
    ],
    quickCheck: {
      id: 'qc-9709-5.3',
      paperType: 'Pure Mathematics 1',
      marks: 3,
      prompt:
        'Find the largest solution in degrees to $\\tan(2x) = \\sqrt{3}$ in the interval $0^\\circ \\le x \\le 180^\\circ$.',
      answer: '120',
      acceptedAnswers: ['120', '120°'],
      numericAnswer: 120,
      tolerance: 0,
      hint: 'For $0^\\circ \\le x \\le 180^\\circ$, $2x$ spans $0^\\circ \\le 2x \\le 360^\\circ$.',
      solution:
        '$\\tan(2x) = \\sqrt{3}$ with $0^\\circ \\le 2x \\le 360^\\circ$ gives $2x = 60^\\circ$ or $2x = 240^\\circ$, so $x = 30^\\circ$ or $x = 120^\\circ$. Largest is $120^\\circ$.',
    },
    sandbox: 'geogebra-graph',
  },
];
