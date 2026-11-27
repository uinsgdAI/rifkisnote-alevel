import React from 'react';
import type { NoteDiagramMeta, P1DiagramId } from '../types/syllabus';
import { MathText } from './MathText';

const INK = '#18181B';
const PRI = '#1D4ED8';
const PRI_SOFT = '#DBEAFE';
const ACC = '#D97706';
const ACC_SOFT = '#FEF3C7';
const EMERALD = '#059669';
const EMERALD_SOFT = '#D1FAE5';
const ROSE = '#DC2626';
const ROSE_SOFT = '#FEE2E2';
const MUTED = '#64748B';
const GRID = '#E2E8F0';

function ArrowDefs() {
  return (
    <defs>
      <marker id="p1-arrow-ink" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill={INK} />
      </marker>
      <marker id="p1-arrow-pri" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill={PRI} />
      </marker>
      <marker id="p1-arrow-emerald" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill={EMERALD} />
      </marker>
      <marker id="p1-arrow-rose" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill={ROSE} />
      </marker>
    </defs>
  );
}

const QuadSketchFxSvg: React.FC = () => {
  // f(x) = x^2 - 5x + 6 = (x - 2.5)^2 - 0.25
  // World box: x in [-0.8, 5.2], y in [-1.5, 7]
  // Scale: sx = 60 + x * 62, sy = 195 - y * 24
  const mapX = (x: number) => 65 + x * 58;
  const mapY = (y: number) => 190 - y * 23;
  const pts: string[] = [];
  for (let x = -0.35; x <= 5.35; x += 0.1) {
    const y = x * x - 5 * x + 6;
    pts.push(`${pts.length === 0 ? 'M' : 'L'} ${mapX(x).toFixed(1)} ${mapY(y).toFixed(1)}`);
  }
  const vx = mapX(2.5);
  const vy = mapY(-0.25);

  return (
    <svg viewBox="0 0 420 240" className="w-full h-auto" role="img" aria-label="Sketch of f(x) = x^2 - 5x + 6">
      <ArrowDefs />
      {/* Axes */}
      <line x1="25" y1={mapY(0)} x2="395" y2={mapY(0)} stroke={INK} strokeWidth="1.5" markerEnd="url(#p1-arrow-ink)" />
      <line x1={mapX(0)} y1="228" x2={mapX(0)} y2="14" stroke={INK} strokeWidth="1.5" markerEnd="url(#p1-arrow-ink)" />
      <text x="392" y={mapY(0) - 7} fontSize="12" fontWeight="700" fill={INK}>x</text>
      <text x={mapX(0) + 8} y="22" fontSize="12" fontWeight="700" fill={INK}>y</text>

      {/* Axis of symmetry */}
      <line x1={vx} y1="26" x2={vx} y2="225" stroke={MUTED} strokeWidth="1.2" strokeDasharray="4 4" />
      <text x={vx + 5} y="36" fontSize="10.5" fill={MUTED} fontFamily="monospace">x = 5/2</text>

      {/* Parabola */}
      <path d={pts.join(' ')} fill="none" stroke={PRI} strokeWidth="2.6" strokeLinecap="round" />

      {/* Intercepts & Vertex */}
      <circle cx={mapX(0)} cy={mapY(6)} r="4" fill={ACC} stroke={INK} strokeWidth="1.3" />
      <text x={mapX(0) + 8} y={mapY(6) + 4} fontSize="11" fontWeight="700" fill={INK}>(0, 6)</text>

      <circle cx={mapX(2)} cy={mapY(0)} r="4" fill={PRI} stroke={INK} strokeWidth="1.3" />
      <text x={mapX(2) - 24} y={mapY(0) - 8} fontSize="11" fontWeight="700" fill={INK}>(2, 0)</text>

      <circle cx={mapX(3)} cy={mapY(0)} r="4" fill={PRI} stroke={INK} strokeWidth="1.3" />
      <text x={mapX(3) + 6} y={mapY(0) - 8} fontSize="11" fontWeight="700" fill={INK}>(3, 0)</text>

      <circle cx={vx} cy={vy} r="4.5" fill={EMERALD} stroke={INK} strokeWidth="1.4" />
      <text x={vx - 26} y={vy + 18} fontSize="11" fontWeight="700" fill={EMERALD}>Min (5/2, -1/4)</text>
    </svg>
  );
};

const QuadSketchGxSvg: React.FC = () => {
  // g(x) = 4(x - 1)^2 - 1
  const mapX = (x: number) => 115 + x * 95;
  const mapY = (y: number) => 176 - y * 36;
  const pts: string[] = [];
  for (let x = -0.1; x <= 2.1; x += 0.05) {
    const y = 4 * (x - 1) * (x - 1) - 1;
    pts.push(`${pts.length === 0 ? 'M' : 'L'} ${mapX(x).toFixed(1)} ${mapY(y).toFixed(1)}`);
  }

  return (
    <svg viewBox="0 0 420 240" className="w-full h-auto" role="img" aria-label="Sketch of g(x) = 4x^2 - 8x + 3">
      <ArrowDefs />
      <line x1="35" y1={mapY(0)} x2="385" y2={mapY(0)} stroke={INK} strokeWidth="1.5" markerEnd="url(#p1-arrow-ink)" />
      <line x1={mapX(0)} y1="228" x2={mapX(0)} y2="14" stroke={INK} strokeWidth="1.5" markerEnd="url(#p1-arrow-ink)" />
      <text x="382" y={mapY(0) - 7} fontSize="12" fontWeight="700" fill={INK}>x</text>
      <text x={mapX(0) + 8} y="22" fontSize="12" fontWeight="700" fill={INK}>y</text>

      <line x1={mapX(1)} y1="26" x2={mapX(1)} y2="225" stroke={MUTED} strokeWidth="1.2" strokeDasharray="4 4" />
      <text x={mapX(1) + 5} y="36" fontSize="10.5" fill={MUTED} fontFamily="monospace">x = 1</text>

      <path d={pts.join(' ')} fill="none" stroke={PRI} strokeWidth="2.6" strokeLinecap="round" />

      <circle cx={mapX(0)} cy={mapY(3)} r="4" fill={ACC} stroke={INK} strokeWidth="1.3" />
      <text x={mapX(0) - 38} y={mapY(3) + 4} fontSize="11" fontWeight="700" fill={INK}>(0, 3)</text>

      <circle cx={mapX(0.5)} cy={mapY(0)} r="4" fill={PRI} stroke={INK} strokeWidth="1.3" />
      <text x={mapX(0.5) - 36} y={mapY(0) - 9} fontSize="11" fontWeight="700" fill={INK}>(1/2, 0)</text>

      <circle cx={mapX(1.5)} cy={mapY(0)} r="4" fill={PRI} stroke={INK} strokeWidth="1.3" />
      <text x={mapX(1.5) + 7} y={mapY(0) - 9} fontSize="11" fontWeight="700" fill={INK}>(3/2, 0)</text>

      <circle cx={mapX(1)} cy={mapY(-1)} r="4.5" fill={EMERALD} stroke={INK} strokeWidth="1.4" />
      <text x={mapX(1) + 9} y={mapY(-1) + 14} fontSize="11" fontWeight="700" fill={EMERALD}>Min (1, -1)</text>
    </svg>
  );
};

const DiscriminantCasesSvg: React.FC = () => (
  <svg viewBox="0 0 460 155" className="w-full h-auto" role="img" aria-label="Discriminant cases D > 0, D = 0, D < 0">
    {/* Case 1: exact parabola dipping below x-axis y=88 down to y=104 -> control y = 184; crosses y=88 at x=49.2 and x=86.8 */}
    <g transform="translate(10, 10)">
      <rect x="0" y="0" width="136" height="135" rx="10" fill="#F8FAFC" stroke={GRID} strokeWidth="1.2" />
      <line x1="14" y1="88" x2="122" y2="88" stroke={INK} strokeWidth="1.4" />
      <path d="M 26 24 Q 68 184 110 24" fill="none" stroke={PRI} strokeWidth="2.4" />
      <circle cx="49.2" cy="88" r="3.6" fill={EMERALD} stroke={INK} strokeWidth="1.2" />
      <circle cx="86.8" cy="88" r="3.6" fill={EMERALD} stroke={INK} strokeWidth="1.2" />
      <text x="68" y="20" textAnchor="middle" fontSize="11.5" fontWeight="700" fill={PRI}>D &gt; 0</text>
      <text x="68" y="122" textAnchor="middle" fontSize="10.5" fontWeight="600" fill={INK}>2 real roots</text>
    </g>
    {/* Case 2: exact vertex tangent at (68, 88) */}
    <g transform="translate(162, 10)">
      <rect x="0" y="0" width="136" height="135" rx="10" fill="#F8FAFC" stroke={GRID} strokeWidth="1.2" />
      <line x1="14" y1="88" x2="122" y2="88" stroke={INK} strokeWidth="1.4" />
      <path d="M 30 30 Q 68 146 106 30" fill="none" stroke={ACC} strokeWidth="2.4" />
      <circle cx="68" cy="88" r="4" fill={ACC} stroke={INK} strokeWidth="1.3" />
      <text x="68" y="20" textAnchor="middle" fontSize="11.5" fontWeight="700" fill={ACC}>D = 0</text>
      <text x="68" y="122" textAnchor="middle" fontSize="10.5" fontWeight="600" fill={INK}>1 equal root</text>
    </g>
    {/* Case 3 */}
    <g transform="translate(314, 10)">
      <rect x="0" y="0" width="136" height="135" rx="10" fill="#F8FAFC" stroke={GRID} strokeWidth="1.2" />
      <line x1="14" y1="96" x2="122" y2="96" stroke={INK} strokeWidth="1.4" />
      <path d="M 30 22 Q 68 118 106 22" fill="none" stroke={ROSE} strokeWidth="2.4" />
      <text x="68" y="20" textAnchor="middle" fontSize="11.5" fontWeight="700" fill={ROSE}>D &lt; 0</text>
      <text x="68" y="122" textAnchor="middle" fontSize="10.5" fontWeight="600" fill={INK}>No real solutions</text>
    </g>
  </svg>
);

