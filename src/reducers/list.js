import {QUERY_JOBS} from "../actions";

export function list(state=[], action) {
  switch (action.type) {
    case QUERY_JOBS:
      return Array.prototype.slice.call(action.jobs);
    default:
      return state;
  }
}