import { Link, Navigate, useParams } from 'react-router-dom'
import { blogPostBySlug, BLOG_POSTS } from '@/data/blog'
import PhotoPlaceholder from '@/components/PhotoPlaceholder'
import SealButton from '@/components/ui/SealButton'
import Reveal from '@/components/ui/Reveal'
import { buildWhatsAppLink, generalInquiryMessage } from '@/lib/whatsapp'
import { useDocumentTitle } from '@/lib/useDocumentTitle'
import { useStructuredData } from '@/lib/useStructuredData'

const SITE_URL = 'https://peacetreats.netlify.app'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? blogPostBySlug(slug) : undefined

  useDocumentTitle(post?.title ?? 'Cake Guide', post?.excerpt, post ? `${SITE_URL}${post.coverImage}` : undefined)

  useStructuredData(
    post
      ? {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description: post.excerpt,
          image: `${SITE_URL}${post.coverImage}`,
          datePublished: post.date,
          author: { '@type': 'Organization', name: 'PeaceTreats' },
          publisher: { '@type': 'Organization', name: 'PeaceTreats' },
          mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
        }
      : null,
  )

  if (!post) return <Navigate to="/blog" replace />

  const link = buildWhatsAppLink(generalInquiryMessage())
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2)

  return (
    <article>
      <section className="relative flex min-h-[42vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <PhotoPlaceholder palette="ganache" label={post.title} src={post.coverImage} className="h-full w-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ganache via-ganache/50 to-ganache/10" />
        <div className="relative z-10 mx-auto w-full max-w-3xl px-6 pb-12 pt-32 md:px-10">
          <Link to="/blog" className="text-xs font-semibold uppercase tracking-wide text-gold-light hover:text-ivory">
            &larr; All guides
          </Link>
          <span className="eyebrow mt-4 block text-gold-light">{post.category}</span>
          <h1 className="mt-2 text-balance text-4xl text-ivory md:text-5xl">{post.title}</h1>
          <p className="mt-3 text-sm text-ivory/60">{post.readTime}</p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-20">
        <Reveal className="flex flex-col gap-6">
          {post.content.map((block, i) => {
            if (block.type === 'heading') {
              return (
                <h2 key={i} className="mt-4 text-2xl text-ganache">
                  {block.text}
                </h2>
              )
            }
            if (block.type === 'list') {
              return (
                <ul key={i} className="flex flex-col gap-2 pl-1">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex gap-3 text-base leading-relaxed text-charcoal/75">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-deep" />
                      {item}
                    </li>
                  ))}
                </ul>
              )
            }
            return (
              <p key={i} className="text-balance text-base leading-relaxed text-charcoal/75">
                {block.text}
              </p>
            )
          })}
        </Reveal>

        <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl bg-ivory-soft p-8">
          <p className="text-lg text-ganache">Have a date and a vision in mind?</p>
          <SealButton href={link}>Talk to us on WhatsApp</SealButton>
        </div>

        {related.length > 0 && (
          <div className="mt-16 border-t border-hairline pt-10">
            <p className="eyebrow mb-6 text-gold-deep">More guides</p>
            <div className="grid gap-8 md:grid-cols-2">
              {related.map((r) => (
                <Link key={r.slug} to={`/blog/${r.slug}`} className="group flex flex-col gap-2">
                  <div className="aspect-[4/3] overflow-hidden rounded-xl">
                    <PhotoPlaceholder
                      palette="rose"
                      label={r.title}
                      src={r.coverImage}
                      className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />
                  </div>
                  <h3 className="text-lg text-ganache group-hover:text-gold-deep">{r.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  )
}