const MappingTypesSvg: React.FC = () => (
  <svg viewBox="0 0 460 225" className="w-full h-auto" role="img" aria-label="Four mapping types: one-one, many-one, one-many, many-many">
    <ArrowDefs />
    {/* 1. One-one (Function) */}
    <g transform="translate(8, 8)">
      <rect x="0" y="0" width="214" height="100" rx="10" fill={EMERALD_SOFT} fillOpacity="0.45" stroke={EMERALD} strokeWidth="1.5" />
      <text x="107" y="16" textAnchor="middle" fontSize="11" fontWeight="700" fill={EMERALD}>One-One (Function)</text>
      <ellipse cx="48" cy="58" rx="22" ry="30" fill="#fff" stroke={INK} strokeWidth="1.3" />
      <ellipse cx="166" cy="58" rx="22" ry="30" fill="#fff" stroke={INK} strokeWidth="1.3" />
      {[42, 58, 74].map((cy, idx) => (
        <g key={idx}>
          <circle cx="48" cy={cy} r="2.8" fill={INK} />
          <circle cx="166" cy={cy} r="2.8" fill={INK} />
          <line x1="52" y1={cy} x2="160" y2={cy} stroke={EMERALD} strokeWidth="1.5" markerEnd="url(#p1-arrow-emerald)" />
        </g>
      ))}
    </g>

    {/* 2. Many-one (Function) */}
    <g transform="translate(238, 8)">
      <rect x="0" y="0" width="214" height="100" rx="10" fill={EMERALD_SOFT} fillOpacity="0.45" stroke={EMERALD} strokeWidth="1.5" />
      <text x="107" y="16" textAnchor="middle" fontSize="11" fontWeight="700" fill={EMERALD}>Many-One (Function)</text>
      <ellipse cx="48" cy="58" rx="22" ry="30" fill="#fff" stroke={INK} strokeWidth="1.3" />
      <ellipse cx="166" cy="58" rx="22" ry="30" fill="#fff" stroke={INK} strokeWidth="1.3" />
      <circle cx="48" cy="42" r="2.8" fill={INK} />
      <circle cx="48" cy="58" r="2.8" fill={INK} />
      <circle cx="48" cy="74" r="2.8" fill={INK} />
      <circle cx="166" cy="48" r="2.8" fill={INK} />
      <circle cx="166" cy="70" r="2.8" fill={INK} />
      <line x1="52" y1="42" x2="160" y2="48" stroke={EMERALD} strokeWidth="1.5" markerEnd="url(#p1-arrow-emerald)" />
      <line x1="52" y1="58" x2="160" y2="49" stroke={EMERALD} strokeWidth="1.5" markerEnd="url(#p1-arrow-emerald)" />
      <line x1="52" y1="74" x2="160" y2="70" stroke={EMERALD} strokeWidth="1.5" markerEnd="url(#p1-arrow-emerald)" />
    </g>

    {/* 3. One-many (Not Function) */}
    <g transform="translate(8, 117)">
      <rect x="0" y="0" width="214" height="100" rx="10" fill={ROSE_SOFT} fillOpacity="0.45" stroke={ROSE} strokeWidth="1.5" />
      <text x="107" y="16" textAnchor="middle" fontSize="11" fontWeight="700" fill={ROSE}>One-Many (Not Function)</text>
      <ellipse cx="48" cy="58" rx="22" ry="30" fill="#fff" stroke={INK} strokeWidth="1.3" />
      <ellipse cx="166" cy="58" rx="22" ry="30" fill="#fff" stroke={INK} strokeWidth="1.3" />
      <circle cx="48" cy="48" r="2.8" fill={INK} />
      <circle cx="48" cy="70" r="2.8" fill={INK} />
      <circle cx="166" cy="42" r="2.8" fill={INK} />
      <circle cx="166" cy="58" r="2.8" fill={INK} />
      <circle cx="166" cy="74" r="2.8" fill={INK} />
      <line x1="52" y1="48" x2="160" y2="42" stroke={ROSE} strokeWidth="1.5" markerEnd="url(#p1-arrow-rose)" />
      <line x1="52" y1="48" x2="160" y2="58" stroke={ROSE} strokeWidth="1.5" markerEnd="url(#p1-arrow-rose)" />
      <line x1="52" y1="70" x2="160" y2="74" stroke={ROSE} strokeWidth="1.5" markerEnd="url(#p1-arrow-rose)" />
    </g>

    {/* 4. Many-many (Not Function) */}
    <g transform="translate(238, 117)">
      <rect x="0" y="0" width="214" height="100" rx="10" fill={ROSE_SOFT} fillOpacity="0.45" stroke={ROSE} strokeWidth="1.5" />
      <text x="107" y="16" textAnchor="middle" fontSize="11" fontWeight="700" fill={ROSE}>Many-Many (Not Function)</text>
      <ellipse cx="48" cy="58" rx="22" ry="30" fill="#fff" stroke={INK} strokeWidth="1.3" />
      <ellipse cx="166" cy="58" rx="22" ry="30" fill="#fff" stroke={INK} strokeWidth="1.3" />
      <circle cx="48" cy="44" r="2.8" fill={INK} />
      <circle cx="48" cy="70" r="2.8" fill={INK} />
      <circle cx="166" cy="44" r="2.8" fill={INK} />
      <circle cx="166" cy="70" r="2.8" fill={INK} />
      <line x1="52" y1="44" x2="160" y2="44" stroke={ROSE} strokeWidth="1.5" markerEnd="url(#p1-arrow-rose)" />
      <line x1="52" y1="44" x2="160" y2="70" stroke={ROSE} strokeWidth="1.5" markerEnd="url(#p1-arrow-rose)" />
      <line x1="52" y1="70" x2="160" y2="44" stroke={ROSE} strokeWidth="1.5" markerEnd="url(#p1-arrow-rose)" />
      <line x1="52" y1="70" x2="160" y2="70" stroke={ROSE} strokeWidth="1.5" markerEnd="url(#p1-arrow-rose)" />
    </g>
  </svg>
);

const VerticalLineTestSvg: React.FC = () => (
  <svg viewBox="0 0 420 165" className="w-full h-auto" role="img" aria-label="Vertical Line Test: function vs not a function">
    <ArrowDefs />
    {/* Left: Function */}
    <g transform="translate(10, 10)">
      <rect x="0" y="0" width="190" height="145" rx="10" fill="#F8FAFC" stroke={GRID} strokeWidth="1.2" />
      <line x1="20" y1="95" x2="174" y2="95" stroke={INK} strokeWidth="1.3" markerEnd="url(#p1-arrow-ink)" />
      <line x1="95" y1="132" x2="95" y2="18" stroke={INK} strokeWidth="1.3" markerEnd="url(#p1-arrow-ink)" />
      <path d="M 38 35 Q 95 140 152 35" fill="none" stroke={PRI} strokeWidth="2.4" />
      <line x1="125" y1="22" x2="125" y2="125" stroke={EMERALD} strokeWidth="1.6" strokeDasharray="4 3" />
      <circle cx="125" cy="67" r="4" fill={EMERALD} stroke={INK} strokeWidth="1.2" />
      <text x="95" y="138" textAnchor="middle" fontSize="10.5" fontWeight="700" fill={EMERALD}>Cuts 1x → Function</text>
    </g>
    {/* Right: Not Function */}
    <g transform="translate(220, 10)">
      <rect x="0" y="0" width="190" height="145" rx="10" fill="#F8FAFC" stroke={GRID} strokeWidth="1.2" />
      <line x1="20" y1="75" x2="174" y2="75" stroke={INK} strokeWidth="1.3" markerEnd="url(#p1-arrow-ink)" />
      <line x1="48" y1="132" x2="48" y2="18" stroke={INK} strokeWidth="1.3" markerEnd="url(#p1-arrow-ink)" />
      <path d="M 148 30 Q 15 75 148 120" fill="none" stroke={ROSE} strokeWidth="2.4" />
      <line x1="116" y1="22" x2="116" y2="125" stroke={ROSE} strokeWidth="1.6" strokeDasharray="4 3" />
      <circle cx="116" cy="44" r="4" fill={ROSE} stroke={INK} strokeWidth="1.2" />
      <circle cx="116" cy="106" r="4" fill={ROSE} stroke={INK} strokeWidth="1.2" />
      <text x="95" y="138" textAnchor="middle" fontSize="10.5" fontWeight="700" fill={ROSE}>Cuts 2x → Not Function</text>
    </g>
  </svg>
);

