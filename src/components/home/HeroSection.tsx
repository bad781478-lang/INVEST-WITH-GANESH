import React, { useState, useEffect } from 'react';
import { Badge } from '../Badge';
import { ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState(() => {
    // If EntranceReveal is not active (e.g. already done or user navigating from another route), reveal immediately
    if (typeof window === 'undefined') return true;
    return Boolean(window.__entranceRevealDone) || !window.__entranceRevealActive;
  });

  useEffect(() => {
    if (isRevealed) return;

    let pauseTimer: ReturnType<typeof setTimeout>;

    const handleReveal = () => {
      // Halka sa pause (380ms) after entrance reveal completes before animating hero content
      pauseTimer = setTimeout(() => {
        setIsRevealed(true);
      }, 380);
    };

    window.addEventListener('entrance-reveal-opened', handleReveal);

    // Safety timeout in case window events are delayed
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 5500);

    return () => {
      window.removeEventListener('entrance-reveal-opened', handleReveal);
      clearTimeout(pauseTimer);
      clearTimeout(timer);
    };
  }, [isRevealed]);

  return (
    <section className="relative min-h-[100dvh] bg-[#161512] text-white flex flex-col justify-end pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 md:pb-20 pb-[max(2rem,env(safe-area-inset-bottom))] overflow-hidden">
      {/* Background Images: Portrait image for mobile, landscape banner on desktop */}
      <div className="absolute inset-0 z-0">
        <picture className="w-full h-full block">
          <source
            media="(max-width: 767px)"
            srcSet="/pfpforhero.webp"
            type="image/webp"
          />
          <source
            media="(max-width: 767px)"
            srcSet="/pfpforhero.png"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/72fbd819-c069-41bf-8bfa-4aac12857daf.webp"
            type="image/webp"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/72fbd819-c069-41bf-8bfa-4aac12857daf.png"
          />
          <img
            src="/pfpforhero.webp"
            alt="Mr. Ganesh Yadav, Jaipur plot advisor at Invest With Ganesh"
            className="w-full h-full object-cover object-[center_top] md:object-[78%_center] lg:object-right opacity-100"
            fetchPriority="high"
            decoding="async"
          />
        </picture>

        {/* Desktop Gradient Overlay: solid on left for text, completely clear & reduced darkness on face */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#161512] from-25% via-[#161512]/80 via-48% to-transparent to-68%" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-[#161512] via-transparent to-black/15" />

        {/* Mobile Gradient Overlay: Clean cinematic backdrop with generous bottom darkness so text never clashes with portrait */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-b from-black/25 via-black/[0.08] via-30% to-transparent to-55% pointer-events-none" />
        <div className="md:hidden absolute inset-0 bg-gradient-to-t from-[#161512] via-[#161512]/95 via-36% via-[#161512]/50 via-55% to-transparent to-70% pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 xs:px-6 sm:px-8 md:px-10 w-full">
        <div className="max-w-xl sm:max-w-2xl lg:max-w-3xl space-y-3.5 sm:space-y-4 md:space-y-5">
          {/* Top Pill Badge */}
          <div className={`inline-block ${isRevealed ? 'animate-hero-1' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 rounded-full bg-black/50 backdrop-blur-md border border-white/20 px-3 py-1 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              <span className="text-[10.5px] xs:text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white/95">
                JAIPUR PLOTS · VERIFIED, NOT ASSUMED
              </span>
            </div>
          </div>

          {/* Main H1 Headline */}
          <h1 className={`text-[27px] xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-semibold leading-[1.18] sm:leading-[1.12] md:leading-[1.08] tracking-[-0.02em] sm:tracking-[-0.03em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] ${isRevealed ? 'animate-hero-2' : 'opacity-0'}`}>
            JDA &amp; RERA Approved Plots in Jaipur
          </h1>

          {/* Subtitle Description */}
          <p className={`text-[13.5px] xs:text-[14px] sm:text-base md:text-[18px] text-white/90 leading-relaxed font-normal max-w-xl line-clamp-2 xs:line-clamp-3 sm:line-clamp-none drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)] ${isRevealed ? 'animate-hero-3' : 'opacity-0'}`}>
            Buy residential plots in Jaipur with a clear paper trail. Mr. Ganesh Yadav guides families and investors through JDA and RERA approved projects, from approvals and locations to site visits, before any money changes hands.
          </p>

          {/* Action Buttons */}
          <div className={`pt-1.5 sm:pt-3 flex flex-row flex-wrap items-center gap-2.5 sm:gap-4 ${isRevealed ? 'animate-hero-4' : 'opacity-0'}`}>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-zinc-950 px-4.5 xs:px-5 sm:px-6 py-2.5 xs:py-3 sm:py-3.5 text-[13px] xs:text-[13.5px] sm:text-[14px] font-semibold hover:bg-zinc-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:scale-98 cursor-pointer"
            >
              <span>Get Plot Details</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/projects"
              className="inline-flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/25 text-white px-4.5 xs:px-5 sm:px-6 py-2.5 xs:py-3 sm:py-3.5 text-[13px] xs:text-[13.5px] sm:text-[14px] font-medium hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-98 cursor-pointer"
            >
              View Plot Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
