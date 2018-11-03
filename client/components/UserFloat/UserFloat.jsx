import React from 'react'
import Avatar from '../Avatar/avatar'
import { Item} from 'semantic-ui-react'

const UserFloat = (props) => {
  return (
    <Item.Group divided className="userfloat">
      <Item>
        <Item.Image size="tiny"><Avatar className="userfloat__avatar" /></Item.Image>
        <Item.Content verticalAlign='middle'>
          <Item.Header as="a">Johnsta</Item.Header>
          <Item.Meta>Johnsta Proshlow</Item.Meta>
        </Item.Content>
      </Item>
    </Item.Group>
  )
}

export default UserFloat
