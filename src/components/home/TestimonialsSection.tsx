import React from 'react';
import { testimonialsData } from '../../data/consultareData';
import { Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="bg-[#161512] text-white py-16 sm:py-20 md:py-28 border-b border-white/10 scroll-mt-20 overflow-hidden relative"
    >
      {/* Subtle Ambient Background Gradients */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 relative z-10">
        {/* Header Block (Consultaro / Echo Agent AI Dark Luxury) */}
        <div className="max-w-3xl space-y-3 sm:space-y-4 mb-12 sm:mb-16 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-mono tracking-[0.16em] uppercase bg-white/[0.07] text-zinc-300 border border-white/10 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>BUYER TESTIMONIALS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-medium leading-[1.12] tracking-[-0.03em] text-white">
            Trusted by plot buyers in Jaipur.{' '}
            <span className="text-zinc-400 block sm:inline">
              Because every promise was backed by a document.
            </span>
          </h2>

          <p className="text-[14.5px] sm:text-[16.5px] text-zinc-400 leading-relaxed font-normal">
            Feedback from families and investors who consulted Mr. Ganesh Yadav before buying residential plots in Jaipur.
          </p>
        </div>

        {/* 3-Card Grid (Dark Luxury Minimal Cards — No 5-Stars, Pure Elegance) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {testimonialsData.map((item, index) => {
            const delays = ['delay-100', 'delay-200', 'delay-300'];
            const delayClass = delays[index % delays.length];

            return (
              <div
                key={item.id}
                className={`relative bg-[#1d1c19] border border-white/[0.09] rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 [transition-timing-function:var(--ease-spring)] hover:border-amber-400/30 hover:-translate-y-2 shadow-[0_12px_32px_rgba(0,0,0,0.35)] hover:shadow-[0_24px_54px_rgba(0,0,0,0.55)] group reveal-scale ${delayClass} overflow-hidden`}
              >
                {/* Hairline Accent Glow on Top Edge */}
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 group-hover:via-amber-400/40 to-transparent transition-colors duration-500" />

                {/* Subtle Ambient Hover Glow in Corner */}
                <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-amber-500/0 group-hover:bg-amber-500/[0.06] blur-2xl pointer-events-none transition-all duration-700" />

                <div className="relative z-10">
                  {/* Top Bar: Minimalist Quote Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-amber-400/90 group-hover:text-amber-300 group-hover:bg-amber-400/10 group-hover:border-amber-400/20 transition-all duration-300">
                      <Quote className="w-4 h-4 fill-current opacity-90" />
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-[14.5px] sm:text-[15.5px] leading-relaxed text-zinc-200/95 font-normal">
                    {item.quote}
                  </p>
                </div>

                {/* Author Info / Footer - Large Clear Profile Picture */}
                <div className="pt-6 border-t border-white/[0.08] mt-6 flex items-center gap-4 relative z-10">
                  <img
                    src={item.avatarUrl}
                    alt={`${item.author}, ${item.role}`}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover ring-2 ring-white/25 group-hover:ring-amber-400/60 shadow-xl bg-zinc-800 shrink-0 transition-all duration-300 filter contrast-[1.05] brightness-[1.03]"
                    loading="lazy"
                  />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-white text-[16px] sm:text-[17px] tracking-tight truncate group-hover:text-amber-300 transition-colors duration-200">
                      {item.author}
                    </h3>
                    <p className="text-xs sm:text-[13px] font-mono text-zinc-400 mt-1 uppercase tracking-wider">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};