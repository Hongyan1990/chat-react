import {QUERY_JOBS, QUERY_PUBLICATION} from "../actions";

export function list(state={
  jobs: [],
  publication: []
}, action) {
  switch (action.type) {
    case QUERY_JOBS:
      return {...state, jobs: Array.prototype.slice.call(action.jobs)};
    case QUERY_PUBLICATION:
      return {...state, publication: Array.prototype.slice.call(action.jobs)};
    default:
      return state;
  }
}