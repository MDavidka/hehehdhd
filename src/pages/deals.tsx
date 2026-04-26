import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowRightIcon, CreditCardIcon, PuzzlePieceIcon, ShoppingBagIcon, StarIcon } from '@heroicons/react/24/outline'

export function Deals() {
  React.useEffect(() => { document.title = "Deals" }, [])
  const [bundlePhone, setBundlePhone] = React.useState('')
  const [bundleCase, setBundleCase] = React.useState('')
  const [tradeInModel, setTradeInModel] = React.useState('')
  const [tradeInYear, setTradeInYear] = React.useState('')
  const [savingsProgress, setSavingsProgress] = React.useState('')

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Card className="overflow-hidden">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
            <h1 className="text-3xl font-bold tracking-tight">Deals</h1>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Flash Sale</Badge>
              <Badge variant="destructive">Save up to 40%</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="border-destructive/50">
        <CardHeader>
          <CardTitle>⏰ Flash Sale Live</CardTitle>
          <CardDescription>5 active deals ending soon</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-destructive">$state.flashSale1Time</div>
                <p className="text-sm text-muted-foreground">iPhone 15 Pro</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-destructive">$state.flashSale2Time</div>
                <p className="text-sm text-muted-foreground">Galaxy S24 Ultra</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-destructive">$state.flashSale3Time</div>
                <p className="text-sm text-muted-foreground">Pixel 8 Pro</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-destructive">$state.flashSale4Time</div>
                <p className="text-sm text-muted-foreground">Xperia 1 VI</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-destructive">$state.flashSale5Time</div>
                <p className="text-sm text-muted-foreground">Bundle Deal</p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
        <CardFooter>
          <Button size="lg" className="w-full sm:w-auto">
            <span>Shop All Flash Sales</span>
            <ArrowRightIcon className="h-4 w-4 ml-2" />
          </Button>
        </CardFooter>
      </Card>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>
              <ShoppingBagIcon className="h-5 w-5 mr-2" />
              <div>Bundle Builder</div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Select value={bundlePhone} onValueChange={setBundlePhone}>
              <SelectTrigger>
                <SelectValue placeholder="Choose phone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="iphone-15">iPhone 15 - $799</SelectItem>
                <SelectItem value="galaxy-s24">Galaxy S24 - $899</SelectItem>
              </SelectContent>
            </Select>
            <Select value={bundleCase} onValueChange={setBundleCase}>
              <SelectTrigger>
                <SelectValue placeholder="Choose case" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="clear-case">Clear Case - $29</SelectItem>
                <SelectItem value="leather-case">Leather Case - $49</SelectItem>
              </SelectContent>
            </Select>
            <div className="text-2xl font-bold">$state.bundleTotal</div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Add Bundle to Cart</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <CreditCardIcon className="h-5 w-5 mr-2" />
              <div>Trade-In Calculator</div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Phone model (iPhone 14, Galaxy S23...)" value={tradeInModel} onChange={setTradeInModel} />
            <Input type="number" placeholder="Year" value={tradeInYear} onChange={setTradeInYear} />
            <Button variant="outline" size="sm">Calculate Value</Button>
            <div className="text-3xl font-bold text-primary">$state.tradeInValue</div>
          </CardContent>
          <CardFooter>
            <Button variant="outline">
              <span>Learn More</span>
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <StarIcon className="h-5 w-5 mr-2" />
              <div>Total Savings</div>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-4xl font-bold text-destructive">$state.totalSavings</div>
            <p className="text-sm text-muted-foreground">Across all active deals</p>
            <Progress value={savingsProgress} />
          </CardContent>
        </Card>
      </div>
      <Tabs defaultValue="deals" className="w-full">
        <TabsList>
          <TabsTrigger value="deals">Top Deals</TabsTrigger>
          <TabsTrigger value="refurbished">Refurbished</TabsTrigger>
        </TabsList>
        <TabsContent value="deals">
          <Card>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Deal</TableHead>
                    <TableHead>Original</TableHead>
                    <TableHead>Discount</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>iPhone 15 Pro Max 256GB</TableCell>
                    <TableCell className="line-through text-muted-foreground">$1,199</TableCell>
                    <TableCell>
                      <Badge variant="destructive">-35%</Badge>
                    </TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline">Grab Deal</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="refurbished">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold">iPhone 14 Pro - Excellent</h3>
                    <Badge variant="secondary">Grade A</Badge>
                  </div>
                  <div className="text-2xl font-bold">$749</div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Add to Cart</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
      <Card>
        <CardFooter className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-6">
          <div className="text-center sm:text-left">
            <p className="text-sm text-muted-foreground">Don't miss out — deals end soon!</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button variant="outline" className="flex-1 sm:flex-none">
              <PuzzlePieceIcon className="h-4 w-4 mr-2" />
              <div>Save Deals</div>
            </Button>
            <Button className="flex-1 sm:flex-none">
              <ShoppingBagIcon className="h-4 w-4 mr-2" />
              <div>View Cart</div>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
