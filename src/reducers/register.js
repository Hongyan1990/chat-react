import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  UPDATE_USER,
  QUERY_USER,
  LOGOUT
} from "../actions";
const defaultState = {
  id: '',
  name: '',
  role: 0,
  avatar: '',
  isAuth: false,
  redirectPath: '',
  errMsg: ''
};
export function userInfo(state=defaultState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        id: action.userInfo.id,
        name: action.userInfo.name,
        role: action.userInfo.role,
        isAuth: true,
        errMsg: '',
        redirectPath: `/userinfo/${action.userInfo.role}`
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
        redirectPath: `/list/${action.userInfo.role}`
      };
    case QUERY_USER:
      return {
        ...state,
        id: action.userInfo.id,
        name: action.userInfo.name,
        role: action.userInfo.role,
        isAuth: true,
        avatar: action.userInfo.avatar,
        errMsg: '',
        redirectPath: `/list/${action.userInfo.role}`
      };
    case LOGOUT:
      return {
        ...defaultState,
        redirectPath: '/login'
      };
    case UPDATE_USER:
      return {
        ...state,
        redirectPath: `/list`
      };
    case REGISTER_FAIL:
      return {...state, isAuth: false, errMsg: action.errMsg, redirectPath: ''}
    default:
      return state;
  }
}