declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SHOPIFY_DOMAIN: string;
      NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN: string;
      OPENAI_API_KEY: string;
      NODE_ENV: 'development' | 'production' | 'test';
    }
  }
}

export {}; 