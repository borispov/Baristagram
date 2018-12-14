import React, { Component } from 'react'
import { Button, Icon, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/authentication'
import PropTypes from 'prop-types'

class Login extends Component {

  state = {
    email: '',
    password: '',
    errors: {}
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const user = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.loginUser(user, this.props.history)
  }

  componentWillReceiveProps(nextProps) {
    nextProps.auth.isAuthenticated && this.props.history.push('/')    
    if(nextProps.errors) {
        this.setState({
            errors: nextProps.errors
        });
    }
  }

  componentDidMount() {
    this.props.auth.isAuthenticated && this.props.history.push('/')
  }

  render() {
    const { errors } = this.state
    return (
      <div 
        className="register-form">
        <style>
          {`
            body > div, body > div > div, body > div > div > div.login-form {
            height: 80%;
          }`}
        </style>
        <Header textAlign='center' size='huge'>
          Login to Baristagram
        </Header>
      <Grid textAlign='center' style={{ height: '100%', paddingTop: '1vh'}} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            {/* <Image src='/logo.png' /> Log-in to your account */}
          </Header>

          <Form size="large" onSubmit={e => this.handleSubmit(e)}>
            <Segment stacked>
              <Form.Input 
                onChange={e => this.handleInputChange(e)} 
                fluid icon='user' 
                iconPosition='left' 
                name="email"
                placeholder='E-mail address'
                autoComplete="username"
              />
              {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
              <Form.Input
                onChange={e => this.handleInputChange(e)}
                fluid
                name="password"
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                autoComplete="current-password"
                type='password'
              />
              {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
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
    </div>
    )
  }
}

Login.propTypes = {
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
})

export default connect(mapStateToProps, { loginUser })(Login)