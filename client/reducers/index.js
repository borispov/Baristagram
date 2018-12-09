const combineReducers = require('redux').combineReducers
import { photoReducers } from './photos'
import { authReducer } from './auth'
import { errorReducer } from './errorReducer'
import { loader } from './loading'

export const rootReducer = combineReducers({
  posts: photoReducers,
  auth: authReducer,
  errors: errorReducer,
  loader
})