import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin } from 'lucide-react';

interface ProjectCardData {
  id: string;
  name: string;
  location: string;
  status: string;
  statusType: 'ongoing' | 'sold-out' | 'limited';
  approval: string;
  summary: string;
  specs: string[];
  imageUrl: string;
  imageAlt: string;
  href: string;
}

const projects: ProjectCardData[] = [
  {
    id: 'yaduraj-ojas',
    name: 'Yaduraj Ojas',
    location: 'Diggi–Malpura Road, Jaipur',
    status: 'Ongoing',
    statusType: 'ongoing',
    approval: 'JDA & RERA Approved',
    summary:
      'Gated plotted township on Diggi–Malpura Road with wide 40 & 60 ft sector roads, demarcation pillars and landscaped parks.',
    specs: ['100–300 Sq. Yards', '40 & 60 Ft Roads', 'Bank Loan Available'],
    imageUrl: '/Yaduraj-ojas-live-now-1200x677.jpg',
    imageAlt: 'Yaduraj Ojas gated plotted township on Diggi–Malpura Road, Jaipur',
    href: '/case-studies/yaduraj-ojas',
  },
  {
    id: 'bank-officers-colony',
    name: 'Bank Officers Colony',
    location: 'Tonk Road Corridor, Jaipur',
    status: 'Limited Plots',
    statusType: 'limited',
    approval: 'JDA Approved Scheme',
    summary:
      'Executive residential enclave near the Ring Road with a grand sandstone entry, boundary security and a children’s park.',
    specs: ['111–250 Sq. Yards', 'Wide Sector Roads', 'Immediate Registry'],
    imageUrl: '/bank-officers.webp',
    imageAlt: 'Bank Officers Colony plotted township on the Tonk Road corridor, Jaipur',
    href: '/case-studies/bank-officers-colony',
  },
];

export const FeaturedProjectsSection: React.FC = () => {
  return (
    <section
      id="featured-projects"
      className="bg-white py-16 sm:py-20 md:py-24 border-b border-zinc-200/60 scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10">
        {/* Header Block (Minimal & Elegant) */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 sm:mb-14 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-medium tracking-[0.14em] uppercase bg-[#f0f0f0] text-zinc-800 border border-zinc-200/60 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
            <span>FEATURED PROJECTS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-medium leading-[1.12] tracking-[-0.03em] text-zinc-950">
            Featured Plot Projects in Jaipur: Ongoing &amp; Sold Out
          </h2>

          <p className="text-[14.5px] sm:text-[16px] text-zinc-600 font-normal leading-relaxed max-w-xl mx-auto">
            Browse JDA &amp; RERA approved residential plotted communities across Jaipur’s key growth corridors, with locations, plot sizes and road widths shown up front.
          </p>
        </div>

        {/* Exactly 2 Projects Grid (Modern Luxury Design) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
          {projects.map((project, index) => {
            const delayClass = index === 0 ? 'delay-100' : 'delay-250';

            return (
              <Link
                key={project.id}
                to={project.href}
                className={`group relative flex flex-col bg-white rounded-2xl sm:rounded-3xl border border-zinc-200/80 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.1)] hover:border-zinc-300 hover:-translate-y-2 transition-all duration-500 [transition-timing-function:var(--ease-spring)] reveal-scale ${delayClass}`}
              >
              {/* Image Container with Subtle Badges */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
                <img
                  src={project.imageUrl}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  decoding="async"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Location overlay bottom */}
                <div className="absolute bottom-3.5 left-3.5 flex items-center gap-1.5 text-white text-xs font-medium drop-shadow-sm">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{project.location}</span>
                </div>
              </div>

              {/* Minimal Project Details */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl sm:text-2xl font-semibold text-zinc-950 tracking-tight group-hover:text-amber-800 transition-colors">
                      {project.name}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-zinc-100 group-hover:bg-[#161512] group-hover:text-white text-zinc-600 flex items-center justify-center transition-all duration-300 shrink-0">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {/* Short 1-line description */}
                  <p className="text-[13.5px] sm:text-[14px] text-zinc-600 leading-relaxed font-normal mt-2">
                    {project.summary}
                  </p>
                </div>

                {/* Minimal specs chips */}
                <div className="pt-2 flex flex-wrap items-center gap-1.5 text-[11.5px] font-medium text-zinc-600">
                  {project.specs.map((spec, i) => (
                    <span
                      key={i}
                      className="inline-block px-2.5 py-0.5 rounded-md bg-zinc-100/90 text-zinc-700 border border-zinc-200/50"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          );
        })}
        </div>

        {/* Clean, Refined "Explore All" Button */}
        <div className="mt-10 sm:mt-12 text-center reveal-on-scroll delay-300">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-zinc-300 bg-white text-zinc-900 text-[13.5px] sm:text-sm font-semibold hover:border-zinc-950 hover:bg-zinc-950 hover:text-white transition-all duration-300 shadow-2xs group cursor-pointer hover:scale-105 active:scale-95"
          >
            <span>View All Plot Projects</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};