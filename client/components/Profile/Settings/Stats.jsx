import React from 'react'
import { Header } from 'semantic-ui-react'

const Stats = (props) => {

  const headerStyles = {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start'
  }

  return (
    <div className="stats" style={headerStyles}>
      <Header className="stats__title" as="p">{props.postsNum}</Header>
      <Header style={{paddingLeft: '15px'}}className="stats__title" as="p">71 followers</Header>
      <Header style={{paddingLeft: '15px'}}className="stats__title" as="p">103 following</Header>
    </div>
  )
}

export default Stats
