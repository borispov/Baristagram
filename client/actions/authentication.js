import axios from 'axios'
import setAuthToken from '../setAuthToken'
import jwt_decode from 'jwt-decode'

export const registerUser = (user, history) => dispatch => {
    console.log('hello registerUser action')
    axios.post('/api/register', user)
            .then(res => history.push('/login'))
            .catch(err => {
                console.log(err)
                dispatch({
                    type: 'GET_ERRORS',
                    payload: err
                })
            })
}

export const loginUser = (user, history) => dispatch => {
    axios.post('/api/login', user)
            .then(res => {
                const { token, avatarPath } = res.data
                localStorage.setItem('jwtToken', token)
                localStorage.setItem('avatarPath', avatarPath)
                setAuthToken(token, avatarPath)
                const decoded = jwt_decode(token)
                // console.log(localStorage)
                dispatch(setCurrentUser(decoded, avatarPath))
                history.push('/')
            })
            .catch(err => {
                console.log(`error occured: ${err}`)
                dispatch({
                    type: 'GET_ERRORS',
                    payload: err.response.data
                })
            })
}

export const setCurrentUser = (decoded, avatarPath) => {
    return {
        type: 'SET_CURRENT_USER',
        payload: decoded,
        avatarPath
    }
}

export const logoutUser = (history) => dispatch => {
  localStorage.removeItem('jwtToken')
  localStorage.removeItem('avatarPath')
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  history && history.push('/login');
}