import { Toast } from 'antd-mobile';
import {registerModel, loginModel} from "../services";

export const SAVE_USER = 'SAVE_USER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export function saveUser(userName) {
  return {
    type: SAVE_USER,
    userName
  }
}

export function registerSuccess(userInfo) {
  return {
    type: REGISTER_SUCCESS,
    userInfo
  }
}

export function registerFail(errMsg) {
  return {
    type: REGISTER_FAIL,
    errMsg
  }
}

export function loginSuccess(userInfo) {
  return {
    type: LOGIN_SUCCESS,
    userInfo
  }
}

export function register(userInfo) {
  return dispatch => {
    if(userInfo.pwd !== userInfo.pwd2) {
      dispatch(registerFail('密码输入不相同'))
      return;
    }
    return registerModel(userInfo)
      .then(data => {
        dispatch(registerSuccess(data))
        Toast.success('注册成功', 1)
      })
      .catch(err => {
        dispatch(registerFail(err))
      })
  }
}

export function login(userInfo) {
  return dispatch => {
    return loginModel(userInfo)
      .then(data => {
        dispatch(loginSuccess(data))
        Toast.success('登录成功', 1)
      })
      .catch(err => {
        dispatch(registerFail(err))
      })
  }
}