import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Cog6ToothIcon, CreditCardIcon, DevicePhoneMobileIcon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { clearFilters, toggleBulkCompare, toggleSelectAll, addToCart, viewCart } from '@/lib/phones-logic'

export function Phones() {
  React.useEffect(() => { document.title = "Phones" }, [])
  const [selectedBrands, setSelectedBrands] = React.useState('')
  const [priceRange, setPriceRange] = React.useState(0)
  const [storageFilter, setStorageFilter] = React.useState('')
  const [sortBy, setSortBy] = React.useState('')
  const [bulkCompare, setBulkCompare] = React.useState('')
  const [selectAll, setSelectAll] = React.useState('')

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
        <Card className="lg:sticky lg:top-8 h-fit lg:col-span-1">
          <CardHeader>
            <CardTitle>Filters</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-medium mb-3 flex items-center gap-2">
                <DevicePhoneMobileIcon className="h-4 w-4" />
                <span>Brand</span>
              </h4>
              <ToggleGroup type="multiple" value={selectedBrands} onValueChange={setSelectedBrands}>
                <ToggleGroupItem value="iPhone" className="justify-start">iPhone</ToggleGroupItem>
                <ToggleGroupItem value="Android" className="justify-start">Android</ToggleGroupItem>
                <ToggleGroupItem value="Samsung" className="justify-start">Samsung</ToggleGroupItem>
                <ToggleGroupItem value="Google" className="justify-start">Google Pixel</ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div>
              <h4 className="font-medium mb-3 flex items-center gap-2">
                <CreditCardIcon className="h-4 w-4" />
                <span>Price Range</span>
              </h4>
              <Slider value={priceRange} onValueChange={setPriceRange} max={2000} step={50} className="w-full" />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>$0</span>
                <span>$2,000</span>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-3 flex items-center gap-2">
                <Cog6ToothIcon className="h-4 w-4" />
                <span>Storage</span>
              </h4>
              <Select value={storageFilter} onValueChange={setStorageFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Any storage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any storage</SelectItem>
                  <SelectItem value={128}>128GB</SelectItem>
                  <SelectItem value={256}>256GB</SelectItem>
                  <SelectItem value={512}>512GB+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <h4 className="font-medium mb-3 flex items-center gap-2">
                <MagnifyingGlassIcon className="h-4 w-4" />
                <span>Sort By</span>
              </h4>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose sort option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="popularity">Popularity</SelectItem>
                  <SelectItem value="newest">Newest Arrivals</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="outline" size="sm" className="w-full" onClick={clearFilters}>
              <XMarkIcon className="h-4 w-4 mr-2" />
              <span>Clear Filters</span>
            </Button>
          </CardContent>
        </Card>
        <div className="lg:col-span-3 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h1 className="text-3xl font-bold tracking-tight">Phones</h1>
            <div className="flex items-center gap-2">
              <Checkbox id="bulk-compare" checked={bulkCompare} onCheckedChange={toggleBulkCompare} />
              <Label htmlFor="bulk-compare" className="text-sm">Bulk Compare (0/4)</Label>
            </div>
          </div>
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">
                      <Checkbox checked={selectAll} onCheckedChange={toggleSelectAll} />
                    </TableHead>
                    <TableHead>Model</TableHead>
                    <TableHead>Storage</TableHead>
                    <TableHead>Camera</TableHead>
                    <TableHead>Battery</TableHead>
                    <TableHead />
                  </TableRow>
                </TableHeader>
                <TableBody className="divide-y divide-border">
                  <TableRow>
                    <TableCell>
                      <Checkbox checked="$state.selectedPhones[0]" />
                    </TableCell>
                    <TableCell className="font-medium">
                      <Collapsible open="$state.expandedRows[0]">
                        <CollapsibleTrigger asChild>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-muted rounded-md flex items-center justify-center" />
                            <div>iPhone 16 Pro Max</div>
                          </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="ml-4 mt-2 space-y-2">
                          <div className="text-sm text-muted-foreground">6.9" Super Retina XDR • A18 Pro • 48MP Fusion</div>
                        </CollapsibleContent>
                      </Collapsible>
                    </TableCell>
                    <TableCell>256GB / 512GB / 1TB</TableCell>
                    <TableCell>48MP + 48MP + 12MP</TableCell>
                    <TableCell>27h Video</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center gap-2 justify-end">
                        <Badge variant="default">In Stock</Badge>
                        <Button size="sm" onClick={addToCart}>
                          <ShoppingBagIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Checkbox checked="$state.selectedPhones[1]" />
                    </TableCell>
                    <TableCell className="font-medium">Galaxy S25 Ultra</TableCell>
                    <TableCell>256GB / 512GB</TableCell>
                    <TableCell>200MP</TableCell>
                    <TableCell>24h Video</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center gap-2 justify-end">
                        <Badge />
                        <Button size="sm" onClick={addToCart}>
                          <ShoppingBagIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Checkbox checked="$state.selectedPhones[2]" />
                    </TableCell>
                    <TableCell className="font-medium">Pixel 9 Pro XL</TableCell>
                    <TableCell>128GB / 256GB</TableCell>
                    <TableCell>50MP</TableCell>
                    <TableCell>22h Video</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center gap-2 justify-end">
                        <Badge variant="default">In Stock</Badge>
                        <Button size="sm" onClick={addToCart}>
                          <ShoppingBagIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-3 p-6 bg-muted/50">
              <div className="text-sm text-muted-foreground">Showing 3 of 24 phones</div>
              <div className="flex gap-2 ml-auto">
                <Button variant="outline" size="sm">Compare Selected</Button>
                <Button onClick={viewCart}>
                  <ShoppingBagIcon className="h-4 w-4 mr-2" />
                  <span>View Cart</span>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
