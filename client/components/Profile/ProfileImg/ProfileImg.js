import React from 'react'
import Avatar from '../../Avatar/avatar'
import { Header, Grid, Button } from 'semantic-ui-react'

const ProfileImg = (props) => {
  return (
      <Avatar src={props.src} size={props.size}/>
  )
}

export default ProfileImg
