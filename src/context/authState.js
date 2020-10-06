import React, { useReducer, useEffect } from 'react';
import AuthContext from './authContext'
import authReducer from './authReducer'
import app from '../base'
import * as firebase from 'firebase/app'

import {
    SET_SIDE,
    SET_CURRENT_USER
} from './types'

const AuthState = props => {
    const InitialState = {
        side : false,
        currentUser: null
    }
    const [state, dispatch] = useReducer(authReducer, InitialState)

    useEffect(()=>{
        app.auth().onAuthStateChanged(setCurrentUserFunc)
    }, [])

    const setCurrentUserFunc = () => {
        const user = app.auth().currentUser
        dispatch({
            type: SET_CURRENT_USER,
            payload: user
        })
    }

    const setSideFunc = newSide => {
        dispatch({
            type: SET_SIDE,
            payload: newSide
        })
    }

    const SingInFunc = async (email, password) => {
        try {
            await app
                .auth()
                .signInWithEmailAndPassword(email, password)
        } catch (error) {
            console.log(error)
        }
    }

    const signUpFunc = async (email, password, displayname) => {
        try {
            const newUser = await app
                .auth()
                .createUserWithEmailAndPassword(email, password)
            return await newUser.user.updateProfile({
                displayName: displayname
            })
        } catch (error) {
            console.log(error)
        }
    }

    const signInGoogleFunc = async () => {
        const provider =  new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider)
        firebase.auth().getRedirectResult().then(function(result) {
            if (result.credential) {
                dispatch({
                    type: SET_CURRENT_USER,
                    payload: result.user
                })
            }
          }).catch(function(error) {
            console.log(error)
          });
    }

    const signOutFunc = async () => {
        try {
            await app.auth().signOut()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider
            value={{
                side : state.side,
                currentUser: state.currentUser,
                setSideFunc,
                SingInFunc,
                signUpFunc,
                signOutFunc,
                signInGoogleFunc
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}
 
export default AuthState;