import { Link, useLocation } from 'react-router-dom'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { Input } from '@/components/ui/input'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'

type SiteNavItem = {
  to: string
  label: string
}

type SiteNavProps = {
  items: SiteNavItem[]
  brandName?: string
}

export function SiteNav({ items, brandName: brandNameProp }: SiteNavProps) {
  const { pathname } = useLocation()
  const brandName = brandNameProp ?? "Phone"
  const navItems = items.length > 0 ? items : [{ to: '/', label: brandName }]
  return (
    <nav className="w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className={"container mx-auto px-4 sm:px-6 lg:px-8 " + "py-3"}>
        <div className={"hidden md:flex items-center justify-between gap-4"}>
          <Link to="/" className="font-semibold tracking-tight">{brandName}</Link>
          <div className="flex items-center gap-1 flex-1 justify-center">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to}>
                <Button variant={pathname === item.to ? 'secondary' : 'ghost'} size="sm">{item.label}</Button>
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="relative"><MagnifyingGlassIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" /><Input placeholder="Search products" className="h-9 w-56 pl-8" /></div>
            <Button variant="ghost" size="icon" aria-label="Cart"><ShoppingBagIcon className="h-5 w-5" /></Button>
            <Link to="/"><Button size="sm">Shop now</Button></Link>
          </div>
        </div>
        <div className="md:hidden flex items-center justify-between">
          <Link to="/" className="font-semibold tracking-tight">{brandName}</Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Bars3Icon className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-none border-l border-border bg-background p-6 sm:w-96 sm:max-w-sm">
              <SheetTitle className="mb-6 text-xl">{brandName}</SheetTitle>
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link key={item.to} to={item.to}>
                    <Button
                      variant={pathname === item.to ? 'secondary' : 'ghost'}
                      className="w-full justify-start text-base h-12"
                    >
                      {item.label}
                    </Button>
                  </Link>
                ))}
                <Link to="/" className="mt-6"><Button className="w-full h-12">Shop now</Button></Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
