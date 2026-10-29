import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '../Badge';
import { ArrowRight } from 'lucide-react';

export const AboutTeaserSection: React.FC = () => {
  return (
    <section className="bg-white py-20 md:py-28 border-b border-zinc-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Founder Photography */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] sm:aspect-[16/11] bg-zinc-950 group">
              <img
                src="/wmremove-transformed.jpeg"
                alt="Ganesh Yadav — Invest With Ganesh"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-6 text-white">
                <p className="text-base font-semibold">Ganesh Yadav</p>
                <p className="text-xs text-white/80">Founder &amp; Senior Property Consultant</p>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Link */}
          <div className="lg:col-span-6 space-y-6">
            <Badge variant="light">ABOUT US</Badge>

            <h2 className="text-3xl sm:text-4xl md:text-[50px] font-medium leading-[1.06] tracking-[-0.03em] text-zinc-950">
              Real Estate Guidance in Jaipur
            </h2>

            <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
              Mr. Ganesh Yadav works in Jaipur real estate, with a focus on residential plotted developments. Invest With Ganesh helps prospective buyers explore projects, understand available information and arrange enquiries or site visits.
            </p>

            <div className="inline-block rounded-xl bg-zinc-50 border border-zinc-200/80 px-4 py-2 text-xs sm:text-sm text-zinc-600">
              <span className="font-semibold text-zinc-900">5+ Years of Experience in Jaipur Real Estate</span>
              <span className="text-zinc-600 ml-1.5">(Business Claim)</span>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-lg bg-[#161512] text-white px-6 py-3.5 text-[14px] font-semibold hover:bg-black transition-colors shadow-sm"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
