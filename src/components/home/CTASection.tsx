import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, ShieldCheck, Compass, Landmark } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10">
        {/* Echo Agent AI Inspired Master CTA Card */}
        <div className="relative rounded-3xl sm:rounded-[32px] bg-[#161512] text-white overflow-hidden border border-white/10 p-8 sm:p-12 md:p-16 shadow-[0_24px_64px_rgba(0,0,0,0.35)] reveal-scale">
          {/* Geometric Pattern Layer with Radial Mask */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='rgb(255%2C%20197%2C%2091)' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              backgroundRepeat: 'repeat',
              maskImage: 'radial-gradient(ellipse at center, white 20%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, white 20%, transparent 80%)',
            }}
          />

          {/* Subtle Ambient Color Glow */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Content Block */}
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-5 sm:space-y-6">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-mono tracking-[0.16em] uppercase bg-white/[0.08] text-zinc-300 border border-white/15 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>PLAN YOUR SITE VISIT</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.12] tracking-[-0.03em] text-white">
              Ready to see JDA &amp; RERA approved plots in Jaipur for yourself?
            </h2>

            {/* Subtitle */}
            <p className="text-[14.5px] sm:text-[16.5px] text-zinc-400 font-normal leading-relaxed max-w-2xl mx-auto">
              Book a personal site visit with Mr. Ganesh Yadav. Walk the demarcated boundaries, review the JDA and RERA documentation, and decide with every fact in front of you.
            </p>

            {/* Dual CTA Actions */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-xl bg-white text-zinc-950 font-semibold text-sm sm:text-[15px] hover:bg-zinc-100 transition-all shadow-lg active:scale-95 group cursor-pointer"
              >
                <span>Book a Site Visit</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="tel:+917851982209"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-white border border-white/15 font-medium text-sm sm:text-[15px] transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+91-7851982209</span>
              </a>
            </div>

            {/* Bottom Trust Indicators (Minimalist Micro Badges) */}
            <div className="pt-8 sm:pt-10 border-t border-white/10 flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>JDA &amp; RERA Document Review</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-400 shrink-0" />
                <span>On-Ground Site Tour</span>
              </div>
              <div className="flex items-center gap-2">
                <Landmark className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Bank Loan Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};