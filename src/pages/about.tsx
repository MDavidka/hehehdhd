import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import { DevicePhoneMobileIcon, HomeIcon, MagnifyingGlassIcon, ShoppingBagIcon, StarIcon } from '@heroicons/react/24/outline'

export function About() {
  React.useEffect(() => { document.title = "About" }, [])

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12 items-start">
        <article className="lg:col-span-8 space-y-12">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight">About Phone</h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">Over 10 years delivering premium smartphones with nationwide shipping and a 100% satisfaction guarantee. Authorized reseller for all major brands.</p>
          </div>
          <Card className="overflow-hidden">
            <CardHeader >
              <CardTitle >Our Journey</CardTitle>
              <CardDescription >Key milestones that built Phone into your trusted smartphone destination</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-border">
                <div className="p-8 flex items-center gap-6 hover:bg-muted/50 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <HomeIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div >
                    <h3 className="font-semibold text-lg leading-tight">2014 - Founded</h3>
                    <p className="text-sm text-muted-foreground">Started as a small phone repair shop in downtown.</p>
                  </div>
                  <div className="ml-auto text-xs font-mono text-muted-foreground">Year 1</div>
                </div>
                <div className="p-8 flex items-center gap-6 hover:bg-muted/50 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <ShoppingBagIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div >
                    <h3 className="font-semibold text-lg leading-tight">2018 - First Store</h3>
                    <p className="text-sm text-muted-foreground">Opened flagship retail location and began online sales.</p>
                  </div>
                  <div className="ml-auto text-xs font-mono text-muted-foreground">Year 5</div>
                </div>
                <div className="p-8 flex items-center gap-6 hover:bg-muted/50 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <StarIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div >
                    <h3 className="font-semibold text-lg leading-tight">2023 - 100K Orders</h3>
                    <p className="text-sm text-muted-foreground">Reached 100,000 happy customers nationwide.</p>
                  </div>
                  <div className="ml-auto text-xs font-mono text-muted-foreground">Today</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card >
            <CardHeader>
              <CardTitle >Why Choose Phone?</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div >
                <div className="text-3xl font-bold text-primary">$state.ordersCount</div>
                <p className="text-muted-foreground text-sm mt-1">Orders Delivered</p>
              </div>
              <div >
                <div className="text-3xl font-bold text-primary">99.8%</div>
                <p className="text-muted-foreground text-sm mt-1">Customer Satisfaction</p>
              </div>
            </CardContent>
          </Card>
        </article>
        <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
          <Card >
            <CardHeader>
              <CardTitle >Our Team</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors">
                <Avatar className="flex-shrink-0">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <div >
                  <div className="font-medium">Sarah M.</div>
                  <div className="text-xs text-muted-foreground">iPhone Expert</div>
                </div>
                <Badge variant="secondary">Lead</Badge>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors">
                <Avatar className="flex-shrink-0">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JM</AvatarFallback>
                </Avatar>
                <div >
                  <div className="font-medium">Jamal R.</div>
                  <div className="text-xs text-muted-foreground">Android Specialist</div>
                </div>
                <Badge variant="outline">Support</Badge>
              </div>
            </CardContent>
          </Card>
          <Card >
            <CardHeader>
              <CardTitle >Store Locations</CardTitle>
              <CardDescription >Find us near you</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div >
                <div className="font-medium">Downtown Flagship</div>
                <div className="text-xs text-muted-foreground">123 Main St, City Center</div>
              </div>
              <div >
                <div className="font-medium">Westside Mall</div>
                <div className="text-xs text-muted-foreground">456 Oak Ave, West Mall</div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                <DevicePhoneMobileIcon className="h-4 w-4 mr-2" />
                <div>Get Directions</div>
              </Button>
            </CardContent>
          </Card>
          <div className="space-y-3">
            <div className="flex items-center gap-2 p-4 rounded-xl bg-muted/50">
              <Badge variant="secondary">Apple Authorized</Badge>
              <div className="h-3 w-3 bg-green-500 rounded-full" />
            </div>
            <div className="flex items-center gap-2 p-4 rounded-xl bg-muted/50">
              <Badge variant="secondary">Samsung Partner</Badge>
              <div className="h-3 w-3 bg-green-500 rounded-full" />
            </div>
            <div className="flex items-center gap-2 p-4 rounded-xl bg-muted/50">
              <Badge variant="secondary">Google Certified</Badge>
              <div className="h-3 w-3 bg-green-500 rounded-full" />
            </div>
          </div>
          <Button size="lg" className="w-full">
            <MagnifyingGlassIcon className="h-4 w-4 mr-2" />
            <div>Browse Catalog</div>
          </Button>
          <Link className="block text-xs text-muted-foreground hover:text-foreground font-medium text-center underline underline-offset-2" to="/products">View all products →</Link>
        </aside>
      </div>
    </section>
  )
}
