import React from 'react';
import { Badge } from '../components/Badge';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#f7f7f7] min-h-screen">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <div className="space-y-4 mb-12">
          <Badge variant="light">Policies</Badge>
          <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-zinc-950">
            Privacy Policy
          </h1>
          <p className="text-sm font-mono text-zinc-400">Effective Date: Feb 18, 2026</p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-zinc-200/80 shadow-sm space-y-8 text-zinc-700 leading-relaxed text-[15px] sm:text-[16px]">
          <section className="space-y-3">
            <h2 className="text-xl font-medium text-zinc-950">1. Introduction</h2>
            <p>
              Invest With Ganesh ("we," "us," or "our") is dedicated to safeguarding your privacy. This Privacy Policy details how we collect, utilize, and protect your information when you browse our website, inquire about plotted properties, or book site visits.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-zinc-950">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-600">
              <li><strong>Contact Information:</strong> Name, email address, phone number — when you fill out a contact form or schedule a call.</li>
              <li><strong>Usage Data:</strong> IP address, browser type, pages visited, and time spent on our site.</li>
              <li><strong>Communications:</strong> Messages or inquiries you send us directly.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-zinc-950">3. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-600">
              <li>Respond to inquiries and schedule consultations</li>
              <li>Deliver and improve our consulting services</li>
              <li>Send relevant updates or follow-ups (with your consent)</li>
              <li>Analyze website traffic and improve user experience</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-zinc-950">4. Data Sharing &amp; Security</h2>
            <p>
              We do not sell your personal information. We implement industry-standard security measures to protect your information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-zinc-950">5. Contact Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy or your personal details, please reach out via email at info@investwithgaaneesh.com or call +91-7851982209.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
