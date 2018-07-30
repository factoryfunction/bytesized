import * as React from 'react'
import { Hook, Console as _Console, Decode } from 'console-feed'
import TimeAgo from 'react-timeago'
import { observer } from 'mobx-react'
import { autorun } from 'mobx'
import * as ramda from 'ramda'

import './styles/Console.css'

const DEFAULT_LOG = [
  {
    method: 'log',
    data: ['No logs to show.']
  }
]

const STYLES = {
  PADDING: '6px 0px 9px',
  BASE_FONT_FAMILY: '"Dank Mono", "Operator Mono"',
  BASE_FONT_SIZE: '16px',
  BASE_LINE_HEIGHT: '3',
  LOG_COLOR: 'white',
  LOG_ICON_WIDTH: 24,
  LOG_ICON_HEIGHT: 24
}

@observer
export class Console extends React.Component {
  store = this.props.store

  render() {
    console.log('console', this.store.logs)
    return (
      <div styleName="Console">
        <_Console
          styles={STYLES}
          logs={this.store.logs.length ? [...this.store.logs] : DEFAULT_LOG}
          variant="light"
        />
      </div>
    )
  }
}

// class Log extends React.Component {
//   render() {
//     const { props } = this
//     return (
//       <pre styleName={`Log pre ${props.type}`}>
//         <code>
//           <If condition={props.type === 'log' && props.message === 'DONE'}>
//             <span styleName="doneTimeStamp">
//               [ <TimeAgo date={props.timeStamp} /> ]
//             </span>
//           </If>{' '}
//           {JSON.stringify(props.message)}
//         </code>
//       </pre>
//     )
//   }
// }
