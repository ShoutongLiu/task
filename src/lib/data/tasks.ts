import 'server-only'

import { mockTasks } from '../mock-data'
import type { Task, TaskStatus } from '../types'

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function getTasksByProject(projectId: string): Promise<Task[]> {
  await delay(500)
  return mockTasks.filter((t) => t.projectId === projectId)
}

export async function createTask(input: {
  projectId: string
  title: string
  priority: Task['priority']
}): Promise<Task> {
  await delay(400)
  const newTask: Task = {
    id: `t${Date.now()}`,
    projectId: input.projectId,
    title: input.title,
    description: null,
    status: 'Todo',
    priority: input.priority,
    createdAt: new Date(),
  }
  mockTasks.push(newTask)
  return newTask
}

export async function updateTaskStatus(
  taskId: string,
  status: TaskStatus,
): Promise<void> {
  await delay(300)
  const task = mockTasks.find((t) => t.id === taskId)
  if (!task) throw new Error(`Task ${taskId} not found`)
  task.status = status
}
