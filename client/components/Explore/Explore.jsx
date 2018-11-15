import React from 'react'
import { connect } from 'react-redux'
import { Button, Grid, Image, Container, Modal } from 'semantic-ui-react'
import { randomSig } from '../Profile/Gallery/fetchImages'
// import ExploreCardModal from './ExploreCardModal'
import CardInModal from './CardInModal'
import { posts } from '../../data/posts';

class Explore extends React.Component {

  state = {
    isOpen: false, 
    srcForModal: null,
    postid: null,
    clickedComments: null,
    commentsLength: 0
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.posts) {
      let cmn = nextProps.posts.map(x => x.comments.length)
      console.log(cmn)
      return true
    }
  }

  findCurrent = (id) => {
    posts.find(p => {
      if (p.id === id) {
        if ( this.state.clickedComments){
          this.setState((prevState) => ({
            clickedComments: [...this.state.clickedComments, p.comments]
          }))
        } else {
          this.setState({clickedComments: p.comments})
        }
        setTimeout(() => {
          console.log(this.state.clickedComments)
        }, 1000);
      }
    })
  }

  closeModal = () => this.setState({ isOpen: false})

  clickHandleModal = (e) => {
    let clickedComments
    let postid = e.target.id
    // posts.find(p => {
    //   if (p.id === postid) {
    //     clickedComments = p.comments
    //   }
    // })
    this.findCurrent(postid)
    let targetSrc = e.target.src
    this.setState({ isOpen: true, srcForModal: targetSrc, postid})
  }

  render() {
    const { posts } = this.props
    console.log(posts)
    const images = randomSig(12)
    return (
      <Container className="explore-container">
        <Grid stackable celled centered relaxed columns={3}>
          {
            posts.map(post => {              
              return (
                <Grid.Column key={post.id}>
                  <Image post={post} onClick={this.clickHandleModal} src={post.display_src} id={post.id} />
                </Grid.Column>
              )
            })
          }

          <Modal className="myCardModal"
            open={this.state.isOpen}
            onClose={this.closeModal}
            content={
              <CardInModal
                postid={this.state.postid}
                posts={this.state.clickedComments}
                imgsrc={this.state.srcForModal} 
                author={''}
              />
            } 
          />

        </Grid>
      </Container>
    )
  }
}

const mapStateToProps = state => ({posts: state.posts})

export default connect(mapStateToProps)(Explore)