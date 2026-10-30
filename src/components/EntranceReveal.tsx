import React, { useEffect, useState } from 'react';

export const EntranceReveal: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isLifting, setIsLifting] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Lock scrolling during entrance sequence
    document.body.style.overflow = 'hidden';

    const duration = 950; // Snappy ~1s sequence
    const startTime = performance.now();

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (elapsed < duration) {
        requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        // Begin curtain lift animation
        setTimeout(() => {
          setIsLifting(true);
          document.body.style.overflow = '';
          // Clean unmount from DOM after curtain clears screen
          setTimeout(() => {
            setShouldRender(false);
          }, 800);
        }, 100);
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
      className={`site-entrance-curtain ${isLifting ? 'site-entrance-curtain--lifted' : ''}`}
    >
      {/* Subtle Warm Amber Glow Aura */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="w-[320px] sm:w-[480px] h-[320px] sm:h-[480px] bg-gradient-to-tr from-amber-500/10 via-amber-600/5 to-transparent rounded-full blur-[90px]" />
      </div>

      {/* Brand Lockup */}
      <div
        className={`relative z-10 flex flex-col items-center text-center px-6 transition-all duration-300 ease-out ${
          isLifting ? 'opacity-0 -translate-y-6' : 'opacity-100 translate-y-0'
        }`}
      >
        {/* Logo Emblem */}
        <div className="relative mb-4 sm:mb-5">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-black/50 border border-white/15 p-2.5 shadow-2xl flex items-center justify-center backdrop-blur-md">
            <img
              src="/brand/logo-square.png"
              alt="Invest With Ganesh Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Website Brand Typography */}
        <h1
          className="text-lg sm:text-2xl font-bold tracking-tight text-white mb-1.5"
          style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
        >
          INVEST WITH GANESH
        </h1>

        <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold mb-6">
          JDA &amp; RERA APPROVED PLOTS · JAIPUR
        </p>

        {/* Minimalist Progress Meter */}
        <div className="w-44 sm:w-56 space-y-2">
          <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-amber-400 via-[#BD9A68] to-amber-200 transition-all duration-75 ease-out rounded-full shadow-[0_0_8px_rgba(245,158,11,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[10.5px] font-mono text-zinc-400 tracking-wider">
            <span className="text-zinc-500">VERIFIED LIVING</span>
            <span className="text-amber-400 font-semibold">{progress}%</span>
          </div>
        </div>
      </div>

      {/* Golden Accent Hairline on Curtain Edge */}
      <div className="site-entrance-accent" aria-hidden="true" />
    </div>
  );
};
