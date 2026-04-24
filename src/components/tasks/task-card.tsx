'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useTransition } from 'react'
import { toast } from 'sonner'

import { moveTaskAction } from '@/app/actions/tasks'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import type { Task, TaskStatus } from '@/lib/types'

const ORDER: TaskStatus[] = ['Todo', 'InProgress', 'Done']

const priorityColor = {
  Low: 'secondary',
  Medium: 'default',
  High: 'destructive',
} as const

export function TaskCard({ task }: { task: Task }) {
  const [isPending, startTransition] = useTransition()

  const currentIdx = ORDER.indexOf(task.status)
  const prevStatus = ORDER[currentIdx - 1]
  const nextStatus = ORDER[currentIdx + 1]

  function move(to: TaskStatus) {
    startTransition(async () => {
      try {
        await moveTaskAction(task.id, to)
        toast.success(`Moved to ${to}`)
      } catch (err) {
        toast.error('Move failed', {
          description: err instanceof Error ? err.message : 'Unknown error',
        })
      }
    })
  }

  return (
    <Card className={isPending ? 'opacity-60' : ''}>
      <CardContent className="p-3 flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <p className="text-sm font-medium leading-snug">{task.title}</p>
          <Badge
            variant={priorityColor[task.priority]}
            className="shrink-0 text-xs"
          >
            {task.priority}
          </Badge>
        </div>
        {task.description && (
          <p className="text-xs text-muted-foreground line-clamp-2">
            {task.description}
          </p>
        )}
        <div className="flex justify-between mt-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6"
            disabled={!prevStatus || isPending}
            onClick={() => prevStatus && move(prevStatus)}
          >
            <ChevronLeft className="h-3 w-3" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6"
            disabled={!nextStatus || isPending}
            onClick={() => nextStatus && move(nextStatus)}
          >
            <ChevronRight className="h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
