import * as React from 'react'
import withRouter from 'react-router-dom/withRouter'
import { observable, action, computed } from 'mobx'
import { Observer, observer, inject } from 'mobx-react'

import ComponentStore from '#utilities/ComponentStore'
import Button from '#components/Button'
import Input from '#components/Input'

import './styles/SignUpForm.css'

class SignUpFormStore extends ComponentStore {
  @observable emailValue: string = ''
  @observable passwordValue: string = ''
  @observable confirmPasswordValue: string = ''

  @action
  setValue = (name) => (event) => {
    this[`${name}Value`] = event.target.value
  }

  goToModuleView = () => {
    this.component.props.history.push('/module/colshacol/foo-bar')
  }

  @action submit = (event) => {
    event.preventDefault()
    this.component.props.userStore.authenticate({
      email: this.emailValue,
      password: this.passwordValue,
      name: 'colshacol',
      modules: [
        {
          title: 'Some Module',
          lessonContent: '# Some Module\n\n_Write code here._',
          editorContent: '// write code here'
        }
      ]
    })

    setTimeout(() => {
      this.goToModuleView()
    }, 1000)
  }
}

@withRouter
@inject('userStore')
@observer
export default class SignUpForm extends React.Component {
  store = new SignUpFormStore(this)

  render() {
    const { store, props } = this

    return (
      <section styleName="SignUpForm">
        <p>Sign up.</p>
        <form styleName="form" onSubmit={store.submit}>
          <Input
            type="email"
            styleName="input"
            id="emailValue"
            labelText="Email Address"
            value={store.emailValue}
            placeholder="email address"
            onChange={store.setValue('email')}
          />
          <div styleName="passwordRow">
            <Input
              type="password"
              styleName="input"
              id="passwordValue"
              labelText="Password"
              value={store.passwordValue}
              placeholder="password"
              onChange={store.setValue('password')}
            />
            <Input
              type="password"
              styleName="input"
              id="confirmPasswordValue"
              labelText="Confirm Password"
              value={store.confirmPasswordValue}
              placeholder="confirm password"
              onChange={store.setValue('confirmPassword')}
            />
          </div>
          <Button type="submit">
            Submit
          </Button>
        </form>
      </section>
    )
  }
}
