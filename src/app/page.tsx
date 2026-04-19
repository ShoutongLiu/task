import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-8">
      {/* 这是一个一级标题，用于显示应用名称 "TaskFlow"，采用大号粗体并带有紧凑的字距 */}
      <h1 className="text-4xl font-bold tracking-tight">TaskFlow</h1>
      <p className="text-lg text-gray-600 max-w-md text-center">
        Team task management, without the bloat. Built for teams who ship.
      </p>
      <div className="flex gap-4">
        <Link
          href="/login"
          className="px-5 py-2 rounded-md bg-black text-white hover:bg-gray-800 transition"
        >
          Get started
        </Link>
        <Link
          href="/pricing"
          className="px-5 py-2 rounded-md border border-gray-300 hover:bg-gray-50 transition"
        >
          Pricing
        </Link>
      </div>
    </div>
  )
}
