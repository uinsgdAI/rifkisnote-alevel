import type { SubtopicNote } from '../../../types/syllabus';

export const CHAPTER_3_NOTES: SubtopicNote[] = [
  {
    id: '3.1',
    chapterId: 3,
    code: '3.1',
    title: 'Line Segment, Distance & Midpoint',
    paperCode: 'P1',
    summary:
      'Find the exact distance $|AB|$ between two points $A(x_1, y_1)$ and $B(x_2, y_2)$ and the midpoint of a line segment $AB$, and apply them to reverse-endpoint and equidistant point problems.',
    aims: [
      'Compute $|AB| = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$ and midpoint $\\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$ cleanly.',
      'Use squared distances $|PA|^2 = |PB|^2$ and diagonal midpoints for polygons and equidistant loci.',
    ],
    bigIdea:
      'Joining $A(x_1, y_1)$ and $B(x_2, y_2)$ forms a right-angled triangle with horizontal run $x_2 - x_1$ and vertical rise $y_2 - y_1$. Pythagoras gives the exact segment length $|AB|$, while averaging the coordinates gives the exact midpoint.',
    keyFindings: [
      {
        title: 'Distance & Midpoint of Segment $AB$',
        finding:
          'For two points $A(x_1, y_1)$ and $B(x_2, y_2)$, the distance is $|AB| = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$ and the midpoint is $M = \\left(\\frac{x_1 + x_2}{2},\\; \\frac{y_1 + y_2}{2}\\right)$.',
        noteBox:
          'When equating two distances ($|PA| = |PB|$), equate their squares $|PA|^2 = |PB|^2$ immediately to eliminate square roots and avoid algebraic slips.',
      },
    ],
    objectives: [
      'Calculate the exact length $|AB|$ between two points in surd or integer form.',
      'Find the midpoint of $AB$ or determine a missing endpoint given the midpoint.',
      'Solve equidistant-point and parallelogram-vertex problems using midpoint symmetry.',
    ],
    keyFormulas: [
      {
        label: 'Distance Between $A(x_1, y_1)$ and $B(x_2, y_2)$',
        latex: '|AB| = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}',
        note: 'Equivalently $|AB|^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2$.',
      },
      {
        label: 'Midpoint of Line Segment $AB$',
        latex: 'M = \\left(\\frac{x_1 + x_2}{2},\\; \\frac{y_1 + y_2}{2}\\right)',
        note: 'Notice midpoint uses ADDITION ($x_1 + x_2$), whereas distance and gradient use subtraction!',
      },
    ],
    stepByStepMethod: [
      'Label $A(x_1, y_1)$ and $B(x_2, y_2)$ explicitly so signs on negative coordinates are tracked.',
      'Compute $|AB| = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$ and simplify surds if needed.',
      'Compute $M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$; for reverse problems given $M$, solve $\\frac{x_1 + x_2}{2} = x_M$ and $\\frac{y_1 + y_2}{2} = y_M$.',
    ],
    diagrams: [
      {
        id: 'coord-midpoint-distance',
        title: 'Segment $AB$, Midpoint $M$, Gradient Triangle & Perpendicular Bisector',
        caption: 'Right-triangle legs $\\Delta x = x_2 - x_1$ and $\\Delta y = y_2 - y_1$ yield distance $|AB|$ and gradient $m = \\frac{\\Delta y}{\\Delta x}$, while the perpendicular bisector passes through midpoint $M$ at $90^\\circ$.',
      },
    ],
    comparisonTable: {
      title: 'Core Segment Formulae',
      headers: ['Quantity', 'Formula', 'Common Trap'],
      rows: [
        ['Distance $|AB|$', '$\\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$', 'Forgetting parentheses when squaring negative differences'],
        ['Midpoint $M$', '$\\left(\\frac{x_1 + x_2}{2},\\; \\frac{y_1 + y_2}{2}\\right)$', 'Subtracting instead of adding coordinates'],
      ],
    },
    studyNotes: [
      {
        heading: 'Reverse Midpoint & Equidistant Points',
        body: 'In a parallelogram $ABCD$ (ordered vertices), diagonals $AC$ and $BD$ share the exact same midpoint, so $x_A + x_C = x_B + x_D$ and $y_A + y_C = y_B + y_D$. For a point $P$ equidistant from $A$ and $B$, $|PA|^2 = |PB|^2$ simplifies directly to a linear relation (which is the perpendicular bisector of $AB$).',
      },
    ],
    workedExamples: [
      {
        title: 'Equidistant Point on a Straight Line',
        question:
          'Point $P$ lies on the line $y = 2x$ and is equidistant from $A(1, 5)$ and $B(7, 3)$. Find the coordinates of $P$.',
        marks: 4,
        steps: [
          'Since $P$ lies on $y = 2x$, write $P = (t, 2t)$.',
          'Equate squared distances $|PA|^2 = |PB|^2$: $(t - 1)^2 + (2t - 5)^2 = (t - 7)^2 + (2t - 3)^2$.',
          'Expand: $(t^2 - 2t + 1) + (4t^2 - 20t + 25) = (t^2 - 14t + 49) + (4t^2 - 12t + 9)$.',
          'Simplify: $5t^2 - 22t + 26 = 5t^2 - 26t + 58 \\implies 4t = 32 \\implies t = 8$.',
          'Hence $P = (8, 2(8)) = (8, 16)$.',
        ],
        answer: '$P(8, 16)$',
        markSchemeNotes: 'M1 setting $|PA|^2 = |PB|^2$, A1 expanding, M1 solving $4t = 32$, A1 $(8, 16)$.',
      },
      {
        title: 'Fourth Vertex of a Parallelogram via Midpoints',
        question: 'Points $A(1, 2)$, $B(5, 4)$, and $C(7, 1)$ are three vertices of parallelogram $ABCD$. Find $D$.',
        marks: 2,
        steps: [
          'Midpoint of diagonal $AC$: $M = \\left(\\frac{1 + 7}{2}, \\frac{2 + 1}{2}\\right) = \\left(4, \\frac{3}{2}\\right)$.',
          'Set equal to midpoint of $BD$: $\\frac{5 + x_D}{2} = 4 \\implies x_D = 3$, and $\\frac{4 + y_D}{2} = \\frac{3}{2} \\implies y_D = -1$.',
        ],
        answer: '$D(3, -1)$',
        markSchemeNotes: 'M1 midpoint equality, A1 for $(3, -1)$.',
      },
    ],
    commonMistakes: [
      'Writing $\\left(\\frac{x_2 - x_1}{2}, \\frac{y_2 - y_1}{2}\\right)$ instead of adding for the midpoint.',
      'Forgetting parentheses around negative numbers inside $(x_2 - x_1)^2$.',
    ],
    rapidSummary: [
      {
        rule: '$|AB| = \\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$',
        detail: 'Square both sides first when equating distances.',
      },
      {
        rule: 'Midpoint $M$',
        detail: 'Average $x$ and average $y$: $\\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)$.',
      },
    ],
    quickCheck: {
      id: 'qc-9709-3.1',
      paperType: 'Pure Mathematics 1',
      marks: 2,
      prompt: 'The midpoint of $A(-3, 4)$ and $B(x, y)$ is $M(2, -1)$. Find $x + y$.',
      answer: '1',
      acceptedAnswers: ['1'],
      numericAnswer: 1,
      tolerance: 0,
      hint: 'Solve $\\frac{-3 + x}{2} = 2$ and $\\frac{4 + y}{2} = -1$.',
      solution: '$x = 4 - (-3) = 7$ and $y = -2 - 4 = -6$, so $x + y = 7 - 6 = 1$.',
    },
    sandbox: 'geogebra-graph',
  },
  {
    id: '3.2',
    chapterId: 3,
    code: '3.2',
    title: 'Equation of a Line, Parallel/Perpendicular & Perpendicular Bisector',
    paperCode: 'P1',
    summary:
      'Compute gradients $m = \\frac{\\text{rise}}{\\text{run}} = \\frac{y_2 - y_1}{x_2 - x_1}$, form straight-line equations $y = mx + c$ or $y - y_1 = m(x - x_1)$, apply parallel ($m_1 = m_2$) and perpendicular ($m_1 m_2 = -1$) rules, and construct perpendicular bisectors in 3 steps.',
    aims: [
      'Use $m = \\frac{y_2 - y_1}{x_2 - x_1}$ and form line equations cleanly with $y - y_1 = m(x - x_1)$ or $y = mx + c$.',
      'Apply $m_1 = m_2$ (parallel) and $m_1 \\cdot m_2 = -1 \\implies m_2 = -\\frac{1}{m_1}$ (perpendicular).',
      'Construct the perpendicular bisector of a segment $AB$ cleanly in 3 structured steps.',
    ],
    bigIdea:
      'A straight line is completely fixed by its gradient $m$ and any single point $(x_1, y_1)$ on it. Increasing lines have $m > 0$ and decreasing lines have $m < 0$; parallel lines share $m_1 = m_2$, while perpendicular lines satisfy $m_1 m_2 = -1$.',
    keyFindings: [
      {
        title: 'Gradient & Line Equations',
        finding:
          'Gradient $m = \\frac{\\text{rise}}{\\text{run}} = \\frac{y_2 - y_1}{x_2 - x_1}$ ($m > 0$: increasing, $m < 0$: decreasing). Equation forms: $y = mx + c$, or $y - y_1 = m(x - x_1)$, or $y - y_2 = m(x - x_2)$.',
        noteBox:
          '<u>Parallel lines</u> have equal gradient: $m_1 = m_2$. <u>Perpendicular lines</u> multiply to $-1$: $m_1 \\cdot m_2 = -1 \\implies m_2 = -\\frac{1}{m_1}$.',
      },
      {
        title: '3 Steps to Find a Perpendicular Bisector',
        finding:
          'To find the perpendicular bisector of segment $AB$: Step (1) Find the midpoint $M$ of $AB$; Step (2) Find the perpendicular gradient $m_{\\perp} = -\\frac{1}{m_{AB}}$; Step (3) Form the line equation passing through midpoint $M$ using $y - y_M = m_{\\perp}(x - x_M)$.',
        noteBox:
          'NEVER pass a perpendicular bisector through endpoint $A$ or $B$ — it MUST pass through midpoint $M$!',
      },
    ],
    objectives: [
      'Calculate gradients from two points or from equations $ax + by + c = 0$.',
      'Write equations of parallel and perpendicular lines through a given point.',
      'Find perpendicular bisectors using the 3-step midpoint + negative-reciprocal method.',
    ],
    keyFormulas: [
      {
        label: 'Gradient & Point–Gradient Line Forms',
        latex: 'm = \\frac{y_2 - y_1}{x_2 - x_1} \\qquad y = mx + c \\qquad y - y_1 = m(x - x_1)',
        note: 'Also $y - y_2 = m(x - x_2)$ gives the identical line.',
      },
      {
        label: 'Parallel & Perpendicular Gradient Rules',
        latex: 'm_1 = m_2 \\text{ (parallel)} \\qquad m_1 \\cdot m_2 = -1 \\implies m_2 = -\\frac{1}{m_1} \\text{ (perpendicular)}',
        note: 'Flip the fraction AND negate the sign for perpendicular lines.',
      },
    ],
    stepByStepMethod: [
      'Step 1 (Perpendicular Bisector): Find midpoint $M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$.',
      'Step 2: Compute $m_{AB} = \\frac{y_2 - y_1}{x_2 - x_1}$, then take $m_{\\perp} = -\\frac{1}{m_{AB}}$.',
      'Step 3: Substitute $M(x_M, y_M)$ and $m_{\\perp}$ into $y - y_M = m_{\\perp}(x - x_M)$ and rearrange if integer form $ax + by + c = 0$ is requested.',
    ],
    comparisonTable: {
      title: 'Straight-Line Forms & Gradient Meaning',
      headers: ['Equation Form', 'Gradient', 'Typical Use'],
      rows: [
        ['$y = mx + c$', '$m$', 'Slope-intercept form ($m > 0$ increasing, $m < 0$ decreasing)'],
        ['$y - y_1 = m(x - x_1)$', '$m$', 'Fastest form given point $(x_1, y_1)$ and gradient $m$'],
        ['$ax + by + c = 0$', '$-\\frac{a}{b}$ ($b \\neq 0$)', 'Clean integer-coefficient exam answer'],
      ],
    },
    studyNotes: [
      {
        heading: 'Reading Gradient from $ax + by + c = 0$',
        body: 'Always rearrange into $y = mx + c$ first before reading off $m$ — for example, $2x + 6y = 5 \\implies 6y = -2x + 5 \\implies y = -\\frac{1}{3}x + \\frac{5}{6}$, so $m = -\\frac{1}{3}$ and $m_{\\perp} = 3$.',
      },
    ],
    workedExamples: [
      {
        title: 'Perpendicular Bisector in 3 Steps',
        question:
          'Find the equation of the perpendicular bisector of the segment joining $A(-1, 6)$ and $B(5, 2)$ in the form $ax + by + c = 0$.',
        marks: 4,
        steps: [
          'Step 1 (Midpoint): $M = \\left(\\frac{-1 + 5}{2}, \\frac{6 + 2}{2}\\right) = (2, 4)$.',
          'Step 2 (Perpendicular gradient): $m_{AB} = \\frac{2 - 6}{5 - (-1)} = \\frac{-4}{6} = -\\frac{2}{3}$, so $m_{\\perp} = -\\frac{1}{-2/3} = \\frac{3}{2}$.',
          'Step 3 (Equation through $M$): $y - 4 = \\frac{3}{2}(x - 2) \\implies 2y - 8 = 3x - 6 \\implies 3x - 2y + 2 = 0$.',
        ],
        answer: '$3x - 2y + 2 = 0$',
        markSchemeNotes: 'B1 midpoint $(2, 4)$, M1 gradient $m_{AB}$, M1 $m_{\\perp} = 3/2$, A1 $3x - 2y + 2 = 0$.',
      },
      {
        title: 'Verifying Perpendicularity & Triangle Area',
        question:
          'Points $P(1, 1)$, $Q(4, 3)$, and $R(2, 6)$ form $\\triangle PQR$. Show that $PQ \\perp QR$ and find the area of $\\triangle PQR$.',
        marks: 4,
        steps: [
          '$m_{PQ} = \\frac{3 - 1}{4 - 1} = \\frac{2}{3}$ and $m_{QR} = \\frac{6 - 3}{2 - 4} = -\\frac{3}{2}$.',
          'Multiply gradients: $m_{PQ} \\cdot m_{QR} = \\frac{2}{3} \\times \\left(-\\frac{3}{2}\\right) = -1 \\implies PQ \\perp QR$.',
          'Compute lengths: $|PQ| = \\sqrt{3^2 + 2^2} = \\sqrt{13}$ and $|QR| = \\sqrt{(-2)^2 + 3^2} = \\sqrt{13}$.',
          'Area $= \\frac{1}{2}|PQ||QR| = \\frac{1}{2}(\\sqrt{13})(\\sqrt{13}) = \\frac{13}{2}$.',
        ],
        answer: '$m_{PQ}m_{QR} = -1$; Area $= \\frac{13}{2}$',
        markSchemeNotes: 'M1 gradients, A1 product $= -1$, M1 lengths, A1 area $13/2$.',
      },
    ],
    commonMistakes: [
      'Taking reciprocal $\\frac{1}{m}$ without changing sign, or negating $-m$ without inverting.',
      'Substituting endpoint $A$ or $B$ instead of midpoint $M$ into the perpendicular bisector.',
      'Subtraction order mismatch in gradient ($\\frac{y_2 - y_1}{x_1 - x_2}$ reverses sign).',
    ],
    rapidSummary: [
      {
        rule: '$m_1 \\cdot m_2 = -1$',
        detail: 'Perpendicular gradient is negative reciprocal $m_2 = -\\frac{1}{m_1}$.',
      },
      {
        rule: 'Perp bisector = 3 steps',
        detail: '(1) Midpoint $M$, (2) $m_{\\perp} = -1/m_{AB}$, (3) $y - y_M = m_{\\perp}(x - x_M)$.',
      },
    ],
    quickCheck: {
      id: 'qc-9709-3.2',
      paperType: 'Pure Mathematics 1',
      marks: 3,
      prompt: 'A line passes through $(4, -1)$ and is perpendicular to $2x + 6y = 5$. Find its $y$-intercept.',
      answer: '-13',
      acceptedAnswers: ['-13'],
      numericAnswer: -13,
      tolerance: 0,
      hint: 'Find gradient of $2x + 6y = 5$ first, then take $-1/m$.',
      solution: '$m = -\\frac{1}{3} \\implies m_{\\perp} = 3$. Then $y + 1 = 3(x - 4) \\implies y = 3x - 13$, $y$-intercept is $-13$.',
    },
    sandbox: 'geogebra-graph',
  },
  {
    id: '3.3',
    chapterId: 3,
    code: '3.3',
    title: 'Equation of a Circle, Diameter Form & Tangents',
    paperCode: 'P1',
    summary:
      'Construct the circle equation $(x - a)^2 + (y - b)^2 = r^2$ from diameter endpoints $A(x_1, y_1)$ and $B(x_2, y_2)$ (midpoint centre $M(a, b)$ and radius $r = \\frac{|AB|}{2} = |AM| = |MB|$), complete the square from expanded form, and find circle tangents.',
    aims: [
      'Derive centre $M(a, b)$ and radius $r = \\frac{|AB|}{2} = |AM| = |MB|$ from diameter endpoints $A, B$, and write $(x - a)^2 + (y - b)^2 = r^2$.',
      'Convert expanded circle equations $x^2 + y^2 + 2gx + 2fy + c = 0$ to centre–radius form by completing the square, and find tangents using $m_{\\text{rad}} \\cdot m_{\\text{tan}} = -1$.',
    ],
    bigIdea:
      'A circle is the set of all points $(x, y)$ at fixed distance $r$ from centre $M(a, b)$, which yields $(x - a)^2 + (y - b)^2 = r^2$. Whenever $AB$ is a diameter, the centre $M(a, b)$ is the midpoint of $AB$ and radius $r = \\frac{|AB|}{2} = |AM| = |MB|$.',
    keyFindings: [
      {
        title: 'Circle Equation from Centre & Diameter Endpoints',
        finding:
          'Circle with centre $M(a, b)$ and radius $r$ has equation $(x - a)^2 + (y - b)^2 = r^2$. When $AB$ is a diameter with $A(x_1, y_1)$ and $B(x_2, y_2)$, the centre is $M(a, b) = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$ and the radius is $r = \\frac{|AB|}{2} = |AM| = |MB|$.',
        noteBox:
          'In $(x - a)^2 + (y - b)^2 = r^2$, ALWAYS take $\\sqrt{r^2}$ for the radius — e.g. $(x - 3)^2 + (y + 2)^2 = 25$ has centre $(3, -2)$ and radius $r = \\sqrt{25} = 5$, NOT $25$!',
      },
      {
        title: 'Expanded Circle Form & Tangent Line Property',
        finding:
          'From $x^2 + y^2 + 2gx + 2fy + c = 0$, complete the square on $x$ and $y$ separately to get $(x + g)^2 + (y + f)^2 = g^2 + f^2 - c$, giving centre $(-g, -f)$ and $r = \\sqrt{g^2 + f^2 - c}$. At any point $P$ on the circle, the radius $MP$ is perpendicular to the tangent at $P$ ($m_{MP} \\cdot m_{\\text{tan}} = -1$).',
        noteBox:
          'If $x^2$ and $y^2$ have a leading coefficient $k \\neq 1$, divide the entire equation by $k$ BEFORE completing the square.',
      },
    ],
    objectives: [
      'Write $(x - a)^2 + (y - b)^2 = r^2$ from centre and radius or from diameter endpoints $A$ and $B$.',
      'Extract centre and radius from $x^2 + y^2 + 2gx + 2fy + c = 0$ by completing the square.',
      'Find equations of tangents to a circle and check line–circle intersections via discriminant.',
    ],
    keyFormulas: [
      {
        label: 'Standard Circle Equation',
        latex: '(x - a)^2 + (y - b)^2 = r^2',
        note: 'Centre $M(a, b)$, radius $r > 0$.',
      },
      {
        label: 'Diameter $AB$ Relations',
        latex: 'M(a, b) = \\left(\\frac{x_1 + x_2}{2},\\; \\frac{y_1 + y_2}{2}\\right), \\qquad r = \\frac{|AB|}{2} = |AM| = |MB|',
        note: 'Every point $C$ on the circle with diameter $AB$ also satisfies $\\angle ACB = 90^\\circ$.',
      },
      {
        label: 'Expanded Circle & Radius–Tangent Rule',
        latex: 'x^2 + y^2 + 2gx + 2fy + c = 0 \\implies (-g, -f),\\; r = \\sqrt{g^2 + f^2 - c} \\qquad m_{MP} \\cdot m_{\\text{tan}} = -1',
        note: 'Point $P$ is inside if $|MP| < r$, on circle if $|MP| = r$, outside if $|MP| > r$.',
      },
    ],
    stepByStepMethod: [
      'Given diameter endpoints $A$ and $B$: compute midpoint $M(a, b)$, compute $r^2 = |AM|^2$, and substitute into $(x - a)^2 + (y - b)^2 = r^2$.',
      'Given expanded form: divide by any common coefficient on $x^2, y^2$, then complete the square on $x$ and $y$ independently.',
      'For tangent at $P(x_1, y_1)$: compute $m_{MP}$ from centre $M$ to $P$, take $m_{\\text{tan}} = -1/m_{MP}$, and write $y - y_1 = m_{\\text{tan}}(x - x_1)$.',
    ],
    diagrams: [
      {
        id: 'circle-diameter',
        title: 'Circle with Diameter $AB$, Centre $M(a, b)$ & Radius $r$',
        caption: 'Midpoint $M(a, b)$ of diameter $AB$ is the centre, with $r = \\frac{|AB|}{2} = |AM| = |MB|$ and circle equation $(x - a)^2 + (y - b)^2 = r^2$.',
      },
    ],
    comparisonTable: {
      title: 'Circle Equations & Geometric Checks',
      headers: ['Case', 'Equation / Condition', 'Result'],
      rows: [
        ['Diameter $AB$', 'Centre $M = \\text{midpoint}(AB)$, $r = |AM| = |MB| = \\frac{|AB|}{2}$', '$(x - a)^2 + (y - b)^2 = r^2$'],
        ['Expanded form', '$x^2 + y^2 + 2gx + 2fy + c = 0$', 'Centre $(-g, -f)$, $r = \\sqrt{g^2 + f^2 - c}$'],
        ['Tangent at $P$', 'Radius $MP \\perp$ tangent', '$m_{\\text{tan}} = -1/m_{MP}$'],
      ],
    },
    studyNotes: [
      {
        heading: 'Using Diameter Endpoints Directly',
        body: 'Because $M(a, b)$ is the midpoint of $AB$, $r^2 = |AM|^2 = (a - x_1)^2 + (b - y_1)^2$ gives $r^2$ immediately without needing a square root before writing $(x - a)^2 + (y - b)^2 = r^2$.',
      },
    ],
    workedExamples: [
      {
        title: 'Circle from Diameter Endpoints $A$ and $B$',
        question: 'Find the equation of the circle that has $A(-2, 1)$ and $B(4, 9)$ as endpoints of a diameter.',
        marks: 3,
        steps: [
          'Centre $M(a, b)$ is the midpoint of $AB$: $M = \\left(\\frac{-2 + 4}{2}, \\frac{1 + 9}{2}\\right) = (1, 5)$.',
          'Radius $r = |AM| = \\sqrt{(1 - (-2))^2 + (5 - 1)^2} = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$ (notice also $\\frac{|AB|}{2} = \\frac{\\sqrt{6^2 + 8^2}}{2} = 5$).',
          'Substitute $M(1, 5)$ and $r^2 = 25$ into $(x - a)^2 + (y - b)^2 = r^2$.',
        ],
        answer: '$(x - 1)^2 + (y - 5)^2 = 25$',
        markSchemeNotes: 'B1 centre $(1, 5)$, M1 computing $r^2 = 25$, A1 final equation.',
      },
      {
        title: 'Centre, Radius & Tangent at $P$',
        question:
          'A circle has equation $x^2 + y^2 - 6x + 4y - 12 = 0$. (a) Find its centre and radius. (b) Find the tangent at $P(6, 2)$.',
        marks: 5,
        steps: [
          '(a) Complete the square: $(x - 3)^2 - 9 + (y + 2)^2 - 4 - 12 = 0 \\implies (x - 3)^2 + (y + 2)^2 = 25$.',
          'Centre $M = (3, -2)$ and radius $r = \\sqrt{25} = 5$.',
          '(b) Gradient of radius $MP$: $m_{MP} = \\frac{2 - (-2)}{6 - 3} = \\frac{4}{3}$.',
          'Perpendicular tangent gradient: $m_{\\text{tan}} = -\\frac{3}{4}$.',
          'Tangent through $P(6, 2)$: $y - 2 = -\\frac{3}{4}(x - 6) \\implies 3x + 4y - 26 = 0$.',
        ],
        answer: '(a) Centre $(3, -2)$, $r = 5$; (b) $3x + 4y - 26 = 0$',
        markSchemeNotes: 'M1 completing square, A1 $(3, -2)$, A1 $r = 5$; M1 $m_{\\text{tan}} = -3/4$, A1 tangent line.',
      },
    ],
    commonMistakes: [
      'Taking $r = 25$ instead of $r = \\sqrt{25} = 5$ from $(x - 1)^2 + (y - 5)^2 = 25$.',
      'Forgetting to flip signs inside brackets: $(x + 2)^2 + (y - 5)^2 = 9$ has centre $(-2, 5)$, NOT $(2, -5)$.',
    ],
    rapidSummary: [
      {
        rule: '$(x - a)^2 + (y - b)^2 = r^2$',
        detail: 'Diameter $AB \\implies M = \\text{midpoint}(AB)$, $r = \\frac{|AB|}{2} = |AM| = |MB|$.',
      },
      {
        rule: 'Radius $\\perp$ Tangent',
        detail: 'Compute $m_{MP}$ first, then $m_{\\text{tan}} = -1/m_{MP}$.',
      },
    ],
    quickCheck: {
      id: 'qc-9709-3.3',
      paperType: 'Pure Mathematics 1',
      marks: 3,
      prompt: 'Find the radius of the circle $x^2 + y^2 + 8x - 10y + 5 = 0$.',
      answer: '6',
      acceptedAnswers: ['6'],
      numericAnswer: 6,
      tolerance: 0,
      hint: 'Complete the square: $(x + 4)^2 + (y - 5)^2 = 16 + 25 - 5$.',
      solution: '$(x + 4)^2 + (y - 5)^2 = 36 \\implies r = \\sqrt{36} = 6$.',
    },
    sandbox: 'geogebra-graph',
  },
];
