import { connect } from 'react-redux'
import ProfilePage from './ProfilePage'
// import { fetchProfileImages } from '../../actions/actionCreators'

const mapStateToProps = state => {
  return {
    username: state.auth.user.name
  }
}

// const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, null)(ProfilePage)