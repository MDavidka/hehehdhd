export function addDealOfTheDayToCart(event: { preventDefault(): void }): void {
  event.preventDefault()
  const cart = JSON.parse(localStorage.getItem('cart') || '[]')
  cart.push({ id: 'iphone16-promax', name: 'iPhone 16 Pro Max', price: 999, quantity: 1, deal: 'Deal of the Day' })
  localStorage.setItem('cart', JSON.stringify(cart))
  window.alert('Deal of the Day added to cart! Redirecting...')
  window.location.href = '/cart'
}

export function claimDealOfTheDay(event: { preventDefault(): void }): void {
  event.preventDefault()
  const cart = JSON.parse(localStorage.getItem('cart') || '[]')
  cart.push({ id: 'iphone16-deal', name: 'iPhone 16 Pro Max (Flash Sale)', price: 999, quantity: 1, stockLeft: 8 })
  localStorage.setItem('cart', JSON.stringify(cart))
  window.alert('Deal claimed! 8 left in stock. Added to cart.')
  window.location.href = '/cart'
}

export function addBundleToCart(event: { preventDefault(): void }): void {
  event.preventDefault()
  const cart = JSON.parse(localStorage.getItem('cart') || '[]')
  const quantity = parseInt(localStorage.getItem('bundleQuantity') || '1')
  cart.push({ 
    id: 'iphone16-bundle', 
    name: 'iPhone 16 + Case + Charger Bundle', 
    price: 1248, 
    quantity, 
    savings: 151,
    bundle: true 
  })
  localStorage.setItem('cart', JSON.stringify(cart))
  window.alert(`Bundle (${quantity}x) added to cart! Saved $151.`)
  window.location.href = '/cart'
}

export function addSamsungToCart(event: { preventDefault(): void }): void {
  event.preventDefault()
  const cart = JSON.parse(localStorage.getItem('cart') || '[]')
  cart.push({ id: 'samsung-s24', name: 'Samsung Galaxy S24 Ultra (Refurbished)', price: 899, quantity: 1, condition: 'Excellent', stockLeft: 5 })
  localStorage.setItem('cart', JSON.stringify(cart))
  window.alert('Samsung deal claimed! 5 left in stock. Added to cart.')
  window.location.href = '/cart'
}

export function addPixelToCart(event: { preventDefault(): void }): void {
  event.preventDefault()
  const cart = JSON.parse(localStorage.getItem('cart') || '[]')
  cart.push({ id: 'pixel9-pro', name: 'Google Pixel 9 Pro (Refurbished)', price: 749, quantity: 1, condition: 'Very Good', stockLeft: 12 })
  localStorage.setItem('cart', JSON.stringify(cart))
  window.alert('Pixel deal claimed! 12 left in stock. Added to cart.')
  window.location.href = '/cart'
}

export function addIphone14ToCart(event: { preventDefault(): void }): void {
  event.preventDefault()
  const cart = JSON.parse(localStorage.getItem('cart') || '[]')
  cart.push({ id: 'iphone14-clearance', name: 'iPhone 14 (Clearance)', price: 599, quantity: 1, clearance: true, stockLeft: 3 })
  localStorage.setItem('cart', JSON.stringify(cart))
  window.alert('Clearance iPhone 14 grabbed! Only 3 left. Added to cart.')
  window.location.href = '/cart'
}
