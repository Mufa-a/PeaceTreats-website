import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <span className="font-signature text-6xl text-gold-deep">Oh, crumbs.</span>
      <h1 className="mt-4 text-3xl text-ganache">We couldn&rsquo;t find that page</h1>
      <p className="mt-3 max-w-sm text-charcoal/60">
        It may have been moved, or the link might be off. Let&rsquo;s get you back to something sweet.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-full bg-ganache px-6 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-ganache-deep"
      >
        Back to Home
      </Link>
    </div>
  )
}
