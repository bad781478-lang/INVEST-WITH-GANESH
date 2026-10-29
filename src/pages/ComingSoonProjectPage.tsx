import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Check,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Building,
  TreePine,
  Lightbulb,
  Route,
  Users,
  Shield,
  Share2,
  ShieldCheck,
  Sparkles,
  MapPin,
  Calendar,
} from 'lucide-react';

const galleryImages = [
  {
    src: '/projects/coming-soon/township-grand-entrance.jpg',
    title: 'Grand Entrance Arch & Paved Boulevard',
    caption:
      'Majestic sandstone entrance portal with security checkpoint, wide boulevard, palm trees, and dusk lighting.',
  },
  {
    src: '/projects/coming-soon/master-layout-map.jpg',
    title: 'Master Planned Sector Layout Plan',
    caption:
      'Thoughtfully demarcated 100 to 250 Sq. Yard residential plots with 40ft, 60ft & 80ft internal sector roads.',
  },
  {
    src: '/projects/coming-soon/image-55.jpg',
    title: 'Major Highway Interchange & Expressway Hub',
    caption:
      'Direct cloverleaf connectivity linking Daulatpura, Sirani, and prime Jaipur arterial corridors.',
  },
  {
    src: '/projects/coming-soon/coming-soon.jpg',
    title: 'Project Launch Spotlight & Teaser',
    caption:
      'Pre-launch registration phase with priority plot allotment and early-bird investor pricing.',
  },
  {
    src: '/projects/coming-soon/growth-chart-thumb.jpg',
    title: 'High Appreciation Growth Corridor',
    caption:
      'Data-driven capital growth potential across Jaipur’s emerging infrastructure expansion zone.',
  },
];

const featuresData = [
  {
    icon: Building,
    title: 'GATED COMMUNITY',
    description:
      'Enjoy secure gated entry with a peaceful and well-planned residential environment designed for modern living.',
  },
  {
    icon: TreePine,
    title: 'GREEN ENVIRONMENT',
    description:
      'Experience open spaces, landscaped greenery, and a refreshing atmosphere that brings comfort to everyday life.',
  },
  {
    icon: Lightbulb,
    title: 'MODERN AMENITIES',
    description:
      'Developed with essential lifestyle amenities, wide roads, street lighting, and quality infrastructure for families.',
  },
  {
    icon: Route,
    title: 'WIDE CONNECTIVITY',
    description:
      'Smooth road connectivity with convenient access to schools, markets, hospitals, and major city locations.',
  },
  {
    icon: Users,
    title: 'FAMILY FRIENDLY COMMUNITY',
    description:
      'A safe and welcoming neighborhood designed for comfortable family living and a better future.',
  },
  {
    icon: Shield,
    title: '24×7 SECURITY',
    description:
      'Advanced security features with gated access and round-the-clock safety for complete peace of mind.',
  },
];

