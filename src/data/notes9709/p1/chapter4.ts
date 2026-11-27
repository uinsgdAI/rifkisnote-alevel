import type { SubtopicNote } from '../../../types/syllabus';

export const CHAPTER_4_NOTES: SubtopicNote[] = [
  {
    id: '4.1',
    chapterId: 4,
    code: '4.1',
    title: 'Converting Angles Between Degrees & Radians',
    paperCode: 'P1',
    summary:
      'Convert angles cleanly between degrees and radians using $\\text{deg} \\xrightarrow{\\times \\frac{\\pi}{180^\\circ}} \\text{rad}$ and $\\text{rad} \\xrightarrow{\\times \\frac{180^\\circ}{\\pi}} \\text{deg}$, recall exact radian multiples, and keep calculators in Radian mode.',
    aims: [
      'Convert between degrees and radians fluently using $\\pi\\text{ rad} = 180^\\circ$.',
      'Recall exact trigonometric values at $\\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}, \\frac{\\pi}{2}, \\pi$ and enforce Radian calculator mode.',
    ],
    bigIdea:
      'One full circle is $360^\\circ = 2\\pi$ radians, so $180^\\circ = \\pi$ radians is the master bridge: multiply degrees by $\\frac{\\pi}{180^\\circ}$ to convert to radians, and multiply radians by $\\frac{180^\\circ}{\\pi}$ to return to degrees.',
    keyFindings: [
      {
        title: 'Degree $\\leftrightarrow$ Radian Conversion Rule',
        finding:
          'To convert degrees to radians, multiply by $\\frac{\\pi}{180^\\circ}$. To convert radians to degrees, multiply by $\\frac{180^\\circ}{\\pi}$.',
        noteBox:
          '<u>Radians are mandatory</u> for arc length $s = r\\theta$, sector area $\\frac{1}{2}r^2\\theta$, and all calculus formulas! Check your calculator shows <u>RAD</u> (not DEG) whenever $\\theta$ is in radians.',
      },
    ],
    objectives: [
      'Convert angles from degrees to exact multiples of $\\pi$ radians (and decimals) via $\\times \\frac{\\pi}{180^\\circ}$.',
      'Convert angles from radians to degrees via $\\times \\frac{180^\\circ}{\\pi}$.',
      'Evaluate trig functions accurately in radian mode.',
    ],
    keyFormulas: [
      {
        label: 'Degrees $\\leftrightarrow$ Radians Bridge',
        latex: '\\text{deg} \\xrightarrow{\\times \\frac{\\pi}{180^\\circ}} \\text{rad} \\qquad \\text{rad} \\xrightarrow{\\times \\frac{180^\\circ}{\\pi}} \\text{deg}',
        note: 'Equivalently, $\\pi\\text{ rad} = 180^\\circ$ and $2\\pi\\text{ rad} = 360^\\circ$.',
      },
      {
        label: 'One Radian Benchmark',
        latex: '1\\text{ rad} = \\frac{180^\\circ}{\\pi} \\approx 57.3^\\circ',
        note: 'Quick sanity check: $\\frac{\\pi}{2} \\approx 1.57\\text{ rad}$, $\\pi \\approx 3.14\\text{ rad}$.',
      },
    ],
    stepByStepMethod: [
      'Degrees $\\to$ Radians: multiply by $\\frac{\\pi}{180^\\circ}$ and simplify the fraction (leave $\\pi$ exact unless decimals are requested).',
      'Radians $\\to$ Degrees: multiply by $\\frac{180^\\circ}{\\pi}$ (or directly substitute $\\pi = 180^\\circ$ when given a multiple of $\\pi$).',
      'Switch calculator mode to RAD before evaluating $\\sin\\theta$, $\\cos\\theta$, or $\\tan\\theta$ for radian angles.',
    ],
    diagrams: [
      {
        id: 'angle-conversion',
        title: 'Converting Angles: $\\text{deg} \\leftrightarrow \\text{rad}$',
        caption: 'Curved conversion loop: multiply by $\\frac{\\pi}{180^\\circ}$ from degrees to radians, and multiply by $\\frac{180^\\circ}{\\pi}$ from radians to degrees.',
      },
    ],
    comparisonTable: {
      title: 'Standard Radian–Degree & Exact Trig Reference',
      headers: ['Degrees', 'Radians', '$\\sin\\theta$', '$\\cos\\theta$', '$\\tan\\theta$'],
      rows: [
        ['$0^\\circ$', '$0$', '$0$', '$1$', '$0$'],
        ['$30^\\circ$', '$\\frac{\\pi}{6}$', '$\\frac{1}{2}$', '$\\frac{\\sqrt{3}}{2}$', '$\\frac{1}{\\sqrt{3}}$'],
        ['$45^\\circ$', '$\\frac{\\pi}{4}$', '$\\frac{\\sqrt{2}}{2}$', '$\\frac{\\sqrt{2}}{2}$', '$1$'],
        ['$60^\\circ$', '$\\frac{\\pi}{3}$', '$\\frac{\\sqrt{3}}{2}$', '$\\frac{1}{2}$', '$\\sqrt{3}$'],
        ['$90^\\circ$', '$\\frac{\\pi}{2}$', '$1$', '$0$', 'Undefined'],
        ['$180^\\circ$', '$\\pi$', '$0$', '$-1$', '$0$'],
        ['$360^\\circ$', '$2\\pi$', '$0$', '$1$', '$0$'],
      ],
    },
    studyNotes: [
      {
        heading: 'Why $2\\pi$ Replaces $360^\\circ$ in Circular Measure',
        body: 'In degree measure, one full turn is $360^\\circ$, so fraction of a circle is $\\frac{\\theta}{360^\\circ}$. In radians, one full turn is $2\\pi$, so the fraction is $\\frac{\\theta}{2\\pi}$ — which cancels all factors of $2\\pi$ cleanly out of arc length and sector area!',
      },
    ],
    workedExamples: [
      {
        title: 'Converting Degrees to Exact Radians & Radians to Degrees',
        question: '(a) Express $135^\\circ$ in radians in terms of $\\pi$. (b) Convert $2.4$ radians to degrees (to 1 d.p.).',
        marks: 3,
        steps: [
          '(a) $135^\\circ \\times \\frac{\\pi}{180^\\circ} = \\frac{135}{180}\\pi = \\frac{3\\pi}{4}\\text{ rad}$.',
          '(b) $2.4 \\times \\frac{180^\\circ}{\\pi} = \\frac{432^\\circ}{\\pi} \\approx 137.5098^\\circ \\approx 137.5^\\circ$.',
        ],
        answer: '(a) $\\frac{3\\pi}{4}$ rad; (b) $137.5^\\circ$',
        markSchemeNotes: 'B1 for $\\frac{3\\pi}{4}$, M1 multiplying by $180^\\circ/\\pi$, A1 for $137.5^\\circ$.',
      },
      {
        title: 'Cosine Rule with Exact Radian Angle',
        question: 'In $\\triangle ABC$, $AB = 8\\text{ cm}$, $AC = 5\\text{ cm}$, and $\\angle BAC = \\frac{\\pi}{3}$. Find exact $BC$.',
        marks: 3,
        steps: [
          'Recall $\\cos\\left(\\frac{\\pi}{3}\\right) = \\cos 60^\\circ = \\frac{1}{2}$.',
          '$BC^2 = 8^2 + 5^2 - 2(8)(5)\\cos\\left(\\frac{\\pi}{3}\\right) = 64 + 25 - 80\\left(\\frac{1}{2}\\right) = 49$.',
          '$BC = \\sqrt{49} = 7\\text{ cm}$.',
        ],
        answer: '$7\\text{ cm}$',
        markSchemeNotes: 'M1 Cosine Rule with $\\cos(\\pi/3) = 1/2$, A1 $49$, A1 $7\\text{ cm}$.',
      },
    ],
    commonMistakes: [
      'Multiplying by $\\frac{\\pi}{180}$ instead of $\\frac{180}{\\pi}$ when converting radians to degrees.',
      'Leaving a scientific calculator in Degree mode when evaluating $\\sin(1.2)$ or $\\cos(\\pi/5)$.',
    ],
    rapidSummary: [
      {
        rule: '$\\text{deg} \\times \\frac{\\pi}{180^\\circ} = \\text{rad}$',
        detail: 'And $\\text{rad} \\times \\frac{180^\\circ}{\\pi} = \\text{deg}$.',
      },
      {
        rule: 'Exact landmarks',
        detail: '$\\frac{\\pi}{6}=30^\\circ$, $\\frac{\\pi}{4}=45^\\circ$, $\\frac{\\pi}{3}=60^\\circ$, $\\frac{\\pi}{2}=90^\\circ$, $\\pi=180^\\circ$.',
      },
    ],
    quickCheck: {
      id: 'qc-9709-4.1',
      paperType: 'Pure Mathematics 1',
      marks: 2,
      prompt: 'Convert $\\frac{5\\pi}{12}$ radians into degrees.',
      answer: '75',
      acceptedAnswers: ['75', '75°'],
      numericAnswer: 75,
      tolerance: 0,
      hint: 'Multiply by $\\frac{180^\\circ}{\\pi}$ (replace $\\pi$ with $180^\\circ$).',
      solution: '$\\frac{5 \\times 180^\\circ}{12} = 5 \\times 15^\\circ = 75^\\circ$.',
    },
    sandbox: 'none',
  },
  {
    id: '4.2',
    chapterId: 4,
    code: '4.2',
    title: 'Sector Arc Length, Perimeter, Sector Area & Shaded Segment',
    paperCode: 'P1',
    summary:
      'Derive and apply the radian formulae for arc length $\\widehat{AB} = r\\theta$, perimeter of sector $AOB = 2r + r\\theta$, area of sector $AOB = \\frac{1}{2}r^2\\theta$, area of triangle $AOB = \\frac{1}{2}r^2\\sin\\theta$, and area of shaded segment $= \\frac{1}{2}r^2(\\theta - \\sin\\theta)$.',
    aims: [
      'Derive $\\widehat{AB} = r\\theta$ and $A_{\\text{sector}} = \\frac{1}{2}r^2\\theta$ from degree circle fractions ($\\frac{\\theta}{360^\\circ} \\to \\frac{\\theta}{2\\pi}$).',
      'Compute sector perimeter ($2r + \\widehat{AB}$), triangle area ($\\frac{1}{2}ab\\sin\\theta = \\frac{1}{2}r^2\\sin\\theta$), and shaded segment area ($\\frac{1}{2}r^2(\\theta - \\sin\\theta)$).',
    ],
    bigIdea:
      'For sector $AOB$ with centre $O$, radii $OA = OB = r$, and central angle $\\theta$ radians: replacing $360^\\circ$ with $2\\pi$ collapses arc length to $r\\theta$ and sector area to $\\frac{1}{2}r^2\\theta$. Subtracting triangle area $\\frac{1}{2}r^2\\sin\\theta$ leaves the shaded circular segment $\\frac{1}{2}r^2(\\theta - \\sin\\theta)$.',
    keyFindings: [
      {
        title: 'Derivation from Degree Fractions to Radian Sector Formulae',
        finding:
          'Arc length $\\widehat{AB} = \\frac{\\theta}{360^\\circ} \\times 2\\pi r = \\frac{\\theta}{2\\pi} \\times 2\\pi r = r\\theta$. Area of sector $AOB = \\frac{\\theta}{360^\\circ} \\times \\pi r^2 = \\frac{\\theta}{2\\pi} \\times \\pi r^2 = \\frac{1}{2}r^2\\theta$.',
        noteBox:
          '<u>Perimeter of sector $AOB$</u> $= 2r + \\widehat{AB} = 2r + r\\theta$ (two straight radii PLUS the curved arc).',
      },
      {
        title: 'Triangle Area & Shaded Segment Formula',
        finding:
          'In $\\triangle AOB$ with $OA = OB = r$ and included angle $\\theta$, $A_{\\triangle AOB} = \\frac{1}{2}ab\\sin\\theta = \\frac{1}{2}r^2\\sin\\theta$. Subtracting from the sector gives the shaded segment area: $\\text{Area of segment} = \\text{Area of sector } AOB - A_{\\triangle AOB} = \\frac{1}{2}r^2\\theta - \\frac{1}{2}r^2\\sin\\theta = \\frac{1}{2}r^2(\\theta - \\sin\\theta)$.',
        noteBox:
          'ALWAYS keep your calculator in RAD mode when evaluating $\\sin\\theta$ inside $\\frac{1}{2}r^2(\\theta - \\sin\\theta)$ — and for a SEGMENT perimeter, include chord $AB$ and arc $\\widehat{AB}$, NOT the two radii!',
      },
    ],
    objectives: [
      'Use $\\widehat{AB} = r\\theta$ and $P_{\\text{sector}} = 2r + r\\theta$ in forward and reverse problems.',
      'Calculate sector area $\\frac{1}{2}r^2\\theta$, triangle area $\\frac{1}{2}r^2\\sin\\theta$, and segment area $\\frac{1}{2}r^2(\\theta - \\sin\\theta)$.',
      'Solve multi-step shaded perimeter and tangent-sector geometry questions.',
    ],
    keyFormulas: [
      {
        label: 'Arc Length & Sector Perimeter ($\\theta$ in rad)',
        latex: '\\widehat{AB} = r\\theta \\qquad \\text{Perimeter of sector } AOB = 2r + \\widehat{AB} = 2r + r\\theta',
        note: 'Derived via $\\frac{\\theta}{2\\pi} \\times 2\\pi r = r\\theta$.',
      },
      {
        label: 'Area of Sector $AOB$ & Triangle $AOB$',
        latex: '\\text{Area of sector } AOB = \\frac{1}{2}r^2\\theta \\qquad A_{\\triangle AOB} = \\frac{1}{2}ab\\sin\\theta = \\frac{1}{2}r^2\\sin\\theta',
        note: 'Both sides of $\\triangle AOB$ have length $r$.',
      },
      {
        label: 'Area of Shaded Segment',
        latex: '\\text{Area of shaded segment} = \\text{Area of sector } AOB - A_{\\triangle AOB} = \\frac{1}{2}r^2(\\theta - \\sin\\theta)',
        note: 'Calculator MUST be in Radian mode for $\\sin\\theta$!',
      },
    ],
    stepByStepMethod: [
      'Confirm $\\theta$ is in radians (if given in degrees, multiply by $\\frac{\\pi}{180^\\circ}$ first).',
      'For sector perimeter, sum BOTH radii and the arc: $P = 2r + r\\theta$. For segment perimeter, sum chord $AB = 2r\\sin(\\theta/2)$ and arc $\\widehat{AB} = r\\theta$.',
      'For shaded segment area, compute sector area $\\frac{1}{2}r^2\\theta$ minus triangle area $\\frac{1}{2}r^2\\sin\\theta$, factored cleanly as $\\frac{1}{2}r^2(\\theta - \\sin\\theta)$.',
    ],
    diagrams: [
      {
        id: 'circular-sector-segment',
        title: 'Sector $AOB$ & Shaded Minor Segment',
        caption: 'Centre $O$, radii $OA = OB = r$, central angle $\\theta$ rad, arc length $\\widehat{AB} = r\\theta$, triangle $\\triangle AOB$, and shaded segment $\\frac{1}{2}r^2(\\theta - \\sin\\theta)$.',
      },
    ],
    comparisonTable: {
      title: 'Sector $AOB$, Triangle $AOB$ & Segment Formulae ($\\theta$ in rad)',
      headers: ['Region / Quantity', 'Formula', 'Derivation / Notes'],
      rows: [
        ['Arc length $\\widehat{AB}$', '$r\\theta$', '$\\frac{\\theta}{2\\pi} \\times 2\\pi r$'],
        ['Perimeter of sector $AOB$', '$2r + r\\theta$', 'Two radii $OA + OB$ plus arc $\\widehat{AB}$'],
        ['Area of sector $AOB$', '$\\frac{1}{2}r^2\\theta$', '$\\frac{\\theta}{2\\pi} \\times \\pi r^2$'],
        ['Area of triangle $AOB$', '$\\frac{1}{2}r^2\\sin\\theta$', '$\\frac{1}{2}ab\\sin\\theta$ with $a = b = r$'],
        ['Area of shaded segment', '$\\frac{1}{2}r^2(\\theta - \\sin\\theta)$', 'Sector area $-$ Triangle area'],
      ],
    },
    studyNotes: [
      {
        heading: 'Tangent Kite Minus Sector Regions',
        body: 'In 9709 P1 past papers, tangents at $A$ and $B$ often meet at $P$, making $\\angle OAP = \\angle OBP = \\frac{\\pi}{2}$. Splitting kite $OAPB$ along $OP$ gives $AP = r\\tan(\\theta/2)$, kite area $r^2\\tan(\\theta/2)$, and shaded outer area $r^2\\tan(\\theta/2) - \\frac{1}{2}r^2\\theta$.',
      },
    ],
    workedExamples: [
      {
        title: 'Perimeter & Area of a Shaded Segment',
        question:
          'A sector $AOB$ has centre $O$, radius $r = 10\\text{ cm}$, and $\\angle AOB = \\theta = 1.2\\text{ radians}$. Find (a) the perimeter of the minor segment cut off by chord $AB$, and (b) the area of the shaded segment (to 3 s.f.).',
        marks: 5,
        steps: [
          '(a) Arc length $\\widehat{AB} = r\\theta = 10 \\times 1.2 = 12\\text{ cm}$.',
          'Chord length $AB = 2r\\sin(\\theta/2) = 2(10)\\sin(0.6) \\approx 11.2928\\text{ cm}$ (RAD mode).',
          'Segment perimeter $= \\widehat{AB} + AB = 12 + 11.2928 \\approx 23.3\\text{ cm}$.',
          '(b) Sector area $= \\frac{1}{2}r^2\\theta = \\frac{1}{2}(10)^2(1.2) = 60\\text{ cm}^2$; Triangle area $= \\frac{1}{2}(10)^2\\sin(1.2) \\approx 46.6020\\text{ cm}^2$.',
          'Segment area $= \\frac{1}{2}r^2(\\theta - \\sin\\theta) = 50(1.2 - \\sin 1.2) \\approx 13.4\\text{ cm}^2$.',
        ],
        answer: '(a) $23.3\\text{ cm}$; (b) $13.4\\text{ cm}^2$',
        markSchemeNotes: 'B1 arc $12$, M1 chord formula, A1 $23.3$; M1 $\\frac{1}{2}r^2(\\theta - \\sin\\theta)$, A1 $13.4$.',
      },
      {
        title: 'Region Enclosed by Tangents & Arc',
        question:
          'Tangents $PA$ and $PB$ to a circle of centre $O$ and radius $6\\text{ cm}$ meet at $P$ with $\\angle AOB = \\frac{2\\pi}{3}$. Find the exact area enclosed between $PA$, $PB$, and arc $AB$.',
        marks: 4,
        steps: [
          'Join $OP$ to split kite $OAPB$ into two congruent right triangles with $\\angle AOP = \\frac{\\pi}{3}$ and $\\angle OAP = \\frac{\\pi}{2}$.',
          '$AP = 6\\tan\\left(\\frac{\\pi}{3}\\right) = 6\\sqrt{3}\\text{ cm}$.',
          'Area of kite $OAPB = 2 \\times \\frac{1}{2}(6)(6\\sqrt{3}) = 36\\sqrt{3}\\text{ cm}^2$.',
          'Area of sector $AOB = \\frac{1}{2}(6)^2\\left(\\frac{2\\pi}{3}\\right) = 12\\pi\\text{ cm}^2$.',
          'Shaded area $= 36\\sqrt{3} - 12\\pi\\text{ cm}^2$.',
        ],
        answer: '$36\\sqrt{3} - 12\\pi\\text{ cm}^2$',
        markSchemeNotes: 'M1 right trig $AP = 6\\sqrt{3}$, A1 kite area $36\\sqrt{3}$, M1 sector $12\\pi$, A1 exact difference.',
      },
    ],
    commonMistakes: [
      'Evaluating $\\sin\\theta$ in Degree mode inside $\\frac{1}{2}r^2(\\theta - \\sin\\theta)$.',
      'Adding $2r$ to the perimeter of a segment (a segment is bounded only by chord $AB$ and arc $\\widehat{AB}$).',
      'Forgetting the $\\frac{1}{2}$ or failing to square $r$ in $\\frac{1}{2}r^2\\theta$.',
    ],
    rapidSummary: [
      {
        rule: 'Sector $AOB$',
        detail: 'Arc $\\widehat{AB} = r\\theta$, Perimeter $= 2r + r\\theta$, Area $= \\frac{1}{2}r^2\\theta$.',
      },
      {
        rule: 'Shaded Segment',
        detail: '$\\frac{1}{2}r^2(\\theta - \\sin\\theta)$ with $\\theta$ in radians.',
      },
    ],
    quickCheck: {
      id: 'qc-9709-4.2',
      paperType: 'Pure Mathematics 1',
      marks: 3,
      prompt: 'A sector of radius $8\\text{ cm}$ has perimeter $28\\text{ cm}$. Find the area of the sector in $\\text{cm}^2$.',
      answer: '48',
      acceptedAnswers: ['48'],
      numericAnswer: 48,
      tolerance: 0,
      unit: 'cm²',
      hint: 'Use $P = 2r + r\\theta = 28$ to find arc length $r\\theta$, then $A = \\frac{1}{2}r^2\\theta = \\frac{1}{2}r(r\\theta)$.',
      solution: '$2(8) + r\\theta = 28 \\implies r\\theta = 12\\text{ cm}$. Area $= \\frac{1}{2}(8)(12) = 48\\text{ cm}^2$.',
    },
    sandbox: 'none',
  },
];
