import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { DollarSignIcon, MagnifyingGlassIcon, MapPinIcon, PhoneIcon, TruckIcon } from '@heroicons/react/24/outline'
import { onSubmitQuote, handlePhotoUpload, generateShippingLabel } from '@/lib/trade-in-logic'

export function TradeIn() {
  React.useEffect(() => { document.title = "Trade In" }, [])
  const [model, setModel] = React.useState('')
  const [scratches, setScratches] = React.useState('')
  const [batteryHealth, setBatteryHealth] = React.useState('')
  const [searchTerm, setSearchTerm] = React.useState('')

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Trade In</CardTitle>
            <CardDescription>Get an instant quote for your old phone and upgrade to the latest model. Complete the form below to start.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Form className="space-y-6">
              <form onSubmit={onSubmitQuote} className="space-y-6">
                <FormField name="brand">
                  <FormItem>
                    <FormLabel>Brand</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger />
                        <SelectContent>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="samsung">Samsung</SelectItem>
                          <SelectItem value="google">Google</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                </FormField>
                <FormField name="model">
                  <FormItem>
                    <FormLabel>Model</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. iPhone 14 Pro" value={model} onChange={setModel} />
                    </FormControl>
                  </FormItem>
                </FormField>
                <div className="space-y-4">
                  <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Condition Assessment</Label>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-sm">Scratches</Label>
                      <Slider value={scratches} onValueChange={setScratches} max={10} step={1} />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm">Battery Health</Label>
                      <Slider value={batteryHealth} onValueChange={setBatteryHealth} max={100} step={1} />
                    </div>
                  </div>
                </div>
                <FormField name="photo">
                  <FormItem>
                    <FormLabel>Upload Photo (AI Assessment)</FormLabel>
                    <FormControl>
                      <Input type="file" onChange={handlePhotoUpload} />
                    </FormControl>
                  </FormItem>
                </FormField>
                <div className="p-4 bg-muted rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <DollarSignIcon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-2xl">$</h3>
                      <span className="text-4xl font-black">$state.quoteAmount</span>
                    </div>
                  </div>
                </div>
                <Button type="submit" className="w-full" size="lg">Get Trade-in Quote</Button>
                <Button variant="outline" type="button" onClick={generateShippingLabel} className="w-full" disabled="$state.quoteAmount === '0'">
                  <TruckIcon className="h-4 w-4 mr-2" />
                  <div>Generate Shipping Label</div>
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
        <div className="space-y-8 lg:sticky lg:top-8">
          <Card>
            <CardHeader>
              <CardTitle>
                <PhoneIcon className="h-6 w-6 mr-2" />
                <div>Eligible Devices</div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <Input placeholder="Search devices..." value={searchTerm} onChange={setSearchTerm} className="pl-10" />
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                <div className="text-sm text-muted-foreground p-2">iPhone 12 and newer, Galaxy S21 and newer, Pixel 6 and newer</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Process Steps</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xs mt-0.5">1</div>
                  <div>
                    <p className="font-medium">Get Quote</p>
                    <p className="text-sm text-muted-foreground">Complete the form above</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xs mt-0.5">2</div>
                  <div>
                    <p className="font-medium">Ship Device</p>
                    <p className="text-sm text-muted-foreground">Print shipping label and send</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xs mt-0.5">3</div>
                  <div>
                    <p className="font-medium">Get Credit</p>
                    <p className="text-sm text-muted-foreground">Credit applied instantly</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Shipping & Hours</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                <MapPinIcon className="h-12 w-12 text-muted-foreground mr-3" />
                <div>
                  <p className="text-lg font-medium">Free Shipping Nationwide</p>
                  <p className="text-muted-foreground">Labels auto-generated</p>
                </div>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Service</TableHead>
                    <TableHead>Hours</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Trade-in Processing</TableCell>
                    <TableCell>Mon-Fri 9AM-6PM</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Shipping Labels</TableCell>
                    <TableCell>24/7 Instant</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Customer Support</TableCell>
                    <TableCell>Mon-Sun 8AM-8PM</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
