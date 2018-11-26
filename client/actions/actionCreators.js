export const addLike = (index) => {
  return {
    type: 'ADD_LIKE',
    index
  }
}

export const addComment = (author, postID, comment, comID) => {
  return {
    type: 'ADD_COMMENT',
    author, 
    postID,
    comment,
    comID
  }
}

export const removeComment = (postID, index) => {
  return {
    type: 'REMOVE_COMMENT',
    postID,
    index
  }
}

export const addPhoto = (user_id, postid, display_src, caption) => {
  return {
    type: 'ADD_PHOTO',
    user_id,
    postid,
    display_src,
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