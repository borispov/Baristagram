import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import AppContainer from './components/AppContainer'
import { logoutUser, setCurrentUser } from './actions/authentication'
import jwt_decode from 'jwt-decode'
import setAuthToken from './setAuthToken';
import { store } from './store/store'


if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken)
  const decoded = jwt_decode(localStorage.jwtToken)
  if (localStorage.avatarPath) {
    const avatarPath = localStorage.avatarPath
    store.dispatch(setCurrentUser(decoded, avatarPath))
  } else {
    store.dispatch(setCurrentUser(decoded))
  }

  const currentTime = Date.now() / 1000
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser())
    window.location.href = '/login'
  }
}

store.subscribe(() => store.getState())

const root = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}> 
    <AppContainer />
  </Provider>
, root)