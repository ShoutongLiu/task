import Link from 'next/link'
import { ReactNode } from 'react'
import { ThemeToggle } from '@/components/theme-toggle'

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <nav className="flex h-16 w-full items-center justify-between px-6">
          <Link href="/" className="font-bold text-lg">
            TaskFlow
          </Link>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/pricing" className="hover:text-gray-600">
              Pricing
            </Link>
            <Link href="/about" className="hover:text-gray-600">
              About
            </Link>
            <Link href="/login" className="hover:text-gray-600">
              Login
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        © 2026 TaskFlow
      </footer>
    </div>
  )
}
