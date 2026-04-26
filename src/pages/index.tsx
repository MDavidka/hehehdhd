import React from 'react'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Link } from 'react-router-dom'
import { ArrowRightIcon, BellIcon, ChevronLeftIcon, ChevronRightIcon, ClockIcon, EyeIcon, PhoneIcon, ShoppingCartIcon, SmartphoneIcon, StarIcon } from '@heroicons/react/24/outline'

export function Home() {
  React.useEffect(() => { document.title = "Home" }, [])

  return (
    <div>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 bg-gradient-to-br from-background to-muted/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-6">Home</h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 lg:mb-12 max-w-lg leading-relaxed">Discover the latest smartphones from Apple, Samsung, Google Pixel and more. Premium devices at unbeatable prices.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link className="group" to="/phones">
                <Button size="lg" className="px-8 h-14 text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 group-hover:-translate-y-0.5">Shop Latest Phones</Button>
              </Link>
              <Button variant="outline" size="lg" className="px-8 h-14 text-lg font-semibold border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <span>View Deals</span>
                <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              <AspectRatio ratio={1} className="bg-gradient-to-br from-primary/10 to-secondary shadow-2xl rounded-2xl overflow-hidden">
                <div className="p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-2xl mb-4 flex items-center justify-center">
                    <PhoneIcon className="h-10 w-10 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">iPhone 16 Pro</div>
                  <div className="text-sm text-muted-foreground font-mono">$999</div>
                </div>
              </AspectRatio>
              <div className="space-y-4">
                <AspectRatio ratio={1.2} className="bg-gradient-to-br from-secondary to-muted shadow-xl rounded-xl overflow-hidden" />
                <div className="h-16 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-xl shadow-md" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Featured Products</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Latest iPhones, Samsung flagships, and Google Pixels. Swipe to explore our top picks.</p>
        </div>
        <Carousel opts="[object Object]" className="w-full max-w-6xl mx-auto">
          <CarouselContent className="-ml-2 md:-ml-4 lg:-ml-6">
            <CarouselItem className="pl-2 md:pl-4 lg:pl-6 md:basis-1/2 lg:basis-1/3">
              <Card className="shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <AspectRatio ratio={1} className="bg-gradient-to-br from-muted to-muted/50 rounded-xl overflow-hidden">
                    <div className="p-4 flex items-center justify-center">
                      <PhoneIcon className="h-16 w-16 text-primary opacity-80" />
                    </div>
                  </AspectRatio>
                  <CardTitle className="text-xl font-bold leading-tight">iPhone 16 Pro Max</CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400 text-sm">
                      <StarIcon className="h-4 w-4 fill-current" />
                      <StarIcon className="h-4 w-4 fill-current" />
                      <StarIcon className="h-4 w-4 fill-current" />
                      <StarIcon className="h-4 w-4 fill-current" />
                      <StarIcon className="h-4 w-4" />
                    </div>
                    <span className="text-sm text-muted-foreground font-mono">(4.9)</span>
                  </div>
                </CardHeader>
                <CardContent className="pb-6">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary font-mono">$1,199</div>
                    <div className="text-sm text-muted-foreground line-through">$1,399</div>
                  </div>
                </CardContent>
                <CardFooter className="pt-0 pb-6 px-6 flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <EyeIcon className="h-4 w-4 mr-2" />
                    <span>View</span>
                  </Button>
                  <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90 shadow-lg">
                    <ShoppingCartIcon className="h-4 w-4 mr-2" />
                    <span>Add to Cart</span>
                  </Button>
                </CardFooter>
              </Card>
            </CarouselItem>
            <CarouselItem className="pl-2 md:pl-4 lg:pl-6 md:basis-1/2 lg:basis-1/3">
              <Card className="shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 bg-gradient-to-br from-secondary to-muted">
                <CardHeader>
                  <CardTitle>Galaxy S25 Ultra</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary font-mono">$1,299</div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="pl-2 md:pl-4 lg:pl-6 md:basis-1/2 lg:basis-1/3">
              <Card className="shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 bg-card">
                <CardHeader>
                  <CardTitle>Pixel 9 Pro XL</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary font-mono">$999</div>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="h-14 w-14 rounded-full bg-primary/90 text-primary-foreground shadow-2xl hover:bg-primary absolute -left-4 top-1/2 -translate-y-1/2">
            <ChevronLeftIcon className="h-6 w-6" />
          </CarouselPrevious>
          <CarouselNext className="h-14 w-14 rounded-full bg-primary/90 text-primary-foreground shadow-2xl hover:bg-primary absolute -right-4 top-1/2 -translate-y-1/2">
            <ChevronRightIcon className="h-6 w-6" />
          </CarouselNext>
        </Carousel>
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 bg-muted/30">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Best Sellers</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Our most popular phones based on sales and customer ratings.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <Card className="group hover:shadow-2xl transition-all duration-500 border-0 hover:-translate-y-2">
            <CardHeader className="pb-4">
              <AspectRatio ratio={1} className="group-hover:scale-105 transition-transform duration-500 rounded-xl overflow-hidden bg-gradient-to-br from-muted to-muted/50">
                <div className="p-6 flex items-center justify-center">
                  <SmartphoneIcon className="h-12 w-12 text-primary opacity-80 group-hover:opacity-100" />
                </div>
              </AspectRatio>
              <CardTitle className="text-lg font-bold">iPhone 15 Pro</CardTitle>
              <div className="flex items-center gap-1.5 mb-2">
                <div className="flex text-yellow-400">
                  <StarIcon className="h-4 w-4 fill-current" />
                  <StarIcon className="h-4 w-4 fill-current" />
                  <StarIcon className="h-4 w-4 fill-current" />
                  <StarIcon className="h-4 w-4 fill-current" />
                  <StarIcon className="h-4 w-4 fill-current" />
                </div>
                <Badge variant="secondary" className="text-xs px-2 py-0.5 ml-1">5.0</Badge>
              </div>
            </CardHeader>
            <CardContent className="pb-6">
              <div className="text-2xl font-bold text-primary font-mono mb-2">$899</div>
              <div className="flex items-center gap-2 text-sm">
                <Badge variant="outline" className="text-xs">In Stock</Badge>
                <span className="text-muted-foreground text-xs">247 sold</span>
              </div>
            </CardContent>
            <CardFooter className="pt-0 pb-6 px-6">
              <Button size="sm" className="w-full group-hover:bg-primary/90">
                <ShoppingCartIcon className="h-4 w-4 mr-2" />
                <span>Quick Add</span>
              </Button>
            </CardFooter>
          </Card>
          <Card className="group hover:shadow-2xl transition-all duration-500 border-0 hover:-translate-y-2">
            <CardHeader>
              <CardTitle>Galaxy S24</CardTitle>
              <Badge variant="secondary">4.9</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary font-mono">$799</div>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-2xl transition-all duration-500 border-0 hover:-translate-y-2">
            <CardHeader>
              <CardTitle>Pixel 8 Pro</CardTitle>
              <Badge variant="secondary">4.8</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary font-mono">$899</div>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-2xl transition-all duration-500 border-0 hover:-translate-y-2">
            <CardHeader>
              <CardTitle>iPhone 14 Pro</CardTitle>
              <Badge variant="secondary">4.9</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary font-mono">$749</div>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Trusted by thousands of happy phone shoppers.</p>
        </div>
        <Carousel opts="[object Object]" className="w-full max-w-4xl mx-auto">
          <CarouselContent className="-ml-4 lg:-ml-6">
            <CarouselItem className="pl-4 lg:pl-6 basis-full lg:basis-1/2">
              <Card className="shadow-xl border-0 max-w-md mx-auto">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="/placeholder-user.jpg" alt="User" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-lg">Jessica Davis</h4>
                      <p className="text-sm text-muted-foreground">iPhone 15 Pro Max</p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400 mb-4">
                    <StarIcon className="h-5 w-5 fill-current" />
                    <StarIcon className="h-5 w-5 fill-current" />
                    <StarIcon className="h-5 w-5 fill-current" />
                    <StarIcon className="h-5 w-5 fill-current" />
                    <StarIcon className="h-5 w-5 fill-current" />
                  </div>
                  <p className="italic text-muted-foreground leading-relaxed">"Best phone store experience ever! Lightning fast shipping and the phone was brand new. Already recommending to friends."</p>
                </CardHeader>
              </Card>
            </CarouselItem>
            <CarouselItem className="pl-4 lg:pl-6 basis-full lg:basis-1/2">
              <Card className="shadow-xl border-0 max-w-md mx-auto">
                <CardHeader>
                  <div className="flex items-start gap-4 mb-6">
                    <Avatar>
                      <AvatarFallback>MK</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4>Mike Kim</h4>
                      <p className="text-sm text-muted-foreground">Galaxy S24 Ultra</p>
                    </div>
                  </div>
                  <p className="italic text-muted-foreground leading-relaxed">"Incredible value for premium devices. Trade-in process was seamless and got great credit toward my new Galaxy."</p>
                </CardHeader>
              </Card>
            </CarouselItem>
            <CarouselItem className="pl-4 lg:pl-6 basis-full lg:basis-1/2">
              <Card className="shadow-xl border-0 max-w-md mx-auto">
                <CardHeader>
                  <div className="flex items-start gap-4 mb-6">
                    <Avatar>
                      <AvatarFallback>SL</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4>Sarah Lopez</h4>
                      <p className="text-sm text-muted-foreground">Pixel 8 Pro</p>
                    </div>
                  </div>
                  <p className="italic text-muted-foreground leading-relaxed">"Love my Pixel! The camera is unreal and customer service answered all my questions quickly. 10/10"</p>
                </CardHeader>
              </Card>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-destructive/10 border border-destructive/20 rounded-full px-6 py-2 mb-8">
            <ClockIcon className="h-5 w-5 text-destructive" />
            <span className="text-lg font-semibold text-destructive">Flash Sale</span>
            <Separator orientation="vertical" className="h-6 mx-3" />
            <div className="text-sm text-muted-foreground font-mono">
              <span className="text-destructive font-bold text-lg mr-1">03:47:22</span>
              <span>remaining</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Get Deal Alerts</h2>
          <p className="text-xl text-muted-foreground mb-12 lg:mb-16 max-w-lg mx-auto leading-relaxed">Never miss a flash sale or exclusive bundle. Get notified about the best phone deals first.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1">
              <Input type="email" placeholder="Enter your email" className="h-14 rounded-xl px-6 text-lg font-medium shadow-lg" />
            </div>
            <Button type="submit" size="lg" className="h-14 px-10 text-lg font-semibold shadow-2xl whitespace-nowrap">
              <BellIcon className="h-5 w-5 mr-2" />
              <span>Get Alerts</span>
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-4 max-w-md mx-auto">No spam, ever. Unsubscribe anytime. See our privacy policy.</p>
        </div>
      </section>
    </div>
  )
}
