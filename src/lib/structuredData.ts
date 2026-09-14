import type { Cake } from '@/data/cakes'

const SITE_URL = 'https://peacetreats.netlify.app'

/** Pulls the first number out of a display label like "KSh 1,800 / kg" -> 1800. */
function parsePriceKes(label?: string): number | undefined {
  if (!label) return undefined
  const match = label.replace(/,/g, '').match(/\d+/)
  return match ? Number(match[0]) : undefined
}

function absoluteUrl(path: string): string {
  return path.startsWith('http') ? path : `${SITE_URL}${path}`
}

function buildCakeProduct(cake: Cake, pagePath: string) {
  const price = parsePriceKes(cake.priceLabel)
  return {
    '@type': 'Product',
    name: cake.name,
    description: cake.description,
    image: absoluteUrl(cake.image),
    url: absoluteUrl(pagePath),
    ...(price
      ? {
          offers: {
            '@type': 'Offer',
            price,
            priceCurrency: 'KES',
            availability: 'https://schema.org/InStock',
            url: absoluteUrl(pagePath),
          },
        }
      : {}),
  }
}

/** Builds an ItemList of Products for a page listing multiple cakes (a category page or the gallery). */
export function buildCakeListStructuredData(cakes: Cake[], pagePath: string, listName: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: listName,
    itemListElement: cakes.map((cake, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: buildCakeProduct(cake, pagePath),
    })),
  }
}
