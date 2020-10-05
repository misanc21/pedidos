import React, {useContext} from 'react';
import './Sidebar.css'

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
        side
    } = authCon

    return (
        <Sider theme="light" trigger={null} collapsible collapsed={side} collapsedWidth={0} >
            <div className="logo">{!side && <h4>Pedidos</h4>}</div>
            <Menu mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                    <Link to="/">
                        Home
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
     );
}
 
export default SideBar;