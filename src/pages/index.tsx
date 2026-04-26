import React from 'react'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export function Home() {
  React.useEffect(() => { document.title = "Home" }, [])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Home</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">The landing page targets first-time visitors browsing for smartphones, showcasing the brand's latest flagship models and promotions. It features a full-width hero carousel with top phones and buy-now CTAs, a grid of featured products with prices and ratings, customer testimonials slider, quick spec comparison table for popular models, and a 'Deals of the Week' section with flash sale timers. The primary CTA scrolls to featured products and encourages adding to cart, guiding users toward purchase.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button size="lg">
            <span>Shop Latest Phones</span>
          </Button>
          <Button size="lg" variant="outline">
            <span>View All Deals</span>
          </Button>
        </div>
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 border-t border-border">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Featured products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-4">
            <AspectRatio ratio={0.8} className="rounded-md bg-muted" />
            <div className="mt-3">
              <Badge>
                <span>Featured</span>
              </Badge>
            </div>
            <h3 className="mt-2 text-lg font-semibold">Hero carousel auto-rotates 4 flagship phones with overlay buy buttons</h3>
            <p className="mt-1 text-sm text-muted-foreground">Hero carousel auto-rotates 4 flagship phones with overlay buy buttons</p>
            <div className="mt-3">
              <Button size="sm">
                <span>Add to cart</span>
              </Button>
            </div>
          </Card>
          <Card className="p-4">
            <AspectRatio ratio={0.8} className="rounded-md bg-muted" />
            <div className="mt-3">
              <Badge>
                <span>Best value</span>
              </Badge>
            </div>
            <h3 className="mt-2 text-lg font-semibold">Product grid with image zoom, price badges, and 'Add to Cart' buttons</h3>
            <p className="mt-1 text-sm text-muted-foreground">Product grid with image zoom, price badges, and 'Add to Cart' buttons</p>
            <div className="mt-3">
              <Button size="sm">
                <span>Add to cart</span>
              </Button>
            </div>
          </Card>
          <Card className="p-4">
            <AspectRatio ratio={0.8} className="rounded-md bg-muted" />
            <div className="mt-3">
              <Badge>
                <span>Limited</span>
              </Badge>
            </div>
            <h3 className="mt-2 text-lg font-semibold">Testimonial carousel with 5-star ratings and user avatars</h3>
            <p className="mt-1 text-sm text-muted-foreground">Testimonial carousel with 5-star ratings and user avatars</p>
            <div className="mt-3">
              <Button size="sm">
                <span>Add to cart</span>
              </Button>
            </div>
          </Card>
        </div>
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 border-t border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold">1M+</p>
            <p className="text-sm text-muted-foreground">Happy customers</p>
          </div>
          <div>
            <p className="text-3xl font-bold">30 days</p>
            <p className="text-sm text-muted-foreground">Easy returns</p>
          </div>
          <div>
            <p className="text-3xl font-bold">24/7</p>
            <p className="text-sm text-muted-foreground">Support</p>
          </div>
          <div>
            <p className="text-3xl font-bold">Free</p>
            <p className="text-sm text-muted-foreground">Shipping over $50</p>
          </div>
        </div>
      </section>
    </main>
  )
}
