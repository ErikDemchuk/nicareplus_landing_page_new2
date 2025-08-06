'use client';

import ShopifyCheckoutButton from './ShopifyCheckoutButton';
import { useProducts, formatPrice } from '@/hooks/useShopify';

export default function PricingSection() {
  // Fetch products from Shopify (optional - you can also use static data)
  const { products, loading, error } = useProducts(1);
  
  // Get the first product for pricing, or use fallback data
  const product = products[0];
  const productPrice = product ? formatPrice(product.priceRange.minVariantPrice.amount, product.priceRange.minVariantPrice.currencyCode) : '$79';
  const productVariantId = product?.variants.edges[0]?.node.id;
  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          
          {/* Left Content */}
          <div>
            {/* Main Headline */}
                         <h2 className="text-4xl xl:text-5xl font-normal text-[#081f6e] leading-tight mb-7 tracking-wide">
              GET STARTED WITH YOUR SILICONE FOAM JOURNEY FOR LESS THAN <em>$3/DAY</em>!
            </h2>
            
            {/* Pricing Details */}
            <div className="space-y-5 mb-7">
              
              {/* Main Product */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-1">Silicone Foam: Pouch</h3>
                  <p className="text-sm text-gray-600">30 day supply per pouch, ships every 30 days</p>
                </div>
                <div className="text-right">
                  <span className="text-lg font-semibold text-black">$79/mo USD</span>
                  <span className="text-sm text-gray-500 line-through ml-2">$99¹</span>
                </div>
              </div>
              
              {/* Divider */}
              <div className="border-t border-gray-200"></div>
              
              {/* First Time Subscription Includes */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-xs text-gray-600 uppercase tracking-wide mb-3">FIRST TIME SUBSCRIPTION INCLUDES:</p>
                
                {/* Welcome Kit */}
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <h4 className="text-base font-medium text-black">Welcome Kit</h4>
                    <p className="text-sm text-gray-600">Canister, Scoop, and a Shaker</p>
                  </div>
                  <div className="text-right">
                    <span className="text-base font-semibold text-green-600">Free</span>
                    <span className="text-sm text-gray-500 line-through ml-2">$28</span>
                  </div>
                </div>
                
                {/* Travel Packs */}
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-base font-medium text-black">Silicone Foam: Travel Packs (5ct)</h4>
                    <p className="text-sm text-gray-600">5 individual servings</p>
                  </div>
                  <div className="text-right">
                    <span className="text-base font-semibold text-green-600">Free</span>
                    <span className="text-sm text-gray-500 line-through ml-2">$49</span>
                  </div>
                </div>
              </div>
              
              {/* Total */}
              <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-black">Total</h3>
                <span className="text-lg font-semibold text-black">$79/mo USD</span>
              </div>
              
              <p className="text-xs text-gray-500">¹ Value of one-time purchase</p>
              
            </div>
            
            {/* CTA Button */}
                         <button className="w-full bg-[#8B0000] hover:bg-[#A00000] text-white py-4 px-8 rounded-full text-lg font-semibold transition-colors mb-5 flex items-center justify-center">
              Buy Silicone Foam Now
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Guarantees */}
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                90-day money back guarantee
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Update or cancel anytime
              </div>
            </div>
            
          </div>
          
          {/* Right Content - Product Image */}
          <div className="flex justify-center">
            <img
              src="/edit-test-1-new.jpg"
              alt="Silicone Foam Dressing Application"
              className="max-w-md h-auto rounded-2xl shadow-lg"
            />
          </div>
          
        </div>
        
        {/* Mobile Layout */}
        <div className="lg:hidden">
          
          {/* Main Headline */}
                     <h2 className="text-2xl font-normal text-[#081f6e] leading-tight mb-5 text-center tracking-wide">
            GET STARTED WITH YOUR SILICONE FOAM JOURNEY FOR LESS THAN <em>$3/DAY</em>!
          </h2>
          
          {/* Product Image */}
          <div className="flex justify-center mb-7">
            <img
              src="/edit-test-1-new.jpg"
              alt="Silicone Foam Dressing Application"
              className="max-w-sm h-auto rounded-2xl shadow-lg"
            />
          </div>
          
                        {/* Pricing Details */}
              <div className="space-y-5 mb-7">
            
            {/* Main Product */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-black">Silicone Foam: Pouch</h3>
                <div className="text-right">
                  <span className="text-lg font-semibold text-black">$79/mo USD</span>
                  <span className="text-sm text-gray-500 line-through ml-2">$99¹</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">30 day supply per pouch, ships every 30 days</p>
            </div>
            
            {/* First Time Subscription Includes */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-xs text-gray-600 uppercase tracking-wide mb-3">FIRST TIME SUBSCRIPTION INCLUDES:</p>
              
              {/* Welcome Kit */}
              <div className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-base font-medium text-black">Welcome Kit</h4>
                  <div className="text-right">
                    <span className="text-base font-semibold text-green-600">Free</span>
                    <span className="text-sm text-gray-500 line-through ml-2">$28</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Canister, Scoop, and a Shaker</p>
              </div>
              
              {/* Travel Packs */}
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-base font-medium text-black">Silicone Foam: Travel Packs (5ct)</h4>
                  <div className="text-right">
                    <span className="text-base font-semibold text-green-600">Free</span>
                    <span className="text-sm text-gray-500 line-through ml-2">$49</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">5 individual servings</p>
              </div>
            </div>
            
            {/* Total */}
            <div className="flex justify-between items-center pt-4 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-black">Total</h3>
              <span className="text-lg font-semibold text-black">$79/mo USD</span>
            </div>
            
            <p className="text-xs text-gray-500">¹ Value of one-time purchase</p>
            
          </div>
          
          {/* CTA Button - Shopify Integration */}
          <div className="mb-5">
            {error && (
              <div className="mb-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  ⚠️ Using demo mode - Configure Shopify environment variables for live checkout
                </p>
              </div>
            )}
            <ShopifyCheckoutButton
              variantId={productVariantId}
              productTitle="IM8 Daily Ultimate Essentials"
              price={productPrice}
              quantity={1}
              className="w-full bg-[#8B0000] hover:bg-[#A00000] rounded-full"
              disabled={loading}
            />
          </div>
          
          {/* Guarantees */}
          <div className="space-y-3 text-sm text-gray-600 text-center">
            <div className="flex items-center justify-center">
              <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              90-day money back guarantee
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Update or cancel anytime
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
} 