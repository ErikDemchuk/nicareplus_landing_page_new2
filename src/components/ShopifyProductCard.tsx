'use client';

import { motion } from 'motion/react';
import { formatPrice, getProductImage, getFirstAvailableVariant } from '@/hooks/useShopify';
import { ShopifyProduct } from '@/lib/shopify-client';
import ShopifyCheckoutButton from './ShopifyCheckoutButton';

interface ShopifyProductCardProps {
  product: ShopifyProduct;
  className?: string;
}

export default function ShopifyProductCard({ product, className = "" }: ShopifyProductCardProps) {
  const productImage = getProductImage(product);
  const price = formatPrice(product.priceRange.minVariantPrice.amount, product.priceRange.minVariantPrice.currencyCode);
  const variant = getFirstAvailableVariant(product);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 ${className}`}
    >
      {/* Product Image */}
      {productImage && (
        <div className="aspect-square bg-gray-50 overflow-hidden">
          <img
            src={productImage}
            alt={product.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Product Info */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
            {product.title}
          </h3>
          
          {product.description && (
            <p className="text-gray-600 text-sm line-clamp-3 mb-4">
              {product.description}
            </p>
          )}

          <div className="flex items-center justify-between mb-4">
            <div className="text-2xl font-bold text-[#081f6e]">
              {price}
            </div>
            
            {variant?.availableForSale ? (
              <span className="text-green-600 text-sm font-medium bg-green-50 px-2 py-1 rounded-full">
                In Stock
              </span>
            ) : (
              <span className="text-red-600 text-sm font-medium bg-red-50 px-2 py-1 rounded-full">
                Out of Stock
              </span>
            )}
          </div>
        </div>

        {/* Variants Info */}
        {product.variants.edges.length > 1 && (
          <div className="mb-4">
            <p className="text-sm text-gray-500 mb-2">
              {product.variants.edges.length} variants available
            </p>
            <div className="flex flex-wrap gap-1">
              {product.variants.edges.slice(0, 3).map((variantEdge, index) => (
                <span
                  key={variantEdge.node.id}
                  className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                >
                  {variantEdge.node.title}
                </span>
              ))}
              {product.variants.edges.length > 3 && (
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                  +{product.variants.edges.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Checkout Button */}
        <ShopifyCheckoutButton
          variantId={variant?.id}
          productTitle={product.title}
          price={price}
          disabled={!variant?.availableForSale}
          className="w-full"
        />
      </div>
    </motion.div>
  );
}