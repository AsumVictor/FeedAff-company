import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ExternalIcon } from './icons';

const HeroContent: React.FC = () => {
  return (
    <div className="relative z-10 max-w-3xl animate-fadeIn">
      <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-xs font-semibold text-white mb-6 border border-white/20">
        WE OFFER QUALITY AND HEALTHY
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-reveal">
        More Than a Farm:
        <br />
        A Promise of Freshness
        <br />
        <span className="inline-flex items-center">
          & Health<span className="text-yellow-400">.</span>
        </span>
      </h1>
      
      <p className="text-white/90 text-lg mb-8 max-w-2xl animate-revealSlow">
        Nourish your body and soul with fresh produce straight from the farm. Feed Africa Farms gives you
        the space to live healthier, naturally.
      </p>
      
      <button className="bg-white hover:bg-yellow-400 transition-all duration-300 hover:px-10 text-[#1a3c1e] font-medium py-3 px-8 rounded-full flex items-center space-x-2 shadow-lg animate-revealSlow">
        <span>Contact Us</span>
        <ExternalIcon />
      </button>
    </div>
  );
};

export default HeroContent;