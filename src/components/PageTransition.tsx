import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const PageTransition: React.FC = () => {
  const location = useLocation();
  const [status, setStatus] = useState<'idle' | 'entering' | 'exiting'>('idle');
  const [tracerProgress, setTracerProgress] = useState(0);
  const [tracerVisible, setTracerVisible] = useState(false);

  const isFirstMount = useRef(true);
  const prevPathname = useRef(location.pathname);
  const timeouts = useRef<NodeJS.Timeout[]>([]);

  const clearAllTimeouts = () => {
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];
  };

  useEffect(() => {
    // Skip shutter animation on initial mount since EntranceReveal handles the first load
    if (isFirstMount.current) {
      isFirstMount.current = false;
      prevPathname.current = location.pathname;
      return;
    }

    // If only hash changed on the same path, don't trigger shutter transition
    if (prevPathname.current === location.pathname) {
      if (location.hash) {
        const el = document.querySelector(location.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    prevPathname.current = location.pathname;
    clearAllTimeouts();

    // 1. Start Phase: Columns sweep down to cover screen, top tracer starts
    setStatus('entering');
    setTracerVisible(true);
    setTracerProgress(65);

    // 2. Midpoint Phase (~280ms): Viewport fully shielded by dark columns
    const tMid = setTimeout(() => {
      // Instant seamless scroll to top or hash target while covered
      if (location.hash) {
        const target = document.querySelector(location.hash);
        if (target) {
          target.scrollIntoView({ behavior: 'instant' });
        } else {
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }

      // Columns sweep down offscreen to uncover the new page
      setStatus('exiting');
      setTracerProgress(100);
    }, 280);

    // 3. Completion Phase (~640ms): Curtain gone, hide tracer
    const tEnd = setTimeout(() => {
      setStatus('idle');
      setTracerVisible(false);
      setTracerProgress(0);
    }, 640);

    timeouts.current.push(tMid, tEnd);

    return () => {
      clearAllTimeouts();
    };
  }, [location.pathname, location.hash]);

  return (
    <>
      {/* High-speed Top Progress Tracer */}
      {tracerVisible && (
        <div
          className="page-transition-tracer"
          style={{
            transform: `scaleX(${tracerProgress / 100})`,
            opacity: status === 'idle' ? 0 : 1,
          }}
          aria-hidden="true"
        />
      )}

      {/* 5-Column High-Performance Shutter Curtain (runs on GPU compositor thread) */}
      <div
        className={`page-transition-overlay ${
          status === 'entering'
            ? 'page-transition--entering'
            : status === 'exiting'
            ? 'page-transition--exiting'
            : ''
        }`}
        style={{ display: status === 'idle' ? 'none' : 'flex' }}
        aria-hidden="true"
      >
        {[0, 1, 2, 3, 4].map((col) => (
          <div
            key={`pt-col-${col}`}
            className="page-transition-column"
            style={{ '--col-idx': col } as React.CSSProperties}
          />
        ))}
      </div>
    </>
  );
};
