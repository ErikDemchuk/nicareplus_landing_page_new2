# Shopify Headless Integration Setup

This guide will help you integrate your Next.js landing page with Shopify's Storefront API.

## Prerequisites

1. You have a Shopify store
2. You have installed the Headless channel in your Shopify admin
3. You have generated Storefront API access tokens

## Step 1: Create Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Shopify Storefront API Configuration
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store-name.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-storefront-access-token
SHOPIFY_STOREFRONT_PRIVATE_ACCESS_TOKEN=your-private-access-token
```

**Important:** Replace `your-store-name` with your actual Shopify store name.

## Step 2: Configure Your Shopify Store

1. Log into your Shopify admin
2. Go to **Apps and sales channels**
3. Find and open the **Headless** channel
4. Create a new storefront or use an existing one
5. Copy your access tokens from the credentials shown in your screenshot

## Step 3: Set Up Products

1. Create your products in Shopify admin
2. Make sure products are published to the Headless sales channel
3. Note the product handles (URLs) for any specific products you want to feature

## Step 4: Test the Integration

1. Start your development server: `npm run dev`
2. Navigate to the pricing section
3. The checkout button should now connect to your Shopify store
4. Test the checkout flow

## Key Features Implemented

### ✅ Shopify Storefront API Client
- Configured GraphQL client for Shopify API
- Support for products, collections, and cart operations
- Error handling and retry logic

### ✅ Product Fetching
- `useProducts()` hook for fetching multiple products
- `useProduct()` hook for fetching single products by handle
- Automatic price formatting and currency support

### ✅ Shopify Checkout Integration
- `ShopifyCheckoutButton` component for seamless checkout
- Automatic cart creation and product addition
- Redirect to Shopify's secure checkout

### ✅ Real-time Product Data
- Pricing section now pulls real product data from Shopify
- Automatic price updates when products change
- Fallback to demo data if Shopify is unavailable

## File Structure

```
src/
├── lib/
│   └── shopify-client.ts          # Shopify API client and queries
├── hooks/
│   └── useShopify.ts             # React hooks for Shopify data
└── components/
    ├── ShopifyCheckoutButton.tsx  # Checkout button component
    └── PricingSection.tsx        # Updated with Shopify integration
```

## Troubleshooting

### Environment Variables Not Working
- Make sure `.env.local` is in your project root
- Restart your development server after adding environment variables
- Check that variable names match exactly (including prefixes)

### API Errors
- Verify your access tokens are correct
- Ensure your store domain is in the format: `store-name.myshopify.com`
- Check that the Headless channel is properly configured

### Products Not Showing
- Verify products are published to the Headless sales channel
- Check product availability and inventory
- Review GraphQL query permissions in your Shopify admin

## Next Steps

1. **Customize Product Display**: Modify the product queries to fetch additional fields like images, descriptions, variants, etc.

2. **Add Cart Functionality**: Implement a persistent cart that users can add multiple items to before checkout.

3. **Implement Customer Accounts**: Add customer login/registration using Shopify's Customer Account API.

4. **Add Inventory Management**: Display real-time inventory levels and handle out-of-stock scenarios.

5. **Optimize Performance**: Implement caching strategies for product data and consider using Shopify's CDN for images.

## Support

For issues with this integration:
1. Check the [Shopify Storefront API documentation](https://shopify.dev/docs/api/storefront)
2. Review the [Getting Started guide](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/getting-started)
3. Test your API queries in Shopify's GraphiQL explorer

Your landing page is now connected to Shopify! 🎉