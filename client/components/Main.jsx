import React, { Component } from 'react'
import Navbar from './Navbar/NavbarContainer'
import ContentGrid from './ContentGrid/ContentGrid'
import ProfilePage from './Profile/ProfilePage'
import Explore from './Explore/Explore'
import { BrowserRouter as Router, Route ,Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

const paths = require('../config/paths.js')

export class Main extends Component {

  state = {
    paths: paths,
    show: false
  }

  componentDidMount() {
    const isAuth = this.props.auth.isAuthenticated
    !isAuth ? this.props.history.push('/login') : this.setState({ show: true })
  }
  
  render() {
    const { isAuthenticated, user } = this.props.auth
    if (this.state.show) {
      return (
        <Router>
            <div>
            <Navbar />
            <Route path={paths.root} exact component={ContentGrid} />
            <Route path={paths.profile_page} component={ProfilePage} />
            <Route path={paths.explore} component={Explore} />
            {/* <Route path={paths.login} component={Login} /> */}
            {/* <Route path={paths.register} component={RegisterContainer}/> */}
          </div>
        </Router>
      )
    } else {
      return null // Maybe put loader here ....
    }
  }
}

export default withRouter(Main)
