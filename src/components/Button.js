import * as React from 'react'

import { Button } from 'carbon-components-react'

import './styles/Button.css'

export default (props) => {
  const { children, text, ...rest } = props
  const buttonText = children || text

  return (
    <Button styleName="Button" {...rest}>
      {buttonText}
    </Button>
  )
}
