import React, {useContext} from 'react';
import './Navbar.css'
import AuthContext from '../context/authContext'

import {Layout} from 'antd'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  } from '@ant-design/icons';

const {Header} = Layout



const Navbar = () => {
    const authCon = useContext(AuthContext)
    const {
        side,
        setSideFunc
    } = authCon

    const HandleToggle = () => {
        setSideFunc(!side)
    }
    return ( 
        <Header className='nav'>
            {React.createElement(side ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: ()=>HandleToggle(),
            })}
        </Header>
     );
}
 
export default Navbar;