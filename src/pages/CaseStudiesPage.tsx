import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '../components/Badge';
import { allCaseStudies } from '../data/consultareData';
import { ArrowUpRight } from 'lucide-react';

export const CaseStudiesPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#f7f7f7] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl space-y-4 mb-16">
          <Badge variant="light">FEATURED PROJECTS &amp; TOWNSHIPS</Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-zinc-950 leading-[1.05]">
            Residential Plotted Projects in Jaipur
          </h1>
          <p className="text-lg text-zinc-600 font-normal leading-relaxed">
            Review listed residential plotted projects across Jaipur. Contact Invest With Ganesh to obtain project details, available specifications, and to schedule on-ground site visits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allCaseStudies.map((study) => (
            <Link
              key={study.id}
              to={`/case-studies/${study.slug}`}
              className="group bg-white rounded-3xl overflow-hidden border border-zinc-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                  <img
                    src={study.imageUrl}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-zinc-900 text-xs font-semibold uppercase tracking-wider">
                      {study.tag}
                    </span>
                  </div>
                </div>

                <div className="p-8 space-y-3">
                  <h3 className="text-2xl font-medium tracking-tight text-zinc-950 group-hover:text-zinc-700 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    {study.description}
                  </p>
                </div>
              </div>

              <div className="p-8 pt-0 flex items-center justify-between text-sm font-medium text-zinc-900">
                <span className="text-zinc-500 group-hover:text-zinc-950 font-semibold">View Project Details</span>
                <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-zinc-950 group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
