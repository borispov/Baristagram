import React from 'react'
import { Sticky, Grid, Container, Segment } from 'semantic-ui-react'
import UserFloat from '../UserFloat/UserFloat'
import CardContainer from '../Card/CardContainer'
import PropTypes from 'prop-types'
import LoginForm from '../Login/Login'

class ContentGrid extends React.Component {

  static propTypes = {
    isLogged: PropTypes.bool
  }

  static defaultProps = {
    isLogged: false
  }

  handleContextRef = contextRef => this.setState({ contextRef })

  render() {
    const { contextRef } = this.state
    return (
      <Grid centered columns={4}>
        <div ref={this.handleContextRef}></div>
        <Grid.Column width={10}>
            <CardContainer source="https://source.unsplash.com/random/614x614/?sig=1" />
            <CardContainer source="https://source.unsplash.com/random/614x614/?sig=2" />
            <CardContainer source="https://source.unsplash.com/random/614x614/?sig=3" />
        </Grid.Column>

        <Grid.Column width={3}>
          {/* <Segment style={{marginTop: '40px'}}> */}
              <Sticky context={ contextRef } style={{marginTop: '40px'}}>
                <UserFloat />
              </Sticky>
          {/* </Segment> */}
        </Grid.Column>

      </Grid>
    )
  }
}

export default ContentGrid