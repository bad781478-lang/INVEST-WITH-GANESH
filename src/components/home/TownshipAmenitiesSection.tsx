import React from 'react';
import { Badge } from '../Badge';
import { ShieldCheck, Trees, Sparkles, Route, Users, Lock } from 'lucide-react';
import { townshipAmenitiesData } from '../../data/consultareData';

const iconMap = {
  ShieldCheck,
  Trees,
  Sparkles,
  Route,
  Users,
  Lock,
};

export const TownshipAmenitiesSection: React.FC = () => {
  return (
    <section
      id="township-amenities"
      className="bg-[#f7f7f7] py-20 md:py-28 border-b border-zinc-200/60 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header Block Centered (Consultaro UI/UX Style) */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 md:mb-20 reveal-on-scroll">
          <div className="inline-block">
            <Badge variant="light">TOWNSHIP AMENITIES</Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-medium leading-[1.08] tracking-[-0.025em] text-zinc-950">
            Planned Plot Townships with Wide Roads, Greenery &amp; Security
          </h2>
          <p className="text-[15px] sm:text-lg text-zinc-600 font-normal leading-relaxed max-w-2xl mx-auto pt-1">
            Our featured plot projects are planned for everyday family life: wide internal roads, open green spaces, gated entry and round-the-clock security. Amenities vary by project, so confirm the specifics for the layout you choose.
          </p>
        </div>

        {/* 6 Cards Grid (3 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {townshipAmenitiesData.map((item, index) => {
            const IconComponent =
              iconMap[item.iconName as keyof typeof iconMap] || ShieldCheck;
            const delays = ['delay-75', 'delay-150', 'delay-225', 'delay-300', 'delay-375', 'delay-450'];
            const delayClass = delays[index % delays.length];

            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl p-7 sm:p-8 border border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:border-zinc-300 hover:-translate-y-2 transition-all duration-500 [transition-timing-function:var(--ease-spring)] flex flex-col justify-start group reveal-on-scroll ${delayClass}`}
              >
                {/* Icon box */}
                <div className="w-12 h-12 rounded-xl bg-zinc-100/90 border border-zinc-200/60 flex items-center justify-center text-zinc-800 mb-6 group-hover:bg-[#161512] group-hover:text-white group-hover:scale-105 transition-all duration-300">
                  <IconComponent className="w-5 h-5 stroke-[1.8]" />
                </div>

                {/* Title & Description */}
                <div className="space-y-2.5">
                  <h3 className="text-lg sm:text-[19px] font-semibold text-zinc-950 tracking-tight group-hover:text-amber-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[14px] sm:text-[14.5px] text-zinc-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
