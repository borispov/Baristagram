import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import Main from './components/Main'
import MainContainer from './components/MainContainer'
import App from './components/App'

import { store } from './store/store'

console.log(store.getState())
store.subscribe(() => store.getState())

const root = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}> 
    <App isLogged={true} />
  </Provider>
, root)