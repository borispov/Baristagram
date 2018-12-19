import axios from 'axios'

export const FETCH_PHOTOS_BEGIN = 'FETCH_PHOTOS_BEGIN'
export const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS'
export const FETCH_PHOTOS_FAILURE = 'FETCH_PHOTOS_FAILURE'

export const postImages = data => dispatch => {
  dispatch(fetchPhotosBegin())
  console.log('Uploading Images...')
  setTimeout(() => {
    axios
    .post('/api/addPhoto', data)
    .then(res => {
      if(res.statusText) {
        const posts = res.data.response
        // console.log(posts)
        dispatch(postPhotoSuccess(posts))
        dispatch({
          type: 'LOADER',
          payload: false
        })
        return res.data
      }
    }).catch(err => dispatch(fetchPhotosError(err)))
  }, 1400);
}

export const fetchImages = () => {
  return dispatch => {
    dispatch(fetchPhotosBegin())
    return axios.get('/api/fetchPhotos')
      .then(posts => {
        if (!posts.statusText) {
          throw Error(posts.statusText)
        }
        // console.log(posts)
        dispatch(fetchPhotosSuccess(posts.data))
        dispatch({
          type: 'LOADER',
          payload: false
        })
        return posts.data
      })
      .catch(err => dispatch(fetchPhotosError(err)))
  }
}

export const postPhotoSuccess = ( post ) => {
  return {
    type: 'POST_PHOTO_SUCCESS',
    payload: post
  }
}

export const fetchPhotosBegin = () => {
  return {
    type: 'LOADER',
    payload: true
  }
}

export const fetchPhotosSuccess = posts => {
  return {
    type: FETCH_PHOTOS_SUCCESS,
    data: posts
  }
}

export const fetchPhotosError = error => {
  return {
     type: 'GET_ERRORS',
     payload: error
  }
}