import { observable, action, computed } from 'mobx'
import ComponentStore from '#utilities/ComponentStore'

const DEFAULT_CONTENT =
  "const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';\n\nconst getUsers = fetch(ENDPOINT).then(res => res.json())\n\ngetUsers.then(users => {\n\tconsole.log('got the users')\n  console.log(users)\n})\n"

export default class ModuleStore extends ComponentStore {
  @observable originalEditorContent: string = DEFAULT_CONTENT
  @observable editorContent: string = DEFAULT_CONTENT
  @observable sandboxActive: boolean = false
  @observable iFrameReady: boolean = false
  @observable logs = []

  /**
   * When the play button is pressed.
   */

  @action
  startSandbox = () => {
    this.clearLogs()
    this.toggleSandbox()
    this.component.iFrame.current.contentWindow.postMessage(
      { eval: this.editorContent },
      '*'
    )
  }

  @action
  setIframeReady = (status) => {
    this.iFrameReady = status
  }

  /**
   *
   */

  @action
  toggleSandbox = () => {
    this.sandboxActive = !this.sandboxActive
  }

  /**
   * When the reset button is pressed.
   */

  @action
  resetEditor = () => {
    this.clearLogs()
    this.editorContent = this.originalEditorContent
  }

  /**
   * When the stop button is pressed.
   */

  @action
  stopSandbox = () => {
    this.toggleSandbox()
    this.setIframeReady(false)
  }

  /**
   * When the clear button is pressed or when the code is executed.
   */

  @action
  clearLogs = () => {
    this.messages = []
  }

  /**
   * When the user changes the editor content.
   */

  @action
  setEditorContent = (value) => {
    this.editorContent = value
  }

  /**
   * When messages come in from the iframe.
   */

  @action
  pushMessage = (message) => {
    console.log('ModuleStore.pushMessage()', message)
    this.messages.push(message.log)
  }
}
