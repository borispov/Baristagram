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
  // async componentDidMount(){
    // this.setState({ posts: myPosts })

    // const getData = await this.getProfileImage(username)
    // const posts = getData.map(i => ({path: i.image.pathToFile}))


    // ,type: i.image.contentType, data: i.image.data
    // const images = await posts.map(img => img.path)
    // console.log(images)
    // let type = posts.image.contentType.split('/')

    // this.setState({ posts })
  // }

  // getProfileImage = async (name) => {
  //   return await axios.get(`/api/getProfile/${name}`)
  //     .then(res => {
  //       return res.data
  //     })
  //     .catch(err => console.error(err))
  // }

  

  render() {

    const picStyle = {
      maxWidth: '300px',
      maxHeight: '250px',
      minHeight: '250px',
      width: '300px',
      border: '#000',
    }

    const { myPosts, username } = this.props
    console.log(myPosts)
    return (
      <Container>
        <Grid doubling stackable celled relaxed columns={3} >
          {
            myPosts && myPosts.map((eachPost, i) => {
              console.log(src)
              let src = eachPost.image.pathToFile
              let altSrc = `data:${eachPost.image.data.type};base64,${eachPost.image.data.data}`
              return (
                <Grid.Column key={i} className="profile__gallery">
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