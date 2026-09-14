// Post-build step: this is a Vite SPA, so without this step every route
// (except "/") only gets its correct <title>/meta tags after React mounts
// and useDocumentTitle() runs in the browser. Crawlers that don't execute
// JavaScript — WhatsApp, Facebook, X/Twitter, LinkedIn link-preview bots —
// never see that, so a shared link to e.g. /cakes/wedding always showed the
// homepage's title/image.
//
// This script clones the built dist/index.html per route and swaps in the
// right title/description/OG/canonical tags, then writes it to
// dist/<route>/index.html. Netlify serves an existing file at a path before
// falling back to the SPA catch-all in _redirects, so direct loads and link
// previews of these URLs get the correct static tags — while normal
// in-app navigation still works exactly as before via React Router.
//
// NOTE: route metadata here is intentionally kept in sync by hand with
// src/data/cakes.ts and src/data/blog.ts. If you add/rename a category or
// blog post, update the corresponding list below too.

import { readFile, writeFile, mkdir } from 'node:fs/promises'
import path from 'node:path'

const SITE_URL = 'https://peacetreats.netlify.app'
const DIST_DIR = path.resolve(import.meta.dirname, '..', 'dist')
const DEFAULT_IMAGE = `${SITE_URL}/images/cakes/wedding-grand-table.jpg`

const CATEGORIES = [
  { slug: 'birthday', label: 'Birthday Cakes', description: 'Playful, elegant, and endlessly customisable birthday cakes in Nairobi \u2014 order directly on WhatsApp.', image: '/images/cakes/birthday-golden-drops.jpg' },
  { slug: 'wedding', label: 'Wedding Cakes', description: 'Multi-tier wedding cakes finished in hand-piped detail, sugar florals, and gold leaf \u2014 Nairobi delivery and setup.', image: '/images/cakes/wedding-grand-table.jpg' },
  { slug: 'graduation', label: 'Graduation Cakes', description: 'Refined graduation cakes that celebrate the milestone \u2014 personalised designs, Nairobi-wide delivery.', image: '/images/cakes/graduation-golden-cap.jpg' },
  { slug: 'anniversary', label: 'Anniversary Cakes', description: 'Romantic, intimate anniversary cakes designed for the two of you or the whole family \u2014 order on WhatsApp.', image: DEFAULT_IMAGE },
  { slug: 'baby-shower', label: 'Baby Shower Cakes', description: 'Soft, delicate baby shower cakes in Nairobi \u2014 gender-reveal and welcome-baby designs available.', image: DEFAULT_IMAGE },
  { slug: 'cupcakes', label: 'Cupcakes', description: 'Hand-finished cupcake boxes and towers for showers, corporate events, and gifting in Nairobi.', image: DEFAULT_IMAGE },
  { slug: 'custom', label: 'Custom Cakes', description: 'Fully bespoke cake design \u2014 bring your vision, we bring the craft. Nairobi consultations available.', image: '/images/cakes/custom-nurse-theme.jpg' },
]

const BLOG_POSTS = [
  { slug: 'wedding-cake-prices-nairobi', title: 'Wedding Cake Prices in Nairobi: What to Budget For', description: 'A practical breakdown of how Nairobi wedding cakes are priced \u2014 per-kilo rates, tiering, guest counts, and the extras that move your total.', image: '/images/cakes/wedding-grand-table.jpg' },
  { slug: 'how-far-ahead-order-birthday-cake-nairobi', title: 'How Far Ahead Should You Order a Birthday Cake in Nairobi?', description: 'Lead times for birthday cakes vary a lot more than people think. Here is what actually determines how early you should book.', image: '/images/cakes/birthday-golden-drops.jpg' },
  { slug: 'choosing-a-cake-flavour-guide', title: 'Choosing the Right Cake Flavour for Your Celebration', description: 'Vanilla bean, red velvet, champagne, salted caramel \u2014 a quick guide to matching flavour to occasion, season, and guest preferences.', image: '/images/cakes/graduation-ombre.jpg' },
]

const routes = [
  { path: '/about', title: 'About Us', description: 'The story behind PeaceTreats, a Nairobi atelier for bespoke celebration cakes.', image: DEFAULT_IMAGE },
  { path: '/gallery', title: 'Cake Gallery', description: 'Browse our full gallery of birthday, wedding, graduation, anniversary, and custom cakes.', image: DEFAULT_IMAGE },
  { path: '/testimonials', title: 'Testimonials', description: 'Read what our clients say about their custom celebration cakes.', image: DEFAULT_IMAGE },
  { path: '/contact', title: 'Contact Us', description: 'Get in touch to order a bespoke cake \u2014 inquiries open directly in WhatsApp.', image: DEFAULT_IMAGE },
  { path: '/blog', title: 'Cake Guides & Tips', description: 'Practical guides on wedding cake pricing, ordering lead times, and flavour choices from the PeaceTreats atelier in Nairobi.', image: DEFAULT_IMAGE },
  ...CATEGORIES.map((c) => ({ path: `/cakes/${c.slug}`, title: c.label, description: c.description, image: `${SITE_URL}${c.image}` })),
  ...BLOG_POSTS.map((p) => ({ path: `/blog/${p.slug}`, title: p.title, description: p.description, image: `${SITE_URL}${p.image}` })),
]

function setTag(html, regex, replacement) {
  return regex.test(html) ? html.replace(regex, replacement) : html
}

function buildPageHtml(template, route) {
  const fullTitle = `${route.title} | PeaceTreats`
  const canonicalUrl = `${SITE_URL}${route.path}`
  const image = route.image.startsWith('http') ? route.image : `${SITE_URL}${route.image}`

  let html = template
  html = setTag(html, /<title>.*?<\/title>/, `<title>${fullTitle}</title>`)
  html = setTag(html, /<meta name="description" content=".*?" \/>/, `<meta name="description" content="${route.description}" />`)
  html = setTag(html, /<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${canonicalUrl}" />`)
  html = setTag(html, /<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${fullTitle}" />`)
  html = setTag(html, /<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${route.description}" />`)
  html = setTag(html, /<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${canonicalUrl}" />`)
  html = setTag(html, /<meta property="og:image" content=".*?" \/>/, `<meta property="og:image" content="${image}" />`)
  html = setTag(html, /<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${fullTitle}" />`)
  html = setTag(html, /<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${route.description}" />`)
  html = setTag(html, /<meta name="twitter:image" content=".*?" \/>/, `<meta name="twitter:image" content="${image}" />`)
  return html
}

async function run() {
  const template = await readFile(path.join(DIST_DIR, 'index.html'), 'utf-8')

  for (const route of routes) {
    const html = buildPageHtml(template, route)
    const outDir = path.join(DIST_DIR, route.path.replace(/^\//, ''))
    await mkdir(outDir, { recursive: true })
    await writeFile(path.join(outDir, 'index.html'), html, 'utf-8')
  }

  console.log(`Prerendered ${routes.length} routes with per-page meta tags.`)
}

run().catch((err) => {
  console.error('Prerender step failed:', err)
  process.exit(1)
})
