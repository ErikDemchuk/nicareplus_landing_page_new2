'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { createCart, addToCart, isShopifyConfigured } from '@/lib/shopify-client';

interface ShopifyCheckoutButtonProps {
  variantId?: string;
  productTitle?: string;
  price?: string;
  quantity?: number;
  className?: string;
  disabled?: boolean;
}

export default function ShopifyCheckoutButton({
  variantId,
  productTitle = "IM8 Daily Ultimate Essentials",
  price = "$29.99",
  quantity = 1,
  className = "",
  disabled = false
}: ShopifyCheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    // If Shopify is not configured, show a demo message
    if (!isShopifyConfigured) {
      setError('Demo mode: Please configure Shopify environment variables for live checkout');
      setTimeout(() => setError(null), 5000); // Clear error after 5 seconds
      return;
    }

    if (!variantId) {
      // If no variantId provided, redirect to a general checkout or product page
      window.open('https://your-store.myshopify.com/products/im8-daily-ultimate-essentials', '_blank');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Create a new cart
      const cart = await createCart();
      
      if (!cart) {
        throw new Error('Failed to create cart');
      }

      // Add product to cart
      const updatedCart = await addToCart(cart.id, variantId, quantity);
      
      if (!updatedCart) {
        throw new Error('Failed to add product to cart');
      }

      // Redirect to Shopify checkout
      window.open(updatedCart.checkoutUrl, '_blank');
      
    } catch (err) {
      console.error('Checkout error:', err);
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-2">
      <motion.button
        onClick={handleCheckout}
        disabled={disabled || isLoading}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        className={`
          relative w-full bg-[#081f6e] hover:bg-[#0a2284] text-white 
          px-8 py-4 rounded-xl font-semibold text-lg 
          transition-all duration-300 shadow-lg hover:shadow-xl
          disabled:opacity-50 disabled:cursor-not-allowed
          ${className}
        `}
      >
        {isLoading ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Processing...</span>
          </div>
        ) : (
          <div className="flex items-center justify-center space-x-2">
            <span>Buy Now - {price}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m-.4-2L3 3m4 10v6a1 1 0 001 1h8a1 1 0 001-1v-6M7 13l1.5-1.5M17 13l-1.5-1.5" />
            </svg>
          </div>
        )}
      </motion.button>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-600 text-sm text-center p-2 bg-red-50 rounded-lg"
        >
          {error}
        </motion.div>
      )}
    </div>
  );
}