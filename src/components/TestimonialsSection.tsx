'use client';

export default function TestimonialsSection() {

  const testimonials = [
    {
      rating: 5,
      quote: "I'm on my second month of IM8, along with my significant other and we both feel more energy, more brain clarity and overall improved feeling of well-being. I talk about this product with all my golf friends.",
      name: "Jennifer Dunn",
      verified: true
    },
    {
      rating: 5,
      quote: "Since I started this 4 month ago I have felt great, energetic, and sleeping better. I have taken a lot of vitamins and am hopeful this will replace most of them. Thank you.",
      name: "Lisa Tradewell",
      verified: true
    },
    {
      rating: 5,
      quote: "I love it. I have a lot more energy. I am recommending it to all my friends. It is so nice to have almost everything I take in one drink.",
      name: "Bernae VeraKruse",
      verified: true
    },
    {
      rating: 5,
      quote: "I absolutely love IM8. I see a difference in my gut health and immune system. I have been spreading the word about this great product. Thank you for reaching out!",
      name: "Erika Friesenhahn",
      verified: true
    },
    {
      rating: 5,
      quote: "This taste is so delicious and I'm excited to feel the difference. I have tried Ag1 but it is terrible! I was upset with it and had to discontinue, so I crossed this one is better.",
      name: "Sarah Fatoux",
      verified: true
    },
    {
      rating: 5,
      quote: "The product has been amazing for my overall health. I feel more energized throughout the day and my digestion has improved significantly.",
      name: "Michael Johnson",
      verified: true
    },
    {
      rating: 5,
      quote: "After 3 months of using IM8, my doctor was amazed at my blood work results. My energy levels are through the roof and I sleep like a baby. Best investment I've made for my health!",
      name: "Patricia Williams",
      verified: true
    },
    {
      rating: 5,
      quote: "I was skeptical at first, but IM8 has completely transformed my morning routine. No more handfuls of pills - just one delicious drink and I'm set for the day.",
      name: "David Chen",
      verified: true
    },
    {
      rating: 5,
      quote: "My wife and I have been using IM8 for 6 months. We both noticed improved mental clarity, better digestion, and we haven't been sick once since starting. Highly recommend!",
      name: "Robert Martinez",
      verified: true
    },
    {
      rating: 5,
      quote: "I'm a busy mom of three and IM8 gives me the energy I need to keep up with my kids. The convenience of having everything in one drink is life-changing.",
      name: "Amanda Thompson",
      verified: true
    },
    {
      rating: 5,
      quote: "Been taking supplements for years but nothing compares to IM8. My inflammation markers have improved dramatically and I feel 10 years younger. Thank you!",
      name: "James Anderson",
      verified: true
    },
    {
      rating: 5,
      quote: "The taste is actually enjoyable, unlike other green drinks I've tried. Within 2 weeks I noticed better focus at work and my afternoon energy crashes disappeared.",
      name: "Maria Rodriguez",
      verified: true
    },
    {
      rating: 5,
      quote: "I travel constantly for work and IM8 has been a game-changer. Easy to pack, great nutrition, and keeps me healthy on the road. Can't imagine traveling without it now.",
      name: "Kevin O'Connor",
      verified: true
    },
    {
      rating: 5,
      quote: "As a nutritionist, I'm very picky about supplements. IM8's ingredient profile is impressive and my clients who use it report amazing results. I recommend it to everyone.",
      name: "Dr. Sarah Mitchell",
      verified: true
    },
    {
      rating: 5,
      quote: "I'm 65 and feel better than I did in my 40s! My joints don't ache anymore and I have energy to play with my grandchildren. IM8 gave me my life back.",
      name: "Dorothy Henderson",
      verified: true
    },
    {
      rating: 5,
      quote: "After years of digestive issues, IM8 has been a miracle. My gut health improved within weeks and I finally feel comfortable eating out again. Thank you so much!",
      name: "Steven Park",
      verified: true
    },
    {
      rating: 5,
      quote: "I'm a professional athlete and nutrition is crucial for my performance. IM8 has become an essential part of my training regimen. Recovery time is noticeably faster.",
      name: "Marcus Johnson",
      verified: true
    },
    {
      rating: 5,
      quote: "My husband convinced me to try IM8 and I'm so glad he did! My mood has stabilized, my skin looks better, and I have consistent energy throughout the day.",
      name: "Rachel Green",
      verified: true
    },
    {
      rating: 5,
      quote: "I work night shifts as a nurse and staying healthy is challenging. IM8 helps me maintain my energy and immune system despite the irregular schedule. Absolutely love it!",
      name: "Linda Foster",
      verified: true
    },
    {
      rating: 5,
      quote: "The customer service is as amazing as the product! When I had questions about ingredients, they responded immediately with detailed information. Five stars all around!",
      name: "Thomas Wright",
      verified: true
    }
  ];



  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-red-500' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="w-full bg-[#F5F1EB] py-12 lg:py-16">
      <div className="w-full">
        
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-5xl xl:text-6xl font-light text-[#8B0000] leading-tight mb-4 lg:mb-6">
            6000+ 5 Star Reviews
          </h2>
          <p className="text-base lg:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            These are actual IM8 verified customers that have seen successful health outcomes with the 
            consistent use of IM8 Daily Ultimate Essentials.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative overflow-hidden mb-8 lg:mb-12">
          <div className="flex animate-infinite-scroll hover:pause-animation">
            {/* First set of testimonials */}
            {testimonials.map((testimonial, index) => (
              <div 
                key={`first-${index}`}
                className="flex-shrink-0 w-72 lg:w-80 bg-white rounded-2xl shadow-lg p-4 lg:p-6 mr-4 lg:mr-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Quote */}
                <p className="text-sm lg:text-base text-gray-700 leading-relaxed mb-4 italic">
                  "{testimonial.quote}"
                </p>

                {/* Customer Info */}
                <div className="border-t border-gray-200 pt-3">
                  <p className="text-sm font-semibold text-gray-900">
                    — {testimonial.name}
                    {testimonial.verified && (
                      <span className="text-gray-600 font-normal">, Verified Customer</span>
                    )}
                  </p>
                </div>
              </div>
            ))}
            
                        {/* Duplicate set for seamless infinite scroll */}
            {testimonials.map((testimonial, index) => (
              <div 
                key={`second-${index}`}
                className="flex-shrink-0 w-72 lg:w-80 bg-white rounded-2xl shadow-lg p-4 lg:p-6 mr-4 lg:mr-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Quote */}
                <p className="text-sm lg:text-base text-gray-700 leading-relaxed mb-4 italic">
                  "{testimonial.quote}"
                </p>

                {/* Customer Info */}
                <div className="border-t border-gray-200 pt-3">
                  <p className="text-sm font-semibold text-gray-900">
                    — {testimonial.name}
                    {testimonial.verified && (
                      <span className="text-gray-600 font-normal">, Verified Customer</span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-base lg:text-lg text-gray-600">
            <span className="font-semibold text-gray-900">6,618 Reviews</span>
            {' | '}
            <span>Average Rating: </span>
            <span className="font-semibold text-gray-900">4.8/5</span>
          </p>
        </div>

      </div>
      
      {/* Custom CSS for infinite scroll animation */}
      <style jsx global>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
                 .animate-infinite-scroll {
           animation: infinite-scroll 120s linear infinite;
           width: fit-content;
         }
         

        
        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
} 