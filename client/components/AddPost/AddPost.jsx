import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Button, Container, Segment, Form, Header, Label, Icon, Image } from 'semantic-ui-react'
import axios from 'axios'
import postForm from './postForm'


class AddPost extends Component {
  constructor(){
    super()
  }
  
  state = {
    caption: '',
    date: null,
    fileload: 0,
    selectedImage: null,
    loading: false,
    mimetype: null,
    imgData: null
  }

  handleInputChange = e => {
    let val = e.target.value
    this.setState({
      caption: val
    })
  }

  clearState = () => {
    this.setState({
      caption: '', date: null, fileupload: 0, selectedImage: null
    })
  }

  handleSelected = e => {
    e.preventDefault()
    console.log('--- hello from handleSelected!')
    const fileSelected = e.target.files[0]
    const loaded = 0
    this.setState({ loading: true})
    
    let reader = new FileReader()
    reader.readAsDataURL(fileSelected)
    setTimeout(() => {
      this.setState({ fileSelected, loaded, mimetype: fileSelected.type, imgData: reader.result, loading: false})
    }, 2500);
  }

  onPostSubmit = async (e) => {
    e.preventDefault()

    const { fileSelected, caption } = this.state
    const { user_id, username } = this.props
    
    let data = await postForm(fileSelected, {user_id, username}, caption)
    // data.append('caption', caption)
    // data.append('userid', user_id)
    // data.append('username', username)
    // data.append('file', fileSelected, fileSelected.name)
    axios.post('/api/addPhoto', data, {
      onUploadProgress: progressEvent => {
        let percentage = Math.round( (progressEvent.loaded * 100) / progressEvent.total)
        console.log(percentage)
      }
    })
      .then(res => {console.log(res.statusText)})
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Container style={{paddingTop: '8vh'}}>
        <form style={{textAlign: 'center'}} onSubmit={this.onPostSubmit} encType="multipart/form-data">
          <Header>Share Your Moment</Header>
          <Form.Field>
            <Form.Input
              onChange={e => this.handleInputChange(e)}
              name="caption"
              placeholder="Describe your moment..."
            />
          </Form.Field>
          <Form.Field>

            <label htmlFor="upload">
              <Icon size="huge" name="add" style={{cursor: 'pointer'}}/>
            </label>
            <input type="file" encType="multipart/form-data" id="upload" name="upload" onChange={this.handleSelected} hidden />
            
            { this.state.loading &&
                <div>
                  <Icon size="large" loading name='spinner' />
                </div>
            }
            { this.state.fileload === 100 && <Icon size="large" name='checkmark' />}
            {
              this.state.imgData !== null && 
                <Image centered circular rounded src={this.state.imgData} alt='youruploaded' width='360' height='360' />
            }
          </Form.Field>
          <Header as="h3">Add Photo</Header>
          <Form.Field>
            <Button color="instagram" compact={true} style={{paddingTop: '10px', marginTop: '10px', width: '250px'}}  type='submit'> Upload </Button>
          </Form.Field>
        </form>
      </Container>
    )
  }
}

export default AddPost