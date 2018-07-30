import './console'
importScripts('https://cdnjs.cloudflare.com/ajax/libs/mobx/5.0.3/mobx.umd.js')
const { observable, action, computed, autorun } = mobx

export const createMessenger = () => {
  self.onmessage = (event) => {
    const { data, origin } = event

    const context = {
      event,
      data,
      origin
    }

    if (data.type === 'execute') {
      importScripts(data.url)
    }
  }
}
