import * as React from 'react'

import './styles/Bold.css'

export default (props) => {
  const { as, children, ...rest } = props
  const Element = as || 'span'
  return (
    <Element styleName="Bold" {...rest}>
      {props.children}
    </Element>
  )
}
