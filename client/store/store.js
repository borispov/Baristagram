import { createStore } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import { posts } from '../data/posts'
import { auth } from './auth'

// const rootReducer = require('../reducers').default
import {rootReducer} from '../reducers'

const defaultState = {
  posts,
  auth
}

export const store = createStore(rootReducer, defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
// export const history = syncHistoryWithStore(browserHistory, store)