import * as React from 'react';
import {connect} from "react-redux";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import * as Loadable from 'react-loadable';

import App from '../containers/App.js'
import Loading from './Loading'
import Authority from '../containers/Authority'

const RouterList = [
  {
    path: '/login',
    component: () => import('../containers/Login')
  },
  {
    path: '/register',
    component: () => import('../containers/Register')
  },
  {
    path: '/userinfo/:id',
    component: () => import('../containers/UserInfo')
  },
  {
    path: '/list',
    component: () => import('../containers/Main')
  }
];

const RouterMap = (props) => (
  <Router>
    <App>
      <Authority />
      <Switch>
        <Route exact={true} path="/" render={() => (<Redirect to={`/list`} />)} />
        {
          RouterList.map(item => (
            <Route
              key={item.path}
              path={item.path}
              component={Loadable({
                loader: item.component,
                loading: Loading
              })}
            />
          ))
        }
      </Switch>
    </App>
  </Router>
);

export default connect(state => ({role: state.userInfo.role}))(RouterMap) ;