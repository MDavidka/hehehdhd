import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import { Input } from '@/components/ui/input'
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { ChevronLeftIcon, ChevronRightIcon, EyeIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import { setPriceFilter0_300, setPriceFilter300_600, setPriceFilter600, addToCart } from '@/lib/phones-logic'

export function Phones() {
  React.useEffect(() => { document.title = "Phones" }, [])
  const [searchQuery, setSearchQuery] = React.useState('')
  const [sort, setSort] = React.useState('')
  const [brandFilter, setBrandFilter] = React.useState('')
  const [selectedPhoneDetailsUrl, setSelectedPhoneDetailsUrl] = React.useState('')

  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        <div className="border-b border-border pb-6 mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Phones</h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-2 flex-1">
            <Input placeholder="Search phones by model or specs..." value={searchQuery} onChange={setSearchQuery} />
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="w-[180px] sm:w-[200px]">
                <SelectValue placeholder="Sort by..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                <SelectItem value="popularity">Popularity</SelectItem>
                <SelectItem value="newest">Newest Arrivals</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <ToggleGroup type="single" value={brandFilter} onValueChange={setBrandFilter} className="lg:justify-end">
            <ToggleGroupItem value="all">All</ToggleGroupItem>
            <ToggleGroupItem value="iphone">iPhone</ToggleGroupItem>
            <ToggleGroupItem value="samsung">Samsung</ToggleGroupItem>
            <ToggleGroupItem value="pixel">Pixel</ToggleGroupItem>
            <ToggleGroupItem value="budget">Budget</ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div className="flex gap-2 mb-6 flex-wrap">
          <Button onClick={setPriceFilter0_300}>
            <span>$0-300</span>
          </Button>
          <Button onClick={setPriceFilter300_600}>
            <span>$300-600</span>
          </Button>
          <Button onClick={setPriceFilter600}>
            <span>$600+</span>
          </Button>
        </div>
        <div className="rounded-lg border bg-background">
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Model</TableHead>
                <TableHead>Specs</TableHead>
                <TableHead className="text-right">Storage</TableHead>
                <TableHead className="text-right">Price</TableHead>
                <TableHead className="text-right">Stock</TableHead>
                <TableHead className="w-[140px]" />
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">iPhone 16 Pro Max</TableCell>
                <TableCell>6.9" OLED, A18 Pro, 48MP</TableCell>
                <TableCell className="text-right">128GB / 256GB / 1TB</TableCell>
                <TableCell className="text-right font-medium">$1,199</TableCell>
                <TableCell>
                  <Badge variant="default">In Stock</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <ButtonGroup className="gap-1">
                    <Button href={selectedPhoneDetailsUrl}>
                      <EyeIcon className="h-4 w-4 mr-1" />
                      <span>Details</span>
                    </Button>
                    <Button onClick={addToCart}>
                      <ShoppingCartIcon className="h-4 w-4 mr-1" />
                      <span>Add to Cart</span>
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Galaxy S25 Ultra</TableCell>
                <TableCell>6.8" AMOLED, Snapdragon 8 Gen 4</TableCell>
                <TableCell className="text-right">256GB / 512GB</TableCell>
                <TableCell className="text-right font-medium">$1,299</TableCell>
                <TableCell>
                  <Badge variant="default">Low Stock</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <ButtonGroup className="gap-1">
                    <Button href={selectedPhoneDetailsUrl}>
                      <EyeIcon className="h-4 w-4 mr-1" />
                      <span>Details</span>
                    </Button>
                    <Button onClick={addToCart}>
                      <ShoppingCartIcon className="h-4 w-4 mr-1" />
                      <span>Add to Cart</span>
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Pixel 9 Pro XL</TableCell>
                <TableCell>6.8" OLED, Tensor G4, 50MP</TableCell>
                <TableCell className="text-right">128GB / 256GB</TableCell>
                <TableCell className="text-right font-medium">$1,099</TableCell>
                <TableCell>
                  <Badge variant="outline">In Stock</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <ButtonGroup className="gap-1">
                    <Button href={selectedPhoneDetailsUrl}>
                      <EyeIcon className="h-4 w-4 mr-1" />
                      <span>Details</span>
                    </Button>
                    <Button onClick={addToCart}>
                      <ShoppingCartIcon className="h-4 w-4 mr-1" />
                      <span>Add to Cart</span>
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">iPhone 15</TableCell>
                <TableCell>6.1" OLED, A16 Bionic</TableCell>
                <TableCell className="text-right">128GB / 256GB</TableCell>
                <TableCell className="text-right font-medium">$799</TableCell>
                <TableCell>
                  <Badge variant="default">In Stock</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <ButtonGroup className="gap-1">
                    <Button href={selectedPhoneDetailsUrl}>
                      <EyeIcon className="h-4 w-4 mr-1" />
                      <span>Details</span>
                    </Button>
                    <Button onClick={addToCart}>
                      <ShoppingCartIcon className="h-4 w-4 mr-1" />
                      <span>Add to Cart</span>
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="flex items-center justify-between px-4 py-4 bg-background border-t border-border">
            <div className="flex-1 text-sm text-muted-foreground">Showing 1-4 of 20+ phones</div>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#">
                    <ChevronLeftIcon className="h-4 w-4 mr-1" />
                    <span>Previous</span>
                  </PaginationPrevious>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#">
                    <span>Next</span>
                    <ChevronRightIcon className="h-4 w-4 ml-1" />
                  </PaginationNext>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  )
}
