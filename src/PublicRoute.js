import React,  {useContext} from 'react'
import {Route, Redirect} from 'react-router-dom'
import Authcontext from './context/authContext'

const PublicRoute = ({component: RouteComponent, restricted, ...rest}) => {
    const {currentUser} = useContext(Authcontext)

    return (
        <Route 
            {...rest} 
            render = {routerProps => (
                currentUser && restricted ?
                <Redirect to="/"/>
                :
                <RouteComponent {...routerProps}/>
            )}
        />
    );
}
 
export default PublicRoute;