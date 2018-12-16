import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Image, Visibility, Loader } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { sendLikeToDB, removeLikeFromDB } from '../../../actions/actionCreators'
import { checkUserLikeList } from './checkUserLikeList'

class LazyImage extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    size: PropTypes.string
  }

  state = { 
    show: false
  }

  showImg = () => {
    this.setState({
      show: true
    })
  }

  likeOnDoubleClick = () => {
    const { postID, user, likeList } = this.props
    const isAlreadyLiked = checkUserLikeList(user, likeList)
    !isAlreadyLiked &&
      this.props.sendLikeToDB(postID, user)
  }

  render() {
    const { size } = this.props
    if (!this.state.show) {
      return (
        <Visibility className="card-container__img" as="span" onOnScreen={this.showImg}>
            <Loader active inline="centered" size={size} />
        </Visibility>
      )
    }
    return <Image className="card-container__img" src={this.props.src} onDoubleClick={this.likeOnDoubleClick}/>
  }
}

const mapStatetoProps = (state, props) => {
  const thePostLikeList = state.posts.filter(x => x._id === props.postID)[0].likeList
  return {
    likeList: thePostLikeList
  }
}
export default connect(mapStatetoProps, { sendLikeToDB, removeLikeFromDB })(LazyImage)