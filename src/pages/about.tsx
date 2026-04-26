import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import { Link } from 'react-router-dom'
import { CheckCircleIcon, StarIcon, UserIcon } from '@heroicons/react/24/outline'

export function About() {
  React.useEffect(() => { document.title = "About" }, [])
  const [timelineValue, setTimelineValue] = React.useState('')
  const [activePolicy, setActivePolicy] = React.useState(false)

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-start">
        <article className="max-w-3xl space-y-8 lg:pr-12">
          <Card>
            <CardHeader>
              <CardTitle>About</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">For 5 years, we've been your trusted partner in premium smartphones. As authorized distributors for Apple and Samsung, we bring you genuine devices with full manufacturer warranties and expert support.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="text-center p-6">
                  <CardContent className="space-y-2">
                    <div className="text-3xl font-bold text-primary">$state.rating</div>
                    <p className="text-sm text-muted-foreground">4.8/5 from 12K reviews</p>
                    <div className="flex justify-center gap-1">
                      <StarIcon className="h-4 w-4 text-primary fill-current" />
                      <StarIcon className="h-4 w-4 text-primary fill-current" />
                      <StarIcon className="h-4 w-4 text-primary fill-current" />
                      <StarIcon className="h-4 w-4 text-primary fill-current" />
                      <StarIcon className="h-4 w-4 text-primary fill-current" />
                    </div>
                  </CardContent>
                </Card>
                <Card className="p-6">
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="h-5 w-5 text-primary" />
                      <div>Apple Authorized</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="h-5 w-5 text-primary" />
                      <div>Samsung Distributor</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Our Journey</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Slider value={timelineValue} onValueChange={setTimelineValue} max={4} step={1} orientation="horizontal" className="w-full" />
                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                      <div>2019</div>
                      <div>2020</div>
                      <div>2022</div>
                      <div>2023</div>
                      <div>2024</div>
                    </div>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Founded</h4>
                        <p className="text-sm text-muted-foreground">Started as local repair shop</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Apple Partnership</h4>
                        <p className="text-sm text-muted-foreground">Became authorized reseller</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Warranty Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible defaultValue="terms" value={activePolicy} onValueChange={setActivePolicy}>
                    <AccordionItem value="terms">
                      <AccordionTrigger>Warranty Terms</AccordionTrigger>
                      <AccordionContent>1-year manufacturer warranty on all new devices. 90-day warranty on refurbished phones. Covers hardware defects only.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="returns">
                      <AccordionTrigger>Returns & Exchanges</AccordionTrigger>
                      <AccordionContent>14-day return policy for unopened devices. 7-day exchange window for defective units. Original packaging required.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="coverage">
                      <AccordionTrigger>What's Covered</AccordionTrigger>
                      <AccordionContent>{"Battery degradation >20%, display defects, motherboard failures. Does not cover water damage or user modifications."}</AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </article>
        <aside className="lg:sticky lg:top-8 lg:h-fit space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Meet Our Team</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 p-3 -m-3 rounded-lg hover:bg-accent transition-colors">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/team/john.jpg" alt="John Doe" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold">John Doe</p>
                  <p className="text-sm text-muted-foreground">Founder & CEO</p>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
                    <UserIcon className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="flex items-center gap-4 p-3 -m-3 rounded-lg hover:bg-accent transition-colors">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/team/sarah.jpg" alt="Sarah Kim" />
                  <AvatarFallback>SK</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold">Sarah Kim</p>
                  <p className="text-sm text-muted-foreground">Head of Sales</p>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://linkedin.com/in/sarahkim" target="_blank" rel="noopener noreferrer">
                    <UserIcon className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Store Locations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="h-48 bg-muted rounded-md flex items-center justify-center">
                <div className="text-muted-foreground text-sm text-center">Interactive Map
5 Pickup Points</div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span>Downtown</span>
                  <Badge variant="outline">Open</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Airport</span>
                  <Badge variant="outline">Open</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
          <Button size="lg" className="w-full">
            <Link to="/contact">Contact for Warranty or Visit</Link>
          </Button>
        </aside>
      </div>
    </div>
  )
}
