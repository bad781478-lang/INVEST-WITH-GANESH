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
    src: '/projects/8fde88f1-0d8c-403b-b54d-fac0b74cbe03.png',
    title: 'Township Overview & Landscape Pavilion',
    caption: 'Master-planned plotted township with landscape greenery and gazebo pathways',
  },
  {
    src: '/projects/yaduraj-ojas-26.jpg',
    title: 'Landscaped Entrance Fountain',
    caption: 'Stone water feature, palms and manicured garden greens at entrance roundabout',
  },
  {
    src: '/projects/yaduraj-ojas-27.jpg',
    title: 'Wide Internal Sector Roads',
    caption: '40 & 60 ft asphalt internal roads with road divider tree plantation',
  },
  {
    src: '/projects/yaduraj-ojas-30.jpg',
    title: 'Community Green Park Zone',
    caption: 'Dedicated family recreation park with manicured lawns and walking tracks',
  },
  {
    src: '/projects/yaduraj-ojas-28.jpg',
    title: 'Demarcated Plot Boundary Stones',
    caption: 'Physical demarcated plots with corner stones ready for registry and possession',
  },
  {
    src: '/projects/yaduraj-ojas-24.jpg',
    title: 'Master Layout Plan',
    caption: 'Approved JDA layout with organized residential plotting and utility corridors',
  },
];

const amenities = [
  {
    icon: Building,
    title: 'GATED COMMUNITY',
    description: 'Enjoy secure gated entry with a peaceful and well-planned residential environment designed for modern living.',
  },
  {
    icon: TreePine,
    title: 'GREEN ENVIRONMENT',
    description: 'Experience open spaces, landscaped greenery, and a refreshing atmosphere that brings comfort to everyday life.',
  },
  {
    icon: Lightbulb,
    title: 'MODERN AMENITIES',
    description: 'Developed with essential lifestyle amenities, wide roads, street lighting, and quality infrastructure for families.',
  },
  {
    icon: Route,
    title: 'WIDE CONNECTIVITY',
    description: 'Smooth road connectivity with convenient access to schools, markets, hospitals, and major city locations.',
  },
  {
    icon: Users,
    title: 'FAMILY FRIENDLY COMMUNITY',
    description: 'A safe and welcoming neighborhood designed for comfortable family living and a better future.',
  },
  {
    icon: Shield,
    title: '24×7 SECURITY',
    description: 'Advanced security features with gated access and round-the-clock safety for complete peace of mind.',
  },
];

