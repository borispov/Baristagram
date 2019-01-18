import React from 'react'
import { Header } from 'semantic-ui-react'

const Stats = (props) => {

  const headerStyles = {
    margin: '30px 0 0 0',
    display: 'flex',
    flexFlow: 'row nowrap',
  }

  const hed = {
    marginTop: 'calc(2rem - 0.142857em) !important',
    fontSize: '1.55em',
    fontWeight: 'bold'
  }
  return (
    <div className="stats" style={headerStyles}>
      <div className="hed stats__title" >{props.postsNum}</div>
      <div style={{paddingLeft: '15px'}} className="hed stats__title" as="p">71 followers</div>
      <div style={{paddingLeft: '15px'}} className="hed stats__title" as="p">103 following</div>
    </div>
  )
}

export default Stats
