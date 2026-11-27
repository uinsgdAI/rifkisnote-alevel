import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import type { SubjectCode } from '../types/syllabus';
import { KaTeXFormula } from './MathText';

interface FormulaSheetModalProps {
  open: boolean;
  subject?: SubjectCode;
  onClose: () => void;
}

const GIVEN_FORMULAS_9709_P1 = [
  {
    title: 'Binomial Expansion (n ∈ ℤ⁺)',
    latex: '(a + b)^n = a^n + \\binom{n}{1}a^{n-1}b + \\binom{n}{2}a^{n-2}b^2 + \\dots + \\binom{n}{r}a^{n-r}b^r + \\dots + b^n',
    section: 'MF19 · Ch. 6 Series',
  },
  {
    title: 'Arithmetic Series (AP)',
    latex: 'u_n = a + (n - 1)d \\qquad S_n = \\frac{1}{2}n\\{2a + (n - 1)d\\} = \\frac{1}{2}n(a + l)',
    section: 'MF19 · Ch. 6 Series',
  },
  {
    title: 'Geometric Series (GP) & Sum to Infinity',
    latex: 'u_n = ar^{n-1} \\qquad S_n = \\frac{a(1 - r^n)}{1 - r} \\;(r \\neq 1) \\qquad S_\\infty = \\frac{a}{1 - r} \\;(|r| < 1)',
    section: 'MF19 · Ch. 6 Series',
  },
  {
    title: 'Mensuration (Sphere, Cone & Cylinder)',
    latex: 'V_{\\text{sphere}} = \\frac{4}{3}\\pi r^3, \\quad S_{\\text{sphere}} = 4\\pi r^2, \\quad V_{\\text{cone}} = \\frac{1}{3}\\pi r^2 h, \\quad A_{\\text{curved cone}} = \\pi r l',
    section: 'MF19 · Ch. 7 Optimisation / Rates',
  },
];

const MEMORISED_FORMULAS_9709_P1 = [
  {
    title: 'Quadratics, Completed Square & Discriminant',
    latex: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}, \\quad a(x + p)^2 + q \\;(\\text{vertex } (-p, q)), \\quad \\Delta = b^2 - 4ac',
  },
  {
    title: 'Coordinate Geometry & Equation of a Circle',
    latex: 'd = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}, \\quad m_1 m_2 = -1, \\quad (x - a)^2 + (y - b)^2 = r^2',
  },
  {
    title: 'Circular Measure (θ in radians)',
    latex: 's = r\\theta, \\quad P = 2r + r\\theta, \\quad A_{\\text{sector}} = \\frac{1}{2}r^2\\theta, \\quad A_{\\text{segment}} = \\frac{1}{2}r^2(\\theta - \\sin\\theta)',
  },
  {
    title: 'Trigonometric Identities & Radian Bridge',
    latex: '\\tan\\theta \\equiv \\frac{\\sin\\theta}{\\cos\\theta}, \\qquad \\sin^2\\theta + \\cos^2\\theta \\equiv 1, \\qquad \\pi\\text{ rad} = 180^\\circ',
  },
  {
    title: 'Power Rule, Chain Rule, Tangents & Normals',
    latex: '\\frac{d}{dx}\\big[(ax + b)^n\\big] = an(ax + b)^{n-1}, \\quad \\frac{dy}{dx} = \\frac{dy}{du}\\cdot\\frac{du}{dx}, \\quad m_{\\text{normal}} = -\\frac{1}{m_{\\text{tangent}}}',
  },
  {
    title: 'Stationary Points (FDT/SDT) & Rates of Change',
    latex: '\\frac{dy}{dx} = 0 \\;\\left(\\frac{d^2y}{dx^2} > 0 \\text{ min},\\; < 0 \\text{ max}\\right), \\qquad \\frac{dy}{dt} = \\frac{dy}{dx}\\cdot\\frac{dx}{dt}',
  },
  {
    title: 'Standard Integrals & Reverse Chain Rule',
    latex: '\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + c, \\qquad \\int (ax+b)^n\\,dx = \\frac{(ax+b)^{n+1}}{a(n+1)} + c \\quad (n \\neq -1)',
  },
  {
    title: 'Areas Under Curves & Volumes of Revolution',
    latex: 'A = \\int_a^b (y_2 - y_1)\\,dx, \\quad A_y = \\int_c^d (x_2 - x_1)\\,dy, \\quad V_x = \\pi\\int_a^b y^2\\,dx, \\quad V_y = \\pi\\int_c^d x^2\\,dy',
  },
];

export const FormulaSheetModal: React.FC<FormulaSheetModalProps> = ({
  open,
  onClose,
}) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--sk-ink)]/50 backdrop-blur-xs p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="formula-sheet-title"
    >
      <div className="bg-white border-2 border-[var(--sk-ink)] rounded-[20px] max-w-4xl w-full max-h-[88vh] flex flex-col shadow-[6px_7px_0_var(--sk-soft)]">
        <div className="px-6 py-4 border-b-[1.5px] border-[var(--sk-line)] flex items-center justify-between gap-4">
          <div>
            <h2 id="formula-sheet-title" className="font-display text-lg font-bold text-[var(--sk-ink)]">
              Cambridge AS &amp; A Level Mathematics (9709) — P1 Formula Sheet
            </h2>
            <p className="text-xs text-[var(--sk-dim)] mt-0.5">
              Distinguishes formulas provided in the official Cambridge MF19 booklet from core P1 formulas you must memorise
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close formula sheet"
            className="p-2 rounded-xl text-[var(--sk-dim)] hover:text-[var(--sk-ink)] hover:bg-[var(--sk-chip)] border border-transparent hover:border-[var(--sk-line)] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-8">
          <section>
            <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="font-display text-sm font-bold text-[var(--sk-ink)]">
                  Provided in Official Cambridge MF19 Booklet (Pure Mathematics 1)
                </h3>
                <p className="text-xs text-[var(--sk-dim)]">
                  Given inside your exam booklet — check signs carefully when applying AP, GP, Binomial, or 3D Mensuration
                </p>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-100 border border-emerald-600 text-[10px] font-mono font-bold text-emerald-900">
                MF19 PROVIDED
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {GIVEN_FORMULAS_9709_P1.map((f) => (
                <div key={f.title} className="p-4 sk-card-soft">
                  <div className="flex items-baseline justify-between gap-2 text-xs text-[var(--sk-dim)] mb-2">
                    <span className="font-semibold text-[var(--sk-ink)]">{f.title}</span>
                    <span className="shrink-0 font-mono text-[11px]">{f.section}</span>
                  </div>
                  <div className="overflow-x-auto text-[var(--sk-ink)]">
                    <KaTeXFormula latex={f.latex} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="font-display text-sm font-bold text-[var(--sk-ink)]">
                  Must Be Memorised (Not Printed in MF19)
                </h3>
                <p className="text-xs text-[var(--sk-dim)]">
                  Required recall across 9709 Paper 1 algebra, circles, radians, trigonometry, differentiation, and integration
                </p>
              </div>
              <span className="px-2 py-0.5 rounded bg-amber-100 border border-amber-600 text-[10px] font-mono font-bold text-amber-900">
                MEMORISE FOR EXAM
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {MEMORISED_FORMULAS_9709_P1.map((f) => (
                <div
                  key={f.title}
                  className="p-4 rounded-xl border-[1.5px] border-[var(--sk-line)] bg-white"
                >
                  <div className="text-xs font-semibold text-[var(--sk-ink)] mb-2">{f.title}</div>
                  <div className="overflow-x-auto text-[var(--sk-ink)]">
                    <KaTeXFormula latex={f.latex} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
