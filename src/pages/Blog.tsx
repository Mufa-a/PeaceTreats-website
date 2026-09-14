import { Link } from 'react-router-dom'
import { BLOG_POSTS } from '@/data/blog'
import PhotoPlaceholder from '@/components/PhotoPlaceholder'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import { useDocumentTitle } from '@/lib/useDocumentTitle'

export default function Blog() {
  useDocumentTitle(
    'Cake Guides & Tips',
    'Practical guides on wedding cake pricing, ordering lead times, and flavour choices from the PeaceTreats atelier in Nairobi.',
  )

  return (
    <div className="mx-auto max-w-5xl px-6 pb-24 pt-32 md:px-10 md:pt-36">
      <SectionHeading
        eyebrow="From the Atelier"
        title="Cake guides &amp; tips"
        description="Straight answers to the questions we get most \u2014 pricing, timelines, and flavour choices for Nairobi celebrations."
        className="mb-14"
      />

      <div className="flex flex-col gap-10">
        {BLOG_POSTS.slice()
          .sort((a, b) => (a.date < b.date ? 1 : -1))
          .map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <Link to={`/blog/${post.slug}`} className="group grid gap-6 border-t border-hairline pt-8 md:grid-cols-[220px_1fr]">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <PhotoPlaceholder
                    palette="ganache"
                    label={post.title}
                    src={post.coverImage}
                    className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                </div>
                <div className="flex flex-col justify-center gap-2">
                  <span className="eyebrow text-gold-deep">{post.category}</span>
                  <h2 className="text-2xl text-ganache transition-colors group-hover:text-gold-deep md:text-3xl">{post.title}</h2>
                  <p className="text-sm leading-relaxed text-charcoal/65 md:text-base">{post.excerpt}</p>
                  <span className="mt-1 text-xs text-charcoal/45">{post.readTime}</span>
                </div>
              </Link>
            </Reveal>
          ))}
      </div>
    </div>
  )
}
