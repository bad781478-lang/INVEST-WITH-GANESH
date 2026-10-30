import React, { useEffect, useState, useRef } from 'react';

export const EntranceReveal: React.FC = () => {
  const [shouldRender, setShouldRender] = useState(true);
  const finishedRef = useRef(false);
  const mountTimeRef = useRef(Date.now());

  useEffect(() => {
    // Lock scrolling while intro is active
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const finish = () => {
      if (finishedRef.current) return;
      finishedRef.current = true;
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      setShouldRender(false);
    };

    // Total duration:
    // Badge at 0.35s, Typewriter from 0.55s to ~1.75s, Tagline at 2.15s,
    // Luxury readability hold until 3.45s, shutter slice 3.45s to 4.62s.
    // Clean unmount at 4800ms.
    const timeout = setTimeout(finish, 4800);

    // Skip controls: Escape, Enter, Space
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') finish();
    };

    window.addEventListener('keydown', handleKey);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  if (!shouldRender) return null;

  const handleContainerClick = () => {
    // Prevent accidental mobile tap-dismiss during the first 2.0 seconds while text is typing
    if (Date.now() - mountTimeRef.current < 2000) return;

    if (!finishedRef.current) {
      finishedRef.current = true;
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      setShouldRender(false);
    }
  };

  const handleSkipExplicit = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!finishedRef.current) {
      finishedRef.current = true;
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      setShouldRender(false);
    }
  };

  // 5 alternating horizontal shutter bands (0 to 4)
  const bands = [0, 1, 2, 3, 4];
  const line1 = 'INVEST WITH';
  const line2 = 'GANESH';

  return (
    <div
      aria-hidden="true"
      className="onform-intro-overlay onform-intro--playing"
      onClick={handleContainerClick}
    >
      {/* Explicit Skip Pill */}
      <button
        type="button"
        className="onform-intro-skip-btn"
        onClick={handleSkipExplicit}
        aria-label="Skip entrance animation"
      >
        SKIP ↗
      </button>

      {bands.map((band) => (
        <div
          key={`shutter-band-${band}`}
          className="onform-intro-shutter"
          style={{ '--band': band } as React.CSSProperties}
        >
          <div
            className="onform-intro-canvas"
            style={{ '--band': band } as React.CSSProperties}
          >
            {/* Fine Eyebrow Tag */}
            <div className="onform-intro-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>JAIPUR · REAL ESTATE ADVISORY</span>
            </div>

            {/* Colossal Onform Typewriter Typography: Line 1 */}
            <div className="onform-wordmark-line text-white">
              {line1.split('').map((char, i) => (
                <span
                  key={`l1-${i}`}
                  className="onform-type-glyph"
                  style={{
                    '--type-index': i,
                    marginRight: char === ' ' ? '0.28em' : undefined,
                  } as React.CSSProperties}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </div>

            {/* Colossal Onform Typewriter Typography: Line 2 */}
            <div className="onform-wordmark-line text-amber-400">
              {line2.split('').map((char, i) => (
                <span
                  key={`l2-${i}`}
                  className="onform-type-glyph"
                  style={{
                    '--type-index': line1.length + i,
                  } as React.CSSProperties}
                >
                  {char}
                </span>
              ))}
            </div>

            {/* Subtitle Tagline */}
            <p className="onform-intro-tagline">
              JDA &amp; RERA APPROVED TOWNSHIPS · JAIPUR
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
