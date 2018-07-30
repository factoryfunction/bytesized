import { observable, action, computed } from 'mobx'
import { ComponentStore } from 'ComponentStore'

const DEFAULT_EDITOR_VALUE =
  "\nsetInterval(() => { \n\tconsole.warn('shit') \n }, 2000) \n"

const DEFAULT_WORKER_OPTIONS = {
  timeout: 7500
}

const createSandbox = (url, options = {}) => {
  const _options = { ...DEFAULT_WORKER_OPTIONS, ...options }
  const worker = new Worker(url)

  setTimeout(() => {
    worker.terminate()
  }, _options.timeout)

  return worker
}

const createSandboxedUrl = (code) => {
  const blob = new Blob([code], { type: 'application/javascript' }) // the blob
  return URL.createObjectURL(blob)
}

export class ScratchPadStore extends ComponentStore {
  @observable editorValue: string = DEFAULT_EDITOR_VALUE
  @observable logs: any[] = []
  @observable executionData = {}
  @observable sandbox = null

  @action
  setEditorValue = (value) => {
    this.editorValue = value
  }

  @action
  beginExecution = () => {
    this.clearLogs()
    this.sandbox = createSandbox('/scripts/sandbox.js')

    this.sandbox.postMessage({
      type: 'execute',
      url: createSandboxedUrl(this.editorValue)
    })

    this.sandbox.addEventListener('message', (event) => {
      console.log(event)
    })
  }

  @action
  endExecution = (data) => {
    this.sandbox.terminate()
    this.sandbox = null
  }

  @action
  addLog = (log) => {
    this.logs.push(log)
  }

  @action
  clearLogs = () => {
    this.logs = []
  }

  @computed
  get isExecuting() {
    return !!this.sandbox
  }
}
