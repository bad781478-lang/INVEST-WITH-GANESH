import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { ClientsTicker } from '../components/home/ClientsTicker';
import { StatementSection } from '../components/home/StatementSection';
import { YoutubeShowcaseSection } from '../components/home/YoutubeShowcaseSection';
import { TownshipAmenitiesSection } from '../components/home/TownshipAmenitiesSection';
import { FeaturedProjectsSection } from '../components/home/FeaturedProjectsSection';
import { ResultsSection } from '../components/home/ResultsSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { BlogsSection } from '../components/home/BlogsSection';
import { FaqSection } from '../components/home/FaqSection';

export const HomePage: React.FC = () => {
  return (
    <main className="w-full">
      <HeroSection />
      <ClientsTicker />
      <StatementSection />
      <YoutubeShowcaseSection />
      <TownshipAmenitiesSection />
      <FeaturedProjectsSection />
      <ResultsSection />
      <TestimonialsSection />
      <BlogsSection />
      <FaqSection />
    </main>
  );
};
