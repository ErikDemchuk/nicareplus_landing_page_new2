import { NextResponse } from 'next/server';
import { fetchProducts } from '@/lib/shopify';

export async function GET() {
  try {
    // Check environment configuration
    if (!process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN || !process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
      return NextResponse.json({
        success: false,
        error: 'Shopify environment variables not configured',
        environment: {
          shopifyDomain: process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN || 'Not configured',
          shopifyToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN ? 'Configured' : 'Not configured'
        }
      }, { status: 500 });
    }

    // Fetch products using utility function
    const products = await fetchProducts(5);

    return NextResponse.json({
      success: true,
      message: 'Successfully fetched products from Shopify',
      products,
      count: products.length
    });
  } catch (error) {
    console.error('Shopify API Error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to connect to Shopify',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 