import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import Header from './Header'
import Resources from './Resources'

const App = () => (
  <Fragment>
    <Header />
    <Route path="/resources" component={Resources} />
  </Fragment>
)

export default App
