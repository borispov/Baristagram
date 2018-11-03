import React from 'react'
import { Icon, Menu, Header, Container} from 'semantic-ui-react'
import SearchBar from './SearchBar'
import { BrowserRouter as Router, Link } from 'react-router-dom'


const MenuBar = (props) => {
  return (
    <div>
      <Menu stackable borderless attached="top">
        <Container>

          <Menu.Item className="menu-item menu-item--first">
            <Icon large="true" inverted link circular color="teal" name="instagram" />
          </Menu.Item>

          <Menu.Item className="menu-item">
            <Header> Baristagram </Header>
          </Menu.Item>

          <Menu.Item position="right">
            <SearchBar />
          </Menu.Item>

          <Menu.Item className="menu-item menu-item--last" position="right">
            <Link to="/profile"><Icon size="large" link name="user circle" /></Link>
          </Menu.Item>

          <Menu.Item className="menu-item" >
            <Icon size="large" link name="wpexplorer" />
          </Menu.Item>

        </Container>
      </Menu>
    </div>
  )
}

export default MenuBar