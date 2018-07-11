import * as React from 'react'
import ReactDOM from 'react-dom'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import { Provider } from 'mobx-react'

import AppRouter from './components/AppRouter'
import UserStore from './stores/UserStore'

import './index.css'

const userStore = new UserStore

ReactDOM.render(
  <Provider userStore={userStore}>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </Provider>,
  document.getElementById('mountPoint')
)
