import React from 'react';
import AuthState from './context/authState'

import {Layout} from 'antd'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'

import SideBar from './components/SideBar'
import Navbar from './components/Navbar'

import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const {Content} = Layout

function App() {
  return (
    <AuthState>
      <Layout>
        <Router>
          <SideBar/>
          <Layout>
            <Navbar />
            <Content className="site-layout-background" 
              style={{
                  margin: '24px 16px',
                  padding: 24,
                  minHeight: '100vh',
                }}
            >
              <Switch>
                <PublicRoute exact path="/login" component={Login} restricted={true} />
                <PublicRoute exact path="/signUp" component={Register} restricted={true}/>
                <PrivateRoute exact path="/" component={Home} />
                <PrivateRoute path="*" component={NotFound} />
              </Switch>
            </Content>
          </Layout>
        </Router>
      </Layout>
    </AuthState>
  );
}

export default App;
