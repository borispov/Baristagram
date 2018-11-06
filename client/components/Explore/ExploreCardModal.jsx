import React from 'react'
import { Modal } from 'semantic-ui-react'

export default ExploreCardModal = ({ open, close, card }) => {
  return (
    <Modal 
      open={open}
      onClose={close}
      basic
      content={card}
    />
  )
}

