'use server'

import { revalidatePath } from 'next/cache'
import { z } from 'zod'

import { createTask, updateTaskStatus } from '@/lib/data/tasks'
import type { TaskStatus } from '@/lib/types'

const createSchema = z.object({
  projectId: z.string().min(1),
  title: z.string().min(2, 'Title too short').max(100),
  priority: z.enum(['Low', 'Medium', 'High']),
})

export async function createTaskAction(input: unknown) {
  const parsed = createSchema.safeParse(input)
  if (!parsed.success) {
    return {
      ok: false as const,
      error: parsed.error.issues[0]?.message ?? 'Invalid input',
    }
  }

  const task = await createTask(parsed.data)
  revalidatePath(`/projects/${parsed.data.projectId}`)
  return { ok: true as const, task }
}

export async function moveTaskAction(taskId: string, status: TaskStatus) {
  if (!['Todo', 'InProgress', 'Done'].includes(status)) {
    throw new Error('Invalid status')
  }
  await updateTaskStatus(taskId, status)
}
