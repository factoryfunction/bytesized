import * as React from 'react'
import { observer } from 'mobx-react'

import CodeEditor from '#components/CodeEditor'

import '../styles/ScratchPadEditor.css'

@observer
export class ScratchPadEditor extends React.Component {
  store = this.props.store

  render() {
    const { store, props } = this

    return (
      <div styleName="ScratchPadEditor">
        <CodeEditor
          onChange={store.setEditorValue}
          content={store.editorValue}
        />
      </div>
    )
  }
}
