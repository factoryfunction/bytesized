export const handleSandboxMessages = (handler) => {
  return window.addEventListener('message', (event) => {
    if (event.data.fromSandbox) handler(event.data)
  })
}

export const cancelSandboxMessageHandler = (handler) => {
  window.removeEventListener('message', handler, true)
}
