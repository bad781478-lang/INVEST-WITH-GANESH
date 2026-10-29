import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navItems } from '../data/consultareData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isDarkHeroPage =
    location.pathname === '/' ||
    location.pathname === '/projects/yaduraj-ojas' ||
    location.pathname === '/case-studies/yaduraj-ojas' ||
    location.pathname === '/projects/bank-officers-colony' ||
    location.pathname === '/case-studies/bank-officers-colony' ||
    location.pathname === '/projects/vivo-city-colony' ||
    location.pathname === '/projects/vivo-city' ||
    location.pathname === '/case-studies/vivo-city-colony' ||
    location.pathname === '/case-studies/vivo-city';

  useEffect(() => {
    const handleScroll = () => {
      // On dark 100vh hero pages (home and Yaduraj Ojas), navbar stays transparent with light text until scrolled
      // On light canvas pages, navbar is transparent at scroll (0,0) and frosts when scrolled past 20px
      if (isDarkHeroPage) {
        setIsScrolled(window.scrollY > 380);
      } else {
        setIsScrolled(window.scrollY > 20);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, isDarkHeroPage]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  // Dark text is needed when navbar is on a light background:
  // - whenever scrolled (white background)
  // - on pages that don't have a 100vh dark hero
  const useDarkText = !mobileMenuOpen && (isScrolled || !isDarkHeroPage);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        mobileMenuOpen
          ? 'bg-[#161512] py-4 border-b border-white/10 shadow-2xl'
          : isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-zinc-200/60 py-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)]'
          : 'bg-transparent py-5 md:py-6 border-b border-transparent shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Left: Logo + Vertical Divider + Nav Links */}
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 sm:gap-2.5 group">
            <img
              src="/brand/logo-square.png"
              alt="Invest With Ganesh logo, JDA & RERA approved plots in Jaipur"
              className="h-[58px] w-[58px] sm:h-[72px] sm:w-[72px] object-contain transition-transform duration-300 group-hover:scale-105 shrink-0"
            />
            <div className="flex flex-col">
              <span
                className={`text-[16.5px] sm:text-[17.5px] font-bold tracking-tight leading-tight transition-colors ${
                  useDarkText ? 'text-zinc-950' : 'text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]'
                }`}
                style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
              >
                INVEST WITH GANESH
              </span>
              <span
                className={`text-[10.5px] sm:text-[11px] uppercase tracking-wider font-semibold transition-colors ${
                  useDarkText ? 'text-amber-800' : 'text-amber-400 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]'
                }`}
              >
                JDA &amp; RERA Approved Plots
              </span>
            </div>
          </Link>

          {/* Vertical Divider */}
          <div
            className={`hidden md:block w-[1px] h-4 transition-colors ${
              useDarkText ? 'bg-zinc-300' : 'bg-white/20'
            }`}
          />

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7">
            {navItems.map((item) => {
              const isAnchor = item.href.startsWith('/#');
              const isActive =
                item.href === '/'
                  ? location.pathname === '/'
                  : location.pathname === item.href ||
                    location.pathname.startsWith(`${item.href}/`);

              if (isAnchor) {
                return (
                  <a
                    key={item.label}
                    href={item.href.replace('/', '')}
                    className={`text-[13.5px] transition-colors font-medium ${
                      useDarkText
                        ? 'text-zinc-700 hover:text-zinc-950'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-[13.5px] transition-colors font-medium ${
                    useDarkText
                      ? isActive
                        ? 'text-zinc-950 font-semibold'
                        : 'text-zinc-700 hover:text-zinc-950'
                      : isActive
                      ? 'text-white font-semibold'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/contact"
            className={`rounded-xl px-5 py-2.5 text-[13.5px] font-medium transition-all duration-200 shadow-sm ${
              useDarkText
                ? 'bg-[#161512] text-white hover:bg-black'
                : 'bg-white text-zinc-950 hover:bg-zinc-100'
            }`}
          >
            Book Site Visit
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          className={`md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl transition-colors shadow-sm cursor-pointer z-50 ${
            mobileMenuOpen
              ? 'bg-white/15 text-white border border-white/20'
              : useDarkText
              ? 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'
              : 'bg-black/50 backdrop-blur-md text-white border border-white/15 hover:bg-black/70'
          }`}
        >
          <span
            className={`w-5 h-[2px] transition-all duration-300 origin-center ${
              mobileMenuOpen || !useDarkText ? 'bg-white' : 'bg-zinc-900'
            } ${mobileMenuOpen ? 'rotate-45 translate-y-[4px]' : ''}`}
          />
          <span
            className={`w-5 h-[2px] transition-all duration-300 origin-center ${
              mobileMenuOpen || !useDarkText ? 'bg-white' : 'bg-zinc-900'
            } ${mobileMenuOpen ? '-rotate-45 -translate-y-[4px]' : ''}`}
          />
        </button>
      </div>

      {/* Mobile Drawer (attached to bottom of header via absolute) */}
      <div
        className={`md:hidden absolute inset-x-0 top-full bg-[#161512]/98 backdrop-blur-2xl border-b border-white/10 transition-all duration-300 ease-in-out overflow-hidden shadow-2xl z-40 ${
          mobileMenuOpen
            ? 'max-h-[600px] opacity-100 py-6 px-6 pointer-events-auto'
            : 'max-h-0 opacity-0 py-0 px-6 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-4 text-white">
          {navItems.map((item) => {
            const isAnchor = item.href.startsWith('/#');
            if (isAnchor) {
              return (
                <a
                  key={item.label}
                  href={item.href.replace('/', '')}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[17px] font-medium text-white/90 hover:text-white py-2.5 border-b border-white/10 transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-amber-400">→</span>
                </a>
              );
            }
            return (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[17px] font-medium text-white/90 hover:text-white py-2.5 border-b border-white/10 transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-xs text-amber-400">→</span>
              </Link>
            );
          })}

          <div className="pt-2 flex items-center justify-between text-xs text-white/70">
            <a href="tel:+917851982209" className="hover:text-white transition-colors">
              📞 +91-7851982209
            </a>
            <a
              href="https://wa.me/917851982209"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              💬 WhatsApp
            </a>
          </div>

          <div className="pt-2">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center block rounded-xl bg-white text-zinc-950 py-3 text-[14px] font-semibold hover:bg-zinc-100 transition-colors shadow-lg"
            >
              Enquire About Plots
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
