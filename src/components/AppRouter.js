import { hot } from 'react-hot-loader'
import * as React from 'react'
import ReactDOM from 'react-dom'
import Switch from 'react-router-dom/Switch'
import Redirect from 'react-router-dom/Redirect'
import Route from 'react-router-dom/Route'

import TopBar from './TopBar'
import Splash from '#views/Splash'
import Module from '#views/Module'

import './styles/AppRouter.css'

export default hot(module)((props) => {
  return (
    <main styleName="AppRouter">
      <TopBar />
      <section styleName="appBody">
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route exact path="/module/:userName/:moduleTitle" component={Module} />
        </Switch>
      </section>
    </main>
  )
})
