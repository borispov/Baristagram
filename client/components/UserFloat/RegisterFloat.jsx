import React from 'react'
import { Header, Item } from 'semantic-ui-react'
// import { Link, Router } from 'react-router-dom'

const RegisterFloat = () => {
  return (
    // <Router>
      <div>
        <Header as="h4" color='grey'>Not a user yet?</Header>
         {/* <Link to="/register"> */}
          <Header as="a" size="small" dividing color="red">Sign up</Header>
         {/* </Link> */}
        <Header as="a" floated='right' color="blue">Login</Header>
      </div>
    // </Router>
  )
}

export default RegisterFloat
