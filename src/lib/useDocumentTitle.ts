import { useEffect } from 'react'

/** Lightweight SEO helper: sets the document title and meta description per page. */
export function useDocumentTitle(title: string, description?: string) {
  useEffect(() => {
    document.title = `${title} | PeaceTreats`
    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }
  }, [title, description])
}
