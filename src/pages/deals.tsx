import React from 'react'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function Deals() {
  React.useEffect(() => { document.title = "Deals" }, [])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Deals</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">Dedicated page for bargain hunters featuring time-sensitive promotions, bundle offers, and clearance phones with urgency indicators. Shows deal cards with original price strikethrough, savings percentage badges, countdown timers, and bundle details like 'phone + case + charger'. Includes 'Deal of the Day' spotlight and past deal archive. Primary CTA 'Grab Deal Now' adds bundle to cart and navigates to /cart.</p>
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
              <CardTitle className="text-base">Countdown timers on each deal card</CardTitle>
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
              <CardTitle className="text-base">Savings calculator showing monthly payment breakdown</CardTitle>
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
              <CardTitle className="text-base">Bundle configurator selecting add-ons</CardTitle>
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
              <CardTitle className="text-base">Deal history accordion with past offers</CardTitle>
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
              <CardTitle className="text-base">Wishlist button for deals</CardTitle>
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
              <CardTitle>Bundle configurator selecting add-ons</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Bundle configurator selecting add-ons</p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Deal history accordion with past offers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Deal history accordion with past offers</p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Wishlist button for deals</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Wishlist button for deals</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
