'use client';
import { useState } from 'react';

export default function FlareUpLoopSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="w-full bg-gradient-to-b from-[#6285FF]/5 to-[#6285FF]/20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Desktop Layout */}
        <div className="hidden md:block">
          {/* Small Header */}
          <div className="text-center mb-8">
            <p className="text-sm uppercase tracking-wider text-[#081f6e] font-normal">WHAT IS <em>FLARE UP LOOP</em>?</p>
          </div>
          
          {/* Expert Quote Box - Center */}
          <div className="flex justify-center mb-16 lg:mb-20">
            <div className="relative bg-white rounded-3xl border border-gray-200 shadow-sm p-6 lg:p-10 max-w-4xl mx-auto">
              {/* Quote Text */}
              <div className="px-6 lg:px-10 py-6">
                <p className="text-lg lg:text-xl xl:text-3xl font-light leading-relaxed text-gray-900 text-center relative">
                  <span className="text-7xl lg:text-9xl text-[#081f6e] font-serif leading-none float-left mr-4 mt-3">&ldquo;</span>
                  A flare loop is a cycle where heat, sweat, and friction trigger painful bumps and inflammation. The ongoing pain and daily care cause fatigue, which fuels more flares.
                  <span className="text-7xl lg:text-9xl text-[#081f6e] font-serif leading-none float-right ml-4 -mt-2">&rdquo;</span>
                </p>
              </div>
              
              {/* Expert Attribution */}
              <div 
                className="flex items-center justify-center gap-3 mt-4 cursor-pointer hover:bg-gray-50 rounded-lg p-3 transition-colors relative"
                onClick={() => setIsModalOpen(true)}
              >
                <div className="relative">
                  <img 
                    src="/Dr-Amy-Kassouf-icon.jpg" 
                    alt="Dr. Amy Kassouf"
                    className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover"
                  />
                  {/* Question Mark Indicator */}
                  <div className="absolute -top-2 -left-2 w-5 h-5 bg-[#081f6e] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">?</span>
                  </div>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900 text-base lg:text-lg hover:text-blue-600 transition-colors">— Dr. Amy Kassouf,</p>
                  <p className="text-gray-600 text-sm lg:text-base">Dermatology Expert</p>
                </div>
              </div>
            </div>
          </div>

          {/* Three Images Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Image 1 */}
            <div className="relative rounded-2xl overflow-hidden h-72">
              <img 
                src="/section_2_friction.png" 
                alt="Hands protecting inflamed skin area"
                className="absolute inset-0 w-full h-full object-cover"
                width="1920"
                height="1080"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h3 className="text-white text-2xl lg:text-3xl font-lato font-normal italic text-center px-4 tracking-wider uppercase">
                  IRRITATION<br />TRIGGERS
                </h3>
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative rounded-2xl overflow-hidden h-72">
              <img 
                src="/section_2_sweat.png" 
                alt="Person sweating after exercise"
                className="absolute inset-0 w-full h-full object-cover"
                width="1920"
                height="1080"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h3 className="text-white text-2xl lg:text-3xl font-lato font-normal italic text-center px-4 tracking-wider uppercase">
                  MOISTURE<br />BUILDUP
                </h3>
              </div>
            </div>

            {/* Image 3 */}
            <div className="relative rounded-2xl overflow-hidden h-72">
              <img 
                src="/section_2_fatigue.png" 
                alt="Person applying medical patch"
                className="absolute inset-0 w-full h-full object-cover"
                width="1920"
                height="1080"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h3 className="text-white text-2xl lg:text-3xl font-lato font-normal italic text-center px-4 tracking-wider uppercase">
                  STRESS<br />CYCLE
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Small Header */}
          <div className="text-center mb-6">
            <p className="text-sm uppercase tracking-wider text-[#081f6e] font-normal">WHAT IS <em>FLARE UP LOOP</em>?</p>
          </div>
          
          {/* Expert Quote Box - Mobile */}
          <div className="mb-12">
            <div className="relative bg-white rounded-2xl border border-gray-200 shadow-sm p-6 max-w-sm mx-auto">
              {/* Quote Text */}
              <div className="px-4 py-5">
                <p className="text-base font-light leading-relaxed text-gray-900 text-left relative">
                  <span className="text-5xl text-[#081f6e] font-serif leading-none float-left mr-2 mt-1">&ldquo;</span>
                  A flare loop is a cycle where heat, sweat, and friction trigger painful bumps and inflammation. The ongoing pain and daily care cause fatigue, which fuels more flares.
                  <span className="text-5xl text-[#081f6e] font-serif leading-none float-right ml-2 -mt-2">&rdquo;</span>
                </p>
              </div>
              
              {/* Expert Attribution */}
              <div 
                className="flex items-center gap-3 mt-3 cursor-pointer hover:bg-gray-50 rounded-lg p-2 transition-colors relative"
                onClick={() => setIsModalOpen(true)}
              >
                <div className="relative">
                  <img 
                    src="/Dr-Amy-Kassouf-icon.jpg" 
                    alt="Dr. Amy Kassouf"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {/* Question Mark Indicator */}
                  <div className="absolute -top-1 -left-1 w-4 h-4 bg-[#081f6e] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">?</span>
                  </div>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900 text-sm hover:text-blue-600 transition-colors">— Dr. Amy Kassouf,</p>
                  <p className="text-gray-600 text-xs">Dermatology Expert</p>
                </div>
              </div>
            </div>
          </div>

          {/* Three Images Stacked */}
          <div className="space-y-6">
            {/* Image 1 */}
            <div className="relative rounded-2xl overflow-hidden h-56">
              <img 
                src="/section_2_friction.png" 
                alt="Hands protecting inflamed skin area"
                className="absolute inset-0 w-full h-full object-cover"
                width="414"
                height="736"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h3 className="text-white text-xl font-lato font-normal italic text-center px-4 tracking-wider uppercase">
                  IRRITATION TRIGGERS
                </h3>
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative rounded-2xl overflow-hidden h-56">
              <img 
                src="/section_2_sweat.png" 
                alt="Person sweating after exercise"
                className="absolute inset-0 w-full h-full object-cover"
                width="414"
                height="736"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h3 className="text-white text-xl font-lato font-normal italic text-center px-4 tracking-wider uppercase">
                  MOISTURE BUILDUP
                </h3>
              </div>
            </div>

            {/* Image 3 */}
            <div className="relative rounded-2xl overflow-hidden h-56">
              <img 
                src="/section_2_fatigue.png" 
                alt="Person applying medical patch"
                className="absolute inset-0 w-full h-full object-cover"
                width="414"
                height="736"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h3 className="text-white text-xl font-lato font-normal italic text-center px-4 tracking-wider uppercase">
                  STRESS CYCLE
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl mx-4 md:mx-auto max-h-[90vh] overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-white/80 hover:bg-white rounded-full transition-colors"
            >
              <span className="text-gray-600 text-xl">×</span>
            </button>

            {/* Desktop Layout */}
            <div className="hidden md:flex">
              {/* Left Side - Image */}
              <div className="w-1/2 bg-gradient-to-br from-pink-100 to-pink-200">
                <img
                  src="/Dr-Amy-Kassouf-icon.jpg"
                  alt="Dr. Amy Kassouf"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Right Side - Content */}
              <div className="w-1/2 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Dr. Amy Kassouf</h2>
                <h3 className="text-lg font-semibold text-gray-700 mb-6">Dermatology Expert at Cleveland Clinic</h3>
                
                <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                  <p>
                    Dr. Amy Kassouf is a distinguished dermatologist at Cleveland Clinic, where she has served as a clinician and researcher for over 15 years, specializing in inflammatory skin conditions.
                  </p>
                  <p>
                    She is board-certified in dermatology and has extensive experience treating chronic skin conditions including eczema, psoriasis, and contact dermatitis.
                  </p>
                  <p>
                    Dr. Kassouf's research focuses on innovative treatments for inflammatory skin diseases and improving quality of life for patients with chronic dermatological conditions.
                  </p>
                </div>
                
                <button className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-full mt-6 transition-colors">
                  LEARN MORE
                </button>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden">
              {/* Header with gradient background */}
              <div className="bg-gradient-to-br from-pink-100 to-pink-200 pt-12 pb-6 px-6 text-center">
                <img
                  src="/Dr-Amy-Kassouf-icon.jpg"
                  alt="Dr. Amy Kassouf"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg"
                />
                <h2 className="text-xl font-bold text-gray-900 mb-1">Dr. Amy Kassouf</h2>
                <h3 className="text-base font-semibold text-gray-700">Dermatology Expert at Cleveland Clinic</h3>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="space-y-4 text-gray-600 text-sm leading-relaxed mb-6">
                  <p>
                    Dr. Amy Kassouf is a distinguished dermatologist at Cleveland Clinic, where she has served as a clinician and researcher for over 15 years.
                  </p>
                  <p>
                    She is board-certified in dermatology and has extensive experience treating chronic skin conditions including eczema, psoriasis, and contact dermatitis.
                  </p>
                </div>
                
                <button className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-full transition-colors">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
} 