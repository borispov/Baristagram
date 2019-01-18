const initialState = {};

export function errorReducer(state = initialState, action ) {
    switch(action.type) {
        case 'GET_ERRORS':
            console.log(action.payload)
            return {
                ...action.payload
            } 
        default: 
            return state;
    }
}