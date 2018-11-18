import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { posts } from '../data/posts'

import {rootReducer} from '../reducers'

const defaultState = {
  posts
}

export const store = createStore(
  rootReducer, 
  defaultState,
  compose(applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))