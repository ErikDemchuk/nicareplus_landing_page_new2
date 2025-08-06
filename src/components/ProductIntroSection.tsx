'use client';

import { useEffect, useState, useRef } from 'react';

export default function ProductIntroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ friction: 0, drainage: 0, healing: 0, fatigue: 0 });
  const sectionRef = useRef(null);

  const targetValues = { friction: 50, drainage: 87, healing: 59, fatigue: -28 };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateNumbers();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateNumbers = () => {
    const duration = 1500; // 1.5 seconds
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOutProgress = 1 - Math.pow(1 - progress, 4); // More dramatic slowdown at end

      setCounts({
        friction: Math.floor(targetValues.friction * easeOutProgress),
        drainage: Math.floor(targetValues.drainage * easeOutProgress),
        healing: Math.floor(targetValues.healing * easeOutProgress),
        fatigue: Math.floor(targetValues.fatigue * easeOutProgress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targetValues);
      }
    }, interval);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-screen lg:min-h-[80vh] bg-cover bg-center bg-fixed bg-no-repeat"
      style={{
        backgroundImage: "url('/section_start_new.jpg')",
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Subtle dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/20 md:bg-black/15"></div>
      
      {/* Content Container - shorter for desktop */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen lg:min-h-[80vh] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 lg:py-16">
        
        {/* Main Headline - concise sizing */}
        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-normal text-white mb-3 lg:mb-4 leading-tight tracking-wide" style={{ fontFamily: '"Clash Grotesk", sans-serif' }}>
          Clinically backed
        </h1>
        
        {/* Subtext - more concise */}
        <p className="text-sm lg:text-lg text-white mb-6 lg:mb-8 leading-relaxed max-w-3xl" style={{ fontFamily: '"Clash Grotesk", sans-serif' }}>
          Silicone foam dressings tackle key flare triggers like friction, drainage, bacteria, and fatigue from daily care. Here's what studies show:
        </p>
        
        {/* CTA Button - smaller spacing */}
        <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-2.5 rounded-full text-sm lg:text-base font-semibold mb-8 lg:mb-10 transition-colors backdrop-blur-sm" style={{ fontFamily: '"Clash Grotesk", sans-serif' }}>
          VIEW STUDIES
        </button>
        
        {/* Benefits Grid - mobile layout like guide */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-20 mb-6 lg:mb-8 w-full max-w-[90rem]">
          
          {/* Less Friction */}
          <div className="text-center">
            <h3 className="text-xl md:text-lg lg:text-xl xl:text-2xl font-medium text-white mb-4 md:mb-3 lg:mb-4 tracking-wide whitespace-nowrap" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              LESS FRICTION
            </h3>
            <div className="text-7xl md:text-5xl lg:text-7xl xl:text-8xl font-light text-white mb-4 md:mb-3 lg:mb-4" style={{ fontFamily: '"Clash Grotesk", sans-serif' }}>
              {counts.friction}%
            </div>
            <p className="text-sm md:text-xs lg:text-sm text-white leading-tight px-2 md:px-1 max-h-[4.5rem] overflow-hidden" style={{ fontFamily: '"Clash Grotesk", sans-serif' }}>
              Softly cushions against rubs so you stay comfy and heal smoother without pain.
            </p>
          </div>
          
          {/* Less Drainage */}
          <div className="text-center">
            <h3 className="text-xl md:text-lg lg:text-xl xl:text-2xl font-medium text-white mb-4 md:mb-3 lg:mb-4 tracking-wide whitespace-nowrap" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              LESS DRAINAGE
            </h3>
            <div className="text-7xl md:text-5xl lg:text-7xl xl:text-8xl font-light text-white mb-4 md:mb-3 lg:mb-4" style={{ fontFamily: '"Clash Grotesk", sans-serif' }}>
              {counts.drainage}%
            </div>
            <p className="text-sm md:text-xs lg:text-sm text-white leading-tight px-2 md:px-1 max-h-[4.5rem] overflow-hidden" style={{ fontFamily: '"Clash Grotesk", sans-serif' }}>
              Drops infection risk by almost 90%—traps pus and sweat inside the patch
            </p>
          </div>
          
          {/* Faster Healing */}
          <div className="text-center">
            <h3 className="text-xl md:text-lg lg:text-xl xl:text-2xl font-medium text-white mb-4 md:mb-3 lg:mb-4 tracking-wide whitespace-nowrap" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              FASTER HEALING
            </h3>
            <div className="text-7xl md:text-5xl lg:text-7xl xl:text-8xl font-light text-white mb-4 md:mb-3 lg:mb-4" style={{ fontFamily: '"Clash Grotesk", sans-serif' }}>
              {counts.healing}%
            </div>
            <p className="text-sm md:text-xs lg:text-sm text-white leading-tight px-2 md:px-1 max-h-[4.5rem] overflow-hidden" style={{ fontFamily: '"Clash Grotesk", sans-serif' }}>
              Speeds up healing by over half—lowers swelling fast for quicker recovery and less downtime.
            </p>
          </div>
          
          {/* Less Fatigue */}
          <div className="text-center">
            <h3 className="text-xl md:text-lg lg:text-xl xl:text-2xl font-medium text-white mb-4 md:mb-3 lg:mb-4 tracking-wide whitespace-nowrap" style={{ fontFamily: '"Satoshi", sans-serif' }}>
              LESS FATIGUE
            </h3>
            <div className="text-7xl md:text-5xl lg:text-7xl xl:text-8xl font-light text-white mb-4 md:mb-3 lg:mb-4" style={{ fontFamily: '"Clash Grotesk", sans-serif' }}>
              {counts.fatigue}%
            </div>
            <p className="text-sm md:text-xs lg:text-sm text-white leading-tight px-2 md:px-1 max-h-[4.5rem] overflow-hidden" style={{ fontFamily: '"Clash Grotesk", sans-serif' }}>
              Reduces fatigue cases by nearly a third—one easy application lasts days, cutting down on daily bandage swaps.
            </p>
          </div>
          
        </div>
        
        {/* Bottom Attribution - more concise */}
        <p className="hidden lg:block text-xs text-white/90 leading-relaxed px-4 text-center max-w-4xl mt-6" style={{ fontFamily: '"Clash Grotesk", sans-serif' }}>
          Results based on clinical studies in adults with chronic flares. Evaluating scar reduction, infection control, healing time, and fatigue. Study designs varied. Please see full studies for additional information.
        </p>
        
      </div>
    </section>
  );
} 