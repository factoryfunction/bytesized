import * as React from 'react'

import { TextInput } from 'carbon-components-react'

import './styles/Input.css'

export default (props) => {
  const { className, ...rest } = props

  return <TextInput styleName="Input" {...props} />
}
