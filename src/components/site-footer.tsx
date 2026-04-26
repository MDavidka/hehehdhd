import { Link } from 'react-router-dom'

type SiteFooterProps = { items: { to: string; label: string }[] }
export function SiteFooter({ items }: SiteFooterProps) {
  const cols = [
    { title: 'Shop', links: items.slice(0, Math.ceil(items.length / 2)) },
    { title: 'About', links: items.slice(Math.ceil(items.length / 2)) },
    { title: 'Help', links: [{ to: '/', label: 'FAQs' }, { to: '/', label: 'Contact' }] },
    { title: 'Legal', links: [{ to: '/', label: 'Privacy' }, { to: '/', label: 'Terms' }] },
  ]
  return (
    <footer className="border-t border-border mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {cols.map((col) => (
          <div key={col.title}>
            <h4 className="font-medium mb-3">{col.title}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {col.links.map((l, i) => (
                <li key={i}><Link to={l.to} className="hover:text-foreground">{l.label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-muted-foreground">© 2026 Phone</div>
      </div>
    </footer>
  )
}
