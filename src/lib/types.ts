export type ProjectStatus = 'Active' | 'Archived' | 'Planning'

export type Project = {
  id: string
  name: string
  status: ProjectStatus
  taskCount: number
  createdAt: Date
}

export type TaskStatus = 'Todo' | 'InProgress' | 'Done'
export type TaskPriority = 'Low' | 'Medium' | 'High'

export type Task = {
  id: string
  projectId: string
  title: string
  status: TaskStatus
  priority: TaskPriority
  createdAt: Date
  description?: string | null
}
