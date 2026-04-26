import { Link } from 'react-router-dom'

const BRAND = "Phone"
const COLUMNS = [
  { title: 'Shop', items: [
    { to: '/deals', label: 'Deals' },
  ]},
  { title: 'Support', items: [
    { to: '/contact', label: 'Contact' },
  ]},
  { title: 'Company', items: [
    { to: '/about', label: 'About' },
  ]},
]

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-border bg-card mt-auto">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8 py-12">
        <div>
          <p className="text-base font-semibold">{BRAND}</p>
          <p className="mt-2 text-sm text-muted-foreground">© {new Date().getFullYear()} {BRAND}</p>
        </div>
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <p className="text-sm font-semibold mb-3">{col.title}</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {col.items.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-foreground transition">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  )
}
