import {REGISTER_SUCCESS, REGISTER_FAIL} from "../actions";

export function userInfo(state={
  name: '',
  role: 0,
  avatar: '',
  isAuth: false,
  redirectPath: '',
  errMsg: ''
}, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {...state, name: action.userInfo.name, role: action.userInfo.role, isAuth: true, errMsg: ''};
    case REGISTER_FAIL:
      return {...state, isAuth: false, errMsg: action.errMsg}
    default:
      return state;
  }
}