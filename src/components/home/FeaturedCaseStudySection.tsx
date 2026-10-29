import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '../Badge';
import { featuredCaseStudy } from '../../data/consultareData';
import { ChevronRight } from 'lucide-react';

export const FeaturedCaseStudySection: React.FC = () => {
  return (
    <section id="projects" className="bg-white py-20 md:py-28 border-b border-zinc-200/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header Centered */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-block">
            <Badge variant="light">FEATURED PROJECTS</Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[50px] font-medium leading-[1.06] tracking-[-0.03em] text-zinc-950">
            Explore Residential Plotted Projects in Jaipur
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Review listed projects, location details, and available specifications. Contact us to schedule an on-ground site visit.
          </p>
        </div>

        {/* Cinematic Dark Featured Card */}
        <div className="relative rounded-3xl overflow-hidden bg-[#161512] text-white border border-zinc-800 shadow-xl grid grid-cols-1 lg:grid-cols-12 mb-12">
          {/* Left: Content */}
          <div className="lg:col-span-5 p-8 sm:p-12 md:p-14 flex flex-col justify-between space-y-8 z-10">
            <div className="space-y-5">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/80 text-[11px] font-mono uppercase tracking-wider">
                {featuredCaseStudy.tag}
              </span>

              <h3 className="text-2xl sm:text-3xl font-medium leading-snug text-white">
                {featuredCaseStudy.title}
              </h3>

              <p className="text-white/70 text-[14.5px] leading-relaxed font-normal">
                {featuredCaseStudy.description}
              </p>
            </div>

            <div>
              <Link
                to={`/case-studies/${featuredCaseStudy.slug}`}
                className="inline-flex items-center gap-1.5 text-[14px] font-medium text-white hover:text-white/80 transition-colors group"
              >
                <span>View Township Details</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right: Project Image */}
          <div className="lg:col-span-7 relative aspect-[16/11] lg:aspect-auto overflow-hidden">
            <img
              src={featuredCaseStudy.imageUrl}
              alt={featuredCaseStudy.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#161512] via-transparent to-transparent hidden lg:block" />

            {/* Bottom right slide indicators */}
            <div className="absolute bottom-6 right-6 flex items-center gap-2">
              <span className="w-8 h-1 rounded-full bg-white" />
              <span className="w-8 h-1 rounded-full bg-white/40" />
              <span className="w-8 h-1 rounded-full bg-white/20" />
            </div>
          </div>
        </div>

        {/* Enquiry Ribbon */}
        <div className="rounded-2xl bg-[#f7f7f7] border border-zinc-200/80 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-[16px] font-medium text-zinc-950">
              Need Information on a Listed Project?
            </h4>
            <p className="text-[14px] text-zinc-600">
              Contact Invest With Ganesh for layout maps, available plot specifications, and site visit coordination.
            </p>
          </div>

          <Link
            to="/case-studies"
            className="shrink-0 rounded-lg bg-[#161512] text-white px-5 py-2.5 text-[13.5px] font-medium hover:bg-black transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};
