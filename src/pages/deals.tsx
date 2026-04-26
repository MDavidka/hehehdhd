import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { ArrowPathIcon, CheckIcon, ClockIcon, DevicePhoneMobileIcon, LightningBoltIcon, PhoneIcon, ShieldCheckIcon, ShoppingCartIcon, StarIcon, TruckIcon } from '@heroicons/react/24/outline'

export function Deals() {
  React.useEffect(() => { document.title = "Deals" }, [])
  const [tradeInModel, setTradeInModel] = React.useState('')
  const [condition, setCondition] = React.useState('')

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">Deals</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">Flash sales, trade-ins, refurbished phones & bundles. Save big before they're gone.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="w-full sm:w-auto">Claim This Deal</Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">View All Phones</Button>
        </div>
      </div>
      <Card className="overflow-hidden">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2">
            <LightningBoltIcon className="h-6 w-6" />
            <div>Flash Deals</div>
          </CardTitle>
          <CardDescription>Limited time offers - ends soon!</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Carousel opts="[object Object]" className="w-full">
            <CarouselContent className="-ml-1">
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <div className="aspect-[4/3] bg-muted overflow-hidden">
                      <div className="p-6 flex flex-col h-full">
                        <div className="flex items-center gap-2 mb-4">
                          <PhoneIcon className="h-8 w-8" />
                          <Badge variant="secondary">iPhone 15 Pro</Badge>
                        </div>
                        <div className="text-2xl font-bold mb-2">$899</div>
                        <div className="text-3xl font-bold text-primary mb-4">$1,099</div>
                        <div className="flex items-center gap-2 mb-6">
                          <div className="flex -m-1">
                            <StarIcon className="h-5 w-5 text-yellow-400 fill-current" />
                            <StarIcon className="h-5 w-5 text-yellow-400 fill-current" />
                            <StarIcon className="h-5 w-5 text-yellow-400 fill-current" />
                            <StarIcon className="h-5 w-5 text-yellow-400 fill-current" />
                            <StarIcon className="h-5 w-5 text-yellow-400 fill-current" />
                          </div>
                          <span className="text-sm text-muted-foreground">(127)</span>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                          <ClockIcon className="h-4 w-4" />
                          <span className="text-sm font-mono">$state.timer1</span>
                        </div>
                        <Badge variant="destructive">Limited Stock</Badge>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <div className="aspect-[4/3] bg-muted overflow-hidden">
                      <div className="p-6 flex flex-col h-full">
                        <div className="flex items-center gap-2 mb-4">
                          <DevicePhoneMobileIcon className="h-8 w-8" />
                          <Badge variant="secondary">Galaxy S24 Ultra</Badge>
                        </div>
                        <div className="text-2xl font-bold mb-2">$1,099</div>
                        <div className="text-3xl font-bold text-primary mb-4 line-through">$1,399</div>
                        <div className="flex items-center gap-2 mb-6">
                          <div className="flex -m-1">
                            <StarIcon className="h-5 w-5 text-yellow-400 fill-current" />
                            <StarIcon className="h-5 w-5 text-yellow-400 fill-current" />
                            <StarIcon className="h-5 w-5 text-yellow-400 fill-current" />
                            <StarIcon className="h-5 w-5 text-yellow-400 fill-current" />
                            <StarIcon className="h-5 w-5 text-yellow-400 fill-current" />
                          </div>
                          <span className="text-sm text-muted-foreground">(89)</span>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                          <ClockIcon className="h-4 w-4" />
                          <span className="text-sm font-mono">$state.timer2</span>
                        </div>
                        <Badge variant="destructive">Limited Stock</Badge>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="h-10 w-10" />
            <CarouselNext className="h-10 w-10" />
          </Carousel>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ArrowPathIcon className="h-5 w-5" />
              <div>Trade-In Program</div>
            </CardTitle>
            <CardDescription>Get instant credit for your old phone</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Select your phone model</Label>
              <Select onValueChange={setTradeInModel} value={tradeInModel}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose phone model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="iphone-14">iPhone 14</SelectItem>
                  <SelectItem value="iphone-13">iPhone 13</SelectItem>
                  <SelectItem value="galaxy-s23">Galaxy S23</SelectItem>
                  <SelectItem value="pixel-8">Pixel 8</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Condition</Label>
              <ToggleGroup type="single" value={condition} onValueChange={setCondition}>
                <ToggleGroupItem value="excellent" className="flex-1">Excellent</ToggleGroupItem>
                <ToggleGroupItem value="good" className="flex-1">Good</ToggleGroupItem>
                <ToggleGroupItem value="fair" className="flex-1">Fair</ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div className="p-4 bg-accent rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">$state.tradeInValue</div>
              <p className="text-sm text-muted-foreground">Estimated trade-in value</p>
            </div>
            <Button className="w-full">Apply Trade-In Credit</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheckIcon className="h-5 w-5" />
              <div>Refurbished Phones</div>
            </CardTitle>
            <CardDescription>Certified pre-owned with full warranty</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <Badge variant="secondary">Excellent</Badge>
              <span className="text-sm text-muted-foreground ml-auto">iPhone 14 Pro - $699</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full" />
              <Badge variant="outline">Good</Badge>
              <span className="text-sm text-muted-foreground ml-auto">Galaxy S23 - $499</span>
            </div>
            <Separator />
            <div className="pt-4 space-y-1 text-xs">
              <div className="flex items-center gap-1">
                <CheckIcon className="h-3 w-3" />
                <div>1 Year Warranty</div>
              </div>
              <div className="flex items-center gap-1">
                <CheckIcon className="h-3 w-3" />
                <div>{"Battery Health > 85%"}</div>
              </div>
              <div className="flex items-center gap-1">
                <CheckIcon className="h-3 w-3" />
                <div>30 Day Returns</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>iPhone 15 + Case + Charger</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">iPhone 15 Pro Max</Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">Clear Case</Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">20W Charger</Badge>
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold">$1,149</div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-primary">Save $150</span>
                <span className="text-sm text-muted-foreground line-through">$1,299</span>
              </div>
            </div>
            <Button className="w-full">
              <ShoppingCartIcon className="mr-2 h-4 w-4" />
              <div>Add Bundle</div>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Galaxy S24 + Bundle</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Galaxy S24 Ultra</Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">Silicone Case</Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">45W Charger</Badge>
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold">$1,249</div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-primary">Save $200</span>
                <span className="text-sm text-muted-foreground line-through">$1,449</span>
              </div>
            </div>
            <Button className="w-full" variant="outline">
              <ShoppingCartIcon className="mr-2 h-4 w-4" />
              <div>Add Bundle</div>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Clearance 50%+ OFF</CardTitle>
            <CardDescription>Final sale - no returns</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 p-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-destructive mb-2">🔥 60% OFF</div>
              <div className="space-y-1">
                <div className="text-xl font-bold">iPhone 13</div>
                <div className="text-2xl font-bold text-primary">$399</div>
              </div>
            </div>
            <Button variant="destructive" className="w-full">Grab Now - Limited!</Button>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardContent className="py-12">
          <div className="max-w-md mx-auto text-center space-y-4">
            <div className="mx-auto h-16 w-16 bg-primary/10 p-4 rounded-2xl">
              <TruckIcon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Ready to upgrade?</h3>
            <p className="text-muted-foreground">Claim these deals before they're gone. Free shipping on orders over $50.</p>
            <Button size="lg" className="w-full">Shop All Deals</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
