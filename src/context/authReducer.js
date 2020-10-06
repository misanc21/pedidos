import {
    SET_SIDE,
    SET_CURRENT_USER
} from './types'

export default (state, action) => {
    switch(action.type) {
        case SET_SIDE: 
        return {
            ...state,
            side: action.payload
        }
        case SET_CURRENT_USER:
            return({
                ...state,
                currentUser: action.payload
            })
        default:
        return state
    }
}