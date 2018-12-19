import { 
  FETCH_PHOTOS_SUCCESS
} from '../actions/fetchPosts'
 
export function photoReducers(state = [], action){
  switch (action.type) {
    
    case 'POST_PHOTO_SUCCESS':
      return [
        ...state,
        action.payload
      ]

    case FETCH_PHOTOS_SUCCESS:
      // console.log(action.data)
      return [
        // ...state,
        ...action.data
      ]

    case 'ADD_PHOTO':
      return state.concat([{
        _id: action.id,
        image: action.image,
        likes: 0,
        caption: action.caption
      }])

    case 'ADD_COMMENT':
      return state.map((post, index) => {
        if ( post._id !== action.postID) {
          return post
        }
        console.log('----it\'s down here, come on')
        return {
          ...post,
          comments: [
            ...post.comments,
            {
              author: action.author,
              comment: action.comment,
              _id: action.postID,
            }
          ]
        }
      })

    case 'REMOVE_COMMENT':
      console.log('--inside REMOVE_COMMENT')
      return state.map((post, index) => {
        if (post._id !== action.postID) {
          return post
        }
        return {
          ...post,
          comments: [
            ...post.comments.slice(0, action.index),
            ...post.comments.slice(action.index + 1)
          ]
        }
      })

    case 'ADD_LIKE':
      return state.map((photo) => {
        if (action.id !== photo._id) return photo
        let user = action.user
        return {
          ...photo,
          likeList: [...photo.likeList, user],
          likes: photo.likes++
        }
      })

    case 'REMOVE_LIKE':
      return state.map(p => {
        if (action.id !== p._id) return p
        let indexOfUser = p.like.indexOf(action.user)
        return {
          ...p,
          likeList: [
            likeList.slice(0, indexOfUser).concat(likeList.slice(indexOfUser + 1))
          ],
          likes: likes--
        }
      })

    default:  
      return state
  }
}