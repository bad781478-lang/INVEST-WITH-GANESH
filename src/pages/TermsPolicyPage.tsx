import React from 'react';
import { Badge } from '../components/Badge';

export const TermsPolicyPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#f7f7f7] min-h-screen">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <div className="space-y-4 mb-12">
          <Badge variant="light">Policies</Badge>
          <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-zinc-950">
            Terms &amp; Conditions
          </h1>
          <p className="text-sm font-mono text-zinc-400">Effective Date: Aug 15, 2025</p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-zinc-200/80 shadow-sm space-y-8 text-zinc-700 leading-relaxed text-[15px] sm:text-[16px]">
          <section className="space-y-3">
            <h2 className="text-xl font-medium text-zinc-950">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Invest With Ganesh website, scheduling a site visit, or engaging our real estate consulting services, you agree to be bound by these Terms &amp; Conditions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-zinc-950">2. Real Estate Information &amp; Services</h2>
            <p>
              Invest With Ganesh provides property consulting, project information, and site visit coordination for residential plotted developments in Jaipur. All property measurements, legal title deeds, and specifications are subject to final government registry documents, official JDA/RERA records, and developer agreements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-zinc-950">3. Intellectual Property</h2>
            <p>
              All content on this website — including text, project photographs, graphics, and architectural visualizations — is the property of Invest With Ganesh and protected by applicable copyright laws.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-zinc-950">4. Disclaimers &amp; Independent Due Diligence</h2>
            <p>
              Prospective buyers are advised to independently inspect all official land records, original title deeds, JDA layout approvals, and official Rajasthan RERA registration certificates with qualified legal and technical professionals prior to entering into any transaction or making financial commitments. Invest With Ganesh does not provide financial or legal certification.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
