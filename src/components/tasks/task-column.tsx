import type { Task, TaskStatus } from '@/lib/types'
import { TaskCard } from './task-card'

type Props = {
  status: TaskStatus
  label: string
  tasks: Task[]
}

export function TaskColumn({ label, tasks }: Props) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-sm">{label}</h3>
        <span className="text-xs text-muted-foreground tabular-nums">
          {tasks.length}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        {tasks.length === 0 ? (
          <p className="text-xs text-muted-foreground italic py-4 text-center">
            No tasks
          </p>
        ) : (
          tasks.map((task) => <TaskCard key={task.id} task={task} />)
        )}
      </div>
    </div>
  )
}
