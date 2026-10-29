import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  MapPin,
  Landmark,
  Compass,
  Phone,
  ArrowRight,
  FileCheck,
  Building2,
  ExternalLink,
  Play,
  Sparkles,
} from 'lucide-react';
import { companyDetails } from '../data/consultareData';

const whatSetsUsApart = [
  'In association with Aadharshila Real Estate Group for planned plotted townships.',
  'Strict focus on JDA-approved layout plans and Rajasthan RERA-registered developments.',
  'Physical on-ground site visits with exact boundary demarcation and road width verification.',
  'Clear paper trail: title registry, 90A sanction files, and bank loan eligibility verified upfront.',
  'Independent due diligence encouraged — review all government documents before any commitment.',
];

const corePrinciples = [
  {
    icon: FileCheck,
    title: 'Document Review',
    description:
      'We encourage prospective buyers to inspect official layout plans, JDA approvals, and RERA registration documents prior to making any decision.',
  },
  {
    icon: MapPin,
    title: 'Growth Corridor Insights',
    description:
      'We help you evaluate plotted developments across Jaipur’s key corridors, including Mansarovar Extension, Diggi-Malpura Road, and Tonk Road.',
  },
  {
    icon: Compass,
    title: 'On-Ground Demarcation',
    description:
      'We coordinate personal site visits so you can physically inspect plot boundaries, road widths, and surrounding connectivity.',
  },
  {
    icon: Landmark,
    title: 'Bank Loan Assistance',
    description:
      'We guide buyers through transparent home and plot loan eligibility with leading nationalized and private financial institutions.',
  },
];

