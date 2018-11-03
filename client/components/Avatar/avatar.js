import React from 'react'
import { Image } from 'semantic-ui-react'
import logo from '../../images/ma.png'

const Avatar = (props) => (

  // will pull data from db/redux
  <>
    <Image className="card-container__avatar" floated='right' size={props.size || 'small'} avatar centered circular src={props.src || logo} />
  </>
)

export default Avatar