'use client';

export default function FrictionSection() {
  return (
    <section className="w-full py-5 lg:py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clinical Trial 2 */}
        <div className="mb-3">
          {/* Mobile: Blue container with content only */}
          <div className="bg-[#d1daf9] rounded-3xl p-8 mb-8 lg:hidden">
            <p className="text-sm font-normal text-[#081f6e] uppercase tracking-wider mb-6">
              CLINICAL TRIAL 2
            </p>
            
            <h3 className="text-2xl lg:text-4xl font-normal text-[#081f6e] mb-8 leading-tight tracking-wide">
              MANAGING <br className="lg:hidden" /><em>FRICTION IN FLARES</em>
            </h3>

            <div className="space-y-8">
              <div className="border-b border-black pb-6">
                <p className="text-sm font-normal text-[#071958] uppercase tracking-wider mb-3">
                  THE CHALLENGE:
                </p>
                <p className="text-sm text-[#071958] leading-relaxed">
                  Every step or shift brings relentless rubbing in friction zones. It tears flares, amps up the pain, and piles on thick scars. Suddenly, basics like walking or sitting turn into daily torture.
                </p>
              </div>

              <div className="border-b border-black pb-6">
                <p className="text-sm font-normal text-[#071958] uppercase tracking-wider mb-3">
                  WHY IT MATTERS:
                </p>
                <p className="text-sm text-[#071958] leading-relaxed">
                  Friction causes tiny skin tears, delaying healing and increasing inflammation in folds. —studies show 22% of patients report friction before onset, leading to epidermal thickening, reduced healing genes.
                </p>
              </div>

              <div>
                <p className="text-sm font-normal text-[#071958] uppercase tracking-wider mb-3">
                  HOW SILICONE PATCHES HELPS:
                </p>
                <p className="text-sm text-[#071958] leading-relaxed">
                  The silicone patch protects skin from irritants by forming a gentle, waterproof barrier that seals the wound area, blocking external contaminants like bacteria, dirt, or chemicals from entering while allowing oxygen to pass through for healthy healing.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile: Image outside blue container, fully expanded */}
          <div className="lg:hidden mb-8 -mx-4 sm:-mx-6 lg:mx-0">
            <img 
              src="/graph-protection-from-irritation.jpg" 
              alt="Protection from Irritation Comparison Chart showing Silicone Patches vs Gauze"
              className="w-full h-96 object-contain bg-white"
            />
          </div>

          {/* Mobile: Expected Outcomes Box */}
          <div className="lg:hidden mb-8 mx-4">
            <div className="bg-[#081f6e] text-white p-6 rounded-2xl font-light">
              <p className="leading-relaxed mb-4">
                Silicone Patches build to nearly 100% by day 28, while gauze peaks at 40%. Less exposure, reduced maceration, better healing.
              </p>
              <p className="text-sm">
                <a 
                  href="https://www.researchgate.net/publication/9037128_A_study_to_compare_a_new_self_adherent_soft_silicone_dressing_with_a_self_adherent_polymer_dressing_in_stage_II_pressure_ulcers" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline font-semibold hover:text-gray-200 transition-colors"
                >
                  Click HERE for full details.
                </a>
              </p>
            </div>
          </div>

          {/* Desktop: Original grid layout */}
          <div className="hidden lg:block bg-[#d1daf9] rounded-3xl p-12">
            <div className="grid grid-cols-2 gap-12">
              {/* Left Content */}
              <div>
                <p className="text-sm font-normal text-[#081f6e] uppercase tracking-wider mb-6">
                  CLINICAL TRIAL 2
                </p>
                
                <h3 className="text-4xl font-normal text-[#081f6e] mb-8 leading-tight tracking-wide">
                  MANAGING <em>FRICTION IN FLARES</em>
                </h3>

                <div className="space-y-8">
                  <div className="border-b border-black pb-6">
                    <p className="text-sm font-normal text-[#071958] uppercase tracking-wider mb-3">
                      THE CHALLENGE:
                    </p>
                    <p className="text-sm text-[#071958] leading-relaxed">
                      Every step or shift brings relentless rubbing in friction zones. It tears flares, amps up the pain, and piles on thick scars. Suddenly, basics like walking or sitting turn into daily torture.
                    </p>
                  </div>

                  <div className="border-b border-black pb-6">
                    <p className="text-sm font-normal text-[#071958] uppercase tracking-wider mb-3">
                      WHY IT MATTERS:
                    </p>
                    <p className="text-sm text-[#071958] leading-relaxed">
                      Friction causes tiny skin tears, delaying healing and increasing inflammation in folds. —studies show 22% of patients report friction before onset, leading to epidermal thickening, reduced healing genes.
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-normal text-[#071958] uppercase tracking-wider mb-3">
                      HOW SILICONE PATCHES HELPS:
                    </p>
                    <p className="text-sm text-[#071958] leading-relaxed">
                      The silicone patch protects skin from irritants by forming a gentle, waterproof barrier that seals the wound area, blocking external contaminants like bacteria, dirt, or chemicals from entering while allowing oxygen to pass through for healthy healing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Content - Desktop Image */}
              <div className="flex flex-col justify-center">
                <div className="relative">
                  <div className="mb-4">
                    <img 
                      src="/graph-protection-from-irritation.jpg" 
                      alt="Protection from Irritation Comparison Chart showing Silicone Patches vs Gauze"
                      className="w-full h-[500px] object-contain rounded-2xl bg-white border border-[#7b8cdb]"
                    />
                  </div>
                  
                  {/* Expected Outcomes Box */}
                  <div className="bg-[#081f6e] text-white p-6 rounded-2xl font-light">
                    <p className="leading-relaxed mb-4">
                      Silicone Patches build to nearly 100% by day 28, while gauze peaks at 40%. Less exposure, reduced maceration, better healing.
                    </p>
                    <p className="text-sm">
                      <a 
                        href="https://www.researchgate.net/publication/9037128_A_study_to_compare_a_new_self_adherent_soft_silicone_dressing_with_a_self_adherent_polymer_dressing_in_stage_II_pressure_ulcers" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="underline font-semibold hover:text-gray-200 transition-colors"
                      >
                        Click HERE for full details.
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 