import type { SubtopicNote } from '../../../types/syllabus';

export const CHAPTER_6_NOTES: SubtopicNote[] = [
  {
    id: '6.1',
    chapterId: 6,
    code: '6.1',
    title: 'Binomial Expansion of $(a + b)^n$',
    paperCode: 'P1',
    summary:
      'Expand $(a + b)^n$ ($n \\in \\mathbb{Z}^+$) using Pascal’s triangle or ${}^nC_r = \\binom{n}{r}$, apply the general term ${}^nC_r \\cdot a^{n-r} \\cdot b^r$, find specific coefficients of $x^k$, and handle products.',
    aims: [
      'Connect Pascal’s triangle rows ($1$, $1\\;1$, $1\\;2\\;1$, $1\\;3\\;3\\;1$, $1\\;4\\;6\\;4\\;1$) directly to $(a + b)^n$ expansions.',
      'Extract exact coefficients of $x^k$ in $(a + bx)^n$, $(x + 2)^{12}$, and product brackets using the general term ${}^nC_r \\cdot a^{n-r} b^r$.',
    ],
    bigIdea:
      'Expanding $(a + b)^n$ picks $b$ from $r$ of the $n$ brackets and $a$ from the remaining $n - r$ brackets, yielding ${}^nC_r \\cdot a^{n-r} \\cdot b^r$ summed from $r = 0$ to $n$. Matching the combined power of $x$ to $x^k$ pins down the exact index $r$ immediately without expanding everything.',
    keyFindings: [
      {
        title: 'Pascal’s Triangle & Binomial Sum Identity',
        finding:
          '$(a + b)^n = {}^nC_0 \\cdot a^n b^0 + {}^nC_1 \\cdot a^{n-1} b^1 + {}^nC_2 \\cdot a^{n-2} b^2 + \\dots + {}^nC_n \\cdot a^{n-n} b^n = \\sum_{r=0}^{n} \\binom{n}{r} a^{n-r} b^r$.',
        noteBox:
          'Notice the exponents ALWAYS add to $n$: $(n - r) + r = n$. As the power of $a$ drops by $1$, the power of $b$ rises by $1$.',
      },
      {
        title: 'Finding the Coefficient of $x^k$',
        finding:
          'In $(a + bx)^n$, write the general term ${}^nC_r \\cdot (a)^{n-r}(bx)^r$. Equate the resulting $x$-power to $x^k$ to solve for $r$ (for $(a + bx)^n$, $x^r = x^k \\implies r = k$), then substitute $r$ back to evaluate the coefficient.',
        noteBox:
          'When finding the coefficient of $x^k$, wrap negative or numerical multipliers inside brackets: $(bx)^r = b^r x^r$, NEVER $bx^r$!',
      },
    ],
    objectives: [
      'Use Pascal’s triangle and the general expansion $(a + b)^n = \\sum_{r=0}^n {}^nC_r a^{n-r} b^r$ for positive integer $n$.',
      'Recognise and compute $n!$ and $\\binom{n}{r}$ (${}^nC_r$).',
      'Find specific terms (e.g. coefficient of $x^5$, term independent of $x$) and coefficients in bracket products.',
    ],
    keyFormulas: [
      {
        label: 'Binomial Theorem ($n \\in \\mathbb{Z}^+$, MF19 Formula)',
        latex:
          '(a + b)^n = {}^nC_0 a^n b^0 + {}^nC_1 a^{n-1} b^1 + {}^nC_2 a^{n-2} b^2 + \\dots + {}^nC_n a^0 b^n = \\sum_{r=0}^{n} \\binom{n}{r} a^{n-r} b^r',
        note: 'This formula is printed in the official Cambridge 9709 MF19 formula sheet.',
      },
      {
        label: 'General Term & Coefficient of $x^k$',
        latex:
          'T_{r+1} = {}^nC_r \\cdot a^{n-r} \\cdot b^r \\qquad {}^nC_r = \\binom{n}{r} = \\frac{n!}{r!(n - r)!}',
        note: 'For $(a + bx)^n$, $x^r = x^k \\implies r = k$; for $(x + c)^n$, $x^{n-r} = x^k \\implies n - r = k$.',
      },
    ],
    diagrams: [
      {
        id: 'pascal-binomial',
        title: 'Pascal’s Triangle & Power Expansions $(a + b)^0$ to $(a + b)^4$',
        caption: 'Each row of Pascal’s triangle gives the exact coefficients ${}^nC_r$ matching the expansions $(a+b)^0$ through $(a+b)^4$.',
      },
    ],
    stepByStepMethod: [
      'Identify $a$, $b$ (with sign!), and $n$ carefully.',
      'For the first few terms: expand ${}^nC_0 a^n b^0 + {}^nC_1 a^{n-1} b^1 + {}^nC_2 a^{n-2} b^2 + \\dots$ and simplify each numerical product.',
      'To find the coefficient of $x^k$: write ${}^nC_r \\cdot a^{n-r} b^r$, isolate the power of $x$, equate it to $x^k$, solve for integer $r$, and evaluate at that $r$.',
      'For a product like $(3 - 2x)(1 + \\frac{x}{2})^5$, expand only up to the target degree and add all cross-pairs whose exponents sum to $k$.',
    ],
    comparisonTable: {
      title: 'Pascal Rows & Power Expansions ($n = 0$ to $4$)',
      headers: ['$n$', 'Pascal Coefficients', 'Full Expansion of $(a + b)^n$'],
      rows: [
        ['$0$', '$1$', '$1$'],
        ['$1$', '$1,\\; 1$', '$a + b$'],
        ['$2$', '$1,\\; 2,\\; 1$', '$a^2 + 2ab + b^2$'],
        ['$3$', '$1,\\; 3,\\; 3,\\; 1$', '$a^3 + 3a^2 b + 3ab^2 + b^3$'],
        ['$4$', '$1,\\; 4,\\; 6,\\; 4,\\; 1$', '$a^4 + 4a^3 b + 6a^2 b^2 + 4ab^3 + b^4$'],
      ],
    },
    studyNotes: [
      {
        heading: 'Comparing $(a + bx)^n$ vs $(x + c)^n$ When Solving for $r$',
        body: 'In $(a + bx)^n$, the $x$ is inside the second term $b$, so the general term contains $x^r$ and solving $x^r = x^k$ gives $r = k$. In $(x + 2)^{12}$ (where $x$ is the FIRST term), the general term is ${}^{12}C_r \\cdot x^{12-r} \\cdot 2^r$, so matching $x^{12-r} = x^5$ gives $12 - r = 5 \\implies r = 7$!',
        noteBox:
          'Note that ${}^{12}C_7 = {}^{12}C_5 = 792$, so whether you count $r$ from the left or right, always align $x$-powers explicitly rather than guessing $r = k$!',
      },
      {
        heading: 'Term Independent of $x$ & Finding Unknown $k$ or $n$',
        body: 'The "term independent of $x$" (constant term) corresponds to $x^0$. Set the combined $x$-exponent equal to $0$ to find $r$. To find an unknown $k$ or $n$ from a given $x^2$ coefficient, equate $\\binom{n}{2} a^{n-2} b^2$ to the given value and solve.',
      },
    ],
    workedExamples: [
      {
        title: 'First Three Terms & Coefficient of $x^5$ in $(x + 2)^{12}$ (PDF Worked Example)',
        question: 'Expand the first three terms of $(x + 2)^{12}$ and find the coefficient of $x^5$.',
        marks: 5,
        steps: [
          'First three terms: $(x + 2)^{12} = {}^{12}C_0 \\cdot x^{12} \\cdot 2^0 + {}^{12}C_1 \\cdot x^{11} \\cdot 2^1 + {}^{12}C_2 \\cdot x^{10} \\cdot 2^2 + \\dots$',
          'Evaluate binomial coefficients and powers of $2$: $= 1 \\cdot x^{12} + 12 \\cdot x^{11} \\cdot 2 + 66 \\cdot x^{10} \\cdot 4 + \\dots = x^{12} + 24x^{11} + 264x^{10} + \\dots$',
          'To find the coefficient of $x^5$, write the general term: ${}^{12}C_r \\cdot x^{12 - r} \\cdot 2^r$.',
          'Match the power of $x$: $x^{12 - r} = x^5 \\implies 12 - r = 5 \\implies r = 7$.',
          'Substitute $r = 7$: ${}^{12}C_7 \\cdot x^{12 - 7} \\cdot 2^7 = 792 \\times 128\\,x^5 = 101\\,376\\,x^5$.',
        ],
        answer: 'First 3 terms: $x^{12} + 24x^{11} + 264x^{10} + \\dots$; coefficient of $x^5$ is $101\\,376$',
        markSchemeNotes:
          'M1 expansion terms, A1 for $x^{12} + 24x^{11} + 264x^{10}$, M1 setting $12 - r = 5 \\implies r = 7$, A1 for $101\\,376$.',
      },
      {
        title: 'Term Independent of $x$ in $\\left(2x^2 - \\frac{1}{x}\\right)^6$',
        question: 'Find the term independent of $x$ in the expansion of $\\left(2x^2 - \\frac{1}{x}\\right)^6$.',
        marks: 4,
        steps: [
          'General term: $T_{r+1} = \\binom{6}{r}(2x^2)^{6-r}\\left(-x^{-1}\\right)^r = \\binom{6}{r} 2^{6-r}(-1)^r x^{12 - 2r - r}$.',
          'For the constant term ($x^0$), set $12 - 3r = 0 \\implies r = 4$.',
          'Substitute $r = 4$: $\\binom{6}{4} 2^{6-4}(-1)^4 = 15 \\times 2^2 \\times 1 = 15 \\times 4 = 60$.',
        ],
        answer: '$60$',
        markSchemeNotes:
          'M1 general term structure, A1 power $12 - 3r = 0 \\implies r = 4$, M1 evaluating $\\binom{6}{4}2^2(-1)^4$, A1 for $60$.',
      },
      {
        title: 'Coefficient in a Binomial Product',
        question: 'Find the coefficient of $x^2$ in the expansion of $(3 - 2x)\\left(1 + \\frac{x}{2}\\right)^5$.',
        marks: 4,
        steps: [
          'Expand $\\left(1 + \\frac{x}{2}\\right)^5$ up to $x^2$: $1 + 5\\left(\\frac{x}{2}\\right) + 10\\left(\\frac{x}{2}\\right)^2 + \\dots = 1 + \\frac{5}{2}x + \\frac{5}{2}x^2 + \\dots$',
          'Multiply by $(3 - 2x)$ and collect only the $x^2$ terms:',
          'From $3 \\times \\frac{5}{2}x^2 = \\frac{15}{2}x^2$, and from $(-2x) \\times \\frac{5}{2}x = -5x^2$.',
          'Total $x^2$ coefficient $= \\frac{15}{2} - 5 = \\frac{5}{2}$ (or $2.5$).',
        ],
        answer: '$\\frac{5}{2}$ (or $2.5$)',
        markSchemeNotes:
          'M1 expanding up to $x^2$, A1 for $1 + \\frac{5}{2}x + \\frac{5}{2}x^2$, M1 picking both cross-products, A1 for $\\frac{5}{2}$.',
      },
    ],
    commonMistakes: [
      'Forgetting to raise the coefficient inside $(2x)^4$ to the power $4$ (writing $2x^4$ instead of $16x^4$).',
      'Answering with $101\\,376x^5$ when asked for the COEFFICIENT of $x^5$ (give the number $101\\,376$, not the $x^5$ factor).',
      'Missing the second cross-term $(-2x)\\cdot(x\\text{ term})$ when finding the $x^2$ term of a product.',
    ],
    rapidSummary: [
      {
        rule: '$T_{r+1} = {}^nC_r \\cdot a^{n-r} \\cdot b^r$',
        detail: 'Match the power of $x$ to $x^k$ to find $r$, then evaluate at that $r$.',
      },
      {
        rule: 'Product coefficients',
        detail: 'Expand only up to the target degree and sum every pair whose powers add up.',
      },
    ],
    quickCheck: {
      id: 'qc-9709-6.1',
      paperType: 'Pure Mathematics 1',
      marks: 3,
      prompt: 'Find the coefficient of $x^3$ in the expansion of $(2 - x)^5$.',
      answer: '-40',
      acceptedAnswers: ['-40'],
      numericAnswer: -40,
      tolerance: 0,
      hint: 'Use $\\binom{5}{3}(2)^2(-x)^3$.',
      solution: '$\\binom{5}{3}(2)^2(-1)^3 = 10 \\times 4 \\times (-1) = -40$.',
    },
    sandbox: 'none',
  },
  {
    id: '6.2',
    chapterId: 6,
    code: '6.2',
    title: 'Arithmetic Progressions',
    paperCode: 'P1',
    summary:
      'Recognise arithmetic progressions ($u_1, u_2, \\dots, u_n$), use $a = u_1$, $d = u_n - u_{n-1}$, $u_n = a + (n - 1)d$, series sum $S_n = \\frac{n}{2}(a + u_n) = \\frac{n}{2}\\big(2a + (n - 1)d\\big)$, and the bridge $u_n = S_n - S_{n-1}$.',
    aims: [
      'Solve two-equation AP problems involving first term $a = u_1$ and common difference $d = u_2 - u_1 = u_3 - u_2$.',
      'Derive and apply $u_n = S_n - S_{n-1}$ and find the least $n$ or maximum sum when terms turn negative.',
    ],
    bigIdea:
      'An arithmetic progression adds a constant common difference $d = u_n - u_{n-1}$ at each step. The $n$-th term $u_n = a + (n - 1)d$ gives any single position in the sequence, while $S_n = \\frac{n}{2}(a + u_n) = \\frac{n}{2}(2a + (n - 1)d)$ sums the first $n$ terms—and subtracting consecutive sums recovers $u_n = S_n - S_{n-1}$.',
    keyFindings: [
      {
        title: 'AP Sequence vs AP Series ($u_n$ and $S_n$)',
        finding:
          'Sequence $u_1, u_2, u_3, \\dots, u_n$: $a = u_1$, $d = u_n - u_{n-1} = u_2 - u_1 = u_3 - u_2$, and $u_n = a + (n - 1)d$. Series $u_1 + u_2 + \\dots + u_n$: $S_n = \\frac{n}{2}(a + u_n) = \\frac{n}{2}\\big(2a + (n - 1)d\\big)$.',
        noteBox:
          '<u>$u_n$ gives a single term; $S_n$ gives the sum of the first $n$ terms</u>. Do not confuse sequence term with series sum!',
      },
      {
        title: 'Recovering $u_n$ from $S_n$ ($u_n = S_n - S_{n-1}$)',
        finding:
          'Since $S_1 = u_1$ and $S_2 = u_1 + u_2 = S_1 + u_2 \\iff u_2 = S_2 - S_1$, in general $u_n = S_n - S_{n-1}$ (for $n \\ge 2$).',
        noteBox:
          'Sum from term $m$ to term $n$ inclusive is $S_n - S_{m-1}$ (NOT $S_n - S_m$, which removes the $m$-th term!).',
      },
    ],
    objectives: [
      'Recognise arithmetic progressions and use $u_n = a + (n - 1)d$ and $S_n = \\frac{n}{2}(a + u_n) = \\frac{n}{2}(2a + (n - 1)d)$.',
      'Solve problems involving simultaneous linear equations in $a$ and $d$, and inequalities for $S_n$ or $u_n$.',
      'Use the relationship $u_n = S_n - S_{n-1}$ to recover terms from a sum formula.',
    ],
    keyFormulas: [
      {
        label: '1. AP Sequence ($n$-th Term & Common Difference)',
        latex: 'a = u_1, \\quad d = u_n - u_{n-1} = u_2 - u_1 = u_3 - u_2, \\qquad u_n = a + (n - 1)d',
        note: 'For three consecutive AP terms $p, q, s$: $q - p = s - q \\iff 2q = p + s$.',
      },
      {
        label: '2. AP Series (Sum of First $n$ Terms — MF19)',
        latex: 'S_n = \\frac{n}{2}(a + u_n) = \\frac{n}{2}\\big(2a + (n - 1)d\\big)',
        note: 'Use $\\frac{n}{2}(a + u_n)$ whenever the first term $a$ and last term $u_n$ are known.',
      },
      {
        label: 'Link Between $S_n$ and $u_n$',
        latex: 'S_1 = u_1, \\quad S_2 = S_1 + u_2 \\iff u_2 = S_2 - S_1 \\implies u_n = S_n - S_{n-1}',
        note: 'Holds for EVERY sequence and series!',
      },
    ],
    diagrams: [
      {
        id: 'ap-gp-series',
        title: 'AP Linear Step Progression vs GP Convergent Sum',
        caption: 'AP adds fixed step $d$ horizontally ($u_n = a + (n-1)d$, $u_n = S_n - S_{n-1}$); GP converges to $S_\\infty = \\frac{a}{1-r}$ when $|r| < 1$.',
      },
    ],
    stepByStepMethod: [
      'Translate every word clue into $a$ and $d$ equations: e.g. $u_5 = a + 4d$ and $S_{10} = 5(2a + 9d)$.',
      'Solve the simultaneous linear pair for $a$ and $d$.',
      'For "least $n$ such that $S_n > K$": set up the quadratic in $n$, solve the equality, and round UP to the next positive integer $n$.',
      'For "maximum sum" of a decreasing AP ($d < 0$): sum all positive terms by finding the last $n$ where $u_n > 0$ (or $u_n \\ge 0$).',
    ],
    comparisonTable: {
      title: 'AP Problem Strategies',
      headers: ['Question Prompt', 'Immediate Algebraic Equation'],
      rows: [
        ['"$x, y, z$ are consecutive AP terms"', '$y - x = z - y \\implies 2y = x + z$'],
        ['"Sum from 11th to 20th term inclusive"', '$S_{20} - S_{10}$ (Watch: subtract $S_{10}$, NOT $S_{11}$!)'],
        ['"Maximum value of $S_n$" (with $d < 0$)', 'Find largest integer $n$ with $u_n \\ge 0$, then evaluate $S_n$'],
      ],
    },
    studyNotes: [
      {
        heading: 'Partial Sums from Term $m$ to Term $n$',
        body: 'The sum of terms from $u_{11}$ to $u_{25}$ inclusive is $S_{25} - S_{10}$ (or treat it as an AP of $25 - 11 + 1 = 15$ terms with first term $u_{11}$ and last term $u_{25}$). Subtracting $S_{11}$ would accidentally remove the 11th term!',
        noteBox:
          'ALWAYS check inclusive counting: from term $m$ to term $n$ inclusive there are $n - m + 1$ terms, and the sum is $S_n - S_{m-1}$.',
      },
      {
        heading: 'Finding the Least Integer $n$ for a Sum Threshold',
        body: 'When asked for the least number of terms $n$ such that $S_n > K$, substitute $a$ and $d$ into $\\frac{n}{2}(2a + (n - 1)d) > K$, clear the fraction to form a quadratic inequality in $n$, find the positive root, and round UP to the next integer.',
        bullets: [
          'Always reject negative values of $n$ because the number of terms must satisfy $n \\in \\mathbb{Z}^+$.',
          'Check your integer $n$ by substituting $n - 1$ and $n$ back into $S_n$ to confirm $S_{n-1} \\le K < S_n$.',
        ],
      },
    ],
    workedExamples: [
      {
        title: 'Finding $a$, $d$, and Maximum Sum',
        question:
          'In an arithmetic progression, the 4th term is $23$ and the sum of the first $10$ terms is $155$. Find $a$ and $d$, and hence find the maximum possible value of $S_n$.',
        marks: 5,
        steps: [
          'Form two equations: $u_4 = a + 3d = 23$ and $S_{10} = 5(2a + 9d) = 155 \\implies 2a + 9d = 31$.',
          'Double the first: $2a + 6d = 46$. Subtract from $2a + 9d = 31$: $3d = -15 \\implies d = -5$.',
          'Then $a = 23 - 3(-5) = 38$.',
          'Since $d < 0$, $S_n$ is maximised while terms stay positive: $u_n = 38 - 5(n - 1) > 0 \\implies 43 - 5n > 0 \\implies n < 8.6$, so $n = 8$.',
          'Maximum sum $= S_8 = \\frac{8}{2}(2(38) + 7(-5)) = 4(76 - 35) = 164$.',
        ],
        answer: '$a = 38$, $d = -5$; maximum sum $S_8 = 164$',
        markSchemeNotes:
          'M1 two equations in $a, d$, A1 $d = -5$, A1 $a = 38$, M1 solving $u_n > 0$ for $n = 8$, A1 $S_8 = 164$.',
      },
      {
        title: 'Least Integer $n$ Exceeding a Sum Target',
        question:
          'An arithmetic progression has first term $5$ and common difference $4$. Find the least value of $n$ for which the sum of the first $n$ terms exceeds $250$.',
        marks: 4,
        steps: [
          'Use $S_n = \\frac{n}{2}(2(5) + 4(n - 1)) > 250$.',
          'Simplify inside the bracket: $\\frac{n}{2}(4n + 6) > 250 \\implies n(2n + 3) > 250$.',
          'Rearrange: $2n^2 + 3n - 250 > 0$.',
          'Solve $2n^2 + 3n - 250 = 0$: $n = \\frac{-3 + \\sqrt{9 + 2000}}{4} \\approx \\frac{-3 + 44.82}{4} \\approx 10.46$.',
          'Since $n$ must be a positive integer strictly above $10.46$, the least value is $n = 11$.',
        ],
        answer: '$n = 11$',
        markSchemeNotes:
          'M1 setting up quadratic inequality in $n$, A1 for $2n^2 + 3n - 250 > 0$, M1 finding critical positive root $\\approx 10.46$, A1 for $n = 11$.',
      },
    ],
    commonMistakes: [
      'Writing $u_n = a + nd$ instead of $a + (n - 1)d$.',
      'Computing sum from 10th to 20th term as $S_{20} - S_{10}$ instead of $S_{20} - S_9$.',
      'Dropping the $2$ in $2a + (n - 1)d$ inside $S_n$.',
    ],
    rapidSummary: [
      {
        rule: '$u_n = a + (n-1)d$',
        detail: '$n$th term is linear in $n$; $S_n = \\frac{n}{2}(2a + (n-1)d) = \\frac{n}{2}(a+u_n)$.',
      },
      {
        rule: '$u_n = S_n - S_{n-1}$',
        detail: 'Partial sum $u_m + \\dots + u_n$ equals $S_n - S_{m-1}$ (subtract $S_{m-1}$, not $S_m$).',
      },
    ],
    quickCheck: {
      id: 'qc-9709-6.2',
      paperType: 'Pure Mathematics 1',
      marks: 3,
      prompt:
        'An arithmetic progression has first term $a = 7$ and $12$th term $u_{12} = 40$. Find the sum of the first $12$ terms, $S_{12}$.',
      answer: '282',
      acceptedAnswers: ['282'],
      numericAnswer: 282,
      tolerance: 0,
      hint: 'Use the first-and-last formula $S_n = \\frac{n}{2}(a + u_n)$.',
      solution: '$S_{12} = \\frac{12}{2}(7 + 40) = 6 \\times 47 = 282$.',
    },
    sandbox: 'sequence-explorer',
  },
  {
    id: '6.3',
    chapterId: 6,
    code: '6.3',
    title: 'Geometric Progressions & Sum to Infinity',
    paperCode: 'P1',
    summary:
      'Recognise geometric progressions ($u_1 = a$, $r = \\frac{u_n}{u_{n-1}} = \\frac{u_2}{u_1} = \\frac{u_3}{u_2}$, $r \\neq 1$), apply $u_n = ar^{n-1}$ and $S_n = a\\left(\\frac{1 - r^n}{1 - r}\\right) = a\\left(\\frac{r^n - 1}{r - 1}\\right)$, $u_n = S_n - S_{n-1}$, and infinite geometric series $S_\\infty = \\frac{a}{1 - r}$ when $|r| < 1$ ($-1 < r < 1$).',
    aims: [
      'Solve GP ratio equations cleanly by dividing terms (eliminating $a$) and solving for $r$.',
      'Distinguish between finite sums ($r < 1$ vs $r > 1$ form) and convergent infinite geometric series ($|r| < 1 \\iff -1 < r < 1$).',
    ],
    bigIdea:
      'A geometric progression multiplies by a constant ratio $r \\neq 1$ at each step. When $|r| < 1$ ($-1 < r < 1$), $r^n \\to 0$ as $n \\to \\infty$, so the infinite series $u_1 + u_2 + u_3 + \\dots$ (geometric only!) converges to $S_\\infty = \\frac{a}{1 - r}$.',
    keyFindings: [
      {
        title: 'GP Sequence, Finite Sum ($r < 1$ vs $r > 1$) & $u_n = S_n - S_{n-1}$',
        finding:
          'Sequence $u_1, u_2, \\dots, u_n$: $u_1 = a$, $r = \\frac{u_n}{u_{n-1}} = \\frac{u_2}{u_1} = \\frac{u_3}{u_2}$ ($r \\neq 1$), $u_n = a(r)^{n-1}$. Finite sum: $S_n = a\\left(\\frac{1 - r^n}{1 - r}\\right)$ for $r < 1$ or $a\\left(\\frac{r^n - 1}{r - 1}\\right)$ for $r > 1$, with $u_n = S_n - S_{n-1}$.',
        noteBox:
          'Choosing $\\frac{1 - r^n}{1 - r}$ when $r < 1$ and $\\frac{r^n - 1}{r - 1}$ when $r > 1$ keeps denominators positive and prevents sign slips!',
      },
      {
        title: 'Infinite Series (Geometric Only): $S_\\infty = \\frac{a}{1 - r}$',
        finding:
          'For $u_1 + u_2 + u_3 + \\dots$, $S_\\infty = S = \\frac{a}{1 - r}$ exists if and only if $|r| < 1 \\iff -1 < r < 1$.',
        noteBox:
          'ALWAYS check $|r| < 1$ before substituting into $S_\\infty = \\frac{a}{1 - r}$—reject any candidate $r$ with $|r| \\ge 1$!',
      },
    ],
    objectives: [
      'Recognise geometric progressions and use $u_n = a(r)^{n-1}$ and $S_n = a\\left(\\frac{1 - r^n}{1 - r}\\right) = a\\left(\\frac{r^n - 1}{r - 1}\\right)$.',
      'Use the convergence condition $|r| < 1$ ($-1 < r < 1$) and the infinite geometric series formula $S_\\infty = \\frac{a}{1 - r}$.',
      'Solve mixed AP and GP problems where terms of one progression also form the other.',
    ],
    keyFormulas: [
      {
        label: '1. GP Sequence ($n$-th Term & Common Ratio)',
        latex: 'u_1 = a, \\quad r = \\frac{u_n}{u_{n-1}} = \\frac{u_2}{u_1} = \\frac{u_3}{u_2} \\;(r \\neq 1), \\qquad u_n = a(r)^{n-1}',
        note: 'Three consecutive GP terms $p, q, s$ satisfy $\\frac{q}{p} = \\frac{s}{q} \\iff q^2 = ps$.',
      },
      {
        label: '2. Finite Sum ($r < 1$ vs $r > 1$) & $u_n = S_n - S_{n-1}$ (MF19)',
        latex:
          'S_n = a\\left(\\frac{1 - r^n}{1 - r}\\right) \\;(r < 1) \\;=\\; a\\left(\\frac{r^n - 1}{r - 1}\\right) \\;(r > 1), \\qquad u_n = S_n - S_{n-1}',
        note: 'Printed in MF19.',
      },
      {
        label: '3. Infinite Series (Geometric Only — MF19)',
        latex: 'S_\\infty = S = \\frac{a}{1 - r} \\qquad \\text{if } |r| < 1 \\iff -1 < r < 1',
        note: 'Diverges whenever $|r| \\ge 1$ (arithmetic progressions never have a finite $S_\\infty$ unless $a = d = 0$).',
      },
    ],
    stepByStepMethod: [
      'Express two given terms as $ar^{m-1}$ and $ar^{k-1}$, then DIVIDE one equation by the other to eliminate $a$ and get $r^{m-k}$.',
      'Watch out for even powers like $r^2 = \\frac{1}{4}$: this gives BOTH $r = \\frac{1}{2}$ and $r = -\\frac{1}{2}$ unless the question states all terms are positive.',
      'To find the least $n$ such that $|S_\\infty - S_n| < \\varepsilon$ or $u_n > K$, isolate $r^n$ and take $\\log_{10}$ or $\\ln$ of both sides (flipping the inequality if dividing by $\\ln r < 0$!).',
    ],
    comparisonTable: {
      title: 'AP vs GP Quick Comparison',
      headers: ['Feature', 'Arithmetic Progression (AP)', 'Geometric Progression (GP)'],
      rows: [
        ['Step rule', 'Add constant $d = u_n - u_{n-1}$', 'Multiply by constant $r = u_n / u_{n-1}$ ($r \\neq 1$)'],
        ['$n$th term $u_n$', '$a + (n - 1)d$', '$a(r)^{n-1}$'],
        ['Series $S_n$', '$\\frac{n}{2}(a + u_n) = \\frac{n}{2}(2a + (n - 1)d)$', '$a\\left(\\frac{1 - r^n}{1 - r}\\right)$ or $a\\left(\\frac{r^n - 1}{r - 1}\\right)$'],
        ['Infinite sum $S_\\infty$', 'Does not exist (diverges)', 'Geometric only: $\\frac{a}{1 - r}$ iff $|r| < 1$ ($-1 < r < 1$)'],
      ],
    },
    studyNotes: [
      {
        heading: 'Watch Negative Logarithms in GP Inequalities',
        body: 'Suppose $(0.8)^n < 0.01$. Taking $\\ln$ gives $n\\ln(0.8) < \\ln(0.01)$. Because $0.8 < 1$, $\\ln(0.8)$ is NEGATIVE, so dividing by $\\ln(0.8)$ FLIPS the inequality sign: $n > \\frac{\\ln(0.01)}{\\ln(0.8)} \\approx 20.64 \\implies n = 21$.',
        noteBox:
          'If a problem mentions BOTH $S_\\infty$ AND two possible values of $r$ (e.g. $r = 2$ and $r = -\\frac{1}{2}$), you MUST state $|r| < 1$ to reject $r = 2$.',
      },
      {
        heading: 'Mixed AP–GP Questions',
        body: 'A classic 9709 Paper 1 favourite sets the 1st, 3rd, and 7th terms of an AP equal to the first three terms of a GP. Write $a$, $a + 2d$, $a + 6d$, then apply $(a + 2d)^2 = a(a + 6d)$ to link $a$ and $d$ immediately.',
      },
    ],
    workedExamples: [
      {
        title: 'Finding $r$ and $S_\\infty$ from Given Terms',
        question:
          'A geometric progression with positive terms has second term $u_2 = 18$ and fourth term $u_4 = 8$. Find the common ratio $r$, the first term $a$, and the sum to infinity $S_\\infty$.',
        marks: 5,
        steps: [
          'Write both terms: $ar = 18$ and $ar^3 = 8$.',
          'Divide to eliminate $a$: $\\frac{ar^3}{ar} = \\frac{8}{18} \\implies r^2 = \\frac{4}{9}$.',
          'Since all terms are positive, $r > 0$, so $r = \\frac{2}{3}$.',
          'Substitute back into $ar = 18$: $a\\left(\\frac{2}{3}\\right) = 18 \\implies a = 27$.',
          'Since $|r| = \\frac{2}{3} < 1$, the series converges: $S_\\infty = \\frac{27}{1 - \\frac{2}{3}} = \\frac{27}{1/3} = 81$.',
        ],
        answer: '$r = \\frac{2}{3}$, $a = 27$, $S_\\infty = 81$',
        markSchemeNotes:
          'M1 dividing $ar^3/ar$, A1 for $r = \\frac{2}{3}$ (positive terms), A1 for $a = 27$, M1 substituting into $\\frac{a}{1-r}$ with $|r|<1$, A1 for $81$.',
      },
      {
        title: 'Mixed AP–GP Problem with Convergence Check',
        question:
          'The first, third, and fourth terms of a non-constant arithmetic progression with first term $12$ form the first three terms of a geometric progression. Find the common ratio $r$ and the sum to infinity $S_\\infty$ of the geometric progression.',
        marks: 5,
        steps: [
          'The AP terms are $u_1 = 12$, $u_3 = 12 + 2d$, and $u_4 = 12 + 3d$ (with $d \\neq 0$).',
          'Since $12, 12 + 2d, 12 + 3d$ form a GP: $(12 + 2d)^2 = 12(12 + 3d)$.',
          'Expand: $144 + 48d + 4d^2 = 144 + 36d \\implies 4d^2 + 12d = 0 \\implies 4d(d + 3) = 0$.',
          'Since $d \\neq 0$, we have $d = -3$. Thus the GP terms are $12, 6, 3$, giving $r = \\frac{6}{12} = \\frac{1}{2}$.',
          'Since $|r| = \\frac{1}{2} < 1$, $S_\\infty = \\frac{12}{1 - \\frac{1}{2}} = 24$.',
        ],
        answer: '$r = \\frac{1}{2}$, $S_\\infty = 24$',
        markSchemeNotes:
          'B1 writing $12+2d$ and $12+3d$, M1 using $q^2 = ps$, A1 for $d = -3$, A1 for $r = \\frac{1}{2}$, A1 for $S_\\infty = 24$.',
      },
    ],
    commonMistakes: [
      'Forgetting the negative root $r = -\\sqrt{\\dots}$ when solving $r^2 = k$ or $r^4 = k$.',
      'Applying $S_\\infty = \\frac{a}{1 - r}$ when $|r| \\ge 1$ (e.g. $r = 1.5$ or $r = -2$).',
      'Forgetting to flip the inequality sign when dividing by $\\ln r$ with $0 < r < 1$.',
    ],
    rapidSummary: [
      {
        rule: '$|r| < 1 \\implies S_\\infty = \\frac{a}{1-r}$',
        detail: 'Always verify $-1 < r < 1$ before computing a sum to infinity.',
      },
      {
        rule: 'Divide GP terms',
        detail: '$u_m / u_k = r^{m-k}$ eliminates $a$ in one step.',
      },
    ],
    quickCheck: {
      id: 'qc-9709-6.3',
      paperType: 'Pure Mathematics 1',
      marks: 3,
      prompt:
        'A geometric progression has first term $16$ and sum to infinity $24$. Find the common ratio $r$ as a simplified fraction (a/b).',
      answer: '1/3',
      acceptedAnswers: ['1/3'],
      numericAnswer: 1 / 3,
      tolerance: 1e-4,
      hint: 'Substitute $a = 16$ and $S_\\infty = 24$ into $S_\\infty = \\frac{a}{1 - r}$.',
      solution: '$24 = \\frac{16}{1 - r} \\implies 1 - r = \\frac{16}{24} = \\frac{2}{3} \\implies r = \\frac{1}{3}$.',
    },
    sandbox: 'none',
  },
];
