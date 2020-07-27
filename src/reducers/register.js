import {REGISTER_SUCCESS, LOGIN_SUCCESS, REGISTER_FAIL} from "../actions";

export function userInfo(state={
  id: '',
  name: '',
  role: 0,
  avatar: '',
  isAuth: false,
  redirectPath: '',
  errMsg: ''
}, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        id: action.userInfo.id,
        name: action.userInfo.name,
        role: action.userInfo.role,
        isAuth: true,
        errMsg: '',
        redirectPath: '/userinfo'
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        id: action.userInfo.id,
        name: action.userInfo.name,
        role: action.userInfo.role,
        isAuth: true,
        avatar: action.userInfo.avatar,
        errMsg: '',
        redirectPath: '/userinfo'
      };
    case REGISTER_FAIL:
      return {...state, isAuth: false, errMsg: action.errMsg, redirectPath: ''}
    default:
      return state;
  }
}