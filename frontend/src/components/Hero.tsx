'use client';

import { smoothScrollTo } from '../utils/smoothScroll';
import { HeroContent } from './HeroContent';

const Hero = () => {
  const handleScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('recent-posts');
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const headerOffset = 64;
      const targetPosition = elementPosition - headerOffset;
      
      smoothScrollTo(targetPosition, 400);
    }
  };

  return (
    <div className="relative bg-gray-900 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <HeroContent onScrollClick={handleScroll} />
      </div>
    </div>
  );
};

export default Hero; 