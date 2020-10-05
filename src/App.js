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
  Route
} from 'react-router-dom'

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
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route path="*" component={NotFound} />
              </Switch>
            </Content>
          </Layout>
        </Router>
      </Layout>
    </AuthState>
  );
}

export default App;
