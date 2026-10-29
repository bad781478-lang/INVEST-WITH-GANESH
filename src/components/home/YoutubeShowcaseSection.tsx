import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ExternalLink, Video, FileCheck2, TrendingUp } from 'lucide-react';

const videoFeatures = [
  {
    id: 'drone-tours',
    index: '01',
    tag: 'On-Ground Reality',
    icon: Video,
    title: 'Drone & Road-Level Walkthroughs',
    description:
      'Unfiltered aerial and road-level views of plotted townships across Mansarovar Extension, Diggi Road and Ring Road, showing real development pace, road widths and connectivity.',
  },
  {
    id: 'jda-rera-verification',
    index: '02',
    tag: 'Legal Due Diligence',
    icon: FileCheck2,
    title: 'How to Verify JDA & RERA Approvals',
    description:
      'Practical guides to checking JDA layout plans, Rajasthan RERA registration, land title documents and the other legal checks to complete before buying land in Jaipur.',
  },
  {
    id: 'corridor-analysis',
    index: '03',
    tag: 'Market Intelligence',
    icon: TrendingUp,
    title: 'Jaipur Growth Corridor Analysis',
    description:
      'Plain-language insight into high-potential residential corridors, infrastructure milestones such as the Ring Road, SEZ expansion and metro routes, and transparent price benchmarks.',
  },
];

export const YoutubeShowcaseSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="video-insights"
      className="bg-white py-20 md:py-28 border-b border-zinc-200/60 overflow-hidden scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header (Consultaro UI/UX Style) */}
        <div
          className={`max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-medium tracking-[0.14em] uppercase transition-colors select-none bg-[#f0f0f0] text-zinc-800 border border-zinc-200/60 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
            <span>JAIPUR PLOT VIDEO TOURS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-medium leading-[1.08] tracking-[-0.025em] text-zinc-950">
            Jaipur Plot Due Diligence &amp; Township Walkthrough Videos
          </h2>

          <p className="text-[15px] sm:text-[17px] text-zinc-600 leading-relaxed font-normal max-w-2xl mx-auto pt-1">
            Watch drone surveys, JDA layout checks and corridor-by-corridor growth analysis hosted by Ganesh Yadav, so you arrive at your site visit already informed.
          </p>
        </div>

        {/* Video Showcase Card */}
        <div
          className={`relative max-w-5xl mx-auto transition-all duration-1000 delay-100 ease-out ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.98]'
          }`}
        >
          {/* Ambient Glow Aura */}
          <div className="absolute -inset-2 bg-gradient-to-r from-zinc-900/5 via-amber-500/10 to-zinc-900/5 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Main Clickable Anchor */}
          <a
            href="https://www.youtube.com/@invest_with_gaaneesh"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-200/90 bg-zinc-950 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.30)] hover:border-zinc-400 transition-all duration-500 cursor-pointer"
            aria-label="Watch Jaipur Plotted Township Videos by Ganesh Yadav on YouTube"
          >
            {/* Aspect Ratio Container (1672 x 941) */}
            <div className="relative aspect-[1672/941] w-full overflow-hidden bg-zinc-900">
              <img
                src="/youtube-banner.png"
                alt="Invest With Ganesh YouTube channel, Jaipur plotted township drone walkthroughs"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                loading="lazy"
              />

              {/* Top Floating Chips inside Video */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/15 text-[11px] sm:text-xs font-medium text-white shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>4K Drone Walkthroughs</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-medium text-white/80">
                  Mansarovar Extn · Ring Road · Diggi Road
                </span>
              </div>

              {/* Shimmer Light Reflection Sweep on Hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform ease-out pointer-events-none" />

              {/* Center Official Animated YouTube Play Icon */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative flex items-center justify-center">
                  {/* Expanding Ripple Waves */}
                  <span className="absolute w-20 h-14 sm:w-24 sm:h-16 md:w-28 md:h-20 rounded-2xl bg-red-600/40 animate-yt-ripple" />
                  <span className="absolute w-20 h-14 sm:w-24 sm:h-16 md:w-28 md:h-20 rounded-2xl bg-red-600/30 animate-yt-ripple-delay" />

                  {/* Breathing & Glowing YouTube Icon */}
                  <div className="relative animate-yt-breathe transition-transform duration-300 group-hover:scale-115">
                    <img
                      src="/icons/youtube.svg"
                      alt="YouTube Play"
                      className="w-16 sm:w-20 md:w-24 h-auto object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom bar inside video banner */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-center justify-between text-white pointer-events-none">
                <div className="space-y-0.5">
                  <p className="text-xs sm:text-sm font-semibold tracking-wide text-white flex items-center gap-1.5">
                    <span>Channel: @invest_with_gaaneesh</span>
                    <span className="text-amber-400">✓</span>
                  </p>
                  <p className="text-[11px] sm:text-xs text-white/70">
                    Project reviews, JDA scheme updates and buyer guides, published regularly.
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/20 text-white">
                  <span>Watch on YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </a>

          {/* 3 High-Value SEO Video Feature Cards (Consultaro UI/UX Style, Zero Repetition) */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {videoFeatures.map((item, index) => {
              const Icon = item.icon;
              const delayClass = index === 0 ? 'delay-100' : index === 1 ? 'delay-200' : 'delay-300';

              return (
                <div
                  key={item.id}
                  className={`bg-white rounded-2xl p-6 sm:p-7 border border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-zinc-300 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-700 [transition-timing-function:var(--ease-framer)] flex flex-col justify-between group ${delayClass} ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Header: Tag + Icon */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] font-semibold text-amber-700 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-md transition-colors group-hover:bg-amber-500/15">
                        {item.tag}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200/60 flex items-center justify-center text-zinc-800 group-hover:bg-[#161512] group-hover:text-white transition-colors duration-300">
                        <Icon className="w-4 h-4 stroke-[1.8]" />
                      </div>
                    </div>

                    {/* Title & SEO Content */}
                    <div className="space-y-2">
                      <h3 className="text-[16px] sm:text-[17px] font-semibold text-zinc-950 tracking-tight leading-snug group-hover:text-amber-800 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[13.5px] text-zinc-600 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Unified Action Buttons */}
          <div
            className={`mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 transition-all duration-700 delay-300 [transition-timing-function:var(--ease-framer)] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <a
              href="https://www.youtube.com/@invest_with_gaaneesh"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#161512] hover:bg-zinc-800 text-white px-6 py-3.5 text-[14px] font-semibold transition-all shadow-md hover:shadow-lg active:scale-98 border border-zinc-800 group cursor-pointer"
            >
              <svg className="w-4 h-4 text-[#FF0000] fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span>Watch Latest Videos on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-80 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white hover:bg-zinc-50 border border-zinc-200/90 text-zinc-900 px-6 py-3.5 text-[14px] font-semibold transition-all shadow-xs hover:border-zinc-300 active:scale-98 cursor-pointer"
            >
              <span>Schedule a Site Inspection</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
