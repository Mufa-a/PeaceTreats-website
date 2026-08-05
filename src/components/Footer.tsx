import { Link } from 'react-router-dom'
import { CATEGORIES } from '@/data/cakes'
import { buildWhatsAppLink, generalInquiryMessage } from '@/lib/whatsapp'

export default function Footer() {
  const link = buildWhatsAppLink(generalInquiryMessage())
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ganache text-ivory">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="flex flex-col gap-4">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl text-ivory">Peace</span>
              <span className="font-signature text-xl text-pink-light">Treats</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-ivory/60">
              A private atelier for celebration cakes &mdash; designed, hand-finished, and delivered across Nairobi.
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-ivory px-5 py-2.5 text-sm font-semibold text-ganache transition-colors hover:bg-gold-light"
              >
                Chat with us on WhatsApp
              </a>
              <a
                href="https://instagram.com/_P3ace.wrld_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="PeaceTreats on Instagram"
                className="glass-pink inline-flex h-11 w-11 items-center justify-center rounded-full text-ivory transition-transform hover:scale-105"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="eyebrow text-gold-light">Collections</p>
            {CATEGORIES.slice(0, 5).map((c) => (
              <Link key={c.slug} to={`/cakes/${c.slug}`} className="text-sm text-ivory/70 transition-colors hover:text-ivory">
                {c.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="eyebrow text-gold-light">Studio</p>
            <Link to="/about" className="text-sm text-ivory/70 transition-colors hover:text-ivory">About</Link>
            <Link to="/gallery" className="text-sm text-ivory/70 transition-colors hover:text-ivory">Gallery</Link>
            <Link to="/testimonials" className="text-sm text-ivory/70 transition-colors hover:text-ivory">Testimonials</Link>
            <Link to="/contact" className="text-sm text-ivory/70 transition-colors hover:text-ivory">Contact</Link>
          </div>

          <div className="flex flex-col gap-3">
            <p className="eyebrow text-gold-light">Visit the atelier</p>
            <p className="text-sm leading-relaxed text-ivory/70">Buruburu, Nairobi<br />By appointment, Mon&ndash;Sat</p>
            <p className="text-sm leading-relaxed text-ivory/70">analystmufa@gmail.com</p>
            <p className="text-sm leading-relaxed text-ivory/70">@_P3ace.wrld_ on Instagram</p>
          </div>
        </div>

        <div className="hairline-dark mt-14" />

        <div className="mt-6 flex flex-col-reverse items-center justify-between gap-4 text-xs text-ivory/45 md:flex-row">
          <p>&copy; {year} PeaceTreats. All rights reserved.</p>
          <p>Every cake is baked to order &mdash; inquire at least 72 hours ahead.</p>
        </div>
      </div>
    </footer>
  )
}
