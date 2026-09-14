export type CategorySlug =
  | 'birthday'
  | 'wedding'
  | 'graduation'
  | 'anniversary'
  | 'baby-shower'
  | 'cupcakes'
  | 'custom'

export interface CategoryMeta {
  slug: CategorySlug
  label: string
  singular: string
  tagline: string
  description: string
  image: string
}

export const CATEGORIES: CategoryMeta[] = [
  {
    slug: 'birthday',
    label: 'Birthday Cakes',
    singular: 'Birthday Cake',
    tagline: 'Another beautiful year, marked in layers',
    description:
      'Playful, elegant, and endlessly customisable — birthday cakes designed to feel as personal as the year you\u2019re celebrating.',
    image: 'https://images.pexels.com/photos/18131293/pexels-photo-18131293.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'wedding',
    label: 'Wedding Cakes',
    singular: 'Wedding Cake',
    tagline: 'The centrepiece of your forever',
    description:
      'Multi-tier heirlooms finished in hand-piped detail, sugar florals, and gold leaf — built to anchor your reception and your photographs.',
    image: 'https://images.pexels.com/photos/34596959/pexels-photo-34596959.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'graduation',
    label: 'Graduation Cakes',
    singular: 'Graduation Cake',
    tagline: 'A toast to the chapter closed',
    description:
      'Refined, achievement-worthy cakes that celebrate the milestone with as much polish as the moment deserves.',
    image: 'https://images.pexels.com/photos/6054916/pexels-photo-6054916.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'anniversary',
    label: 'Anniversary Cakes',
    singular: 'Anniversary Cake',
    tagline: 'Every year, a new layer of the story',
    description:
      'Romantic, intimate cakes designed for the two of you \u2014 or the whole family celebrating a love that\u2019s lasted.',
    image: 'https://images.pexels.com/photos/33058061/pexels-photo-33058061.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'baby-shower',
    label: 'Baby Shower Cakes',
    singular: 'Baby Shower Cake',
    tagline: 'Sweetness, in anticipation',
    description:
      'Soft palettes and delicate detailing to welcome the newest member of the family in the sweetest way possible.',
    image: 'https://images.pexels.com/photos/433527/pexels-photo-433527.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'cupcakes',
    label: 'Cupcakes',
    singular: 'Cupcake Collection',
    tagline: 'Little luxuries, individually wrapped',
    description:
      'Bite-sized indulgence for showers, corporate events, and gifting \u2014 the same atelier detailing in miniature form.',
    image: 'https://images.pexels.com/photos/306070/pexels-photo-306070.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'custom',
    label: 'Custom Cakes',
    singular: 'Custom Cake',
    tagline: 'Bring us your vision, we\u2019ll bring the craft',
    description:
      'No template, no limits. A bespoke design consultation from concept sketch to final tasting.',
    image: 'https://images.pexels.com/photos/37382216/pexels-photo-37382216.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
]

export interface Cake {
  id: string
  name: string
  category: CategorySlug
  description: string
  flavours: string[]
  startingPrice?: number
  /** Overrides the default "from KSh X" display, e.g. "KSh 1,800 / kg". */
  priceLabel?: string
  tags?: string[]
  featured?: boolean
  palette: 'ganache' | 'rose' | 'gold' | 'sage'
  image: string
}

export const CAKES: Cake[] = [
  // Birthday
  {
    id: 'bd-001',
    name: 'Golden Drops Birthday Cake',
    category: 'birthday',
    description: 'Classic whipped-cream finish with a hand-piped gold drop border, butterflies, and your message on top.',
    flavours: ['Vanilla', 'Chocolate', 'Flavour of choice'],
    priceLabel: 'KSh 1,800 / kg',
    tags: ['Bestseller'],
    featured: true,
    palette: 'ganache',
    image: '/images/cakes/birthday-golden-drops.jpg',
  },
  {
    id: 'bd-002',
    name: 'Sprinkle Celebration Cake',
    category: 'birthday',
    description: 'Golden buttercream loaded with rainbow sprinkles \u2014 a joyful pick for shared or milestone birthdays.',
    flavours: ['Vanilla', 'Funfetti', 'Flavour of choice'],
    priceLabel: 'KSh 1,800 / kg',
    palette: 'gold',
    image: '/images/cakes/birthday-august-babies.jpg',
  },
  {
    id: 'bd-003',
    name: 'Golden Dot Elegance Cake',
    category: 'birthday',
    description: 'A clean ivory buttercream finish scattered with edible gold dots and pearls \u2014 refined and endlessly giftable.',
    flavours: ['Vanilla', 'Chocolate', 'Flavour of choice'],
    priceLabel: 'KSh 2,200 / kg',
    palette: 'gold',
    image: '/images/cakes/birthday-gold-dots.jpg',
  },
  {
    id: 'bd-004',
    name: 'Citrus Bloom Celebration Cake',
    category: 'birthday',
    description: 'Bright lemon-orange sponge with a hand-painted floral wrap and sugar blossoms.',
    flavours: ['Lemon Orange', 'Coconut'],
    priceLabel: 'KSh 2,000 / kg',
    palette: 'sage',
    image: 'https://images.pexels.com/photos/32125167/pexels-photo-32125167.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },

  // Wedding
  {
    id: 'wd-001',
    name: 'Grand Tier Wedding Display',
    category: 'wedding',
    description: 'A full reception dessert table \u2014 a tall gold-and-navy tiered centrepiece surrounded by matching mini cakes.',
    flavours: ['Vanilla Bean', 'Champagne', 'Red Velvet'],
    priceLabel: 'KSh 35,000 for 12kg (scales up)',
    tags: ['Signature'],
    featured: true,
    palette: 'gold',
    image: '/images/cakes/wedding-grand-table.jpg',
  },
  {
    id: 'wd-002',
    name: 'Ivory Lace & Gold Leaf Tier',
    category: 'wedding',
    description: 'Hand-piped lace detailing over ivory fondant, dusted with 24k edible gold leaf.',
    flavours: ['Vanilla Bean', 'Dark Chocolate'],
    priceLabel: 'KSh 3,500 / kg',
    palette: 'gold',
    image: 'https://images.pexels.com/photos/34596956/pexels-photo-34596956.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'wd-003',
    name: 'Garden Romance Semi-Naked Cake',
    category: 'wedding',
    description: 'Rustic semi-naked buttercream, dressed in seasonal fresh florals and greenery.',
    flavours: ['Lemon Elderflower', 'Carrot Spice'],
    priceLabel: 'KSh 2,500 / kg',
    palette: 'sage',
    image: 'https://images.pexels.com/photos/433527/pexels-photo-433527.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'wd-004',
    name: 'Modern Minimalist Tier Cake',
    category: 'wedding',
    description: 'Clean architectural lines, a single statement bloom, and a matte-finish buttercream.',
    flavours: ['Champagne', 'Vanilla Bean'],
    priceLabel: 'KSh 2,800 / kg',
    palette: 'ganache',
    image: 'https://images.pexels.com/photos/6341572/pexels-photo-6341572.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },

  // Graduation
  {
    id: 'gr-001',
    name: 'Golden Cap Graduation Cake',
    category: 'graduation',
    description: 'Rich gold buttercream finished with a stacked-books and graduation-cap topper, personalised for the graduate.',
    flavours: ['Chocolate Fudge', 'Vanilla Bean', 'Flavour of choice'],
    priceLabel: 'KSh 2,000 / kg',
    featured: true,
    palette: 'gold',
    image: '/images/cakes/graduation-golden-cap.jpg',
  },
  {
    id: 'gr-002',
    name: 'Ombre Graduation Cake',
    category: 'graduation',
    description: 'A coral-to-blue ombre buttercream finish with a graduate silhouette and cap topper, personalised with a name.',
    flavours: ['Red Velvet', 'Coffee Walnut', 'Flavour of choice'],
    priceLabel: 'KSh 2,000 / kg',
    palette: 'rose',
    image: '/images/cakes/graduation-ombre.jpg',
  },
  {
    id: 'gr-003',
    name: 'New Beginnings Cake',
    category: 'graduation',
    description: 'A soft sage and ivory palette symbolising fresh starts, finished with sugar laurels.',
    flavours: ['Vanilla Bean', 'Lemon'],
    priceLabel: 'KSh 2,000 / kg',
    palette: 'sage',
    image: 'https://images.pexels.com/photos/37382216/pexels-photo-37382216.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },

  // Anniversary
  {
    id: 'an-001',
    name: 'Golden Years Anniversary Cake',
    category: 'anniversary',
    description: 'Rich chocolate layers wrapped in a gold-drizzled ganache, marking years well spent.',
    flavours: ['Dark Chocolate', 'Salted Caramel'],
    priceLabel: 'KSh 2,200 / kg',
    featured: true,
    palette: 'gold',
    image: 'https://images.pexels.com/photos/33058061/pexels-photo-33058061.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'an-002',
    name: 'Rose Petal Romance Cake',
    category: 'anniversary',
    description: 'Delicate rose buttercream with fresh petal detailing for an intimate celebration.',
    flavours: ['Rose Pistachio', 'Vanilla Bean'],
    priceLabel: 'KSh 2,000 / kg',
    palette: 'rose',
    image: 'https://images.pexels.com/photos/4722002/pexels-photo-4722002.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'an-003',
    name: 'Timeless Two-Tier Cake',
    category: 'anniversary',
    description: 'An heirloom-style two-tier cake finished with your wedding-cake flavour, revisited.',
    flavours: ['Champagne', 'Red Velvet'],
    priceLabel: 'KSh 2,500 / kg',
    palette: 'ganache',
    image: 'https://images.pexels.com/photos/11112067/pexels-photo-11112067.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },

  // Baby Shower
  {
    id: 'bs-001',
    name: 'Little Bundle Cake',
    category: 'baby-shower',
    description: 'Soft blush and ivory tiers with a hand-piped baby silhouette topper.',
    flavours: ['Vanilla Bean', 'Strawberry Cream'],
    priceLabel: 'KSh 2,000 / kg',
    featured: true,
    palette: 'rose',
    image: 'https://images.pexels.com/photos/851204/pexels-photo-851204.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'bs-002',
    name: 'Sage Cloud Shower Cake',
    category: 'baby-shower',
    description: 'A dreamy sage-and-cream ombre cake with a delicate cloud and star motif.',
    flavours: ['Coconut', 'Vanilla Bean'],
    priceLabel: 'KSh 1,800 / kg',
    palette: 'sage',
    image: 'https://images.pexels.com/photos/306070/pexels-photo-306070.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'bs-003',
    name: 'Gender Reveal Surprise Cake',
    category: 'baby-shower',
    description: 'A pristine ivory shell concealing a coloured sponge reveal \u2014 the ultimate showstopper moment.',
    flavours: ['Vanilla Bean', 'Chocolate'],
    priceLabel: 'KSh 2,200 / kg',
    palette: 'gold',
    image: 'https://images.pexels.com/photos/29192489/pexels-photo-29192489.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },

  // Cupcakes
  {
    id: 'cp-001',
    name: 'Signature Dozen Box',
    category: 'cupcakes',
    description: 'Twelve hand-finished cupcakes in an assortment of our most-loved flavours.',
    flavours: ['Vanilla Bean', 'Dark Chocolate', 'Red Velvet', 'Lemon'],
    priceLabel: 'KSh 3,600 / dozen',
    tags: ['Bestseller'],
    featured: true,
    palette: 'rose',
    image: 'https://images.pexels.com/photos/306070/pexels-photo-306070.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'cp-002',
    name: 'Gold Dust Cupcake Tower',
    category: 'cupcakes',
    description: 'A tiered display of gold-dusted cupcakes, perfect as an alternative wedding dessert table.',
    flavours: ['Champagne', 'Salted Caramel'],
    priceLabel: 'KSh 9,200 / tower',
    palette: 'gold',
    image: 'https://images.pexels.com/photos/1546892/pexels-photo-1546892.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'cp-003',
    name: 'Petite Praline Cupcakes',
    category: 'cupcakes',
    description: 'Hazelnut praline sponge, whipped ganache, and a single toasted hazelnut crown.',
    flavours: ['Hazelnut Praline', 'Dark Chocolate'],
    priceLabel: 'KSh 3,900 / dozen',
    palette: 'ganache',
    image: 'https://images.pexels.com/photos/6781799/pexels-photo-6781799.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },

  // Custom
  {
    id: 'cu-001',
    name: 'Personalised Message Cake',
    category: 'custom',
    description: 'A clean palette finish with your own words piped on top \u2014 for sisters, friends, or a note to yourself.',
    flavours: ['Any flavour, any design'],
    priceLabel: 'KSh 2,200 / kg',
    featured: true,
    palette: 'rose',
    image: '/images/cakes/custom-word-for-sis.jpg',
  },
  {
    id: 'cu-002',
    name: 'Career & Milestone Theme Cake',
    category: 'custom',
    description: 'Fully themed around your profession or passion \u2014 shown here in a nurse motif with edible icon toppers.',
    flavours: ['Any flavour, any design'],
    priceLabel: 'KSh 2,200 / kg',
    palette: 'sage',
    image: '/images/cakes/custom-nurse-theme.jpg',
  },
]

export function cakesByCategory(slug: CategorySlug): Cake[] {
  return CAKES.filter((c) => c.category === slug)
}

export function categoryMeta(slug: CategorySlug): CategoryMeta {
  const found = CATEGORIES.find((c) => c.slug === slug)
  if (!found) throw new Error(`Unknown category: ${slug}`)
  return found
}

export function featuredCakes(): Cake[] {
  return CAKES.filter((c) => c.featured)
}
