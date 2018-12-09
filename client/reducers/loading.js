const initialState = {
  loading: false
}

export function loader(state = initialState, action) {
  switch (action.type) {
    case 'LOADER':
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state
  }
}