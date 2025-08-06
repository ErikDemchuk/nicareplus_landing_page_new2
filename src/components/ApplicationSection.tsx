'use client';

import { motion } from 'motion/react';

export default function ApplicationSection() {
  const steps = [
    {
      number: 1,
      title: "MIX",
      description: "Add one scoop of Daily Ultimate Essentials to 8-12 oz of cold water.",
      image: "/section_7_image_test.png"
    },
    {
      number: 2,
      title: "ENJOY", 
      description: "Drink daily, preferably in the morning, to fuel your body and mind.",
      image: "/section_start_new.jpg"
    },
    {
      number: 3,
      title: "EXPERIENCE",
      description: "Feel the difference as your body receives optimal nutrition day after day.",
      image: "/edit-test-1-new.jpg"
    }
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Title */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-normal text-[#081f6e] leading-tight tracking-wide">
            SIMPLE TO USE,<br />
            <span className="text-[#8B1538]">POWERFUL RESULTS</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16 lg:mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="text-center"
            >
              {/* Step Number */}
              <div className="relative mb-6">
                <div className="w-12 h-12 bg-[#8B1538] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>
              </div>

              {/* Step Image */}
              <div className="relative mb-6 overflow-hidden rounded-xl aspect-[4/3] bg-gray-100 shadow-md">
                <img 
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to a solid color if image fails
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.style.backgroundColor = '#f3f4f6';
                    }
                  }}
                />
              </div>

              {/* Step Title */}
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 tracking-wide">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Consistency Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 lg:p-12 text-center">
            
            {/* Icon - Hexagonal */}
            <div className="w-16 h-16 mx-auto mb-6">
              <div 
                className="w-full h-full bg-[#8B1538] flex items-center justify-center relative"
                style={{
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                }}
              >
                <svg 
                  className="w-8 h-8 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2.5} 
                    d="M13 10V3L4 14h7v7l9-11h-7z" 
                  />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 tracking-wide">
              CONSISTENCY IS KEY
            </h3>

            {/* Description */}
            <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
              Most users report noticeable improvements in energy and digestion within the first week, 
              with comprehensive benefits developing over 4-8 weeks of daily use.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}