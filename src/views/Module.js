import * as React from 'react'
import { toJS, autorun } from 'mobx'
import { observable, when, action, computed } from 'mobx'
import { observer } from 'mobx-react'
// import TimeAgo from 'react-timeago'
import SplitPane from 'react-split-pane'
import { Console } from 'console-feed'
import { Hook, Decode } from 'console-feed'

import ModuleStore from './stores/ModuleStore'
import CodeEditor from '#components/CodeEditor'
import Button from '#components/Button'

import {
  handleSandboxMessages,
  cancelSandboxMessageHandler
} from './utilities/sandboxMessaging'

import './styles/Module.css'

const DEFAULT_CONTENT =
  "const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';\n\nconst getUsers = fetch(ENDPOINT).then(res => res.json())\n\ngetUsers.then(users => {\n\tconsole.log('got the users')\n  console.log(users)\n})\n"

@observer
export default class Module extends React.Component {
  @observable originalEditorContent: string = DEFAULT_CONTENT
  @observable editorContent: string = DEFAULT_CONTENT
  @observable sandboxReadyState: string = false
  @observable logs = []

  iFrame = React.createRef()
  messageHandler = null

  componentWillMount() {
    this.messageHandler = handleSandboxMessages((data) => {
      this.pushMessage(data.data)
    })
  }

  componentWillUnmount() {
    cancelSandboxMessageHandler(this.messageHandler)
  }

  /**
   * When the play button is pressed.
   */

  @action
  startSandbox = () => {
    this.sandboxReadyState = true
  }

  /**
   * When the reset button is pressed.
   */

  @action
  resetEditor = () => {
    this.editorContent = this.originalEditorContent
  }

  /**
   * When the stop button is pressed.
   */

  @action
  stopSandbox = () => {
    this.sandboxReadyState = false
  }

  /**
   * When the clear button is pressed or when the code is executed.
   */

  @action
  clearLogs = () => {
    this.logs = []
  }

  /**
   * When the user changes the editor content.
   */

  @action
  setEditorContent = (value) => {
    this.editorContent = value
  }

  /**
   * When log comes in from the iframe.
   */

  @action
  pushMessage = (message) => {
    this.logs.push(message.log)
  }

  /**
   * When the iFrame mounts.
   */

  @action
  runSandbox = () => {
    this.clearLogs()
    this.iFrame.current.contentWindow.Hook = Hook
    this.iFrame.current.contentWindow.Decode = Decode
    this.iFrame.current.contentWindow.addEventListener(
      'DOMContentLoaded',
      () => {
        this.iFrame.current.contentWindow.postMessage(
          { eval: this.editorContent },
          '*'
        )
      }
    )
  }

  render() {
    return (
      <div styleName="Module">
        <SplitPane
          allowResize
          styleName="SplitPane"
          split="horizontal"
          minSize={500}
        >
          <CodeEditor
            iFrame={this.iFrame}
            onChange={this.setEditorContent}
            content={this.editorContent}
          />
          <SplitPane split="horizontal">
            <div>
              <Button onClick={this.startSandbox}>Run</Button>{' '}
              <Button onClick={this.stopSandbox}>Stop</Button>{' '}
              <Button onClick={this.resetSandbox}>Reset</Button>{' '}
            </div>
            <Console logs={toJS(this.logs)} />
          </SplitPane>
        </SplitPane>
        <If condition={this.sandboxReadyState}>
          <CodeSandbox iFrame={this.iFrame} didMount={this.runSandbox} />
        </If>
      </div>
    )
  }
}

class CodeSandbox extends React.Component {
  componentDidMount() {
    this.props.didMount()
  }

  render() {
    return (
      <iframe
        ref={this.props.iFrame}
        src="/sandbox.html"
        sandbox="allow-scripts allow-same-origin"
        title="codeSandbox"
        width="0"
        height="0"
      />
    )
  }
}
