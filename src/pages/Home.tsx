import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CATEGORIES, featuredCakes } from '@/data/cakes'
import { buildWhatsAppLink, generalInquiryMessage } from '@/lib/whatsapp'
import PhotoPlaceholder from '@/components/PhotoPlaceholder'
import CollectionCard from '@/components/CollectionCard'
import CakeCard from '@/components/CakeCard'
import SealButton from '@/components/ui/SealButton'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import { useDocumentTitle } from '@/lib/useDocumentTitle'

export default function Home() {
  useDocumentTitle('Luxury Celebration Cakes in Nairobi', 'Bespoke wedding, birthday, and celebration cakes in Nairobi. Browse our collections and order directly on WhatsApp.')
  const link = buildWhatsAppLink(generalInquiryMessage())

  return (
    <div>
      {/* ---------------- Hero ---------------- */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <PhotoPlaceholder
            palette="ganache"
            label="Signature celebration cake, hero"
            icon="tier"
            src="https://images.pexels.com/photos/6054916/pexels-photo-6054916.jpeg?auto=compress&cs=tinysrgb&w=1600"
            className="h-full w-full"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ganache via-ganache/35 to-ganache/10" />
        <div className="blob blob-pink absolute -right-24 top-16 h-96 w-96 opacity-70" />
        <div className="blob blob-pink absolute -left-32 bottom-0 h-80 w-80 opacity-40" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 md:px-10 md:pb-28">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="eyebrow text-gold-light"
          >
            Nairobi &middot; Bespoke Celebration Cakes
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-3xl text-balance text-5xl leading-[1.05] text-ivory md:text-7xl"
          >
            Cakes worth <span className="font-signature text-gold-light text-6xl md:text-8xl">celebrating</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.36 }}
            className="mt-6 max-w-lg text-balance text-base leading-relaxed text-ivory/75 md:text-lg"
          >
            Hand-finished, atelier-made cakes for weddings, birthdays, and every milestone in between &mdash;
            designed with you, ordered in a single message.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <SealButton href={link} size="lg">Order on WhatsApp</SealButton>
            <Link
              to="/gallery"
              className="text-sm font-semibold text-ivory/85 underline decoration-gold-light/50 decoration-1 underline-offset-4 transition-colors hover:text-ivory"
            >
              Browse the full gallery
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="absolute right-8 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-3 md:flex"
        >
          <span className="eyebrow rotate-90 whitespace-nowrap text-ivory/50">Scroll</span>
          <span className="h-14 w-px bg-ivory/30" />
        </motion.div>
      </section>

      {/* ---------------- Trust strip ---------------- */}
      <section className="border-b border-hairline bg-ivory-soft">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-8 text-center md:grid-cols-4 md:px-10">
          {[
            ['500+', 'Cakes delivered'],
            ['4.9/5', 'Average client rating'],
            ['72 hrs', 'Minimum order notice'],
            ['100%', 'Made to order'],
          ].map(([stat, label]) => (
            <div key={label}>
              <p className="text-2xl text-ganache md:text-3xl">{stat}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-charcoal/50">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Collections ---------------- */}
      <section className="relative mx-auto max-w-7xl overflow-hidden px-6 py-24 md:px-10 md:py-32">
        <div className="blob blob-pink absolute -top-24 right-0 h-72 w-72 opacity-60" />
        <SectionHeading
          eyebrow="Our Collections"
          title="A cake for every kind of celebration"
          description="Seven curated collections, each with its own palette and personality &mdash; built to be customised to your event."
          align="center"
          className="mx-auto mb-14 max-w-2xl"
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {CATEGORIES.map((c, i) => (
            <div key={c.slug} className={i === 0 ? 'col-span-2 md:col-span-1 lg:col-span-2 lg:row-span-2' : ''}>
              <CollectionCard category={c} index={i} />
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Signature cakes ---------------- */}
      <section className="bg-ivory-soft py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Client Favourites"
              title="Our most-requested cakes"
              description="A shortlist of the designs our clients come back for &mdash; each one fully customisable to your flavours and colours."
              className="max-w-xl"
            />
            <Reveal delay={0.15}>
              <Link
                to="/gallery"
                className="hidden text-sm font-semibold text-ganache underline decoration-gold-deep/40 underline-offset-4 hover:text-gold-deep md:inline-block"
              >
                View full gallery &rarr;
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredCakes().map((cake, i) => (
              <CakeCard key={cake.id} cake={cake} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Process ---------------- */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <SectionHeading
          eyebrow="How It Works"
          title="From inquiry to celebration"
          align="center"
          className="mx-auto mb-16 max-w-2xl"
        />
        <div className="grid gap-10 md:grid-cols-3">
          {[
            {
              title: 'Browse & choose',
              body: 'Explore our collections and pick a design that speaks to your celebration, or start from scratch.',
            },
            {
              title: 'Message us on WhatsApp',
              body: 'One tap sends us a pre-filled inquiry with the exact cake, so we can respond with pricing right away.',
            },
            {
              title: 'We bake, you celebrate',
              body: 'We confirm the details, bake to order, and deliver &mdash; ready for its moment on the table.',
            },
          ].map((step, i) => (
            <Reveal key={step.title} delay={i * 0.12} className="flex flex-col gap-4 border-t border-hairline pt-6">
              <span className="font-signature text-3xl text-gold-deep">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="text-xl text-ganache">{step.title}</h3>
              <p className="text-sm leading-relaxed text-charcoal/65">{step.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- CTA banner ---------------- */}
      <section className="relative overflow-hidden bg-ganache">
        <div className="absolute inset-0 opacity-40">
          <PhotoPlaceholder
            palette="gold"
            label=""
            icon="sparkle"
            src="https://images.pexels.com/photos/33058061/pexels-photo-33058061.jpeg?auto=compress&cs=tinysrgb&w=1600"
            className="h-full w-full"
          />
        </div>
        <div className="absolute inset-0 bg-ganache/70" />
        <div className="blob blob-pink absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 opacity-50" />
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
          <Reveal>
            <span className="eyebrow text-gold-light">Ready when you are</span>
            <h2 className="mt-4 text-balance text-4xl text-ivory md:text-5xl">
              Let&rsquo;s design your <span className="font-signature text-gold-light text-5xl md:text-6xl">next</span> celebration cake
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-balance text-ivory/70">
              Tell us the date, the vibe, and the flavours &mdash; we&rsquo;ll take it from there.
            </p>
            <div className="mt-9 flex justify-center">
              <SealButton href={link} variant="dark" size="lg">Start on WhatsApp</SealButton>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
