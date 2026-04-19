import { Counter } from '@/components/counter'

export const metadata = {
  title: 'Dashboard — TaskFlow',
}

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-600">Welcome back. You have 0 tasks today.</p>
      <Counter />
    </div>
  )
}
