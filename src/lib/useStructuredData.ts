import { useEffect } from 'react'

const SCRIPT_ID = 'page-structured-data'

/** Injects a page-specific JSON-LD <script> tag, replacing it on navigation and removing it on unmount. */
export function useStructuredData(data: object | null) {
  useEffect(() => {
    if (!data) return

    let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null
    if (!script) {
      script = document.createElement('script')
      script.id = SCRIPT_ID
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(data)

    return () => {
      document.getElementById(SCRIPT_ID)?.remove()
    }
  }, [data])
}
