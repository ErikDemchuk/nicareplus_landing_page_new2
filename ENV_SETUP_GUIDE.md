# Environment Variables Setup Guide

## Step 1: Create .env.local file

1. **Create a new file** in your project root called `.env.local`
2. **Add the following content** (replace with your actual values):

```env
# Shopify Storefront API Configuration
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store-name.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=48a665668d6696fd8d87f0a4171d55fe
SHOPIFY_STOREFRONT_PRIVATE_ACCESS_TOKEN=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
```

## Step 2: Get Your Shopify Store Name

Replace `your-store-name` with your actual Shopify store name. For example:
- If your store URL is `mystore.myshopify.com`, use `mystore.myshopify.com`
- If your store URL is `demo-store.myshopify.com`, use `demo-store.myshopify.com`

## Step 3: Verify Your Access Tokens

From your screenshot, you have:
- **Public Access Token**: `48a665668d6696fd8d87f0a4171d55fe`
- **Private Access Token**: `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`

These look correct and are already in the template above.

## Step 4: Complete Example

If your store is called "my-supplement-store", your `.env.local` should look like:

```env
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=my-supplement-store.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=48a665668d6696fd8d87f0a4171d55fe
SHOPIFY_STOREFRONT_PRIVATE_ACCESS_TOKEN=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
```

## Step 5: Restart Development Server

After creating `.env.local`, restart your server:
```bash
npm run dev
```

## Testing the Integration

1. **Visit**: http://localhost:3000
2. **Scroll to**: Pricing section
3. **Look for**: No more warning messages about missing configuration
4. **Click**: "Buy Now" button
5. **Expect**: Redirect to your Shopify checkout page

## Troubleshooting

- **File location**: `.env.local` must be in the same folder as `package.json`
- **File name**: Must be exactly `.env.local` (with the dot at the beginning)
- **No spaces**: Around the `=` sign in environment variables
- **Restart required**: Always restart the server after adding environment variables