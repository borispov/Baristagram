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
    visibleIcon: false,
    isLiked: null
  }

  async componentDidMount() {
    this.setState({
      isLiked: this.props.isLiked
    })
  }

  showImg = () => {
    this.setState({
      show: true
    })
  }

  likeOnDoubleClick = async () => {
    
    const { postID, user, likeList } = this.props

    !this.state.isLiked 
      ? (this.props.sendLikeToDB(postID, user), await this.setState({visibleIcon: true, isLiked: true}))
      : (this.props.removeLikeFromDB(postID, user), await this.setState({visibleIcon: false, isLiked: false}))

    // this.setState({isLiked: !this.state.isLiked})
    
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