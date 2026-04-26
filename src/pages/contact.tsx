import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Field, FieldContent, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Textarea } from '@/components/ui/textarea'
import { PhoneIcon } from '@heroicons/react/24/outline'
import { submitTicket, setFiles, startChat } from '@/lib/contact-logic'

export function Contact() {
  React.useEffect(() => { document.title = "Contact" }, [])
  const [orderNumber, setOrderNumber] = React.useState(0)
  const [issueType, setIssueType] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [faqQuery, setFaqQuery] = React.useState('')

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
      <Card className="mb-12 shadow-md">
        <CardHeader>
          <CardTitle>Contact</CardTitle>
          <CardDescription>Get help with your order, device issues, or account questions. Multiple channels available.</CardDescription>
        </CardHeader>
      </Card>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Submit Support Ticket</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={submitTicket} className="space-y-4">
              <Field>
                <FieldLabel>Order Number (optional)</FieldLabel>
                <FieldContent>
                  <Input placeholder="ORD-123456" value={orderNumber} onChange={setOrderNumber} />
                </FieldContent>
              </Field>
              <Field>
                <FieldLabel>Device Issue *</FieldLabel>
                <FieldContent>
                  <Select value={issueType} onValueChange={setIssueType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select issue type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="screen">Screen or Display</SelectItem>
                      <SelectItem value="battery">Battery or Charging</SelectItem>
                      <SelectItem value="software">Software or Performance</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </FieldContent>
              </Field>
              <Field>
                <FieldLabel>Message *</FieldLabel>
                <FieldContent>
                  <Textarea placeholder="Describe your issue in detail..." value={message} onChange={setMessage} rows={4} />
                </FieldContent>
              </Field>
              <Field>
                <FieldLabel>Upload Receipt/Photos (optional)</FieldLabel>
                <FieldContent>
                  <Input type="file" multiple onChange={setFiles} />
                </FieldContent>
              </Field>
              <Button type="submit" className="w-full">Submit Ticket</Button>
              <p className="text-xs text-muted-foreground">$state.trackingId ? 'Ticket submitted! Tracking: ' + $state.trackingId : ''</p>
            </form>
          </CardContent>
        </Card>
        <div className="space-y-6">
          <Card className="shadow-md relative">
            <CardHeader>
              <CardTitle>Live Chat</CardTitle>
              <CardDescription>Chat with phone experts instantly</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-24 bg-green-50 rounded-lg">
                <Button variant="outline" size="sm" onClick={startChat}>
                  <PhoneIcon className="h-4 w-4 mr-2" />
                  <span>Start Live Chat</span>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center">Average response time: 45 seconds</p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>FAQ Search</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <Command value={faqQuery} onValueChange={setFaqQuery}>
                  <CommandInput placeholder="Search FAQs..." />
                  <CommandList>
                    <CommandEmpty>No FAQs found.</CommandEmpty>
                    <CommandGroup>
                      <CommandItem value="warranty">What is your warranty policy?</CommandItem>
                      <CommandItem value="returns">How do I return a phone?</CommandItem>
                      <CommandItem value="repairs">Repair services available</CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Phone Support Hours</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Day</TableHead>
                  <TableHead>Hours</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Monday - Friday</TableCell>
                  <TableCell>9:00 AM - 8:00 PM</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Saturday</TableCell>
                  <TableCell>10:00 AM - 6:00 PM</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Sunday</TableCell>
                  <TableCell>Closed</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Response Time Guarantee</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <div>
                  <p className="font-medium">Email: 24 hours</p>
                  <p className="text-sm text-muted-foreground">support@phone.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <div>
                  <p className="font-medium">Phone: 2 hours</p>
                  <p className="text-sm text-muted-foreground">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <div>
                  <p className="font-medium">Chat: Instant</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
