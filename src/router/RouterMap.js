import * as React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import * as Loadable from 'react-loadable';

import App from '../containers/App.js'
import Loading from './Loading'

const RouterList = [
  {
    path: '/login',
    component: () => import('../components/Login')
  },
  {
    path: '/register',
    component: () => import('../containers/Register')
  }
];

const RouterMap = () => (
  <Router>
    <App>
      <Switch>
        {
          RouterList.map(item => (
            <Route
              key={item.path}
              path={item.path}
              exact={true}
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

export default RouterMap;