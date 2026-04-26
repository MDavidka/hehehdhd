import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowRightIcon, CheckCircleIcon, DevicePhoneMobileIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { proceedToCheckout, applyDiscount, calculateShipping } from '@/lib/cart-logic'

export function Cart() {
  React.useEffect(() => { document.title = "Cart" }, [])
  const [discountCode, setDiscountCode] = React.useState(0)
  const [zipCode, setZipCode] = React.useState('')

  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8 container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 mb-12">
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight col-span-full lg:col-span-12 mb-8">Cart</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-8 space-y-6">
          <Card className="lg:col-span-8">
            <CardHeader>
              <CardTitle>Your Items</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center p-4 border rounded-lg bg-muted/50">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-16 bg-muted rounded-md flex items-center justify-center">
                        <DevicePhoneMobileIcon className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-foreground truncate">$state.items.0.name || 'iPhone 16 Pro'</p>
                        <p className="text-sm text-muted-foreground">$state.items.0.variant || '256GB, Space Black'</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" onClick="$handler.decrementQuantity.0">
                      <XMarkIcon className="h-4 w-4" />
                    </Button>
                    <div className="w-16 flex items-center justify-center font-mono text-sm">$state.items.0.quantity || 1</div>
                    <Button variant="ghost" size="sm" onClick="$handler.incrementQuantity.0">
                      <XMarkIcon className="h-4 w-4 rotate-45" />
                    </Button>
                  </div>
                  <div className="text-right ml-4">
                    <p className="font-mono font-semibold text-lg">$state.items.0.totalPrice || $199.99</p>
                    <p className="text-sm text-muted-foreground line-through">$state.items.0.originalPrice || $249.99</p>
                  </div>
                  <Button variant="ghost" size="icon" className="ml-2 h-8 w-8" onClick="$handler.removeItem.0">
                    <XMarkIcon className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center p-4 border rounded-lg bg-muted/50">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-16 bg-muted rounded-md flex items-center justify-center">
                        <DevicePhoneMobileIcon className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-foreground truncate">$state.items.1.name || 'Galaxy S24 Ultra'</p>
                        <p className="text-sm text-muted-foreground">$state.items.1.variant || '512GB, Titanium Gray'</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" onClick="$handler.decrementQuantity.1">
                      <XMarkIcon className="h-4 w-4" />
                    </Button>
                    <div className="w-16 flex items-center justify-center font-mono text-sm">$state.items.1.quantity || 1</div>
                    <Button variant="ghost" size="sm" onClick="$handler.incrementQuantity.1">
                      <XMarkIcon className="h-4 w-4 rotate-45" />
                    </Button>
                  </div>
                  <div className="text-right ml-4">
                    <p className="font-mono font-semibold text-lg">$state.items.1.totalPrice || $1,299.99</p>
                  </div>
                  <Button variant="ghost" size="icon" className="ml-2 h-8 w-8" onClick="$handler.removeItem.1">
                    <XMarkIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between w-full">
                <Button variant="outline">
                  <ArrowRightIcon className="h-4 w-4 mr-2 rotate-180" />
                  <div>Continue Shopping</div>
                </Button>
                <Button size="lg" onClick={proceedToCheckout}>
                  <div>Proceed to Checkout</div>
                </Button>
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Discount Code</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-2">
                <Input placeholder="Enter code" value={discountCode} onChange={setDiscountCode} />
                <Button onClick={applyDiscount}>Apply</Button>
              </div>
              <div className="$state.discountValid ? 'flex items-center gap-2 text-green-600' : 'hidden'">
                <CheckCircleIcon className="h-4 w-4" />
                <p className="text-sm">Saved $state.discountSavings || $25.00</p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-mono font-semibold">$state.subtotal || $1,499.98</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount:</span>
                  <span className="font-mono font-semibold text-destructive">-$state.discountSavings || $0.00</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2 border-t">
                  <span>Total:</span>
                  <span className="font-mono text-2xl">$state.total || $1,474.98</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Shipping Estimate</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="zipcode">ZIP Code</Label>
                <Input id="zipcode" placeholder={90210} value={zipCode} onChange={setZipCode} />
                <p className="text-sm text-muted-foreground">$state.shippingEstimate || 'Enter ZIP to calculate'</p>
              </div>
              <Button variant="outline" size="sm" className="w-full" onClick={calculateShipping}>Calculate Shipping</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
