import {SAVE_USER} from "../actions";

export function userName(state='', action) {
  switch (action.type) {
    case SAVE_USER:
      return action.userName;
    default:
      return state;
  }
}