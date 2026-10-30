import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const statementWords: { text: string; highlight?: boolean; accent?: boolean }[] = [
  { text: 'A' },
  { text: 'plot' },
  { text: 'is' },
  { text: 'a' },
  { text: 'long-term' },
  { text: 'decision,' },
  { text: 'so' },
  { text: 'we' },
  { text: 'start' },
  { text: 'with' },
  { text: 'paperwork,', highlight: true },
  { text: 'not', highlight: true },
  { text: 'promotion.', highlight: true, accent: true },
  { text: 'With' },
  { text: 'Mr.', highlight: true },
  { text: 'Ganesh', highlight: true },
  { text: 'Yadav', highlight: true, accent: true },
  { text: 'you' },
  { text: 'can' },
  { text: 'compare' },
  { text: 'plotted' },
  { text: 'projects' },
  { text: 'across' },
  { text: 'Jaipur,' },
  { text: 'review' },
  { text: 'JDA', highlight: true },
  { text: 'approvals', highlight: true },
  { text: 'and' },
  { text: 'RERA', highlight: true },
  { text: 'records,', highlight: true },
  { text: 'and' },
  { text: 'walk' },
  { text: 'the' },
  { text: 'land' },
  { text: 'yourself' },
  { text: 'before' },
  { text: 'you' },
  { text: 'commit.' },
];

export const StatementSection: React.FC = () => {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>({
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px',
  });

  return (
    <section className="bg-white py-16 sm:py-20 md:py-28 border-b border-zinc-200/50 overflow-hidden relative">
      {/* Subtle ambient golden radial glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <div ref={ref} className="max-w-5xl">
          {/* Eyebrow Pill with smooth slide-down entrance */}
          <div
            className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-mono tracking-[0.16em] uppercase bg-amber-50 text-amber-900 border border-amber-200/80 mb-6 sm:mb-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] select-none ${
              isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse" />
            <span>OUR ADVISORY PRINCIPLE</span>
          </div>

          {/* Kinetic Typography: Word-by-Word Smooth Reveal */}
          <p
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-medium leading-[1.2] sm:leading-[1.18] md:leading-[1.14] tracking-[-0.02em] text-zinc-900"
            aria-label="A plot is a long-term decision, so we start with paperwork, not promotion. With Mr. Ganesh Yadav you can compare plotted projects across Jaipur, review JDA approvals and RERA records, and walk the land yourself before you commit."
          >
            {statementWords.map((word, index) => {
              const delay = 60 + index * 26; // Staggered entrance timing
              return (
                <span
                  key={index}
                  style={{
                    transitionDelay: `${delay}ms`,
                  }}
                  className={`inline-block mr-[0.25em] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
                    isRevealed
                      ? 'opacity-100 translate-y-0 blur-none'
                      : 'opacity-0 translate-y-4 blur-[3px]'
                  } ${
                    word.highlight
                      ? word.accent
                        ? 'text-zinc-950 font-semibold underline decoration-[#BD9A68]/40 decoration-2 underline-offset-4'
                        : 'text-zinc-950 font-semibold'
                      : 'text-zinc-700'
                  }`}
                >
                  {word.text}
                </span>
              );
            })}
          </p>

          {/* Animated decorative accent line that draws across */}
          <div
            className={`mt-8 sm:mt-10 h-[2.5px] w-28 bg-gradient-to-r from-[#BD9A68] via-amber-400 to-transparent rounded-full transition-all duration-1000 delay-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left ${
              isRevealed ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
            }`}
          />
        </div>
      </div>
    </section>
  );
};
