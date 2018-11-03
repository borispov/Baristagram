import React from 'react'
import { Icon } from 'semantic-ui-react'

const CardIcons = () => {
  return (
    <div className="card__icon-container" >
      <Icon size="large" className="card__icon" name="like"></Icon>
      <Icon size="large" className="card__icon" name="comment outline"></Icon>
    </div>
  )
}

export default CardIcons
