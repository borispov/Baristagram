import React from 'react'
import { Header, Grid, Button, Container } from 'semantic-ui-react'
import ProfileImg from './ProfileImg/ProfileImg'
import Gallery from './Gallery/Gallery'
import Stats from './Settings/Stats'

const ProfilePage = () => {

  const profilePageStyle = {
    paddingTop: '80px',
    paddingBottom: '40px'
  }

  const flexRow = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }

  const containMe = {
    ...profilePageStyle,
    maxWidth: '720px',
    display: 'block',
    margin: '0 auto'
  }
  return (
    <div>
      <div style={containMe}>
        <Grid style={{margin: '0 auto'}} centered columns={6}>
          <Grid.Column verticalAlign="middle">
            <ProfileImg size='small'/>
          </Grid.Column>
          <Grid.Column mobile={12}>
            <div className="flex-row" style={flexRow}>
            <Header as='h3' style={{padding: '0'}}>Johnsta Proshlow</Header>
            <Button style={{marginLeft: '15px'}} compact basic >Edit Profile</Button>
            </div>
            <Stats /> 
          </Grid.Column>
        </Grid>
      </div>

      <Gallery />
    </div>
  )
}

export default ProfilePage
