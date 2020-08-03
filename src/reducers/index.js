import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux';

import {userInfo} from "./register";
import {list} from "./list";

const reducer = combineReducers({
  userInfo, list
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
export default function createMyStore() {
  return createStore(reducer, enhancer)
}
