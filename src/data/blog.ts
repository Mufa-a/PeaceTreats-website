export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  coverImage: string
  content: ContentBlock[]
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'wedding-cake-prices-nairobi',
    title: 'Wedding Cake Prices in Nairobi: What to Budget For',
    excerpt:
      'A practical breakdown of how Nairobi wedding cakes are priced \u2014 per-kilo rates, tiering, guest counts, and the extras that move your total.',
    date: '2026-08-12',
    readTime: '6 min read',
    category: 'Wedding',
    coverImage: '/images/cakes/wedding-grand-table.jpg',
    content: [
      {
        type: 'paragraph',
        text: 'One of the first questions every couple asks us is simple: how much does a wedding cake actually cost in Nairobi? The honest answer is that it depends on weight, tiering, and finish \u2014 but the ranges are more predictable than most people expect once you understand how bakers here price their work.',
      },
      {
        type: 'heading',
        text: 'Pricing is almost always per kilogram',
        },
      {
        type: 'paragraph',
        text: 'Most Nairobi cake studios, ourselves included, quote by the kilo rather than a flat "wedding cake price." A simple buttercream finish typically starts lower per kilo than a hand-piped lace or gold-leaf design, because the labour time is very different. As a rough guide, expect entry-level tiered buttercream work from around KSh 2,500 per kilo, with detailed gold-leaf or sugar-floral tiers running higher.',
      },
      {
        type: 'heading',
        text: 'How much cake do you actually need?',
      },
      {
        type: 'paragraph',
        text: 'A common rule of thumb is roughly 100\u2013150 grams of cake per guest for a dessert-table slice, though this varies if the cake is the only dessert versus one of several. A 100-guest reception usually lands somewhere between 10 and 15kg of cake once you account for display tiers that are cut versus purely decorative dummy tiers.',
      },
      {
        type: 'heading',
        text: 'What moves the price beyond weight',
      },
      {
        type: 'list',
        items: [
          'Fresh flowers vs sugar flowers \u2014 fresh florals need a florist and food-safe prep, which adds cost',
          '24k edible gold leaf detailing',
          'Number of tiers and whether all are real cake or include display-only dummy tiers',
          'Delivery and on-site setup across Nairobi versus studio pickup',
          'Flavour complexity \u2014 red velvet, champagne, and filled layers cost more than a single vanilla sponge',
        ],
      },
      {
        type: 'heading',
        text: 'When to lock in your baker',
      },
      {
        type: 'paragraph',
        text: 'Wedding season weekends fill up fast in Nairobi, particularly December and August. We generally recommend confirming your cake booking at least 4\u20136 weeks ahead for a standard design, and 2\u20133 months ahead if you want a fully custom multi-tier centrepiece with fresh florals, so there is time for a tasting and a design consultation before the date.',
      },
      {
        type: 'paragraph',
        text: 'If you have a guest count and a rough design in mind, send us both on WhatsApp and we can give you an accurate quote rather than a generic estimate.',
      },
    ],
  },
  {
    slug: 'how-far-ahead-order-birthday-cake-nairobi',
    title: 'How Far Ahead Should You Order a Birthday Cake in Nairobi?',
    excerpt:
      'Lead times for birthday cakes vary a lot more than people think. Here\u2019s what actually determines how early you should book.',
    date: '2026-08-28',
    readTime: '4 min read',
    category: 'Birthday',
    coverImage: '/images/cakes/birthday-golden-drops.jpg',
    content: [
      {
        type: 'paragraph',
        text: 'Because every cake here is baked to order rather than pulled from a display case, timing matters more than people expect. The good news is that most birthday cakes don\u2019t need weeks of notice \u2014 but a few factors change that quickly.',
      },
      {
        type: 'heading',
        text: 'The baseline: 72 hours',
      },
      {
        type: 'paragraph',
        text: 'For a standard design \u2014 buttercream finish, a topper, your message piped on \u2014 72 hours\u2019 notice is usually enough. This gives time to source ingredients, bake, chill, and finish the decoration properly rather than rushing it.',
      },
      {
        type: 'heading',
        text: 'What pushes the lead time out',
      },
      {
        type: 'list',
        items: [
          'Fully custom or themed designs (career themes, licensed-style characters, hand-painted work)',
          'Multi-tier cakes or anything over roughly 5kg',
          'Fresh flower detailing, which needs sourcing ahead of time',
          'Weekend dates in December, or around graduation season in Nairobi, when studios book out fastest',
          'Gender-reveal or surprise-element cakes that need extra prep and testing',
        ],
      },
      {
        type: 'heading',
        text: 'A simple rule of thumb',
      },
      {
        type: 'paragraph',
        text: 'If your idea is a simple, elegant cake with a clear flavour and colour palette, 3 days is usually fine. If you\u2019re picturing something highly custom, multi-tier, or timed for a peak weekend, aim for 1\u20132 weeks so there\u2019s room for a design conversation and, if you want one, a flavour tasting first.',
      },
      {
        type: 'paragraph',
        text: 'When in doubt, message us your date and rough vision on WhatsApp \u2014 we\u2019ll tell you straight away whether it\u2019s workable and what the realistic timeline looks like.',
      },
    ],
  },
  {
    slug: 'choosing-a-cake-flavour-guide',
    title: 'Choosing the Right Cake Flavour for Your Celebration',
    excerpt:
      'Vanilla bean, red velvet, champagne, salted caramel \u2014 a quick guide to matching flavour to occasion, season, and guest preferences.',
    date: '2026-09-05',
    readTime: '5 min read',
    category: 'Guides',
    coverImage: '/images/cakes/graduation-ombre.jpg',
    content: [
      {
        type: 'paragraph',
        text: 'Flavour is the one decision people agonise over most \u2014 understandably, since it\u2019s what guests actually remember. Here\u2019s how we usually guide clients through it.',
      },
      {
        type: 'heading',
        text: 'Start with the crowd, not just the guest of honour',
      },
      {
        type: 'paragraph',
        text: 'For larger gatherings like weddings and milestone birthdays, a crowd-safe base like vanilla bean or chocolate fudge tends to please the widest range of palates. You can still make it feel special through filling and finish \u2014 salted caramel, a fruit compote layer, or a espresso-soaked sponge \u2014 without alienating guests who prefer something familiar.',
      },
      {
        type: 'heading',
        text: 'Matching flavour to occasion',
      },
      {
        type: 'list',
        items: [
          'Weddings: champagne, vanilla bean, or red velvet read as classic and photograph well when cut',
          'Birthdays: funfetti, chocolate fudge, or a citrus sponge tend to feel celebratory and fun',
          'Graduations and milestones: coffee walnut or dark chocolate suit a slightly more grown-up palette',
          'Baby showers: coconut or a soft vanilla-strawberry pairing tend to suit the lighter, pastel mood',
        ],
      },
      {
        type: 'heading',
        text: 'Consider the season and the venue',
      },
      {
        type: 'paragraph',
        text: 'Richer flavours like dark chocolate and salted caramel travel and hold up well for outdoor Nairobi events where the cake might sit out for a while. Lighter sponges with fresh fruit or delicate fillings are best for indoor, climate-controlled settings where they won\u2019t need to hold their structure as long in the heat.',
      },
      {
        type: 'paragraph',
        text: 'If you genuinely can\u2019t decide, ask about a tasting box before you commit \u2014 it\u2019s the fastest way to settle a flavour argument between two people with very different taste buds.',
      },
    ],
  },
]

export function blogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug)
}
