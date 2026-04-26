export function setPriceFilter0_300(): void {
  localStorage.setItem('phones.priceFilter', '0-300');
  window.dispatchEvent(new CustomEvent('phonesFiltersChanged'));
}

export function setPriceFilter300_600(): void {
  localStorage.setItem('phones.priceFilter', '300-600');
  window.dispatchEvent(new CustomEvent('phonesFiltersChanged'));
}

export function setPriceFilter600(): void {
  localStorage.setItem('phones.priceFilter', '600+');
  window.dispatchEvent(new CustomEvent('phonesFiltersChanged'));
}

export function addToCart(): void {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const phoneName = localStorage.getItem('phones.selectedPhone') || 'Selected Phone';
  cart.push({ name: phoneName, quantity: 1 });
  localStorage.setItem('cart', JSON.stringify(cart));
  window.alert('Added to cart!');
}
