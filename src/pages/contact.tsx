import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Field, FieldContent, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Textarea } from '@/components/ui/textarea'
import { Cog6ToothIcon, DevicePhoneMobileIcon, MagnifyingGlassIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/outline'
import { submitTicket, setFiles, openLiveChat, callSupport, copyEmail } from '@/lib/contact-logic'

export function Contact() {
  React.useEffect(() => { document.title = "Contact" }, [])
  const [issueType, setIssueType] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [subject, setSubject] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [faqSearch, setFaqSearch] = React.useState('')

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-12">Contact</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card >
          <CardHeader>
            <CardTitle>Submit Support Ticket</CardTitle>
            <CardDescription>Describe your issue and we'll get back to you within 24 hours</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={submitTicket} className="space-y-6">
              <Field>
                <FieldLabel>Issue Type</FieldLabel>
                <FieldContent>
                  <Select value={issueType} onValueChange={setIssueType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select issue type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="order">Order Issue</SelectItem>
                      <SelectItem value="warranty">Warranty Claim</SelectItem>
                      <SelectItem value="tech">Technical Support</SelectItem>
                      <SelectItem value="return">Return/Refund</SelectItem>
                    </SelectContent>
                  </Select>
                </FieldContent>
              </Field>
              <Field>
                <FieldLabel>Email</FieldLabel>
                <FieldContent>
                  <Input type="email" placeholder="your.email@example.com" value={email} onChange={setEmail} />
                </FieldContent>
              </Field>
              <Field>
                <FieldLabel>Subject</FieldLabel>
                <FieldContent>
                  <Input placeholder="Phone not charging after update" value={subject} onChange={setSubject} />
                </FieldContent>
              </Field>
              <Field>
                <FieldLabel>Message</FieldLabel>
                <FieldContent>
                  <Textarea placeholder="Please describe your issue in detail..." rows={4} value={message} onChange={setMessage} />
                </FieldContent>
              </Field>
              <Field>
                <FieldLabel>Attach Files (Optional)</FieldLabel>
                <FieldContent>
                  <Input type="file" multiple onChange={setFiles} />
                </FieldContent>
              </Field>
              <Button type="submit" className="w-full">
                <PhoneIcon className="h-4 w-4 mr-2" />
                <div>Submit Ticket</div>
              </Button>
            </form>
          </CardContent>
        </Card>
        <div className="space-y-6">
          <Card >
            <CardHeader>
              <CardTitle>
                <PhoneIcon className="h-5 w-5 mr-2" />
                <div>Live Chat</div>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <Button variant="outline" className="w-full" onClick={openLiveChat}>
                <PhoneIcon className="h-4 w-4 mr-2" />
                <div>Start Live Chat</div>
              </Button>
              <p className="text-sm text-muted-foreground mt-2">Agents available 9AM-9PM daily</p>
            </CardContent>
          </Card>
          <Card >
            <CardHeader>
              <CardTitle>
                <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
                <div>Quick FAQ Search</div>
              </CardTitle>
              <CardDescription>Find answers for common phone issues</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <Input placeholder="iPhone 16 battery drain..." value={faqSearch} onChange={setFaqSearch} />
                <MagnifyingGlassIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Separator className="my-12" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card >
          <CardHeader className="pb-2">
            <CardTitle>
              <PhoneIcon className="h-5 w-5 mr-2" />
              <div>Phone Support</div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-2xl font-bold">(555) 123-4567</p>
            <Button variant="ghost" size="sm" onClick={callSupport}>Call Now</Button>
          </CardContent>
        </Card>
        <Card >
          <CardHeader className="pb-2">
            <CardTitle>
              <DevicePhoneMobileIcon className="h-5 w-5 mr-2" />
              <div>Text Support</div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-2xl font-bold">(555) 123-4567</p>
            <Button variant="ghost" size="sm">Text Now</Button>
          </CardContent>
        </Card>
        <Card >
          <CardHeader className="pb-2">
            <CardTitle>
              <UserIcon className="h-5 w-5 mr-2" />
              <div>Email Us</div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm break-all">support@phoneshop.com</p>
            <Button variant="ghost" size="sm" onClick={copyEmail}>Copy Email</Button>
          </CardContent>
        </Card>
      </div>
      <div className="mt-16">
        <Card >
          <CardHeader>
            <CardTitle>
              <Cog6ToothIcon className="h-5 w-5 mr-2" />
              <div>Support Hours</div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Day</TableHead>
                  <TableHead>Hours</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Monday - Friday</TableCell>
                  <TableCell>9:00 AM - 9:00 PM</TableCell>
                  <TableCell className="text-right">
                    <Badge variant="default">Available</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Saturday</TableCell>
                  <TableCell>10:00 AM - 6:00 PM</TableCell>
                  <TableCell className="text-right">
                    <Badge variant="default">Available</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Sunday</TableCell>
                  <TableCell>Closed</TableCell>
                  <TableCell className="text-right">
                    <Badge variant="secondary">Closed</Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
