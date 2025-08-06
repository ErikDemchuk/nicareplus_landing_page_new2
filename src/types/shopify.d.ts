declare module '@shopify/storefront-api-client' {
  export function createStorefrontApiClient(config: {
    domain: string;
    publicAccessToken: string;
  }): {
    request: (query: string, options?: any) => Promise<{
      data: any;
      errors?: any[];
    }>;
  };
} 