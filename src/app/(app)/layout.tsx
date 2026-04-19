import Link from 'next/link'
import { ReactNode } from 'react'

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-56 border-r border-gray-200 p-4 flex flex-col gap-1">
        <Link href="/dashboard" className="font-bold text-lg mb-6 px-2">
          TaskFlow
        </Link>
        <Link
          href="/dashboard"
          className="px-3 py-2 rounded hover:bg-gray-100 text-sm"
        >
          Dashboard
        </Link>
        <Link
          href="/projects"
          className="px-3 py-2 rounded hover:bg-gray-100 text-sm"
        >
          Projects
        </Link>
        <div className="mt-auto px-3 py-2 text-xs text-gray-500">v0.1.0</div>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  )
}
