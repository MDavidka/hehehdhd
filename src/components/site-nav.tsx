import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Bars3Icon, ShoppingCartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'

const BRAND = "Phone"
const CTA = { label: "Shop deals", href: "/deals" }

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/deals', label: 'Deals' },
  { to: '/trade-in', label: 'Trade In' },
  { to: '/about', label: 'About' },
  { to: '/support', label: 'Support' },
]

export function SiteNav() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  return (
    <nav className="w-full border-b border-border bg-background sticky top-0 z-50">
      <div className="container mx-auto flex items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="text-lg font-bold tracking-tight">{BRAND}</Link>
        <div className="hidden lg:flex flex-1 max-w-md mx-4 items-center rounded-md border border-border bg-muted/40 px-3 py-1.5">
          <MagnifyingGlassIcon className="h-4 w-4 text-muted-foreground" />
          <span className="ml-2 text-sm text-muted-foreground">Search the store</span>
        </div>
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <Link key={item.to} to={item.to}>
              <Button variant={pathname === item.to ? 'secondary' : 'ghost'} size="sm">
                {item.label}
              </Button>
            </Link>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Link to={CTA.href}>
            <Button size="sm" className="hidden sm:inline-flex">
              <ShoppingCartIcon className="h-4 w-4 mr-2" />
              {CTA.label}
            </Button>
          </Link>
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Bars3Icon className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-none border-l border-border bg-background p-6 sm:w-80 sm:max-w-sm">
                <SheetTitle className="mb-4">{BRAND}</SheetTitle>
                <div className="flex flex-col gap-1">
                  {NAV_ITEMS.map((item) => (
                    <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>
                      <Button variant={pathname === item.to ? 'secondary' : 'ghost'} className="w-full justify-start">
                        {item.label}
                      </Button>
                    </Link>
                  ))}
                  <Link to={CTA.href} onClick={() => setOpen(false)} className="mt-4">
                    <Button className="w-full">
                      <ShoppingCartIcon className="h-4 w-4 mr-2" />
                      {CTA.label}
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
