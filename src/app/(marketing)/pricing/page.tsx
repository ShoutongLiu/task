import { headers } from 'next/headers'
export const metadata = {
  title: 'Pricing - TaskFlow',
}

export default async function PricingPage() {
  await headers()
  const renderedAt = new Date().toISOString()
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Pricing</h1>
      <p className="text-gary-600">Free for teams up to 5 users</p>
      <p className="text-xs text-muted-foreground mt-8">
        Rendered at: {renderedAt}
      </p>
    </div>
  )
}
