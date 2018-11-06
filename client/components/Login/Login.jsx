import React, { Component } from 'react'
import { Button, Icon, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Login extends Component {

  logTemp = (<div 
    className="register-form">
    <style>
      {`
      body > div, body > div > div, body > div > div > div.login-form {
        height: 100%;
      }`}
    </style>
    <Grid textAlign='center' style={{ height: '100%', paddingTop: '11vh'}} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          {/* <Image src='/logo.png' /> Log-in to your account */}
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />

            <Button color='teal' fluid size='large'>
              Login
            </Button>
          </Segment>
        </Form>
        <Link to="/register">
          <Message>
            New to us? <strong>Sign Up! </strong>
          </Message>
        </Link>
      </Grid.Column>
    </Grid>
    </div>)

  render() {
    return (
      <div>
        {this.logTemp}
      </div>
    )
  }
}