export const AboutPage: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    document.title =
      'About Ganesh Yadav | Trusted Real Estate Partner in Jaipur | JDA & RERA Approved Plots';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Learn about Ganesh Yadav and Invest With Ganesh, in association with Aadharshila Real Estate Group. Expert guidance on JDA & RERA approved residential plots in Jaipur.'
      );
    }
  }, []);

  return (
    <div className="bg-[#fcfcfb] min-h-screen text-zinc-900 pt-28 sm:pt-36 pb-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION (Consultaro Framer Style: Bold Typography + Hero Portrait) */}
        {/* ========================================================================= */}
        <section className="mb-20 sm:mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content Column (Appearing Animation) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-7 reveal-on-scroll">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-mono tracking-[0.16em] uppercase bg-zinc-100 text-zinc-700 border border-zinc-200/80 select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>WHO WE ARE</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-[54px] lg:text-[60px] font-medium tracking-tight text-zinc-950 leading-[1.08]">
                Trusted Real Estate Partner for JDA &amp; RERA Approved Plots in Jaipur.
              </h1>

              <p className="text-lg sm:text-xl text-zinc-800 font-medium leading-relaxed">
                At Invest With Ganesh, in association with{' '}
                <span className="text-zinc-950 font-semibold underline decoration-amber-400 decoration-2 underline-offset-4">
                  Aadharshila Real Estate Group
                </span>
                , we help families and investors find secure, verified residential plot opportunities in Jaipur’s rapidly developing growth corridors.
              </p>

              <p className="text-[15px] sm:text-[16px] text-zinc-600 leading-relaxed font-normal">
                With a strong focus on transparency, trust, and long-term value, our mission is to make property investment simple, safe, and legally documented for every buyer. Whether you are planning your family’s dream home or building a solid land asset, Mr. Ganesh Yadav guides you at every single step with verified property options, clear layout approvals, and on-ground demarcation before any commitment is made.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-zinc-950 text-white font-medium text-sm hover:bg-zinc-800 transition-all shadow-md active:scale-95 group"
                >
                  <span>Connect With Ganesh</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href={`tel:${companyDetails.phone}`}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white border border-zinc-200/90 text-zinc-800 text-sm font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-xs"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>{companyDetails.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Image Column (Appearing Animation: reveal-scale delay-150) */}
            <div className="lg:col-span-5 reveal-scale delay-150">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-zinc-200/80 group">
                <img
                  src="/wmremove-transformed.jpeg"
                  alt="Mr. Ganesh Yadav — Founder & Property Consultant, Invest With Ganesh"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-mono uppercase tracking-wider text-amber-300 mb-1 border border-white/20">
                    Founder &amp; Consultant
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    Ganesh Yadav
                  </h3>
                  <p className="text-xs text-zinc-300 font-normal">
                    In Association with Aadharshila Real Estate Group
                  </p>
                  <p className="text-[11px] text-zinc-400 font-mono pt-1">
                    Mansarovar Extension, Jaipur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. STATS & CREDIBILITY STRIP (Staggered Appearing Animation) */}
        {/* ========================================================================= */}
        <section className="mb-20 sm:mb-28">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white rounded-2xl p-6 border border-zinc-200/80 shadow-xs flex flex-col justify-between space-y-2 hover:border-zinc-300 transition-colors reveal-scale delay-75">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                Delivered Projects
              </span>
              <p className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
                5+
              </p>
              <p className="text-xs text-zinc-500">
                Landmark plotted townships in Jaipur
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-zinc-200/80 shadow-xs flex flex-col justify-between space-y-2 hover:border-zinc-300 transition-colors reveal-scale delay-150">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                Approvals Verified
              </span>
              <p className="text-3xl sm:text-4xl font-bold tracking-tight text-emerald-600">
                JDA &amp; RERA
              </p>
              <p className="text-xs text-zinc-500">
                100% documented sanction files
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-zinc-200/80 shadow-xs flex flex-col justify-between space-y-2 hover:border-zinc-300 transition-colors reveal-scale delay-200">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                Group Association
              </span>
              <p className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 truncate">
                Aadharshila
              </p>
              <p className="text-xs text-zinc-500">
                Real Estate Group development partner
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-zinc-200/80 shadow-xs flex flex-col justify-between space-y-2 hover:border-zinc-300 transition-colors reveal-scale delay-250">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                Site Inspection
              </span>
              <p className="text-3xl sm:text-4xl font-bold tracking-tight text-amber-700">
                On-Ground
              </p>
              <p className="text-xs text-zinc-500">
                Demarcated plot boundary walk-through
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. WHAT SETS US APART (Consultaro 2-Column Split: Image + Checklist) */}
        {/* ========================================================================= */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 border border-zinc-200/80 shadow-sm mb-20 sm:mb-28 reveal-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Visual Column: Township Photography (reveal-scale) */}
            <div className="lg:col-span-5 order-2 lg:order-1 reveal-scale delay-100">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] bg-zinc-900 border border-zinc-200/70 shadow-md group">
                <img
                  src="/projects/yaduraj-ojas-township.png"
                  alt="Jaipur Plotted Township Development — Verified JDA Layout"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-medium border border-white/20">
                    <Building2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Planned Plotted Township Infrastructure</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Checklist Column (reveal-on-scroll delay-150) */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2 reveal-on-scroll delay-150">
              <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-mono tracking-[0.16em] uppercase bg-zinc-100 text-zinc-700 border border-zinc-200/80 select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>OUR COMMITMENT</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-zinc-950 leading-[1.15]">
                Independent Verification &amp; Transparent Property Consultation
              </h2>

              <p className="text-[15px] sm:text-[16px] text-zinc-600 leading-relaxed font-normal">
                Purchasing residential land is one of the most significant financial steps a family undertakes. We eliminate ambiguity by providing full access to official records before you invest.
              </p>

              <div className="pt-2 space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-900 font-mono">
                  What Sets Us Apart:
                </p>
                <div className="space-y-3 pt-1">
                  {whatSetsUsApart.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5 fill-current" />
                      </div>
                      <span className="text-sm sm:text-[14.5px] text-zinc-700 leading-snug">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. FEATURED YOUTUBE VIDEO SECTION (Zone 9 Mega Road Connectivity Tour)    */}
        {/* ========================================================================= */}
        <section className="mb-20 sm:mb-28 reveal-on-scroll">
          <div className="max-w-4xl mx-auto text-center space-y-3.5 mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-mono tracking-[0.16em] uppercase bg-red-50 text-red-700 border border-red-200 select-none">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span>ON-GROUND VIDEO INSIGHTS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-medium tracking-tight text-zinc-950 leading-[1.12]">
              Jaipur Zone 9 Mega Road Connectivity &amp; Future Smart Area
            </h2>

            <p className="text-[15px] sm:text-[16.5px] text-zinc-600 leading-relaxed font-normal max-w-2xl mx-auto">
              जयपुर ज़ोन 9 मेगा रोड कनेक्टिविटी वाला भविष्य का स्मार्ट एरिया — Watch Mr. Ganesh Yadav
              explain why Zone 9 with planned 160ft &amp; 200ft mega arterial roads offers
              exceptional long-term appreciation potential for smart plotted investments.
            </p>
          </div>

          {/* YouTube Video Player / Facade Container */}
          <div className="relative max-w-5xl mx-auto">
            {/* Ambient Glow Aura */}
            <div className="absolute -inset-2 bg-gradient-to-r from-red-500/10 via-amber-500/10 to-red-500/10 rounded-3xl blur-2xl opacity-60 pointer-events-none" />

            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-200/90 bg-zinc-950 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)]">
              {/* 16:9 Aspect Ratio Box */}
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-900">
                {isVideoPlaying ? (
                  <iframe
                    src="https://www.youtube.com/embed/82HWVaodfYc?autoplay=1&rel=0&modestbranding=1"
                    title="जयपुर ज़ोन 9 मेगा रोड कनेक्टिविटी वाला भविष्य का स्मार्ट एरिया,Jaipur Zone 9 अभी खरीदो ,बाद में मज़े"
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <div
                    onClick={() => setIsVideoPlaying(true)}
                    className="group relative w-full h-full cursor-pointer select-none"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setIsVideoPlaying(true);
                      }
                    }}
                    aria-label="Play YouTube Video: Jaipur Zone 9 Mega Road Connectivity"
                  >
                    {/* Thumbnail Image */}
                    <img
                      src="/brand/yt-zone9-thumbnail.jpg"
                      alt="Jaipur Zone 9 High Growth Potential Area - Invest With Gaaneesh"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      loading="lazy"
                    />

                    {/* Dark gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/60 pointer-events-none" />

                    {/* Top Floating Bar: Channel info & Watch on YouTube button */}
                    <div className="absolute top-3 sm:top-5 inset-x-3 sm:inset-x-5 flex items-center justify-between z-10">
                      <div className="flex items-center gap-2.5 sm:gap-3 bg-black/60 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-white/15">
                        <img
                          src="/brand/yt-channel-avatar.jpg"
                          alt="Invest With Gaaneesh Avatar"
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover border border-white/20"
                        />
                        <div className="text-left">
                          <p className="text-xs sm:text-sm font-bold text-white leading-tight">
                            Invest With Gaaneesh
                          </p>
                          <p className="text-[10px] sm:text-[11px] text-zinc-300">
                            5.87k subscribers
                          </p>
                        </div>
                      </div>

                      <a
                        href="https://www.youtube.com/watch?v=82HWVaodfYc"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-semibold transition-all shadow-md active:scale-95 border border-red-500/50"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Watch on YouTube</span>
                        <span className="sm:hidden">YouTube</span>
                      </a>
                    </div>

                    {/* Center Animated YouTube Play Icon */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="relative flex items-center justify-center">
                        <span className="absolute w-20 h-14 sm:w-24 sm:h-16 md:w-28 md:h-20 rounded-2xl bg-red-600/40 animate-yt-ripple" />
                        <span className="absolute w-20 h-14 sm:w-24 sm:h-16 md:w-28 md:h-20 rounded-2xl bg-red-600/30 animate-yt-ripple-delay" />

                        <div className="relative animate-yt-breathe transition-transform duration-300 group-hover:scale-115">
                          <img
                            src="/icons/youtube.svg"
                            alt="Play Video"
                            className="w-16 sm:w-20 md:w-24 h-auto object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Bottom Bar: Title & Duration / Quality Chips */}
                    <div className="absolute bottom-3 sm:bottom-5 inset-x-3 sm:inset-x-6 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-2 text-white">
                      <div className="space-y-1 max-w-2xl text-left">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-amber-300 border border-white/10">
                          <span>Mega Roads: 160FT &amp; 200FT</span>
                        </div>
                        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white drop-shadow-sm line-clamp-2">
                          जयपुर ज़ोन 9 मेगा रोड कनेक्टिविटी वाला भविष्य का स्मार्ट एरिया,Jaipur Zone 9 अभी खरीदो ,बाद में मज़े
                        </h3>
                      </div>

                      <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                        <span className="px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md text-[11px] font-medium border border-white/15 text-white/90">
                          Click to Play 🎬
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 3 Key Takeaways from the Video */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-zinc-200/80 shadow-xs hover:border-zinc-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center font-bold text-sm mb-3">
                  01
                </div>
                <h4 className="text-base font-semibold text-zinc-950 mb-1.5">
                  2x 160FT &amp; 200FT Sector Roads
                </h4>
                <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed font-normal">
                  Direct connectivity through master planned 160ft &amp; 200ft arterial roads linking Zone 9 seamlessly to Jaipur Ring Road and prime commercial zones.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-zinc-200/80 shadow-xs hover:border-zinc-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center font-bold text-sm mb-3">
                  02
                </div>
                <h4 className="text-base font-semibold text-zinc-950 mb-1.5">
                  High Growth Potential Corridor
                </h4>
                <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed font-normal">
                  Rapid infrastructure development and upcoming residential expansion make this the ideal timing for long-term plotted wealth creation.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-zinc-200/80 shadow-xs hover:border-zinc-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center font-bold text-sm mb-3">
                  03
                </div>
                <h4 className="text-base font-semibold text-zinc-950 mb-1.5">
                  Verified JDA Schemes &amp; Demarcation
                </h4>
                <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed font-normal">
                  Complete transparency with verified JDA layout plans, clear title deeds, and personal on-ground site walk-throughs with Mr. Ganesh Yadav.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. CORE PRINCIPLES (Consultaro 4-Card Due Diligence Grid With Stagger) */}
        {/* ========================================================================= */}
        <section className="mb-20 sm:mb-28">
          <div className="max-w-2xl space-y-3 mb-10 sm:mb-12 reveal-on-scroll">
            <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-mono tracking-[0.16em] uppercase bg-zinc-100 text-zinc-700 border border-zinc-200/80 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
              <span>OUR GUIDING PRINCIPLES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-zinc-950">
              Clear Information &amp; Independent Due Diligence
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
              Every advice we offer is backed by official documentation and grounded in verifiable facts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {corePrinciples.map((principle, idx) => {
              const Icon = principle.icon;
              const delays = ['delay-75', 'delay-150', 'delay-200', 'delay-250'];
              const delayClass = delays[idx % delays.length];

              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-zinc-200/80 shadow-xs flex flex-col justify-between space-y-4 hover:border-zinc-300 hover:shadow-md transition-all duration-300 reveal-scale ${delayClass}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-zinc-100 border border-zinc-200/60 flex items-center justify-center text-zinc-900">
                    <Icon className="w-5 h-5 text-zinc-800" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-zinc-950 tracking-tight">
                      {principle.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed font-normal">
                      {principle.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. MASTER CTA (Consultaro Dark Luxury Aesthetic With reveal-scale) */}
        {/* ========================================================================= */}
        <section className="relative rounded-3xl sm:rounded-[32px] bg-[#161512] text-white overflow-hidden border border-white/10 p-8 sm:p-12 md:p-16 shadow-[0_24px_64px_rgba(0,0,0,0.35)] reveal-scale">
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='rgb(255%2C%20197%2C%2091)' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              backgroundRepeat: 'repeat',
            }}
          />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-mono tracking-[0.16em] uppercase bg-white/[0.08] text-zinc-300 border border-white/15 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>PLAN YOUR SITE VISIT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.12] tracking-[-0.03em] text-white">
              Ready to see JDA &amp; RERA approved plots in Jaipur for yourself?
            </h2>

            <p className="text-[14.5px] sm:text-[16.5px] text-zinc-400 font-normal leading-relaxed max-w-2xl mx-auto">
              Schedule a personal on-ground site visit with Mr. Ganesh Yadav. Walk the demarcated boundaries, inspect official JDA approvals, and decide with every fact in front of you.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-100 transition-all shadow-lg active:scale-95"
              >
                <span>Book Site Visit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${companyDetails.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.08] text-white border border-white/15 font-semibold text-sm hover:bg-white/15 transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>{companyDetails.phone}</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
