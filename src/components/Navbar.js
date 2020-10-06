import React, {useContext} from 'react';
import './Navbar.css'
import AuthContext from '../context/authContext'

import {Layout} from 'antd'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  } from '@ant-design/icons';

const {Header} = Layout


const Navbar = ({history}) => {
    const {
        side,
        setSideFunc,
        currentUser,
        signOutFunc
    } = useContext(AuthContext)

    const HandleToggle = () => {
        setSideFunc(!side)
    }

    const handleClose = () => {
        signOutFunc()
        if(currentUser) history.push("/login")
    }
    

    return ( 
        <Header className='nav'>
            {currentUser ?
            <>
                {React.createElement(side ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: ()=>HandleToggle(),
                        })
                }
                <a onClick={handleClose} href="!#">Cerrar sesion</a>
            </>
            : null}
        </Header>
     );
}
 
export default Navbar;