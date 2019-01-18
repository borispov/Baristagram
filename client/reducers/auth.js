import isEmpty from '../../server/validation/is-empty'

const initialState = {
    isAuthenticated: false,
    user: {}
}

export function authReducer(state = initialState, action ) {
    switch(action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: {
                    ...action.payload,
                    avatarPath: action.avatarPath
                }
            }
        default: 
            return state;
    }
}