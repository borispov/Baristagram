import React from 'react'
import { Header } from 'semantic-ui-react'

const Author = (props) => {
  return (
    <Header className="card-container__header" >{props.author || 'JohnstaGigs' }</Header>
  )
}

export default Author
