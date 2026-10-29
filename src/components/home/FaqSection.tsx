import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const allFaqs: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What are the benefits of buying JDA approved plots?',
    answer:
      'JDA (Jaipur Development Authority) approved plots sit inside sanctioned layouts, so plot boundaries, sector roads (typically 30 to 60 ft) and public utilities such as water supply, drainage and parks are planned in advance. Approved layouts also make it easier to get a lease deed or patta, secure building-plan sanction and apply for a bank loan, and they reduce the demolition risk that unapproved colonies face. One caution: layout approval does not prove the seller’s title, so have a property lawyer review the ownership documents too.',
  },
  {
    id: 'faq-2',
    question: 'How can I check if a project is RERA registered?',
    answer:
      'Open the official Rajasthan RERA portal at rera.rajasthan.gov.in, go to project search, and look up the project by name, promoter name, registration number or district. Note the RERA registration number, then confirm the approved layout, registered completion date and current status. Search the promoter as well to check that the registration is active and whether any complaints are recorded. Ask for the registration number in writing before you pay any booking amount.',
  },
  {
    id: 'faq-3',
    question: 'Can I get a bank loan for a residential plot in Jaipur?',
    answer:
      'In many cases, yes. Banks generally lend against plots in approved layouts with clear title, which is why JDA approval and complete documents matter. Several of our featured plots, including Yaduraj Ojas, are listed with bank-loan availability. Eligibility, loan amount and interest rate are decided by each lender, so we help you understand the paperwork and the right questions to ask your bank before you book.',
  },
  {
    id: 'faq-4',
    question: 'Where are the featured plotted projects in Jaipur?',
    answer:
      'Our featured projects sit on two of Jaipur’s growth corridors: Yaduraj Ojas on Diggi–Malpura Road and Bank Officers Colony on the Tonk Road corridor near the Ring Road. Our video tours also cover Mansarovar Extension, Ring Road and Diggi Road. The office is at 14-A, Shiv Enclave, near Royal Crysta, Mansarovar Extension, Jaipur, Rajasthan 302020.',
  },
  {
    id: 'faq-5',
    question: 'How do I arrange a free on-ground site inspection?',
    answer:
      'Call or WhatsApp +91-7851982209, or use the Book Site Visit form, and tell us which project you want to see. Mr. Ganesh Yadav meets you at the site to walk the boundaries, check demarcation pillars and road widths, and go through the approvals with you. Let us know in advance which documents you want to review so they are ready when you arrive.',
  },
  {
    id: 'faq-6',
    question: 'What documents should I verify before paying the plot booking amount?',
    answer:
      'Ask to see the JDA-approved layout plan and approval letter, the land-use conversion order (such as 90A) where the land was originally agricultural, the RERA registration number, the seller’s title documents and ownership chain, current land revenue records, the patta or lease-deed status, and the written booking terms covering payment schedule and registry timeline. Have a property lawyer review the full set, because JDA approval confirms the layout, not the seller’s title.',
  },
  {
    id: 'faq-7',
    question: 'Can NRI or out-of-station buyers purchase plots in Jaipur remotely?',
    answer:
      'Yes. Many buyers shortlist and decide remotely using drone walkthroughs, video calls and digital copies of approvals and RERA records, then complete registry formalities in person or through a legally valid power of attorney. Under current FEMA rules, NRIs and OCIs can generally buy residential plots but not agricultural land, farmhouses or plantation property, and payments should go through proper banking channels. Confirm the exact process with your lawyer or chartered accountant before transferring funds.',
  },
];

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="bg-white py-16 sm:py-20 md:py-28 border-b border-zinc-200/60 scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-8">
        {/* Echo Agent AI Centered Header */}
        <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-14 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-mono tracking-[0.16em] uppercase bg-black/5 text-zinc-700 border border-black/5 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
            <span>FAQ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-normal leading-[1.14] tracking-[-0.035em] text-[#232323]">
            Jaipur Plot Buying FAQs: Approvals, Documents &amp; Site Visits
          </h2>

          <p className="text-[14.5px] sm:text-[16px] text-zinc-500 font-normal leading-relaxed max-w-xl mx-auto">
            Straight answers to the questions buyers ask most before buying a residential plot in Jaipur.
          </p>
        </div>

        {/* Echo Agent AI Rounded Card Accordion Stack (Always Crawlable) */}
        <div className="space-y-3 sm:space-y-3.5">
          {allFaqs.map((item, index) => {
            const isOpen = openId === item.id;
            const delays = ['delay-75', 'delay-100', 'delay-150', 'delay-200', 'delay-250', 'delay-300', 'delay-350'];
            const delayClass = delays[index % delays.length];

            return (
              <div
                key={item.id}
                className={`rounded-2xl transition-all duration-300 overflow-hidden reveal-on-scroll ${delayClass} ${
                  isOpen
                    ? 'bg-white border border-zinc-300 shadow-[0_8px_30px_rgba(0,0,0,0.06)] ring-1 ring-black/5'
                    : 'bg-[#f7f7f7] border border-black/[0.06] hover:bg-[#f2f2f2] hover:border-black/10'
                }`}
              >
                <button
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none group select-none"
                >
                  <span
                    className={`text-[16px] sm:text-[18px] font-medium tracking-tight leading-snug transition-colors duration-200 ${
                      isOpen ? 'text-zinc-950 font-semibold' : 'text-zinc-800 group-hover:text-zinc-950'
                    }`}
                  >
                    {item.question}
                  </span>

                  {/* Circular Plus/Minus Indicator with Smooth Rotation */}
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-zinc-950 text-white rotate-45 shadow-sm'
                        : 'bg-black/5 text-zinc-700 group-hover:bg-black/10 group-hover:scale-105'
                    }`}
                  >
                    <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2] transition-transform duration-300" />
                  </div>
                </button>

                {/* Always rendered in DOM for SEO crawlability; collapsed via CSS Grid */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
                      <div className="pt-3 border-t border-zinc-100">
                        <p className="text-zinc-600 text-[14.5px] sm:text-[15.5px] leading-relaxed font-normal">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
