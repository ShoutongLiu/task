import { notFound } from 'next/navigation'
import { Suspense } from 'react'

import { getProjectById } from '@/lib/data/projects'
import { TaskBoard } from '@/components/tasks/task-board'
import { TaskBoardSkeleton } from '@/components/tasks/task-board-skeleton'
import { NewTaskDialog } from '@/components/tasks/new-task-dialog'
import { Badge } from '@/components/ui/badge'

type Props = {
  params: Promise<{ projectId: string }>
}

export async function generateMetadata({ params }: Props) {
  const { projectId } = await params
  const project = await getProjectById(projectId)
  return {
    title: project?.name ?? 'Project not found',
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { projectId } = await params
  const project = await getProjectById(projectId)

  if (!project) {
    notFound()
  }
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-3xl font-bold tracking-tight">
              {project.name}
            </h1>
            <Badge
              variant={project.status === 'Active' ? 'default' : 'secondary'}
            >
              {project.status}
            </Badge>
          </div>
          <p className="text-muted-foreground">
            Created {project.createdAt.toLocaleDateString()}
          </p>
        </div>
        <NewTaskDialog projectId={project.id} />
      </div>

      <Suspense fallback={<TaskBoardSkeleton />}>
        <TaskBoard projectId={project.id} />
      </Suspense>
    </div>
  )
}
