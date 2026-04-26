import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function Products() {
  React.useEffect(() => { document.title = "Products" }, [])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Products</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">Main product catalog page for shoppers ready to browse the full inventory of smartphones, tablets, and accessories. Displays all phones in a sortable grid with filters for brand (Apple, Samsung, Google), price range, storage capacity, and 5G support; each product card shows specs summary, current price with strikethrough original, and stock status badges. Includes a comparison table toggle for up to 4 selected phones showing side-by-side specs. Primary CTA adds selected phones to cart and directs to /cart.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button size="lg">
            <span>Get started</span>
          </Button>
          <Button size="lg" variant="outline">
            <span>Learn more</span>
          </Button>
        </div>
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 border-t border-border">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">What you'll find here</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Multi-select filter sidebar with brand logos and price sliders</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Multi-select filter sidebar with brand logos and price sliders</p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Sort dropdown (price low-high, popularity, newest, rating)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Sort dropdown (price low-high, popularity, newest, rating)</p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Product comparison table modal comparing CPU, camera, battery</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Product comparison table modal comparing CPU, camera, battery</p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Stock status badges (In Stock, Low Stock, Out of Stock)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Stock status badges (In Stock, Low Stock, Out of Stock)</p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Pagination with 24 items per page and infinite scroll option</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Pagination with 24 items per page and infinite scroll option</p>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <Card className="p-8 md:p-12 text-center">
          <CardTitle className="text-2xl md:text-3xl">Ready to start?</CardTitle>
          <p className="mt-3 text-muted-foreground">Reach out and we'll get back to you.</p>
          <div className="mt-6 flex justify-center">
            <Button size="lg">
              <span>Contact us</span>
            </Button>
          </div>
        </Card>
      </section>
    </main>
  )
}
