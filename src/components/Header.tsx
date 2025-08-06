'use client';
import { useState, useEffect } from 'react';

export default function Header() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextTextIndex, setNextTextIndex] = useState(1);
  
  const dynamicTexts = ["MOVE FREELY", "STAY PROTECTED", "HEAL FASTER"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setNextTextIndex((currentTextIndex + 1) % dynamicTexts.length);
      
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % dynamicTexts.length);
        setIsTransitioning(false);
      }, 500); // Duration of transition
      
    }, 2000); // Change every 2 seconds
    
    return () => clearInterval(interval);
  }, [currentTextIndex]);

  return (
    <section className="w-full bg-white">
      {/* Desktop Layout */}
      <div className="hidden md:flex items-stretch max-w-7xl mx-auto h-96 lg:h-[500px]">
        {/* Left section - Image - 60% width, edge-to-edge */}
        <div className="w-3/5 relative overflow-hidden">
          <picture>
            <source media="(min-width: 768px)" srcSet="/header-petri-dish-desktop.jpg" />
            <img 
              src="/header-petri-dish-desktop.jpg" 
              alt="Hand holding petri dish"
              className="absolute inset-0 w-full h-full object-cover"
              width="1920"
              height="1080"
            />
          </picture>
        </div>
        
        {/* Right section - Content - 40% width, white background */}
        <div className="w-2/5 bg-white flex items-center px-12 py-16 lg:py-24">
          <div>
                        <div className="mb-6">
              {/* Static Text - 2 lines for desktop */}
              <h1 className="text-4xl lg:text-5xl font-normal leading-tight text-[#081f6e] tracking-wide">
                Break Flares Cycle with<br />
                Infused Silicone Patch
            </h1>
              
              {/* Dynamic Text Container */}
              <div className="relative h-14 lg:h-16 overflow-hidden mt-4">
                {/* Current text */}
                <div 
                  className={`absolute inset-0 ${isTransitioning ? 'animate-slide-up-exit' : ''}`}
                >
                  <span className="text-3xl lg:text-4xl font-normal text-[#081f6e] tracking-wide italic">
                    {dynamicTexts[currentTextIndex]}
                  </span>
                </div>
                
                {/* Next text during transition */}
                {isTransitioning && (
                  <div className="absolute inset-0 animate-slide-up-enter">
                    <span className="text-3xl lg:text-4xl font-normal text-[#081f6e] tracking-wide italic">
                      {dynamicTexts[nextTextIndex]}
                    </span>
                  </div>
                )}
                            </div>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed mt-2">
              Discover how triggers like heat, friction, and stress fuel the cycle—and learn how to break it using a silicone foam patch that covers/protects and absorbs irritating fluids, while the custom infusion soothes inflammation and speeds up healing, breaking that vicious loop.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        {/* Image on top - full coverage */}
        <div>
          <picture>
            <source media="(max-width: 767px)" srcSet="/header-image-mobile.jpg" />
            <img 
              src="/header-image-mobile.jpg" 
              alt="Header image"
              className="w-full object-cover"
              width="414"
              height="736"
            />
          </picture>
        </div>
        
        {/* Content below */}
        <div className="px-6 py-8">
          <div className="mb-6">
            {/* Static Text */}
            <h1 className="text-2xl font-normal leading-tight text-[#081f6e] tracking-wide">
              Break Flares Cycle with<br />
              Infused Silicone Patch
          </h1>
            
            {/* Dynamic Text Container */}
            <div className="relative h-10 overflow-hidden mt-3">
              {/* Current text */}
              <div 
                className={`absolute inset-0 ${isTransitioning ? 'animate-slide-up-exit' : ''}`}
              >
                <span className="text-xl font-normal text-[#081f6e] tracking-wide italic">
                  {dynamicTexts[currentTextIndex]}
                </span>
              </div>
              
              {/* Next text during transition */}
              {isTransitioning && (
                <div className="absolute inset-0 animate-slide-up-enter">
                  <span className="text-xl font-normal text-[#081f6e] tracking-wide italic">
                    {dynamicTexts[nextTextIndex]}
                  </span>
                </div>
              )}
            </div>
          </div>
          <p className="text-xs text-gray-700 leading-relaxed mt-2">
            Discover how triggers like heat, friction, and stress fuel the cycle—and learn how to break it using a silicone foam patch that covers/protects and absorbs irritating fluids, while the custom infusion soothes inflammation and speeds up healing, breaking that vicious loop.
          </p>
        </div>
      </div>
    </section>
  );
} 