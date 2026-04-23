import { columns } from '@/components/projects/columns'
import { DataTable } from '@/components/projects/data-table'
import { NewProjectDialog } from '@/components/projects/new-project-dialog'
import { mockProjects } from '@/lib/mock-data'

export const metadata = {
  title: 'Projects — TaskFlow',
}

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground mt-1">
            Manage your projects and track progress.
          </p>
        </div>
        <NewProjectDialog />
      </div>
      <DataTable columns={columns} data={mockProjects} />
    </div>
  )
}
