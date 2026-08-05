import { useState, type FormEvent } from 'react'
import PhotoPlaceholder from '@/components/PhotoPlaceholder'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import { buildWhatsAppLink, contactMessage } from '@/lib/whatsapp'
import { useDocumentTitle } from '@/lib/useDocumentTitle'

const EVENT_TYPES = ['Birthday', 'Wedding', 'Graduation', 'Anniversary', 'Baby Shower', 'Cupcakes', 'Custom / Other']

export default function Contact() {
  useDocumentTitle('Contact Us', 'Get in touch to order a bespoke cake — inquiries open directly in WhatsApp.')
  const [name, setName] = useState('')
  const [eventType, setEventType] = useState(EVENT_TYPES[0])
  const [date, setDate] = useState('')
  const [details, setDetails] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const message = contactMessage(name, eventType, date, details)
    window.open(buildWhatsAppLink(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <div>
      <section className="relative flex min-h-[42vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <PhotoPlaceholder
            palette="ganache"
            label="Get in touch"
            icon="slice"
            src="https://images.pexels.com/photos/11112069/pexels-photo-11112069.jpeg?auto=compress&cs=tinysrgb&w=1600"
            className="h-full w-full"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ganache via-ganache/45 to-ganache/10" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 pt-32 md:px-10">
          <span className="eyebrow text-gold-light">Get In Touch</span>
          <h1 className="mt-4 max-w-2xl text-balance text-5xl text-ivory md:text-6xl">Contact Us</h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-[1fr_1.1fr] md:px-10 md:py-28">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Start an Inquiry"
            title="Tell us about your celebration"
            description="Fill in as much or as little as you like &mdash; this opens WhatsApp with your details pre-filled, ready to send."
          />

          <Reveal delay={0.1} className="flex flex-col gap-4 text-sm text-charcoal/70">
            <div>
              <p className="font-semibold text-ganache">WhatsApp</p>
              <p>+254 798 782 360</p>
            </div>
            <div>
              <p className="font-semibold text-ganache">Instagram</p>
              <a
                href="https://instagram.com/_P3ace.wrld_"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-ganache"
              >
                @_P3ace.wrld_
              </a>
            </div>
            <div>
              <p className="font-semibold text-ganache">Email</p>
              <p>analystmufa@gmail.com</p>
            </div>
            <div>
              <p className="font-semibold text-ganache">Atelier</p>
              <p>Buruburu, Nairobi &mdash; by appointment, Mon&ndash;Sat</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-[1.75rem] bg-ivory-soft p-8 ring-1 ring-ganache/5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-charcoal/60">
                Your name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
                className="rounded-xl border border-hairline bg-ivory px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-gold-deep"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="event" className="text-xs font-semibold uppercase tracking-widest text-charcoal/60">
                Occasion
              </label>
              <select
                id="event"
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="rounded-xl border border-hairline bg-ivory px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-gold-deep"
              >
                {EVENT_TYPES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="date" className="text-xs font-semibold uppercase tracking-widest text-charcoal/60">
                Preferred date
              </label>
              <input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="rounded-xl border border-hairline bg-ivory px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-gold-deep"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="details" className="text-xs font-semibold uppercase tracking-widest text-charcoal/60">
                Tell us more
              </label>
              <textarea
                id="details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                rows={4}
                placeholder="Flavours, guest count, colour palette, inspiration..."
                className="resize-none rounded-xl border border-hairline bg-ivory px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-gold-deep"
              />
            </div>

            <button
              type="submit"
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-ganache px-6 py-3.5 text-sm font-semibold text-ivory transition-colors hover:bg-ganache-deep"
            >
              Continue on WhatsApp
            </button>
            <p className="text-center text-xs text-charcoal/45">
              This opens WhatsApp with your message ready &mdash; nothing is stored on our site.
            </p>
          </form>
        </Reveal>
      </section>
    </div>
  )
}
