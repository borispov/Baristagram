import React from 'react'
import { Image } from 'semantic-ui-react'
import logo from '../../assets/images/ma.png'

const Avatar = (props) => (
  // will pull data from db/redux
  <>
    <Image {...props} inline={props.inline || false} className="card-container__avatar" size={props.size || 'small'} avatar centered circular src={props.src || logo} />
  </>
)

export default Avatar