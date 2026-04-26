export function submitTicket(event: { preventDefault(): void; target: unknown }): void {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);
  fetch('/api/support-ticket', {
    method: 'POST',
    body: formData,
  })
    .then(() => {
      window.alert('Ticket submitted successfully! We will respond within 24 hours.');
      form.reset();
    })
    .catch(() => {
      window.alert('Something went wrong. Please try again.');
    });
}

export function setFiles(event: { target: { files: FileList | null } }): void {
  const files = event.target.files;
  if (files) {
    localStorage.setItem('ticketFiles', JSON.stringify(Array.from(files).map(f => f.name)));
  }
}

export function openLiveChat(event: { preventDefault(): void }): void {
  event.preventDefault();
  window.open('https://phoneshop.zendesk.com/chat', '_blank', 'width=500,height=600');
}

export function callSupport(event: { preventDefault(): void }): void {
  event.preventDefault();
  window.location.href = 'tel:(555)123-4567';
}

export function copyEmail(event: { preventDefault(): void }): void {
  event.preventDefault();
  navigator.clipboard.writeText('support@phoneshop.com').then(() => {
    const original = (event.target as HTMLElement).textContent;
    (event.target as HTMLElement).textContent = 'Copied!';
    setTimeout(() => {
      (event.target as HTMLElement).textContent = original;
    }, 2000);
  });
}
