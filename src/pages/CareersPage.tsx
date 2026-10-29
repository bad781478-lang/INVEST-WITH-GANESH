import React from 'react';
import { Badge } from '../components/Badge';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const openRoles = [
  {
    title: 'Senior Property Advisor — Plotted Developments',
    level: '2–4 years Jaipur real estate experience',
    type: 'Jaipur / Full Time',
    desc: 'Guide home buyers and investors through township site tours, inventory selection, and pricing options.',
  },
  {
    title: 'Legal & JDA Documentation Specialist',
    level: '3+ years property law background',
    type: 'Mansarovar / Full Time',
    desc: 'Manage title chain searches, JDA layout validations, sub-registrar registry files, and mutation documentation.',
  },
  {
    title: 'Bank Loan Coordination Executive',
    level: '1–3 years banking / NBFC experience',
    type: 'Jaipur / Full Time',
    desc: 'Liaise directly with SBI, HDFC, ICICI and Bank of Baroda to facilitate rapid doorstep plot loan sanctioning.',
  },
  {
    title: 'Site Visit & Client Relations Manager',
    level: '1–2 years customer management',
    type: 'On-Site / Field',
    desc: 'Coordinate client pick-ups, conduct private site visits, and showcase township amenities with total professionalism.',
  },
];

export const CareersPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#f7f7f7] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl space-y-4 mb-20">
          <Badge variant="light">Careers &amp; Culture</Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-zinc-950 leading-[1.05]">
            Shape the Future of Jaipur Real Estate.
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 font-normal leading-relaxed">
            Join a real estate advisory committed to professional integrity, clear communication, and customer-first guidance in Jaipur.
          </p>
        </div>

        {/* 3 Pillars of Culture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white p-8 rounded-3xl border border-zinc-200/80 shadow-sm space-y-4">
            <h3 className="text-2xl font-medium text-zinc-950">
              Professional Integrity
            </h3>
            <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
              We focus on honest communication and clear project details. No misleading claims or unverified guarantees.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-zinc-200/80 shadow-sm space-y-4">
            <h3 className="text-2xl font-medium text-zinc-950">
              Client Guidance
            </h3>
            <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
              Every plot we advise on represents someone's life savings. We operate as fiduciary partners, prioritizing long-term appreciation.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-zinc-200/80 shadow-sm space-y-4">
            <h3 className="text-2xl font-medium text-zinc-950">
              Deep Local Mastery
            </h3>
            <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
              We know every sector road, Ring Road expansion, and urban masterplan in Jaipur intimately, providing our team with an unfair advantage.
            </p>
          </div>
        </div>

        {/* Open Roles Section */}
        <div className="space-y-8">
          <div className="max-w-2xl space-y-3">
            <Badge variant="light">Open Positions</Badge>
            <h2 className="text-3xl sm:text-4xl font-medium text-zinc-950">
              You're capable. You just need the right role.
            </h2>
          </div>

          <div className="space-y-4">
            {openRoles.map((role, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-zinc-200/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-medium text-zinc-950">
                      {role.title}
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-xs font-mono">
                      {role.type}
                    </span>
                    <span className="text-xs text-zinc-400 font-mono">
                      {role.level}
                    </span>
                  </div>
                  <p className="text-zinc-600 text-sm">
                    {role.desc}
                  </p>
                </div>

                <a
                  href="mailto:info@investwithgaaneesh.com?subject=Job%20Application%20at%20Invest%20With%20Ganesh"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 text-white px-6 py-2.5 text-sm font-semibold hover:bg-black transition-colors shrink-0"
                >
                  <span>Apply Now</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
