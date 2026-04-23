import { CheckCircle2, Circle, Clock, TrendingUp } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { Badge } from '@/components/ui/badge'

export const metadata = {
  title: 'Dashboard — TaskFlow',
}
const stats = [
  {
    label: 'Open tasks',
    value: '12',
    icon: Circle,
    change: '+2 from last week',
  },
  {
    label: 'In progress',
    value: '4',
    icon: Clock,
    change: 'Same as last week',
  },
  {
    label: 'Completed',
    value: '28',
    icon: CheckCircle2,
    change: '+6 from last week',
  },
  {
    label: 'Velocity',
    value: '8.4',
    icon: TrendingUp,
    change: '+1.2 tasks/day',
  },
]

const recentTasks = [
  {
    id: '1',
    title: 'Implement auth flow',
    status: 'In progress',
    project: 'Website redesign',
  },
  {
    id: '2',
    title: 'Add dark mode toggle',
    status: 'Done',
    project: 'Website redesign',
  },
  {
    id: '3',
    title: 'API rate limiting',
    status: 'Todo',
    project: 'API refactor',
  },
  {
    id: '4',
    title: 'Onboarding tour',
    status: 'Todo',
    project: 'Mobile app v2',
  },
]

const statusVariant = {
  Todo: 'secondary',
  'In progress': 'default',
  Done: 'outline',
} as const

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Welcome back. Here&apos;s what&apos;s happening today.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ label, value, icon: Icon, change }) => (
          <Card key={label}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{label}</CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{value}</div>
              <p className="text-xs text-muted-foreground mt-1">{change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent tasks</CardTitle>
          <CardDescription>
            Your latest updates across all projects.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col divide-y">
            {recentTasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between py-3"
              >
                <div>
                  <p className="font-medium">{task.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {task.project}
                  </p>
                </div>
                <Badge
                  variant={
                    statusVariant[task.status as keyof typeof statusVariant]
                  }
                >
                  {task.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
