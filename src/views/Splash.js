import * as React from 'react'

import SignUpForm from '#components/SignUpForm'
import Button from '#components/Button'
import Input from '#components/Input'
import Bold from '#components/Bold'

import './styles/Splash.css'

export default (props) => {
  return (
    <div styleName="Splash">
      <section styleName="intro">
        <h1>
          <Bold>Create</Bold> and <Bold>share</Bold> micro code lessons.
        </h1>
      </section>
      <SignUpForm history={props.history} />
    </div>
  )
}
