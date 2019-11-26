import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import Home from './pages/Home';
import Add from './pages/Add';
import DetailList from './pages/DetailList';
import User from './pages/User';
import * as serviceWorker from './serviceWorker';

import {Layout, Menu, Icon} from 'antd';
import {Switch, HashRouter as Router, Route, Link} from 'react-router-dom';
import {createHashHistory} from 'history';
import {withRouter} from 'react-router';
class Global extends React.Component {
  render() {
    const hashHistory = createHashHistory();
    const {Header, Sider, Content, Footer} = Layout;
    const {SubMenu, Item} = Menu;
    return (<Router>
      <Layout style={{
          display: 'flex',
          height: '100vh'
        }}>
        <Header style={{color: '#fff', padding: '15px 10px', height: 'auto', lineHeight: 1, fontSize: 20, display: 'flex', alignItems: 'center'}}>
          <div style={{color: '#000', backgroundColor: '#fff', fontSize: 24, borderRadius: 5, width: 26, height: 26, fontWeight: 600, lineHeight: 1, textAlign: 'center', marginRight: 5}}>T</div>测试用例管理后台
        </Header>
        <Layout style={{
            flex: 1
          }}>
          <Sider width={200} style={{
              backgroundColor: '#fff'
            }}>
            <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{
                borderRight: 0,
                height: '100%'
              }}>
              <SubMenu key="sub1" title={<span> < Icon type = "tool" /> 用例管理</span>}>
                <Item key="1">
                  <Link to="/"><Icon type="book"/> 用例集</Link>
                </Item>
                <Item key="2">
                  <Link to="/add"><Icon type="user"/> 我的用例</Link>
                </Item>
                <Item key="3">
                  <Link to="/add"><Icon type="global"/> 统计</Link>
                </Item>
              </SubMenu>
              <Item key="4">
                <Link to="/users"><Icon type="setting"/> 设置</Link>
              </Item>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{padding: 10}}>
              <Routes/>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>)
  }
}

function Routes(props) {
  return <Router>
    <Route exact path="/" component={Home}>
    </Route>
    <Route exact path="/add" component={Add}>
    </Route>
    <Route exact path="/detail-list/:id" component={DetailList}>
    </Route>
    <Route exact path="/users" component={User}>
    </Route>
  </Router>
}

ReactDOM.render(<Global/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