const LinearDomainRangeSvg: React.FC = () => {
  // f(x) = 2x - 1 on -1 <= x < 2 -> (-1, -3) closed to (2, 3) open
  const mapX = (x: number) => 165 + x * 62;
  const mapY = (y: number) => 112 - y * 24;
  return (
    <svg viewBox="0 0 380 215" className="w-full h-auto" role="img" aria-label="Graph of f(x) = 2x - 1 for -1 <= x < 2">
      <ArrowDefs />
      <line x1="35" y1={mapY(0)} x2="345" y2={mapY(0)} stroke={INK} strokeWidth="1.4" markerEnd="url(#p1-arrow-ink)" />
      <line x1={mapX(0)} y1="202" x2={mapX(0)} y2="16" stroke={INK} strokeWidth="1.4" markerEnd="url(#p1-arrow-ink)" />
      <text x="342" y={mapY(0) - 7} fontSize="11.5" fontWeight="700" fill={INK}>x</text>
      <text x={mapX(0) + 8} y="23" fontSize="11.5" fontWeight="700" fill={INK}>y</text>

      {/* Dashed guides */}
      <line x1={mapX(-1)} y1={mapY(0)} x2={mapX(-1)} y2={mapY(-3)} stroke={MUTED} strokeWidth="1.1" strokeDasharray="3 3" />
      <line x1={mapX(0)} y1={mapY(-3)} x2={mapX(-1)} y2={mapY(-3)} stroke={MUTED} strokeWidth="1.1" strokeDasharray="3 3" />
      <line x1={mapX(2)} y1={mapY(0)} x2={mapX(2)} y2={mapY(3)} stroke={MUTED} strokeWidth="1.1" strokeDasharray="3 3" />
      <line x1={mapX(0)} y1={mapY(3)} x2={mapX(2)} y2={mapY(3)} stroke={MUTED} strokeWidth="1.1" strokeDasharray="3 3" />

      {/* Segment */}
      <line x1={mapX(-1)} y1={mapY(-3)} x2={mapX(2)} y2={mapY(3)} stroke={PRI} strokeWidth="2.8" />

      {/* Closed dot at (-1, -3) */}
      <circle cx={mapX(-1)} cy={mapY(-3)} r="4.8" fill={PRI} stroke={INK} strokeWidth="1.4" />
      <text x={mapX(-1) - 52} y={mapY(-3) + 4} fontSize="11" fontWeight="700" fill={INK}>(-1, -3)</text>

      {/* Open dot at (2, 3) */}
      <circle cx={mapX(2)} cy={mapY(3)} r="4.8" fill="#ffffff" stroke={PRI} strokeWidth="2.2" />
      <text x={mapX(2) + 8} y={mapY(3) + 4} fontSize="11" fontWeight="700" fill={PRI}>(2, 3) open</text>

      {/* Intercept labels */}
      <text x={mapX(-1) - 6} y={mapY(0) - 6} fontSize="10.5" fill={MUTED} fontFamily="monospace">-1</text>
      <text x={mapX(2) - 3} y={mapY(0) + 14} fontSize="10.5" fill={MUTED} fontFamily="monospace">2</text>
      <text x={mapX(0) + 6} y={mapY(3) + 4} fontSize="10.5" fill={MUTED} fontFamily="monospace">3</text>
      <text x={mapX(0) + 6} y={mapY(-3) + 4} fontSize="10.5" fill={MUTED} fontFamily="monospace">-3</text>
    </svg>
  );
};

const CompositeMappingSvg: React.FC = () => (
  <svg viewBox="0 0 430 155" className="w-full h-auto" role="img" aria-label="Composite mapping diagram for fg(x)">
    <ArrowDefs />
    {/* Dg */}
    <ellipse cx="66" cy="84" rx="40" ry="50" fill={PRI_SOFT} fillOpacity="0.65" stroke={PRI} strokeWidth="1.6" />
    <text x="66" y="24" textAnchor="middle" fontSize="11.5" fontWeight="700" fill={INK}>Domain g</text>
    <circle cx="66" cy="84" r="3.5" fill={INK} />
    <text x="66" y="102" textAnchor="middle" fontSize="11.5" fontWeight="700" fill={INK}>x</text>

    {/* Rg inside Df */}
    <ellipse cx="215" cy="84" rx="54" ry="56" fill={ACC_SOFT} fillOpacity="0.55" stroke={ACC} strokeWidth="1.6" />
    <ellipse cx="215" cy="84" rx="34" ry="34" fill="#fff" stroke={PRI} strokeWidth="1.4" strokeDasharray="4 3" />
    <text x="215" y="20" textAnchor="middle" fontSize="11" fontWeight="700" fill={INK}>Rg ⊆ Df</text>
    <circle cx="215" cy="84" r="3.5" fill={INK} />
    <text x="215" y="102" textAnchor="middle" fontSize="11" fontWeight="700" fill={INK}>g(x)</text>

    {/* Rf */}
    <ellipse cx="364" cy="84" rx="44" ry="50" fill={EMERALD_SOFT} fillOpacity="0.6" stroke={EMERALD} strokeWidth="1.6" />
    <text x="364" y="24" textAnchor="middle" fontSize="11.5" fontWeight="700" fill={INK}>Range f</text>
    <circle cx="364" cy="84" r="3.5" fill={INK} />
    <text x="364" y="102" textAnchor="middle" fontSize="11" fontWeight="700" fill={EMERALD}>fg(x)</text>

    {/* Arrows */}
    <path d="M 76 76 Q 140 42 205 76" fill="none" stroke={PRI} strokeWidth="1.8" markerEnd="url(#p1-arrow-pri)" />
    <text x="140" y="52" textAnchor="middle" fontSize="12" fontWeight="700" fill={PRI}>g</text>

    <path d="M 225 76 Q 290 42 354 76" fill="none" stroke={EMERALD} strokeWidth="1.8" markerEnd="url(#p1-arrow-emerald)" />
    <text x="290" y="52" textAnchor="middle" fontSize="12" fontWeight="700" fill={EMERALD}>f</text>

    <path d="M 74 96 Q 215 154 356 96" fill="none" stroke={INK} strokeWidth="1.6" strokeDasharray="4 3" markerEnd="url(#p1-arrow-ink)" />
    <text x="215" y="148" textAnchor="middle" fontSize="11" fontWeight="700" fill={INK}>fg(x) = f(g(x))</text>
  </svg>
);

const InverseMappingSvg: React.FC = () => (
  <svg viewBox="0 0 380 155" className="w-full h-auto" role="img" aria-label="Inverse mapping loop between f and f^-1">
    <ArrowDefs />
    <ellipse cx="86" cy="78" rx="48" ry="48" fill={PRI_SOFT} fillOpacity="0.65" stroke={PRI} strokeWidth="1.6" />
    <text x="86" y="68" textAnchor="middle" fontSize="11.5" fontWeight="700" fill={INK}>Df</text>
    <text x="86" y="88" textAnchor="middle" fontSize="11" fontWeight="600" fill={PRI}>= Rf⁻¹</text>

    <ellipse cx="294" cy="78" rx="48" ry="48" fill={EMERALD_SOFT} fillOpacity="0.65" stroke={EMERALD} strokeWidth="1.6" />
    <text x="294" y="68" textAnchor="middle" fontSize="11.5" fontWeight="700" fill={INK}>Rf</text>
    <text x="294" y="88" textAnchor="middle" fontSize="11" fontWeight="600" fill={EMERALD}>= Df⁻¹</text>

    <path d="M 134 56 Q 190 20 246 56" fill="none" stroke={PRI} strokeWidth="2" markerEnd="url(#p1-arrow-pri)" />
    <text x="190" y="26" textAnchor="middle" fontSize="12" fontWeight="700" fill={PRI}>f</text>

    <path d="M 246 100 Q 190 136 134 100" fill="none" stroke={EMERALD} strokeWidth="2" markerEnd="url(#p1-arrow-emerald)" />
    <text x="190" y="138" textAnchor="middle" fontSize="12" fontWeight="700" fill={EMERALD}>f⁻¹</text>
  </svg>
);

const HorizontalLineTestSvg: React.FC = () => (
  <svg viewBox="0 0 460 155" className="w-full h-auto" role="img" aria-label="Horizontal Line Test on cubic, sine, and parabola curves">
    {/* 1. Cubic */}
    <g transform="translate(8, 8)">
      <rect x="0" y="0" width="140" height="138" rx="10" fill="#F8FAFC" stroke={GRID} strokeWidth="1.2" />
      <line x1="15" y1="70" x2="125" y2="70" stroke={INK} strokeWidth="1.1" />
      <line x1="70" y1="115" x2="70" y2="14" stroke={INK} strokeWidth="1.1" />
      <path d="M 32 108 C 58 95, 82 45, 108 24" fill="none" stroke={EMERALD} strokeWidth="2.3" />
      <line x1="18" y1="52" x2="122" y2="52" stroke={PRI} strokeWidth="1.4" strokeDasharray="4 3" />
      <circle cx="80" cy="52" r="3.6" fill={PRI} stroke={INK} strokeWidth="1.1" />
      <text x="70" y="128" textAnchor="middle" fontSize="10" fontWeight="700" fill={EMERALD}>Has inverse (1-1)</text>
    </g>
    {/* 2. Sine wave */}
    <g transform="translate(160, 8)">
      <rect x="0" y="0" width="140" height="138" rx="10" fill="#F8FAFC" stroke={GRID} strokeWidth="1.2" />
      <line x1="12" y1="68" x2="128" y2="68" stroke={INK} strokeWidth="1.1" />
      <line x1="70" y1="110" x2="70" y2="16" stroke={INK} strokeWidth="1.1" />
      <path d="M 16 68 Q 34 26 52 68 T 88 68 T 124 68" fill="none" stroke={ROSE} strokeWidth="2.2" />
      <line x1="12" y1="50" x2="128" y2="50" stroke={PRI} strokeWidth="1.4" strokeDasharray="4 3" />
      <circle cx="27" cy="50" r="3.2" fill={ROSE} />
      <circle cx="41" cy="50" r="3.2" fill={ROSE} />
      <circle cx="99" cy="50" r="3.2" fill={ROSE} />
      <circle cx="113" cy="50" r="3.2" fill={ROSE} />
      <text x="70" y="128" textAnchor="middle" fontSize="9.5" fontWeight="700" fill={ROSE}>Restrict domain first</text>
    </g>
    {/* 3. Parabola */}
    <g transform="translate(312, 8)">
      <rect x="0" y="0" width="140" height="138" rx="10" fill="#F8FAFC" stroke={GRID} strokeWidth="1.2" />
      <line x1="14" y1="95" x2="126" y2="95" stroke={INK} strokeWidth="1.1" />
      <line x1="70" y1="112" x2="70" y2="16" stroke={INK} strokeWidth="1.1" />
      <path d="M 28 24 Q 70 150 112 24" fill="none" stroke={ROSE} strokeWidth="2.3" />
      <line x1="16" y1="54" x2="124" y2="54" stroke={PRI} strokeWidth="1.4" strokeDasharray="4 3" />
      <circle cx="39.6" cy="54" r="3.4" fill={ROSE} />
      <circle cx="100.4" cy="54" r="3.4" fill={ROSE} />
      <text x="70" y="128" textAnchor="middle" fontSize="9.5" fontWeight="700" fill={ROSE}>Restrict x ≥ h or x ≤ h</text>
    </g>
  </svg>
);

