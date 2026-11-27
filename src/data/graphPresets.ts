import type {
  AngleUnit,
  GraphCircle,
  GraphPoint,
  GraphPolygon,
  GraphSegment,
  GraphViewport,
  ParamMap,
} from '../utils/graphMath';

export interface GraphExpressionPreset {
  id: string;
  input: string;
  color: string;
  visible?: boolean;
}

export interface GraphSliderConfig {
  name: string;
  min: number;
  max: number;
  step: number;
}

export interface GraphShadedArea {
  exprId: string;
  secondExprId?: string;
  xMin: number;
  xMax: number;
  color: string;
  label?: string;
}

export interface GraphPreset {
  id: string;
  title: string;
  subtitle: string;
  angleUnit: AngleUnit;
  viewport: GraphViewport;
  expressions: GraphExpressionPreset[];
  params: ParamMap;
  sliderConfigs?: Record<string, GraphSliderConfig>;
  points?: GraphPoint[];
  segments?: GraphSegment[];
  polygons?: GraphPolygon[];
  circles?: GraphCircle[];
  tangentEnabled?: boolean;
  normalEnabled?: boolean;
  tangentX?: number;
  shadedArea?: GraphShadedArea | null;
  snapToGrid?: boolean;
  showKeyPoints?: boolean;
}

export const GRAPH_PALETTE = [
  '#1d4ed8', // Cobalt blue
  '#dc2626', // Crimson
  '#059669', // Emerald
  '#d97706', // Amber
  '#7c3aed', // Violet
  '#0891b2', // Cyan
];

