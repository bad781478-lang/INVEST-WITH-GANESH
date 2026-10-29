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
} from 'lucide-react';

const galleryImages = [
  {
    src: '/projects/shree-krishna/image-3.jpg',
    title: 'Grand Entrance Gate & Security Portal',
    caption: 'Secure gated township entrance with modern columns, pavers, and lush plantation on Jaisinghpura Road, Jaipur',
  },
  {
    src: '/projects/shree-krishna/image-1-1.jpg',
    title: 'Community Temple & Landscaped Children Park',
    caption: 'Serene temple pavilion, lush green lawns, children play area, and outdoor fitness amenities',
  },
  {
    src: '/projects/shree-krishna/image-2-1.jpg',
    title: 'Master Planned Plotted Sector Layout',
    caption: 'Thoughtfully demarcated residential and commercial plots with wide internal roads and planned greenery',
  },
  {
    src: '/projects/shree-krishna/image-4.jpg',
    title: 'Illuminated Evening Entrance Boulevard',
    caption: 'Warm decorative lighting, secure boundary walls, and manicured landscaping creating a welcoming aura',
  },
  {
    src: '/projects/shree-krishna/image-3-2023.jpg',
    title: 'Internal Sector Avenue & Green Corridors',
    caption: 'Wide organized paved roads with underground utilities, streetlights, and peaceful surroundings',
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

export const ShreeKrishnaViharIVPage: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeViewTab, setActiveViewTab] = useState<'360' | 'map'>('360');
  const [copied, setCopied] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Shree Krishna Vihar – IV - investwithgaaneesh.com';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Shree Krishna Vihar - IV A thoughtfully planned township offering secure living and smart investment opportunities in Jaipur. JDA & RERA Approved residential plots.'
      );
    }
  }, []);

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (e.key === 'ArrowRight') {
        handleNextImage();
      } else if (e.key === 'Escape') {
        setLightboxOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  const handleCopyLink = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-white min-h-screen text-zinc-950">
      {/* ========================================================================= */}
      {/* 1. EXACT 1ST SECTION: FRAMED HERO BANNER WITH EQUAL GAPS & 0% BORDER RADIUS */}
      {/* ========================================================================= */}
      <section className="bg-white p-3 sm:p-4 md:p-6">
        <div className="relative h-[460px] sm:h-[490px] md:h-[520px] w-full rounded-none overflow-hidden flex items-center justify-center text-center bg-black shadow-sm">
          {/* Background Graphic Image with exact Ken Burns zoom */}
          <div className="absolute inset-0 z-0 overflow-hidden rounded-none">
            <div
              className="w-full h-full bg-cover bg-center ken-burns-active"
              style={{
                backgroundImage: 'url("/projects/shree-krishna/image-3.jpg")',
                backgroundPosition: '50% 50%',
              }}
              role="img"
              aria-label="Shree Krishna Vihar IV grand entrance gate and landscaped township boulevard"
            />
            {/* Subtle dark overlay for crisp readability */}
            <div className="absolute inset-0 bg-black/30 pointer-events-none" />
          </div>

          {/* Content Container */}
          <div className="relative z-10 w-full max-w-[800px] mx-auto p-6 sm:p-10 flex flex-col items-center justify-center">
            {/* Slide Heading */}
            <h1
              className="text-3xl sm:text-5xl md:text-[52px] font-semibold text-white tracking-tight leading-tight mb-3 animate-hero-1"
              style={{
                fontFamily: '"Roboto", "Plus Jakarta Sans", sans-serif',
                textShadow: '0 2px 14px rgba(0, 0, 0, 0.75), 0 1px 3px rgba(0, 0, 0, 0.9)',
              }}
            >
              Shree Krishna Vihar - IV
            </h1>

            {/* Slide Description */}
            <p
              className="text-xs sm:text-[14.5px] md:text-[15.5px] text-white max-w-[680px] mx-auto font-normal leading-snug mb-5 px-4 animate-hero-2"
              style={{
                fontFamily: '"Roboto Slab", "Plus Jakarta Sans", serif',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.8), 0 1px 2px rgba(0, 0, 0, 0.95)',
              }}
            >
              A thoughtfully planned township offering secure living and smart investment opportunities in Jaipur.
            </p>

            {/* Slide Button */}
            <a
              href="https://wa.me/917851982209?text=Hello%20Mr.%20Ganesh%20Yadav,%20I%20want%20to%20book%20a%20site%20visit%20for%20Shree%20Krishna%20Vihar%20IV%20RERA%20%26%20JDA%20approved%20plots%20in%20Jaipur."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-[22px] py-[10px] sm:px-[26px] sm:py-[11px] rounded-[7px] bg-white text-[#BD9A68] border-2 border-[#BD9A68] font-medium text-xs sm:text-[14.5px] leading-none hover:bg-[#BD9A68] hover:text-white transition-all duration-300 shadow-md active:scale-95 cursor-pointer animate-hero-3 hover:scale-105"
              style={{ fontFamily: '"Roboto", sans-serif' }}
            >
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. EXACT 2ND SECTION: OVERVIEW & SPECIFICATIONS                            */}
      {/* ========================================================================= */}
      <section id="overview" className="bg-white py-14 sm:py-16 md:py-20 border-b border-zinc-100">
        <div className="max-w-[1260px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
            {/* Left Column: Image 1-1 (Community Temple & Park) */}
            <div className="w-full lg:w-1/2 shrink-0 reveal-slide-left">
              <div className="relative rounded-[20px] overflow-hidden shadow-xs hover-lift">
                <img
                  src="/projects/shree-krishna/image-1-1.jpg"
                  alt="Shree Krishna Vihar IV community temple and children landscaped park in Jaipur"
                  className="w-full h-auto object-cover rounded-[20px] hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Right Column: Title (#BD9A68), Paragraphs & Specs Table */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center reveal-slide-right delay-100">
              <h2
                className="text-2xl sm:text-[36px] font-bold text-[#BD9A68] leading-tight mb-3 sm:mb-4"
                style={{ fontFamily: '"Onest", "Plus Jakarta Sans", sans-serif' }}
              >
                Shree Krishna Vihar -IV
              </h2>

              <div
                className="text-xs sm:text-[14px] md:text-[14.5px] leading-[25px] sm:leading-[27px] text-black font-normal mb-5 space-y-3"
                style={{ fontFamily: '"Montserrat", sans-serif' }}
              >
                <p>
                  Shree Krishna Vihar is a well-planned residential township located on Jaisinghpura Road, Jaipur, offering secure living and smart investment opportunities. Developed with modern infrastructure, wide roads, and a peaceful environment, the project features legally approved plots with excellent connectivity and strong future growth potential.
                </p>
                <p>
                  Designed for families and investors alike, Shree Krishna Vihar combines planned development, essential amenities, and green surroundings to create a comfortable and future-ready community lifestyle.
                </p>
              </div>

              {/* Specifications List */}
              <div className="flex flex-col mb-5 sm:mb-6" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                <div className="flex items-center text-xs sm:text-[14px] leading-relaxed text-[#797978] mb-2">
                  <span className="w-32 sm:w-40 shrink-0 font-normal text-[#797978]">Location</span>
                  <span className="font-normal text-black">Jaisinghpura, Jaipur, 302026</span>
                </div>
                <div className="flex items-center text-xs sm:text-[14px] leading-relaxed text-[#797978] mb-2">
                  <span className="w-32 sm:w-40 shrink-0 font-normal text-[#797978]">Project Type</span>
                  <span className="font-normal text-black">Residential Plots (Gated Township)</span>
                </div>
                <div className="flex items-center text-xs sm:text-[14px] leading-relaxed text-[#797978] mb-2">
                  <span className="w-32 sm:w-40 shrink-0 font-normal text-[#797978]">Approvals</span>
                  <span className="font-normal text-black">JDA &amp; RERA Approved</span>
                </div>
                <div className="flex items-center text-xs sm:text-[14px] leading-relaxed text-[#797978]">
                  <span className="w-32 sm:w-40 shrink-0 font-normal text-[#797978]">Plot Size</span>
                  <span className="font-normal text-black">111 Sq YRD to 300 Sq YRD</span>
                </div>
              </div>

              {/* Social Share Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded bg-[#BD9A68]/10 text-[#BD9A68] hover:bg-[#BD9A68] hover:text-white flex items-center justify-center transition-all duration-300"
                  aria-label="Share on Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded bg-[#BD9A68]/10 text-[#BD9A68] hover:bg-[#BD9A68] hover:text-white flex items-center justify-center transition-all duration-300"
                  aria-label="Share on Pinterest"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.334 1.357-.057.24-.19.29-.438.175-1.637-.762-2.66-3.153-2.66-5.076 0-4.135 3.008-7.933 8.672-7.933 4.551 0 8.09 3.244 8.09 7.58 0 4.522-2.851 8.163-6.808 8.163-1.329 0-2.579-.691-3.007-1.507l-.818 3.118c-.296 1.134-1.096 2.556-1.633 3.429C9.791 23.87 10.874 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded bg-[#BD9A68]/10 text-[#BD9A68] hover:bg-[#BD9A68] hover:text-white flex items-center justify-center transition-all duration-300"
                  aria-label="Share on X"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded bg-[#BD9A68]/10 text-[#BD9A68] hover:bg-[#BD9A68] hover:text-white flex items-center justify-center transition-all duration-300"
                  aria-label="Share on LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <button
                  onClick={handleCopyLink}
                  className="w-9 h-9 rounded bg-[#BD9A68]/10 text-[#BD9A68] hover:bg-[#BD9A68] hover:text-white flex items-center justify-center transition-all duration-300 relative cursor-pointer"
                  aria-label="Copy Link"
                >
                  <Share2 className="w-4 h-4" />
                  {copied && (
                    <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-[10px] px-2 py-0.5 rounded shadow">
                      Copied!
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. EXACT 3RD SECTION: WHY SHREE KRISHNA VIHAR IS THE RIGHT CHOICE          */}
      {/* (TEXT & CHECKLIST ON LEFT, IMAGE ON RIGHT - EXACT MATCH TO REQUESTED FLOW) */}
      {/* ========================================================================= */}
      <section className="bg-white pt-6 pb-12 sm:pt-8 sm:pb-16 border-b border-zinc-100">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
            {/* Left Column: Why Shree Krishna Vihar Is the Right Choice Checklist */}
            <div className="w-full lg:w-[52%] flex flex-col justify-center space-y-4 sm:space-y-5 reveal-slide-left">
              <h2
                className="text-2xl sm:text-[36px] font-bold text-[#BD9A68] leading-tight"
                style={{ fontFamily: '"Onest", "Plus Jakarta Sans", sans-serif' }}
              >
                Why Shree Krishna Vihar Is the Right Choice
              </h2>

              <ul className="space-y-3.5 text-xs sm:text-[14.5px] leading-relaxed text-[#797978]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                <li className="flex items-start gap-3 hover-lift">
                  <div className="w-5 h-5 rounded-full bg-[#BD9A68]/15 text-[#BD9A68] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>Wide internal roads with organized township planning ensure smooth connectivity and a comfortable residential experience throughout Shree Krishna Vihar.</span>
                </li>
                <li className="flex items-start gap-3 hover-lift">
                  <div className="w-5 h-5 rounded-full bg-[#BD9A68]/15 text-[#BD9A68] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>Surrounded by a peaceful environment and open green spaces, Shree Krishna Vihar offers a healthy and family-friendly lifestyle in Jaipur.</span>
                </li>
                <li className="flex items-start gap-3 hover-lift">
                  <div className="w-5 h-5 rounded-full bg-[#BD9A68]/15 text-[#BD9A68] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>The project is equipped with essential infrastructure including electricity, water supply, and proper drainage systems for hassle-free living.</span>
                </li>
                <li className="flex items-start gap-3 hover-lift">
                  <div className="w-5 h-5 rounded-full bg-[#BD9A68]/15 text-[#BD9A68] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>Strategically located on Jaisinghpura Road, Jaipur, Shree Krishna Vihar provides excellent connectivity to major roads, schools, markets, and daily conveniences.</span>
                </li>
              </ul>
            </div>

            {/* Right Column: Image 2-1 (Master Layout Plan) */}
            <div className="w-full lg:w-[48%] shrink-0 reveal-slide-right delay-100">
              <div className="relative rounded-[20px] overflow-hidden hover-lift">
                <img
                  src="/projects/shree-krishna/image-2-1.jpg"
                  alt="Shree Krishna Vihar IV master plot layout and internal road network in Jaipur"
                  className="w-full h-auto object-cover rounded-[20px] hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. EXACT 4TH SECTION: PHOTO GALLERY & 360° VIRTUAL TOUR                   */}
      {/* ========================================================================= */}
      <section className="bg-zinc-50/70 py-16 sm:py-20 border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-zinc-200/80 reveal-on-scroll">
            <div className="space-y-1">
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-zinc-400 block">
                ON-GROUND EXPLORATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-zinc-950">
                Photo Gallery &amp; 360° Virtual Tour
              </h2>
            </div>

            <div className="flex items-center gap-2 bg-zinc-200/70 p-1 rounded-full text-xs self-start sm:self-auto">
              <button
                onClick={() => setActiveViewTab('360')}
                className={`px-4 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
                  activeViewTab === '360'
                    ? 'bg-white text-zinc-950 shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                360° Virtual Tour
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

          {/* Interactive Viewer Tab Container */}
          <div className="w-full h-[400px] sm:h-[480px] md:h-[540px] rounded-2xl overflow-hidden border border-zinc-200 shadow-sm bg-zinc-900 relative reveal-scale delay-100">
            {activeViewTab === '360' ? (
              <iframe
                title="Shree Krishna Vihar IV 360 Degree Virtual Map Tour"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4380.551925641468!2d75.69288022725885!3d26.83780223086755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4b00646f3825%3A0x782e9af30690124e!2sShri%20Krishna%20vihar%204th!5e1!3m2!1sen!2sin!4v1779716498239!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <iframe
                title="Shree Krishna Vihar IV Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14240.2!2d75.69288!3d26.8378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4b00646f3825%3A0x782e9af30690124e!2sShri%20Krishna%20vihar%204th%2C%20Jaisinghpura%2C%20Jaipur!5e0!3m2!1sen!2sin!4v1714000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            )}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            {galleryImages.slice(0, 4).map((img, idx) => {
              const delays = ['delay-75', 'delay-150', 'delay-200', 'delay-250'];
              return (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveImageIndex(idx);
                    setLightboxOpen(true);
                  }}
                  className={`group relative h-40 sm:h-48 rounded-xl overflow-hidden cursor-pointer shadow-xs border border-zinc-200/80 bg-zinc-100 reveal-scale ${delays[idx % delays.length]}`}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <Maximize2 className="w-5 h-5 drop-shadow" />
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 px-2 py-1 bg-black/60 backdrop-blur-xs rounded text-[11px] text-white truncate">
                    {img.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. EXACT 5TH SECTION: KEY TOWNSHIP FEATURES (6 ITEMS)                     */}
      {/* ========================================================================= */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center space-y-3 mb-12 sm:mb-16 reveal-on-scroll">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#BD9A68] font-semibold block">
              AMENITIES &amp; LIFESTYLE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-zinc-950">
              Modern Amenities for an Elevated Lifestyle
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 max-w-xl mx-auto font-normal">
              Shree Krishna Vihar – IV is equipped with high-standard township infrastructure tailored for secure living and smart property investment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuresData.map((f, i) => {
              const IconComp = f.icon;
              const delays = ['delay-75', 'delay-150', 'delay-200', 'delay-250', 'delay-300', 'delay-350'];
              return (
                <div
                  key={i}
                  className={`p-6 sm:p-8 rounded-2xl border border-zinc-200/80 hover:border-[#BD9A68]/60 hover:shadow-xl transition-all duration-300 group bg-zinc-50/50 hover:bg-white hover:-translate-y-2 reveal-on-scroll ${delays[i % delays.length]}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#BD9A68]/10 text-[#BD9A68] flex items-center justify-center mb-5 group-hover:bg-[#BD9A68] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <IconComp className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <h3 className="text-sm font-bold tracking-wider uppercase text-zinc-900 mb-2 font-mono">
                    {f.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] leading-relaxed text-zinc-600 font-normal">
                    {f.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* LIGHTBOX FULLSCREEN MODAL WITH PREV / NEXT NAVIGATION                     */}
      {/* ========================================================================= */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 select-none"
          onClick={() => setLightboxOpen(false)}
          onTouchStart={(e) => setTouchStartX(e.targetTouches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchStartX === null) return;
            const touchEndX = e.changedTouches[0].clientX;
            const diff = touchStartX - touchEndX;
            if (diff > 50) handleNextImage();
            else if (diff < -50) handlePrevImage();
            setTouchStartX(null);
          }}
        >
          {/* Top Bar: Counter & Close Button */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-50 text-xs sm:text-sm font-mono text-zinc-300 bg-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/15">
            {activeImageIndex + 1} / {galleryImages.length}
          </div>

          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 sm:top-6 right-4 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer z-50 backdrop-blur-sm border border-white/15"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left / Previous Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevImage();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer shadow-xl backdrop-blur-sm group"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-7 h-7 sm:w-8 sm:h-8 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          {/* Right / Next Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNextImage();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer shadow-xl backdrop-blur-sm group"
            aria-label="Next Image"
          >
            <ChevronRight className="w-7 h-7 sm:w-8 sm:h-8 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Main Fullscreen Display Image */}
          <div
            className="relative max-w-5xl max-h-[82vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[activeImageIndex].src}
              alt={galleryImages[activeImageIndex].title}
              className="max-w-full max-h-[72vh] object-contain rounded-xl shadow-2xl transition-all duration-300"
            />
            <div className="text-center mt-3 sm:mt-4 px-4 max-w-2xl">
              <h3 className="text-white text-sm sm:text-base md:text-lg font-semibold tracking-wide">
                {galleryImages[activeImageIndex].title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm mt-1">
                {galleryImages[activeImageIndex].caption}
              </p>
            </div>

            {/* Thumbnail Navigation Strip */}
            <div className="flex items-center gap-2 mt-4 overflow-x-auto max-w-full py-2 px-3 bg-black/40 rounded-xl backdrop-blur-sm border border-white/10">
              {galleryImages.map((thumb, tIdx) => (
                <button
                  key={tIdx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIndex(tIdx);
                  }}
                  className={`relative w-14 h-10 sm:w-16 sm:h-12 rounded-lg overflow-hidden shrink-0 transition-all cursor-pointer border-2 ${
                    activeImageIndex === tIdx
                      ? 'border-[#BD9A68] scale-105 shadow-md opacity-100'
                      : 'border-transparent opacity-50 hover:opacity-90'
                  }`}
                >
                  <img src={thumb.src} alt={thumb.title} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShreeKrishnaViharIVPage;
