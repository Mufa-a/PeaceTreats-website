import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { CATEGORIES } from '@/data/cakes'
import { buildWhatsAppLink, generalInquiryMessage } from '@/lib/whatsapp'

const PRIMARY_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [collectionsOpen, setCollectionsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const link = buildWhatsAppLink(generalInquiryMessage())

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-pink shadow-[0_1px_0_0_rgba(43,24,16,0.08)]' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="text-2xl tracking-tight text-ganache">Peace</span>
          <span className="font-signature text-xl text-pink-deep">Treats</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {PRIMARY_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide transition-colors ${
                  isActive ? 'text-gold-deep' : 'text-ganache/80 hover:text-ganache'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setCollectionsOpen(true)}
            onMouseLeave={() => setCollectionsOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium tracking-wide text-ganache/80 hover:text-ganache">
              Collections
              <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden="true">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" />
              </svg>
            </button>
            <AnimatePresence>
              {collectionsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3"
                >
                  <div className="rounded-2xl bg-white p-2 ring-1 ring-ganache/10" style={{ boxShadow: 'var(--shadow-card-hover)' }}>
                    {CATEGORIES.map((c) => (
                      <Link
                        key={c.slug}
                        to={`/cakes/${c.slug}`}
                        className="block rounded-xl px-4 py-2.5 text-sm text-charcoal/80 transition-colors hover:bg-ivory-soft hover:text-ganache"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <div className="hidden items-center lg:flex">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-ganache px-5 py-2.5 text-sm font-semibold text-ivory transition-colors hover:bg-ganache-deep"
          >
            Order on WhatsApp
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-ganache lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-ivory lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-6">
              {PRIMARY_LINKS.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-medium text-ganache hover:bg-ivory-soft"
                >
                  {l.label}
                </NavLink>
              ))}
              <div className="mt-2 hairline" />
              <p className="eyebrow px-3 pt-3 text-gold-deep">Collections</p>
              {CATEGORIES.map((c) => (
                <NavLink
                  key={c.slug}
                  to={`/cakes/${c.slug}`}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base text-charcoal/80 hover:bg-ivory-soft"
                >
                  {c.label}
                </NavLink>
              ))}
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 rounded-full bg-ganache px-5 py-3 text-center text-sm font-semibold text-ivory"
              >
                Order on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
