import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#161512] text-white min-h-screen flex items-center justify-center">
      <div className="max-w-xl mx-auto px-6 text-center space-y-6">
        <span className="text-sm font-mono uppercase tracking-widest text-white/40">
          Error 404
        </span>
        <h1 className="text-5xl sm:text-6xl font-medium tracking-tight text-white">
          Page Not Found
        </h1>
        <p className="text-white/70 text-base md:text-lg leading-relaxed">
          The page you are looking for doesn't exist, has been moved, or is no longer available.
        </p>
        <div className="pt-4 flex items-center justify-center">
          <Button to="/" variant="primary" icon={<ArrowLeft className="w-4 h-4 ml-0.5" />}>
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};
