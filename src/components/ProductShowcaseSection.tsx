'use client';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function ProductShowcaseSection() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [showAllCards, setShowAllCards] = useState(false);
  
  // Quiz-related state
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [personalizedIngredients, setPersonalizedIngredients] = useState<string[]>([]);
  const textRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0); // 0 = text, 1 = quiz
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const lastScrollY = useRef(0);
  const rafId = useRef<number | null>(null);
  const [isQuizReady, setIsQuizReady] = useState(false);

  // Quiz questions
  const questions = [
    {
      id: 1,
      question: "How sensitive is your skin?",
      options: [
        { text: "Very sensitive - reacts to most products", value: 'very-sensitive' },
        { text: "Moderately sensitive - occasional reactions", value: 'moderate' },
        { text: "Not very sensitive - rarely reacts", value: 'low-sensitive' }
      ]
    },
    {
      id: 2, 
      question: "What's your primary skin concern?",
      options: [
        { text: "Redness and irritation", value: 'redness' },
        { text: "Dryness and flaking", value: 'dryness' },
        { text: "Inflammation and swelling", value: 'inflammation' }
      ]
    },
    {
      id: 3,
      question: "How often do you experience skin flare-ups?",
      options: [
        { text: "Daily - constant issues", value: 'daily' },
        { text: "Weekly - regular episodes", value: 'weekly' },
        { text: "Monthly - occasional problems", value: 'monthly' }
      ]
    }
  ];

  // Quiz ingredient data
  const quizIngredients = {
    'chamomile-extract': {
      name: 'Chamomile Extract',
      image: '/Chamomile Extract.jpg',
      benefits: ['Calms sensitive skin', 'Reduces redness', 'Anti-bacterial']
    },
    'calendula-extract': {
      name: 'Calendula Extract', 
      image: '/Calendula Extract.jpg',
      benefits: ['Gentle healing', 'Anti-inflammatory', 'Moisturizing']
    },
    'arnica-extract': {
      name: 'Arnica Extract',
      image: '/Arnica Extract.jpg',
      benefits: ['Reduces inflammation', 'Soothes irritated skin', 'Promotes healing']
    },
    'lavender-oil': {
      name: 'Lavender Oil',
      image: '/Lavender Oil.jpg',
      benefits: ['Relaxing properties', 'Antiseptic', 'Skin repair']
    }
  };

  const ingredients = [
    {
      title: "Aloe Vera",
      description: "Soothes irritated skin and aids natural healing",
      expandedText: "Aloe vera is a cooling gel from succulent leaves, hydrating and calming redness or dryness. If flare-ups cause irritation or burns, this gentle plant extract is for you—it promotes natural healing for sensitive skin without greasiness.",
      color: "bg-green-200"
    },
    {
      title: "Tea Tree Oil",
      description: "Natural antimicrobial for blemishes and infections",
      expandedText: "Tea tree oil is an essential oil from tea tree leaves, fighting bacteria and fungi in spots or pimples. If breakouts or minor infections are your concern, this antibacterial option is for you—reduces swelling gently for oily skin.",
      color: "bg-green-300"
    },
    {
      title: "Calendula Extract",
      description: "Gentle anti-inflammatory for wound recovery",
      expandedText: "Calendula extract from marigold petals is a herbal healer rich in flavonoids. If cuts, scrapes, or eczema need faster repair, this soothing ingredient is for you—eases swelling mildly for sensitive, irritated skin.",
      color: "bg-orange-200",
      image: "/Calendula Extract.jpg"
    },
    {
      title: "Chamomile Extract",
      description: "Calms redness and eases skin discomfort",
      expandedText: "Chamomile extract from flowers offers anti-inflammatory relief. If itchiness or rashes from allergies bother you, this calming herb is for you—soothes discomfort naturally, suitable for all skin types seeking gentle care.",
      color: "bg-yellow-200",
      image: "/Chamomile Extract.jpg"
    },
    {
      title: "Manuka Honey",
      description: "Antibacterial boost for healing and moisture",
      expandedText: "Manuka honey from New Zealand bushes contains unique enzymes for germ-fighting. If dry wounds or patches need hydration, this nourishing honey is for you—locks in moisture and speeds healing effectively.",
      color: "bg-amber-200"
    },
    {
      title: "Beeswax",
      description: "Creates a protective barrier for dry skin",
      expandedText: "Beeswax is a natural wax from honeybees, forming a moisture-trapping shield. If chapped or rough areas from dryness are your issue, this barrier ingredient is for you—protects and heals in harsh conditions.",
      color: "bg-yellow-300"
    },
    {
      title: "Rosehip Oil",
      description: "Vitamin-rich for scar reduction and glow",
      expandedText: "Rosehip oil from seeds contains vitamins A and C for skin regeneration. If dark spots or scarring are your concerns, this nutrient-rich oil is for you—brightens and smooths skin texture for a radiant complexion.",
      color: "bg-pink-200"
    },
    {
      title: "Shea Butter",
      description: "Deep hydration for cracked and dry skin",
      expandedText: "Shea butter from African tree nuts delivers intensive moisture for very dry skin. If cracking or extreme dryness plagues you, this rich butter is for you—penetrates deeply, providing long-lasting softness.",
      color: "bg-yellow-100"
    },
    {
      title: "Eucalyptus Oil",
      description: "Cooling relief for irritated and inflamed skin",
      expandedText: "Eucalyptus oil from leaves provides cooling, antimicrobial benefits. If inflammation or minor pain from skin conditions bothers you, this refreshing oil is for you—soothes and numbs discomfort naturally.",
      color: "bg-green-100"
    },
    {
      title: "Coconut Oil",
      description: "Moisturizing antimicrobial for daily protection",
      expandedText: "Coconut oil from kernels offers natural antimicrobial and moisturizing properties. If you need daily protection and hydration, this versatile oil is for you—gentle enough for sensitive skin, effective for barrier repair.",
      color: "bg-white"
    },
    {
      title: "Lavender Oil",
      description: "Calming aromatherapy for stress-related skin issues",
      expandedText: "Lavender oil from flowers combines skin-soothing with stress-reducing aromatherapy. If stress worsens your skin condition, this calming oil is for you—relaxes both mind and skin for holistic healing.",
      color: "bg-purple-200",
      image: "/Lavender Oil.jpg"
    },
    {
      title: "Vitamin E Oil",
      description: "Antioxidant shield for skin repair",
      expandedText: "Vitamin E oil from plants like wheat germ is an antioxidant protector. If scars or slow-healing wounds are your problem, this shielding nutrient is for you—repairs cells for stronger, healthier skin.",
      color: "bg-orange-300"
    },
    {
      title: "Green Tea Extract",
      description: "Reduces inflammation with powerful antioxidants",
      expandedText: "Green tea extract from leaves is polyphenol-rich for oxidative defense. If puffiness or redness from environment hits you, this refreshing extract is for you—calms and evens tone for oily skin.",
      color: "bg-green-300"
    },
    {
      title: "Apple Cider Vinegar Extract",
      description: "Balances pH and clears minor impurities",
      expandedText: "Apple cider vinegar extract from fermented apples restores acidity. If oily buildup or itchiness imbalances your skin, this clarifying extract is for you—tones gently without stripping, for combination types.",
      color: "bg-red-100"
    },
    {
      title: "Jojoba Oil",
      description: "Mimics skin's oils for deep hydration",
      expandedText: "Jojoba oil is a wax from seeds, matching skin's sebum. If dehydration or flakiness worries you, this moisturizing oil is for you—hydrates deeply without clogging, ideal for dry or acne-prone.",
      color: "bg-yellow-100"
    },
    {
      title: "Hyaluronic Acid",
      description: "Draws in moisture for plump, healed skin",
      expandedText: "Hyaluronic acid is a natural sugar molecule in skin, holding vast water. If dryness or wounds need plumping, this hydrator is for you—repairs and dewifies for all types craving moisture.",
      color: "bg-blue-200"
    },
    {
      title: "Arnica Extract",
      description: "Eases bruising and swelling from injuries",
      expandedText: "Arnica extract from mountain flowers reduces inflammation and bruising. If bumps or injuries cause swelling and discoloration, this healing extract is for you—speeds recovery for tender, damaged areas.",
      color: "bg-indigo-200",
      image: "/Arnica Extract.jpg"
    }
  ];

  const handleCardClick = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const handleViewAllClick = () => {
    setShowAllCards(!showAllCards);
    setExpandedCard(null); // Close any expanded card when toggling
  };

  // Quiz logic functions - memoized for performance
  const getPersonalizedIngredients = useCallback((answers: Record<number, string>) => {
    const selectedIngredients: string[] = [];
    
    // Always include chamomile for sensitive skin
    if (answers[1] === 'very-sensitive' || answers[1] === 'moderate') {
      selectedIngredients.push('chamomile-extract');
    }
    
    // Add arnica for inflammation
    if (answers[2] === 'inflammation' || answers[3] === 'daily') {
      selectedIngredients.push('arnica-extract');
    }
    
    // Add calendula for dryness and general healing
    if (answers[2] === 'dryness' || answers[2] === 'redness') {
      selectedIngredients.push('calendula-extract');
    }
    
    // Add lavender for frequent issues or stress-related skin problems
    if (answers[3] === 'daily' || answers[3] === 'weekly') {
      selectedIngredients.push('lavender-oil');
    }
    
    // Ensure we always have 4 ingredients
    const allIngredientKeys = Object.keys(quizIngredients);
    while (selectedIngredients.length < 4) {
      const remaining = allIngredientKeys.filter(key => !selectedIngredients.includes(key));
      if (remaining.length > 0) {
        selectedIngredients.push(remaining[0]);
      }
    }
    
    return selectedIngredients.slice(0, 4);
  }, []);

  const handleAnswer = useCallback((questionId: number, value: string) => {
    // Only allow interactions when quiz is ready and sufficiently visible
    if (!isQuizReady || scrollProgress < 0.4) return;
    
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(prev => prev + 1);
      }, 200);
    } else {
      // Quiz complete - show results
      setTimeout(() => {
        const recommendedIngredients = getPersonalizedIngredients(newAnswers);
        setPersonalizedIngredients(recommendedIngredients);
        setShowResults(true);
      }, 200);
    }
  }, [isQuizReady, scrollProgress, answers, currentQuestion, questions.length, getPersonalizedIngredients]);

  const resetQuiz = useCallback(() => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setPersonalizedIngredients([]);
    // Scroll back to text to reset
    if (textRef.current) {
      (textRef.current as HTMLElement).scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
    }
  }, []);

  // Optimized scroll handler with throttling
  const updateScrollProgress = useCallback(() => {
    if (!textRef.current) return;

    const currentScrollY = window.scrollY;
    const direction = currentScrollY > lastScrollY.current ? 'down' : 'up';
    setScrollDirection(direction);
    lastScrollY.current = currentScrollY;

    // Calculate scroll progress based on text element position
    const textElement = textRef.current as HTMLElement;
    const rect = textElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Calculate progress: 0 when text is fully visible, 1 when text is fully scrolled out
    const elementTop = rect.top;
    const elementHeight = rect.height;
    
    // Start transition when text starts to go out of view from top
    const startTransition = windowHeight * 0.7; // Start when text is 70% up the screen
    const endTransition = -elementHeight * 0.3; // End when text is 30% scrolled out
    
    let progress = 0;
    if (elementTop <= startTransition) {
      progress = Math.min(1, (startTransition - elementTop) / (startTransition - endTransition));
    }
    
    // Smooth the progress with easing
    const easedProgress = progress * progress * (3.0 - 2.0 * progress); // smoothstep
    setScrollProgress(easedProgress);
    
    // Set quiz ready state when it becomes visible
    if (easedProgress > 0.3 && !isQuizReady) {
      setIsQuizReady(true);
    } else if (easedProgress <= 0.1 && isQuizReady) {
      setIsQuizReady(false);
    }
    
    // Reset quiz when scrolling back up
    if (progress < 0.1 && (currentQuestion > 0 || showResults)) {
      setCurrentQuestion(0);
      setAnswers({});
      setShowResults(false);
      setPersonalizedIngredients([]);
    }
  }, [currentQuestion, showResults, isQuizReady]);

  // Throttled scroll handler using RAF
  const handleScroll = useCallback(() => {
    if (rafId.current) return; // Throttle using RAF
    
    rafId.current = requestAnimationFrame(() => {
      updateScrollProgress();
      rafId.current = null;
    });
  }, [updateScrollProgress]);

  // Dynamic scroll-based progress tracking
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [handleScroll]);

  const displayedIngredients = useMemo(() => 
    showAllCards ? ingredients : ingredients.slice(0, 8), 
    [showAllCards]
  );

  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl xl:text-6xl font-normal text-[#081f6e] leading-tight mb-8 lg:mb-12 tracking-wide">
            REPLACE YOUR DAILY SUPPLEMENTS<br />
            WITH <em className="italic">ONE DRINK</em>
          </h2>
          
          {/* Product Image */}
          <div className="flex justify-center mb-8 lg:mb-12">
            <img 
              src="/section_7_image_test.png" 
              alt="IM8 Product" 
              className="max-w-sm lg:max-w-md xl:max-w-lg h-auto"
            />
          </div>
          
          {/* Subtitle */}
          <h3 className="text-xl lg:text-2xl font-normal text-[#081f6e] mb-6 lg:mb-8 tracking-wide">
            SAVE MONEY, TIME AND SIMPLIFY YOUR ROUTINE WITH <em>IM8</em>
          </h3>
          
          {/* Description / Quiz Section - Dynamic */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {scrollProgress < 0.3 ? (
                /* Text */
                <motion.p 
                  key="text"
                  ref={textRef}
                  initial={{ opacity: 1 }}
                  animate={{ 
                    opacity: Math.max(0, 1 - scrollProgress * 3),
                    y: -scrollProgress * 15
                  }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="text-base lg:text-lg text-gray-700 leading-relaxed"
                >
            The average health-conscious consumer spends hundreds of dollars monthly on multiple supplements, each 
            addressing only one aspect of health. IM8 Daily Ultimate Essentials consolidates 16 common supplements into 
            one comprehensive formula, saving you money, time, and the hassle of managing multiple products.
                </motion.p>
              ) : (
                /* Quiz */
                <motion.div
                  key="quiz"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: Math.min(1, (scrollProgress - 0.2) * 2.5),
                    y: Math.max(0, (1 - scrollProgress) * 15)
                  }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="w-full"
                >
                  {!showResults ? (
                    /* Quiz Interface - Apple-style */
                    <div className="bg-white backdrop-blur-xl rounded-[20px] shadow-2xl border border-gray-200 p-8 lg:p-12 overflow-hidden" style={{
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                    }}>
                      
                      {/* Progress Bar - Apple style */}
                      <div className="mb-10">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-sm font-medium text-gray-500 tracking-wide">
                            QUESTION {currentQuestion + 1} OF {questions.length}
                          </span>
                          <span className="text-sm font-semibold text-gray-900 bg-gray-100 px-3 py-1 rounded-full">
                            {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200/60 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                            initial={{ width: 0 }}
                            animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                          />
                        </div>
                      </div>

                      {/* Question */}
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentQuestion}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                          <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-10 text-center tracking-tight leading-tight">
                            {questions[currentQuestion].question}
                          </h3>

                          {/* Answer Options - Apple style */}
                          <div className="space-y-3">
                            {!isQuizReady && (
                              <div className="text-center py-4">
                                <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600">
                                  <div className="w-4 h-4 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin mr-3"></div>
                                  Loading quiz...
                                </div>
                              </div>
                            )}
                            {questions[currentQuestion].options.map((option, index) => (
                              <motion.button
                                key={option.value}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05, duration: 0.2 }}
                                onClick={() => handleAnswer(questions[currentQuestion].id, option.value)}
                                className={`w-full p-5 text-left rounded-[16px] transition-all duration-200 group backdrop-blur-sm ${
                                  isQuizReady && scrollProgress > 0.4 
                                    ? 'bg-gray-50 hover:bg-gray-100 active:bg-gray-200 border border-gray-200 hover:border-gray-300 cursor-pointer' 
                                    : 'bg-gray-300/50 border border-gray-200/30 cursor-not-allowed opacity-60'
                                }`}
                                whileHover={isQuizReady && scrollProgress > 0.4 ? { scale: 1.005 } : undefined}
                                whileTap={isQuizReady && scrollProgress > 0.4 ? { scale: 0.995 } : undefined}
                                style={{
                                  backdropFilter: 'blur(10px)',
                                  WebkitBackdropFilter: 'blur(10px)'
                                }}
                              >
                                <span className="text-lg font-medium text-gray-900 group-hover:text-gray-900">
                                  {option.text}
                                </span>
                              </motion.button>
                            ))}
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  ) : (
                    /* Results Interface - Apple style */
                    <motion.div
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="bg-white backdrop-blur-xl rounded-[20px] shadow-2xl border border-gray-200 p-8 lg:p-12 overflow-hidden"
                      style={{
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      <div className="text-center mb-12">
                        <motion.div
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.1, duration: 0.3 }}
                          className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6"
                        >
                          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </motion.div>
                        <h3 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 tracking-tight">
                          Your Personalized Formula
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                          Based on your answers, here are the 4 key ingredients recommended for your needs
                        </p>
                      </div>

                      {/* Ingredient Cards - Apple style */}
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                        {personalizedIngredients.map((ingredientKey, index) => {
                          const ingredient = quizIngredients[ingredientKey as keyof typeof quizIngredients];
                          return (
                            <motion.div
                              key={ingredientKey}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.08, duration: 0.3 }}
                              className="bg-gray-50/70 backdrop-blur-sm rounded-[16px] p-6 text-center border border-gray-200/60 hover:bg-gray-100/70 transition-all duration-200"
                              whileHover={{ scale: 1.02 }}
                            >
                              <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden bg-white shadow-sm border border-gray-100">
                                <img 
                                  src={ingredient.image} 
                                  alt={ingredient.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <h4 className="text-base font-semibold text-gray-900 mb-3 tracking-tight">
                                {ingredient.name}
                              </h4>
                              <ul className="text-sm text-gray-600 space-y-1 leading-relaxed">
                                {ingredient.benefits.map((benefit, idx) => (
                                  <li key={idx}>• {benefit}</li>
                                ))}
                              </ul>
                            </motion.div>
                          );
                        })}
                      </div>

                      {/* CTA Section - Apple style */}
                      <div className="text-center border-t border-gray-200/60 pt-8">
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                          Ready to simplify your supplement routine with these personalized ingredients?
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-8 py-4 rounded-[12px] font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                          >
                            Get Your Custom Formula
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={resetQuiz}
                            className="bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-900 px-8 py-4 rounded-[12px] font-semibold text-lg transition-all duration-200"
                          >
                            Retake Quiz
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        
        {/* Ingredients Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {displayedIngredients.map((ingredient, index) => (
            <div 
              key={index} 
              className="relative h-80 cursor-pointer perspective-1000"
              onClick={() => handleCardClick(index)}
            >
              <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                expandedCard === index ? 'rotate-y-180' : ''
              }`}>
                                 {/* Front of card */}
                 <div className="absolute inset-0 bg-white rounded-2xl shadow-lg overflow-hidden backface-hidden">
                   <div className={`h-32 lg:h-40 relative overflow-hidden ${!ingredient.image ? ingredient.color : ''}`}>
                     {ingredient.image ? (
                       <img 
                         src={ingredient.image} 
                         alt={ingredient.title}
                         className="w-full h-full object-cover"
                         onError={(e) => {
                           e.currentTarget.style.display = 'none';
                           const parent = e.currentTarget.parentElement;
                           if (parent) {
                             parent.classList.add(ingredient.color);
                           }
                         }}
                       />
                     ) : null}
                     <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                       <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                       </svg>
                     </div>
                   </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{ingredient.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{ingredient.description}</p>
                  </div>
                </div>
                
                {/* Back of card */}
                <div className="absolute inset-0 bg-white rounded-2xl shadow-lg overflow-hidden backface-hidden rotate-y-180">
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">{ingredient.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{ingredient.expandedText}</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <button 
                        className="text-[#081f6e] font-medium text-sm hover:underline"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCardClick(index);
                        }}
                      >
                        ← Back to overview
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile Cards */}
        <div className="md:hidden space-y-4 mb-12">
            {displayedIngredients.map((ingredient, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                     <div className={`h-32 relative overflow-hidden ${!ingredient.image ? ingredient.color : ''}`}>
                       {ingredient.image ? (
                         <img 
                           src={ingredient.image} 
                           alt={ingredient.title}
                           className="w-full h-full object-cover"
                                                        onError={(e) => {
                               e.currentTarget.style.display = 'none';
                               const parent = e.currentTarget.parentElement;
                               if (parent) {
                                 parent.classList.add(ingredient.color);
                               }
                             }}
                         />
                       ) : null}
                     </div>
                    <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{ingredient.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{ingredient.description}</p>
                
                {expandedCard === index && (
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 text-sm leading-relaxed">{ingredient.expandedText}</p>
                  </div>
                )}
                
                <button 
                  onClick={() => handleCardClick(index)}
                  className="text-[#081f6e] font-medium text-sm hover:underline mt-2"
                >
                  {expandedCard === index ? 'Show less' : 'Learn more'}
                </button>
              </div>
              </div>
            ))}
        </div>
        
        {/* View All Toggle */}
        <div className="text-center">
          <button 
            onClick={handleViewAllClick}
            className="bg-[#081f6e] hover:bg-[#0a2284] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-300"
          >
            {showAllCards ? 'Show Less Ingredients' : 'View All 17 Ingredients'}
          </button>
        </div>
        
      </div>
      
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
} 