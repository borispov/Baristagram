import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Button, Container, Grid, Form, Header, Icon, Image } from 'semantic-ui-react'
import axios from 'axios'
import postForm from './postForm'
import { postImages } from '../../actions/fetchPosts'

// TODO
// clearState after upload
// display success/error message when uploading. 
// clearState if successful, otherwise display error.

// TODO :: Check if File is image

class AddPost extends Component {
  constructor(){
    super()
  }
  
  state = {
    caption: '',
    fileload: 0,
    selectedImage: null,
    loading: false,
    mimetype: null,
    imgData: null,
    error: null
  }

  handleInputChange = e => {
    let val = e.target.value
    this.setState({
      caption: val
    })
  }

  clearState = () => {
    this.setState({
      caption: '',  
      fileload: 0, 
      selectedImage: null,
      mimetype: null,
      imgData: null,
      error: null
    })
  }

  handleSelected = (e) => {
    e.preventDefault()
    const fileSelected = e.target.files[0]
    const loaded = 0
    this.setState({ loading: true})
    
    let reader = new FileReader()
    reader.readAsDataURL(fileSelected)
    if (fileSelected.type.split('/')[0] != 'image') {
      this.setState({ error: 'Only Image Uploads Allowed!', loading: false})
      return null
    }
    setTimeout(() => {
      this.setState({ fileSelected, loaded, mimetype: fileSelected.type, imgData: reader.result, loading: false})
    }, 1500)
  }

  componentWillUnmount() {
    this.clearState()
  }

  onPostSubmit = async (e) => {

    e.preventDefault()
    const { fileSelected, caption } = this.state
    const { user_id, username } = this.props
    let data = await postForm(fileSelected, {user_id, username}, caption)
    await this.props.dispatch(postImages(data))

    setTimeout(() => {
      if (!Object.keys(this.props.errors).length) {
        this.props.history.push('/profile')
      } else {
        this.setState({ error: this.props.errors })
      }
    }, 1250)
  }

  render() {

    const loaderCheck = (this.state.loading || this.props.loader) && <Icon size="large" loading name='spinner'/>

    const errorCheck = this.state.error && <Header as='h3'>{this.state.error}</Header>

    const showLoadedImage = this.state.imgData !== null && 
    <Image centered circular rounded src={this.state.imgData} alt='youruploaded' width='360' height='360' />

    const showGridColumns = (
      <>
        <Grid.Column 
          style={{minHeight: '380px', margin: '0'}} 
          verticalAlign="middle" 
          textAlign="center">
          <Header>Share Your Moment</Header>
          <Form.Field>
            <Form.Input
              onChange={e => this.handleInputChange(e)}
              name="caption"
              placeholder="Describe your moment..."
            />
          </Form.Field>
          </Grid.Column>
      
          <Grid.Column style={{minHeight: '380px'}}>
            <Form.Field>
              <label htmlFor="upload">
                <Icon size="huge" name="add" style={{cursor: 'pointer'}}/>
              </label>
              <input 
                type="file" 
                encType="multipart/form-data" 
                id="upload" 
                name="upload" 
                onChange={this.handleSelected} 
                hidden 
              />
            </Form.Field>
            <Form.Field>{showLoadedImage && showLoadedImage}</Form.Field>
            <Form.Field>{loaderCheck && loaderCheck}</Form.Field>
            <Form.Field>{errorCheck && errorCheck}</Form.Field>

            {
              !showLoadedImage &&
                <Header as="h3">Add Photo</Header> 
            }
          </Grid.Column>
        </>
    )

    const grid = (
      <>
        <Grid stackable columns={2} divided padded="vertically" divided>
          {showGridColumns}
        </Grid>
      </>
    )

    return (
      <Container style={{paddingTop: '8vh'}}>
        <form style={{textAlign: 'center'}} onSubmit={this.onPostSubmit} encType="multipart/form-data">
          {!this.props.loader ? grid : (
            <Icon size="huge" loading name='spinner'/>
          )}
          <Form.Field>
            <Button 
              color="instagram" 
              compact={true} 
              style={{paddingTop: '10px', marginTop: '10px', width: '250px'}}  
              type='submit'> Upload 
            </Button>
          </Form.Field>
        </form>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  errors: state.errors,
  loader: state.loader.loading
})


export default connect(mapStateToProps)(AddPost)