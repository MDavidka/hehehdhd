import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Field, FieldContent, FieldDescription, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Slider } from '@/components/ui/slider'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { ArrowRightIcon, CreditCardIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { applyPromo, clearCart, proceedToCheckout, addAccessory1, addAccessory2, guestCheckout } from '@/lib/cart-logic'

export function Cart() {
  React.useEffect(() => { document.title = "Cart" }, [])
  const [quantity1, setQuantity1] = React.useState(0)
  const [quantity2, setQuantity2] = React.useState(0)
  const [promoCode, setPromoCode] = React.useState('')
  const [zipCode, setZipCode] = React.useState('')

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
      <div className="lg:col-span-2">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Cart</h1>
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Review your items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src="/phone-placeholder.jpg" alt="iPhone 15 Pro" />
                          <AvatarFallback>IP</AvatarFallback>
                        </Avatar>
                        <div>
                          <p>iPhone 15 Pro 256GB Natural Titanium</p>
                          <Badge variant="outline">In Stock</Badge>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Slider value={quantity1} onValueChange={setQuantity1} max={10} step={1} className="w-24" />
                      <p className="text-sm text-muted-foreground">$state.quantity1</p>
                    </TableCell>
                    <TableCell className="font-medium">$999</TableCell>
                    <TableCell className="font-medium">$1,998</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src="/samsung-placeholder.jpg" alt="Galaxy S24 Ultra" />
                          <AvatarFallback>GS</AvatarFallback>
                        </Avatar>
                        <div>
                          <p>Galaxy S24 Ultra 512GB Titanium Gray</p>
                          <Badge variant="outline">Limited Stock</Badge>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Slider value={quantity2} onValueChange={setQuantity2} max={5} step={1} className="w-24" />
                      <p className="text-sm text-muted-foreground">$state.quantity2</p>
                    </TableCell>
                    <TableCell className="font-medium">$1,299</TableCell>
                    <TableCell className="font-medium">$2,598</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Card>
                <CardHeader>
                  <CardTitle>
                    <div className="flex items-center gap-2">
                      <CreditCardIcon className="h-5 w-5" />
                      <span>Promo Code</span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Field>
                    <FieldLabel>Enter promo code</FieldLabel>
                    <FieldContent>
                      <Input placeholder="SAVE20" value={promoCode} onChange={setPromoCode} />
                    </FieldContent>
                    <FieldDescription>$state.promoDiscount</FieldDescription>
                  </Field>
                  <Button className="mt-4 w-full" onClick={applyPromo}>
                    <span>Apply Code</span>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <Button variant="outline" onClick={clearCart}>
                <XMarkIcon className="h-4 w-4 mr-2" />
                <span>Clear Cart</span>
              </Button>
              <Button className="w-full sm:w-auto" onClick={proceedToCheckout}>
                <span>Proceed to Checkout →</span>
              </Button>
            </div>
          </CardFooter>
        </Card>
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>
              <div className="flex items-center gap-2">
                <ShoppingBagIcon className="h-5 w-5" />
                <span>Recommended Accessories</span>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Carousel opts="[object Object]" className="w-full">
              <CarouselContent className="-ml-1">
                <CarouselItem>
                  <Card className="w-[250px]">
                    <CardContent className="p-4">
                      <div className="flex flex-col gap-2">
                        <h3 className="font-semibold">Clear Case</h3>
                        <p className="text-sm text-muted-foreground">Perfect fit protection</p>
                        <div className="flex items-center justify-between">
                          <span className="font-medium">$29</span>
                          <Button size="sm" onClick={addAccessory1}>Add</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="w-[250px]">
                    <CardContent className="p-4">
                      <div className="flex flex-col gap-2">
                        <h3 className="font-semibold">Screen Protector</h3>
                        <p className="text-sm text-muted-foreground">Anti-glare, 9H hardness</p>
                        <div className="flex items-center justify-between">
                          <span className="font-medium">$19</span>
                          <Button size="sm" onClick={addAccessory2}>Add</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselNext className="ml-2" />
              <CarouselPrevious className="-ml-8" />
            </Carousel>
          </CardContent>
        </Card>
      </div>
      <aside className="lg:col-span-1 sticky top-8">
        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span className="font-medium">$state.subtotal</span>
            </div>
            <div className="space-y-2">
              <Field>
                <FieldLabel>Zip Code (for tax estimate)</FieldLabel>
                <FieldContent>
                  <Input placeholder={90210} value={zipCode} onChange={setZipCode} />
                </FieldContent>
                <FieldDescription>$state.taxAmount</FieldDescription>
              </Field>
            </div>
            <Separator />
            <div className="flex justify-between text-lg font-bold">
              <span>Total:</span>
              <span>$state.total</span>
            </div>
            <Button className="w-full mt-6" size="lg" onClick={proceedToCheckout}>
              <span>Checkout</span>
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Button>
            <Button variant="outline" className="w-full" onClick={guestCheckout}>Continue as Guest</Button>
          </CardContent>
        </Card>
      </aside>
    </main>
  )
}
