import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { CategoryMeta } from '@/data/cakes'
import PhotoPlaceholder from './PhotoPlaceholder'

const PALETTE_CYCLE = ['ganache', 'rose', 'gold', 'sage'] as const
const ICON_CYCLE = ['tier', 'slice', 'cupcake', 'sparkle'] as const

export default function CollectionCard({ category, index }: { category: CategoryMeta; index: number }) {
  const palette = PALETTE_CYCLE[index % PALETTE_CYCLE.length]
  const icon = ICON_CYCLE[index % ICON_CYCLE.length]

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/cakes/${category.slug}`} className="group block">
        <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem]">
          <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.08]">
            <PhotoPlaceholder palette={palette} label={category.label} icon={icon} src={category.image} className="h-full w-full" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-ganache/85 via-pink-deep/15 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-5">
            <span className="eyebrow text-gold-light">{category.tagline}</span>
            <h3 className="text-xl text-ivory">{category.label}</h3>
            <span className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-ivory/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              View collection
              <svg viewBox="0 0 16 16" className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
