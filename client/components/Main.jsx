import React, { Component } from 'react'
import Navbar from './Navbar/NavbarContainer'
import ContentGrid from './ContentGrid/ContentGrid'
import ProfilePage from './Profile/ProfilePage'
import Explore from './Explore/Explore'
import Login from './Login/Login'
import { BrowserRouter as Router, Route ,Link } from 'react-router-dom'
import Register from './Register/Register'

const paths = require('../config/paths.js')

export class Main extends Component {

  state = {
    paths: paths
  }
  
  
  render() {
    return (
      <Router>
          <div>
          <Navbar />
          <Route path={paths.root} exact component={ContentGrid} />
          <Route path={paths.profile_page} component={ProfilePage} />
          <Route path={paths.explore} component={Explore} />
          <Route path={paths.login} component={Login} />
          <Route path={paths.register} component={Register}/>
        </div>
      </Router>
    )
  }
}

export default Main
