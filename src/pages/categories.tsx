import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Link } from 'react-router-dom'
import { ArrowRightIcon, Battery50Icon, DevicePhoneMobileIcon, EyeIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { viewAllProducts, openPhotoGallery } from '@/lib/categories-logic'

export function Categories() {
  React.useEffect(() => { document.title = "Categories" }, [])

  return (
    <section className="container mx-auto px-4 md:px-6 lg:px-8 py-12 space-y-12 lg:space-y-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Categories</h1>
          <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">Discover phones by use case. Find the perfect device for gaming, photography, business, or your budget.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="default" size="lg" onClick={viewAllProducts}>Browse All Phones</Button>
            <Button variant="outline" size="lg">
              <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
              <div>Find Your Phone</div>
            </Button>
          </div>
        </div>
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-gradient-to-br from-muted to-background p-8 lg:p-12">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <Badge variant="secondary">
                  <DevicePhoneMobileIcon className="h-4 w-4 mr-1" />
                  <div>Gaming</div>
                </Badge>
                <Badge variant="secondary">
                  <EyeIcon className="h-4 w-4 mr-1" />
                  <div>Camera</div>
                </Badge>
                <Badge variant="secondary">
                  <Battery50Icon className="h-4 w-4 mr-1" />
                  <div>Battery</div>
                </Badge>
                <Badge variant="secondary">Business</Badge>
                <Badge variant="secondary">Budget</Badge>
                <Badge variant="secondary">5G</Badge>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">23% of sales</h3>
                <p className="text-sm text-muted-foreground">Gaming phones are most popular</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-12">
        <Tabs defaultValue="gaming" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 h-auto p-2 bg-background">
            <TabsTrigger value="gaming" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg h-auto py-3">
              <DevicePhoneMobileIcon className="h-5 w-5 mb-1" />
              <div>Gaming</div>
            </TabsTrigger>
            <TabsTrigger value="camera" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg h-auto py-3">
              <EyeIcon className="h-5 w-5 mb-1" />
              <div>Camera</div>
            </TabsTrigger>
            <TabsTrigger value="battery" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg h-auto py-3">
              <Battery50Icon className="h-5 w-5 mb-1" />
              <div>Battery</div>
            </TabsTrigger>
            <TabsTrigger value="business" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg h-auto py-3">Business</TabsTrigger>
            <TabsTrigger value="budget" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg h-auto py-3">Budget</TabsTrigger>
            <TabsTrigger value="5g" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg h-auto py-3">
              <div>5G</div>
              <ArrowRightIcon className="h-4 w-4 ml-1" />
            </TabsTrigger>
          </TabsList>
          <TabsContent value="gaming" className="space-y-8 pt-8">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DevicePhoneMobileIcon className="h-6 w-6" />
                  <div>Gaming Phones</div>
                </CardTitle>
                <CardDescription>High refresh rate phones ranked by benchmark scores</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Rank</TableHead>
                      <TableHead>Model</TableHead>
                      <TableHead>FPS</TableHead>
                      <TableHead>Geekbench</TableHead>
                      <TableHead>Price</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">1</TableCell>
                      <TableCell>ROG Phone 8 Pro</TableCell>
                      <TableCell className="font-medium">165Hz</TableCell>
                      <TableCell className="text-right font-medium">2,847k</TableCell>
                      <TableCell className="text-right">$1,199</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">2</TableCell>
                      <TableCell>RedMagic 9 Pro</TableCell>
                      <TableCell>144Hz</TableCell>
                      <TableCell className="text-right">2,612k</TableCell>
                      <TableCell className="text-right">$849</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">3</TableCell>
                      <TableCell>iPhone 16 Pro Max</TableCell>
                      <TableCell>120Hz</TableCell>
                      <TableCell className="text-right">2,456k</TableCell>
                      <TableCell className="text-right">$1,499</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="pt-0 pb-6 px-6 flex justify-end">
                <Button variant="outline">
                  <div>View All Gaming Phones</div>
                  <ArrowRightIcon className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="camera" className="space-y-8 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Camera Phones</CardTitle>
                  <CardDescription>Best camera systems ranked by megapixels and low-light performance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-accent rounded-lg">
                    <div className="flex -space-x-2">
                      <Avatar className="h-8 w-8 border-2 border-background">
                        <AvatarImage src="/placeholder-user.jpg" alt="@user1" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-8 w-8 border-2 border-background">
                        <AvatarImage src="/placeholder-user.jpg" alt="@user2" />
                        <AvatarFallback>SM</AvatarFallback>
                      </Avatar>
                    </div>
                    <div>
                      <p className="text-sm font-medium">iPhone 16 Pro Max</p>
                      <p className="text-xs text-muted-foreground">200MP main camera</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={openPhotoGallery} className="w-full justify-start">
                    <EyeIcon className="h-4 w-4 mr-2" />
                    <div>View Sample Photos</div>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Top 3 Cameras</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>1. iPhone 16 Pro Max</span>
                    <Badge variant="outline">200MP</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>2. Pixel 9 Pro XL</span>
                    <Badge variant="outline">50MP</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>3. Galaxy S25 Ultra</span>
                    <Badge variant="outline">200MP</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <section className="border-t border-border pt-12">
        <div className="text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold">Ready to find your perfect phone?</h2>
          <p className="mx-auto max-w-md text-xl text-muted-foreground">Browse our full catalog or filter by your favorite category.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={viewAllProducts}>
              <div>View All Products</div>
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/products">Full Catalog →</Link>
            </Button>
          </div>
        </div>
      </section>
    </section>
  )
}
