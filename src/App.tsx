import { Routes, Route } from 'react-router-dom'
import { SiteNav } from './components/site-nav'
import { SiteFooter } from './components/site-footer'
import { Home } from './pages/index'
import { Phones } from './pages/phones'
import { PhoneDetails } from './pages/phones-id'
import { Deals } from './pages/deals'
import { About } from './pages/about'
import { Contact } from './pages/contact'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteNav />
      <main className="flex-1">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phones" element={<Phones />} />
        <Route path="/phones/:id" element={<PhoneDetails />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  )
}
