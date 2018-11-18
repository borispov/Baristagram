import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'
import Main from './Main'

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main)