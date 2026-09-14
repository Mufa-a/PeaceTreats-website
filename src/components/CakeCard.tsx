import { motion } from 'framer-motion'
import type { Cake } from '@/data/cakes'
import { categoryMeta } from '@/data/cakes'
import { buildWhatsAppLink, cakeInquiryMessage, weddingInquiryMessage } from '@/lib/whatsapp'
import PhotoPlaceholder from './PhotoPlaceholder'
import SealButton from './ui/SealButton'

const ICON_BY_CATEGORY: Record<string, 'tier' | 'cupcake' | 'slice' | 'sparkle'> = {
  wedding: 'tier',
  cupcakes: 'cupcake',
  custom: 'sparkle',
}

export default function CakeCard({ cake, index = 0 }: { cake: Cake; index?: number }) {
  const meta = categoryMeta(cake.category)
  const icon = ICON_BY_CATEGORY[cake.category] ?? 'slice'
  const message = cake.category === 'wedding' ? weddingInquiryMessage(cake.name) : cakeInquiryMessage(cake.name, meta.label)
  const link = buildWhatsAppLink(message)

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group glass flex flex-col overflow-hidden rounded-[1.75rem]"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.06]">
          <PhotoPlaceholder palette={cake.palette} label={cake.name} icon={icon} src={cake.image} className="h-full w-full" />
        </div>

        {cake.tags?.[0] && (
          <span className="absolute left-4 top-4 rounded-full bg-ivory/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-ganache backdrop-blur-sm">
            {cake.tags[0]}
          </span>
        )}

        {/* wax-seal badge, revealed on hover — the site's signature motif */}
        <div className="absolute right-4 top-4 flex h-11 w-11 translate-y-[-6px] items-center justify-center rounded-full opacity-0 shadow-lg transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100"
          style={{ background: 'radial-gradient(circle at 32% 28%, #e6d3a1, #c9a961 55%, #8a6a34 100%)' }}
        >
          <span className="font-signature text-lg leading-none text-ganache">PT</span>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ganache/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl leading-snug text-ganache">{cake.name}</h3>
          {(cake.priceLabel || cake.startingPrice) && (
            <span className="whitespace-nowrap pt-1 text-sm font-semibold text-gold-deep">
              {cake.priceLabel ?? `from KSh ${cake.startingPrice!.toLocaleString()}`}
            </span>
          )}
        </div>
        <p className="text-sm leading-relaxed text-charcoal/65">{cake.description}</p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {cake.flavours.map((f) => (
            <span key={f} className="rounded-full border border-hairline px-2.5 py-1 text-[0.7rem] text-charcoal/60">
              {f}
            </span>
          ))}
        </div>

        <div className="mt-4 pt-1">
          <SealButton href={link} variant="outline">
            Order on WhatsApp
          </SealButton>
        </div>
      </div>
    </motion.article>
  )
}