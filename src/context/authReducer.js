import {
    SET_SIDE
} from './types'

export default (state, action) => {
    switch(action.type) {
        case SET_SIDE: 
        return {
            ...state,
            side: action.payload
        }
        default:
        return state
    }
}