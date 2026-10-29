import React, { useState } from 'react';
import { Badge } from '../components/Badge';
import { companyDetails } from '../data/consultareData';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'General Property Enquiry',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to submit enquiry.');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'General Property Enquiry',
        message: '',
      });
    } catch (err: any) {
      console.error(err);
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="pt-32 pb-24 bg-[#f7f7f7] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl space-y-4 mb-16">
          <Badge variant="light">QUICK ENQUIRY</Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-zinc-950 leading-[1.05]">
            Have a Question About a Plot?
          </h1>
          <p className="text-lg text-zinc-600 font-normal leading-relaxed">
            Share your contact details and the project you are interested in. Our team can follow up regarding your enquiry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Contact Info Card */}
          <div className="lg:col-span-5 space-y-8 bg-[#161512] text-white p-8 sm:p-10 rounded-3xl border border-zinc-800 shadow-xl">
            <div>
              <span className="text-xs uppercase tracking-widest text-white/50 font-mono">
                Direct Contact
              </span>
              <h2 className="text-2xl font-medium text-white mt-1">
                Reach out directly
              </h2>
              <p className="text-white/60 text-sm mt-2 leading-relaxed">
                Contact Invest With Ganesh for project details, layout information, and to discuss arranging an on-ground site visit.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-white/10">
              <a
                href={`tel:${companyDetails.phone}`}
                className="flex items-center gap-4 text-white/80 hover:text-white transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-white/40">Direct Call / WhatsApp</div>
                  <div className="text-base font-medium">{companyDetails.phone}</div>
                  <div className="text-xs text-white/50">{companyDetails.phoneAlt}</div>
                </div>
              </a>

              <a
                href={companyDetails.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm transition-colors shadow-md"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>Chat Instantly on WhatsApp</span>
              </a>

              <a
                href={`mailto:${companyDetails.email}`}
                className="flex items-center gap-4 text-white/80 hover:text-white transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-white/40">Email Us</div>
                  <div className="text-base font-medium">{companyDetails.email}</div>
                </div>
              </a>

              <div className="flex items-start gap-4 text-white/80">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 mt-1">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-white/40">Office Address</div>
                  <div className="text-sm font-normal leading-relaxed text-white/70">
                    {companyDetails.address}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Booking & Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-zinc-200/80 shadow-md">
            {status === 'success' ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
                <h3 className="text-2xl font-medium text-zinc-950">
                  Property Enquiry Received!
                </h3>
                <p className="text-zinc-600 max-w-md mx-auto">
                  Thank you for reaching out. Mr. Ganesh Yadav or our team will review your enquiry and contact you shortly regarding the requested details.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 px-6 py-2.5 rounded-full bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-colors"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-2">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-2">
                      Phone Number / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-2">
                      Project of Interest (Optional)
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 text-sm bg-white"
                    >
                      <option value="General Property Enquiry">General Property Enquiry</option>
                      <option value="Yaduraj Ojas">Yaduraj Ojas</option>
                      <option value="Bank Officers Colony">Bank Officers Colony</option>
                      <option value="Vivo City Colony">Vivo City Colony</option>
                      <option value="Imperial Galaxy Colony">Imperial Galaxy Colony</option>
                      <option value="Shree Krishna Vihar IV">Shree Krishna Vihar IV</option>
                      <option value="Site Visit Request">Site Visit Request</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-2">
                    Questions or Specific Enquiries
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what information you need regarding listed projects or scheduling a visit..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 text-sm"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-sm text-red-600">{errorMessage}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 rounded-full bg-zinc-950 text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-black transition-colors shadow-md disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === 'submitting' ? 'Submitting...' : 'Send Enquiry'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
