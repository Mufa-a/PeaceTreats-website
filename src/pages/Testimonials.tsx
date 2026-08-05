import PhotoPlaceholder from '@/components/PhotoPlaceholder'
import SectionHeading from '@/components/ui/SectionHeading'
import SealButton from '@/components/ui/SealButton'
import Reveal from '@/components/ui/Reveal'
import { buildWhatsAppLink, generalInquiryMessage } from '@/lib/whatsapp'
import { useDocumentTitle } from '@/lib/useDocumentTitle'

const TESTIMONIALS = [
  {
    quote: 'Our wedding cake was the single most photographed thing at the reception. Guests are still asking where we got it.',
    name: 'Amina & David',
    context: 'Wedding, three-tier lace design',
  },
  {
    quote: 'I sent one WhatsApp message with a vague idea and they turned it into exactly what I was picturing \u2014 down to the flowers.',
    name: 'Wanjiru K.',
    context: 'Baby shower cake',
  },
  {
    quote: 'Professional from the first reply to delivery. The cake looked even better in person than the photos we\u2019d seen.',
    name: 'James M.',
    context: 'Corporate graduation event',
  },
  {
    quote: 'The cupcake tower was the easiest planning decision of the entire event. Ordered on WhatsApp, confirmed within the hour.',
    name: 'Sarah O.',
    context: 'Anniversary celebration',
  },
]

export default function Testimonials() {
  useDocumentTitle('Testimonials', 'Read what our clients say about their custom celebration cakes.')
  const link = buildWhatsAppLink(generalInquiryMessage())

  return (
    <div>
      <section className="relative flex min-h-[46vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <PhotoPlaceholder
            palette="sage"
            label="Happy clients"
            icon="sparkle"
            src="https://images.pexels.com/photos/29957675/pexels-photo-29957675.jpeg?auto=compress&cs=tinysrgb&w=1600"
            className="h-full w-full"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ganache via-ganache/45 to-ganache/10" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 pt-32 md:px-10">
          <span className="eyebrow text-gold-light">Client Stories</span>
          <h1 className="mt-4 max-w-2xl text-balance text-5xl text-ivory md:text-6xl">Testimonials</h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.name}
              delay={(i % 2) * 0.1}
              className="flex flex-col justify-between gap-6 rounded-[1.75rem] bg-ivory-soft p-8 ring-1 ring-ganache/5"
            >
              <p className="font-signature text-3xl leading-none text-gold-deep">&ldquo;</p>
              <p className="text-balance text-lg leading-relaxed text-charcoal/80">{t.quote}</p>
              <div className="hairline" />
              <div>
                <p className="text-sm font-semibold text-ganache">{t.name}</p>
                <p className="text-xs uppercase tracking-widest text-charcoal/45">{t.context}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ganache py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <SectionHeading
            eyebrow="Your celebration is next"
            title="Let&rsquo;s make your cake the one people talk about"
            align="center"
            dark
            className="mx-auto"
          />
          <Reveal delay={0.15} className="mt-8 flex justify-center">
            <SealButton href={link} variant="dark" size="lg">Order on WhatsApp</SealButton>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
