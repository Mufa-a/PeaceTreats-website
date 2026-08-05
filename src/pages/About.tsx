import PhotoPlaceholder from '@/components/PhotoPlaceholder'
import SectionHeading from '@/components/ui/SectionHeading'
import SealButton from '@/components/ui/SealButton'
import Reveal from '@/components/ui/Reveal'
import { buildWhatsAppLink, generalInquiryMessage } from '@/lib/whatsapp'
import { useDocumentTitle } from '@/lib/useDocumentTitle'

const VALUES = [
  { title: 'Made to order', body: 'Nothing sits in a case. Every cake begins the day it\u2019s booked and is baked for your date specifically.' },
  { title: 'Real ingredients', body: 'French butter, Madagascan vanilla, and couverture chocolate \u2014 no shortcuts, no mixes.' },
  { title: 'Design-led', body: 'Every order starts as a conversation about your vision, not a catalogue number.' },
]

export default function About() {
  useDocumentTitle('About Us', 'The story behind PeaceTreats, a Nairobi atelier for bespoke celebration cakes.')
  const link = buildWhatsAppLink(generalInquiryMessage())

  return (
    <div>
      <section className="relative flex min-h-[50vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <PhotoPlaceholder
            palette="rose"
            label="Inside the atelier"
            icon="slice"
            src="https://images.pexels.com/photos/4722002/pexels-photo-4722002.jpeg?auto=compress&cs=tinysrgb&w=1600"
            className="h-full w-full"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ganache via-ganache/40 to-ganache/10" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 pt-32 md:px-10">
          <span className="eyebrow text-gold-light">Our Story</span>
          <h1 className="mt-4 max-w-2xl text-balance text-5xl text-ivory md:text-6xl">About PeaceTreats</h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">
        <Reveal>
          <div className="aspect-[4/5] overflow-hidden rounded-[1.75rem]">
            <PhotoPlaceholder
              palette="gold"
              label="Founder at work"
              icon="tier"
              src="https://images.pexels.com/photos/6054916/pexels-photo-6054916.jpeg?auto=compress&cs=tinysrgb&w=1200"
              className="h-full w-full"
            />
          </div>
        </Reveal>
        <div className="flex flex-col justify-center gap-6">
          <SectionHeading
            eyebrow="Since 2016"
            title="A patisserie built on patience and detail"
          />
          <p className="text-balance leading-relaxed text-charcoal/70">
            PeaceTreats began as a single home oven and a waitlist that grew by word of mouth.
            A decade on, we&rsquo;re still a small, hands-on studio &mdash; every cake passes through the same
            few pairs of hands, from the first sketch to the final gold leaf.
          </p>
          <p className="text-balance leading-relaxed text-charcoal/70">
            We don&rsquo;t run a storefront of ready-made cakes. Instead, we take a limited number of
            commissions each week, so every client gets the same level of attention a bridal cake would.
          </p>
          <div className="mt-2">
            <SealButton href={link}>Talk to us on WhatsApp</SealButton>
          </div>
        </div>
      </section>

      <section className="bg-ivory-soft py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <SectionHeading eyebrow="What We Believe" title="The values behind every box" align="center" className="mx-auto mb-14 max-w-xl" />
          <div className="grid gap-10 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1} className="flex flex-col gap-3 border-t border-hairline pt-6">
                <h3 className="text-xl text-ganache">{v.title}</h3>
                <p className="text-sm leading-relaxed text-charcoal/65">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
