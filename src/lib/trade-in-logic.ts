export function onSubmitQuote(event: { preventDefault(): void, target: unknown }): void {
  event.preventDefault()
  const form = event.target as HTMLFormElement
  const formData = new FormData(form)
  formData.append('action', 'getQuote')
  
  fetch('/api/trade-in/quote', { 
    method: 'POST', 
    body: formData 
  })
  .then(res => res.json())
  .then(data => {
    if (data.quote) {
      window.alert(`Trade-in quote approved: $${data.quote}!`)
      form.reset()
    } else {
      window.alert('Quote calculated. Check the amount above.')
    }
  })
  .catch(() => {
    window.alert('Something went wrong. Please try again.')
  })
}

export function handlePhotoUpload(event: { preventDefault(): void, target: unknown }): void {
  event.preventDefault()
  const target = event.target as HTMLInputElement
  if (target.files?.[0]) {
    const file = target.files[0]
    const formData = new FormData()
    formData.append('photo', file)
    
    fetch('/api/trade-in/assess-photo', { 
      method: 'POST', 
      body: formData 
    })
    .then(res => res.json())
    .then(data => {
      if (data.conditionScore) {
        window.alert(`AI Assessment: ${data.conditionScore}% condition detected`)
      }
    })
    .catch(() => {
      window.alert('Photo uploaded. Assessment in progress...')
    })
  }
}

export function generateShippingLabel(event: { preventDefault(): void }): void {
  event.preventDefault()
  const labelUrl = '/api/trade-in/shipping-label'
  window.open(labelUrl, '_blank')
  window.alert('Shipping label generated! Print and attach to your package.')
}
