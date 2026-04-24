import { Skeleton } from '@/components/ui/skeleton'

export function TaskBoardSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {[0, 1, 2].map((col) => (
        <div key={col} className="flex flex-col gap-3">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-24 w-full" />
        </div>
      ))}
    </div>
  )
}
