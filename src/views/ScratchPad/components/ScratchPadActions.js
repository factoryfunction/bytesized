import * as React from 'react'

import Button from '#components/Button'
import '../styles/ScratchPadActions.css'

export const ScratchPadActions = (props) => {
  return (
    <div styleName="ScratchPadActions">
      <Button onClick={props.play}>Play</Button>
      <Button onClick={props.stop}>Stop</Button>
      <Button onClick={props.clear}>Clear</Button>
    </div>
  )
}
