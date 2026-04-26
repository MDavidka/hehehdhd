export function submitInquiry(event: { preventDefault(): void, target: unknown }): void {
  event.preventDefault()
  const form = event.target as HTMLFormElement
  const formData = new FormData(form)
  
  fetch('/api/contact', { 
    method: 'POST', 
    body: formData 
  }).then(async (response) => {
    if (response.ok) {
      window.alert('Thank you for your inquiry! We will respond within 24 hours.')
      form.reset()
    } else {
      throw new Error('Submission failed')
    }
  }).catch(() => {
    window.alert('Something went wrong. Please try again.')
  })
}

export function openLiveChat(event: { preventDefault(): void }): void {
  event.preventDefault()
  window.open('https://livechat.phone-support.com', '_blank', 'noopener,noreferrer')
}
