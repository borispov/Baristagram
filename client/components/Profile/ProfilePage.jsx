import React from 'react'
import { Header, Grid, Button, Container } from 'semantic-ui-react'
import ProfileImg from './ProfileImg/ProfileImg'
import Gallery from './Gallery/Gallery'
import Stats from './Settings/Stats'

class ProfilePage extends React.Component {

  state = { 
    loading: true
  }

  componentDidMount() {
    if (!this.props.posts.length ) {
      this.props.fetchImages()
    }
  }
 
  render() {
    const profilePageStyle = {
      paddingTop: '80px',
      paddingBottom: '40px'
    }
    // this.props.fetchImages()
    const flexRow = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start'
    }
  
    const containMe = {
      ...profilePageStyle,
      maxWidth: '720px',
      display: 'block',
      margin: '0 auto',
    }
  
    const { posts } = this.props
    const author = this.props.author
    let myPosts
    posts &&
      (
        myPosts = posts.filter(x => {
          return x.author === author
        })
      )
    const isLoading = this.props.loader
    const postsLength = myPosts.length || 0
    // console.log('------myPosts:\n')
    // console.log(myPosts)
    return (
      <div>
        <div style={containMe}>
          <Grid style={{margin: '0 auto'}} centered columns={6}>
            <Grid.Column verticalAlign="middle">
              <ProfileImg src={this.props.userAvatar} size='small'/>
            </Grid.Column>
            <Grid.Column mobile={12}>
              <div className="flex-row" style={flexRow}>
              <Header as='h3' style={{padding: '0'}}>{author}</Header>
              </div>
              <Stats postsNum={postsLength} /> 
            <Button style={{marginTop: '35px'}} inverted color='violet' >add photo</Button>
            </Grid.Column>
          </Grid>
        </div>

        {
          isLoading 
            ? <Header as='h2' style={{textAlign: 'center'}} >Loading.....</Header>
            : <Gallery username={author} myPosts={myPosts} />
        }
      </div>
    )
  }
}

export default ProfilePage
