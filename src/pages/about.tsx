import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { BatteryIcon, BuildingOffice2Icon, CameraIcon, ChartBarIcon, CheckCircleIcon, CheckIcon, CpuChipIcon, EyeIcon, LeafIcon, PhoneIcon, ShieldCheckIcon, ShoppingBagIcon, SparklesIcon, UsersIcon, VideoCameraIcon } from '@heroicons/react/24/outline'

export function About() {
  React.useEffect(() => { document.title = "About" }, [])

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 max-w-7xl">
      <div className="text-center mb-20 lg:mb-32">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent mb-6">About</h1>
        <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">Discover our mission to redefine mobile innovation through relentless engineering and sustainable manufacturing excellence.</p>
      </div>
      <div className="grid lg:grid-cols-3 gap-12 lg:gap-20 items-start">
        <div className="lg:col-span-2 space-y-16 lg:space-y-24">
          <section className="space-y-8">
            <Card className="overflow-hidden">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <SparklesIcon className="h-8 w-8 text-primary" />
                  <div>Our Mission</div>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">Founded in 2015, Phone pioneers the future of mobile technology by combining cutting-edge hardware with sustainable manufacturing practices. Our vertically integrated factories ensure every device meets our uncompromising standards for performance, durability, and environmental responsibility.</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <ChartBarIcon className="h-8 w-8 text-primary" />
                  <div>Innovation Timeline</div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 overflow-x-auto pb-4 -mb-4 scrollbar-thin scrollbar-thumb-muted">
                  <div className="flex flex-col items-center min-w-[120px] p-3 rounded-lg border hover:bg-accent transition-colors cursor-pointer" data-year={2015}>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                      <PhoneIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-xs font-mono text-center">2015</div>
                    <div className="text-xs text-muted-foreground text-center">Founded</div>
                  </div>
                  <div className="flex flex-col items-center min-w-[120px] p-3 rounded-lg border bg-accent/50 border-accent">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-2">
                      <CpuChipIcon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="text-xs font-mono text-center font-semibold">2020</div>
                    <div className="text-xs text-accent-foreground text-center">5nm Chip</div>
                  </div>
                  <div className="flex flex-col items-center min-w-[120px] p-3 rounded-lg border hover:bg-accent transition-colors cursor-pointer" data-year={2023}>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                      <CameraIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-xs font-mono text-center">2023</div>
                    <div className="text-xs text-muted-foreground text-center">200MP Cam</div>
                  </div>
                  <div className="flex flex-col items-center min-w-[120px] p-3 rounded-lg border hover:bg-accent transition-colors cursor-pointer" data-year={2024}>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                      <BatteryIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-xs font-mono text-center">2024</div>
                    <div className="text-xs text-muted-foreground text-center">6000mAh</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <BuildingOffice2Icon className="h-8 w-8 text-primary" />
                  <div>Factory Tour</div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-muted-foreground/5">
                    <VideoCameraIcon className="h-16 w-16 text-muted-foreground/50" />
                    <p className="ml-4 text-lg text-muted-foreground">Factory Tour Video</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <LeafIcon className="h-6 w-6 text-primary" />
                  <div>Sustainability</div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-baseline justify-between">
                    <div className="text-2xl font-mono font-bold text-primary">$state.recycledTons</div>
                    <span className="text-sm text-muted-foreground">tons recycled</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full transition-all duration-1000" style="[object Object]" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <UsersIcon className="h-6 w-6 text-primary" />
                  <div>Leadership Team</div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors cursor-pointer">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/ceo.jpg" alt="CEO" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">Dr. Jane Doe</div>
                    <div className="text-sm text-muted-foreground">CEO & Founder</div>
                  </div>
                  <a href="https://linkedin.com/in/janedoe" target="_blank" rel="noopener noreferrer" className="ml-auto">
                    <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors cursor-pointer">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/cto.jpg" alt="CTO" />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">Dr. Samir Malik</div>
                    <div className="text-sm text-muted-foreground">CTO</div>
                  </div>
                  <a href="https://linkedin.com/in/samir-malik" target="_blank" rel="noopener noreferrer" className="ml-auto">
                    <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </CardContent>
            </Card>
          </section>
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <CheckCircleIcon className="h-8 w-8 text-primary" />
                <div>Core Values</div>
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="group p-6 rounded-xl border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:bg-accent/50 cursor-pointer">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <CpuChipIcon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="group-hover:text-foreground transition-colors">
                    <h3 className="font-bold text-lg mb-1">Innovation</h3>
                    <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors">Pushing boundaries with bleeding-edge technology every year.</p>
                  </div>
                </div>
              </div>
              <div className="group p-6 rounded-xl border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:bg-accent/50 cursor-pointer">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <LeafIcon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="group-hover:text-foreground transition-colors">
                    <h3 className="font-bold text-lg mb-1">Sustainability</h3>
                    <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors">100% recycled materials in every Phone device.</p>
                  </div>
                </div>
              </div>
              <div className="group p-6 rounded-xl border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:bg-accent/50 cursor-pointer">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <ShieldCheckIcon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="group-hover:text-foreground transition-colors">
                    <h3 className="font-bold text-lg mb-1">Durability</h3>
                    <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors">Engineered to last 7+ years with full software support.</p>
                  </div>
                </div>
              </div>
              <div className="group p-6 rounded-xl border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:bg-accent/50 cursor-pointer">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <UsersIcon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="group-hover:text-foreground transition-colors">
                    <h3 className="font-bold text-lg mb-1">Craftsmanship</h3>
                    <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors">Hand-assembled with precision by expert engineers.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <aside className="lg:sticky lg:top-24 lg:h-fit space-y-8 lg:space-y-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Experience Innovation</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 space-y-4">
              <Button size="lg" className="w-full mb-4">
                <ShoppingBagIcon className="h-5 w-5 mr-2" />
                <div>Shop Our Innovation</div>
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                <EyeIcon className="h-5 w-5 mr-2" />
                <div>View Products</div>
              </Button>
              <Separator className="my-6" />
              <div className="text-xs text-muted-foreground space-y-1">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="h-4 w-4 p-0">
                    <CheckIcon className="h-3 w-3" />
                  </Badge>
                  <div>Free Shipping</div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="h-4 w-4 p-0">
                    <CheckIcon className="h-3 w-3" />
                  </Badge>
                  <div>24-Month Warranty</div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="h-4 w-4 p-0">
                    <CheckIcon className="h-3 w-3" />
                  </Badge>
                  <div>7 Years Updates</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  )
}
