import { motion } from 'framer-motion'

interface Props {
  href: string
  children: React.ReactNode
  variant?: 'solid' | 'outline' | 'dark'
  size?: 'md' | 'lg'
  className?: string
  onClick?: () => void
}

/**
 * The site's signature CTA: a "wax seal" button. The circular emblem on the
 * left references the pressed-wax seals used on invitation suites — tying
 * the ordering action back to the celebratory, invitation-adjacent nature
 * of what's being sold.
 */
export default function SealButton({ href, children, variant = 'solid', size = 'md', className = '', onClick }: Props) {
  const base =
    'group relative inline-flex items-center gap-3 rounded-full font-body font-semibold transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4'
  const sizing = size === 'lg' ? 'pl-2.5 pr-7 py-2.5 text-base' : 'pl-2 pr-5 py-1.5 text-sm'
  const variants: Record<string, string> = {
    solid: 'bg-ganache text-ivory hover:bg-ganache-deep',
    outline: 'bg-transparent text-ganache border border-ganache/30 hover:border-ganache',
    dark: 'bg-ivory text-ganache hover:bg-gold-light',
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={`${base} ${sizing} ${variants[variant]} ${className}`}
    >
      <span
        className={`relative flex items-center justify-center rounded-full ${size === 'lg' ? 'h-9 w-9' : 'h-7 w-7'}`}
        style={{
          background: 'radial-gradient(circle at 32% 28%, #e6d3a1, #c9a961 55%, #8a6a34 100%)',
        }}
      >
        <svg viewBox="0 0 24 24" className={size === 'lg' ? 'h-4 w-4' : 'h-3.5 w-3.5'} aria-hidden="true">
          <path
            fill="#2b1810"
            d="M17.4 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z"
          />
          <path
            fill="#2b1810"
            d="M12 2C6.48 2 2 6.36 2 11.72c0 1.9.55 3.66 1.5 5.16L2 22l5.3-1.4a10.1 10.1 0 0 0 4.7 1.18c5.52 0 10-4.36 10-9.72C22 6.36 17.52 2 12 2Zm0 17.7c-1.53 0-3-.4-4.28-1.15l-.31-.18-3.15.83.84-3-.2-.32a7.83 7.83 0 0 1-1.24-4.16C3.66 7.4 7.4 3.85 12 3.85s8.34 3.55 8.34 7.87S16.6 19.7 12 19.7Z"
          />
        </svg>
      </span>
      <span className="flex items-center gap-2">
        {children}
        <svg
          viewBox="0 0 16 16"
          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        >
          <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </motion.a>
  )
}
