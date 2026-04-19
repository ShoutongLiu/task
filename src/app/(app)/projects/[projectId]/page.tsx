type Props = {
  params: Promise<{ projectId: string }>
}

export async function ProjectPage({ params }: Props) {
  const { projectId } = await params
  return {
    title: `Project ${projectId} — TaskFlow`,
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { projectId } = await params
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Project {projectId}</h1>
      <p className="text-gray-600">Task board will go here in Day 3.</p>
    </div>
  )
}
