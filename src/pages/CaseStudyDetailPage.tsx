import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Badge } from '../components/Badge';
import { featuredProjectsData, allCaseStudies, companyDetails } from '../data/consultareData';
import { ArrowLeft, CheckCircle2, MapPin, Phone, ShieldCheck, ArrowRight } from 'lucide-react';
import { YadurajOjasPage } from './YadurajOjasPage';
import { VivoCityColonyPage } from './VivoCityColonyPage';
import { BankOfficersColonyPage } from './BankOfficersColonyPage';

export const CaseStudyDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  if (slug === 'yaduraj-ojas') {
    return <YadurajOjasPage />;
  }
  if (slug === 'bank-officers-colony') {
    return <BankOfficersColonyPage />;
  }
  if (slug === 'vivo-city-colony' || slug === 'vivo-city') {
    return <VivoCityColonyPage />;
  }

  const project = featuredProjectsData.find((p) => p.slug === slug);
  const study = allCaseStudies.find((s) => s.slug === slug);

  useEffect(() => {
    if (project) {
      document.title = `${project.name} | Real Estate Projects in Jaipur | Invest With Ganesh`;
    }
  }, [project]);

  if (!project && !study) {
    return <Navigate to="/projects" replace />;
  }

  const title = project?.name || study?.title || 'Jaipur Plotted Project';
  const tagline = project?.tagline || study?.tag || 'Verified Plotted Development';
  const description = project?.description || study?.description || '';
  const imageUrl = project?.imageUrl || study?.imageUrl || '/projects/yaduraj-ojas-township.png';
  const location = project?.location || 'Jaipur, Rajasthan';
  const approval = project?.approval || 'JDA & RERA Verified';

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#fcfcfb] min-h-screen text-zinc-900">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="mb-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all projects</span>
          </Link>
        </div>

        <div className="space-y-4 mb-10">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="light">{approval}</Badge>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              {tagline}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-zinc-950 leading-[1.1]">
            {title}
          </h1>

          <div className="flex items-center gap-2 text-zinc-600 text-sm">
            <MapPin className="w-4 h-4 text-amber-600" />
            <span>{location}</span>
          </div>

          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed pt-1">
            {description}
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden aspect-[16/9] mb-12 shadow-lg bg-zinc-900 border border-zinc-200/80">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-zinc-200/80 shadow-sm space-y-10">
          {/* Project Specifications */}
          {project && (
            <div className="space-y-4">
              <h2 className="text-2xl font-medium text-zinc-950">Township Specifications</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-1">
                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/60">
                  <span className="text-[11px] font-mono uppercase text-zinc-500 font-semibold block">Plot Sizes</span>
                  <span className="text-sm sm:text-base font-semibold text-zinc-900 mt-1 block">{project.plotSizes}</span>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/60">
                  <span className="text-[11px] font-mono uppercase text-zinc-500 font-semibold block">Road Width</span>
                  <span className="text-sm sm:text-base font-semibold text-zinc-900 mt-1 block">{project.roadWidth}</span>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/60">
                  <span className="text-[11px] font-mono uppercase text-zinc-500 font-semibold block">Financing</span>
                  <span className="text-sm sm:text-base font-semibold text-emerald-700 mt-1 block">{project.bankLoan || 'Bank Loan Assistance'}</span>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/60">
                  <span className="text-[11px] font-mono uppercase text-zinc-500 font-semibold block">Status</span>
                  <span className="text-sm sm:text-base font-semibold text-zinc-900 mt-1 block">{project.status}</span>
                </div>
              </div>
            </div>
          )}

          {/* Key Project Features */}
          <div className="space-y-4">
            <h2 className="text-2xl font-medium text-zinc-950">Verified Project Highlights</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {(project?.highlights || [
                'JDA Approved Scheme & Layout Demarcation',
                'Rajasthan RERA Documented Project Record',
                'Planned Sector Roads & Internal Connectivity',
                'Planned Underground Utilities & Street Lighting Provisions',
                'Landscaped Open Spaces & Community Parks',
                'Boundary Wall & Gated Entry Security',
                'Water Supply Network & Drainage Infrastructure',
                'Physical On-Ground Plot Demarcation with Mr. Ganesh Yadav',
              ]).map((step, idx) => (
                <li key={idx} className="flex items-start gap-3 text-zinc-700 text-sm md:text-[15px]">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Due Diligence Guarantee */}
          <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/70 flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-zinc-950">Independent Due Diligence Encouraged</h4>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Before booking, buyers are encouraged to inspect official layout plans, JDA approval orders, and RERA registration documents directly. Personal on-ground boundary walk-throughs are arranged by Mr. Ganesh Yadav.
              </p>
            </div>
          </div>

          {/* Book Site Visit CTA */}
          <div className="pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-medium text-zinc-950">Interested in {title}?</h3>
              <p className="text-sm text-zinc-600">Schedule a personal on-ground site visit with Mr. Ganesh Yadav.</p>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Link
                to="/contact"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-xl bg-[#161512] text-white px-6 py-3 text-sm font-semibold hover:bg-black transition-colors"
              >
                <span>Book Site Visit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${companyDetails.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white border border-zinc-200 text-zinc-900 px-5 py-3 text-sm font-medium hover:bg-zinc-50 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Call</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
