export function checkWarranty(event: { preventDefault(): void }): void {
  event.preventDefault()
  const serialNumber = (event.target as HTMLFormElement).querySelector('input[placeholder*="serial"]')?.value || ''
  if (!serialNumber || serialNumber.length < 12) {
    window.alert('Please enter a valid 12-character serial number.')
    return
  }
  fetch('/api/support/warranty', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ serialNumber })
  }).then(res => res.json()).then(data => {
    if (data.status === 'valid') {
      window.alert(`Active warranty. Expires: ${data.expires}`)
    } else {
      window.alert(`Warranty expired: ${data.expiredDate}`)
    }
  }).catch(() => {
    window.alert('Invalid serial number or service unavailable. Please try again.')
  })
}

export function toggleChat(event: { preventDefault(): void }): void {
  event.preventDefault()
  const isOpen = localStorage.getItem('chatOpen') === 'true'
  if (isOpen) {
    localStorage.removeItem('chatOpen')
    window.alert('Chat closed.')
  } else {
    localStorage.setItem('chatOpen', 'true')
    window.open('https://example-chat-widget.com', 'chat', 'width=400,height=600')
  }
}

export function handleFileUpload(event: { target: { files: FileList } }): void {
  const files = Array.from(event.target.files)
  const totalSize = files.reduce((sum, file) => sum + file.size, 0)
  if (totalSize > 50 * 1024 * 1024) {
    window.alert('Total file size exceeds 50MB limit.')
    event.target.value = ''
    return
  }
  const allowedTypes = ['image/jpeg', 'image/png', 'video/mp4', 'application/zip']
  const invalidFiles = files.filter(file => !allowedTypes.includes(file.type))
  if (invalidFiles.length > 0) {
    window.alert('Unsupported file types. Please use JPG, PNG, MP4, or ZIP.')
    event.target.value = ''
  } else {
    window.alert(`${files.length} file(s) selected (${Math.round(totalSize / 1024)}KB)`)
  }
}

export function submitTicket(event: { preventDefault(): void }): void {
  event.preventDefault()
  const form = event.target as HTMLFormElement
  const formData = new FormData(form)
  const files = formData.getAll('files') as File[]
  if (files.length > 5) {
    window.alert('Maximum 5 files allowed.')
    return
  }
  fetch('/api/support/ticket', {
    method: 'POST',
    body: formData
  }).then(res => res.json()).then(data => {
    window.alert(`Ticket #${data.ticketId} submitted successfully! Response within 2 hours.`)
    form.reset()
  }).catch(() => {
    window.alert('Submission failed. Please try again.')
  })
}

export function openMaps(event: { preventDefault(): void }): void {
  event.preventDefault()
  const locationQuery = (event.target as HTMLFormElement).querySelector('input[placeholder*="ZIP"]')?.value || 'current location'
  const url = `https://www.google.com/maps/search/service+centers+near+${encodeURIComponent(locationQuery)}`
  window.open(url, '_blank')
}
