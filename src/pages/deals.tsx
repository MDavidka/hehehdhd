import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Slider } from '@/components/ui/slider'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { ClockIcon, LightningBoltIcon, ShieldCheckIcon, SparklesIcon } from '@heroicons/react/24/outline'

export function Deals() {
  React.useEffect(() => { document.title = "Deals" }, [])

  return (
    <div>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="text-center mb-16 lg:mb-24">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">Deals</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Flash sales, bundles, refurbished phones & trade-in offers. Limited time only.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg">Claim This Deal</Button>
            <Button variant="outline" size="lg">Calculate Trade-in</Button>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-6 lg:gap-8 h-[70vh] lg:h-[80vh]">
          <Card className="lg:col-span-1 lg:row-span-2 bg-gradient-to-br from-primary/10 to-primary/20 border-primary/30">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2">
                <LightningBoltIcon className="h-6 w-6" />
                <div>FLASH SALE</div>
              </CardTitle>
              <Badge variant="destructive">48% OFF</Badge>
            </CardHeader>
            <CardContent className="p-0">
              <div className="p-8 text-center">
                <h3 className="text-3xl font-bold mb-2">Flagship Pro Max</h3>
              </div>
              <p className="text-6xl lg:text-7xl font-mono font-black mb-8 bg-gradient-to-r from-primary to-destructive bg-clip-text text-transparent">$599</p>
              <p className="text-muted-foreground mb-12 text-lg">Was $1149 • Save $550</p>
              <div className="flex items-center justify-center gap-4 mb-8 text-sm font-mono">
                <div className="flex items-center gap-1">
                  <ClockIcon className="h-4 w-4" />
                  <div>00:47:23</div>
                </div>
                <Badge variant="destructive">Limited Quantity</Badge>
              </div>
              <Button size="lg" className="w-full">Claim This Deal</Button>
            </CardContent>
          </Card>
          <Card className="lg:col-span-1 overflow-hidden">
            <CardHeader className="pb-3">
              <CardTitle>Bundle & Save</CardTitle>
              <CardDescription>Pair with accessories</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 p-6">
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <Checkbox />
                  <span>Premium Case</span>
                  <Badge variant="outline">+$29</Badge>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <Checkbox />
                  <span>65W Fast Charger</span>
                  <Badge variant="outline">+$49</Badge>
                </label>
              </div>
              <Separator />
              <div className="text-right pt-2">
                <p className="text-2xl font-bold">Save $80</p>
              </div>
              <Button className="w-full mt-4" variant="secondary">Add Bundle to Cart</Button>
            </CardContent>
          </Card>
          <Card className="lg:col-span-1">
            <CardHeader className="pb-3">
              <CardTitle>Trade-in Calculator</CardTitle>
              <CardDescription>Instant value estimate</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select your old phone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="iphone-13">iPhone 13</SelectItem>
                  <SelectItem value="iphone-12">iPhone 12</SelectItem>
                  <SelectItem value="galaxy-s22">Galaxy S22</SelectItem>
                  <SelectItem value="pixel-6">Pixel 6</SelectItem>
                </SelectContent>
              </Select>
              <Slider defaultValue={80} max={100} step={5}>
                <div className="text-xs text-muted-foreground grid grid-cols-3 gap-2 mb-2">
                  <div>Poor</div>
                  <div>Good</div>
                  <div>Like New</div>
                </div>
              </Slider>
              <div className="text-center p-4 bg-accent rounded-lg">
                <p className="text-2xl font-bold">$handler.tradeInValue</p>
              </div>
              <Button className="w-full" variant="outline">Get Trade-in Quote</Button>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex-row items-center justify-between pb-2">
              <CardTitle className="text-base">Refurbished Phones</CardTitle>
              <Badge variant="secondary">19 Items</Badge>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Model</TableHead>
                    <TableHead>Condition</TableHead>
                    <TableHead>Warranty</TableHead>
                    <TableHead>Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>iPhone 14 Pro</TableCell>
                    <TableCell>
                      <Badge>Excellent</Badge>
                    </TableCell>
                    <TableCell>1 Year</TableCell>
                    <TableCell className="font-bold">$799</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Galaxy S23</TableCell>
                    <TableCell>
                      <Badge>Very Good</Badge>
                    </TableCell>
                    <TableCell>6 Months</TableCell>
                    <TableCell className="font-bold">$649</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Today's Top Deals</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <span>Wireless Earbuds</span>
                <div className="text-right">
                  <div>$99</div>
                  <div className="text-sm line-through text-muted-foreground">$149</div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <span>Screen Protector 3-Pack</span>
                <div className="text-right">
                  <div>$19</div>
                  <div className="text-sm line-through text-muted-foreground">$29</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="flex items-start gap-3 p-3 bg-muted rounded-lg cursor-pointer hover:bg-accent">
                <SparklesIcon className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>How trade-in works</div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-muted rounded-lg cursor-pointer hover:bg-accent">
                <ShieldCheckIcon className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>Refurbished warranty</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Upgrade?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Thousands of customers saved hundreds with our deals this week.</p>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
            <Button size="lg" className="w-full lg:w-auto order-2 lg:order-1">Claim This Deal</Button>
            <Button variant="outline" size="lg" className="w-full lg:w-auto order-1 lg:order-2">Calculate Trade-in</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