const InverseReflectionSvg: React.FC = () => {
  // Reflect y = (x + 2)/2 and y = 2x - 2 across y = x (centred at 180, 120)
  const mapX = (x: number) => 160 + x * 30;
  const mapY = (y: number) => 125 - y * 24;
  return (
    <svg viewBox="0 0 380 225" className="w-full h-auto" role="img" aria-label="Reflection of f(x) and f^-1(x) in y = x">
      <ArrowDefs />
      <line x1="30" y1={mapY(0)} x2="355" y2={mapY(0)} stroke={INK} strokeWidth="1.3" markerEnd="url(#p1-arrow-ink)" />
      <line x1={mapX(0)} y1="212" x2={mapX(0)} y2="14" stroke={INK} strokeWidth="1.3" markerEnd="url(#p1-arrow-ink)" />
      <text x="352" y={mapY(0) - 6} fontSize="11.5" fontWeight="700" fill={INK}>x</text>
      <text x={mapX(0) + 7} y="22" fontSize="11.5" fontWeight="700" fill={INK}>y</text>

      {/* Mirror line y = x */}
      <line x1={mapX(-3.2)} y1={mapY(-3.2)} x2={mapX(4.2)} y2={mapY(4.2)} stroke={MUTED} strokeWidth="1.6" strokeDasharray="5 4" />
      <text x={mapX(3.7)} y={mapY(3.7) - 8} fontSize="11" fontWeight="700" fill={MUTED}>y = x</text>

      {/* f(x) = 2x - 1 */}
      <line x1={mapX(-1.5)} y1={mapY(-4)} x2={mapX(2.6)} y2={mapY(4.2)} stroke={PRI} strokeWidth="2.4" />
      <text x={mapX(2.4) - 54} y={mapY(4.0)} fontSize="11" fontWeight="700" fill={PRI}>y = f(x)</text>

      {/* f^-1(x) = (x+1)/2 */}
      <line x1={mapX(-4)} y1={mapY(-1.5)} x2={mapX(4.6)} y2={mapY(2.8)} stroke={EMERALD} strokeWidth="2.4" />
      <text x={mapX(4.7)} y={mapY(2.8) + 4} fontSize="11" fontWeight="700" fill={EMERALD}>y = f⁻¹(x)</text>

      {/* Sample pair (2, 3) <-> (3, 2) */}
      <line x1={mapX(2)} y1={mapY(3)} x2={mapX(3)} y2={mapY(2)} stroke={ACC} strokeWidth="1.3" strokeDasharray="3 2" />
      <circle cx={mapX(2)} cy={mapY(3)} r="3.8" fill={PRI} stroke={INK} strokeWidth="1.2" />
      <circle cx={mapX(3)} cy={mapY(2)} r="3.8" fill={EMERALD} stroke={INK} strokeWidth="1.2" />
      <text x={mapX(2) - 36} y={mapY(3) - 6} fontSize="10.5" fontWeight="600" fill={INK}>(a, b)</text>
      <text x={mapX(3) - 8} y={mapY(2) + 19} fontSize="10.5" fontWeight="600" fill={INK}>(b, a)</text>
    </svg>
  );
};

const CoordMidpointDistanceSvg: React.FC = () => (
  <svg viewBox="0 0 380 215" className="w-full h-auto" role="img" aria-label="Distance |AB|, midpoint M, rise/run gradient, and perpendicular bisector">
    <ArrowDefs />
    {/* Axes */}
    <line x1="25" y1="185" x2="355" y2="185" stroke={INK} strokeWidth="1.3" markerEnd="url(#p1-arrow-ink)" />
    <line x1="45" y1="198" x2="45" y2="16" stroke={INK} strokeWidth="1.3" markerEnd="url(#p1-arrow-ink)" />

    {/* Right-triangle rise/run */}
    <line x1="95" y1="150" x2="295" y2="150" stroke={MUTED} strokeWidth="1.4" strokeDasharray="4 4" />
    <line x1="295" y1="150" x2="295" y2="50" stroke={MUTED} strokeWidth="1.4" strokeDasharray="4 4" />
    <text x="195" y="167" textAnchor="middle" fontSize="11" fontWeight="600" fill={MUTED}>run = x₂ − x₁</text>
    <text x="303" y="104" fontSize="11" fontWeight="600" fill={MUTED}>rise = y₂ − y₁</text>

    {/* Segment AB */}
    <line x1="95" y1="150" x2="295" y2="50" stroke={PRI} strokeWidth="2.8" />

    {/* Perpendicular bisector through M(195, 100): slope of AB is -100/200 = -0.5 -> perp slope is +2 */}
    <line x1="152" y1="186" x2="238" y2="14" stroke={EMERALD} strokeWidth="2" strokeDasharray="5 3" />
    <text x="242" y="28" fontSize="11" fontWeight="700" fill={EMERALD}>Perp bisector (m⊥ = −1/m)</text>

    {/* Right angle box at M */}
    <path d="M 195 100 L 204 95.5 L 208.5 104.5 L 199.5 109" fill="none" stroke={INK} strokeWidth="1.2" />

    {/* Points A, B, M */}
    <circle cx="95" cy="150" r="4.5" fill={PRI} stroke={INK} strokeWidth="1.3" />
    <text x="58" y="144" fontSize="11" fontWeight="700" fill={INK}>A(x₁, y₁)</text>

    <circle cx="295" cy="50" r="4.5" fill={PRI} stroke={INK} strokeWidth="1.3" />
    <text x="302" y="47" fontSize="11" fontWeight="700" fill={INK}>B(x₂, y₂)</text>

    <circle cx="195" cy="100" r="4.8" fill={ACC} stroke={INK} strokeWidth="1.4" />
    <text x="108" y="88" fontSize="11" fontWeight="700" fill={ACC}>M (midpoint)</text>
  </svg>
);

const CircleDiameterSvg: React.FC = () => (
  <svg viewBox="0 0 360 220" className="w-full h-auto" role="img" aria-label="Circle with diameter AB, centre M(a,b), and radius r">
    <circle cx="180" cy="110" r="78" fill={PRI_SOFT} fillOpacity="0.32" stroke={PRI} strokeWidth="2.6" />
    {/* Diameter AB at angle */}
    <line x1="112" y1="149" x2="248" y2="71" stroke={INK} strokeWidth="2" />
    {/* Right-angle tangent indicator / radius label */}
    <circle cx="112" cy="149" r="4.2" fill={PRI} stroke={INK} strokeWidth="1.3" />
    <text x="56" y="164" fontSize="11.5" fontWeight="700" fill={INK}>A(x₁, y₁)</text>

    <circle cx="248" cy="71" r="4.2" fill={PRI} stroke={INK} strokeWidth="1.3" />
    <text x="255" y="67" fontSize="11.5" fontWeight="700" fill={INK}>B(x₂, y₂)</text>

    <circle cx="180" cy="110" r="4.8" fill={ACC} stroke={INK} strokeWidth="1.4" />
    <text x="174" y="132" fontSize="11.5" fontWeight="700" fill={ACC}>M(a, b)</text>

    <text x="142" y="118" fontSize="11.5" fontWeight="700" fill={PRI}>r</text>
    <text x="216" y="80" fontSize="11.5" fontWeight="700" fill={PRI}>r</text>
    <text x="180" y="208" textAnchor="middle" fontSize="11" fontWeight="700" fill={INK}>(x − a)² + (y − b)² = r²</text>
  </svg>
);

const AngleConversionSvg: React.FC = () => (
  <svg viewBox="0 0 380 140" className="w-full h-auto" role="img" aria-label="Converting degrees and radians">
    <ArrowDefs />
    <rect x="28" y="48" width="96" height="44" rx="12" fill={PRI_SOFT} stroke={PRI} strokeWidth="1.8" />
    <text x="76" y="75" textAnchor="middle" fontSize="14" fontWeight="700" fill={INK}>deg (°)</text>

    <rect x="256" y="48" width="96" height="44" rx="12" fill={EMERALD_SOFT} stroke={EMERALD} strokeWidth="1.8" />
    <text x="304" y="75" textAnchor="middle" fontSize="14" fontWeight="700" fill={INK}>rad</text>

    {/* Top curved arrow: deg -> rad */}
    <path d="M 124 52 Q 190 12 252 52" fill="none" stroke={PRI} strokeWidth="2.2" markerEnd="url(#p1-arrow-pri)" />
    <text x="190" y="22" textAnchor="middle" fontSize="12.5" fontWeight="700" fill={PRI}>× π / 180°</text>

    {/* Bottom curved arrow: rad -> deg */}
    <path d="M 256 88 Q 190 128 128 88" fill="none" stroke={EMERALD} strokeWidth="2.2" markerEnd="url(#p1-arrow-emerald)" />
    <text x="190" y="130" textAnchor="middle" fontSize="12.5" fontWeight="700" fill={EMERALD}>× 180° / π</text>
  </svg>
);

