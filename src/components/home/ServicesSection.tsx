import React from 'react';
import { Badge } from '../Badge';
import { FileText, HelpCircle, MapPin, FolderCheck } from 'lucide-react';

const verifiedServices = [
  {
    id: 'project-info',
    icon: MapPin,
    title: 'Project Information',
    description: 'Explore project details, locations, and available specifications for residential plot developments in Jaipur.',
  },
  {
    id: 'property-enquiries',
    icon: HelpCircle,
    title: 'Property Enquiries',
    description: 'Ask questions about a listed project, check location details, and request additional information directly from our team.',
  },
  {
    id: 'site-visits',
    icon: FileText,
    title: 'Site Visit Requests',
    description: 'Contact us to discuss arranging a visit to a listed project and inspect the on-ground location and connectivity.',
  },
  {
    id: 'project-docs',
    icon: FolderCheck,
    title: 'Project Documentation',
    description: 'Request available project documents and independently review the relevant JDA and RERA approvals with qualified professionals.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="bg-white py-20 md:py-28 border-b border-zinc-200/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header Block Centered */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-block">
            <Badge variant="light">SERVICES &amp; ENQUIRIES</Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[50px] font-medium leading-[1.06] tracking-[-0.03em] text-zinc-950">
            How We Can Help
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed max-w-2xl mx-auto pt-1">
            We assist families and property buyers with project details, site inspections, and document requests for plotted developments in Jaipur.
          </p>
        </div>

        {/* 4 Cards Grid (2x2 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {verifiedServices.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-8 border border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-zinc-300 hover:shadow-md transition-all duration-200 flex flex-col justify-start space-y-5"
              >
                {/* Icon square */}
                <div className="w-11 h-11 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-800">
                  <Icon className="w-5 h-5 stroke-[1.8]" />
                </div>

                <div className="space-y-2.5">
                  {/* Title */}
                  <h3 className="text-xl md:text-[22px] font-medium tracking-tight text-zinc-950">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-600 text-[14.5px] leading-relaxed">
                    {service.description}
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
