import { createStorefrontApiClient } from '@shopify/storefront-api-client';

// You'll need to create a .env.local file with these variables:
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;
const storeDomain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;

// Check if Shopify is configured
export const isShopifyConfigured = !!(storefrontAccessToken && storeDomain);

// Create client only if configured, otherwise use null
export const shopifyClient = isShopifyConfigured 
  ? createStorefrontApiClient({
      storeDomain: storeDomain!,
      apiVersion: '2025-07',
      publicAccessToken: storefrontAccessToken!,
    })
  : null;

// GraphQL queries
export const GET_PRODUCTS_QUERY = `
  query getProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          title
          handle
          description
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 1) {
            edges {
              node {
                url
                altText
                width
                height
              }
            }
          }
          variants(first: 5) {
            edges {
              node {
                id
                title
                price {
                  amount
                  currencyCode
                }
                availableForSale
                selectedOptions {
                  name
                  value
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_PRODUCT_BY_HANDLE_QUERY = `
  query getProductByHandle($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      handle
      description
      descriptionHtml
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 10) {
        edges {
          node {
            url
            altText
            width
            height
          }
        }
      }
      variants(first: 50) {
        edges {
          node {
            id
            title
            price {
              amount
              currencyCode
            }
            availableForSale
            selectedOptions {
              name
              value
            }
          }
        }
      }
      options {
        id
        name
        values
      }
    }
  }
`;

export const CREATE_CART_MUTATION = `
  mutation cartCreate($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        id
        checkoutUrl
        totalQuantity
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                  product {
                    title
                    handle
                  }
                }
              }
            }
          }
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export const ADD_TO_CART_MUTATION = `
  mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        id
        checkoutUrl
        totalQuantity
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                  product {
                    title
                    handle
                  }
                }
              }
            }
          }
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`;

// Utility functions
export async function getProducts(count: number = 10) {
  if (!shopifyClient) {
    console.warn('Shopify not configured - returning empty products array');
    return [];
  }
  
  try {
    const response = await shopifyClient.request(GET_PRODUCTS_QUERY, {
      variables: { first: count }
    });
    return response.data?.products?.edges?.map(edge => edge.node) || [];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function getProductByHandle(handle: string) {
  if (!shopifyClient) {
    console.warn('Shopify not configured - returning null for product');
    return null;
  }
  
  try {
    const response = await shopifyClient.request(GET_PRODUCT_BY_HANDLE_QUERY, {
      variables: { handle }
    });
    return response.data?.productByHandle || null;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

export async function createCart() {
  if (!shopifyClient) {
    console.warn('Shopify not configured - cannot create cart');
    return null;
  }
  
  try {
    const response = await shopifyClient.request(CREATE_CART_MUTATION, {
      variables: {
        input: {}
      }
    });
    return response.data?.cartCreate?.cart || null;
  } catch (error) {
    console.error('Error creating cart:', error);
    return null;
  }
}

export async function addToCart(cartId: string, variantId: string, quantity: number = 1) {
  if (!shopifyClient) {
    console.warn('Shopify not configured - cannot add to cart');
    return null;
  }
  
  try {
    const response = await shopifyClient.request(ADD_TO_CART_MUTATION, {
      variables: {
        cartId,
        lines: [
          {
            merchandiseId: variantId,
            quantity
          }
        ]
      }
    });
    return response.data?.cartLinesAdd?.cart || null;
  } catch (error) {
    console.error('Error adding to cart:', error);
    return null;
  }
}

// Types
export interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  images: {
    edges: Array<{
      node: {
        url: string;
        altText: string;
        width: number;
        height: number;
      };
    }>;
  };
  variants: {
    edges: Array<{
      node: {
        id: string;
        title: string;
        price: {
          amount: string;
          currencyCode: string;
        };
        availableForSale: boolean;
        selectedOptions: Array<{
          name: string;
          value: string;
        }>;
      };
    }>;
  };
}

export interface ShopifyCart {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  lines: {
    edges: Array<{
      node: {
        id: string;
        quantity: number;
        merchandise: {
          id: string;
          title: string;
          price: {
            amount: string;
            currencyCode: string;
          };
          product: {
            title: string;
            handle: string;
          };
        };
      };
    }>;
  };
  cost: {
    totalAmount: {
      amount: string;
      currencyCode: string;
    };
    subtotalAmount: {
      amount: string;
      currencyCode: string;
    };
  };
}