export const GRAPH_PRESETS: Record<string, GraphPreset> = {
  general: {
    id: 'general',
    title: 'Interactive Graphing & Calculus Workbench',
    subtitle: 'Plot curves, circles, tangent & normal lines, shaded areas, and trigonometric functions in radians.',
    angleUnit: 'rad',
    viewport: { centerX: 0, centerY: 0, pxPerUnitX: 40, pxPerUnitY: 40 },
    expressions: [
      { id: 'exp-1', input: 'y = x^2 - 4x + 3', color: GRAPH_PALETTE[0], visible: true },
      { id: 'exp-2', input: 'y = 2x - 2', color: GRAPH_PALETTE[1], visible: true },
    ],
    params: {},
    points: [],
    segments: [],
    polygons: [],
    circles: [],
    snapToGrid: true,
    showKeyPoints: true,
  },
  '1.1': {
    id: '1.1',
    title: '9709 Explorer · Completed Square & Vertex Form',
    subtitle: 'Adjust a, p, and q in y = a(x - p)^2 + q to move the vertex (p, q) and flip the parabola.',
    angleUnit: 'rad',
    viewport: { centerX: 2, centerY: 1, pxPerUnitX: 42, pxPerUnitY: 42 },
    expressions: [
      { id: 'exp-1', input: 'y = a(x - p)^2 + q', color: GRAPH_PALETTE[0], visible: true },
    ],
    params: { a: 1, p: 2, q: -3 },
    sliderConfigs: {
      a: { name: 'a', min: -3, max: 3, step: 0.5 },
      p: { name: 'p', min: -5, max: 5, step: 0.5 },
      q: { name: 'q', min: -6, max: 6, step: 0.5 },
    },
    snapToGrid: true,
    showKeyPoints: true,
  },
  '1.2': {
    id: '1.2',
    title: '9709 Explorer · Quadratics, Discriminant & Roots',
    subtitle: 'Slide c on y = 2x + c to observe 2 distinct roots, 1 tangent point (b^2 - 4ac = 0), or 0 real intersections.',
    angleUnit: 'rad',
    viewport: { centerX: 1, centerY: 2, pxPerUnitX: 44, pxPerUnitY: 44 },
    expressions: [
      { id: 'exp-1', input: 'y = x^2 - 2x + 3', color: GRAPH_PALETTE[0], visible: true },
      { id: 'exp-2', input: 'y = 2x + c', color: GRAPH_PALETTE[1], visible: true },
    ],
    params: { c: -1 },
    sliderConfigs: {
      c: { name: 'c', min: -5, max: 5, step: 0.5 },
    },
    snapToGrid: true,
    showKeyPoints: true,
  },
  '1.3': {
    id: '1.3',
    title: '9709 Explorer · Quadratic Inequalities & Roots',
    subtitle: 'Observe where y = x^2 - 2x - 15 lies below the x-axis (between roots -3 and 5) or above it.',
    angleUnit: 'rad',
    viewport: { centerX: 1, centerY: -4, pxPerUnitX: 30, pxPerUnitY: 18 },
    expressions: [
      { id: 'exp-1', input: 'y = x^2 - 2x - 15', color: GRAPH_PALETTE[0], visible: true },
      { id: 'exp-2', input: 'y = 0', color: GRAPH_PALETTE[1], visible: true },
    ],
    params: {},
    snapToGrid: true,
    showKeyPoints: true,
  },
  '1.4': {
    id: '1.4',
    title: '9709 Explorer · Simultaneous Parabola & Line',
    subtitle: 'Inspect the intersection points of y = x^2 - 3x + 2 and y = x - 1.',
    angleUnit: 'rad',
    viewport: { centerX: 2, centerY: 1, pxPerUnitX: 46, pxPerUnitY: 46 },
    expressions: [
      { id: 'exp-1', input: 'y = x^2 - 3x + 2', color: GRAPH_PALETTE[0], visible: true },
      { id: 'exp-2', input: 'y = x - 1', color: GRAPH_PALETTE[1], visible: true },
    ],
    params: {},
    snapToGrid: true,
    showKeyPoints: true,
  },
  '2.1': {
    id: '2.1',
    title: '9709 Explorer · Inverse Functions & Reflection in y = x',
    subtitle: 'Compare f(x) = 2x + 2 with f^-1(x) = (x - 2)/2 reflected across the mirror line y = x.',
    angleUnit: 'rad',
    viewport: { centerX: 0, centerY: 0, pxPerUnitX: 42, pxPerUnitY: 42 },
    expressions: [
      { id: 'exp-1', input: 'y = 2x + 2', color: GRAPH_PALETTE[0], visible: true },
      { id: 'exp-2', input: 'y = (x - 2) / 2', color: GRAPH_PALETTE[2], visible: true },
      { id: 'exp-3', input: 'y = x', color: GRAPH_PALETTE[3], visible: true },
    ],
    params: {},
    snapToGrid: true,
    showKeyPoints: true,
  },
  '2.3': {
    id: '2.3',
    title: '9709 Explorer · Combined Graph Transformations',
    subtitle: 'Compare y = x^2 with the translated & stretched curve y = a(x - h)^2 + k.',
    angleUnit: 'rad',
    viewport: { centerX: 1, centerY: 2, pxPerUnitX: 42, pxPerUnitY: 42 },
    expressions: [
      { id: 'exp-1', input: 'y = x^2', color: GRAPH_PALETTE[3], visible: true },
      { id: 'exp-2', input: 'y = a(x - h)^2 + k', color: GRAPH_PALETTE[0], visible: true },
    ],
    params: { a: 2, h: 1, k: -2 },
    sliderConfigs: {
      a: { name: 'a', min: -3, max: 3, step: 0.5 },
      h: { name: 'h', min: -4, max: 4, step: 0.5 },
      k: { name: 'k', min: -4, max: 4, step: 0.5 },
    },
    snapToGrid: true,
    showKeyPoints: true,
  },
  '3.1': {
    id: '3.1',
    title: '9709 Explorer · Segment Length, Midpoint & Gradient',
    subtitle: 'Drag points A and B to observe exact distance, midpoint M, and gradient update live.',
    angleUnit: 'rad',
    viewport: { centerX: 1, centerY: 2.5, pxPerUnitX: 46, pxPerUnitY: 46 },
    expressions: [],
    params: {},
    points: [
      { id: 'pt-1', label: 'A', x: -2, y: 1, color: GRAPH_PALETTE[0] },
      { id: 'pt-2', label: 'B', x: 4, y: 5, color: GRAPH_PALETTE[0] },
      { id: 'pt-3', label: 'M', x: 1, y: 3, color: GRAPH_PALETTE[2] },
    ],
    segments: [
      {
        id: 'seg-1',
        label: 'AB',
        from: { x: -2, y: 1, label: 'A' },
        to: { x: 4, y: 5, label: 'B' },
        color: GRAPH_PALETTE[0],
        kind: 'segment',
      },
    ],
    snapToGrid: true,
    showKeyPoints: false,
  },
  '3.2': {
    id: '3.2',
    title: '9709 Explorer · Parallel & Perpendicular Lines (m1 * m2 = -1)',
    subtitle: 'Adjust gradient m to watch the perpendicular line (-1/m) stay at 90 degrees.',
    angleUnit: 'rad',
    viewport: { centerX: 0, centerY: 1, pxPerUnitX: 42, pxPerUnitY: 42 },
    expressions: [
      { id: 'exp-1', input: 'y = mx + c', color: GRAPH_PALETTE[0], visible: true },
      { id: 'exp-2', input: 'y = (-1 / m)x + d', color: GRAPH_PALETTE[2], visible: true },
    ],
    params: { m: 2, c: 1, d: 3 },
    sliderConfigs: {
      m: { name: 'm', min: -4, max: 4, step: 0.5 },
      c: { name: 'c', min: -5, max: 5, step: 0.5 },
      d: { name: 'd', min: -5, max: 5, step: 0.5 },
    },
    snapToGrid: true,
    showKeyPoints: true,
  },
  '3.3': {
    id: '3.3',
    title: '9709 Explorer · Equation of a Circle & Tangents',
    subtitle: 'Explore (x - 2)^2 + (y - 1)^2 = 25 and a tangent line at the point (5, 5).',
    angleUnit: 'rad',
    viewport: { centerX: 2, centerY: 1, pxPerUnitX: 34, pxPerUnitY: 34 },
    expressions: [
      { id: 'exp-1', input: 'y = (-3 / 4)x + 8.75', color: GRAPH_PALETTE[1], visible: true },
    ],
    params: {},
    points: [
      { id: 'pt-1', label: 'C', x: 2, y: 1, color: GRAPH_PALETTE[0] },
      { id: 'pt-2', label: 'P', x: 5, y: 5, color: GRAPH_PALETTE[1] },
    ],
    segments: [
      {
        id: 'seg-1',
        label: 'Radius',
        from: { x: 2, y: 1, label: 'C' },
        to: { x: 5, y: 5, label: 'P' },
        color: GRAPH_PALETTE[2],
        kind: 'segment',
        dashed: true,
      },
    ],
    circles: [
      {
        id: 'cir-1',
        label: '(x - 2)^2 + (y - 1)^2 = 25',
        cx: 2,
        cy: 1,
        radius: 5,
        color: GRAPH_PALETTE[0],
      },
    ],
    snapToGrid: true,
    showKeyPoints: false,
  },
  '5.1': {
    id: '5.1',
    title: '9709 Explorer · sin, cos & tan in Radians [0, 2pi]',
    subtitle: 'Compare y = sin(x), y = cos(x), and y = tan(x) across 0 <= x <= 2pi (~6.283 radians).',
    angleUnit: 'rad',
    viewport: { centerX: 3.14, centerY: 0, pxPerUnitX: 78, pxPerUnitY: 64 },
    expressions: [
      { id: 'exp-1', input: 'y = sin(x)', color: GRAPH_PALETTE[0], visible: true },
      { id: 'exp-2', input: 'y = cos(x)', color: GRAPH_PALETTE[2], visible: true },
      { id: 'exp-3', input: 'y = tan(x)', color: GRAPH_PALETTE[3], visible: true },
    ],
    params: {},
    snapToGrid: false,
    showKeyPoints: true,
  },
  '5.3': {
    id: '5.3',
    title: '9709 Explorer · Solving Trig Equations Graphically (Radians)',
    subtitle: 'Slide y = k across [0, 2pi] to see how many roots exist for sin(x) = k or cos(x) = k.',
    angleUnit: 'rad',
    viewport: { centerX: 3.14, centerY: 0, pxPerUnitX: 78, pxPerUnitY: 96 },
    expressions: [
      { id: 'exp-1', input: 'y = cos(x)', color: GRAPH_PALETTE[0], visible: true },
      { id: 'exp-2', input: 'y = k', color: GRAPH_PALETTE[1], visible: true },
      { id: 'exp-3', input: 'y = sin(2x)', color: GRAPH_PALETTE[2], visible: false },
    ],
    params: { k: -0.5 },
    sliderConfigs: {
      k: { name: 'k', min: -1, max: 1, step: 0.1 },
    },
    snapToGrid: false,
    showKeyPoints: true,
  },
  '7.2': {
    id: '7.2',
    title: '9709 Explorer · Curve + Tangent & Normal Line',
    subtitle: 'Slide x0 along y = x^3 - 3x + 1 to inspect both the tangent (m) and perpendicular normal (-1/m) live.',
    angleUnit: 'rad',
    viewport: { centerX: 0.5, centerY: 1, pxPerUnitX: 52, pxPerUnitY: 42 },
    expressions: [
      { id: 'exp-1', input: 'y = x^3 - 3x + 1', color: GRAPH_PALETTE[0], visible: true },
    ],
    params: {},
    tangentEnabled: true,
    normalEnabled: true,
    tangentX: 1.5,
    snapToGrid: true,
    showKeyPoints: true,
  },
  '7.3': {
    id: '7.3',
    title: '9709 Explorer · Stationary Points & Second Derivative',
    subtitle: 'Inspect where dy/dx = 0 on a cubic curve to classify local maxima and local minima.',
    angleUnit: 'rad',
    viewport: { centerX: 0.5, centerY: 0, pxPerUnitX: 46, pxPerUnitY: 34 },
    expressions: [
      { id: 'exp-1', input: 'y = x^3 - 3x + 2', color: GRAPH_PALETTE[0], visible: true },
      { id: 'exp-2', input: 'y = 3x^2 - 3', color: GRAPH_PALETTE[2], visible: true },
    ],
    params: {},
    tangentEnabled: true,
    tangentX: 1,
    snapToGrid: true,
    showKeyPoints: true,
  },
  '8.2': {
    id: '8.2',
    title: '9709 Explorer · Shaded Area Under & Between Curves',
    subtitle: 'Shaded area between y = 4x - x^2 and y = x over [0, 3], or hide y = x to view the area down to the x-axis.',
    angleUnit: 'rad',
    viewport: { centerX: 2, centerY: 2.2, pxPerUnitX: 56, pxPerUnitY: 50 },
    expressions: [
      { id: 'exp-1', input: 'y = 4x - x^2', color: GRAPH_PALETTE[0], visible: true },
      { id: 'exp-2', input: 'y = x', color: GRAPH_PALETTE[1], visible: true },
    ],
    params: {},
    shadedArea: {
      exprId: 'exp-1',
      secondExprId: 'exp-2',
      xMin: 0,
      xMax: 3,
      color: GRAPH_PALETTE[0],
      label: 'Area = ∫₀³ (4x − x² − x) dx = 4.5',
    },
    snapToGrid: true,
    showKeyPoints: true,
  },
};

export const CALCULATOR_PRESET_OPTIONS: { id: string; label: string }[] = [
  { id: '1.2', label: 'Quadratics & Discriminant' },
  { id: '2.1', label: 'Inverse & y = x' },
  { id: '5.1', label: 'sin / cos / tan (Rad)' },
  { id: '7.2', label: 'Curve + Tangent & Normal' },
  { id: '8.2', label: 'Shaded Area Under Curve' },
  { id: '1.1', label: 'Completed Square' },
  { id: '3.3', label: 'Circle & Tangent' },
  { id: 'general', label: 'General Workbench' },
];

export function getGraphPresetForTopic(topicId?: string): GraphPreset {
  if (topicId && GRAPH_PRESETS[topicId]) {
    return GRAPH_PRESETS[topicId];
  }
  return GRAPH_PRESETS.general;
}
