const combineReducers = require('redux').combineReducers
import { photoReducers } from './photos'
import { authReducer } from './auth'
import { errorReducer } from './errorReducer';

export const rootReducer = combineReducers({
  posts: photoReducers,
  auth: authReducer,
  errors: errorReducer
})