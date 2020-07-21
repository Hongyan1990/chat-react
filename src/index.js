import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

// import * as serviceWorker from './serviceWorker';
import './index.css';
import createMyStore from "./reducers";
import RouterMap from './router/RouterMap'

const store = createMyStore()
ReactDOM.render(
  <Provider store={store}>
    <RouterMap />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
