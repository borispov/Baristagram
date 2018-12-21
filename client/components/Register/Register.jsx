import React from 'react'
import { Form, Button, Icon, Container, Segment, Header, Image } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import { RegisterRequest } from './RegisterRequest'
import postForm from '../AddPost/postForm'

class Register extends React.Component {

  constructor(props){
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleAvatar = this.handleAvatar.bind(this)
  }

  state = {
    email: '',
    name: '',
    password: '',
    avatar: {},
    imgData: null,
    errors: {},
    avaError: null,
    loading: false
  }

  componentWillReceiveProps(nextProps) {
    nextProps.auth.isAuthenticated && this.props.history.push('/')
    nextProps.errors && this.setState({errors: nextProps.errors})
  }

  componentDidMount() {
    this.props.auth.isAuthenticated && this.props.history.push('/')
  }

  handleAvatar(e) {
    e.preventDefault()
    const avatar = e.target.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(avatar)
    if (avatar.type.split('/')[0] != 'image') {
      this.setState({ error: 'Only Image Uploads Allowed!', loading: true })
      return null
    }

    setTimeout(() => {
      this.setState({ avatar, imgData: reader.result, loading: false})
    }, 1500)

  }

  handleInputChange(e) {
    const value = e.target.value
    this.setState({
      [e.target.name]: value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    console.log(e.target.avatar)
    console.log('---called from Register.jsx')
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value
    const avatar = this.state.avatar
    let avatarData = await postForm(avatar, null, null, 'avatar', { name, email, password })
    // const jsonUser = RegisterRequest(name,email,password, avatarData)
    const data = {
      name,
      email,
      password,
      avatarData
    }
    
    this.props.registerUser(avatarData, history)
  }

  render() {
    const showLoadedImage = this.state.imgData !== null && 
      <Image centered circular rounded src={this.state.imgData} alt='ava' width='150' height='150' />
    if (this.state.erorrs) {
      const { errors } = this.state
    } 

    return (
      <Container style={{paddingTop: '11vh'}}>
        <Segment textAlign="center" style={{maxWidth: '500px', margin: '0 auto'}}>
        
            {/* <form onSubmit={e => this.handleSubmit(e, this.props.history)} > */}
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

              <Form.Field style={{paddingTop: '5px', paddingBottom: '15px'}} >
                <label htmlFor='upload'>
                  <Header as="span" style={{cursor: 'pointer'}}>Add Avatar</Header>
                  <Icon size="large" name="add circle" style={{cursor: 'pointer'}} />
                </label>
                <input 
                  type='file'
                  encType='multipart/form-data'
                  id='upload'
                  name='upload'
                  onChange={this.handleAvatar}
                  hidden
                />
              </Form.Field>
              <Form.Field style={{padding: '10px 0'}}>
                {showLoadedImage}
              </Form.Field>
              <Button color="instagram" style={{marginLeft: 'auto'}} type='submit'>Submit</Button>
            </form>
        </Segment>
      </Container>
    )
  }
}

export default withRouter(Register)
