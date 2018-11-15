import React from 'react'
import Avatar from '../Avatar/avatar'
import { Item } from 'semantic-ui-react'
import RegisterFloat from './RegisterFloat'

const UserFloat = (props) => {
  const isLogged = props.isLogged || true
  
  const showUserFloatOrReg = isLogged ?
    ( 
      <>
        <Item.Image size="tiny"><Avatar className="userfloat__avatar" /></Item.Image>
        <Item.Content verticalAlign='middle'>
          <Item.Header as="a">Johnsta</Item.Header>
          <Item.Meta>Johnsta Proshlow</Item.Meta>
        </Item.Content>
      </>
    ) : <RegisterFloat />

  return (

    <Item.Group divided className="userfloat">
      <Item>
        {showUserFloatOrReg}
        {/* <Item.Image size="tiny"><Avatar className="userfloat__avatar" /></Item.Image>
        <Item.Content verticalAlign='middle'>
          <Item.Header as="a">Johnsta</Item.Header>
          <Item.Meta>Johnsta Proshlow</Item.Meta>
        </Item.Content> */}
      </Item>
    </Item.Group>
  )
}

export default UserFloat
