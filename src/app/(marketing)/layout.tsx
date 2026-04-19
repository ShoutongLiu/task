import Link from 'next/link'
import { ReactNode } from 'react'

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-gray-200">
        <nav className="max-w-6xl max-auto flex items-center justify-between px-6 h-16">
          <Link href="/" className="font-bold text-lg">
            TaskFlow
          </Link>
          <div className="flex gap-6 text-sm">
            <Link href="/pricing" className="hover:text-gray-600">
              Pricing
            </Link>
            <Link href="/about" className="hover:text-gray-600">
              About
            </Link>
            <Link href="/login" className="hover:text-gray-600">
              Login
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-gray-200 py-6 text-center text-sm text-gary-500">
        © 2026 TaskFlow
      </footer>
    </div>
  )
}
