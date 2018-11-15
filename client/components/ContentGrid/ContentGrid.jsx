import React from 'react'
import { connect } from 'react-redux'
import { Sticky, Grid, Container, Segment } from 'semantic-ui-react'
import UserFloat from '../UserFloat/UserFloat'
import CardContainer from '../Card/CardContainer'
import PropTypes from 'prop-types'
import LoginForm from '../Login/Login'

class ContentGrid extends React.Component {

  constructor() {
    super()
    this.handleContextRef = this.handleContextRef.bind(this) 
    this.state = {}
  }

  static propTypes = {
    isLogged: PropTypes.bool,
    posts: PropTypes.arrayOf(PropTypes.object)
  }

  static defaultProps = {
    isLogged: false
  }

  handleContextRef(contextRef){
    this.setState({ contextRef })
  } 
    
  render() {
    const { posts } = this.props
    return (
      <Grid centered columns={4}>
        <div ref={this.handleContextRef}></div>
        <Grid.Column width={10}>
          { 
            posts.map((post, i) => {
              return <CardContainer
                caption={post.caption}
                likes={post.likes}
                source={post.display_src}
                comments={post.comments}
                id={post.id}
                key={i} />
            })
          }
        </Grid.Column>
        <Grid.Column width={3}>
          <Segment style={{marginTop: '40px'}}>
              <Sticky context={ this.state.contextRef } style={{marginTop: '40px'}}>
                <UserFloat />
              </Sticky>
          </Segment>
        </Grid.Column>

      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

export default connect(mapStateToProps)(ContentGrid)