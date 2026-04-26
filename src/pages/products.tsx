import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ButtonGroup, ButtonGroupSeparator } from '@/components/ui/button-group'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { ArrowRightIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { toggleFiveGFilter, clearFilters, toggleBulkCompare, toggleSelectAll, sortByBrand, prevPage, nextPage, addSelectedToCart } from '@/lib/products-logic'

export function Products() {
  React.useEffect(() => { document.title = "Products" }, [])
  const [brandFilter, setBrandFilter] = React.useState('')
  const [priceRange, setPriceRange] = React.useState(0)
  const [storageFilter, setStorageFilter] = React.useState('')
  const [fiveGFilter, setFiveGFilter] = React.useState('')
  const [activeCategory, setActiveCategory] = React.useState(false)
  const [bulkCompare, setBulkCompare] = React.useState('')
  const [selectAll, setSelectAll] = React.useState('')
  const [noItemsSelected, setNoItemsSelected] = React.useState([])

  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground/70 bg-clip-text text-transparent">Products</h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">Browse our premium selection of smartphones across all major brands. Filter, sort, and compare with confidence.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <Card className="lg:sticky top-8 lg:col-span-1 h-fit shadow-md">
            <CardHeader>
              <CardTitle>Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label>Brand</Label>
                <Select value={brandFilter} onValueChange={setBrandFilter}>
                  <SelectTrigger />
                  <SelectContent>
                    <SelectItem value="all">All Brands</SelectItem>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="samsung">Samsung</SelectItem>
                    <SelectItem value="google">Google</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Price Range</Label>
                <Slider value={priceRange} onValueChange={setPriceRange} max={2000} step={100} />
              </div>
              <div>
                <Label>Storage</Label>
                <ToggleGroup type="single" value={storageFilter} onValueChange={setStorageFilter}>
                  <ToggleGroupItem value={64}>64GB</ToggleGroupItem>
                  <ToggleGroupItem value={128}>128GB</ToggleGroupItem>
                  <ToggleGroupItem value={256}>256GB+</ToggleGroupItem>
                </ToggleGroup>
              </div>
              <div>
                <Label>5G Support</Label>
                <Switch checked={fiveGFilter} onCheckedChange={toggleFiveGFilter} />
              </div>
              <Button variant="outline" size="sm" className="w-full" onClick={clearFilters}>
                <XMarkIcon className="h-4 w-4 mr-2" />
                <div>Clear Filters</div>
              </Button>
            </CardContent>
          </Card>
          <div className="lg:col-span-3 space-y-8">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
              <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full sm:w-auto">
                <TabsList>
                  <TabsTrigger value="iphone">iPhone</TabsTrigger>
                  <TabsTrigger value="samsung">Samsung</TabsTrigger>
                  <TabsTrigger value="pixel">Google Pixel</TabsTrigger>
                  <TabsTrigger value="budget">Budget</TabsTrigger>
                </TabsList>
              </Tabs>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Checkbox id="bulk-compare" checked={bulkCompare} onCheckedChange={toggleBulkCompare} />
                <label htmlFor="bulk-compare">Compare up to 4 phones</label>
                <Badge variant="secondary">$state.selectedCount</Badge>
              </div>
            </div>
            <Card className="shadow-md overflow-hidden">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">
                        <Checkbox checked={selectAll} onCheckedChange={toggleSelectAll} />
                      </TableHead>
                      <TableHead>
                        <Button variant="ghost" size="sm" onClick={sortByBrand}>
                          <div>Brand</div>
                          <ArrowRightIcon className="h-4 w-4 ml-1" />
                        </Button>
                      </TableHead>
                      <TableHead>Model</TableHead>
                      <TableHead className="text-right">Storage</TableHead>
                      <TableHead className="text-right">Camera</TableHead>
                      <TableHead className="text-right">Price</TableHead>
                      <TableHead className="text-right">Stock</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="divide-y divide-border">
                    <TableRow>
                      <TableCell className="w-12">
                        <Checkbox checked="$state.selectedItems.iphone16" />
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">Apple</div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-semibold">iPhone 16 Pro</div>
                          <div className="text-sm text-muted-foreground">6.1" OLED</div>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">256GB</TableCell>
                      <TableCell className="text-right">48MP</TableCell>
                      <TableCell className="text-right font-semibold">$1,199</TableCell>
                      <TableCell className="text-right">
                        <Badge variant="default">In Stock</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="w-12">
                        <Checkbox checked="$state.selectedItems.galaxyS25" />
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">Samsung</div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-semibold">Galaxy S25 Ultra</div>
                          <div className="text-sm text-muted-foreground">6.8" AMOLED</div>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">512GB</TableCell>
                      <TableCell className="text-right">200MP</TableCell>
                      <TableCell className="text-right font-semibold">$1,399</TableCell>
                      <TableCell className="text-right">
                        <Badge variant="secondary">9 left</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="w-12">
                        <Checkbox checked="$state.selectedItems.pixel9" />
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">Google</div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-semibold">Pixel 9 Pro</div>
                          <div className="text-sm text-muted-foreground">6.3" OLED</div>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">128GB</TableCell>
                      <TableCell className="text-right">50MP</TableCell>
                      <TableCell className="text-right font-semibold">$999</TableCell>
                      <TableCell className="text-right">
                        <Badge variant="outline">Low Stock</Badge>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-4 p-6 bg-muted/50">
                <div className="text-sm text-muted-foreground">Showing 1-3 of 24 products</div>
                <ButtonGroup>
                  <Button variant="outline" size="sm" onClick={prevPage}>Previous</Button>
                  <ButtonGroupSeparator />
                  <Button onClick={nextPage}>Next</Button>
                </ButtonGroup>
                <Button onClick={addSelectedToCart} disabled={noItemsSelected}>
                  <ShoppingBagIcon className="h-4 w-4 mr-2" />
                  <div>Add Selected to Cart</div>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
