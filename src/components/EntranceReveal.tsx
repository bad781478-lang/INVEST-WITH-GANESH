import React, { useEffect, useState } from 'react';

export const EntranceReveal: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isLifting, setIsLifting] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Lock scrolling while entrance reveal is showing
    document.body.style.overflow = 'hidden';

    const duration = 1100; // Smooth 1.1s luxury duration
    const startTime = performance.now();

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progressRatio = Math.min(elapsed / duration, 1);
      // Smooth cubic ease-out
      const eased = 1 - Math.pow(1 - progressRatio, 3);
      const currentPct = Math.min(100, Math.round(eased * 100));
      setProgress(currentPct);

      if (progressRatio < 1) {
        requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        // Start curtain unveil sequence
        setTimeout(() => {
          setIsLifting(true);
          document.body.style.overflow = '';
          // Remove cleanly from DOM after curtain has cleared
          setTimeout(() => {
            setShouldRender(false);
          }, 850);
        }, 120);
      }
    };

    const frameId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(frameId);
      document.body.style.overflow = '';
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      aria-hidden={isLifting}
      className={`beauty-reveal-screen ${isLifting ? 'beauty-reveal-screen--lifted' : ''}`}
    >
      {/* Ambient Warm Golden Aura */}
      <div className="beauty-reveal-ambient" aria-hidden="true">
        <div className="beauty-reveal-ambient-blob" />
      </div>

      {/* Centered Luxury Typography (Pure Text, NO LOGO) */}
      <div
        className={`relative z-10 flex flex-col items-center text-center px-6 transition-all duration-400 ease-out ${
          isLifting ? 'opacity-0 -translate-y-8 scale-95' : 'opacity-100 translate-y-0 scale-100'
        }`}
      >
        {/* Fine Region / Category Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4 sm:mb-5 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.24em] text-zinc-400 uppercase">
            JAIPUR · REAL ESTATE ADVISORY
          </span>
        </div>

        {/* Majestic Brand Wordmark (Pure Text, NO LOGO) */}
        <h1
          className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-[0.14em] uppercase text-center mb-2.5"
          style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
        >
          <span className="beauty-text-shimmer">INVEST WITH GANESH</span>
        </h1>

        {/* Gold Subtitle Tagline */}
        <p className="text-[10.5px] sm:text-xs font-semibold tracking-[0.22em] text-amber-400 uppercase mb-8">
          JDA &amp; RERA APPROVED PLOTS · JAIPUR
        </p>

        {/* Minimalist Progress Meter */}
        <div className="w-48 sm:w-60 space-y-2">
          <div className="beauty-progress-track">
            <div
              className="beauty-progress-fill"
              style={{ transform: `scaleX(${progress / 100})` }}
            />
          </div>
          <div className="flex items-center justify-between text-[10.5px] font-mono text-zinc-400 tracking-wider">
            <span className="text-zinc-500">VERIFIED LIVING</span>
            <span className="text-amber-400 font-semibold">{progress}%</span>
          </div>
        </div>
      </div>

      {/* Bottom Golden Light Beam on Curtain Edge */}
      <div className="beauty-curtain-beam" aria-hidden="true" />
    </div>
  );
};
