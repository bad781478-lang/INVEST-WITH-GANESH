import React from 'react';
import { Badge } from '../Badge';
import { industriesData } from '../../data/consultareData';
import { ArrowRight, ShieldCheck, Trees, Sparkles, Navigation, Users, Shield } from 'lucide-react';

const featureIcons: Record<string, React.ReactNode> = {
  'gated-community': <Shield className="w-5 h-5" />,
  'green-environment': <Trees className="w-5 h-5" />,
  'modern-amenities': <Sparkles className="w-5 h-5" />,
  'wide-connectivity': <Navigation className="w-5 h-5" />,
  'family-friendly': <Users className="w-5 h-5" />,
  'security-24x7': <ShieldCheck className="w-5 h-5" />,
};

export const IndustriesSection: React.FC = () => {
  return (
    <section className="bg-white py-20 md:py-28 border-b border-zinc-200/50" id="features">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Button */}
          <div className="lg:col-span-5 space-y-6">
            <Badge variant="light">TOWNSHIP FEATURES &amp; AMENITIES</Badge>

            <h2 className="text-3xl sm:text-4xl md:text-[50px] font-medium leading-[1.06] tracking-[-0.03em] text-zinc-950">
              Key Features Designed for Quality Living in Jaipur
            </h2>

            <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
              Explore the essential township infrastructure and community standards that make these residential plotted developments a reliable choice for your family's future home.
            </p>

            <div className="pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-[#161512] text-white px-6 py-3.5 text-[14px] font-semibold hover:bg-black transition-colors shadow-sm"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: 2 Columns of 3 Clean Cards with authentic descriptions */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {industriesData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 border border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-zinc-300 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-100 text-zinc-800 flex items-center justify-center mb-4 group-hover:bg-[#161512] group-hover:text-white transition-colors">
                  {featureIcons[item.id] || <Sparkles className="w-5 h-5" />}
                </div>

                <h3 className="text-[15px] font-semibold tracking-wide uppercase text-zinc-950 mb-2">
                  {item.title}
                </h3>

                <p className="text-[13.5px] text-zinc-600 leading-relaxed font-normal">
                  {item.description || item.sectors}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
