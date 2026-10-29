import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '../Badge';
import { whyItWorksPillars, founderQuote } from '../../data/consultareData';
import {
  ShieldCheck,
  Compass,
  Building2,
  CalendarCheck,
  Check,
  Quote,
  ArrowRight,
} from 'lucide-react';

const pillarIcons = {
  legal: ShieldCheck,
  locations: Compass,
  gated: Building2,
  support: CalendarCheck,
};

const pillarNumbers = ['01', '02', '03', '04'];

export const WhyItWorksSection: React.FC = () => {
  return (
    <section id="why-it-works" className="bg-white py-20 md:py-28 border-b border-zinc-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top Header Row with text split across left and right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-16 pb-6">
          <div className="lg:col-span-8 space-y-4">
            <Badge variant="light">WHY CHOOSE US</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-[50px] font-medium leading-[1.06] tracking-[-0.03em] text-zinc-950">
              Guidance for Plotted Land Purchases in Jaipur
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-[15px] sm:text-[16px] text-zinc-600 leading-relaxed font-normal">
              We help you review project layouts, verify approval documentation, and inspect site connectivity before deciding on a residential plot.
            </p>
          </div>
        </div>

        {/* 4 Value Pillars in a 2x2 Responsive Grid (No Images) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {whyItWorksPillars.map((pillar, index) => {
            const IconComponent =
              pillarIcons[pillar.id as keyof typeof pillarIcons] || ShieldCheck;

            return (
              <div
                key={pillar.id}
                className="group relative bg-zinc-50/70 hover:bg-white border border-zinc-200/80 hover:border-zinc-300/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Header row: Index & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs sm:text-[13px] font-bold text-amber-700 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-lg">
                      {pillarNumbers[index]}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-white border border-zinc-200/80 group-hover:border-zinc-950/20 flex items-center justify-center text-zinc-800 group-hover:text-zinc-950 group-hover:bg-zinc-100 transition-all duration-300 shadow-xs">
                      <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2 pt-1">
                    <h3 className="text-xl sm:text-[22px] font-semibold tracking-tight text-zinc-950 group-hover:text-black transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-[14px] sm:text-[15px] text-zinc-600 leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                {/* Bullet checklist */}
                <div className="pt-6 mt-6 border-t border-zinc-200/70 space-y-2.5">
                  {pillar.bullets.map((bullet, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-[13.5px] sm:text-[14px] text-zinc-700 font-normal leading-snug"
                    >
                      <div className="w-4 h-4 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-700 mt-0.5 shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Founder Advisory Commitment Banner (No Image, Pure Typography Excellence) */}
        <div className="mt-10 sm:mt-14 rounded-3xl bg-[#161512] text-white p-7 sm:p-10 md:p-12 relative overflow-hidden border border-white/10 shadow-2xl">
          {/* Ambient decorative glow / quote watermark */}
          <div className="absolute -right-8 -top-8 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <Quote className="absolute right-6 top-6 w-20 h-20 text-white/5 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-medium tracking-[0.14em] uppercase bg-white/10 text-amber-300 border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>Advisory Commitment</span>
              </div>

              <p className="text-[17px] sm:text-xl md:text-[22px] font-medium leading-relaxed tracking-[-0.01em] text-white/95">
                &ldquo;{founderQuote.quote}&rdquo;
              </p>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm">
                <span className="font-semibold text-white tracking-wide text-[15px]">
                  {founderQuote.name}
                </span>
                <span className="hidden sm:inline text-white/30">•</span>
                <span className="text-white/70 text-[13.5px]">
                  {founderQuote.role}
                </span>
                <span className="hidden sm:inline text-white/30">•</span>
                <span className="text-amber-400 font-medium text-[13px]">
                  Jaipur Development Authority (JDA) &amp; RERA Sanctioned Schemes
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white text-zinc-950 px-6 py-3.5 text-[14px] font-semibold hover:bg-zinc-100 transition-all shadow-xl active:scale-98"
              >
                <span>Schedule Site Inspection</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
