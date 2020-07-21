import {mockRegister} from "../services";

export const SAVE_USER = 'SAVE_USER';

export function saveUser(userName) {
  return {
    type: SAVE_USER,
    userName
  }
}

export function register(userInfo) {
  return dispatch => {
    return mockRegister(userInfo)
      .then(data => {
        dispatch(saveUser(data.userName))
      })
  }
}