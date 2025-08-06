# Vercel Deployment Guide

## Prerequisites
- GitHub account
- Vercel account (free)
- Your project code

## Step 1: Push to GitHub

1. **Create GitHub repository**
   - Go to github.com
   - Click "New repository"
   - Name it: `flare-paradox-landing`
   - Make it public or private

2. **Upload your project**
   - Either use GitHub web interface to upload files
   - Or use Git commands (if you have Git installed)

## Step 2: Connect to Vercel

1. **Go to vercel.com**
2. **Sign up/Login** with GitHub
3. **Import Project** → Select your repository
4. **Configure**:
   - Framework: Next.js (auto-detected)
   - Build Command: `npm run build`
   - Output Directory: `.next`

## Step 3: Add Environment Variables

In Vercel dashboard:
1. **Go to Settings** → Environment Variables
2. **Add these variables**:
   ```
   NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN = your-store.myshopify.com
   NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN = your-storefront-access-token
   SHOPIFY_STOREFRONT_PRIVATE_ACCESS_TOKEN = your-private-access-token
   ```

## Step 4: Deploy

1. **Click Deploy**
2. **Wait 2-3 minutes**
3. **Get your live URL**: `https://your-project.vercel.app`

## After Deployment

### ✅ What Works
- Full Shopify integration
- Real checkout functionality
- Quiz and all animations
- Mobile-responsive design
- All sections working

### 🔄 Making Changes
1. **Edit code locally** or on GitHub
2. **Push changes**
3. **Vercel auto-deploys** (2-3 minutes)
4. **Live site updates**

### 📱 Testing
- Test on multiple devices
- Check Shopify checkout flow
- Verify all sections work
- Test quiz functionality