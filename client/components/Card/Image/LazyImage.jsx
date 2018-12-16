import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Image, Visibility, Loader, Icon, Transition } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { sendLikeToDB, removeLikeFromDB } from '../../../actions/actionCreators'
import { checkUserLikeList } from './checkUserLikeList'

class LazyImage extends Component {
  
  static propTypes = {
    src: PropTypes.string.isRequired,
    size: PropTypes.string
  }

  state = { 
    show: false,
    setOn: 200,
    setOff: 200,
    visibleIcon: false
  }

  showImg = () => {
    this.setState({
      show: true
    })
  }

  likeOnDoubleClick = async () => {
    await this.setState({visibleIcon: true})
    const { postID, user, likeList } = this.props
    const isAlreadyLiked = checkUserLikeList(user, likeList)
    !isAlreadyLiked &&
      this.props.sendLikeToDB(postID, user)
    
    await setTimeout(() => {
      this.setState({
        visibleIcon: false
      })
    }, 250);

  }

  render() {
    const { visibleIcon, setOn, setOff } = this.state
    const { size } = this.props

    if (!this.state.show) {
      return (
        <Visibility className="card-container__img" as="span" onOnScreen={this.showImg}>
            <Loader active inline="centered" size={size} />
        </Visibility>
      )
    }

    return (
      <>
        <Image className="card-container__img" src={this.props.src} onDoubleClick={this.likeOnDoubleClick} style={{position: 'relative'}}/>
        <Transition uration={{ setOff, setOn }} visible={visibleIcon} >
          <Icon name="like" size="huge" style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></Icon>
        </Transition>
      </>
    )
  }
}

export default connect(null, { sendLikeToDB, removeLikeFromDB })(LazyImage)