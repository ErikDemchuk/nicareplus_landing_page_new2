'use client';

import { motion } from 'motion/react';
import { useProducts } from '@/hooks/useShopify';
import ShopifyProductCard from './ShopifyProductCard';

interface ShopifyProductShowcaseProps {
  maxProducts?: number;
  title?: string;
  className?: string;
}

export default function ShopifyProductShowcase({ 
  maxProducts = 4, 
  title = "Featured Products",
  className = ""
}: ShopifyProductShowcaseProps) {
  const { products, loading, error } = useProducts(maxProducts);

  if (loading) {
    return (
      <section className={`w-full bg-gray-50 py-16 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            {title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(maxProducts)].map((_, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                <div className="aspect-square bg-gray-200 animate-pulse"></div>
                <div className="p-6 space-y-3">
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                  <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || products.length === 0) {
    return (
      <section className={`w-full bg-gray-50 py-16 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            {title}
          </h2>
          <div className="text-center">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-md mx-auto">
              <div className="text-yellow-600 mb-2">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.863-.833-2.633 0L4.181 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                Shopify Integration Required
              </h3>
              <p className="text-yellow-700 text-sm">
                Configure your Shopify environment variables to display products.
                <br />
                See <code className="bg-yellow-100 px-1 rounded">SHOPIFY_SETUP.md</code> for instructions.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`w-full bg-gray-50 py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our collection of premium products, powered by Shopify
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ShopifyProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {products.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#081f6e] hover:bg-[#0a2284] text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-200"
              onClick={() => window.open('https://your-store.myshopify.com', '_blank')}
            >
              View All Products
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}