const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken =
  process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESSTOKEN;

console.log(storefrontAccessToken);

async function ShopifyData(query) {
  const URL = `https://${domain}/api/2022-01/graphql.json`;

  const options = {
    endpoint: URL,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    const data = await fetch(URL, options).then((response) => {
      return response.json();
    });

    return data;
  } catch (error) {
    throw new Error("Products not fetched");
  }
}

export async function getProductsInCollection(cursor) {
  const query = `
  {
    collectionByHandle(handle: "my-collection") {
      title
      description
      products(first:16  ${cursor ? "after:" + '"' + cursor + '"' : ""}) {
        pageInfo {
          hasNextPage
        }
        edges {
          cursor
          node {
            id
            title
            handle
            priceRange {
              minVariantPrice {
                amount
              }
            }
            images(first: 5) {
              edges {
                node {
                  originalSrc
                  altText
                }
              }
            }
          }
        }
      }
    }
  }`;

  const response = await ShopifyData(query);

  const collection = response.data.collectionByHandle;

  return collection;
}
