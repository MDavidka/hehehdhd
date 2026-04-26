import React from 'react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Field, FieldContent, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { CalendarIcon, ChatBubbleBottomCenterIcon, ChatBubbleLeftIcon, DisplayIcon, DocumentCheckIcon, HeadphonesIcon, MagnifyingGlassIcon, PhoneIcon, ShieldCheckIcon, WrenchIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'

export function Support() {
  React.useEffect(() => { document.title = "Support" }, [])
  const [searchQuery, setSearchQuery] = React.useState('')
  const [imei, setImei] = React.useState('')

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 max-w-7xl">
      <Card className="overflow-hidden">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-2xl sm:text-3xl">
            <HeadphonesIcon className="h-8 w-8" />
            <span>Support</span>
          </CardTitle>
          <CardDescription>Find answers, check warranty, schedule repairs, and get help fast</CardDescription>
        </CardHeader>
      </Card>
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>Search Help Articles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Command value={searchQuery} onValueChange={setSearchQuery} className="w-full">
              <CommandInput placeholder="Search battery life, screen replacement, software updates..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup>
                  <CommandItem value="battery">
                    <MagnifyingGlassIcon className="mr-2 h-4 w-4" />
                    <span>Battery replacement</span>
                  </CommandItem>
                  <CommandItem value="screen">
                    <DisplayIcon className="mr-2 h-4 w-4" />
                    <span>Screen repair</span>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Help Categories</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="ghost" className="justify-start h-auto py-4 px-0 text-left hover:bg-accent hover:text-accent-foreground">
              <PhoneIcon className="mr-3 h-5 w-5" />
              <span>Phone Setup & Software</span>
            </Button>
            <Button variant="ghost" className="justify-start h-auto py-4 px-0 text-left hover:bg-accent hover:text-accent-foreground">
              <ShieldCheckIcon className="mr-3 h-5 w-5" />
              <span>Warranty & Coverage</span>
            </Button>
            <Button variant="ghost" className="justify-start h-auto py-4 px-0 text-left hover:bg-accent hover:text-accent-foreground">
              <WrenchScrewdriverIcon className="mr-3 h-5 w-5" />
              <span>Hardware Repairs</span>
            </Button>
            <Button variant="ghost" className="justify-start h-auto py-4 px-0 text-left hover:bg-accent hover:text-accent-foreground">
              <ChatBubbleLeftIcon className="mr-3 h-5 w-5" />
              <span>Contact Support</span>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start gap-3">
              <CalendarIcon className="h-5 w-5" />
              <span>Schedule Repair Appointment</span>
            </Button>
            <Button className="w-full justify-start gap-3">
              <DocumentCheckIcon className="h-5 w-5" />
              <span>Download User Manuals</span>
            </Button>
            <Button className="w-full justify-start gap-3">
              <ChatBubbleBottomCenterIcon className="h-5 w-5" />
              <span>Live Chat Support</span>
            </Button>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Check Warranty Status</CardTitle>
            <CardDescription>Enter your IMEI or serial number</CardDescription>
          </CardHeader>
          <CardContent>
            <Field>
              <FieldLabel>IMEI / Serial Number</FieldLabel>
              <FieldContent>
                <Input id="imei" placeholder="Enter 15-digit IMEI or serial number" value={imei} onChange={setImei} />
              </FieldContent>
            </Field>
            <div className="flex gap-3 pt-4">
              <Button className="flex-1">Check Warranty</Button>
              <Badge variant="$state.warrantyStatus === 'valid' ? 'default' : 'secondary'">$state.warrantyStatus || 'Pending'</Badge>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Articles</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3 p-3 rounded-md hover:bg-accent">
              <div className="flex-shrink-0">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium leading-none">How to optimize battery life</p>
                <p className="text-xs text-muted-foreground">Updated 2 days ago • 12 min read</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Repair Status</CardTitle>
            <CardDescription>Track your service requests</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Case #12345</span>
              <Badge variant="outline">In Progress</Badge>
            </div>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Submitted</span>
                <span>Mar 15</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Completion</span>
                <span>Mar 22</span>
              </div>
            </div>
            <Separator />
            <Button variant="outline" size="sm" className="w-full">View Details</Button>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Get Help Now</CardTitle>
          <CardDescription>Can't find what you need?</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button size="lg" className="flex-1">
            <WrenchIcon className="mr-2 h-5 w-5" />
            <span>Start Repair Request</span>
          </Button>
          <Button variant="outline" size="lg" className="flex-1">
            <PhoneIcon className="mr-2 h-5 w-5" />
            <span>Call Support</span>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
