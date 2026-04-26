import { Routes, Route } from 'react-router-dom'
import { SiteNav } from './components/site-nav'
import siteStructure from './data/site-structure.json'
import { Home } from './pages/index'
import { Phones } from './pages/phones'
import { Deals } from './pages/deals'
import { Cart } from './pages/cart'
import { TradeIn } from './pages/trade-in'
import { Support } from './pages/support'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteNav items={siteStructure.nav} />
      <main className="flex-1">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phones" element={<Phones />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/trade-in" element={<TradeIn />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}
