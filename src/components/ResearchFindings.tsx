'use client';

export default function ResearchFindings() {
  return (
    <section className="w-full bg-gradient-to-b from-[#6285FF]/10 to-white py-5 lg:py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Left - Header */}
          <div>
            <p className="text-sm uppercase tracking-wider text-[#081f6e] mb-4 font-normal">CLINICAL TRIALS</p>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight text-[#081f6e] mt-[5%] tracking-wide">
              SETTING <em>NEW STANDARDS</em>
            </h2>
          </div>
          
          {/* Right - Description */}
          <div className="flex items-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              We set the bar high by conducting rigorous clinical trials to validate the efficacy of our products. Unlike many nutraceutical companies, we are committed to transparency and scientific validation through our ongoing trials with the San Francisco Research Institute.
            </p>
          </div>
        </div>

        {/* Clinical Trial 1 */}
        <div className="mb-3 mt-8">
          {/* Mobile: Blue container with content only */}
          <div className="bg-[#d1daf9] rounded-3xl p-8 mb-8 lg:hidden">
            <p className="text-sm font-normal text-[#081f6e] uppercase tracking-wider mb-6">
              CLINICAL TRIAL 1
            </p>
            
            <h3 className="text-2xl lg:text-4xl font-normal text-[#081f6e] mb-8 leading-tight tracking-wide">
              MANAGING <br className="lg:hidden" /><em>DRAINAGE IN FLARES</em>
            </h3>

            <div className="space-y-8">
              <div className="border-b border-black pb-6">
                <p className="text-sm font-normal text-[#071958] uppercase tracking-wider mb-3">
                  THE CHALLENGE:
                </p>
                <p className="text-sm text-[#071958] leading-relaxed">
                  That endless sweat pooling in hidden skin folds, drawing bacteria into flares and sparking constant drainage—turning small irritations into throbbing, oozing abscesses.
                </p>
              </div>

              <div className="border-b border-black pb-6">
                <p className="text-sm font-normal text-[#071958] uppercase tracking-wider mb-3">
                  WHY ADDRESSING SWEAT & BACTERIA MATTER:
                </p>
                <p className="text-sm text-[#071958] leading-relaxed">
                  In humid weather, sweat pools in armpits, groin, and under breasts, creating a breeding ground for bacteria like Staphylococcus that worsen inflammation, pus, infections, and scarring. Studies show that 45% of 110 surveyed flare patients reported worsening symptoms due to sweating, heat, or exercise.
                </p>
              </div>

              <div>
                <p className="text-sm font-normal text-[#071958] uppercase tracking-wider mb-3">
                  HOW SILICONE PATCHES BREAKS THE CYCLE:
                </p>
                <p className="text-sm text-[#071958] leading-relaxed">
                  The patch is specifily desined to pulls drainage from the wound and locks it inside—holding up to 7x its weight without leaking—while absorbing sweat instantly, blocking bacteria, and creating the perfect moist healing environment.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile: Image outside blue container, fully expanded */}
          <div className="lg:hidden mb-8 -mx-4 sm:-mx-6 lg:mx-0">
            <img 
              src="/graph-reduction.jpg" 
              alt="Bacterial Reduction and Healing Speed Comparison Chart showing Silicone Foam Patches vs Traditional Gauze"
              className="w-full h-96 object-contain bg-white"
            />
          </div>

          {/* Mobile: Expected Outcomes Box */}
          <div className="lg:hidden mb-8 mx-4">
            <div className="bg-[#081f6e] text-white p-6 rounded-2xl font-light">
              <p className="leading-relaxed mb-4">
                Heals up to 59% quicker, cuts bacterial growth by 82%, and reduces severe infections by 87%.
              </p>
              <p className="text-sm">
                <a 
                  href="https://www.dovepress.com/clinical-utility-of-foam-dressings-in-wound-management-a-review-peer-reviewed-fulltext-article-CWCMR" 
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
                  CLINICAL TRIAL 1
                </p>
                
                <h3 className="text-4xl font-normal text-[#081f6e] mb-8 leading-tight tracking-wide">
                  MANAGING <em>DRAINAGE IN FLARES</em>
                </h3>

                <div className="space-y-8">
                  <div className="border-b border-black pb-6">
                    <p className="text-sm font-normal text-[#071958] uppercase tracking-wider mb-3">
                      THE CHALLENGE:
                    </p>
                    <p className="text-sm text-[#071958] leading-relaxed">
                      That endless sweat pooling in hidden skin folds, drawing bacteria into flares and sparking constant drainage—turning small irritations into throbbing, oozing abscesses.
                    </p>
                  </div>

                  <div className="border-b border-black pb-6">
                    <p className="text-sm font-normal text-[#071958] uppercase tracking-wider mb-3">
                      WHY ADDRESSING SWEAT & BACTERIA MATTER:
                    </p>
                    <p className="text-sm text-[#071958] leading-relaxed">
                      In humid weather, sweat pools in armpits, groin, and under breasts, creating a breeding ground for bacteria like Staphylococcus that worsen inflammation, pus, infections, and scarring. Studies show that 45% of 110 surveyed flare patients reported worsening symptoms due to sweating, heat, or exercise.
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-normal text-[#071958] uppercase tracking-wider mb-3">
                      HOW SILICONE PATCHES BREAKS THE CYCLE:
                    </p>
                    <p className="text-sm text-[#071958] leading-relaxed">
                      The patch is specifily desined to pulls drainage from the wound and locks it inside—holding up to 7x its weight without leaking—while absorbing sweat instantly, blocking bacteria, and creating the perfect moist healing environment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Content - Desktop Image */}
              <div className="flex flex-col justify-center">
                <div className="relative">
                  <div className="mb-4">
                    <img 
                      src="/graph-reduction.jpg" 
                      alt="Bacterial Reduction and Healing Speed Comparison Chart showing Silicone Foam Patches vs Traditional Gauze"
                      className="w-full h-[500px] object-contain rounded-2xl bg-white border border-[#7b8cdb]"
                    />
                  </div>
                  
                  {/* Expected Outcomes Box */}
                  <div className="bg-[#081f6e] text-white p-6 rounded-2xl font-light">
                    <p className="leading-relaxed mb-4">
                      Heals up to 59% quicker, cuts bacterial growth by 82%, and reduces severe infections by 87%.
                    </p>
                    <p className="text-sm">
                      <a 
                        href="https://www.dovepress.com/clinical-utility-of-foam-dressings-in-wound-management-a-review-peer-reviewed-fulltext-article-CWCMR" 
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
