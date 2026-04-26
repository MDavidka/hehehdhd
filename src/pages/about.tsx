import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRightIcon, BuildingStorefrontIcon, CalendarIcon, ChartBarIcon, ClockIcon, MapIcon, MapPinIcon, ShieldCheckIcon, ShoppingBagIcon, StarIcon, UsersIcon } from '@heroicons/react/24/outline'

export function About() {
  React.useEffect(() => { document.title = "About" }, [])

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 max-w-7xl">
      <div className="text-center mb-20 lg:mb-32">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent mb-6">About Phone</h1>
        <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">Quality phones at fair prices since 2015. Trusted by 10K+ customers.</p>
      </div>
      <div className="grid lg:grid-cols-3 gap-12 lg:gap-20 items-start">
        <div className="lg:col-span-2 space-y-16">
          <Card className="overflow-hidden">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl flex items-center gap-2">
                <CalendarIcon className="h-6 w-6" />
                <div>Our Journey</div>
              </CardTitle>
              <CardDescription>Key milestones in our 9-year history</CardDescription>
            </CardHeader>
            <CardContent className="p-0 pt-6">
              <div className="space-y-6">
                <div className="flex gap-4 items-start p-4 rounded-xl bg-muted/50 group hover:bg-muted transition-all duration-300">
                  <div className="flex flex-col w-20 h-20 p-4 bg-primary/10 rounded-lg items-center justify-center group-hover:scale-110 transition-transform">
                    <CalendarIcon className="h-6 w-6 text-primary" />
                    <span className="text-xs font-mono text-primary mt-1">2015</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg mb-1">Founded</h3>
                    <p className="text-muted-foreground text-sm">Phone store established with first retail location</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-4 rounded-xl bg-muted/50 group hover:bg-muted transition-all duration-300">
                  <div className="flex flex-col w-20 h-20 p-4 bg-primary/10 rounded-lg items-center justify-center group-hover:scale-110 transition-transform">
                    <UsersIcon className="h-6 w-6 text-primary" />
                    <span className="text-xs font-mono text-primary mt-1">2018</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg mb-1">10K Customers</h3>
                    <p className="text-muted-foreground text-sm">Reached 10,000 happy customers milestone</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-4 rounded-xl bg-primary/5 border border-primary/20 group hover:border-primary/40 transition-all duration-300">
                  <div className="flex flex-col w-20 h-20 p-4 bg-primary rounded-lg items-center justify-center group-hover:scale-110 transition-transform">
                    <BuildingStorefrontIcon className="h-6 w-6 text-primary-foreground" />
                    <span className="text-xs font-mono text-primary-foreground mt-1 font-semibold">2024</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg mb-1">National Expansion</h3>
                    <p className="text-muted-foreground text-sm">Opened 5th location and launched online store</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <UsersIcon className="h-6 w-6" />
                <div>Meet Our Team</div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible defaultValue={1}>
                <AccordionItem value={1}>
                  <AccordionTrigger>
                    <div className="flex items-center gap-4">
                      <Avatar className="flex-shrink-0">
                        <AvatarImage src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"} />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">John Doe</p>
                        <p className="text-sm text-muted-foreground">CEO & Founder</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <p>15+ years in mobile retail. Passionate about bringing cutting-edge technology to everyday users at fair prices.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value={2}>
                  <AccordionTrigger>
                    <div className="flex items-center gap-4">
                      <Avatar className="flex-shrink-0">
                        <AvatarImage src={"https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1480&q=80"} />
                        <AvatarFallback>AS</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">Alice Smith</p>
                        <p className="text-sm text-muted-foreground">Head of Operations</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <p>Manages our 5 store locations and ensures every customer receives exceptional service.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value={3}>
                  <AccordionTrigger>
                    <div className="flex items-center gap-4">
                      <Avatar className="flex-shrink-0">
                        <AvatarImage src={"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1480&q=80"} />
                        <AvatarFallback>MB</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">Mike Brown</p>
                        <p className="text-sm text-muted-foreground">Procurement Director</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <p>Sources authentic devices directly from manufacturers ensuring quality and competitive pricing.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value={4}>
                  <AccordionTrigger>
                    <div className="flex items-center gap-4">
                      <Avatar className="flex-shrink-0">
                        <AvatarImage src={"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1480&q=80"} />
                        <AvatarFallback>SL</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">Sarah Lee</p>
                        <p className="text-sm text-muted-foreground">Customer Success</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <p>Leads our 98% customer satisfaction rating with personalized support and warranty services.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
        <div className="lg:sticky lg:top-24 lg:h-fit space-y-8 lg:space-y-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <MapPinIcon className="h-5 w-5" />
                <div>Find Us</div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapIcon className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Interactive Store Locator</p>
                  <p className="text-xs">5 locations nationwide</p>
                </div>
              </div>
              <div className="grid gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <MapPinIcon className="h-4 w-4" />
                  <div>Multiple locations</div>
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-4 w-4" />
                  <div>Mon-Sat 9AM-8PM</div>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                <MapIcon className="h-4 w-4 mr-2" />
                <div>View Locations</div>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <ChartBarIcon className="h-5 w-5" />
                <div>Our Stats</div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-sm font-mono text-muted-foreground">Phones Sold</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl lg:text-4xl font-mono font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">10K+</p>
                  </div>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-sm font-mono text-muted-foreground">Satisfaction</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl lg:text-4xl font-mono font-bold text-primary">98%</p>
                    <div className="flex gap-1 text-xs text-muted-foreground mt-1">
                      <StarIcon className="h-3 w-3 fill-primary stroke-primary" />
                      <StarIcon className="h-3 w-3 fill-primary stroke-primary" />
                      <StarIcon className="h-3 w-3 fill-primary stroke-primary" />
                      <StarIcon className="h-3 w-3 fill-primary stroke-primary" />
                      <StarIcon className="h-3 w-3 fill-primary stroke-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mt-24 pt-24 border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full mb-8">
            <ShieldCheckIcon className="h-5 w-5" />
            <span className="font-mono font-semibold">Trusted Store</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6">Ready to find your perfect phone?</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-lg mx-auto leading-relaxed">Join 10K+ customers who trust us for quality phones at fair prices.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 h-12 font-semibold shadow-lg">
              <ShoppingBagIcon className="h-5 w-5 mr-2" />
              <div>Shop Latest Phones</div>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 h-12 font-semibold">
              <ArrowRightIcon className="h-5 w-5 mr-2" />
              <div>View All Phones</div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
