import React, { Component } from 'react'
import Login from './Login/Login'
import RegisterContainer from './Register/RegisterContainer'
import MainContainer from './MainContainer'
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom'

const App = props => {
  return (
    <Router>
      <>
        <Switch>
          <Route path={'/login'} component={Login} />
          <Route path={'/register'} component={RegisterContainer} />
          <Route component={MainContainer} />
        </Switch>
      </>
    </Router>
  )
}

export default App