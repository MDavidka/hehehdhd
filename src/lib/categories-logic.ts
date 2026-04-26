export function viewAllProducts(event: { preventDefault(): void }): void {
  event.preventDefault()
  window.location.href = '/products'
}

export function openPhotoGallery(event: { preventDefault(): void }): void {
  event.preventDefault()
  window.alert('Photo gallery modal would open here.\n\nSample photos:\n• iPhone 16 Pro Max: 200MP main camera\n• Pixel 9 Pro XL: Advanced night mode\n• Galaxy S25 Ultra: 100x Space Zoom')
}
