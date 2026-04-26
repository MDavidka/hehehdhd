import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function TradeIn() {
  React.useEffect(() => { document.title = "Trade In" }, [])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Trade In</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">Conversion-focused page for customers upgrading phones, featuring an interactive trade-in value calculator based on device condition and model. Stepper form collects phone make/model/year/condition via dropdowns and sliders, displays instant quote, trade-in terms table, and next steps. Includes FAQ accordion on eligible devices. Primary CTA 'Get Quote' generates personalized offer and emails summary linking to /checkout.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button size="lg">
            <span>Shop now</span>
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
              <CardTitle>Trade-in calculator with real-time value updates</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Trade-in calculator with real-time value updates</p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Condition assessment slider (excellent/good/fair)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Condition assessment slider (excellent/good/fair)</p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Device lookup autocomplete by model</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Device lookup autocomplete by model</p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Trade-in value comparison table vs cash price</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Trade-in value comparison table vs cash price</p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Email quote button with PDF download</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Email quote button with PDF download</p>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 border-t border-border">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Why teams choose us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Trade-in calculator with real-time value updates</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Trade-in calculator with real-time value updates</p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Condition assessment slider (excellent/good/fair)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Condition assessment slider (excellent/good/fair)</p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Device lookup autocomplete by model</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Device lookup autocomplete by model</p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Trade-in value comparison table vs cash price</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Trade-in value comparison table vs cash price</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
