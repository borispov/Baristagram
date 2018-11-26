import axios from 'axios'
import setAuthToken from '../setAuthToken'
import jwt_decode from 'jwt-decode'

export const registerUser = (user, history) => dispatch => {
    axios.post('/api/register', user)
            .then(res => history.push('/login'))
            .catch(err => {
                dispatch({
                    type: 'GET_ERRORS',
                    payload: err
                })
            })
}

export const loginUser = (user, history) => dispatch => {
    axios.post('/api/login', user)
            .then(res => {
                const { token } = res.data
                localStorage.setItem('jwtToken', token)
                setAuthToken(token)
                const decoded = jwt_decode(token)
                dispatch(setCurrentUser(decoded))
                history.push('/');
            })
            .catch(err => {
                console.log(`error occured: ${err}`)
                dispatch({
                    type: 'GET_ERRORS',
                    payload: err.response.data
                })
            })
}

export const setCurrentUser = decoded => {
    return {
        type: 'SET_CURRENT_USER',
        payload: decoded
    }
}

export const logoutUser = (history) => dispatch => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  history && history.push('/login');
}