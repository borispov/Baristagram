import React from 'react'
import { Form, Button, Icon, Container, Segment, Header } from 'semantic-ui-react'

const Register = () => {
  return (
    <Container style={{paddingTop: '11vh'}}>
      <Segment textAlign="center" style={{maxWidth: '500px', margin: '0 auto'}}>
        <Form inverted onSubmit>
          <Header textAlign="center" as="h3">Join BaristaGramzz !</Header>
          <Form.Field width="8" inline style={{display: 'inline-block', paddingRight: '10px'}}> 
            <Form.Input icon="user" iconPosition="left" placeholder="First Name" required />
            {/* <label>First Name</label>
            <input placeholder='First Name' /> */}
          </Form.Field>
          <Form.Field width="8" inline style={{display: 'inline-block', paddingLeft: '10px'}}>
            <Form.Input icon="user" iconPosition="left" required placeholder='Last Name' />
          </Form.Field>
          <Form.Field>
            <Form.Input icon="lock" iconPosition="left" required placeholder='Password' type="password" />
          </Form.Field>
          <Form.Field>
            <Form.Input type="email" icon="mail" placeholder="Email address" iconPosition="left" />
            {/* <label>Email</label>
            <input placeholder='John@example.com' /> */}
          </Form.Field>
          <Button color="instagram" style={{marginLeft: 'auto'}} type='submit'>Submit</Button>
        </Form>
      </Segment>
    </Container>
  )
}

export default Register
