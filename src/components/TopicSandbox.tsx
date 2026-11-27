import React, { useState } from 'react';
import { getGraphPresetForTopic } from '../data/graphPresets';
import type { SandboxType } from '../types/syllabus';
import {
  fitCubicSequence,
  fitQuadraticSequence,
  solveCubicFromCoefficients,
  solveQuadraticFromCoefficients,
} from '../utils/sequenceSolver';
import { GeoGebraGraphTool } from './GeoGebraGraphTool';
import { KaTeXFormula } from './MathText';
import { SakugaSlider } from './SakugaSlider';

interface TopicSandboxProps {
  type: SandboxType;
  topicId?: string;
}

const SequenceExplorerSandbox: React.FC = () => {
  const [seqMode, setSeqMode] = useState<'quadratic' | 'cubic'>('quadratic');
  const [inputMode, setInputMode] = useState<'sliders' | 'custom'>('sliders');
  const [coeffA, setCoeffA] = useState(2);
  const [coeffB, setCoeffB] = useState(-3);
  const [coeffC, setCoeffC] = useState(5);
  const [coeffD, setCoeffD] = useState(-1);
  const [customInput, setCustomInput] = useState('4, 9, 18, 31, 48');

  const parsedCustom = customInput
    .split(/[\s,;]+/)
    .map((s) => Number(s.trim()))
    .filter((n) => Number.isFinite(n));

  const activeSolution = (() => {
    if (inputMode === 'custom') {
      return seqMode === 'quadratic'
        ? fitQuadraticSequence(parsedCustom)
        : fitCubicSequence(parsedCustom);
    }
    return seqMode === 'quadratic'
      ? solveQuadraticFromCoefficients(coeffA, coeffB, coeffC, 5)
      : solveCubicFromCoefficients(coeffA, coeffB, coeffC, coeffD, 5);
  })();

  const applyPreset = (
    targetMode: 'quadratic' | 'cubic',
    a: number,
    b: number,
    c: number,
    d = 0
  ) => {
    setSeqMode(targetMode);
    setInputMode('sliders');
    setCoeffA(a);
    setCoeffB(b);
    setCoeffC(c);
    setCoeffD(d);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div role="group" aria-label="Sequence degree" className="inline-flex gap-1 sk-tabs">
          <button
            type="button"
            data-active={seqMode === 'quadratic'}
            onClick={() => {
              setSeqMode('quadratic');
              if (inputMode === 'custom') setCustomInput('4, 9, 18, 31, 48');
            }}
            className="px-3 py-1.5 text-xs font-semibold cursor-pointer sk-tab"
          >
            Quadratic (an² + bn + c)
          </button>
          <button
            type="button"
            data-active={seqMode === 'cubic'}
            onClick={() => {
              setSeqMode('cubic');
              if (inputMode === 'custom') setCustomInput('2, 11, 38, 95, 194');
            }}
            className="px-3 py-1.5 text-xs font-semibold cursor-pointer sk-tab"
          >
            Cubic (an³ + bn² + cn + d)
          </button>
        </div>

        <div role="group" aria-label="Sequence input mode" className="inline-flex gap-1 sk-tabs">
          <button
            type="button"
            data-active={inputMode === 'sliders'}
            onClick={() => setInputMode('sliders')}
            className="px-3 py-1.5 text-xs font-semibold cursor-pointer sk-tab"
          >
            Coefficient Sliders
          </button>
          <button
            type="button"
            data-active={inputMode === 'custom'}
            onClick={() => {
              setInputMode('custom');
              setCustomInput(
                seqMode === 'quadratic' ? '4, 9, 18, 31, 48' : '2, 11, 38, 95, 194'
              );
            }}
            className="px-3 py-1.5 text-xs font-semibold cursor-pointer sk-tab"
          >
            Solve Custom Terms
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5 items-start">
        <div className="space-y-3.5">
          {inputMode === 'sliders' ? (
            <>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <label htmlFor="seq-a" className="font-semibold text-[var(--sk-ink)]">
                    Leading coefficient a
                  </label>
                  <span className="font-mono font-bold text-[var(--sk-pri)]">{coeffA}</span>
                </div>
                <SakugaSlider
                  id="seq-a"
                  min={-3}
                  max={4}
                  step={1}
                  value={coeffA === 0 ? 1 : coeffA}
                  onChange={(v) => setCoeffA(v === 0 ? 1 : v)}
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <label htmlFor="seq-b" className="font-semibold text-[var(--sk-ink)]">
                    Coefficient b
                  </label>
                  <span className="font-mono font-bold text-[var(--sk-ink)]">{coeffB}</span>
                </div>
                <SakugaSlider
                  id="seq-b"
                  variant="sakura"
                  min={-6}
                  max={6}
                  step={1}
                  value={coeffB}
                  onChange={setCoeffB}
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <label htmlFor="seq-c" className="font-semibold text-[var(--sk-ink)]">
                    Coefficient c
                  </label>
                  <span className="font-mono font-bold text-[var(--sk-ink)]">{coeffC}</span>
                </div>
                <SakugaSlider
                  id="seq-c"
                  min={-8}
                  max={10}
                  step={1}
                  value={coeffC}
                  onChange={setCoeffC}
                />
              </div>

              {seqMode === 'cubic' && (
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <label htmlFor="seq-d" className="font-semibold text-[var(--sk-ink)]">
                      Constant term d
                    </label>
                    <span className="font-mono font-bold text-[var(--sk-ink)]">{coeffD}</span>
                  </div>
                  <SakugaSlider
                    id="seq-d"
                    variant="sakura"
                    min={-8}
                    max={8}
                    step={1}
                    value={coeffD}
                    onChange={setCoeffD}
                  />
                </div>
              )}
            </>
          ) : (
            <div className="space-y-2">
              <label htmlFor="seq-custom-terms" className="block text-xs font-semibold text-[var(--sk-ink)]">
                Enter {seqMode === 'quadratic' ? 'at least 4' : 'at least 5'} terms separated by commas:
              </label>
              <input
                id="seq-custom-terms"
                type="text"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder={seqMode === 'quadratic' ? 'e.g. 5, 11, 21, 35, 53' : 'e.g. 2, 11, 38, 95, 194'}
                className="w-full px-3 py-2 text-sm sk-input font-mono"
              />
              <p className="text-[11px] text-[var(--sk-dim)]">
                The solver checks constant {seqMode === 'quadratic' ? '2nd' : '3rd'} differences and solves backwards from Term 1 automatically.
              </p>
            </div>
          )}

          <div className="flex flex-wrap gap-1.5 pt-1">
            <button
              type="button"
              onClick={() => applyPreset('quadratic', 2, -1, 3)}
              className="px-2.5 py-1 text-[11px] font-semibold sk-btn-subtle cursor-pointer"
            >
              Quad: 2n² − n + 3
            </button>
            <button
              type="button"
              onClick={() => applyPreset('quadratic', 1, 3, -2)}
              className="px-2.5 py-1 text-[11px] font-semibold sk-btn-subtle cursor-pointer"
            >
              Quad: n² + 3n − 2
            </button>
            <button
              type="button"
              onClick={() => applyPreset('cubic', 2, -3, 4, -1)}
              className="px-2.5 py-1 text-[11px] font-semibold sk-btn-subtle cursor-pointer"
            >
              Cubic: 2n³ − 3n² + 4n − 1
            </button>
            <button
              type="button"
              onClick={() => applyPreset('cubic', 1, 0, 2, -5)}
              className="px-2.5 py-1 text-[11px] font-semibold sk-btn-subtle cursor-pointer"
            >
              Cubic: n³ + 2n − 5
            </button>
          </div>
        </div>

        <div className="p-4 sk-card-soft space-y-3">
          {!activeSolution || !activeSolution.isValid ? (
            <div className="text-xs text-rose-700 font-medium">
              {seqMode === 'quadratic'
                ? 'Need at least 3 numbers with a constant 2nd difference to form a quadratic sequence.'
                : 'Need at least 4 numbers with a constant 3rd difference to form a cubic sequence.'}
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between gap-2 pb-2 border-b border-[var(--sk-line)]">
                <span className="text-xs font-bold text-[var(--sk-dim)]">Resulting Formula</span>
                <div className="text-sm font-bold text-[var(--sk-pri)]">
                  <KaTeXFormula latex={`u_n = ${activeSolution.formulaLatex}`} />
                </div>
              </div>

              <div className="space-y-1.5 text-xs font-mono">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="w-16 text-[11px] text-[var(--sk-dim)] shrink-0">Terms uₙ:</span>
                  {activeSolution.table.terms.slice(0, 5).map((t, i) => (
                    <span
                      key={i}
                      className={`px-2 py-0.5 rounded border ${
                        i === 0
                          ? 'bg-[var(--sk-chip)] border-[var(--sk-pri)] text-[var(--sk-ink)] font-bold'
                          : 'bg-white border-[var(--sk-line)] text-[var(--sk-body)]'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="w-16 text-[11px] text-[var(--sk-dim)] shrink-0">1st diff:</span>
                  {activeSolution.table.firstDiffs.slice(0, 4).map((d, i) => (
                    <span
                      key={i}
                      className={`px-2 py-0.5 rounded border ${
                        i === 0
                          ? 'bg-[var(--sk-acc-soft)] border-[var(--sk-acc)] text-[var(--sk-acc-ink)] font-bold'
                          : 'bg-white border-[var(--sk-line)] text-[var(--sk-body)]'
                      }`}
                    >
                      {d >= 0 ? `+${d}` : d}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="w-16 text-[11px] text-[var(--sk-dim)] shrink-0">2nd diff:</span>
                  {activeSolution.table.secondDiffs.slice(0, 3).map((d, i) => (
                    <span
                      key={i}
                      className={`px-2 py-0.5 rounded border ${
                        i === 0
                          ? 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold'
                          : 'bg-white border-[var(--sk-line)] text-[var(--sk-body)]'
                      }`}
                    >
                      {d >= 0 ? `+${d}` : d}
                    </span>
                  ))}
                </div>
                {activeSolution.kind === 'cubic' && activeSolution.table.thirdDiffs && (
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="w-16 text-[11px] text-[var(--sk-dim)] shrink-0">3rd diff:</span>
                    {activeSolution.table.thirdDiffs.slice(0, 2).map((d, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded border bg-amber-50 border-amber-500 text-amber-950 font-bold"
                      >
                        {d >= 0 ? `+${d}` : d}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-2 border-t border-[var(--sk-line)] space-y-1 text-xs font-mono text-[var(--sk-ink)]">
                <div className="text-[11px] font-sans font-bold text-[var(--sk-pri)]">
                  Series Difference Check (Sₙ / uₙ):
                </div>
                {activeSolution.kind === 'quadratic' ? (
                  <>
                    <div>2a = {activeSolution.d2} ⇒ a = {activeSolution.a}</div>
                    <div>
                      3a + b = {activeSolution.d1First} ⇒ b = {activeSolution.d1First} − 3({activeSolution.a}) = {activeSolution.b}
                    </div>
                    <div>
                      a + b + c = {activeSolution.u1} ⇒ c = {activeSolution.u1} − ({activeSolution.a}) − ({activeSolution.b}) = {activeSolution.c}
                    </div>
                  </>
                ) : (
                  <>
                    <div>6a = {activeSolution.d3} ⇒ a = {activeSolution.a}</div>
                    <div>
                      12a + 2b = {activeSolution.d2First} ⇒ b = {activeSolution.b}
                    </div>
                    <div>
                      7a + 3b + c = {activeSolution.d1First} ⇒ c = {activeSolution.c}
                    </div>
                    <div>
                      a + b + c + d = {activeSolution.u1} ⇒ d = {activeSolution.d}
                    </div>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export const TopicSandbox: React.FC<TopicSandboxProps> = ({ type, topicId }) => {
  if (type === 'none') return null;

  const isGeoGebra = type === 'geogebra-graph' || type === 'quadratic-solver';
  const graphPreset = isGeoGebra ? getGraphPresetForTopic(topicId) : null;

  const titles: Record<Exclude<SandboxType, 'none'>, string> = {
    'quadratic-solver': graphPreset?.title ?? '9709 Explorer · Curves, Roots & Intersections',
    'geogebra-graph': graphPreset?.title ?? '9709 Explorer · Interactive Graph & Calculus',
    'sequence-explorer': 'Interactive Quadratic & Polynomial Sequence Difference Explorer (Sₙ Check)',
  };

  return (
    <section
      className="p-5 sk-card space-y-4"
      aria-label={titles[type]}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="font-display text-sm font-bold text-[var(--sk-ink)]">{titles[type]}</h3>
        <span className="text-xs font-medium text-[var(--sk-dim)]">
          {isGeoGebra ? 'Interactive Graph' : 'Interactive Model'}
        </span>
      </div>
      {isGeoGebra && <GeoGebraGraphTool topicId={topicId} allowPresetSwitch={true} />}
      {type === 'sequence-explorer' && <SequenceExplorerSandbox />}
    </section>
  );
};
