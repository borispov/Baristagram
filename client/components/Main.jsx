import React, { Component } from 'react'
import Navbar from './Navbar/NavbarContainer'
import ContentGrid from './ContentGrid/ContentGrid'
import ProfilePage from './Profile/ProfilePage'
import { BrowserRouter as Router, Route ,Link } from 'react-router-dom'


export class Main extends Component {
  render() {
    return (
      <Router>
          <div>
          <Navbar />
          {/* <ContentGrid /> */}
          <Route path="/" exact component={ContentGrid} />
          <Route path="/profile" component={ProfilePage} />
        </div>
      </Router>
    )
  }
}

export default Main
