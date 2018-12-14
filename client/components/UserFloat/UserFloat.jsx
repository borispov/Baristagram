import React from 'react'
import Avatar from '../Avatar/avatar'
import { Item, Icon, Container } from 'semantic-ui-react'
import RegisterFloat from './RegisterFloat'
import { connect } from 'react-redux'

const UserFloat = (props) => {
  const isLogged = props.userAuth.isAuthenticated
  
  const showUserFloatOrReg = isLogged ?
    ( 
      <>
        <Item.Image size="tiny"><Avatar className="userfloat__avatar" /></Item.Image>
          <Item.Content verticalAlign='middle'>
            <Item.Header as="a">{props.userAuth.user.name.split(' ')[0]}</Item.Header>
            <Item.Meta>{props.userAuth.user.name}</Item.Meta>
        </Item.Content>
      </>
    ) : <RegisterFloat />

  return (
    <Item.Group divided className="userfloat">
      <Item>
        {showUserFloatOrReg}
      </Item>
    </Item.Group>
  )
}

const mapStateToProps = state => ( {userAuth: state.auth} )

export default connect(mapStateToProps)(UserFloat)