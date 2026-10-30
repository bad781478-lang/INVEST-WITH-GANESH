import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { StickySocialActions } from './components/StickySocialActions';
import { EntranceReveal } from './components/EntranceReveal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { YadurajOjasPage } from './pages/YadurajOjasPage';
import { VivoCityColonyPage } from './pages/VivoCityColonyPage';
import { BankOfficersColonyPage } from './pages/BankOfficersColonyPage';
import { ImperialGalaxyColonyPage } from './pages/ImperialGalaxyColonyPage';
import { ShreeKrishnaViharIVPage } from './pages/ShreeKrishnaViharIVPage';
import { ComingSoonProjectPage } from './pages/ComingSoonProjectPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { CaseStudyDetailPage } from './pages/CaseStudyDetailPage';
import { BlogsPage } from './pages/BlogsPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPolicyPage } from './pages/TermsPolicyPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top on route change or handle hash scroll
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
};

// Global Consultaro / Framer Smooth Scroll Reveal Observer (High Performance, Butter-Smooth)
const ScrollAnimationObserver: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    // Reset footer reveal on route change so it animates when scrolled to on the new page
    const footerElements = document.querySelectorAll('footer.is-revealed, footer .is-revealed');
    footerElements.forEach((el) => el.classList.remove('is-revealed'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px 40px 0px' }
    );

    const observeUnrevealed = () => {
      const elements = document.querySelectorAll(
        '.reveal-on-scroll:not(.is-revealed), .reveal-fade:not(.is-revealed), .reveal-scale:not(.is-revealed), .reveal-slide-left:not(.is-revealed), .reveal-slide-right:not(.is-revealed)'
      );
      elements.forEach((el) => observer.observe(el));
    };

    observeUnrevealed();
    const t1 = setTimeout(observeUnrevealed, 60);
    const t2 = setTimeout(observeUnrevealed, 300);
    const t3 = setTimeout(observeUnrevealed, 800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <EntranceReveal />
      <ScrollToTop />
      <ScrollAnimationObserver />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/yaduraj-ojas" element={<YadurajOjasPage />} />
            <Route path="/projects/vivo-city-colony" element={<VivoCityColonyPage />} />
            <Route path="/projects/vivo-city" element={<VivoCityColonyPage />} />
            <Route path="/projects/bank-officers-colony" element={<BankOfficersColonyPage />} />
            <Route path="/projects/bank-officers" element={<BankOfficersColonyPage />} />
            <Route path="/projects/imperial-galaxy-colony" element={<ImperialGalaxyColonyPage />} />
            <Route path="/projects/imperial-galaxy" element={<ImperialGalaxyColonyPage />} />
            <Route path="/projects/shree-krishna-vihar-iv" element={<ShreeKrishnaViharIVPage />} />
            <Route path="/projects/shree-krishna-vihar" element={<ShreeKrishnaViharIVPage />} />
            <Route path="/projects/coming-soon-project" element={<ComingSoonProjectPage />} />
            <Route path="/projects/coming-soon" element={<ComingSoonProjectPage />} />
            <Route path="/projects/:slug" element={<CaseStudyDetailPage />} />
            <Route path="/case-studies" element={<ProjectsPage />} />
            <Route path="/case-studies/yaduraj-ojas" element={<YadurajOjasPage />} />
            <Route path="/case-studies/vivo-city-colony" element={<VivoCityColonyPage />} />
            <Route path="/case-studies/vivo-city" element={<VivoCityColonyPage />} />
            <Route path="/case-studies/bank-officers-colony" element={<BankOfficersColonyPage />} />
            <Route path="/case-studies/bank-officers" element={<BankOfficersColonyPage />} />
            <Route path="/case-studies/imperial-galaxy-colony" element={<ImperialGalaxyColonyPage />} />
            <Route path="/case-studies/imperial-galaxy" element={<ImperialGalaxyColonyPage />} />
            <Route path="/case-studies/shree-krishna-vihar-iv" element={<ShreeKrishnaViharIVPage />} />
            <Route path="/case-studies/shree-krishna-vihar" element={<ShreeKrishnaViharIVPage />} />
            <Route path="/case-studies/coming-soon-project" element={<ComingSoonProjectPage />} />
            <Route path="/case-studies/coming-soon" element={<ComingSoonProjectPage />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/blogs/:slug" element={<BlogDetailPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/legal-policy/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/legal-policy/legal-policy" element={<TermsPolicyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
        <StickySocialActions />
      </div>
    </BrowserRouter>
  );
};

export default App;