export const ComingSoonProjectPage: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeViewTab, setActiveViewTab] = useState<'360' | 'map'>('360');
  const [copied, setCopied] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Coming Soon Project - investwithgaaneesh.com';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Why Smart Investors Are Choosing This Location. Located in the rapidly developing Sirani growth corridor near Jaipur, this project offers the perfect combination of connectivity, future appreciation, and planned development.'
      );
    }
  }, []);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'Coming Soon Project | Invest With Ganesh',
          text: 'Explore Planned Growth Corridor Township in Jaipur with Invest With Ganesh',
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxOpen(false);
      } else if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
      } else if (e.key === 'ArrowLeft') {
        setActiveImageIndex(
          (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  // Touch swipe support for lightbox
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // swipe left -> next
        setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
      } else {
        // swipe right -> prev
        setActiveImageIndex(
          (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
        );
      }
    }
    setTouchStartX(null);
  };

  return (
    <div className="bg-white min-h-screen text-zinc-900">
      {/* 1. HERO SECTION: 0% border-radius, framed equal gap, darkness overlay, Ken Burns, staggered animations */}
      <div className="pt-24 sm:pt-28 md:pt-32 pb-4 sm:pb-6 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
          <div className="relative rounded-none overflow-hidden h-[460px] sm:h-[520px] md:h-[580px] lg:h-[620px] max-h-[82vh] shadow-xl border border-zinc-200/80 group">
            {/* Background Image with Ken Burns animation */}
            <div
              className="w-full h-full bg-cover bg-center ken-burns-active"
              role="img"
              aria-label="Planned Growth Corridor Township entrance and infrastructure corridor"
              style={{
                backgroundImage: 'url("/projects/coming-soon/township-grand-entrance.jpg")',
                backgroundPosition: '50% 50%',
              }}
            />

            {/* Darkness overlay for readability */}
            <div className="absolute inset-0 bg-black/40 transition-colors" />

            {/* Gradient bottom feathering */}
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

            {/* Top right badges */}
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 flex flex-wrap items-center gap-2 z-10 animate-hero-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-[#BD9A68] text-white shadow-md uppercase tracking-wider backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5" />
                Upcoming Project
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-black/60 text-emerald-400 border border-emerald-500/40 shadow-md uppercase tracking-wider backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                JDA &amp; RERA In Progress
              </span>
            </div>

            {/* Hero Text & CTA Center Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 md:p-14 text-white z-10">
              <div className="max-w-3xl space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-mono tracking-[0.2em] text-[#BD9A68] uppercase font-semibold animate-hero-1">
                  <MapPin className="w-4 h-4 text-[#BD9A68]" />
                  <span>Sirani &amp; Daulatpura Growth Belt, Jaipur</span>
                </div>

                <h1
                  className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.08] drop-shadow-md animate-hero-2"
                  style={{
                    fontFamily: 'Onest, "Plus Jakarta Sans", sans-serif',
                  }}
                >
                  Coming Soon Project
                </h1>

                <p className="text-sm sm:text-base md:text-lg text-white/90 font-normal leading-relaxed max-w-2xl drop-shadow-sm animate-hero-3">
                  A newly planned residential plotted township in Jaipur scheduled for launch.
                  Connect with Mr. Ganesh Yadav to receive verified layout files, priority allotment
                  updates, and early site visit invites.
                </p>

                <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-3 sm:gap-4 animate-hero-4">
                  <a
                    href="https://wa.me/917851982209?text=Hi%20Ganesh%2C%20I%20am%20interested%20in%20the%20Coming%20Soon%20Project%20(Planned%20Growth%20Corridor%20Township)%20near%20Daulatpura%20%2F%20Sirani%20Jaipur.%20Please%20share%20priority%20booking%20details%20and%20layout%20maps."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-7 py-3 sm:px-8 sm:py-3.5 rounded-xl bg-white text-zinc-950 font-semibold text-sm sm:text-base hover:bg-[#BD9A68] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 cursor-pointer hover:scale-105"
                    style={{
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    Pre-Register Now
                  </a>
                  <a
                    href="tel:+917851982209"
                    className="inline-flex items-center justify-center px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl bg-black/60 hover:bg-black/85 text-white border border-white/20 font-medium text-sm sm:text-base backdrop-blur-sm transition-all duration-300 active:scale-95"
                  >
                    📞 Call +91-7851982209
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. SECTION 2: Overview & Specs (Left Image rounded-[20px], Right Text) */}
      <div className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-14">
            {/* Left Column: Highway Cloverleaf Interchange Feature Image */}
            <div className="w-full lg:w-[48%] shrink-0 reveal-slide-left">
              <div className="relative rounded-[20px] overflow-hidden shadow-lg border border-zinc-200/80 bg-zinc-100 group hover-lift">
                <img
                  alt="Daulatpura and Sirani highway cloverleaf junction near Jaipur"
                  className="w-full h-auto object-cover rounded-[20px] group-hover:scale-105 transition-transform duration-700"
                  src="/projects/coming-soon/image-55.jpg"
                />
                <div className="absolute bottom-3 left-3 right-3 px-3 py-2 bg-black/60 backdrop-blur-md rounded-lg text-xs text-white flex items-center justify-between">
                  <span>Major Arterial Highway Cloverleaf</span>
                  <span className="text-[#BD9A68] font-semibold">Sirani Corridor</span>
                </div>
              </div>
            </div>

            {/* Right Column: Title, Description, Specifications */}
            <div className="w-full lg:w-[52%] flex flex-col justify-center space-y-5 sm:space-y-6 reveal-slide-right delay-100">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#BD9A68] font-semibold block">
                  Strategic Location Advantage
                </span>
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#BD9A68] leading-tight"
                  style={{
                    fontFamily: 'Onest, "Plus Jakarta Sans", sans-serif',
                  }}
                >
                  Why Smart Investors Are Choosing This Location
                </h2>
              </div>

              <div
                className="space-y-3 text-sm sm:text-[15px] leading-relaxed text-[#797978]"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                <p>
                  Located in the rapidly developing Sirani growth corridor near Jaipur, this project
                  offers the perfect combination of connectivity, future appreciation, and planned
                  development. With expanding infrastructure, wide road access, and a growing
                  residential ecosystem, it presents a valuable opportunity for both investors and
                  future homeowners looking for long-term returns and secure investments.
                </p>
                <p>
                  As Jaipur continues to expand toward high-growth employment hubs and major arterial
                  expressways, early investors secure high capital appreciation potential before major
                  commercial corridors mature.
                </p>
              </div>

              {/* Township Specifications Grid */}
              <div className="pt-2">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-950 mb-3 font-mono">
                  Township Specifications
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80 hover-lift">
                    <span className="text-[11px] font-mono uppercase text-zinc-500 font-semibold block">
                      Location
                    </span>
                    <span className="text-sm sm:text-[15px] font-semibold text-zinc-900 mt-0.5 block">
                      Daulatpura, Jaipur, 302026
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80 hover-lift">
                    <span className="text-[11px] font-mono uppercase text-zinc-500 font-semibold block">
                      Project Type
                    </span>
                    <span className="text-sm sm:text-[15px] font-semibold text-zinc-900 mt-0.5 block">
                      Residential Plots (Gated Township)
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80 hover-lift">
                    <span className="text-[11px] font-mono uppercase text-zinc-500 font-semibold block">
                      Approvals
                    </span>
                    <span className="text-sm sm:text-[15px] font-semibold text-emerald-700 mt-0.5 block">
                      JDA &amp; RERA Documentation Underway
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80 hover-lift">
                    <span className="text-[11px] font-mono uppercase text-zinc-500 font-semibold block">
                      Plot Sizes
                    </span>
                    <span className="text-sm sm:text-[15px] font-semibold text-zinc-900 mt-0.5 block">
                      100 Sq YRD to 250 Sq YRD (Tentative)
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Share & Copy Link */}
              <div className="pt-2 flex items-center gap-3">
                <span className="text-xs font-mono uppercase text-zinc-500 font-medium">
                  Share Project:
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleShare}
                    aria-label="Share project"
                    className="w-9 h-9 rounded bg-[#BD9A68]/10 text-[#BD9A68] hover:bg-[#BD9A68] hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleCopyLink}
                    aria-label="Copy Link"
                    className="w-9 h-9 rounded bg-[#BD9A68]/10 text-[#BD9A68] hover:bg-[#BD9A68] hover:text-white flex items-center justify-center transition-all duration-300 relative cursor-pointer"
                    title="Copy Link to Clipboard"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                    </svg>
                  </button>

                  {copied && (
                    <span className="text-xs font-mono text-emerald-600 font-semibold animate-pulse">
                      Link Copied!
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. SECTION 3: Why Choose / Game Changer (TEXT LEFT, IMAGE RIGHT - user specification) */}
      <div className="py-12 sm:py-16 md:py-20 bg-zinc-50/60 border-y border-zinc-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-14">
            {/* Left Column: Heading & Bullet Points (Text on the Left) */}
            <div className="w-full lg:w-[52%] flex flex-col justify-center space-y-5 sm:space-y-6 reveal-slide-left hover-lift">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#BD9A68] font-semibold block">
                  Future-Ready Infrastructure
                </span>
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#BD9A68] leading-tight"
                  style={{
                    fontFamily: 'Onest, "Plus Jakarta Sans", sans-serif',
                  }}
                >
                  How This Project Can Become a Game Changer
                </h2>
              </div>

              <p
                className="text-sm sm:text-[15px] leading-relaxed text-[#797978]"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                As Jaipur continues to expand towards emerging growth zones, strategically located
                plotted developments are becoming the preferred choice for investors. This project
                stands out with its prime location, development potential, and future-ready
                planning.
              </p>

              {/* Checklist items */}
              <ul
                className="space-y-3.5 text-xs sm:text-[14.5px] leading-relaxed text-[#797978]"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#BD9A68]/15 text-[#BD9A68] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>
                    <strong>Prime Emerging Growth Corridor:</strong> Strategically situated along
                    the Sirani &amp; Daulatpura growth zone with multi-lane expressway connectivity.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#BD9A68]/15 text-[#BD9A68] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>
                    <strong>Wide Internal Sector Roads:</strong> Planned 40, 60 &amp; 80-foot wide
                    colony roads with tree plantations and organized vehicular circulation.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#BD9A68]/15 text-[#BD9A68] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>
                    <strong>Landscaped Open Spaces:</strong> Dedicated central community park,
                    jogging tracks, children play zones, and peaceful green surroundings.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#BD9A68]/15 text-[#BD9A68] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>
                    <strong>Early Stage Price Advantage:</strong> Pre-launch allotment privileges
                    offering maximum long-term capital appreciation for families and smart investors.
                  </span>
                </li>
              </ul>

              <div className="pt-2">
                <a
                  href="https://wa.me/917851982209?text=Hi%20Ganesh%2C%20please%20send%20me%20the%20pre-launch%20master%20layout%20plan%20and%20plot%20sizes%20for%20Coming%20Soon%20Project%20(Daulatpura%20%2F%20Sirani%20Jaipur)."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#BD9A68] text-white font-semibold text-sm hover:bg-[#a67d47] transition-all shadow-md active:scale-95"
                >
                  <span>Request Master Layout &amp; Pre-Launch Rates</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Right Column: Master Layout Map (Image on the Right - rounded-[20px]) */}
            <div className="w-full lg:w-[48%] shrink-0 reveal-slide-right delay-100">
              <div className="relative rounded-[20px] overflow-hidden shadow-lg border border-zinc-200/80 bg-zinc-100 group hover-lift">
                <img
                  alt="Planned residential plotted township master layout plan in Jaipur"
                  className="w-full h-auto object-cover rounded-[20px] group-hover:scale-105 transition-transform duration-700"
                  src="/projects/coming-soon/master-layout-map.jpg"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white pointer-events-none">
                  <span className="px-4 py-2 bg-black/75 backdrop-blur-md rounded-full text-xs font-semibold">
                    Master Planned Sector Layout
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. SECTION 4: Photo Gallery & 360° Virtual Tour / Street View */}
      <div className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#BD9A68] font-semibold block">
                On-Ground Exploration
              </span>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-950 leading-tight"
                style={{
                  fontFamily: 'Onest, "Plus Jakarta Sans", sans-serif',
                }}
              >
                Photo Gallery &amp; 360° Virtual Tour
              </h2>
            </div>

            {/* Tab switch between 360 Tour and Map */}
            <div className="flex items-center gap-1.5 p-1 bg-zinc-100 rounded-full border border-zinc-200/80 self-start sm:self-auto text-xs">
              <button
                onClick={() => setActiveViewTab('360')}
                className={`px-4 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
                  activeViewTab === '360'
                    ? 'bg-white text-zinc-950 shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                360° Street View
              </button>
              <button
                onClick={() => setActiveViewTab('map')}
                className={`px-4 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
                  activeViewTab === 'map'
                    ? 'bg-white text-zinc-950 shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                Location Map
              </button>
            </div>
          </div>

          {/* Interactive Street View / Map Embed Frame */}
          <div className="w-full h-80 sm:h-96 md:h-[440px] rounded-[20px] overflow-hidden border border-zinc-200 shadow-sm bg-zinc-100 mb-8 relative">
            {activeViewTab === '360' ? (
              <iframe
                title="360 Virtual Tour Street View - Sirani / Daulatpura Jaipur"
                src="https://www.google.com/maps/embed?pb=!4v1780039146159!6m8!1m7!1sRx2uSvH7l92vr9odwbX7dg!2m2!1d26.76759710809926!2d75.63789215329739!3f243.91114241246242!4f-6.721970147909289!5f0.7820865974627469"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              />
            ) : (
              <iframe
                title="Location Map - Daulatpura / Sirani Jaipur"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.629555122704!2d75.637892!3d26.767597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDQ2JzAzLjMiTiA3NcKwMzgnMTYuNCJF!5e0!3m2!1sen!2sin!4v1780039146159!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              />
            )}
          </div>

          {/* 4-Card Gallery Preview Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            {galleryImages.slice(0, 4).map((img, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setActiveImageIndex(idx);
                  setLightboxOpen(true);
                }}
                className="group relative h-40 sm:h-48 rounded-xl overflow-hidden cursor-pointer shadow-xs border border-zinc-200/80 bg-zinc-100 hover-lift reveal-scale"
              >
                <img
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={img.src}
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <Maximize2 className="w-5 h-5 drop-shadow" />
                </div>
                <div className="absolute bottom-2 left-2 right-2 px-2 py-1 bg-black/60 backdrop-blur-xs rounded text-[11px] text-white truncate">
                  {img.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Fullscreen Modal with Prev/Next Navigation Arrows, Touch & Key Support */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-fade-in"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Bar: Counter & Close */}
          <div className="flex items-center justify-between z-50">
            <span className="text-white/80 font-mono text-xs sm:text-sm bg-white/10 px-3 py-1 rounded-full border border-white/10">
              {activeImageIndex + 1} / {galleryImages.length}
            </span>
            <button
              onClick={() => setLightboxOpen(false)}
              aria-label="Close Lightbox"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm border border-white/15"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Fullscreen Stage with Left / Right Arrows */}
          <div className="relative flex-grow flex items-center justify-center my-2 sm:my-4 select-none">
            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIndex(
                  (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
                );
              }}
              aria-label="Previous Image"
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer shadow-xl backdrop-blur-sm group"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            {/* Current Image */}
            <div className="max-w-5xl max-h-[70vh] sm:max-h-[75vh] flex items-center justify-center overflow-hidden rounded-xl">
              <img
                src={galleryImages[activeImageIndex].src}
                alt={galleryImages[activeImageIndex].title}
                className="max-h-[70vh] sm:max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl transition-all duration-300"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
              }}
              aria-label="Next Image"
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer shadow-xl backdrop-blur-sm group"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Bottom Caption & Thumbnail Strip */}
          <div className="space-y-3 z-50 max-w-4xl mx-auto w-full text-center">
            <div>
              <h4 className="text-white font-semibold text-sm sm:text-base">
                {galleryImages[activeImageIndex].title}
              </h4>
              <p className="text-white/60 text-xs sm:text-sm mt-0.5 max-w-2xl mx-auto">
                {galleryImages[activeImageIndex].caption}
              </p>
            </div>

            {/* Thumbnails */}
            <div className="flex items-center justify-center gap-2 overflow-x-auto py-1">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-14 h-10 sm:w-16 sm:h-12 rounded-lg overflow-hidden shrink-0 transition-all cursor-pointer border-2 ${
                    activeImageIndex === idx
                      ? 'border-[#BD9A68] scale-105 shadow-md opacity-100'
                      : 'border-transparent opacity-50 hover:opacity-90'
                  }`}
                >
                  <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 5. SECTION 5: Township Amenities (6 feature cards matching all other pages) */}
      <div id="township-amenities" className="py-14 sm:py-20 md:py-24 bg-zinc-50/70 border-t border-zinc-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#BD9A68] font-semibold block">
              Amenities &amp; Lifestyle
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-950 leading-tight"
              style={{
                fontFamily: 'Onest, "Plus Jakarta Sans", sans-serif',
              }}
            >
              Modern Amenities for an Elevated Lifestyle
            </h2>
            <p className="text-sm sm:text-base text-zinc-600">
              The township is planned with high-standard infrastructure, landscaped parks, and
              essential amenities designed for peaceful family living and long-term value.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuresData.map((f, i) => {
              const IconComp = f.icon;
              return (
                <div
                  key={i}
                  className="bg-white p-6 sm:p-8 rounded-2xl border border-zinc-200/80 shadow-xs hover-lift reveal-scale transition-all duration-300 space-y-3.5 group hover:border-[#BD9A68]/60"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#BD9A68]/10 text-[#BD9A68] flex items-center justify-center group-hover:bg-[#BD9A68] group-hover:text-white transition-all duration-300">
                    <IconComp className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold font-mono tracking-wider text-zinc-950 uppercase">
                    {f.title}
                  </h3>
                  <p className="text-xs sm:text-[14px] text-zinc-600 leading-relaxed">
                    {f.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 6. SECTION 6: Independent Due Diligence & Pre-Registration Callout (NO INQUIRY FORM) */}
      <div className="py-12 sm:py-16 bg-white border-t border-zinc-200/70">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="bg-[#faf8f5] rounded-3xl p-6 sm:p-10 border border-[#BD9A68]/30 shadow-sm space-y-6 reveal-on-scroll">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                <ShieldCheck className="w-7 h-7 stroke-[1.8]" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base sm:text-lg font-bold text-zinc-950">
                  Independent Due Diligence Encouraged
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Before booking, buyers are encouraged to inspect official layout plans, JDA
                  approval orders, and RERA registration documents directly. Personal on-ground
                  boundary walk-throughs and priority allotment briefings are arranged by Mr. Ganesh
                  Yadav.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-zinc-900">
                  Interested in Pre-Launch Registration?
                </p>
                <p className="text-xs text-zinc-500">
                  Schedule a private site visit &amp; get tentative allotment pricing.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <a
                  href="https://wa.me/917851982209?text=Hi%20Ganesh%2C%20I%20want%20to%20schedule%20a%20site%20visit%20for%20the%20Coming%20Soon%20Project%20in%20Jaipur."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#25D366] text-white text-xs sm:text-sm font-semibold hover:bg-emerald-600 transition-all shadow-sm active:scale-95"
                >
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href="tel:+917851982209"
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-white border border-zinc-300 text-zinc-800 text-xs sm:text-sm font-medium hover:bg-zinc-100 transition-all shadow-xs active:scale-95"
                >
                  <span>Call +91-7851982209</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
