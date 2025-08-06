'use client';

import { motion } from 'motion/react';

export default function MediaFeedbacksSection() {
  const reviews = [
    {
      id: 1,
      name: "Marissa Reed",
      avatar: "/Dr-Amy-Kassouf-icon.jpg", // Using available image as placeholder
      time: "3m",
      text: "My son has been using this for 3 days and we can already see a huge difference. This stuff really works!",
      likes: 0,
      replies: 0
    },
    {
      id: 2,
      name: "Amanda Lane",
      avatar: "/Dr-Amy-Kassouf-icon.jpg",
      time: "5m", 
      text: "This is legit! My 15-year-old son has been using this for a little over a month and it's been fantastic! He tried Curology before this, and his blemishes wasn't going away at all. This has been SO much better and I love that it's clean.",
      likes: 0,
      replies: 0
    },
    {
      id: 3,
      name: "Dana Rummery",
      avatar: "/Dr-Amy-Kassouf-icon.jpg",
      time: "10m",
      text: "I rarely write comments for products, but my 13 year old daughter tried this and her breakouts are gone! She's really thrilled, uses it constantly, and it lasts a long time. It's been months since I ordered it for her and she still uses it every day.",
      likes: 0,
      replies: 0
    },
    {
      id: 4,
      name: "Kirsten King",
      avatar: "/Dr-Amy-Kassouf-icon.jpg",
      time: "5m",
      text: "I was really skeptical but decided it was worth a try and I can't believe how well it works! Both of my teens were almost clear in a week and blackheads or small bumps are clearing up too! Great product - definitely recommend",
      likes: 0,
      replies: 0
    },
    {
      id: 5,
      name: "Erinn Merritt",
      avatar: "/Dr-Amy-Kassouf-icon.jpg",
      time: "23m",
      text: "I have 15 year old triplet boys. I started Noella organics on one that has the most severe blemishes. Within a week, his skin is so much clearer! I've now ordered it for his brothers as well. Thank you!",
      likes: 0,
      replies: 0
    },
    {
      id: 6,
      name: "Nicole Wallis",
      avatar: "/Dr-Amy-Kassouf-icon.jpg", 
      time: "29m",
      text: "Ok this is a legit review. I got this for my 13 year old daughter. We used it daily as directed and I absolutely noticed a difference in 3 days! We are in 7 days now and her forehead is almost completely clear. We are also using it on her shoulders and back which is quite severe and am really noticing a difference and if it keeps going in the same direction will be completely clear in another week!! My 16 year old has started using for now just on her forehead for a few bumps etc. I am so happy for my daughter as she is very self conscious and this is a natural product which make me very happy! I am being very honest here This is definitely a win for us!",
      likes: 0,
      replies: 0
    },
    {
      id: 7,
      name: "Gerlinde Seebacher",
      avatar: "/Dr-Amy-Kassouf-icon.jpg",
      time: "25m", 
      text: "My son started using this product just a few days ago and there is major improvement visible!!! We are so happy! Thank you!",
      likes: 0,
      replies: 0
    },
    {
      id: 8,
      name: "Joanna Clarke",
      avatar: "/Dr-Amy-Kassouf-icon.jpg",
      time: "32m",
      text: "Amazing stuff within 2 days reduced redness I was sceptical but this really helps !",
      likes: 0,
      replies: 0
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 md:hidden" style={{ backgroundColor: '#F4C2A1' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight tracking-wide">
            Latest Facebook Reviews
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {reviews.slice(0, 4).map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              {/* Profile Header */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 mr-3">
                  <img 
                    src={review.avatar}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">{review.name}</h4>
                  <p className="text-gray-500 text-xs">{review.time}</p>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {review.text}
              </p>

              {/* Actions */}
              <div className="flex items-center space-x-6 text-gray-500 text-xs">
                <button className="flex items-center hover:text-blue-600 transition-colors">
                  <span>Like</span>
                </button>
                <button className="flex items-center hover:text-blue-600 transition-colors">
                  <span>Reply</span>
                </button>
                <span>{review.time}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Product Showcase - Large Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="relative max-w-2xl w-full">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="relative">
                {/* Product Image Placeholder */}
                <div className="bg-gradient-to-br from-yellow-200 to-orange-200 rounded-xl p-8 text-center">
                  <div className="space-y-6">
                    {/* Top Product */}
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Acne Killer Night Balm
                        </span>
                        <div className="w-16 h-16 bg-yellow-400 rounded-full"></div>
                      </div>
                    </div>

                    {/* Center Text */}
                    <div className="py-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Crazy difference after 2 uses
                      </h3>
                      <p className="text-sm text-gray-600">- Mia</p>
                    </div>

                    {/* Bottom Product */}
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Acne Day Balm Glow & Moisturize
                        </span>
                        <div className="w-16 h-16 bg-orange-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Reviews */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {reviews.slice(4).map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              {/* Profile Header */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 mr-3">
                  <img 
                    src={review.avatar}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">{review.name}</h4>
                  <p className="text-gray-500 text-xs">{review.time}</p>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {review.text}
              </p>

              {/* Actions */}
              <div className="flex items-center space-x-6 text-gray-500 text-xs">
                <button className="flex items-center hover:text-blue-600 transition-colors">
                  <span>Like</span>
                </button>
                <button className="flex items-center hover:text-blue-600 transition-colors">
                  <span>Reply</span>
                </button>
                <span>{review.time}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}