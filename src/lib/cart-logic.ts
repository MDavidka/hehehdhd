export function proceedToCheckout(event: { preventDefault(): void }): void {
  event.preventDefault()
  const cartItems = localStorage.getItem('cart')
  if (cartItems) {
    window.location.href = '/checkout'
  } else {
    window.alert('Your cart is empty')
  }
}

export function applyDiscount(event: { preventDefault(): void }): void {
  event.preventDefault()
  const code = (event.target as HTMLFormElement).querySelector('input')?.value || ''
  if (code.toUpperCase() === 'SAVE10' || code.toUpperCase() === 'WELCOME20') {
    const savings = code.toUpperCase() === 'SAVE10' ? 10.00 : 20.00
    localStorage.setItem('discountCode', code)
    localStorage.setItem('discountSavings', savings.toString())
    window.alert(`Discount applied! Saved $${savings.toFixed(2)}`)
  } else {
    window.alert('Invalid discount code')
  }
}

export function calculateShipping(event: { preventDefault(): void }): void {
  event.preventDefault()
  const zipInput = (event.target as HTMLFormElement).querySelector('input')?.value || ''
  if (zipInput.length === 5 && /^\d{5}$/.test(zipInput)) {
    const rates: Record<string, number> = {
      '90210': 12.99,
      '10001': 9.99,
      '60601': 8.99,
      '33101': 15.99
    }
    const estimate = rates[zipInput] || 9.99
    localStorage.setItem('zipCode', zipInput)
    localStorage.setItem('shippingEstimate', estimate.toString())
    window.alert(`Shipping to ${zipInput}: $${estimate.toFixed(2)}`)
  } else {
    window.alert('Please enter a valid 5-digit ZIP code')
  }
}
