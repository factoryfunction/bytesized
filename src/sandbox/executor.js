// const postMessage = (event) => (type) => (data) => {
//   const time = Date.now()

//   return event.source.postMessage(
//     {
//       id: chance.string(),
//       time,
//       type,
//       ...data
//     },
//     event.origin
//   )
// }

// export const handleMessage = (event) => {

//   const post = postMessage(event)
//   console.log(window.scratchPadStore)

//   Hook(window.console, (log) => {
//     window.scratchPadStore.addLog(log)
//   })

//   setTimeout(() => post('END')({}), 10000)
//   sandbox()
// }
