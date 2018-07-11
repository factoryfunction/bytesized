import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid'

import Button from './Button'
import './styles/TopBar.css'

export default class TopBar extends Component {
  render() {
    return (
      <div styleName="TopBar">
        <div styleName="left">
          <p styleName="logo">
            byte<span styleName="logoLastHalf">sized</span>
          </p>
        </div>
        <div styleName="right">
          <Button>Sign In</Button>
        </div>
      </div>
    )
  }
}
