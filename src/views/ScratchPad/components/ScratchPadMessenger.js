import * as React from 'react'
import { Portal } from 'react-portal'
import Iframe from 'react-iframe-comm'
import { observer } from 'mobx-react'
import { action, observable } from 'mobx'
import * as ramda from 'ramda'
import SplitPane from 'react-split-pane'
import { HotKeys } from 'react-hotkeys'

// import { Console } from '#components/Console'
import { Console } from 'console-feed'
import { ScratchPadActions } from './ScratchPadActions'
import { ScratchPadEditor } from './ScratchPadEditor'
import { messageHandler } from '../utilities/messageHandler'
import { attachConsoleMethods } from '../utilities/attachConsoleMethods'
import { IFRAME_ATTRIBUTES } from '../consts'

import '../styles/ScratchPadMessenger.css'

const KEY_MAP = {
  maximizeConsole: 'ctrl+shift+up',
  minimizeConsole: 'ctrl+shift+down'
}

@observer
export class ScratchPadMessenger extends React.Component {
  store = this.props.store
  messageHandler = messageHandler(this.store)
  @observable topPanelHeight = 500

  handlers = (() => {
    const self = this

    return {
      maximizeConsole: action(() => {
        self.topPanelHeight = 0
      }),

      minimizeConsole: action(() => {
        self.topPanelHeight = 500
      })
    }
  })()

  render() {
    const { props, store } = this

    return (
      <>
        <If condition={!ramda.isEmpty(props.store.executionData)}>
          <Portal>
            <Iframe
              handleReceiveMessage={this.messageHandler}
              postMessageData={store.executionData}
              handleReady={attachConsoleMethods(store)}
              attributes={IFRAME_ATTRIBUTES}
            />
          </Portal>
        </If>
        <HotKeys handlers={this.handlers} keyMap={KEY_MAP}>
          <SplitPane
            split="horizontal"
            minSize={0}
            defaultSize={this.topPanelHeight}
            paneStyle={{ display: 'flex', flexBasis: 'fill' }}
          >
            <ScratchPadEditor store={this.store} />
            <div styleName="topPanel">
              <ScratchPadActions
                clear={store.clearLogs}
                play={store.beginExecution}
                stop={store.endExecution}
              />
              {/* <Console store={store} /> */}
              <Console logs={this.store.logs} variant="dark" />
            </div>
          </SplitPane>
        </HotKeys>
      </>
    )
  }
}
