export function photoReducers(state = [], action){
  switch (action.type) {
    case 'ADD_PHOTO':
      return state.concat([{
        id: action.id,
        src: action.display_src,
        likes: 0,
        caption: action.caption
      }])
    case 'ADD_COMMENT':
      return state.map((post, index) => {
        if ( post.id !== action.postID) {
          return post
        }
        console.log(post.id === action.postID)
        return {
          ...post,
          comments: [
            ...post.comments,
            {
              author: action.author,
              postID: action.postID,
              comment: action.comment,
              comID: action.comID
            }
          ]
        }
      })
      let thePost = state.find(post => post.id === action.postID)

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