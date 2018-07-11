import * as React from 'react'
import { observer } from 'mobx-react'
import { Controlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'

import './styles/CodeEditor.css'

export const EDITOR_OPTIONS = (props) => ({
  autoCloseBrackets: true,
  cursorScrollMargin: 48,
  mode: 'javascript',
  theme: 'shit',
  lineNumbers: true,
  indentUnit: 2,
  tabSize: 2,
  styleActiveLine: true
})

@observer
export default class CodeEditor extends React.Component {
  render() {
    return (
      <div styleName="CodeEditor">
        <CodeMirror
          value={this.props.content}
          options={EDITOR_OPTIONS(this.props)}
          onBeforeChange={(editor, data, value) => {
            this.props.onChange(value)
          }}
          onChange={(editor, data, value) => {
            // this.setState({ value })
          }}
        />
      </div>
    )
  }
}
