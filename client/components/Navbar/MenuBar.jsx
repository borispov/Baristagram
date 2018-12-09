import React from 'react'
import { Icon, Menu, Header, Container} from 'semantic-ui-react'
import SearchBar from './SearchBar'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class MenuBar extends React.Component {

  onLogout = (e) => {
    e.preventDefault()
    this.props.logoutUser(this.props.history)
  }

  render() {
    // console.log(this.props.auth)
    const { isAuthenticated, user } = this.props.auth
    return (
      <div>
        <Menu stackable borderless attached="top">
          <Container>
  
            <Menu.Item className="menu-item menu-item--first">
              <Link to="/">
                <Icon large="true" inverted link circular color="teal" name="instagram" />
              </Link>
            </Menu.Item>
  
            <Menu.Item className="menu-item">
              <Link to="/">
                <Header> Baristagram </Header>
              </Link>
            </Menu.Item>
  
            <Menu.Item position="right">
              <SearchBar />
            </Menu.Item>
  
            <Menu.Item className="menu-item menu-item--last" position="right">
              <Link to="/profile"><Icon size="large" link name="user circle" /></Link>
            </Menu.Item>
  
            <Menu.Item className="menu-item" >
              <Link to="/explore">
                <Icon size="large" link name="wpexplorer" />
              </Link>
            </Menu.Item>
  
            {isAuthenticated &&(
              <Menu.Item className="menu-item" >
                <Link to="#" onClick={this.onLogout}>
                  <Icon size="large" link name="log out" />
                </Link>
              </Menu.Item>
            )} 
  
          </Container>
        </Menu>
      </div>
    )
  }
}

MenuBar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

export default MenuBar