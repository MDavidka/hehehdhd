export function applyPromo(event: { preventDefault(): void }): void {
  event.preventDefault()
  const promoCode = (event.target as HTMLFormElement)?.querySelector('input')?.value || localStorage.getItem('promoCode') || ''
  if (promoCode.toUpperCase() === 'SAVE20') {
    localStorage.setItem('promoCode', promoCode)
    localStorage.setItem('promoDiscount', '20% off')
    window.alert('Promo code applied! 20% discount added.')
  } else {
    window.alert('Invalid promo code. Please try again.')
  }
}

export function clearCart(event: { preventDefault(): void }): void {
  event.preventDefault()
  localStorage.removeItem('cart')
  localStorage.removeItem('promoCode')
  localStorage.removeItem('promoDiscount')
  window.location.reload()
}

export function proceedToCheckout(event: { preventDefault(): void }): void {
  event.preventDefault()
  if (!localStorage.getItem('cart')) {
    window.alert('Your cart is empty.')
    return
  }
  window.location.href = '/checkout'
}

export function addAccessory1(event: { preventDefault(): void }): void {
  event.preventDefault()
  let cart = JSON.parse(localStorage.getItem('cart') || '[]')
  cart.push({ id: 'clear-case', name: 'Clear Case', price: 29, quantity: 1 })
  localStorage.setItem('cart', JSON.stringify(cart))
  window.alert('Clear Case added to cart!')
  window.location.reload()
}

export function addAccessory2(event: { preventDefault(): void }): void {
  event.preventDefault()
  let cart = JSON.parse(localStorage.getItem('cart') || '[]')
  cart.push({ id: 'screen-protector', name: 'Screen Protector', price: 19, quantity: 1 })
  localStorage.setItem('cart', JSON.stringify(cart))
  window.alert('Screen Protector added to cart!')
  window.location.reload()
}

export function guestCheckout(event: { preventDefault(): void }): void {
  event.preventDefault()
  if (!localStorage.getItem('cart')) {
    window.alert('Your cart is empty.')
    return
  }
  localStorage.setItem('guestCheckout', 'true')
  window.location.href = '/checkout'
}
