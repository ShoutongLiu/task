import Link from 'next/link'

export const metadata = {
  title: 'Projects — TaskFlow',
}

const mockProjects = [
  { id: '1', name: 'Website redesign' },
  { id: '2', name: 'Mobile app v2' },
  { id: '3', name: 'API refactor' },
]

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Projects</h1>
      <div className="grid gap-3">
        {mockProjects.map((p) => (
          <Link
            key={p.id}
            href={`/projects/${p.id}`}
            className="block p-4 border border-gray-200 rounded hover:bg-gray-50"
          >
            {p.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
