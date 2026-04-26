export function clearFilters(): void {
  localStorage.removeItem('phones-filters');
  window.location.reload();
}

export function toggleBulkCompare(): void {
  const current = localStorage.getItem('bulkCompare') === 'true';
  localStorage.setItem('bulkCompare', (!current).toString());
}

export function toggleSelectAll(): void {
  const current = localStorage.getItem('selectAll') === 'true';
  localStorage.setItem('selectAll', (!current).toString());
}

export function addToCart(event: { preventDefault(): void }): void {
  event.preventDefault();
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart.push({
    id: Date.now(),
    model: 'iPhone 16 Pro Max',
    price: 1199,
    quantity: 1
  });
  localStorage.setItem('cart', JSON.stringify(cart));
  window.alert('Added to cart!');
}

export function viewCart(): void {
  window.location.href = '/cart';
}
