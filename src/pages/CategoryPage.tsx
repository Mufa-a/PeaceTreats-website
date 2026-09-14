import { useParams, Navigate, Link } from 'react-router-dom'
import { CATEGORIES, cakesByCategory, categoryMeta, type CategorySlug } from '@/data/cakes'
import { buildWhatsAppLink, categoryInquiryMessage, customCakeMessage } from '@/lib/whatsapp'
import { useDocumentTitle } from '@/lib/useDocumentTitle'
import { useStructuredData } from '@/lib/useStructuredData'
import { buildCakeListStructuredData } from '@/lib/structuredData'
import PhotoPlaceholder from '@/components/PhotoPlaceholder'
import CakeCard from '@/components/CakeCard'
import SealButton from '@/components/ui/SealButton'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'

const VALID_SLUGS = new Set(CATEGORIES.map((c) => c.slug))
const ICON_BY_CATEGORY: Record<string, 'tier' | 'cupcake' | 'slice' | 'sparkle'> = {
  wedding: 'tier',
  cupcakes: 'cupcake',
  custom: 'sparkle',
}

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>()
  const isValid = !!slug && VALID_SLUGS.has(slug as CategorySlug)
  const meta = isValid ? categoryMeta(slug as CategorySlug) : CATEGORIES[0]
  const cakes = isValid ? cakesByCategory(slug as CategorySlug) : []

  useDocumentTitle(meta.label, meta.description)
  useStructuredData(
    isValid && cakes.length > 0 ? buildCakeListStructuredData(cakes, `/cakes/${meta.slug}`, meta.label) : null
  )

  if (!isValid) {
    return <Navigate to="/gallery" replace />
  }

  const link = buildWhatsAppLink(meta.slug === 'custom' ? customCakeMessage() : categoryInquiryMessage(meta.label))
  const icon = ICON_BY_CATEGORY[meta.slug] ?? 'slice'

  return (
    <div>
      <section className="relative flex min-h-[56vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <PhotoPlaceholder palette="ganache" label={meta.label} icon={icon} src={meta.image} className="h-full w-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ganache via-ganache/40 to-ganache/10" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-36 md:px-10">
          <span className="eyebrow text-gold-light">{meta.tagline}</span>
          <h1 className="mt-4 max-w-2xl text-balance text-5xl text-ivory md:text-6xl">{meta.label}</h1>
          <p className="mt-5 max-w-xl text-balance text-ivory/75">{meta.description}</p>
          <div className="mt-8">
            <SealButton href={link} size="lg">Ask about this collection</SealButton>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        {cakes.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cakes.map((cake, i) => (
              <CakeCard key={cake.id} cake={cake} index={i} />
            ))}
          </div>
        ) : (
          <Reveal className="mx-auto max-w-md text-center">
            <p className="text-charcoal/70">
              This collection is curated per consultation &mdash; message us and we&rsquo;ll design it around you.
            </p>
          </Reveal>
        )}
      </section>

      <section className="border-t border-hairline bg-ivory-soft py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <SectionHeading
            eyebrow="Not seeing exactly what you want?"
            title="Every cake here can be customised"
            description="Flavours, colours, tiers, and toppers are all adjustable &mdash; or start fully from scratch with our custom design service."
            align="center"
            className="mx-auto"
          />
          <Reveal delay={0.15} className="mt-8 flex flex-wrap justify-center gap-4">
            <SealButton href={link} variant="outline">Ask about {meta.label}</SealButton>
            <Link
              to="/cakes/custom"
              className="inline-flex items-center rounded-full border border-ganache/20 px-5 py-2.5 text-sm font-semibold text-ganache transition-colors hover:border-ganache"
            >
              Explore Custom Cakes
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
