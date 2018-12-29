import React from 'react'
import { connect } from 'react-redux'
import { Header, Sticky, Grid, Container, Segment, Icon } from 'semantic-ui-react'
import UserFloat from '../UserFloat/UserFloat'
import CardContainer from '../Card/CardContainer'
import PropTypes from 'prop-types'
import LoginForm from '../Login/Login'
import { Link } from 'react-router-dom'
import { fetchImages } from '../../actions/fetchPosts'

class ContentGrid extends React.Component {

  constructor() {
    super()
    this.handleContextRef = this.handleContextRef.bind(this) 
    this.state = {
      posts: [],
      error: null,
      loading: false
    }
  }

  async componentDidMount() {
    this.props.dispatch(fetchImages())
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
    const isLoading = this.props.loader

    const theContent = !isLoading
      ? (
        <Grid.Column width={10}>
          {posts && 
            posts.map((post, i) => {
              return <CardContainer
                caption={post.caption}
                author={post.author}
                likeList={post.likeList}
                likes={post.likes}
                source={post.image.pathToFile}
                comments={post.comments}
                id={post._id}
                key={i} />
            })}
        </Grid.Column>
      )
      : (
        <Grid.Column width={10}>
          <Container textAlign="center">
            <Icon style={{marginTop: '15vh'}} loading size="huge" name="spinner" color="blue"></Icon>
          </Container>
        </Grid.Column>
      )

    return (
      <Grid centered columns={4}>
        <div ref={this.handleContextRef}></div>
        {/* <Grid.Column width={10}> */}
          {theContent}
          {/* { 
            posts && 
              posts.map((post, i) => {
                return <CardContainer
                  caption={post.caption}
                  author={post.author}
                  likeList={post.likeList}
                  likes={post.likes}
                  source={post.image.pathToFile}
                  comments={post.comments}
                  id={post._id}
                  key={i} />
              })
          } */}
          
        {/* </Grid.Column> */}
        <Grid.Column width={3}>
          <Sticky context={ this.state.contextRef } style={{marginTop: '40px'}}>
            <Segment style={{marginTop: '40px'}}>
              <UserFloat />
            </Segment>
            <Segment style={{marginTop: '2px'}} vertical>
              <Link to="/post" style={{textAlign: 'center', margin: '0 auto !important', display: 'block'}} >
                <Icon color="purple" name="camera" size="large" style={{cursor: 'pointer', display: 'inline-block', margin: '0 5px'}}/>
                <Header style={{margin: '0 5px', cursor: 'pointer', display: 'inline-block'}}>Add Photo</Header>
              </Link>
            </Segment>
          </Sticky>
        </Grid.Column>

      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    comments: state.comments,
    loader: state.loader.loading
  }
}

export default connect(mapStateToProps)(ContentGrid)