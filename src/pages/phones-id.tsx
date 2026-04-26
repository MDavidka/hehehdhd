import React from 'react'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export function PhoneDetails() {
  React.useEffect(() => { document.title = "Phone Details" }, [])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Phone Details</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">Individual product detail page for customers evaluating specific phones, showing high-res phone images gallery with zoom, detailed specs table (screen, camera, battery, processor), pricing with storage variant selector ($999/128GB vs $1099/256GB), customer reviews section with average rating and 5 latest reviews, and add-to-cart form with quantity selector. Targets decision-stage shoppers. Primary CTA adds phone to cart.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button size="lg">
            <span>Add to Cart</span>
          </Button>
          <Button size="lg" variant="outline">
            <span>Read Reviews</span>
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
            <h3 className="mt-3 text-base font-semibold">Image gallery carousel with thumbnails and lightbox zoom</h3>
            <p className="mt-1 text-xs text-muted-foreground">Image gallery carousel with thumbnails and lightbox zoom</p>
            <Button size="sm" className="mt-3 w-full">
              <span>View</span>
            </Button>
          </Card>
          <Card className="p-4">
            <AspectRatio ratio={1} className="rounded-md bg-muted" />
            <h3 className="mt-3 text-base font-semibold">Storage variant selector updating price dynamically</h3>
            <p className="mt-1 text-xs text-muted-foreground">Storage variant selector updating price dynamically</p>
            <Button size="sm" className="mt-3 w-full">
              <span>View</span>
            </Button>
          </Card>
          <Card className="p-4">
            <AspectRatio ratio={1} className="rounded-md bg-muted" />
            <h3 className="mt-3 text-base font-semibold">Detailed specs table with icons for camera, battery, RAM</h3>
            <p className="mt-1 text-xs text-muted-foreground">Detailed specs table with icons for camera, battery, RAM</p>
            <Button size="sm" className="mt-3 w-full">
              <span>View</span>
            </Button>
          </Card>
          <Card className="p-4">
            <AspectRatio ratio={1} className="rounded-md bg-muted" />
            <h3 className="mt-3 text-base font-semibold">Reviews section with star ratings and 'Write Review' form</h3>
            <p className="mt-1 text-xs text-muted-foreground">Reviews section with star ratings and 'Write Review' form</p>
            <Button size="sm" className="mt-3 w-full">
              <span>View</span>
            </Button>
          </Card>
          <Card className="p-4">
            <AspectRatio ratio={1} className="rounded-md bg-muted" />
            <h3 className="mt-3 text-base font-semibold">Quantity selector (1-5) with 'Add to Cart' button</h3>
            <p className="mt-1 text-xs text-muted-foreground">Quantity selector (1-5) with 'Add to Cart' button</p>
            <Button size="sm" className="mt-3 w-full">
              <span>View</span>
            </Button>
          </Card>
        </div>
      </section>
    </main>
  )
}
