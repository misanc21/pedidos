import React, {useContext} from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import AuthContext from '../context/authContext'
import {Layout, Menu} from 'antd'

import {
    UserOutlined,
  } from '@ant-design/icons';

const {Sider} = Layout

const SideBar = () => {
    const authCon = useContext(AuthContext)
    const {
        side,
        currentUser
    } = authCon

    return (
        <>
        { currentUser &&
        <Sider theme="light" trigger={null} collapsible collapsed={side} collapsedWidth={0} >
            <DivLogo> {!side && <h4>Pedidos</h4>} </DivLogo>
            <Menu mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                    <Link to="/">
                        Home
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
        }
        </>
     );
}

const DivLogo = styled.div`
    text-align: center;
    font-size: 2rem;
    min-height: 4rem;
`
 
export default SideBar;