import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../../actions/actionCreators'
import CommentBox from './CommentBox'

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

const CommentBoxContainer = connect(mapStateToProps, mapDispatchToProps)(CommentBox)

export default CommentBoxContainer