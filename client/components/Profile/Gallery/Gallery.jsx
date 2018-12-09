import React from 'react'
import { Grid, Image, Container } from 'semantic-ui-react'
import { randomSig } from './fetchImages'
import axios from 'axios'
import PropTypes from 'prop-types'

class Gallery extends React.Component {
  state = {
    posts: null
  }

  // TODO: Add author and comment functionality -- basically allow posts as well. 
  async componentDidMount(){
    const { username } = this.props
    const getData = await this.getProfileImage(username)
    const posts = getData.map(i => ({path: i.image.pathToFile}))
    // ,type: i.image.contentType, data: i.image.data
    // const images = await posts.map(img => img.path)
    // console.log(images)
    // let type = posts.image.contentType.split('/')
    this.setState({ posts })
  }

  getProfileImage = async (name) => {
    return await axios.get(`/api/getProfile/${name}`)
      .then(res => {
        return res.data
      })
      .catch(err => console.error(err))
  }

  render() {
    const {posts} = this.state
    return (
      <Container>
        <Grid stackable celled centered relaxed columns={3}>
          {
            posts && posts.map((eachPost, i) => {
              let src = eachPost.path || `data:${eachPost.type};base64,${eachPost.data}`
              return (
                <Grid.Column key={i}>
                  <Image src={src} />
                </Grid.Column>
              )
            })
          }
        </Grid>
      </Container>
    )
  }
}

Gallery.propTypes = {
  username: PropTypes.string.isRequired
}

export default Gallery