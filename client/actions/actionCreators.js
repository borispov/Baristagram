import axios from 'axios'

export const addLike = (index) => {
  return {
    type: 'ADD_LIKE',
    index
  }
}

export const addComment = (author, postID, comment) => dispatch => {
  const data = {
    author,
    postID,
    comment
  }
  axios.post('/api/addComment', data)
    .then(res => {
      if (res.statusText) {
        dispatch(addCommentSuccess(res.data))
        return res.data
      }
    })
    .catch(err => console.log('cant add comment', err))
}

export const addCommentSuccess = data => {
  return {
    type: 'ADD_COMMENT',
    author: data.author,
    postID: data.postID,
    comment: data.comment
  }
}

export const remComment = (postID, index) => dispatch => {
  const data = { postID, index }
  axios.post('/api/removeComment', data)
    .then(response => {
      dispatch(removeComment(postID, index))
      return response
    })
    .catch(err = console.error('- rmComment failed -', err))
}

export const removeComment = (postID, index) => {
  return {
    type: 'REMOVE_COMMENT',
    postID,
    index
  }
}

export const addPhoto = (user_id, postid, caption) => {
  dispatch
  return {
    type: 'ADD_PHOTO',
    user_id,
    postid,
    caption
  }
}


// Auth Actions !! 
export const loginRequest = (creds) => {
  return {
    type: 'LOGIN_REQUEST',
    isFetching: true,
    isAuthenticated: false,
    creds
  }
}

export const getLogin = (user) => {
  return {
    type: 'LOGIN_SUCCESS',
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token
  }
}

export const loginError = (message) => {
  return {
    type: 'LOGIN_FAILURE',
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export const logoutSuccess = () => {
  return {
    type: 'LOGOUT_SUCCESS',
    isFetching: true,
    isAuthenticated: false,
  }
}