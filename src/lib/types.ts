export type ProjectStatus = 'Active' | 'Archived' | 'Planning'

export type Project = {
  id: string
  name: string
  status: ProjectStatus
  taskCount: number
  createdAt: Date
}
