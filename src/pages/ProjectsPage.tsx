import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Compass } from 'lucide-react';
import { featuredProjectsData } from '../data/consultareData';

export const ProjectsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Real Estate Projects in Jaipur | JDA & RERA Approved Properties';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Explore premium real estate projects in Jaipur including JDA & RERA approved plots, residential developments, investment opportunities, and verified properties with expert guidance from Invest With Ganesh.'
      );
    }
  }, []);

  const [flagshipProject, ...otherProjects] = featuredProjectsData;

  return (
    <div className="bg-white min-h-screen text-zinc-950 pt-28 sm:pt-36 pb-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* ========================================================================= */}
        {/* 1. MINIMAL EDITORIAL HERO                                                */}
        {/* ========================================================================= */}
        <section className="mb-10 sm:mb-14 reveal-on-scroll">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-mono tracking-[0.2em] uppercase bg-zinc-100 text-zinc-800 border border-zinc-200 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>PROJECTS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-[56px] font-medium tracking-tight text-zinc-950 leading-[1.08]">
              Real Estate Projects in Jaipur
            </h1>

            <p className="text-base sm:text-lg text-zinc-500 font-normal leading-relaxed">
              JDA &amp; RERA approved residential plotted developments across Jaipur&apos;s prime growth corridors.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. CARD 1: FLAGSHIP PANORAMIC SHOWCASE (Yaduraj Ojas)                     */}
        {/* ========================================================================= */}
        {flagshipProject && (
          <section className="mb-14 sm:mb-20 reveal-scale">
            <Link
              to={`/projects/${flagshipProject.slug}`}
              className="block group bg-zinc-50 rounded-3xl sm:rounded-[32px] p-4 sm:p-6 border border-zinc-200/80 hover:border-zinc-300 hover:shadow-xl transition-all duration-500"
            >
              {/* Massive Panoramic Visual */}
              <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-2xl sm:rounded-[24px] overflow-hidden bg-zinc-100 border border-zinc-200/60">
                <img
                  src="/projects/Yaduraj-ojas-live-now-1200x677.jpg"
                  alt={`${flagshipProject.name} master-planned township in Jaipur`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                {/* Floating Glass Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/20">
                    <Compass className="w-3 h-3 text-emerald-400" />
                    <span>360° Virtual Tour Available</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-white/90 backdrop-blur-md text-zinc-900 border border-white/40 font-medium">
                    {flagshipProject.approval}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                  <span className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    <span>{flagshipProject.location}</span>
                  </span>
                </div>
              </div>

              {/* Minimalist Details Strip */}
              <div className="pt-5 pb-1 px-2 sm:px-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-zinc-950 group-hover:text-amber-800 transition-colors">
                      {flagshipProject.name}
                    </h2>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">
                      01
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-zinc-500 font-mono">
                    <span>{flagshipProject.plotSizes}</span>
                    <span className="text-zinc-300">·</span>
                    <span>{flagshipProject.roadWidth}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-950 group-hover:text-amber-800 transition-colors">
                  <span>Explore Project</span>
                  <div className="w-9 h-9 rounded-full bg-zinc-950 group-hover:bg-amber-800 text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* ========================================================================= */}
        {/* 3. 2-COLUMN LUXURY VISUAL GRID (Cards 2 through 6)                        */}
        {/* ========================================================================= */}
        <section className="mb-20 sm:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {otherProjects.map((project, idx) => {
              const projectIndex = (idx + 2).toString().padStart(2, '0');
              const delays = ['delay-75', 'delay-100', 'delay-150', 'delay-200'];
              const delayClass = delays[idx % delays.length];

              return (
                <Link
                  key={project.id}
                  to={`/projects/${project.slug}`}
                  className={`group block bg-zinc-50 rounded-3xl p-4 sm:p-5 border border-zinc-200/80 hover:border-zinc-300 hover:shadow-xl transition-all duration-500 reveal-scale ${delayClass}`}
                >
                  {/* Dominant Visual Container */}
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200/60 mb-5">
                    <img
                      src={project.imageUrl}
                      alt={`${project.name} plotted development in ${project.location}`}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Minimal Authority Badge */}
                    <div className="absolute top-3.5 left-3.5">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-[10.5px] font-mono uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/20">
                        {project.approval}
                      </span>
                    </div>

                    {/* Monospace Ghost Index */}
                    <div className="absolute top-3.5 right-3.5">
                      <span className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white/90 text-xs font-mono flex items-center justify-center border border-white/20">
                        {projectIndex}
                      </span>
                    </div>
                  </div>

                  {/* Minimal Content Row: Name + Circular Arrow Button */}
                  <div className="px-1.5 space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
                          <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span>{project.location}</span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-zinc-950 group-hover:text-amber-800 transition-colors">
                          {project.name}
                        </h3>
                      </div>

                      <div className="w-10 h-10 rounded-full bg-zinc-200/80 group-hover:bg-zinc-950 text-zinc-800 group-hover:text-white flex items-center justify-center transition-all duration-300 shrink-0">
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>

                    {/* Quick Specs Pill Row */}
                    <div className="pt-2 border-t border-zinc-200/60 flex items-center gap-3 text-xs font-mono text-zinc-500">
                      <span>{project.plotSizes}</span>
                      <span className="text-zinc-300">·</span>
                      <span>{project.roadWidth}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. CLEAN MINIMAL CLOSING ROW                                             */}
        {/* ========================================================================= */}
        <section className="pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left reveal-on-scroll">
          <p className="text-sm text-zinc-500 font-normal">
            Interested in verified layout blueprints, JDA approvals, or guided site visits?
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-950 hover:text-amber-800 transition-colors shrink-0"
          >
            <span>Get in touch with Mr. Ganesh Yadav</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </div>
  );
};
