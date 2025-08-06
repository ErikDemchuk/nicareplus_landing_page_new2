import { NextResponse } from 'next/server';
import { createCheckout } from '@/lib/shopify';

export async function POST(request: Request) {
  try {
    const { variantId, quantity = 1 } = await request.json();

    if (!variantId) {
      return NextResponse.json(
        { error: 'Variant ID is required' },
        { status: 400 }
      );
    }

    const checkoutUrl = await createCheckout(variantId, quantity);

    return NextResponse.json({
      success: true,
      checkoutUrl,
    });
  } catch (error) {
    console.error('Checkout API Error:', error);
    return NextResponse.json(
      {
        error: 'Failed to create checkout',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
} 