export const YadurajOjasPage: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeViewTab, setActiveViewTab] = useState<'360' | 'map'>('360');
  const [copied, setCopied] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Yaduraj Ojas - investwithgaaneesh.com';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Yaduraj Ojas — A thoughtfully planned township offering secure living and smart investment opportunities in Jaipur. JDA & RERA approved residential plots.'
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
      {/* 1. EXACT 1ST SECTION: FRAMED HERO BANNER WITH EQUAL TOP, LEFT, RIGHT GAP   */}
      {/* ========================================================================= */}
      <section className="bg-white p-3 sm:p-4 md:p-6">
        <div className="relative h-[460px] sm:h-[490px] md:h-[520px] w-full rounded-none overflow-hidden flex items-center justify-center text-center bg-black shadow-sm">
          {/* Background Graphic Image with exact Ken Burns zoom */}
          <div className="absolute inset-0 z-0 overflow-hidden rounded-none">
            <div
              className="w-full h-full bg-cover bg-center ken-burns-active"
              style={{
                backgroundImage: 'url("/projects/8fde88f1-0d8c-403b-b54d-fac0b74cbe03.png")',
                backgroundPosition: '50% 50%',
              }}
              role="img"
              aria-label="Yaduraj Ojas township park and landscape gazebo"
            />
            {/* Subtle dark overlay */}
            <div className="absolute inset-0 bg-black/30 pointer-events-none" />
          </div>

          {/* Content Container */}
          <div className="relative z-10 w-full max-w-[800px] mx-auto p-6 sm:p-10 flex flex-col items-center justify-center">
            {/* Exact Slide Heading */}
            <h1
              className="text-3xl sm:text-5xl md:text-[52px] font-semibold text-white tracking-tight leading-tight mb-3 animate-hero-1"
              style={{
                fontFamily: '"Roboto", "Plus Jakarta Sans", sans-serif',
                textShadow: '0 2px 14px rgba(0, 0, 0, 0.75), 0 1px 3px rgba(0, 0, 0, 0.9)',
              }}
            >
              Yaduraj Ojas
            </h1>

            {/* Exact Slide Description */}
            <p
              className="text-xs sm:text-[14.5px] md:text-[15.5px] text-white max-w-[680px] mx-auto font-normal leading-snug mb-5 px-4 animate-hero-2"
              style={{
                fontFamily: '"Roboto Slab", "Plus Jakarta Sans", serif',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.8), 0 1px 2px rgba(0, 0, 0, 0.95)',
              }}
            >
              A thoughtfully planned township offering secure living and smart investment opportunities in Jaipur.
            </p>

            {/* Exact Slide Button */}
            <a
              href="https://wa.me/917851982209?text=Hello%20Mr.%20Ganesh%20Yadav,%20I%20want%20to%20book%20a%20site%20visit%20for%20RERA%20%26%20JDA%20approved%20plots%20in%20Jaipur."
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
      {/* 2. EXACT 2ND SECTION: EQUAL GAPS TOP, LEFT, RIGHT, BOTTOM                 */}
      {/* ========================================================================= */}
      <section id="overview" className="bg-white py-14 sm:py-16 md:py-20 border-b border-zinc-100">
        <div className="max-w-[1260px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
            {/* Left Column: Image 26 (Entrance Roundabout Fountain) */}
            <div className="w-full lg:w-1/2 shrink-0 reveal-slide-left">
              <div className="relative rounded-[20px] overflow-hidden shadow-xs hover-lift">
                <img
                  src="/projects/yaduraj-ojas-26.jpg"
                  alt="Yaduraj Ojas landscaped entrance fountain and green roundabout in Jaipur"
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
                Yaduraj Ojas
              </h2>

              <div
                className="text-xs sm:text-[14px] md:text-[14.5px] leading-[25px] sm:leading-[27px] text-black font-normal mb-5 space-y-3"
                style={{ fontFamily: '"Montserrat", sans-serif' }}
              >
                <p>
                  Ojas is a thoughtfully designed premium plotting township developed to offer peaceful living, modern infrastructure, and smart investment opportunities in Jaipur. Surrounded by lush greenery and beautifully planned landscapes, the project creates a refreshing and community-focused lifestyle for families and future homeowners.
                </p>
                <p>
                  Strategically located on Ajmer Road, Jaipur, Ojas combines organized development, open green spaces, essential amenities, and excellent connectivity to deliver a comfortable, secure, and future-ready residential environment.
                </p>
              </div>

              {/* Exact Specifications List */}
              <div className="flex flex-col mb-5 sm:mb-6" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                <div className="flex items-center text-xs sm:text-[14px] leading-relaxed text-[#797978] mb-2">
                  <span className="w-1/2">Location</span>
                  <span className="w-1/2">Ajmer Road , Jaipur, 302026</span>
                </div>
                <div className="flex items-center text-xs sm:text-[14px] leading-relaxed text-[#797978] mb-2">
                  <span className="w-1/2">Project Type</span>
                  <span className="w-1/2">Residential Plots (Gated Township)</span>
                </div>
                <div className="flex items-center text-xs sm:text-[14px] leading-relaxed text-[#797978] mb-2">
                  <span className="w-1/2">Approvals</span>
                  <span className="w-1/2">JDA &amp; RERA Approved</span>
                </div>
                <div className="flex items-center text-xs sm:text-[14px] leading-relaxed text-[#797978] mb-2">
                  <span className="w-1/2">Plot Size</span>
                  <span className="w-1/2">111 Sq YRD to 300 Sq YRD</span>
                </div>
              </div>

              {/* Share Buttons (Facebook, Pinterest, Twitter, LinkedIn) */}
              <div className="flex items-center gap-5 pt-1">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#626060]/75 hover:text-[#BD9A68] transition-colors"
                  aria-label="Share on Facebook"
                >
                  <svg aria-hidden="true" className="w-5 h-5 fill-current" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                  </svg>
                </a>
                <a
                  href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(window.location.href)}&media=${encodeURIComponent('https://investwithgaaneesh.com/wp-content/uploads/2026/05/image-26.jpg')}&description=${encodeURIComponent('Yaduraj Ojas')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#626060]/75 hover:text-[#BD9A68] transition-colors"
                  aria-label="Share on Pinterest"
                >
                  <svg aria-hidden="true" className="w-5 h-5 fill-current" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" />
                  </svg>
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent('Yaduraj Ojas - Residential Plots on Ajmer Road Jaipur')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#626060]/75 hover:text-[#BD9A68] transition-colors"
                  aria-label="Share on Twitter"
                >
                  <svg aria-hidden="true" className="w-5 h-5 fill-current" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                  </svg>
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent('Yaduraj Ojas Jaipur')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#626060]/75 hover:text-[#BD9A68] transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <svg aria-hidden="true" className="w-5 h-5 fill-current" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. EXACT 3RD SECTION: WHY YADURAJ OJAS IS THE RIGHT CHOICE (TEXT LEFT, IMG RIGHT) */}
      {/* ========================================================================= */}
      <section className="bg-white pt-6 pb-12 sm:pt-8 sm:pb-16 border-b border-zinc-100">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
            {/* Left Column: Why Yaduraj Ojas Is the Right Choice Checklist */}
            <div className="w-full lg:w-[52%] flex flex-col justify-center space-y-4 sm:space-y-5 reveal-slide-left">
              <h2
                className="text-2xl sm:text-[36px] font-bold text-[#BD9A68] leading-tight"
                style={{ fontFamily: '"Onest", "Plus Jakarta Sans", sans-serif' }}
              >
                Why Yaduraj Ojas Is the Right Choice
              </h2>

              <ul className="space-y-3.5 text-xs sm:text-[14.5px] leading-relaxed text-[#797978]" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                <li className="flex items-start gap-3 hover-lift">
                  <div className="w-5 h-5 rounded-full bg-[#BD9A68]/15 text-[#BD9A68] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>Ojas features beautifully planned green landscapes and open spaces, creating a peaceful and refreshing residential environment.</span>
                </li>
                <li className="flex items-start gap-3 hover-lift">
                  <div className="w-5 h-5 rounded-full bg-[#BD9A68]/15 text-[#BD9A68] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>The township is developed with modern infrastructure, organized internal roads, and thoughtfully designed community spaces for comfortable living.</span>
                </li>
                <li className="flex items-start gap-3 hover-lift">
                  <div className="w-5 h-5 rounded-full bg-[#BD9A68]/15 text-[#BD9A68] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>Located on Ajmer Road, Jaipur, Ojas offers excellent connectivity to major highways, schools, markets, and key city destinations.</span>
                </li>
                <li className="flex items-start gap-3 hover-lift">
                  <div className="w-5 h-5 rounded-full bg-[#BD9A68]/15 text-[#BD9A68] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>The project is equipped with essential amenities including electricity, water supply, street lighting, and proper drainage systems.</span>
                </li>
              </ul>
            </div>

            {/* Right Column: Image 27-1 (Internal Sector Road) */}
            <div className="w-full lg:w-[48%] shrink-0 reveal-slide-right delay-100">
              <div className="relative rounded-[20px] overflow-hidden hover-lift">
                <img
                  src="/projects/yaduraj-ojas-27.jpg"
                  alt="Yaduraj Ojas internal wide sector roads with tree plantation in Jaipur"
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

            {/* View Switcher Tabs */}
            <div className="inline-flex items-center p-1 rounded-full bg-zinc-200/70 self-start sm:self-auto">
              <button
                onClick={() => setActiveViewTab('360')}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                  activeViewTab === '360'
                    ? 'bg-white text-zinc-950 shadow-xs font-semibold'
                    : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                360° Virtual Tour
              </button>
              <button
                onClick={() => setActiveViewTab('map')}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                  activeViewTab === 'map'
                    ? 'bg-white text-zinc-950 shadow-xs font-semibold'
                    : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                Location Map
              </button>
            </div>
          </div>

          {/* Embedded 360° View or Location Map */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/10] sm:aspect-[21/10] bg-zinc-950 border border-zinc-200/80 shadow-xs mb-6 reveal-scale delay-100">
            {activeViewTab === '360' ? (
              <iframe
                title="Yaduraj Ojas 360 Degree Street View Virtual Tour"
                src="https://www.google.com/maps/embed?pb=!4v1779775062948!6m8!1m7!1snKjQTqHc48n4xiAVNDsv4w!2m2!1d26.86483685139583!2d75.63236896063022!3f93.481316!4f0!5f0.7820865974627469"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <iframe
                title="Yaduraj Ojas Ajmer Road Location Map"
                src="https://maps.google.com/maps?q=26.86483685139583,75.63236896063022&hl=en&z=15&output=embed"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              />
            )}
            <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-md text-white text-[11px] font-mono px-3 py-1.5 rounded-full border border-white/20 pointer-events-none">
              📍 Coordinates: 26.8648° N, 75.6324° E · Ajmer Road, Jaipur
            </div>
          </div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {galleryImages.map((img, idx) => {
              const delays = ['delay-75', 'delay-150', 'delay-200', 'delay-250', 'delay-300', 'delay-350'];
              return (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveImageIndex(idx);
                    setLightboxOpen(true);
                  }}
                  className={`relative rounded-xl overflow-hidden aspect-[4/3] bg-zinc-100 border border-zinc-200/80 shadow-2xs group cursor-pointer reveal-scale ${delays[idx % delays.length]}`}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-mono">
                    <span className="flex items-center gap-1.5 bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-xs">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Photo gallery</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. EXACT 5TH SECTION: 6 CORE FEATURES                                     */}
      {/* ========================================================================= */}
      <section className="bg-white py-16 sm:py-24 border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center space-y-3 mb-12 sm:mb-16 reveal-on-scroll">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#BD9A68] font-semibold block">
              AMENITIES &amp; LIFESTYLE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-zinc-950">
              Modern Amenities for an Elevated Lifestyle
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 max-w-xl mx-auto font-normal">
              Yaduraj Ojas is equipped with high-standard township infrastructure tailored for secure living and smart property investment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((item, idx) => {
              const Icon = item.icon;
              const delays = ['delay-75', 'delay-150', 'delay-200', 'delay-250', 'delay-300', 'delay-350'];
              return (
                <div
                  key={idx}
                  className={`bg-zinc-50 rounded-2xl p-7 border border-zinc-200/70 hover:border-[#BD9A68]/60 hover:shadow-xl transition-all duration-300 space-y-4 hover:-translate-y-2 group reveal-on-scroll ${delays[idx % delays.length]}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-900 shadow-2xs group-hover:bg-[#BD9A68] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-[#BD9A68] group-hover:text-white transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base font-bold tracking-tight text-zinc-950 uppercase font-mono">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
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
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Arrow Button (Previous Image) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevImage();
            }}
            className="absolute left-3 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/15 hover:bg-white/30 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer z-50 backdrop-blur-sm border border-white/20 shadow-2xl"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Right Arrow Button (Next Image) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNextImage();
            }}
            className="absolute right-3 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/15 hover:bg-white/30 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer z-50 backdrop-blur-sm border border-white/20 shadow-2xl"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Main Image & Caption */}
          <div
            className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center space-y-3 px-12 sm:px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[68vh] sm:max-h-[72vh] flex items-center justify-center">
              <img
                src={galleryImages[activeImageIndex].src}
                alt={galleryImages[activeImageIndex].title}
                className="max-h-[68vh] sm:max-h-[72vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl transition-all duration-300"
              />
            </div>
            <div className="text-center text-white space-y-1">
              <h4 className="text-base sm:text-lg font-semibold">{galleryImages[activeImageIndex].title}</h4>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto">{galleryImages[activeImageIndex].caption}</p>
            </div>

            {/* Thumbnail Navigation Strip */}
            <div className="flex items-center gap-2 pt-2 overflow-x-auto max-w-full py-1">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    activeImageIndex === idx
                      ? 'border-[#BD9A68] scale-105 shadow-md'
                      : 'border-white/20 opacity-60 hover:opacity-100'
                  }`}
                  aria-label={`View image ${idx + 1}`}
                >
                  <img src={img.src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
