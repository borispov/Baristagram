import React from 'react'
import { Icon } from 'semantic-ui-react'

const CardIcons = (props) => {
  // if classes prop exist, assign it to classes variable. 
  const classes = props.classes ? props.classes : ''
  return (
    <div className={`card__icon-container ${classes && classes}`} >
      <Icon size="large" className="card__icon" name="like"></Icon>
      <Icon size="large" className="card__icon" name="comment outline"></Icon>
    </div>
  )
}

export default CardIcons
