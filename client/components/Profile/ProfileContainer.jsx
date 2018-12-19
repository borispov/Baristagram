import { connect } from 'react-redux'
import ProfilePage from './ProfilePage'
import axios from 'axios'

import { fetchImages } from '../../actions/fetchPosts'

const mapStateToProps = state => {
  const author = state.auth.user.name

  return {
    posts: state.posts,
    author,
    loader: state.loader.loading
  }
}

export default connect(mapStateToProps, {fetchImages})(ProfilePage)