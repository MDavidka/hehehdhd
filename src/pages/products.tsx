import React from 'react'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export function Products() {
  React.useEffect(() => { document.title = "Products" }, [])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Products</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">This catalog page serves shoppers ready to browse the full inventory, displaying all available phones categorized by series (flagship, mid-range, budget). It includes filterable product cards with detailed specs (screen size, RAM, camera MP, battery life), sort options (price low-high, popularity), search bar by model name, and stock availability badges. The primary CTA adds selected phones to cart and navigates to checkout flow.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button size="lg">
            <span>Add to Cart</span>
          </Button>
          <Button size="lg" variant="outline">
            <span>Compare Models</span>
          </Button>
        </div>
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge>
            <span>All</span>
          </Badge>
          <Badge variant="outline">
            <span>New</span>
          </Badge>
          <Badge variant="outline">
            <span>Popular</span>
          </Badge>
          <Badge variant="outline">
            <span>Sale</span>
          </Badge>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-4">
            <AspectRatio ratio={1} className="rounded-md bg-muted" />
            <h3 className="mt-3 text-base font-semibold">Faceted filters for price range, storage, color, 5G support</h3>
            <p className="mt-1 text-xs text-muted-foreground">Faceted filters for price range, storage, color, 5G support</p>
            <Button size="sm" className="mt-3 w-full">
              <span>View</span>
            </Button>
          </Card>
          <Card className="p-4">
            <AspectRatio ratio={1} className="rounded-md bg-muted" />
            <h3 className="mt-3 text-base font-semibold">Product cards expandable to full specs modal</h3>
            <p className="mt-1 text-xs text-muted-foreground">Product cards expandable to full specs modal</p>
            <Button size="sm" className="mt-3 w-full">
              <span>View</span>
            </Button>
          </Card>
          <Card className="p-4">
            <AspectRatio ratio={1} className="rounded-md bg-muted" />
            <h3 className="mt-3 text-base font-semibold">Live search filters results as user types model keywords</h3>
            <p className="mt-1 text-xs text-muted-foreground">Live search filters results as user types model keywords</p>
            <Button size="sm" className="mt-3 w-full">
              <span>View</span>
            </Button>
          </Card>
          <Card className="p-4">
            <AspectRatio ratio={1} className="rounded-md bg-muted" />
            <h3 className="mt-3 text-base font-semibold">Sort dropdown for price, rating, newest arrivals</h3>
            <p className="mt-1 text-xs text-muted-foreground">Sort dropdown for price, rating, newest arrivals</p>
            <Button size="sm" className="mt-3 w-full">
              <span>View</span>
            </Button>
          </Card>
          <Card className="p-4">
            <AspectRatio ratio={1} className="rounded-md bg-muted" />
            <h3 className="mt-3 text-base font-semibold">'Low Stock' badges and out-of-stock notifications</h3>
            <p className="mt-1 text-xs text-muted-foreground">'Low Stock' badges and out-of-stock notifications</p>
            <Button size="sm" className="mt-3 w-full">
              <span>View</span>
            </Button>
          </Card>
        </div>
      </section>
    </main>
  )
}
