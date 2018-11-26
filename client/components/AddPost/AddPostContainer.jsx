import { connect } from 'react-redux'
import AddPost from './AddPost'
import {addPhoto, removePhoto} from '../../actions/actionCreators'

const mapStateToProps = state => {
  return {
    posts: state.posts,
    user_id: state.auth.user.id,
    username: state.auth.user.name
  }
}

const mapDispatchToProps = dispatch => ({addPhoto})

export default connect(mapStateToProps, mapDispatchToProps)(AddPost)