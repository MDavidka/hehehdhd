import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function Home() {
  React.useEffect(() => { document.title = "Home" }, [])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Home</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">The landing page targets first-time visitors browsing for smartphones, showcasing the brand's latest phone models with high-impact visuals. It features a hero section with a flagship phone video background and 'Shop Now' CTA, a 4-column featured phones grid with prices and ratings, customer testimonial carousel with star ratings, quick specs comparison table for top 3 models, and a newsletter signup banner. The primary CTA scrolls to the featured phones or links to /phones for full catalog.</p>
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
              <CardTitle>Hero carousel rotating 3 flagship phones with buy buttons</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Hero carousel rotating 3 flagship phones with buy buttons</p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Featured phones grid with filter by price range</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Featured phones grid with filter by price range</p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Testimonial carousel with 8 rotating reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Testimonial carousel with 8 rotating reviews</p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Quick comparison table toggling phone specs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Quick comparison table toggling phone specs</p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Newsletter signup form with email validation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Newsletter signup form with email validation</p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Scroll-to-top floating button</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Scroll-to-top floating button</p>
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
