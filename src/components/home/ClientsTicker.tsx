import React from 'react';
import { Link } from 'react-router-dom';
import { clientLogos } from '../../data/consultareData';

export const ClientsTicker: React.FC = () => {
  // 4 duplicates for infinite smooth loop
  const logos = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section id="clients" className="bg-white py-10 sm:py-12 overflow-hidden border-b border-zinc-200/50 reveal-fade">
      <div className="max-w-7xl mx-auto px-6 mb-4 text-center">
        <p className="text-xs sm:text-[13px] font-mono uppercase tracking-[0.18em] text-zinc-400">
          Colonies and townships our buyers have chosen
        </p>
      </div>
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="animate-marquee flex items-center gap-16 md:gap-24">
          {logos.map((logo, index) => (
            <Link
              key={`${logo.id}-${index}`}
              to={logo.link || '/case-studies'}
              className="flex-shrink-0 flex items-center justify-center opacity-75 hover:opacity-100 transition-all duration-300 hover:scale-105"
              title={`${logo.name} plotted project, Jaipur`}
            >
              <img
                src={logo.url}
                alt={`${logo.name} plotted project, Jaipur`}
                className="h-8 md:h-10 w-auto max-w-[160px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