const CircularSectorSegmentSvg: React.FC = () => {
  // Centre O=(88, 120), radius R=145, angle theta from -28 deg to +32 deg
  // A=(88 + 145*cos(-34deg), 120 + 145*sin(-34deg)) = (208.2, 38.9)
  // B=(88 + 145*cos(26deg), 120 + 145*sin(26deg)) = (218.3, 183.6)
  const ox = 82;
  const oy = 115;
  const ax = 212;
  const ay = 34;
  const bx = 224;
  const by = 180;
  // Verify distances: sqrt((212-82)^2 + (34-115)^2) = sqrt(16900+6561)=153.17
  // Let's compute exact points for radius R=152 at -32deg and +28deg:
  const R = 150;
  const a1 = (-32 * Math.PI) / 180;
  const a2 = (28 * Math.PI) / 180;
  const pAx = ox + R * Math.cos(a1);
  const pAy = oy + R * Math.sin(a1);
  const pBx = ox + R * Math.cos(a2);
  const pBy = oy + R * Math.sin(a2);

  return (
    <svg viewBox="0 0 360 220" className="w-full h-auto" role="img" aria-label="Sector AOB and shaded minor segment">
      {/* Shaded minor segment between chord AB and arc AB */}
      <path
        d={`M ${pAx.toFixed(1)} ${pAy.toFixed(1)} A ${R} ${R} 0 0 1 ${pBx.toFixed(1)} ${pBy.toFixed(1)} Z`}
        fill={ACC_SOFT}
        stroke="none"
      />
      {/* Radii OA, OB and chord AB */}
      <line x1={ox} y1={oy} x2={pAx} y2={pAy} stroke={INK} strokeWidth="2" />
      <line x1={ox} y1={oy} x2={pBx} y2={pBy} stroke={INK} strokeWidth="2" />
      <line x1={pAx} y1={pAy} x2={pBx} y2={pBy} stroke={ACC} strokeWidth="2" />
      {/* Arc AB */}
      <path
        d={`M ${pAx.toFixed(1)} ${pAy.toFixed(1)} A ${R} ${R} 0 0 1 ${pBx.toFixed(1)} ${pBy.toFixed(1)}`}
        fill="none"
        stroke={PRI}
        strokeWidth="3"
      />

      {/* Angle arc */}
      <path
        d={`M ${(ox + 34 * Math.cos(a1)).toFixed(1)} ${(oy + 34 * Math.sin(a1)).toFixed(1)} A 34 34 0 0 1 ${(ox + 34 * Math.cos(a2)).toFixed(1)} ${(oy + 34 * Math.sin(a2)).toFixed(1)}`}
        fill="none"
        stroke={EMERALD}
        strokeWidth="1.8"
      />
      <text x={ox + 42} y={oy + 3} fontSize="13" fontWeight="700" fill={EMERALD}>θ rad</text>

      {/* Vertex Labels */}
      <circle cx={ox} cy={oy} r="3.8" fill={INK} />
      <text x={ox - 18} y={oy + 4} fontSize="12" fontWeight="700" fill={INK}>O</text>

      <circle cx={pAx} cy={pAy} r="3.8" fill={PRI} stroke={INK} strokeWidth="1.2" />
      <text x={pAx + 6} y={pAy - 4} fontSize="12" fontWeight="700" fill={INK}>A</text>

      <circle cx={pBx} cy={pBy} r="3.8" fill={PRI} stroke={INK} strokeWidth="1.2" />
      <text x={pBx + 6} y={pBy + 12} fontSize="12" fontWeight="700" fill={INK}>B</text>

      <text x="136" y="66" fontSize="12" fontWeight="700" fill={INK}>r</text>
      <text x="136" y="166" fontSize="12" fontWeight="700" fill={INK}>r</text>
      <text x="242" y="108" fontSize="11.5" fontWeight="700" fill={PRI}>Arc = rθ</text>
      <text x="242" y="128" fontSize="10.5" fontWeight="700" fill={ACC}>Shaded segment</text>
      <text x="242" y="143" fontSize="10.5" fontWeight="600" fill={INK}>½r²(θ − sin θ)</text>
      {void ax}
      {void ay}
      {void bx}
      {void by}
    </svg>
  );
};

const TrigWavesSvg: React.FC = () => {
  // Two panels: top sin(x) and cos(x) on [0, 2pi]; bottom tan(x) on [0, 2pi]
  const mapX = (rad: number) => 42 + (rad / (2 * Math.PI)) * 375;
  const sinPts: string[] = [];
  const cosPts: string[] = [];
  for (let i = 0; i <= 72; i += 1) {
    const x = (i / 72) * 2 * Math.PI;
    const sx = mapX(x);
    sinPts.push(`${i === 0 ? 'M' : 'L'} ${sx.toFixed(1)} ${(108 - Math.sin(x) * 58).toFixed(1)}`);
    cosPts.push(`${i === 0 ? 'M' : 'L'} ${sx.toFixed(1)} ${(108 - Math.cos(x) * 58).toFixed(1)}`);
  }

  return (
    <svg viewBox="0 0 450 205" className="w-full h-auto" role="img" aria-label="Graphs of y = sin x and y = cos x on [0, 2pi]">
      <ArrowDefs />
      {/* Axes */}
      <line x1="30" y1="108" x2="432" y2="108" stroke={INK} strokeWidth="1.4" markerEnd="url(#p1-arrow-ink)" />
      <line x1="42" y1="186" x2="42" y2="20" stroke={INK} strokeWidth="1.4" markerEnd="url(#p1-arrow-ink)" />
      <text x="428" y="101" fontSize="11" fontWeight="700" fill={INK}>x</text>
      <text x="49" y="27" fontSize="11" fontWeight="700" fill={INK}>y</text>

      {/* Amplitude guide lines y = 1 and y = -1 */}
      <line x1="42" y1="50" x2="417" y2="50" stroke={GRID} strokeWidth="1.1" strokeDasharray="4 4" />
      <line x1="42" y1="166" x2="417" y2="166" stroke={GRID} strokeWidth="1.1" strokeDasharray="4 4" />
      <text x="24" y="54" fontSize="10.5" fontWeight="600" fill={MUTED}>1</text>
      <text x="19" y="170" fontSize="10.5" fontWeight="600" fill={MUTED}>−1</text>

      {/* Quarter-period ticks */}
      {[
        { r: Math.PI / 2, lbl: 'π/2' },
        { r: Math.PI, lbl: 'π' },
        { r: (3 * Math.PI) / 2, lbl: '3π/2' },
        { r: 2 * Math.PI, lbl: '2π' },
      ].map((t) => (
        <g key={t.lbl}>
          <line x1={mapX(t.r)} y1="104" x2={mapX(t.r)} y2="112" stroke={INK} strokeWidth="1.2" />
          <line x1={mapX(t.r)} y1="42" x2={mapX(t.r)} y2="174" stroke={GRID} strokeWidth="0.9" />
          <text x={mapX(t.r)} y="196" textAnchor="middle" fontSize="10.5" fontWeight="600" fill={MUTED}>{t.lbl}</text>
        </g>
      ))}

      {/* Waves */}
      <path d={sinPts.join(' ')} fill="none" stroke={PRI} strokeWidth="2.5" strokeLinecap="round" />
      <path d={cosPts.join(' ')} fill="none" stroke={EMERALD} strokeWidth="2.4" strokeDasharray="6 3" strokeLinecap="round" />

      {/* Legend */}
      <rect x="276" y="14" width="152" height="24" rx="7" fill="#F8FAFC" stroke={GRID} strokeWidth="1.1" />
      <line x1="284" y1="26" x2="302" y2="26" stroke={PRI} strokeWidth="2.5" />
      <text x="307" y="30" fontSize="10.5" fontWeight="700" fill={PRI}>sin x</text>
      <line x1="348" y1="26" x2="366" y2="26" stroke={EMERALD} strokeWidth="2.4" strokeDasharray="5 2" />
      <text x="371" y="30" fontSize="10.5" fontWeight="700" fill={EMERALD}>cos x</text>
    </svg>
  );
};

const AstcUnitCircleSvg: React.FC = () => {
  const cx = 190;
  const cy = 114;
  const R = 74;
  const ang = -Math.PI / 5; // 36 deg in Q1
  const px = cx + R * Math.cos(ang);
  const py = cy + R * Math.sin(ang);

  return (
    <svg viewBox="0 0 380 228" className="w-full h-auto" role="img" aria-label="ASTC unit circle quadrants and angle symmetry">
      <ArrowDefs />
      {/* Quadrant tints */}
      <rect x={cx} y={cy - R - 12} width={R + 28} height={R + 12} fill={EMERALD_SOFT} fillOpacity="0.28" rx="6" />
      <rect x={cx - R - 28} y={cy - R - 12} width={R + 28} height={R + 12} fill={PRI_SOFT} fillOpacity="0.28" rx="6" />
      <rect x={cx - R - 28} y={cy} width={R + 28} height={R + 12} fill={ACC_SOFT} fillOpacity="0.28" rx="6" />
      <rect x={cx} y={cy} width={R + 28} height={R + 12} fill={ROSE_SOFT} fillOpacity="0.25" rx="6" />

      {/* Axes */}
      <line x1="44" y1={cy} x2="338" y2={cy} stroke={INK} strokeWidth="1.4" markerEnd="url(#p1-arrow-ink)" />
      <line x1={cx} y1="212" x2={cx} y2="16" stroke={INK} strokeWidth="1.4" markerEnd="url(#p1-arrow-ink)" />

      {/* Unit Circle */}
      <circle cx={cx} cy={cy} r={R} fill="none" stroke={INK} strokeWidth="1.8" />

      {/* Radius vector in Q1 */}
      <line x1={cx} y1={cy} x2={px} y2={py} stroke={PRI} strokeWidth="2.2" />
      <line x1={px} y1={cy} x2={px} y2={py} stroke={ROSE} strokeWidth="1.6" strokeDasharray="3 2" />
      <circle cx={px} cy={py} r="3.8" fill={PRI} stroke={INK} strokeWidth="1.2" />
      <text x={px + 6} y={py - 4} fontSize="10" fontWeight="700" fill={INK}>(cos θ, sin θ)</text>

      {/* Quadrant ASTC labels */}
      <text x={cx + 56} y={cy - 54} fontSize="12" fontWeight="800" fill={EMERALD}>A (All +)</text>
      <text x={cx + 56} y={cy - 40} fontSize="9.5" fontWeight="600" fill={MUTED}>α</text>

      <text x={cx - 98} y={cy - 54} fontSize="12" fontWeight="800" fill={PRI}>S (sin +)</text>
      <text x={cx - 98} y={cy - 40} fontSize="9.5" fontWeight="600" fill={MUTED}>π − α</text>

      <text x={cx - 98} y={cy + 58} fontSize="12" fontWeight="800" fill={ACC}>T (tan +)</text>
      <text x={cx - 98} y={cy + 72} fontSize="9.5" fontWeight="600" fill={MUTED}>π + α</text>

      <text x={cx + 48} y={cy + 58} fontSize="12" fontWeight="800" fill={ROSE}>C (cos +)</text>
      <text x={cx + 48} y={cy + 72} fontSize="9.5" fontWeight="600" fill={MUTED}>2π − α</text>
    </svg>
  );
};

