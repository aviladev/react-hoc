import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import 'bootstrap/dist/css/bootstrap.min.css'

import reducers from './reducers'

import App from './components/App'

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>
  ,document.getElementById('root')
)
