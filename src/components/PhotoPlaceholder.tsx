type Palette = 'ganache' | 'rose' | 'gold' | 'sage'

const GRADIENTS: Record<Palette, string> = {
  ganache: 'linear-gradient(135deg, #3a2417 0%, #2b1810 55%, #1c0f09 100%)',
  rose: 'linear-gradient(135deg, #e3c0b6 0%, #cf9a8d 55%, #b97d6f 100%)',
  gold: 'linear-gradient(135deg, #eddcae 0%, #c9a961 55%, #a5813f 100%)',
  sage: 'linear-gradient(135deg, #c3d0b6 0%, #97a884 55%, #7c8f6a 100%)',
}

const LINE_COLOR: Record<Palette, string> = {
  ganache: 'rgba(230, 211, 161, 0.55)',
  rose: 'rgba(43, 24, 16, 0.35)',
  gold: 'rgba(43, 24, 16, 0.4)',
  sage: 'rgba(43, 24, 16, 0.35)',
}

interface Props {
  palette: Palette
  label: string
  className?: string
  icon?: 'tier' | 'cupcake' | 'slice' | 'sparkle'
  /** Real photograph URL. When provided, this renders in place of the illustrated placeholder. */
  src?: string
}

/**
 * Cake photography slot. Pass `src` to render a real photograph (with a soft
 * pink-tinted glass wash for brand consistency); omit it to fall back to the
 * illustrated gradient placeholder.
 */
export default function PhotoPlaceholder({ palette, label, className = '', icon = 'tier', src }: Props) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <img
          src={src}
          alt={label}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        {/* pink aura wash so every photo reads as part of the same palette */}
        <div
          className="pointer-events-none absolute inset-0 mix-blend-overlay"
          style={{ background: 'linear-gradient(135deg, rgba(229,154,174,0.28), rgba(43,24,16,0.08) 60%, rgba(229,154,174,0.16))' }}
        />
        <div className="pointer-events-none absolute inset-0" style={{ boxShadow: 'inset 0 0 60px rgba(43,24,16,0.15)' }} />
      </div>
    )
  }

  const line = LINE_COLOR[palette]
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: GRADIENTS[palette] }}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-noise mix-blend-overlay" />
      <div className="absolute inset-0 opacity-90 flex items-center justify-center">
        <CakeMark stroke={line} icon={icon} />
      </div>
      <div
        className="absolute inset-0"
        style={{ boxShadow: 'inset 0 0 90px rgba(0,0,0,0.18)' }}
      />
    </div>
  )
}

function CakeMark({ stroke, icon }: { stroke: string; icon: NonNullable<Props['icon']> }) {
  const common = { fill: 'none', stroke, strokeWidth: 1.1, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  if (icon === 'cupcake') {
    return (
      <svg viewBox="0 0 200 200" className="w-2/5 h-2/5" aria-hidden="true">
        <path d="M60 95 L140 95 L128 175 Q100 185 72 175 Z" {...common} />
        <path d="M60 95 Q100 60 140 95" {...common} />
        <path d="M100 60 Q90 45 100 32 Q110 45 100 60" {...common} />
        <circle cx="100" cy="26" r="4" {...common} />
      </svg>
    )
  }
  if (icon === 'slice') {
    return (
      <svg viewBox="0 0 200 200" className="w-2/5 h-2/5" aria-hidden="true">
        <path d="M40 150 L100 45 L160 150 Z" {...common} />
        <path d="M55 123 L145 123" {...common} />
        <path d="M70 96 L130 96" {...common} />
        <circle cx="100" cy="45" r="4" {...common} />
      </svg>
    )
  }
  if (icon === 'sparkle') {
    return (
      <svg viewBox="0 0 200 200" className="w-1/3 h-1/3" aria-hidden="true">
        <path d="M100 30 L112 88 L170 100 L112 112 L100 170 L88 112 L30 100 L88 88 Z" {...common} />
        <circle cx="150" cy="45" r="6" {...common} />
        <circle cx="45" cy="150" r="4" {...common} />
      </svg>
    )
  }
  // tier (default): stacked wedding-style tiers
  return (
    <svg viewBox="0 0 200 200" className="w-2/5 h-2/5" aria-hidden="true">
      <rect x="65" y="130" width="70" height="34" rx="2" {...common} />
      <rect x="75" y="96" width="50" height="34" rx="2" {...common} />
      <rect x="85" y="62" width="30" height="34" rx="2" {...common} />
      <path d="M92 62 Q100 48 108 62" {...common} />
      <circle cx="100" cy="44" r="3" {...common} />
    </svg>
  )
}
