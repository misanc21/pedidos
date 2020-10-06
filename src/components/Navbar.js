import React, {useContext} from 'react';
import styled from 'styled-components'
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
        <StyledHeader>
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
        </StyledHeader>
     );
}

const StyledHeader = styled(Header)`
    background: white;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
 
export default Navbar;