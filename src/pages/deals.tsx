import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import { ArrowRightIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { addDealOfTheDayToCart, claimDealOfTheDay, addBundleToCart, addSamsungToCart, addPixelToCart, addIphone14ToCart } from '@/lib/deals-logic'

export function Deals() {
  React.useEffect(() => { document.title = "Deals" }, [])
  const [bundleQuantity, setBundleQuantity] = React.useState(0)
  const [expiredDealsOpen, setExpiredDealsOpen] = React.useState(false)

  return (
    <div className="min-h-screen space-y-12 bg-background pb-12 pt-24">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Deals</h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-muted-foreground sm:mt-6">Flash sales, bundle offers, refurbished phones & clearance items with limited stock</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={addDealOfTheDayToCart}>
              <ShoppingBagIcon className="mr-2 h-5 w-5" />
              <div>Claim Deal of the Day</div>
            </Button>
            <Button variant="outline" size="lg" href="/cart">
              <ArrowRightIcon className="mr-2 h-5 w-5" />
              <div>View Cart</div>
            </Button>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card className="relative overflow-hidden">
            <CardHeader className="pb-4">
              <Badge variant="destructive">Deal of the Day</Badge>
              <CardTitle className="mt-2">iPhone 16 Pro Max</CardTitle>
              <CardDescription>Lightning flash sale - only 3 hours left!</CardDescription>
            </CardHeader>
            <div className="flex items-center justify-between pb-4">
              <div className="text-3xl font-bold">$999</div>
              <div className="text-sm text-destructive line-through">$1,299</div>
            </div>
            <div className="mb-6 flex h-2 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-full bg-destructive">$state.dealTimerProgress</div>
            </div>
            <div className="text-sm text-muted-foreground mb-4">$state.dealCountdown</div>
            <Button size="lg" className="w-full" onClick={claimDealOfTheDay}>
              <div>Add to Cart (8 left!)</div>
            </Button>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Bundle Savings Calculator</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">iPhone 16 + Case + Charger</label>
                <div className="flex items-center space-x-2">
                  <div className="text-2xl font-bold text-primary">$1,248</div>
                  <div className="text-sm text-destructive font-bold">Save $151 (11%)</div>
                </div>
              </div>
              <Slider value={bundleQuantity} onValueChange={setBundleQuantity} max={5} step={1} />
              <Button onClick={addBundleToCart}>Add Bundle to Cart</Button>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Badge />
                <div>Refurbished</div>
              </div>
              <CardTitle>Samsung Galaxy S24 Ultra</CardTitle>
              <Badge variant="secondary">Excellent</Badge>
            </CardHeader>
            <CardContent className="pb-0">
              <div className="space-y-1 text-sm">
                <div>
                  <span className="font-medium">$899</span>
                  <span className="ml-1 text-muted-foreground line-through">$1,199</span>
                </div>
                <div className="text-muted-foreground">$state.samsungCountdown</div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={addSamsungToCart}>Claim Deal (5 left!)</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Google Pixel 9 Pro</CardTitle>
              <Badge variant="secondary">Very Good</Badge>
            </CardHeader>
            <CardContent className="pb-0">
              <div className="space-y-1 text-sm">
                <div>
                  <span className="font-medium">$749</span>
                  <span className="ml-1 text-muted-foreground line-through">$999</span>
                </div>
                <div className="text-muted-foreground">$state.pixelCountdown</div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={addPixelToCart}>Claim Deal (12 left!)</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Clearance: iPhone 14</CardTitle>
              <Badge variant="outline">Final Stock</Badge>
            </CardHeader>
            <CardContent className="pb-0">
              <div className="space-y-1 text-sm">
                <div>
                  <span className="font-medium">$599</span>
                  <span className="ml-1 text-muted-foreground line-through">$799</span>
                </div>
                <div className="text-muted-foreground">$state.iphone14Countdown</div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="destructive" className="w-full" onClick={addIphone14ToCart}>Grab Last Units (3 left!)</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle>Recently Expired Deals</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="multiple" value={expiredDealsOpen}>
              <AccordionItem value="samsung-sale">
                <AccordionTrigger>Galaxy S23 Ultra Flash Sale - Ended 2 days ago</AccordionTrigger>
                <AccordionContent>Was $799 (originally $1,099) - 500 units sold out in 6 hours</AccordionContent>
              </AccordionItem>
              <AccordionItem value="iphone-bundle">
                <AccordionTrigger>iPhone 15 + AirPods Bundle - Ended yesterday</AccordionTrigger>
                <AccordionContent>Saved customers $199 - popular bundle with 320+ purchases</AccordionContent>
              </AccordionItem>
              <AccordionItem value="pixel-refurb">
                <AccordionTrigger>Refurbished Pixel 8 Pro - Ended 1 week ago</AccordionTrigger>
                <AccordionContent>Excellent condition units - all 150 sold at $549 each</AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
