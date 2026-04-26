import React from 'react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Field, FieldContent, FieldDescription, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Spinner } from '@/components/ui/spinner'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Textarea } from '@/components/ui/textarea'
import { Battery50Icon, CheckCircleIcon, DevicePhoneMobileIcon, MagnifyingGlassIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/outline'
import { checkWarranty, toggleChat, handleFileUpload, submitTicket, openMaps } from '@/lib/support-logic'

export function Support() {
  React.useEffect(() => { document.title = "Support" }, [])
  const [kbSearch, setKbSearch] = React.useState('')
  const [selectedArticle, setSelectedArticle] = React.useState('')
  const [kbQuery, setKbQuery] = React.useState('')
  const [serialNumber, setSerialNumber] = React.useState(0)
  const [ticketSubject, setTicketSubject] = React.useState('')
  const [ticketDescription, setTicketDescription] = React.useState('')
  const [locationQuery, setLocationQuery] = React.useState('')

  return (
    <div className="container mx-auto px-4 py-12 lg:px-8 max-w-7xl">
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent mb-6">Support</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Get help with warranty, troubleshooting, repairs, and service requests. We're here 24/7.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
        <Card className="lg:col-span-1 group hover:shadow-2xl transition-all duration-300 border-2 border-border hover:border-primary/50">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-2xl group-hover:text-primary">
              <MagnifyingGlassIcon className="h-8 w-8" />
              <div>Knowledge Base</div>
            </CardTitle>
            <CardDescription>Search 50+ articles about your device</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <Input placeholder="Search articles (iPhone 15, battery, camera)..." value={kbSearch} onChange={setKbSearch} />
              <MagnifyingGlassIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            <Command value={selectedArticle} onValueChange={setSelectedArticle}>
              <CommandInput placeholder="Type to search knowledge base..." value={kbQuery} onValueChange={setKbQuery} />
              <CommandList>
                <CommandEmpty>No articles found.</CommandEmpty>
                <CommandGroup>
                  <CommandItem value="iphone-15-battery">
                    <div className="flex items-center gap-2">
                      <Battery50Icon className="h-4 w-4" />
                      <div>iPhone 15 Battery Optimization</div>
                    </div>
                  </CommandItem>
                  <CommandItem value="galaxy-s24-camera">
                    <div className="flex items-center gap-2">
                      <DevicePhoneMobileIcon className="h-4 w-4" />
                      <div>Galaxy S24 Camera Troubleshooting</div>
                    </div>
                  </CommandItem>
                  <CommandItem value="pixel-8-waterproof">Pixel 8 Water Resistance Guide</CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </CardContent>
        </Card>
        <Card className="lg:col-span-1 group hover:shadow-2xl transition-all duration-300 border-2 border-border hover:border-primary/50 relative">
          <CardHeader className="pb-4">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-card px-4">
              <Badge variant="secondary">Most Popular</Badge>
            </div>
            <CardTitle className="flex items-center gap-2 text-2xl group-hover:text-primary">
              <CheckCircleIcon className="h-8 w-8" />
              <div>Warranty Check</div>
            </CardTitle>
            <CardDescription>Verify status by serial number</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Field>
              <FieldLabel>Serial Number</FieldLabel>
              <FieldContent>
                <Input placeholder="Enter 12-character serial (e.g. F7KX9P2MNC4Q)" value={serialNumber} onChange={setSerialNumber} />
              </FieldContent>
              <FieldDescription>{"Find on Settings > General > About or box"}</FieldDescription>
            </Field>
            <Button size="lg" className="w-full" onClick={checkWarranty}>
              <Spinner className="mr-2 h-4 w-4" />
              <div>Check Status</div>
            </Button>
            <div className="$state.warrantyStatus === 'valid' ? 'hidden' : 'block'">
              <Alert variant="default">
                <AlertTitle>Enter serial number above</AlertTitle>
              </Alert>
            </div>
            <div className="$state.warrantyStatus === '' ? 'hidden' : 'block'">
              <Alert variant="$state.warrantyStatus === 'valid' ? 'default' : 'destructive'">
                <AlertTitle>$state.warrantyStatus === 'valid' ? 'Active Warranty' : 'Expired Warranty'</AlertTitle>
                <AlertDescription>$state.warrantyStatus === 'valid' ? 'Expires Dec 2025' : 'Expired Jan 2024'</AlertDescription>
              </Alert>
            </div>
          </CardContent>
        </Card>
        <Card className="lg:col-span-1 group hover:shadow-2xl transition-all duration-300 border-2 border-border hover:border-primary/50">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-2xl group-hover:text-primary">
              <PhoneIcon className="h-8 w-8" />
              <div>Live Chat</div>
            </CardTitle>
            <CardDescription>Talk to support agent now</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 pt-2">
            <div className="h-48 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">Live Chat Widget</div>
            <Button variant="outline" size="sm" className="w-full" onClick={toggleChat}>
              <div className="h-4 w-4 mr-2" />
              <div>$state.chatOpen ? 'Close Chat' : 'Start Chat'</div>
            </Button>
            <p className="text-xs text-muted-foreground text-center">Agents available 24/7</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
        <Card>
          <CardHeader>
            <CardTitle>Submit Support Ticket</CardTitle>
            <CardDescription>Describe your issue and attach files</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Field>
              <FieldLabel>Subject</FieldLabel>
              <FieldContent>
                <Input placeholder="Battery draining fast" value={ticketSubject} onChange={setTicketSubject} />
              </FieldContent>
            </Field>
            <Field>
              <FieldLabel>Description</FieldLabel>
              <FieldContent>
                <Textarea placeholder="Tell us about the problem..." rows={4} value={ticketDescription} onChange={setTicketDescription} />
              </FieldContent>
            </Field>
            <Field>
              <FieldLabel>Attach Files</FieldLabel>
              <FieldContent>
                <Input type="file" multiple onChange={handleFileUpload} />
              </FieldContent>
              <FieldDescription>Photos, videos, or diagnostic files (max 50MB)</FieldDescription>
            </Field>
            <Button size="lg" className="w-full" onClick={submitTicket}>
              <Spinner className="mr-2 h-4 w-4" />
              <div>Submit Ticket</div>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Service Centers</CardTitle>
            <CardDescription>Find authorized repair locations near you</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Field>
              <FieldLabel>City or ZIP</FieldLabel>
              <FieldContent>
                <Input placeholder="New York, NY 10001" value={locationQuery} onChange={setLocationQuery} />
              </FieldContent>
            </Field>
            <div className="h-64 bg-muted rounded-lg flex items-center justify-center text-muted-foreground relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-muted to-accent/30" />
              <div>Google Maps Locator</div>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Location</TableHead>
                  <TableHead>Distance</TableHead>
                  <TableHead>Hours</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Apple Store Fifth Ave</TableCell>
                  <TableCell>1.2 mi</TableCell>
                  <TableCell>9AM - 9PM</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Best Buy Manhattan</TableCell>
                  <TableCell>0.8 mi</TableCell>
                  <TableCell>10AM - 8PM</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Button variant="outline" size="sm" className="w-full mt-4" onClick={openMaps}>Get Directions</Button>
          </CardContent>
        </Card>
      </div>
      <Card className="border-0 shadow-none">
        <CardContent className="text-center py-16">
          <h2 className="text-3xl font-bold mb-4">Need immediate help?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">Our support team responds within 2 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="flex-1 max-w-sm" onClick={submitTicket}>
              <UserIcon className="h-5 w-5 mr-2" />
              <div>Open Ticket</div>
            </Button>
            <Button variant="outline" size="lg" className="flex-1 max-w-sm" onClick={toggleChat}>
              <PhoneIcon className="h-5 w-5 mr-2" />
              <div>Live Chat</div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
