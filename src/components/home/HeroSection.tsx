import React from 'react';
import { Badge } from '../Badge';
import { ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen h-[100dvh] min-h-[100dvh] max-h-[100dvh] bg-[#161512] text-white flex flex-col justify-end pt-20 sm:pt-28 md:pt-32 pb-6 sm:pb-10 md:pb-20 overflow-hidden">
      {/* Background Images: Portrait image for mobile, landscape banner on desktop */}
      <div className="absolute inset-0 z-0">
        <picture className="w-full h-full block">
          <source
            media="(max-width: 767px)"
            srcSet="/pfpforhero.png"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/72fbd819-c069-41bf-8bfa-4aac12857daf.png"
          />
          <img
            src="/pfpforhero.png"
            alt="Mr. Ganesh Yadav, Jaipur plot advisor at Invest With Ganesh"
            className="w-full h-full object-cover object-[center_top] md:object-[78%_center] lg:object-right opacity-100"
          />
        </picture>

        {/* Desktop Gradient Overlay: solid on left for text, completely clear & reduced darkness on face */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#161512] from-25% via-[#161512]/80 via-48% to-transparent to-68%" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-[#161512] via-transparent to-black/15" />

        {/* Mobile Gradient Overlay: Very subtle cinematic touch on face (very very little bit); rich darkness at bottom for text & UI contrast */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-b from-black/25 via-black/[0.08] via-30% to-transparent to-55% pointer-events-none" />
        <div className="md:hidden absolute inset-0 bg-gradient-to-t from-[#161512] via-[#161512]/85 via-32% via-[#161512]/30 via-48% to-transparent to-58% pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-10 w-full">
        <div className="max-w-xl sm:max-w-2xl lg:max-w-3xl space-y-3 sm:space-y-4 md:space-y-5">
          {/* Top Pill Badge */}
          <div className="inline-block animate-hero-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20 px-3 py-1 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white/95">
                JAIPUR PLOTS · VERIFIED, NOT ASSUMED
              </span>
            </div>
          </div>

          {/* Main H1 Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-semibold leading-[1.08] tracking-[-0.03em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] animate-hero-2">
            JDA &amp; RERA Approved Plots in Jaipur
          </h1>

          {/* Subtitle Description */}
          <p className="text-[14px] sm:text-base md:text-[18px] text-white/90 leading-relaxed font-normal max-w-xl line-clamp-3 sm:line-clamp-none drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)] animate-hero-3">
            Buy residential plots in Jaipur with a clear paper trail. Mr. Ganesh Yadav guides families and investors through JDA and RERA approved projects, from approvals and locations to site visits, before any money changes hands.
          </p>

          {/* Action Buttons */}
          <div className="pt-1 sm:pt-3 flex flex-row flex-wrap items-center gap-3 sm:gap-4 animate-hero-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-zinc-950 px-5 sm:px-6 py-3 sm:py-3.5 text-[13.5px] sm:text-[14px] font-semibold hover:bg-zinc-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:scale-98 cursor-pointer"
            >
              <span>Get Plot Details</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/projects"
              className="inline-flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/25 text-white px-5 sm:px-6 py-3 sm:py-3.5 text-[13.5px] sm:text-[14px] font-medium hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-98 cursor-pointer"
            >
              View Plot Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
