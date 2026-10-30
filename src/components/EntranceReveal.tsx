import React, { useEffect, useState } from 'react';

export const EntranceReveal: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isLifting, setIsLifting] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Lock body scrolling during the initial entrance sequence
    document.body.style.overflow = 'hidden';

    const duration = 1000; // 1 second luxury sequence
    const startTime = performance.now();

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (elapsed < duration) {
        requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        // Start curtain lift animation
        setTimeout(() => {
          setIsLifting(true);
          document.body.style.overflow = '';
          // Remove from DOM completely after curtain animation finishes
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
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#161512] transition-transform duration-[800ms] ease-[cubic-bezier(0.77,0,0.175,1)] will-change-transform ${
        isLifting ? '-translate-y-full pointer-events-none' : 'translate-y-0'
      }`}
    >
      {/* Ambient Luxury Golden Glow Aura */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="w-[360px] sm:w-[500px] h-[360px] sm:h-[500px] bg-gradient-to-tr from-amber-500/15 via-amber-600/5 to-transparent rounded-full blur-[100px] animate-pulse" />
      </div>

      {/* Center Brand Lockup */}
      <div
        className={`relative z-10 flex flex-col items-center text-center px-6 transition-all duration-400 ease-out ${
          isLifting ? 'opacity-0 -translate-y-8 scale-95' : 'opacity-100 translate-y-0 scale-100'
        }`}
      >
        {/* Glowing Brand Icon Emblem */}
        <div className="relative mb-5 sm:mb-6">
          <div className="absolute -inset-2.5 rounded-2xl bg-amber-500/20 blur-md animate-pulse" />
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-black/60 border border-white/20 p-2 shadow-2xl flex items-center justify-center backdrop-blur-md">
            <img
              src="/brand/logo-square.png"
              alt="Invest With Ganesh Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Typography */}
        <h1
          className="text-lg sm:text-2xl font-bold tracking-tight text-white mb-1.5"
          style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
        >
          INVEST WITH GANESH
        </h1>

        <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.22em] text-amber-400 font-semibold mb-7">
          JDA &amp; RERA APPROVED PLOTS · JAIPUR
        </p>

        {/* Sleek Golden Progress Meter */}
        <div className="w-48 sm:w-60 space-y-2">
          <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-amber-400 via-[#BD9A68] to-amber-200 transition-all duration-75 ease-out rounded-full shadow-[0_0_12px_rgba(245,158,11,0.9)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[10.5px] font-mono text-zinc-400 tracking-wider">
            <span className="text-zinc-500">VERIFIED LIVING</span>
            <span className="text-amber-400 font-semibold">{progress}%</span>
          </div>
        </div>
      </div>

      {/* Golden Curtain Bottom Lip Accent Line */}
      <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#BD9A68] to-transparent opacity-80" />
    </div>
  );
};
