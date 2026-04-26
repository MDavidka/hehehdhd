import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function TradeIn() {
  React.useEffect(() => { document.title = "Trade In" }, [])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Trade In</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">Dedicated page for the phone trade-in program, helping users calculate value for their old devices toward new purchases. Features a step-by-step trade-in wizard with device selection dropdown, condition assessment quiz (5 questions about scratches/battery/screen), instant quote calculator, shipping label generator, and trade-in FAQ accordion. Shows bonus credit table for popular trade-in models. Primary CTA submits quote request form linking back to /phones.</p>
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
              <CardTitle>Device selection autocomplete search</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Device selection autocomplete search</p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Condition quiz with 5 assessment questions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Condition quiz with 5 assessment questions</p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Real-time trade-in value calculator</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Real-time trade-in value calculator</p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Bonus credit table for popular models</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Bonus credit table for popular models</p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Shipping label PDF generator</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Shipping label PDF generator</p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Trade-in history table for returning users</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Trade-in history table for returning users</p>
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
