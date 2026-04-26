import { Routes, Route } from 'react-router-dom'
import { SiteNav } from './components/site-nav'
import { SiteFooter } from './components/site-footer'
import siteStructure from './data/site-structure.json'
import { Home } from './pages/index'
import { Products } from './pages/products'
import { Deals } from './pages/deals'
import { TradeIn } from './pages/trade-in'
import { About } from './pages/about'
import { Contact } from './pages/contact'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteNav items={siteStructure.nav} brandName={"Phone"} />
      <main className="flex-1">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/trade-in" element={<TradeIn />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <SiteFooter items={siteStructure.nav} />
    </div>
  )
}
