import React, {useContext} from 'react';
import AuthContext from '../context/authContext'

const Home = () => {
    const {currentUser} = useContext(AuthContext)

    return ( <h1>hola {currentUser.displayName}</h1> );
}
 
export default Home;