import { getTasksByProject } from '@/lib/data/tasks'
import type { TaskStatus } from '@/lib/types'
import { TaskColumn } from './task-column'

const COLUMNS: { status: TaskStatus; label: string }[] = [
  { status: 'Todo', label: 'Todo' },
  { status: 'InProgress', label: 'In progress' },
  { status: 'Done', label: 'Done' },
]

export async function TaskBoard({ projectId }: { projectId: string }) {
  const tasks = await getTasksByProject(projectId)

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {COLUMNS.map((col) => (
        <TaskColumn
          key={col.status}
          status={col.status}
          label={col.label}
          tasks={tasks.filter((t) => t.status === col.status)}
        />
      ))}
    </div>
  )
}
