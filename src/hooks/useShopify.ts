'use client';

import { useState, useEffect } from 'react';
import { getProducts, getProductByHandle, isShopifyConfigured, type ShopifyProduct, type ShopifyCart } from '@/lib/shopify-client';

// Hook for fetching products
export function useProducts(count: number = 10) {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        
        // Check if Shopify is configured
        if (!isShopifyConfigured) {
          setProducts([]);
          setError('Shopify not configured. Please add environment variables.');
          setLoading(false);
          return;
        }
        
        const productsData = await getProducts(count);
        setProducts(productsData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch products');
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [count]);

  return { products, loading, error };
}

// Hook for fetching a single product
export function useProduct(handle: string | null) {
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!handle) {
      // Reset state when handle is null
      setProduct(null);
      setError(null);
      setLoading(false);
      return;
    }

    async function fetchProduct(productHandle: string) {
      try {
        setLoading(true);
        
        // Check if Shopify is configured
        if (!isShopifyConfigured) {
          setProduct(null);
          setError('Shopify not configured. Please add environment variables.');
          setLoading(false);
          return;
        }
        
        const productData = await getProductByHandle(productHandle);
        setProduct(productData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch product');
      } finally {
        setLoading(false);
      }
    }

    fetchProduct(handle);
  }, [handle]);

  return { product, loading, error };
}

// Hook for managing cart state
export function useCart() {
  const [cart, setCart] = useState<ShopifyCart | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addToCart = async (variantId: string, quantity: number = 1) => {
    // This would typically involve creating a cart if none exists
    // and then adding the item to it
    setLoading(true);
    try {
      // Implementation would go here
      // For now, we'll just redirect to Shopify checkout
      console.log('Adding to cart:', { variantId, quantity });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add to cart');
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => setError(null);

  return {
    cart,
    loading,
    error,
    addToCart,
    clearError
  };
}

// Utility functions for formatting
export function formatPrice(amount: string, currencyCode: string = 'USD'): string {
  const price = parseFloat(amount);
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
  }).format(price);
}

export function getProductImage(product: ShopifyProduct): string | null {
  return product.images.edges[0]?.node.url || null;
}

export function getProductPrice(product: ShopifyProduct): string {
  return formatPrice(
    product.priceRange.minVariantPrice.amount,
    product.priceRange.minVariantPrice.currencyCode
  );
}

export function getFirstAvailableVariant(product: ShopifyProduct) {
  return product.variants.edges.find(edge => edge.node.availableForSale)?.node || null;
}