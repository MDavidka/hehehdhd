import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Textarea } from '@/components/ui/textarea'
import { CheckCircleIcon, ClockIcon, LifebuoyIcon, PhoneIcon, QuestionMarkCircleIcon, SendIcon, ShieldCheckIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { submitInquiry, openLiveChat } from '@/lib/contact-logic'

export function Contact() {
  React.useEffect(() => { document.title = "Contact" }, [])
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl space-y-12 lg:space-y-20">
      <div className="text-center mb-16 lg:mb-24">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent mb-6">Contact</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">Get in touch with our support team for sales inquiries, warranty support, returns, or any questions about your phone purchase.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <Card className="lg:col-span-1 shadow-xl">
          <CardHeader >
            <CardTitle className="flex items-center gap-2">
              <PhoneIcon className="h-6 w-6 text-primary" />
              <div>Contact Form</div>
            </CardTitle>
            <CardDescription>Submit your inquiry and we'll respond within 24 hours.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <Label htmlFor="category">Inquiry Type</Label>
              <Select >
                <SelectTrigger >
                  <SelectValue placeholder="Select inquiry type" />
                </SelectTrigger>
                <SelectContent >
                  <SelectItem value="sales">Sales Questions</SelectItem>
                  <SelectItem value="support">Technical Support</SelectItem>
                  <SelectItem value="returns">Returns & Warranty</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-4">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" value={email} onChange={setEmail} />
            </div>
            <div className="space-y-4">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Describe your inquiry..." rows={5} value={message} onChange={setMessage} />
            </div>
            <div className="space-y-4">
              <Label htmlFor="attachment">Attach File (Optional)</Label>
              <Input id="attachment" type="file" />
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <Button className="w-full" onClick={submitInquiry}>
              <SendIcon className="h-4 w-4 mr-2" />
              <div>Submit Inquiry</div>
            </Button>
          </CardFooter>
        </Card>
        <div className="space-y-8 lg:col-span-1">
          <Card >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LifebuoyIcon className="h-6 w-6 text-primary" />
                <div>Live Chat</div>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center py-12">
              <Button variant="outline" size="lg" className="w-full max-w-sm mx-auto text-lg font-medium" onClick={openLiveChat}>
                <SparklesIcon className="h-5 w-5 mr-2" />
                <div>Start Live Chat</div>
              </Button>
              <p className="text-sm text-muted-foreground mt-4">Agents available 24/7</p>
            </CardContent>
          </Card>
          <Card >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <QuestionMarkCircleIcon className="h-6 w-6 text-primary" />
                <div>Frequently Asked Questions</div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Accordion type="single" collapsible>
                <AccordionItem value="warranty">
                  <AccordionTrigger>What is your warranty policy?</AccordionTrigger>
                  <AccordionContent>All phones come with a 2-year manufacturer warranty plus our 30-day satisfaction guarantee. We handle all warranty claims directly.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="returns">
                  <AccordionTrigger>How do I return a phone?</AccordionTrigger>
                  <AccordionContent>You have 30 days for returns in original condition. Contact us first and we'll provide a free return label.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="repairs">
                  <AccordionTrigger>How long do repairs take?</AccordionTrigger>
                  <AccordionContent>Most repairs are completed within 3-5 business days. Express service available for an additional fee.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="tradein">
                  <AccordionTrigger>What's your trade-in process?</AccordionTrigger>
                  <AccordionContent>Get an instant quote online. Ship your phone or drop it off at any store location for immediate credit.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="payment">
                  <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                  <AccordionContent>Credit/debit cards, Apple Pay, Google Pay, PayPal, Affirm financing, and trade-ins.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="delivery">
                  <AccordionTrigger>When will my order arrive?</AccordionTrigger>
                  <AccordionContent>In-stock orders ship within 24 hours. Standard delivery 2-3 days, express overnight available.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="stock">
                  <AccordionTrigger>How do I check stock availability?</AccordionTrigger>
                  <AccordionContent>Use our live inventory checker on each product page or call any store location.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="insurance">
                  <AccordionTrigger>Do you offer phone insurance?</AccordionTrigger>
                  <AccordionContent>Yes! SquareTrade protection plans available at checkout starting at $4.99/month.</AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ClockIcon className="h-6 w-6 text-primary" />
              <div>Support Hours</div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table >
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Day</TableHead>
                    <TableHead>Phone Support</TableHead>
                    <TableHead>Live Chat</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Monday - Friday</TableCell>
                    <TableCell>9AM - 8PM</TableCell>
                    <TableCell>24/7</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Saturday</TableCell>
                    <TableCell>10AM - 6PM</TableCell>
                    <TableCell>24/7</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Sunday</TableCell>
                    <TableCell>Closed</TableCell>
                    <TableCell>24/7</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
        <Card >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheckIcon className="h-6 w-6 text-primary" />
              <div>Our Response Guarantees</div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-accent/50 rounded-lg">
              <CheckCircleIcon className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-medium">Email Inquiries</div>
                <p className="text-sm text-muted-foreground">Response within 24 hours, 7 days a week</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-accent/50 rounded-lg">
              <CheckCircleIcon className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-medium">Live Chat</div>
                <p className="text-sm text-muted-foreground">Instant response from real agents, 24/7</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-accent/50 rounded-lg">
              <CheckCircleIcon className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-medium">Phone Support</div>
                <p className="text-sm text-muted-foreground">Average hold time under 2 minutes during business hours</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
