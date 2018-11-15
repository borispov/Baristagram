import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'
import Main from './Main'

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch)

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main)

export default MainContainer