import Link from 'next/link'
import { ReactNode } from 'react'
import { ThemeToggle } from '@/components/theme-toggle'

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-56 border-r p-4 flex flex-col gap-1">
        <Link href="/dashboard" className="font-bold text-lg mb-6 px-2">
          TaskFlow
        </Link>
        <Link
          href="/dashboard"
          className="px-3 py-2 rounded hover:bg-accent text-sm"
        >
          Dashboard
        </Link>
        <Link
          href="/projects"
          className="px-3 py-2 rounded hover:bg-accent text-sm"
        >
          Projects
        </Link>
        <div className="mt-auto flex items-center justify-between px-2">
          <span className="text-xs text-muted-foreground">v0.1.0</span>
          <ThemeToggle />
        </div>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  )
}
