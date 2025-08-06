import { createStorefrontApiClient } from '@shopify/storefront-api-client';

// Initialize Shopify client
const client = createStorefrontApiClient({
  domain: process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN!,
  publicAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
});

// GraphQL query for products
const PRODUCTS_QUERY = `
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
          }
          images(first: 1) {
            edges {
              node {
                url
                altText
              }
            }
          }
        }
      }
    }
  }
`;

// Fetch products function
export async function fetchProducts(limit: number = 5) {
  try {
    const { data, errors } = await client.request(PRODUCTS_QUERY, {
      variables: { first: limit },
    });

    if (errors) {
      console.error('GraphQL errors:', errors);
      throw new Error('Failed to fetch products');
    }

    return data.products.edges.map((edge: any) => ({
      id: edge.node.id,
      title: edge.node.title,
      handle: edge.node.handle,
      description: edge.node.description,
      price: edge.node.priceRange.minVariantPrice.amount,
      currency: edge.node.priceRange.minVariantPrice.currencyCode,
      image: edge.node.images.edges[0]?.node.url || null,
    }));
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

// Fetch single product by handle
const SINGLE_PRODUCT_QUERY = `
  query getProduct($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      handle
      description
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 5) {
        edges {
          node {
            url
            altText
          }
        }
      }
      variants(first: 1) {
        edges {
          node {
            id
            title
            availableForSale
          }
        }
      }
    }
  }
`;

export async function fetchSingleProduct(handle: string) {
  try {
    const { data, errors } = await client.request(SINGLE_PRODUCT_QUERY, {
      variables: { handle },
    });

    if (errors) {
      console.error('GraphQL errors:', errors);
      throw new Error('Failed to fetch product');
    }

    if (!data.productByHandle) {
      throw new Error('Product not found');
    }

    const product = data.productByHandle;
    return {
      id: product.id,
      title: product.title,
      handle: product.handle,
      description: product.description,
      price: product.priceRange.minVariantPrice.amount,
      currency: product.priceRange.minVariantPrice.currencyCode,
      images: product.images.edges.map((edge: any) => edge.node.url),
      variantId: product.variants.edges[0]?.node.id || null,
      available: product.variants.edges[0]?.node.availableForSale || false,
    };
  } catch (error) {
    console.error('Error fetching single product:', error);
    throw error;
  }
}

// Create checkout URL
const CREATE_CHECKOUT_MUTATION = `
  mutation checkoutCreate($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
      checkout {
        id
        webUrl
      }
      checkoutUserErrors {
        field
        message
      }
    }
  }
`;

export async function createCheckout(variantId: string, quantity: number = 1) {
  try {
    const { data, errors } = await client.request(CREATE_CHECKOUT_MUTATION, {
      variables: {
        input: {
          lineItems: [
            {
              variantId,
              quantity,
            },
          ],
        },
      },
    });

    if (errors || data.checkoutCreate.checkoutUserErrors.length > 0) {
      console.error('Checkout errors:', errors || data.checkoutCreate.checkoutUserErrors);
      throw new Error('Failed to create checkout');
    }

    return data.checkoutCreate.checkout.webUrl;
  } catch (error) {
    console.error('Error creating checkout:', error);
    throw error;
  }
} 