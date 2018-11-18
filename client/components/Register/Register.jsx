import React from 'react'
import { Form, Button, Icon, Container, Segment, Header } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import { RegisterRequest } from './RegisterRequest'

class Register extends React.Component {

  constructor(props){
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  state = {
    email: '',
    name: '',
    password: '',
    errors: {}
  }

  componentWillReceiveProps(nextProps) {
    nextProps.auth.isAuthenticated && this.props.history.push('/')
    nextProps.errors && this.setState({errors: nextProps.errors})
  }

  componentDidMount() {
    this.props.auth.isAuthenticated && this.props.history.push('/')
  }

  handleInputChange(e) {
    const value = e.target.value
    this.setState({
      [e.target.name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('---called from Register.jsx')
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value
    const jsonUser = RegisterRequest(name,email,password)
    this.props.registerUser(jsonUser, history)
  }

  render() {
    if (this.state.erorrs) {
      const { errors } = this.state
    } 
    return (
      <Container style={{paddingTop: '11vh'}}>
        <Segment textAlign="center" style={{maxWidth: '500px', margin: '0 auto'}}>
        
            {/* <form onSubmit={e => this.handleSubmit(e)} > */}
            <form onSubmit={e => this.props.regUser(e, this.props.history)} >
              <Header textAlign="center" as="h3">Join BaristaGramzz !</Header>
  
              <Form.Field > 
                <Form.Input onChange={this.handleInputChange} name="name" icon="user" iconPosition="left" placeholder="Name" required />
              </Form.Field>
  
              <Form.Field>
                <Form.Input onChange={this.handleInputChange} name="password" icon="lock" iconPosition="left" required placeholder='Password' type="password" />
              </Form.Field>
  
              <Form.Field>
                <Form.Input onChange={this.handleInputChange} name="email" type="email" icon="mail" placeholder="Email address" iconPosition="left" />
              </Form.Field>
              
              <Button color="instagram" style={{marginLeft: 'auto'}} type='submit'>Submit</Button>
            </form>
        </Segment>
      </Container>
    )
  }
}

export default withRouter(Register)
