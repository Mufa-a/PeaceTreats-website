import Reveal from './Reveal'

interface Props {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  dark?: boolean
  className?: string
}

export default function SectionHeading({ eyebrow, title, description, align = 'left', dark = false, className = '' }: Props) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'
  return (
    <Reveal className={`flex flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow && (
        <span className={`eyebrow ${dark ? 'text-gold-light' : 'text-gold-deep'}`}>{eyebrow}</span>
      )}
      <h2 className={`text-balance text-4xl md:text-5xl font-normal ${dark ? 'text-ivory' : 'text-ganache'}`}>
        {title}
      </h2>
      {description && (
        <p className={`max-w-xl text-balance text-base md:text-lg leading-relaxed ${dark ? 'text-ivory/70' : 'text-charcoal/70'}`}>
          {description}
        </p>
      )}
    </Reveal>
  )
}
