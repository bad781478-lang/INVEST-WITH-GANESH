import React, { useState } from 'react';
import { Badge } from '../Badge';
import { ArrowRight, Check, Compass, FileSearch, ShieldCheck } from 'lucide-react';

const enquirySteps = [
  {
    id: 'step-1',
    number: 'Step 1',
    label: 'Explore Projects',
    title: 'Review Listed Projects & Locations',
    description: 'Review the listed residential plotted projects, their locations across Jaipur, and available specifications.',
    points: [
      'Browse projects in key corridors including Mansarovar Extension and Diggi-Malpura Road',
      'Check available plot dimensions, layout configurations, and basic details',
      'Identify projects that match your family’s location and budget preferences',
    ],
    imageUrl: '/projects/yaduraj-ojas.jpg',
  },
  {
    id: 'step-2',
    number: 'Step 2',
    label: 'Request Information',
    title: 'Contact Invest With Ganesh for Details',
    description: 'Contact Invest With Ganesh to ask questions, request available documentation, or arrange an on-site visit.',
    points: [
      'Speak with Mr. Ganesh Yadav or submit an online property enquiry',
      'Request available layout maps, brochure files, and approval details',
      'Discuss scheduling an on-ground site visit to inspect the property',
    ],
    imageUrl: '/projects/bank-officers-colony.jpg',
  },
  {
    id: 'step-3',
    number: 'Step 3',
    label: 'Review Before Deciding',
    title: 'Conduct Independent Due Diligence',
    description: 'Check the relevant project approvals, legal documents, costs, and terms with the appropriate authorities or qualified professionals before proceeding.',
    points: [
      'Independently verify JDA layout approval and Rajasthan RERA registration with official records',
      'Review land title history, mutation entries, and registry terms with a legal professional',
      'Confirm all development costs, registry fees, and timelines before entering into any transaction',
    ],
    imageUrl: '/projects/vivo-city.jpg',
  },
];

export const StrategySection: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<string>('step-1');

  const activeStep = enquirySteps.find((s) => s.id === activeStepId) || enquirySteps[0];

  return (
    <section className="bg-[#161512] text-white py-24 md:py-32 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header Block Centered */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-block">
            <Badge variant="dark">ENQUIRY PROCESS</Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[50px] font-medium leading-[1.06] tracking-[-0.03em] text-white">
            Your Property Enquiry in Three Steps
          </h2>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            A clear, informed approach to exploring residential plotted projects in Jaipur.
          </p>
        </div>

        {/* 3 Horizontal Step Buttons */}
        <div className="border-b border-white/15 mb-16">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-10">
            {enquirySteps.map((step) => {
              const isActive = step.id === activeStepId;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStepId(step.id)}
                  className={`pb-4 text-[14.5px] sm:text-[16px] font-medium transition-colors relative cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'text-white'
                      : 'text-white/50 hover:text-white/80'
                  }`}
                >
                  <span className="text-xs uppercase tracking-wider font-semibold text-amber-400/90">
                    {step.number}
                  </span>
                  <span>{step.label}</span>
                  {isActive && (
                    <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-white" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Step Content: 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Details & 3 Points */}
          <div className="lg:col-span-6 space-y-7">
            <div className="space-y-3">
              <span className="text-xs uppercase font-semibold tracking-wider text-amber-400">
                {activeStep.number} — {activeStep.label}
              </span>
              <h3 className="text-2xl sm:text-3xl font-medium text-white leading-snug">
                {activeStep.title}
              </h3>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal">
                {activeStep.description}
              </p>
            </div>

            {/* 3 Points with Circle Checkmark */}
            <div className="space-y-4 pt-1">
              {activeStep.points.map((point, index) => (
                <div key={index} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <p className="text-white/75 text-[15px] leading-relaxed font-normal">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white text-zinc-950 px-6 py-3.5 text-[14px] font-semibold hover:bg-zinc-100 transition-colors shadow-sm"
              >
                <span>Enquire With Mr. Ganesh Yadav</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Step Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-zinc-900 border border-white/10 shadow-2xl">
              <img
                src={activeStep.imageUrl}
                alt={activeStep.title}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-6 right-6 text-white">
                <span className="text-xs uppercase font-semibold tracking-wider text-white/70">
                  Invest With Ganesh · Jaipur Plotted Land
                </span>
                <p className="text-base font-medium mt-0.5">{activeStep.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
