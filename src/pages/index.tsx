import React from 'react'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function Home() {
  React.useEffect(() => { document.title = "Home" }, [])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Home</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">The landing page for first-time visitors browsing phone deals, showcasing top-selling smartphones with high-impact visuals and quick purchase paths. It features a hero carousel of flagship phones like iPhone 16 and Galaxy S25 with current discounts, a grid of featured products with ratings and prices, customer testimonials slider, and latest deals banner. The primary CTA 'Shop Now' scrolls to the product grid and links to /products for full catalog.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button size="lg">
            <span>Shop now</span>
          </Button>
          <Button size="lg" variant="outline">
            <span>Browse phones</span>
          </Button>
        </div>
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Available now</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="overflow-hidden">
            <AspectRatio ratio={1}>
              <div className="h-full w-full bg-muted" />
            </AspectRatio>
            <CardContent className="p-4">
              <CardTitle className="text-base">Hero carousel auto-rotating top 5 phones with buy buttons</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">From $—</p>
              <Button size="sm" className="mt-3 w-full">
                <span>View details</span>
              </Button>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <AspectRatio ratio={1}>
              <div className="h-full w-full bg-muted" />
            </AspectRatio>
            <CardContent className="p-4">
              <CardTitle className="text-base">Featured products grid with search bar and filters</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">From $—</p>
              <Button size="sm" className="mt-3 w-full">
                <span>View details</span>
              </Button>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <AspectRatio ratio={1}>
              <div className="h-full w-full bg-muted" />
            </AspectRatio>
            <CardContent className="p-4">
              <CardTitle className="text-base">Testimonials carousel with star ratings</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">From $—</p>
              <Button size="sm" className="mt-3 w-full">
                <span>View details</span>
              </Button>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <AspectRatio ratio={1}>
              <div className="h-full w-full bg-muted" />
            </AspectRatio>
            <CardContent className="p-4">
              <CardTitle className="text-base">Flash deals timer counting down to expiration</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">From $—</p>
              <Button size="sm" className="mt-3 w-full">
                <span>View details</span>
              </Button>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <AspectRatio ratio={1}>
              <div className="h-full w-full bg-muted" />
            </AspectRatio>
            <CardContent className="p-4">
              <CardTitle className="text-base">Newsletter signup for deal alerts</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">From $—</p>
              <Button size="sm" className="mt-3 w-full">
                <span>View details</span>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 border-t border-border">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">What you'll find here</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Testimonials carousel with star ratings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Testimonials carousel with star ratings</p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Flash deals timer counting down to expiration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Flash deals timer counting down to expiration</p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Newsletter signup for deal alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Newsletter signup for deal alerts</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
