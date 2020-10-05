import React, { useReducer } from 'react';
import AuthContext from './authContext'
import authReducer from './authReducer'

import {
    SET_SIDE
} from './types'

const AuthState = props => {
    const InitialState = {
        side : false
    }
    const [state, dispatch] = useReducer(authReducer, InitialState)

    const setSideFunc = newSide => {
        dispatch({
            type: SET_SIDE,
            payload: newSide
        })
    }

    return (
        <AuthContext.Provider
            value={{
                side : state.side,
                setSideFunc
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}
 
export default AuthState;