const PascalBinomialSvg: React.FC = () => (
  <svg viewBox="0 0 460 205" className="w-full h-auto" role="img" aria-label="Pascal's Triangle and binomial expansion terms">
    <rect x="8" y="8" width="248" height="189" rx="10" fill="#F8FAFC" stroke={GRID} strokeWidth="1.2" />
    <text x="132" y="27" textAnchor="middle" fontSize="11" fontWeight="700" fill={PRI}>Binomial Expansions (n = 0 to 4)</text>
    <text x="20" y="52" fontSize="10.5" fontWeight="600" fill={INK}>(a + b)⁰ = 1</text>
    <text x="20" y="82" fontSize="10.5" fontWeight="600" fill={INK}>(a + b)¹ = a + b</text>
    <text x="20" y="112" fontSize="10.5" fontWeight="600" fill={INK}>(a + b)² = a² + 2ab + b²</text>
    <text x="20" y="142" fontSize="10.5" fontWeight="600" fill={INK}>(a + b)³ = a³ + 3a²b + 3ab² + b³</text>
    <text x="20" y="172" fontSize="10" fontWeight="600" fill={INK}>(a + b)⁴ = a⁴ + 4a³b + 6a²b² + 4ab³ + b⁴</text>

    <rect x="268" y="8" width="184" height="189" rx="10" fill={PRI_SOFT} fillOpacity="0.35" stroke={PRI} strokeWidth="1.3" />
    <text x="360" y="27" textAnchor="middle" fontSize="11" fontWeight="700" fill={PRI}>Pascal’s Triangle (ⁿCᵣ)</text>
    <text x="360" y="52" textAnchor="middle" fontSize="11.5" fontWeight="700" fill={INK} fontFamily="monospace">1</text>
    <text x="360" y="82" textAnchor="middle" fontSize="11.5" fontWeight="700" fill={INK} fontFamily="monospace">1   1</text>
    <text x="360" y="112" textAnchor="middle" fontSize="11.5" fontWeight="700" fill={INK} fontFamily="monospace">1   2   1</text>
    <text x="360" y="142" textAnchor="middle" fontSize="11.5" fontWeight="700" fill={INK} fontFamily="monospace">1   3   3   1</text>
    <text x="360" y="172" textAnchor="middle" fontSize="11.5" fontWeight="700" fill={EMERALD} fontFamily="monospace">1   4   6   4   1</text>
  </svg>
);

const ApGpSeriesSvg: React.FC = () => (
  <svg viewBox="0 0 460 165" className="w-full h-auto" role="img" aria-label="Arithmetic Progression linear step vs Geometric Progression S_infinity">
    <ArrowDefs />
    {/* Left: AP linear */}
    <g transform="translate(8, 8)">
      <rect x="0" y="0" width="216" height="149" rx="10" fill="#F8FAFC" stroke={GRID} strokeWidth="1.2" />
      <text x="108" y="19" textAnchor="middle" fontSize="11" fontWeight="700" fill={PRI}>Arithmetic (AP): +d each step</text>
      <line x1="22" y1="120" x2="196" y2="120" stroke={INK} strokeWidth="1.2" markerEnd="url(#p1-arrow-ink)" />
      <line x1="30" y1="126" x2="30" y2="32" stroke={INK} strokeWidth="1.2" markerEnd="url(#p1-arrow-ink)" />
      {[0, 1, 2, 3, 4].map((i) => {
        const x = 44 + i * 32;
        const y = 104 - i * 16;
        return (
          <g key={i}>
            {i < 4 && (
              <>
                <line x1={x} y1={y} x2={x + 32} y2={y} stroke={MUTED} strokeWidth="1" strokeDasharray="2 2" />
                <line x1={x + 32} y1={y} x2={x + 32} y2={y - 16} stroke={EMERALD} strokeWidth="1.4" />
              </>
            )}
            <circle cx={x} cy={y} r="3.6" fill={PRI} stroke={INK} strokeWidth="1.1" />
          </g>
        );
      })}
      <text x="115" y="138" textAnchor="middle" fontSize="10" fontWeight="600" fill={INK}>uₙ = a + (n−1)d · uₙ = Sₙ − Sₙ₋₁</text>
    </g>

    {/* Right: GP S_infinity */}
    <g transform="translate(236, 8)">
      <rect x="0" y="0" width="216" height="149" rx="10" fill="#F8FAFC" stroke={GRID} strokeWidth="1.2" />
      <text x="108" y="19" textAnchor="middle" fontSize="11" fontWeight="700" fill={EMERALD}>Geometric (GP): |r| &lt; 1 ⇒ S∞</text>
      <line x1="22" y1="120" x2="196" y2="120" stroke={INK} strokeWidth="1.2" markerEnd="url(#p1-arrow-ink)" />
      <line x1="30" y1="126" x2="30" y2="32" stroke={INK} strokeWidth="1.2" markerEnd="url(#p1-arrow-ink)" />
      <line x1="30" y1="44" x2="194" y2="44" stroke={ACC} strokeWidth="1.4" strokeDasharray="4 3" />
      <text x="166" y="38" fontSize="9.5" fontWeight="700" fill={ACC}>S∞ = a/(1−r)</text>
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const x = 42 + i * 26;
        const partial = 1 - Math.pow(0.55, i + 1);
        const y = 118 - partial * 74;
        return <circle key={i} cx={x} cy={y} r="3.5" fill={EMERALD} stroke={INK} strokeWidth="1.1" />;
      })}
      <text x="112" y="138" textAnchor="middle" fontSize="10" fontWeight="600" fill={INK}>uₙ = arⁿ⁻¹ · |r| &lt; 1 converges</text>
    </g>
  </svg>
);

const TangentNormalSvg: React.FC = () => {
  // Parabola y = 0.025(x - 120)^2 + 52 (screen coords) -> vertex at (120, 52)? Let's use downward arch or upward curve
  // Let curve be f(x) = 175 - 0.0085*(x - 160)^2 (inverted arch) -> stationary max at (160, 48)? Wait: 175 - 0.0085*(0) = 175!
  // Let's use y = 55 + 0.0045*(x - 140)^2? Wait let's do standard smooth cubic/arch: screenY = 175 - 115 * exp-like or upward parabola:
  // Upward curve y = 165 - 0.004 * (x - 80)^2? Wait at x=80 y=165, at x=280 y=165 - 160 = 5 (too steep).
  // Use y(x) = 175 - 0.5*(x - 50) + 0.0018*(x - 50)^2? Wait let's use simple downward parabola (max at x=130, y=58):
  // screenY = 58 + 0.006 * (x - 130)^2.
  const f = (x: number) => 58 + 0.006 * (x - 130) * (x - 130);
  const df = (x: number) => 0.012 * (x - 130);
  const pts: string[] = [];
  for (let x = 38; x <= 285; x += 6) {
    pts.push(`${pts.length === 0 ? 'M' : 'L'} ${x} ${f(x).toFixed(1)}`);
  }
  const px = 225;
  const py = f(px); // 58 + 0.006 * 95^2 = 58 + 54.15 = 112.15
  const m = df(px); // 0.012 * 95 = 1.14
  const nSlope = -1 / m; // -0.877

  return (
    <svg viewBox="0 0 400 215" className="w-full h-auto" role="img" aria-label="Stationary point dy/dx = 0, tangent m, and normal -1/m">
      <ArrowDefs />
      <line x1="25" y1="190" x2="375" y2="190" stroke={INK} strokeWidth="1.3" markerEnd="url(#p1-arrow-ink)" />
      <line x1="40" y1="202" x2="40" y2="14" stroke={INK} strokeWidth="1.3" markerEnd="url(#p1-arrow-ink)" />

      {/* Curve */}
      <path d={pts.join(' ')} fill="none" stroke={PRI} strokeWidth="2.6" strokeLinecap="round" />

      {/* Stationary point tangent at x=130, y=58 */}
      <line x1="72" y1="58" x2="188" y2="58" stroke={ACC} strokeWidth="1.8" strokeDasharray="5 3" />
      <circle cx="130" cy="58" r="4.2" fill={ACC} stroke={INK} strokeWidth="1.2" />
      <text x="130" y="42" textAnchor="middle" fontSize="10.5" fontWeight="700" fill={ACC}>Stationary point (dy/dx = 0)</text>

      {/* Tangent at (px, py) */}
      <line x1={px - 52} y1={py - 52 * m} x2={px + 55} y2={py + 55 * m} stroke={ROSE} strokeWidth="2.1" />
      <text x={px + 58} y={py + 55 * m + 4} fontSize="10.5" fontWeight="700" fill={ROSE}>Tangent (m)</text>

      {/* Normal at (px, py) */}
      <line x1={px - 55} y1={py - 55 * nSlope} x2={px + 65} y2={py + 65 * nSlope} stroke={EMERALD} strokeWidth="2.1" strokeDasharray="5 3" />
      <text x={px + 68} y={py + 65 * nSlope + 4} fontSize="10.5" fontWeight="700" fill={EMERALD}>Normal (−1/m)</text>

      <circle cx={px} cy={py} r="4.4" fill={PRI} stroke={INK} strokeWidth="1.3" />
      <text x={px - 12} y={py + 3} textAnchor="end" fontSize="10.5" fontWeight="700" fill={INK}>P(x₁, y₁)</text>
    </svg>
  );
};

