# Update Instructions

## Configuration Steps

1. **Update Product Handle**
   Edit `src/app/page.tsx` and replace `'your-product-handle'` with your actual Shopify product handle:
   ```typescript
   const product = await fetchSingleProduct('your-actual-product-handle')
   ```

2. **Environment Variables**
   Ensure your `.env.local` has these values:
   ```
   NEXT_PUBLIC_SHOPIFY_DOMAIN=your-shop.myshopify.com
   NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-token
   OPENAI_API_KEY=sk-your-key
   ```

3. **Run the App**
   ```bash
   npm run dev
   ```

## Features Implemented

- ✅ Single product landing page
- ✅ AI question form (sends to `/api/test-ai` with type: recommendation)
- ✅ Checkout button (creates Shopify checkout)
- ✅ Simple Tailwind layout
- ✅ No navigation/multi-pages
- ✅ TypeScript fixes with proper types

## API Endpoints

- `GET /api/test-shopify` - Test Shopify connection
- `POST /api/test-ai` - AI responses (accepts `type: 'recommendation'`)
- `POST /api/create-checkout` - Create Shopify checkout URL

## Utility Functions

- `fetchSingleProduct(handle)` - Fetch product by handle
- `createCheckout(variantId, quantity)` - Create checkout URL
- `generateProductRecommendation(prompt)` - AI recommendations

## Remaining TypeScript Issues

The `@shopify/storefront-api-client` module types should be resolved when you install the actual package and configure your environment properly. The `process` warnings will resolve once TypeScript recognizes the node types from tsconfig.json. 