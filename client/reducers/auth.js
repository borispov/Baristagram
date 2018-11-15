export function authReducer(state = {}, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        token: action.id_token
      }
    case 'LOGIN_REQUEST':
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        user: action.creds
      }
    case 'LOGIN_FAILURE':
      return {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      }
    case 'LOGOUT_SUCCESS':
      return {
        isFetching: true,
        isAuthenticated: false
      }
    default:
      return state
  }
}