import React from 'react'
import { Icon, Transition } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { removeLikeFromDB } from '../../actions/actionCreators'

const CardIcons = (props) => {

  // if classes prop exist, assign it to classes variable. 
  const classes = props.classes ? props.classes : ''
  const isLiked = props.isLiked ? 'like' : 'heart outline'

  const showLikes = props.likes > 0 ? props.likes : ''
  return (
    <div className={`card__icon-container ${classes && classes}`} >
      <Transition duration={200}>
        <Icon size="large" className="card__icon" name={isLiked} onClick={removeLikeFromDB(props.postid, props.user)}></Icon>
      </Transition>
      <span style={{color: 'lightgrey'}} >{showLikes}</span>
      <Icon size="large" className="card__icon" name="comment outline"></Icon>
    </div>
  )
}

// mapStateToProps = state => {

// }

export default connect(null, {removeLikeFromDB})(CardIcons)