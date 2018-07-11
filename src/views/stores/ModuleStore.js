import { observable, action, computed } from 'mobx'

import ComponentStore from '#utilities/ComponentStore'

export default class ModuleStore extends ComponentStore {
  @observable originalEditorContent: string = '// write shit here'
  @observable editorContent: string = '// write shit here'

  @observable messages: [] = []

  eval = () => {
    this.clearMessages()
    this.component.iFrame.current.contentWindow.postMessage(
      { yolo: true, eval: this.editorContent },
      '*'
    )
  }

  @action
  clearMessages = () => {
    this.messages = []
  }

  @action
  setEditorContent = (value) => {
    this.editorContent = value
  }

  @action
  pushMessage = (message) => {
    this.messages.push(message)
  }
}
