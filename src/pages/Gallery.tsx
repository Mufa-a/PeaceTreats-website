import { useMemo, useState } from 'react'
import { CATEGORIES, CAKES, type CategorySlug } from '@/data/cakes'
import PhotoPlaceholder from '@/components/PhotoPlaceholder'
import CakeCard from '@/components/CakeCard'
import SectionHeading from '@/components/ui/SectionHeading'
import { useDocumentTitle } from '@/lib/useDocumentTitle'
import { useStructuredData } from '@/lib/useStructuredData'
import { buildCakeListStructuredData } from '@/lib/structuredData'

type Filter = 'all' | CategorySlug

export default function Gallery() {
  useDocumentTitle('Cake Gallery', 'Browse our full gallery of birthday, wedding, graduation, anniversary, and custom cakes.')
  useStructuredData(buildCakeListStructuredData(CAKES, '/gallery', 'PeaceTreats Cake Gallery'))
  const [filter, setFilter] = useState<Filter>('all')

  const cakes = useMemo(() => {
    if (filter === 'all') return CAKES
    return CAKES.filter((c) => c.category === filter)
  }, [filter])

  return (
    <div>
      <section className="relative flex min-h-[46vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <PhotoPlaceholder
            palette="gold"
            label="The full gallery"
            icon="sparkle"
            src="https://images.pexels.com/photos/34596959/pexels-photo-34596959.jpeg?auto=compress&cs=tinysrgb&w=1600"
            className="h-full w-full"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ganache via-ganache/45 to-ganache/10" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 pt-32 md:px-10">
          <span className="eyebrow text-gold-light">The Full Collection</span>
          <h1 className="mt-4 max-w-2xl text-balance text-5xl text-ivory md:text-6xl">Cake Gallery</h1>
          <p className="mt-5 max-w-xl text-balance text-ivory/75">
            Every design we offer, in one place. Filter by occasion, or browse everything at once.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <SectionHeading eyebrow="Filter" title="Browse by occasion" className="mb-8" />

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              filter === 'all' ? 'bg-ganache text-ivory' : 'bg-ivory-soft text-charcoal/70 hover:bg-hairline'
            }`}
          >
            All Cakes
          </button>
          {CATEGORIES.map((c) => (
            <button
              key={c.slug}
              onClick={() => setFilter(c.slug)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filter === c.slug ? 'bg-ganache text-ivory' : 'bg-ivory-soft text-charcoal/70 hover:bg-hairline'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cakes.map((cake, i) => (
            <CakeCard key={cake.id} cake={cake} index={i} />
          ))}
        </div>
      </section>
    </div>
  )
}
