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
    this.props.fetchImages()
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
    const isLoading = this.props.loader
    const myPosts = posts.filter(x => x.author === author)
    const postsLength = myPosts.length || 0
    console.log(posts)
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
              <Button style={{marginLeft: '15px'}} compact basic >Edit Profile</Button>
              </div>
              <Stats postsNum={postsLength} /> 
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
