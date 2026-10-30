import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const PageTransition: React.FC = () => {
  const location = useLocation();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  const isFirstMount = useRef(true);
  const prevPathname = useRef(location.pathname);

  useEffect(() => {
    // Skip on first mount (EntranceReveal handles initial visit)
    if (isFirstMount.current) {
      isFirstMount.current = false;
      prevPathname.current = location.pathname;
      return;
    }

    // If only hash changed on the same page, smoothly scroll to hash without top loader
    if (prevPathname.current === location.pathname) {
      if (location.hash) {
        const el = document.querySelector(location.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    prevPathname.current = location.pathname;

    // Instantly scroll to top or target
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }

    // Trigger sleek minimal top tracer line
    setVisible(true);
    setProgress(55);

    const tMid = setTimeout(() => {
      setProgress(100);
    }, 120);

    const tEnd = setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 280);

    return () => {
      clearTimeout(tMid);
      clearTimeout(tEnd);
    };
  }, [location.pathname, location.hash]);

  if (!visible && progress === 0) return null;

  return (
    <div
      className="page-top-loader"
      style={{
        transform: `scaleX(${progress / 100})`,
        opacity: visible ? 1 : 0,
      }}
      aria-hidden="true"
    />
  );
};
