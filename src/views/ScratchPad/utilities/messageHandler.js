import * as ramda from 'ramda'
const DEFAULT_DATA = {}

export const messageHandler = (store) => (message) => {
  const data = message.data || DEFAULT_DATA

  if (!data.type || !data.method) {
    return {}
  }

  switch (data.type) {
    case 'LOG':
      console.log('LOG', data)
      return store.addLog(data)
    case 'END':
      console.log('END', data)
      return store.endExecution(data)
  }
}