const StationaryFdtSdtSvg: React.FC = () => (
  <svg viewBox="0 0 460 175" className="w-full h-auto" role="img" aria-label="First Derivative Test sign table and Second Derivative Test concavity">
    {/* Left: 1st Derivative Test (FDT) */}
    <g transform="translate(8, 8)">
      <rect x="0" y="0" width="218" height="159" rx="10" fill="#F8FAFC" stroke={GRID} strokeWidth="1.2" />
      <text x="109" y="20" textAnchor="middle" fontSize="11" fontWeight="700" fill={PRI}>1st Derivative Test (FDT)</text>
      <text x="64" y="46" textAnchor="middle" fontSize="12" fontWeight="800" fill={EMERALD}>+</text>
      <text x="114" y="46" textAnchor="middle" fontSize="12" fontWeight="800" fill={ROSE}>−</text>
      <text x="172" y="46" textAnchor="middle" fontSize="10.5" fontWeight="700" fill={INK}>(max)</text>

      <text x="64" y="68" textAnchor="middle" fontSize="12" fontWeight="800" fill={ROSE}>−</text>
      <text x="114" y="68" textAnchor="middle" fontSize="12" fontWeight="800" fill={EMERALD}>+</text>
      <text x="172" y="68" textAnchor="middle" fontSize="10.5" fontWeight="700" fill={INK}>(min)</text>

      <text x="64" y="90" textAnchor="middle" fontSize="12" fontWeight="800" fill={EMERALD}>+</text>
      <text x="114" y="90" textAnchor="middle" fontSize="12" fontWeight="800" fill={EMERALD}>+</text>
      <text x="172" y="98" textAnchor="middle" fontSize="10" fontWeight="700" fill={MUTED}>(inflection)</text>

      <text x="64" y="110" textAnchor="middle" fontSize="12" fontWeight="800" fill={ROSE}>−</text>
      <text x="114" y="110" textAnchor="middle" fontSize="12" fontWeight="800" fill={ROSE}>−</text>

      <line x1="24" y1="126" x2="156" y2="126" stroke={INK} strokeWidth="2.2" />
      <circle cx="89" cy="126" r="4" fill={ROSE} stroke={INK} strokeWidth="1.1" />
      <text x="89" y="144" textAnchor="middle" fontSize="10.5" fontWeight="700" fill={ROSE}>s.p.</text>
      <text x="184" y="130" textAnchor="middle" fontSize="10.5" fontWeight="700" fill={INK}>dy/dx</text>
    </g>

    {/* Right: 2nd Derivative Test (SDT) */}
    <g transform="translate(236, 8)">
      <rect x="0" y="0" width="216" height="159" rx="10" fill="#F8FAFC" stroke={GRID} strokeWidth="1.2" />
      <text x="108" y="20" textAnchor="middle" fontSize="11" fontWeight="700" fill={EMERALD}>2nd Derivative Test (SDT)</text>

      {/* Max arch */}
      <path d="M 32 72 Q 62 32 92 72" fill="none" stroke={ROSE} strokeWidth="2.5" />
      <circle cx="62" cy="52" r="3.5" fill={ROSE} />
      <text x="148" y="52" textAnchor="middle" fontSize="10.5" fontWeight="700" fill={ROSE}>d²y/dx² &lt; 0</text>
      <text x="148" y="66" textAnchor="middle" fontSize="10" fontWeight="600" fill={INK}>Concave down (∩ max)</text>

      {/* Min cup */}
      <path d="M 32 104 Q 62 144 92 104" fill="none" stroke={EMERALD} strokeWidth="2.5" />
      <circle cx="62" cy="124" r="3.5" fill={EMERALD} />
      <text x="148" y="114" textAnchor="middle" fontSize="10.5" fontWeight="700" fill={EMERALD}>d²y/dx² &gt; 0</text>
      <text x="148" y="128" textAnchor="middle" fontSize="10" fontWeight="600" fill={INK}>Concave up (∪ min)</text>

      <text x="108" y="149" textAnchor="middle" fontSize="9.5" fontWeight="600" fill={MUTED}>If d²y/dx² = 0, use FDT sign change!</text>
    </g>
  </svg>
);

const AreaUnderCurvesSvg: React.FC = () => (
  <svg viewBox="0 0 460 250" className="w-full h-auto" role="img" aria-label="Four cases of area under and between curves with dx and dy">
    <ArrowDefs />
    {/* 1. Area under y = f(x) */}
    <g transform="translate(8, 8)">
      <rect x="0" y="0" width="216" height="113" rx="10" fill="#F8FAFC" stroke={GRID} strokeWidth="1.2" />
      <path d="M 46 92 L 46 42 Q 78 32 108 42 L 108 92 Z" fill={PRI_SOFT} fillOpacity="0.7" />
      <line x1="20" y1="92" x2="146" y2="92" stroke={INK} strokeWidth="1.3" markerEnd="url(#p1-arrow-ink)" />
      <line x1="30" y1="102" x2="30" y2="16" stroke={INK} strokeWidth="1.3" markerEnd="url(#p1-arrow-ink)" />
      <path d="M 32 45 Q 78 30 128 46" fill="none" stroke={EMERALD} strokeWidth="2.2" />
      <line x1="46" y1="41" x2="46" y2="92" stroke={ROSE} strokeWidth="1.3" strokeDasharray="3 3" />
      <line x1="108" y1="42" x2="108" y2="92" stroke={ROSE} strokeWidth="1.3" strokeDasharray="3 3" />
      <text x="77" y="72" textAnchor="middle" fontSize="11" fontWeight="700" fill={ROSE}>A</text>
      <text x="46" y="104" textAnchor="middle" fontSize="9.5" fill={INK}>a</text>
      <text x="108" y="104" textAnchor="middle" fontSize="9.5" fill={INK}>b</text>
      <text x="172" y="54" textAnchor="middle" fontSize="10.5" fontWeight="700" fill={INK}>A = ∫ f(x) dx</text>
      <text x="172" y="70" textAnchor="middle" fontSize="9.5" fill={MUTED}>from a to b</text>
    </g>

    {/* 2. Between y2 and y1 */}
    <g transform="translate(236, 8)">
      <rect x="0" y="0" width="216" height="113" rx="10" fill="#F8FAFC" stroke={GRID} strokeWidth="1.2" />
      <path d="M 46 38 Q 78 28 108 38 L 108 72 Q 78 66 46 74 Z" fill={ACC_SOFT} fillOpacity="0.8" />
      <line x1="20" y1="92" x2="146" y2="92" stroke={INK} strokeWidth="1.3" markerEnd="url(#p1-arrow-ink)" />
      <line x1="30" y1="102" x2="30" y2="16" stroke={INK} strokeWidth="1.3" markerEnd="url(#p1-arrow-ink)" />
      <path d="M 32 42 Q 78 26 128 42" fill="none" stroke={EMERALD} strokeWidth="2.1" />
      <path d="M 32 76 Q 78 64 128 74" fill="none" stroke={PRI} strokeWidth="2.1" />
      <line x1="46" y1="38" x2="46" y2="92" stroke={ROSE} strokeWidth="1.2" strokeDasharray="3 3" />
      <line x1="108" y1="38" x2="108" y2="92" stroke={ROSE} strokeWidth="1.2" strokeDasharray="3 3" />
      <text x="77" y="57" textAnchor="middle" fontSize="11" fontWeight="700" fill={ROSE}>A</text>
      <text x="46" y="104" textAnchor="middle" fontSize="9.5" fill={INK}>a</text>
      <text x="108" y="104" textAnchor="middle" fontSize="9.5" fill={INK}>b</text>
      <text x="172" y="52" textAnchor="middle" fontSize="10" fontWeight="700" fill={INK}>∫ (y₂ − y₁) dx</text>
      <text x="172" y="68" textAnchor="middle" fontSize="9" fill={MUTED}>top − bottom</text>
    </g>

    {/* 3. Area to y-axis x = f(y) */}
    <g transform="translate(8, 129)">
      <rect x="0" y="0" width="216" height="113" rx="10" fill="#F8FAFC" stroke={GRID} strokeWidth="1.2" />
      <path d="M 36 32 L 96 32 Q 112 54 96 76 L 36 76 Z" fill={EMERALD_SOFT} fillOpacity="0.65" />
      <line x1="22" y1="94" x2="146" y2="94" stroke={INK} strokeWidth="1.3" markerEnd="url(#p1-arrow-ink)" />
      <line x1="36" y1="102" x2="36" y2="16" stroke={INK} strokeWidth="1.3" markerEnd="url(#p1-arrow-ink)" />
      <path d="M 94 20 Q 114 54 92 88" fill="none" stroke={EMERALD} strokeWidth="2.2" />
      <line x1="36" y1="32" x2="96" y2="32" stroke={ROSE} strokeWidth="1.3" strokeDasharray="3 3" />
      <line x1="36" y1="76" x2="96" y2="76" stroke={ROSE} strokeWidth="1.3" strokeDasharray="3 3" />
      <text x="68" y="58" textAnchor="middle" fontSize="11" fontWeight="700" fill={ROSE}>A</text>
      <text x="26" y="36" textAnchor="middle" fontSize="9.5" fill={INK}>d</text>
      <text x="26" y="79" textAnchor="middle" fontSize="9.5" fill={INK}>c</text>
      <text x="170" y="54" textAnchor="middle" fontSize="10.5" fontWeight="700" fill={INK}>A = ∫ f(y) dy</text>
      <text x="170" y="70" textAnchor="middle" fontSize="9.5" fill={MUTED}>from c to d</text>
    </g>

    {/* 4. Between x2 and x1 */}
    <g transform="translate(236, 129)">
      <rect x="0" y="0" width="216" height="113" rx="10" fill="#F8FAFC" stroke={GRID} strokeWidth="1.2" />
      <path d="M 62 32 L 104 32 Q 116 54 102 76 L 60 76 Q 72 54 62 32 Z" fill={PRI_SOFT} fillOpacity="0.65" />
      <line x1="22" y1="94" x2="146" y2="94" stroke={INK} strokeWidth="1.3" markerEnd="url(#p1-arrow-ink)" />
      <line x1="36" y1="102" x2="36" y2="16" stroke={INK} strokeWidth="1.3" markerEnd="url(#p1-arrow-ink)" />
      <path d="M 58 22 Q 74 54 58 86" fill="none" stroke={PRI} strokeWidth="2.1" />
      <path d="M 102 22 Q 118 54 100 86" fill="none" stroke={EMERALD} strokeWidth="2.1" />
      <line x1="36" y1="32" x2="104" y2="32" stroke={ROSE} strokeWidth="1.2" strokeDasharray="3 3" />
      <line x1="36" y1="76" x2="102" y2="76" stroke={ROSE} strokeWidth="1.2" strokeDasharray="3 3" />
      <text x="86" y="58" textAnchor="middle" fontSize="11" fontWeight="700" fill={ROSE}>A</text>
      <text x="26" y="36" textAnchor="middle" fontSize="9.5" fill={INK}>d</text>
      <text x="26" y="79" textAnchor="middle" fontSize="9.5" fill={INK}>c</text>
      <text x="170" y="52" textAnchor="middle" fontSize="10" fontWeight="700" fill={INK}>∫ (x₂ − x₁) dy</text>
      <text x="170" y="68" textAnchor="middle" fontSize="9" fill={MUTED}>right − left</text>
    </g>
  </svg>
);

