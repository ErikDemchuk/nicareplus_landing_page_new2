# Flare Paradox - Next.js + Shopify + AI Integration

> **Status**: Deployment fixes applied for Next.js 15 compatibility and Framer Motion TypeScript errors

## 🚀 Project Setup

This is a Next.js 15 project with TypeScript, Tailwind CSS, and integrated Shopify headless commerce + AI features.

### Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **E-commerce**: Shopify Storefront API
- **AI**: OpenAI API
- **Database**: Shopify (products, orders)

### Dependencies Installed
```bash
# Core dependencies
@shopify/storefront-api-client  # Shopify GraphQL client
axios                          # HTTP client
openai                         # OpenAI API client
dotenv                         # Environment variables
cors                           # CORS middleware

# Dev dependencies
@types/node                    # Node.js type definitions
```

## 📝 Environment Setup

1. Copy the `.env.local` file and add your API keys:

```env
# Shopify Storefront API
NEXT_PUBLIC_SHOPIFY_DOMAIN=your-shop-domain.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-storefront-access-token

# OpenAI API
OPENAI_API_KEY=your-openai-api-key

# Environment
NODE_ENV=development
```

2. Get your Shopify credentials:
   - Go to your Shopify admin
   - Navigate to Apps > Manage private apps
   - Create a new private app
   - Enable Storefront API access
   - Copy the domain and access token

3. Get your OpenAI API key:
   - Go to https://platform.openai.com/
   - Create an account and get your API key

## 🧪 Testing the Setup

### Test Shopify Connection
```bash
# Start the dev server
npm run dev

# Test the Shopify API
curl http://localhost:3000/api/test-shopify
```

### Test AI Integration
```bash
# Test the AI API
curl -X POST http://localhost:3000/api/test-ai \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello, can you help me find products?"}'
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router
│   ├── api/               # API routes
│   │   ├── test-shopify/  # Shopify connection test
│   │   └── test-ai/       # AI integration test
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── lib/                   # Utility libraries
│   ├── shopify.ts         # Shopify API functions
│   └── ai.ts              # AI utility functions
└── components/            # React components (to be added)
```

## 🔧 Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📚 Key Features Ready to Implement

1. **Product Catalog**: Fetch and display products from Shopify
2. **AI Recommendations**: Get product suggestions based on user preferences
3. **AI Chat**: Interactive customer support
4. **Shopify Checkout**: Seamless purchase flow
5. **Multi-page Support**: Landing pages, product pages, etc.

## 🔗 API Endpoints

- `GET /api/test-shopify` - Test Shopify connection and fetch products
- `POST /api/test-ai` - Test AI chat functionality

## 🎯 Next Steps

1. Set up your environment variables
2. Test the API endpoints
3. Start building your landing pages
4. Implement product catalog UI
5. Add AI-powered features 