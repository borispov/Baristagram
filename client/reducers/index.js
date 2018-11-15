const combineReducers = require('redux').combineReducers
import { photoReducers } from './photos'
import { authReducer } from './auth'

export const rootReducer = combineReducers({
  posts: photoReducers,
  auth: authReducer
})