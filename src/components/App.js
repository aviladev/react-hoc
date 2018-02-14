import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import Header from './Header'
import Resources from './Resources'

import requireAuth from './requireAuth'

const App = () => (
  <Fragment>
    <Header />
    <Route path="/resources" component={requireAuth(Resources)} />
  </Fragment>
)

export default App
