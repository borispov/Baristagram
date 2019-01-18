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
      const oldStateIds = state.map(k => k._id)
      const newData = action.data
      const noDups = newData.filter(newPost => {
        if (!oldStateIds.includes(newPost._id)) {
          return newPost
        }
      })
      // console.log(action.data)
      if (noDups.length) {
        console.log(`Sliced off duplicates: ${noDups}`)
        return noDups
      }

      return [
        ...state,
        // ...action.data
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

        let photoAfterLike = {
          ...photo,
          likeList: [...photo.likeList, action.user],
          likes: photo.likes + 1
        }
        // console.log(photoAfterLike)
        return photoAfterLike
      })

    case 'REMOVE_LIKE':
      return state.map(p => {
        if (action.id !== p._id) return p
        const indexOfUser = p.likeList.indexOf(action.user)
        const newList = p.likeList
          .slice(0, indexOfUser)
          .concat(p.likeList.slice(indexOfUser + 1))

        return {
          ...p,
          newList,
          likes: p.likes - 1
        }
      })

    default:  
      return state
  }
}