import React from 'react';
import { Menu, X } from 'lucide-react';
import type { AppRoute, SubjectCode } from '../types/syllabus';
import { preloadRouteView } from '../utils/routePreloaders';
import { getActiveSubjectVfxVariant, triggerSakugaBurst } from '../utils/sakugaVfx';

interface HeaderProps {
  activeSubject: SubjectCode;
  activeView: AppRoute['view'];
  onNavigate: (route: AppRoute) => void;
  onGoHome: () => void;
  onOpenFormulaSheet: () => void;
  onOpenGraphTool: () => void;
  onStartQuickMock: () => void;
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSubject,
  activeView,
  onNavigate,
  onGoHome,
  onOpenFormulaSheet,
  onOpenGraphTool,
  onStartQuickMock,
  mobileMenuOpen,
  onToggleMobileMenu,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-white border-b-[1.5px] border-[var(--sk-line)]">
      <div className="max-w-[1440px] mx-auto pl-4 pr-14 sm:pl-6 sm:pr-14 h-16 flex items-center justify-between gap-2.5 lg:gap-6">
        {/* Zone 1: Brand wordmark + 9709 subject badge */}
        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onGoHome();
            }}
            className="font-display text-lg font-extrabold tracking-tight text-[var(--sk-ink)] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[var(--sk-pri)] rounded"
          >
            Rifki&apos;s Notes
          </a>
          <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-md bg-[var(--sk-chip)] border border-[var(--sk-line)] text-[11px] font-mono font-bold text-[var(--sk-pri)]">
            9709
          </span>
        </div>

        {/* Zone 2: Concise single-line nav links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-3 lg:gap-5 text-xs lg:text-sm font-semibold"
        >
          <button
            type="button"
            onClick={() =>
              onNavigate({ view: 'notes', subject: activeSubject, chapterId: 1, topicId: '1.1' })
            }
            className={`py-1.5 whitespace-nowrap shrink-0 border-b-[2.5px] transition-colors cursor-pointer ${
              activeView === 'notes'
                ? 'border-[var(--sk-pri)] text-[var(--sk-ink)]'
                : 'border-transparent text-[var(--sk-dim)] hover:text-[var(--sk-ink)]'
            }`}
          >
            Study Notes
          </button>
          <button
            type="button"
            onPointerEnter={() => preloadRouteView('past-papers')}
            onFocus={() => preloadRouteView('past-papers')}
            onClick={() => onNavigate({ view: 'past-papers', subject: activeSubject })}
            className={`py-1.5 whitespace-nowrap shrink-0 border-b-[2.5px] transition-colors cursor-pointer ${
              activeView === 'past-papers'
                ? 'border-[var(--sk-pri)] text-[var(--sk-ink)]'
                : 'border-transparent text-[var(--sk-dim)] hover:text-[var(--sk-ink)]'
            }`}
          >
            Past Papers
          </button>
          <button
            type="button"
            onPointerEnter={() => preloadRouteView('practice')}
            onFocus={() => preloadRouteView('practice')}
            onClick={() =>
              onNavigate({ view: 'practice', subject: activeSubject, mode: 'practice-test' })
            }
            className={`py-1.5 whitespace-nowrap shrink-0 border-b-[2.5px] transition-colors cursor-pointer ${
              activeView === 'practice'
                ? 'border-[var(--sk-pri)] text-[var(--sk-ink)]'
                : 'border-transparent text-[var(--sk-dim)] hover:text-[var(--sk-ink)]'
            }`}
          >
            Practice Tests
          </button>
          <button
            type="button"
            onPointerEnter={() => preloadRouteView('graph')}
            onFocus={() => preloadRouteView('graph')}
            onClick={onOpenGraphTool}
            className="py-1.5 whitespace-nowrap shrink-0 border-b-[2.5px] border-transparent text-[var(--sk-dim)] hover:text-[var(--sk-ink)] transition-colors cursor-pointer"
          >
            Graph Tool
          </button>
          <button
            type="button"
            onPointerEnter={() => preloadRouteView('formula')}
            onFocus={() => preloadRouteView('formula')}
            onClick={onOpenFormulaSheet}
            className="py-1.5 whitespace-nowrap shrink-0 border-b-[2.5px] border-transparent text-[var(--sk-dim)] hover:text-[var(--sk-ink)] transition-colors cursor-pointer"
          >
            Formula Sheet
          </button>
        </nav>

        {/* Zone 3: 1 primary CTA + mobile menu trigger */}
        <div className="flex items-center gap-2 lg:gap-3 shrink-0">
          <button
            type="button"
            onPointerEnter={() => preloadRouteView('practice')}
            onFocus={() => preloadRouteView('practice')}
            onClick={(e) => {
              triggerSakugaBurst(e, getActiveSubjectVfxVariant('primary'), 'GO!');
              onStartQuickMock();
            }}
            className="hidden lg:inline-flex items-center justify-center px-3.5 py-2 text-xs font-bold sk-btn-primary whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--sk-ink)]"
          >
            Start P1 Mock
          </button>
          <button
            type="button"
            onClick={onToggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="md:hidden p-2 rounded-xl border-[1.5px] border-[var(--sk-line)] text-[var(--sk-ink)] hover:bg-[var(--sk-chip)] cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t-[1.5px] border-[var(--sk-line)] bg-white px-4 py-3 space-y-1">
          <button
            type="button"
            onClick={() => {
              onNavigate({ view: 'notes', subject: activeSubject, chapterId: 1, topicId: '1.1' });
              onToggleMobileMenu();
            }}
            className={`block w-full text-left px-3 py-2.5 text-sm font-semibold rounded-xl cursor-pointer ${
              activeView === 'notes'
                ? 'bg-[var(--sk-chip)] text-[var(--sk-ink)]'
                : 'text-[var(--sk-body)] hover:bg-[var(--sk-chip)]'
            }`}
          >
            Study Notes (P1)
          </button>
          <button
            type="button"
            onClick={() => {
              onNavigate({ view: 'past-papers', subject: activeSubject });
              onToggleMobileMenu();
            }}
            className={`block w-full text-left px-3 py-2.5 text-sm font-semibold rounded-xl cursor-pointer ${
              activeView === 'past-papers'
                ? 'bg-[var(--sk-chip)] text-[var(--sk-ink)]'
                : 'text-[var(--sk-body)] hover:bg-[var(--sk-chip)]'
            }`}
          >
            9709 Past Papers
          </button>
          <button
            type="button"
            onClick={() => {
              onNavigate({ view: 'practice', subject: activeSubject, mode: 'practice-test' });
              onToggleMobileMenu();
            }}
            className={`block w-full text-left px-3 py-2.5 text-sm font-semibold rounded-xl cursor-pointer ${
              activeView === 'practice'
                ? 'bg-[var(--sk-chip)] text-[var(--sk-ink)]'
                : 'text-[var(--sk-body)] hover:bg-[var(--sk-chip)]'
            }`}
          >
            Practice Tests (P1)
          </button>
          <button
            type="button"
            onClick={() => {
              onOpenGraphTool();
              onToggleMobileMenu();
            }}
            className="block w-full text-left px-3 py-2.5 text-sm font-semibold rounded-xl text-[var(--sk-body)] hover:bg-[var(--sk-chip)] cursor-pointer"
          >
            Graph Tool
          </button>
          <button
            type="button"
            onClick={() => {
              onOpenFormulaSheet();
              onToggleMobileMenu();
            }}
            className="block w-full text-left px-3 py-2.5 text-sm font-semibold rounded-xl text-[var(--sk-body)] hover:bg-[var(--sk-chip)] cursor-pointer"
          >
            Formula Sheet
          </button>
          <button
            type="button"
            onClick={(e) => {
              triggerSakugaBurst(e, getActiveSubjectVfxVariant('primary'), 'GO!');
              onStartQuickMock();
              onToggleMobileMenu();
            }}
            className="block w-full text-center mt-2 px-4 py-2.5 text-xs font-bold sk-btn-primary cursor-pointer"
          >
            Start P1 Mock
          </button>
        </div>
      )}
    </header>
  );
};
