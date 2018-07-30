self.__console = self.console
import { Hook, Decode } from 'console-feed'

const logIt = (type) => (...args) => {
  self.__console[type](args)
  processArgs(type)(args)
}

Hook(self.console, (log) => {
  self.postMessage({ args: Decode(log) })
})

// const url = URL.createObjectURL(blob);
// const processArgs = (type) => (args) => {
//   const finalArgs = Array(args.length)
//   args.forEach((arg, i) => {
//     finalArgs[i] = new Promise((resolve, reject) => {
//       const reader = new FileReader()

//       reader.addEventListener('loadend', function() {
//         self.__console.log('GOT THE RESULT:', reader.result)
//         resolve(reader.result)
//       })

//       const a = ['number', 'string', 'boolean'].includes(typeof arg)
//         ? arg
//         : JSON.stringify(arg)

//       self.__console.log({ arg, a })
//       const blob = new Blob([a], { type: 'application/javascript' }) // pass a useful mime type here
//       reader.readAsText(blob)
//     })
//   })

//   Promise.all(finalArgs).then((values) => {
//     self.__console.log('done with that shit:', { values, finalArgs })
//     self.postMessage({ type, args: values })
//   })
// }

self.console = {
  log: logIt('log'),
  warn: logIt('warn'),
  error: logIt('error'),
  debug: logIt('debug'),
  table: logIt('table'),
  info: logIt('info')
}
