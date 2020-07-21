import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux';

import {userName} from "./register";

const reducer = combineReducers({
  userName
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
export default function createMyStore() {
  return createStore(reducer, enhancer)
}
