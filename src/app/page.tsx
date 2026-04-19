import Link from 'next/link'
import { ArrowRight, CheckCircle2, Layers, Zap } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
const features = [
  {
    icon: Zap,
    title: 'Lightning fast',
    description:
      'Sub-100ms interactions. No loading spinners. Feels like native.',
  },
  {
    icon: Layers,
    title: 'Built for teams',
    description: 'Projects, roles, real-time sync. Works for 5 or 500 people.',
  },
  {
    icon: CheckCircle2,
    title: 'Focused UX',
    description: 'No bloat, no feature creep. Just what you need to ship.',
  },
]
export default function HomePage() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Team tasks,
          <br />
          without the bloat.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          TaskFlow is a modern task manager built for teams who actually ship.
          Fast, focused, and free for up to 5 members.
        </p>
        <div className="flex gap-3 justify-center">
          <Button asChild size="lg">
            <Link href="/login">
              Get started
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/pricing">See pricing</Link>
          </Button>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid gap-4 md:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <Card key={title}>
              <CardContent className="pt-6">
                <Icon className="h-8 w-8 mb-4" />
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  )
}
