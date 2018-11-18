import { connect } from 'react-redux'
import Register from './Register'
import { RegisterRequest } from './RegisterRequest'
import { registerUser } from '../../actions/authentication'

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    regUser: (e, history) => {
      e.preventDefault()
      const name = e.target.name.value
      const email = e.target.email.value
      const password = e.target.password.value
      // const jsonUser = RegisterRequest(name, email, password)
      const jsonUser = {
        "name": name,
        "email": email,
        "password": password
      }

      try {
        dispatch(registerUser(jsonUser, history))
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