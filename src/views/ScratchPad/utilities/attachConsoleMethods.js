import { Hook, Decode } from 'console-feed'

export const attachConsoleMethods = (store) => () => {
  const iframe = document.querySelector('#sandbox').contentWindow
  iframe.scratchPadStore = store
  iframe.Decode = Decode
  iframe.Hook = Hook
}
