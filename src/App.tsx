import { Routes, Route } from 'react-router-dom'
import { SiteNav } from './components/site-nav'
import { SiteFooter } from './components/site-footer'
import { Home } from './pages/index'
import { Products } from './pages/products'
import { Deals } from './pages/deals'
import { TradeIn } from './pages/trade-in'
import { About } from './pages/about'
import { Support } from './pages/support'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteNav />
      <main className="flex-1">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/trade-in" element={<TradeIn />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  )
}