const VolumeOfRevolutionSvg: React.FC = () => (
  <svg viewBox="0 0 460 250" className="w-full h-auto" role="img" aria-label="Four cases of volume of revolution rotated 2pi around x-axis or y-axis">
    <ArrowDefs />
    {/* 1. Single curve around x-axis */}
    <g transform="translate(8, 8)">
      <rect x="0" y="0" width="216" height="113" rx="10" fill="#F8FAFC" stroke={GRID} strokeWidth="1.2" />
      <path d="M 46 88 L 46 52 Q 76 34 104 34 L 104 88 Z" fill={PRI_SOFT} fillOpacity="0.65" />
      <line x1="20" y1="88" x2="146" y2="88" stroke={INK} strokeWidth="1.3" markerEnd="url(#p1-arrow-ink)" />
      <line x1="30" y1="100" x2="30" y2="16" stroke={INK} strokeWidth="1.3" markerEnd="url(#p1-arrow-ink)" />
      <path d="M 30 88 Q 52 34 114 34" fill="none" stroke={EMERALD} strokeWidth="2.1" />
      <ellipse cx="122" cy="88" rx="4" ry="8" fill="none" stroke={ROSE} strokeWidth="1.5" />
      <text x="76" y="68" textAnchor="middle" fontSize="10.5" fontWeight="700" fill={ROSE}>V</text>
      <text x="46" y="100" textAnchor="middle" fontSize="9" fill={INK}>a</text>
      <text x="104" y="100" textAnchor="middle" fontSize="9" fill={INK}>b</text>
      <text x="172" y="48" textAnchor="middle" fontSize="10" fontWeight="700" fill={INK}>π ∫ [f(x)]² dx</text>
      <text x="172" y="65" textAnchor="middle" fontSize="9" fill={ROSE}>rot. x-axis (2π)</text>
    </g>

    {/* 2. Washer around x-axis */}
    <g transform="translate(236, 8)">
      <rect x="0" y="0" width="216" height="113" rx="10" fill="#F8FAFC" stroke={GRID} strokeWidth="1.2" />
      <path d="M 48 64 L 98 30 L 98 54 L 48 76 Z" fill={ACC_SOFT} fillOpacity="0.75" />
      <line x1="20" y1="88" x2="146" y2="88" stroke={INK} strokeWidth="1.3" markerEnd="url(#p1-arrow-ink)" />
      <line x1="30" y1="100" x2="30" y2="16" stroke={INK} strokeWidth="1.3" markerEnd="url(#p1-arrow-ink)" />
      <path d="M 30 88 Q 64 56 108 24" fill="none" stroke={EMERALD} strokeWidth="2" />
      <path d="M 30 88 Q 70 68 110 48" fill="none" stroke={PRI} strokeWidth="2" />
      <ellipse cx="122" cy="88" rx="4" ry="8" fill="none" stroke={ROSE} strokeWidth="1.5" />
      <text x="76" y="56" textAnchor="middle" fontSize="10.5" fontWeight="700" fill={ROSE}>V</text>
      <text x="170" y="48" textAnchor="middle" fontSize="9.5" fontWeight="700" fill={INK}>π ∫ (y₂² − y₁²) dx</text>
      <text x="170" y="65" textAnchor="middle" fontSize="9" fill={ROSE}>rot. x-axis (2π)</text>
    </g>

    {/* 3. Single curve around y-axis */}
    <g transform="translate(8, 129)">
      <rect x="0" y="0" width="216" height="113" rx="10" fill="#F8FAFC" stroke={GRID} strokeWidth="1.2" />
      <path d="M 34 34 L 94 34 Q 76 58 60 72 L 34 72 Z" fill={EMERALD_SOFT} fillOpacity="0.65" />
      <line x1="20" y1="92" x2="146" y2="92" stroke={INK} strokeWidth="1.3" markerEnd="url(#p1-arrow-ink)" />
      <line x1="34" y1="102" x2="34" y2="16" stroke={INK} strokeWidth="1.3" markerEnd="url(#p1-arrow-ink)" />
      <path d="M 34 92 Q 72 64 102 26" fill="none" stroke={EMERALD} strokeWidth="2.1" />
      <ellipse cx="34" cy="24" rx="8" ry="3.5" fill="none" stroke={ROSE} strokeWidth="1.5" />
      <text x="58" y="56" textAnchor="middle" fontSize="10.5" fontWeight="700" fill={ROSE}>V</text>
      <text x="24" y="38" textAnchor="middle" fontSize="9" fill={INK}>d</text>
      <text x="24" y="75" textAnchor="middle" fontSize="9" fill={INK}>c</text>
      <text x="170" y="48" textAnchor="middle" fontSize="10" fontWeight="700" fill={INK}>π ∫ [f(y)]² dy</text>
      <text x="170" y="65" textAnchor="middle" fontSize="9" fill={ROSE}>rot. y-axis (2π)</text>
    </g>

    {/* 4. Washer around y-axis */}
    <g transform="translate(236, 129)">
      <rect x="0" y="0" width="216" height="113" rx="10" fill="#F8FAFC" stroke={GRID} strokeWidth="1.2" />
      <path d="M 74 34 L 100 34 L 68 72 L 52 72 Z" fill={PRI_SOFT} fillOpacity="0.65" />
      <line x1="20" y1="92" x2="146" y2="92" stroke={INK} strokeWidth="1.3" markerEnd="url(#p1-arrow-ink)" />
      <line x1="34" y1="102" x2="34" y2="16" stroke={INK} strokeWidth="1.3" markerEnd="url(#p1-arrow-ink)" />
      <path d="M 34 92 Q 56 60 80 24" fill="none" stroke={PRI} strokeWidth="2" />
      <path d="M 34 92 Q 72 68 108 26" fill="none" stroke={EMERALD} strokeWidth="2" />
      <ellipse cx="34" cy="24" rx="8" ry="3.5" fill="none" stroke={ROSE} strokeWidth="1.5" />
      <text x="74" y="56" textAnchor="middle" fontSize="10.5" fontWeight="700" fill={ROSE}>V</text>
      <text x="24" y="38" textAnchor="middle" fontSize="9" fill={INK}>d</text>
      <text x="24" y="75" textAnchor="middle" fontSize="9" fill={INK}>c</text>
      <text x="170" y="48" textAnchor="middle" fontSize="9.5" fontWeight="700" fill={INK}>π ∫ (x₂² − x₁²) dy</text>
      <text x="170" y="65" textAnchor="middle" fontSize="9" fill={ROSE}>rot. y-axis (2π)</text>
    </g>
  </svg>
);

const DIAGRAM_COMPONENTS: Record<P1DiagramId, React.FC> = {
  'quad-sketch-fx': QuadSketchFxSvg,
  'quad-sketch-gx': QuadSketchGxSvg,
  'discriminant-cases': DiscriminantCasesSvg,
  'mapping-types': MappingTypesSvg,
  'vertical-line-test': VerticalLineTestSvg,
  'linear-domain-range': LinearDomainRangeSvg,
  'composite-mapping': CompositeMappingSvg,
  'inverse-mapping': InverseMappingSvg,
  'horizontal-line-test': HorizontalLineTestSvg,
  'inverse-reflection': InverseReflectionSvg,
  'coord-midpoint-distance': CoordMidpointDistanceSvg,
  'circle-diameter': CircleDiameterSvg,
  'angle-conversion': AngleConversionSvg,
  'circular-sector-segment': CircularSectorSegmentSvg,
  'trig-waves': TrigWavesSvg,
  'astc-unit-circle': AstcUnitCircleSvg,
  'pascal-binomial': PascalBinomialSvg,
  'ap-gp-series': ApGpSeriesSvg,
  'tangent-normal': TangentNormalSvg,
  'stationary-fdt-sdt': StationaryFdtSdtSvg,
  'area-under-curves': AreaUnderCurvesSvg,
  'volume-of-revolution': VolumeOfRevolutionSvg,
};

export const P1NoteDiagrams: React.FC<{ diagrams: NoteDiagramMeta[] }> = ({ diagrams }) => {
  if (!diagrams || diagrams.length === 0) return null;

  return (
    <section aria-label="Visual Diagrams" className="p-6 sk-card space-y-4">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="font-display text-base font-bold text-[var(--sk-ink)]">
          Key Visual Diagrams &amp; Graph Sketches
        </h2>
        <span className="text-[11px] font-mono text-[var(--sk-dim)]">
          9709 Pure Mathematics 1
        </span>
      </div>

      <div className={`grid gap-4 ${diagrams.length > 1 ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
        {diagrams.map((item) => {
          const SvgComponent = DIAGRAM_COMPONENTS[item.id];
          if (!SvgComponent) return null;
          return (
            <figure
              key={item.id}
              className="p-4 rounded-[16px] bg-white border-[1.5px] border-[var(--sk-line)] space-y-2.5 flex flex-col justify-between"
            >
              <div className="font-display text-xs font-bold text-[var(--sk-ink)]">
                <MathText text={item.title} />
              </div>
              <div className="rounded-xl bg-[#FCFDFE] border border-[var(--sk-line)]/70 p-2 overflow-hidden">
                <SvgComponent />
              </div>
              <figcaption className="text-xs text-[var(--sk-body)] leading-relaxed">
                <MathText text={item.caption} />
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
};
