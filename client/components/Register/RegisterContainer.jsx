import { connect } from 'react-redux'
import Register from './Register'
import { RegisterRequest } from './RegisterRequest'
import { registerUser } from '../../actions/authentication'
import postForm from '../AddPost/postForm'

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    registerUser,
    regUser: async (e, history) => {
      e.preventDefault()
      const name = e.target.name.value
      const email = e.target.email.value
      const password = e.target.password.value
      const avatar = e.target.upload.files[0]
      // const jsonUser = RegisterRequest(name, email, password)
      const data = await postForm(avatar, null, null, 'avatar', { name, email, password })

      try {
        dispatch(registerUser(data, history))
      } catch (error) {
        dispatch({
          type: "GET_ERRORS",
          payload: error
        })
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)