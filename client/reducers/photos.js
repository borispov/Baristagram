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
      console.log(action.data)
      return [
        ...state,
        ...action.data
      ]

    case 'ADD_PHOTO':
      return state.concat([{
        id: action.id,
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
        if (post.id !== action.postID) {
          return post
        }
        console.log(action.postID, action.index)
        return {
          ...post,
          comments: [
            ...post.comments.slice(0, action.index),
            ...post.comments.slice(action.index + 1)
          ]
        }
      })

    case 'ADD_LIKE':
      return state.posts.map((photo) => {
        if (action.id === photo.id) {
          return {
            ...photo,
            likes: likes++
          }
        }
      })

    // case 'REMOVE_LIKE':
    //   return state.posts.map(p => {
    //     if (action.id === p.id) {
    //       return {
    //         ...p,
    //         likes: likes--
    //       }
    //     }
    //   })

    default:  
      return state
  }
}