import React, { useEffect, useState, useRef } from 'react';

export const EntranceReveal: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'playing' | 'exit' | 'shutters' | 'done'>('playing');
  const [shouldRender, setShouldRender] = useState(true);
  const hasFinishedRef = useRef(false);

  useEffect(() => {
    // Lock scrolling while entrance sequence is active
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const duration = 1450; // Snappy, cinematic 1.45s counter duration
    const startTime = performance.now();
    let animFrame: number;

    const tick = (now: number) => {
      if (hasFinishedRef.current) return;
      const elapsed = now - startTime;
      const progressRatio = Math.min(elapsed / duration, 1);
      // Smooth ease-out cubic curve (1 - (1 - t)^3) like Iron Oath Studio
      const eased = 1 - Math.pow(1 - progressRatio, 3);
      const currentPct = Math.round(eased * 100);
      setProgress(currentPct);

      if (progressRatio < 1) {
        animFrame = requestAnimationFrame(tick);
      } else {
        setProgress(100);
        hasFinishedRef.current = true;

        // Sequence:
        // 1. Hide progress & start wordmark fly
        setTimeout(() => {
          setPhase('exit');
        }, 120);

        // 2. Trigger double-layer shutter reveal
        setTimeout(() => {
          setPhase('shutters');
          // Unlock body scroll as shutters part
          document.body.style.overflow = '';
          document.documentElement.style.overflow = '';
        }, 280);

        // 3. Unmount completely from DOM
        setTimeout(() => {
          setPhase('done');
          setShouldRender(false);
        }, 1250);
      }
    };

    animFrame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animFrame);
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      aria-hidden={phase !== 'playing'}
      className={`io-reveal-screen io-reveal--playing ${
        phase === 'shutters' || phase === 'done' ? 'io-reveal--shutters-exit' : ''
      }`}
    >
      {/* Layer 1: White Columns (slide down on exit) */}
      <div className="io-reveal-layer" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((col) => (
          <div
            key={`white-col-${col}`}
            className="io-reveal-column io-reveal-column--white"
            style={{ '--column-index': col } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Layer 2: Black Columns (slide up on exit) */}
      <div className="io-reveal-layer" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((col) => (
          <div
            key={`black-col-${col}`}
            className="io-reveal-column io-reveal-column--black"
            style={{ '--column-index': col } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Centered Editorial Wordmark & Progress: 100% Black & White Text, NO LOGO */}
      <div className="io-reveal-content">
        <div
          className={`io-reveal-wordmark ${
            phase === 'exit' || phase === 'shutters' || phase === 'done'
              ? 'io-reveal--wordmark-exit'
              : ''
          }`}
        >
          {/* Word 1: INVEST */}
          <div className="io-wordmark-group">
            {'INVEST'.split('').map((char, idx) => (
              <span key={`w1-${idx}`} className="io-letter-clip">
                <span
                  className="io-letter"
                  style={{ '--letter-index': idx } as React.CSSProperties}
                >
                  {char}
                </span>
              </span>
            ))}
          </div>

          {/* Word 2 & 3: WITH GANESH */}
          <div className="io-wordmark-group">
            {'WITH'.split('').map((char, idx) => (
              <span key={`w2-${idx}`} className="io-letter-clip">
                <span
                  className="io-letter"
                  style={{ '--letter-index': 6 + idx } as React.CSSProperties}
                >
                  {char}
                </span>
              </span>
            ))}
            <span className="w-2.5 sm:w-4 inline-block" />
            {'GANESH'.split('').map((char, idx) => (
              <span key={`w3-${idx}`} className="io-letter-clip">
                <span
                  className="io-letter"
                  style={{ '--letter-index': 10 + idx } as React.CSSProperties}
                >
                  {char}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Minimal Progress Bar & Numerical Counter */}
        <div className="io-reveal-progress">
          <div
            className={`io-reveal-progress-labels ${
              phase !== 'playing' ? 'io-reveal--labels-hide' : ''
            }`}
          >
            <span className="tracking-[0.16em]">LOADING</span>
            <span className="font-mono">{progress}%</span>
          </div>
          <div
            className={`io-reveal-progress-track ${
              phase !== 'playing' ? 'io-reveal--labels-hide' : ''
            }`}
          >
            <span
              className="io-reveal-line"
              style={{ transform: `scaleX(${progress / 100})` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
