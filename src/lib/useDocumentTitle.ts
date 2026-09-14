import { useEffect } from 'react'

const SITE_URL = 'https://peacetreats.netlify.app'
const SITE_NAME = 'PeaceTreats'

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let tag = document.querySelector(`meta[${attr}="${key}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function setCanonical(href: string) {
  let link = document.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

/**
 * SEO helper: sets the document title, meta description, canonical URL,
 * and Open Graph / Twitter tags for the current page.
 */
export function useDocumentTitle(title: string, description?: string, image?: string) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`
    document.title = fullTitle

    const canonicalUrl = `${SITE_URL}${window.location.pathname}`
    setCanonical(canonicalUrl)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:url', canonicalUrl)
    setMeta('name', 'twitter:title', fullTitle)

    if (description) {
      setMeta('name', 'description', description)
      setMeta('property', 'og:description', description)
      setMeta('name', 'twitter:description', description)
    }

    if (image) {
      setMeta('property', 'og:image', image)
      setMeta('name', 'twitter:image', image)
    }
  }, [title, description, image])
}
