import React, { useEffect, useState } from 'react';

export const EntranceReveal: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isLifting, setIsLifting] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Lock scrolling while entrance sequence is active
    document.body.style.overflow = 'hidden';

    const duration = 1650; // Sophisticated 1.65s complex telemetry duration
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
        // Start aperture shutter reveal sequence
        setTimeout(() => {
          setIsLifting(true);
          document.body.style.overflow = '';
          // Clean unmount from DOM once shutters clear viewport
          setTimeout(() => {
            setShouldRender(false);
          }, 850);
        }, 180);
      }
    };

    const frameId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(frameId);
      document.body.style.overflow = '';
    };
  }, []);

  if (!shouldRender) return null;

  // Dynamic telemetry step message based on current progress
  const getTelemetryStep = () => {
    if (progress < 28) return 'INITIALIZING JAIPUR MASTER SCHEMES';
    if (progress < 60) return 'SYNCHRONIZING ZONE 9 & RING ROAD DATA';
    if (progress < 88) return 'VERIFYING JDA & RERA APPROVAL RECORDS';
    return 'PORTFOLIO VERIFIED · ENTERING ADVISORY';
  };

  return (
    <div
      aria-hidden={isLifting}
      className={`consultaro-reveal-overlay ${
        isLifting ? 'consultaro-reveal-overlay--lifted' : ''
      }`}
    >
      {/* Top Half Architectural Shutter Panel */}
      <div className="consultaro-shutter consultaro-shutter-top consultaro-grid-bg">
        {/* Top Header Technical Telemetry Bar */}
        <div className="absolute top-4 sm:top-6 inset-x-4 sm:inset-x-8 flex items-center justify-between text-[10px] sm:text-[11px] font-mono tracking-wider text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-zinc-300 font-semibold">SYS.JAIPUR.2026</span>
            <span className="hidden sm:inline text-zinc-600">|</span>
            <span className="hidden sm:inline text-zinc-400">JDA &amp; RERA PLOTTED REAL ESTATE</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-zinc-400 hidden sm:inline">26.9124° N, 75.7873° E</span>
            <span className="px-2 py-0.5 rounded bg-white/10 text-amber-300 font-semibold border border-white/10">
              LIVE
            </span>
          </div>
        </div>

        {/* Architectural Crosshair Top Corners */}
        <div className="consultaro-crosshair top-4 left-4 sm:top-6 sm:left-6" />
        <div className="consultaro-crosshair top-4 right-4 sm:top-6 sm:right-6" />
      </div>

      {/* Bottom Half Architectural Shutter Panel */}
      <div className="consultaro-shutter consultaro-shutter-bottom consultaro-grid-bg">
        {/* Bottom Footer Technical Bar */}
        <div className="absolute bottom-4 sm:bottom-6 inset-x-4 sm:inset-x-8 flex items-center justify-between text-[10px] sm:text-[11px] font-mono tracking-wider text-zinc-500">
          <div className="flex items-center gap-2">
            <span>CURATED LAND ADVISORY</span>
            <span className="text-zinc-700">/</span>
            <span className="text-zinc-400">JAIPUR, RAJASTHAN</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-amber-400/90 font-semibold">GANESH YADAV ADVISORY</span>
            <span className="text-zinc-700">·</span>
            <span>SECURE ALLOTMENTS</span>
          </div>
        </div>

        {/* Architectural Crosshair Bottom Corners */}
        <div className="consultaro-crosshair bottom-4 left-4 sm:bottom-6 sm:left-6" />
        <div className="consultaro-crosshair bottom-4 right-4 sm:bottom-6 sm:right-6" />
      </div>

      {/* Horizontal Glowing Golden Laser Seam (Parts on Aperture Lift) */}
      <div className="consultaro-laser-seam" aria-hidden="true" />

      {/* Centerpiece Consultaro-Grade Complex Card Modal */}
      <div className="absolute inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
        <div
          className={`w-full max-w-[620px] bg-[#211f1b]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 md:p-10 shadow-[0_25px_80px_rgba(0,0,0,0.85)] relative overflow-hidden transition-all duration-500 ease-out ${
            isLifting ? 'opacity-0 scale-95 -translate-y-4' : 'opacity-100 scale-100 translate-y-0'
          }`}
        >
          {/* Subtle Ambient Radial Highlight inside card */}
          <div
            className="absolute -top-24 -left-24 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -right-24 w-60 h-60 bg-amber-600/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          {/* Top Classification Pill */}
          <div className="flex items-center justify-between gap-2 mb-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10.5px] sm:text-[11px] font-mono text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="tracking-widest uppercase">REAL ESTATE ADVISORY</span>
            </div>
            <span className="text-[11px] font-mono text-zinc-500 tracking-wider">
              REF.2026/IND
            </span>
          </div>

          {/* Wordmark (NO LOGO, Pure Typography) */}
          <div className="text-left mb-4">
            <h1
              className="text-2xl sm:text-4xl md:text-[42px] font-extrabold tracking-tight text-white leading-[1.1] mb-2"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              <span className="consultaro-text-shimmer">INVEST WITH GANESH</span>
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-lg">
              Jaipur Plotted Township Specialists · JDA Approved &amp; RERA Regulated Lands with clear titles and master road connectivity.
            </p>
          </div>

          {/* 3-Column Micro-Metrics Telemetry Grid (Consultaro Style) */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 py-4 my-4 border-y border-white/[0.08] text-left">
            <div className="space-y-0.5">
              <div className="text-base sm:text-xl font-bold font-mono text-white flex items-center gap-1">
                <span>100%</span>
                <span className="text-[10px] text-emerald-400 font-sans font-medium">✓</span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-zinc-400 uppercase tracking-wider font-mono">
                JDA &amp; RERA
              </p>
            </div>
            <div className="space-y-0.5 border-x border-white/[0.08] px-2 sm:px-3">
              <div className="text-base sm:text-xl font-bold font-mono text-amber-400">
                06+
              </div>
              <p className="text-[10px] sm:text-[11px] text-zinc-400 uppercase tracking-wider font-mono">
                Mega Corridors
              </p>
            </div>
            <div className="space-y-0.5 pl-1 sm:pl-2">
              <div className="text-base sm:text-xl font-bold font-mono text-white">
                1200+
              </div>
              <p className="text-[10px] sm:text-[11px] text-zinc-400 uppercase tracking-wider font-mono">
                Families Advised
              </p>
            </div>
          </div>

          {/* Dynamic Telemetry Status & Dual Progress Meter */}
          <div className="space-y-2 mt-4">
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="text-zinc-400 flex items-center gap-1.5 truncate pr-2">
                <span className="text-amber-400">▸</span>
                <span>{getTelemetryStep()}</span>
              </span>
              <span className="text-amber-300 font-bold tracking-wider shrink-0">
                [{progress.toString().padStart(2, '0')}%]
              </span>
            </div>

            {/* Segmented Dual Precision Loading Track */}
            <div className="h-[3px] w-full bg-white/10 rounded-full overflow-hidden relative">
              <div
                className="h-full bg-gradient-to-r from-amber-500 via-[#BD9A68] to-amber-200 transition-all duration-75 ease-out rounded-full shadow-[0_0_12px_rgba(245,158,11,0.9)]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
