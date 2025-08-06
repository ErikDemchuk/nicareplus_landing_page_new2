'use client';

export default function FatigueSection() {
  return (
    <section className="w-full py-5 lg:py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clinical Trial 3 */}
        <div className="bg-[#d1daf9] rounded-3xl p-8 lg:p-12 mb-3">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Content - ~50% width */}
            <div>
              <p className="text-sm font-normal text-[#071958] uppercase tracking-wider mb-6">
                CLINICAL TRIAL 3
              </p>
              
              <h3 className="text-3xl lg:text-4xl font-normal text-[#071958] mb-8 leading-tight">
                Managing Fatigue in Flares
              </h3>

              <div className="space-y-8">
                <div className="border-b border-black pb-6">
                  <p className="text-sm font-normal text-[#071958] uppercase tracking-wider mb-3">
                    THE CHALLENGE:
                  </p>
                  <p className="text-sm text-[#071958] leading-relaxed">
                    Overwhelmed by flares? —when treatments fail and flares keep coming back, the constant battle leaves you exhausted, with daily pain, leaks, and failed fixes turning every day into a draining struggle that zaps your energy for work, sleep, and life.
                  </p>
                </div>

                <div className="border-b border-black pb-6">
                  <p className="text-sm font-normal text-[#071958] uppercase tracking-wider mb-3">
                    WHY FATIGUE MATTERS:
                    </p>
                  <p className="text-sm text-[#071958] leading-relaxed">
                    When you have draining flares, fatigue hits harder—studies show 40% of people with flares report clinical fatigue, along with more pain, depression (up to 29%), and sleep issues, matching other chronic conditions. It becomes a mental battle, not just physical.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-normal text-[#071958] uppercase tracking-wider mb-3">
                    HOW EASIER CARE BREAKS THE CYCLE:
                  </p>
                  <p className="text-sm text-[#071958] leading-relaxed">
                    What matters is reclaiming your time—the goal is to address friction and drainage, which if not addressed causes reopening of the flare and prolongs healing, plus fatigue from constant managing and experiencing pain from flares. The failure ramps stress, locking longer flares and deeper tiredness, stealing joy. Easier care cuts leaks and tasks, lowers stress, boosts immunity.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content - ~50% width with image and red overlay */}
            <div className="flex flex-col justify-center">
              <div className="relative">
                {/* Placeholder for image - you can add image here later */}
                <div className="bg-gray-200 rounded-2xl h-80 mb-4"></div>
              
                {/* Red overlay box */}
                <div className="bg-[#991B1B] text-white p-6 rounded-2xl">
                  <p className="text-sm font-bold uppercase tracking-wider mb-4">
                    EXPECTED OUTCOMES:
                  </p>
                  <p className="leading-relaxed mb-4">
                    Less drainage hassle, reduced fatigue—28% fewer draining issues, better sleep, more energy. Means fewer exhausting days, real recovery.
                  </p>
                  <p className="text-sm">
                    Please click{' '}
                    <button className="underline font-semibold hover:text-gray-200 transition-colors">
                      HERE
                    </button>
                    {' '}for full details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 