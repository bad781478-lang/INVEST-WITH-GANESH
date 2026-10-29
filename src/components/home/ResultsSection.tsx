import React from 'react';
import { statsData } from '../../data/consultareData';

export const ResultsSection: React.FC = () => {
  return (
    <section className="relative bg-[#161512] text-white py-28 md:py-36 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/jaipur-plotted-corridors.jpg"
          alt="Aerial view of Jaipur plotted growth corridors"
          className="w-full h-full object-cover object-center opacity-50 filter brightness-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#161512]/85 via-[#161512]/65 to-[#161512]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Top Statement */}
        <div className="max-w-3xl mb-20 md:mb-24 reveal-on-scroll">
          <p className="text-3xl sm:text-4xl md:text-[44px] font-medium leading-[1.14] tracking-[-0.02em] text-white">
            Our word is only as strong as the documents behind it. That is why we guide families and investors toward approved, well-documented plotted land across Jaipur’s fastest-growing corridors.
          </p>
        </div>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {statsData.map((stat, index) => {
            const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-400'];
            const delayClass = delays[index % delays.length];

            return (
              <div
                key={index}
                className={`space-y-2 reveal-on-scroll ${delayClass} hover:-translate-y-1 transition-transform duration-300`}
              >
                <div className="text-5xl sm:text-6xl md:text-[68px] font-medium tracking-tight text-white leading-none">
                  {stat.value}
                </div>
                <div className="text-[14px] md:text-[15px] text-white/75 font-normal pt-1">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
