import * as React from 'react'
import { observable, action, computed } from 'mobx'
import { observer } from 'mobx-react'
import TimeAgo from 'react-timeago'

import ModuleStore from './stores/ModuleStore'

import {
  handleSandboxMessages,
  cancelSandboxMessageHandler
} from './utilities/sandboxMessaging'

import CodeEditor from '#components/CodeEditor'
import Button from '#components/Button'

// import ComponentStore from '#utilities/ComponentStore'
// import Input from '#components/Input'
// import Bold from '#components/Bold'

import './styles/Module.css'

@observer
export default class Module extends React.Component {
  store = new ModuleStore(this)
  iFrame = React.createRef()
  messageHandler = null

  componentWillMount() {
    this.messageHandler = handleSandboxMessages((data) => {
      console.log('message from sandbox:', data)
      data.type === 'stdout' && this.store.pushMessage(data.data)
      data.type === 'done' &&
        this.store.pushMessage({
          logType: 'log',
          messages: ['DONE'],
          timeStamp: new Date()
        })
    })
  }

  componentWillUnmount() {
    cancelSandboxMessageHandler(this.messageHandler)
  }

  render() {
    const { props, store } = this

    return (
      <div styleName="Module">
        <p>write your mo' fuckin code</p>
        <CodeEditor
          iFrame={this.iFrame}
          onChange={store.setEditorContent}
          content={store.editorContent}
        />
        <Button onClick={store.eval}>Run Code</Button>
        <CodeSandbox iFrame={this.iFrame} />
        <Console messages={store.messages} />
      </div>
    )
  }
}

@observer
class Console extends React.Component {
  render() {
    const { props } = this

    // console.log({ props })
    return (
      <section styleName="Console">
        <h3>console</h3>
        <div styleName="Logs">
          <For each="log" of={props.messages}>
            <For each="message" of={log.messages}>
              <Log
                key={JSON.stringify(message + Math.random(99))}
                type={log.logType}
                message={message}
                timeStamp={log.timeStamp}
              />
            </For>
          </For>
        </div>
      </section>
    )
  }
}

class Log extends React.Component {
  render() {
    const { props } = this
    // console.log('log', { props })
    return (
      <pre styleName={`Log pre ${props.type}`}>
        <code>
          <If condition={props.type === 'log' && props.message === 'DONE'}>
            <span styleName="doneTimeStamp">
              [ <TimeAgo date={props.timeStamp} /> ]
            </span>
          </If>{' '}
          {JSON.stringify(props.message)}
        </code>
      </pre>
    )
  }
}

class CodeSandbox extends React.Component {
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

// console.log('yolo')
// console.warn('uh oh')
// console.error('oh fuck')
