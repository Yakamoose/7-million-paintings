import {SET_USERNAME, SET_PASSWORD} from './actions';

const initialState = {};

export const millionReducer = (state=initialState, action) => {
  if (action.type === SET_USERNAME) {
    return Object.assign({}, state, {
      username: action.username
    });
  }
  else if (action.type === SET_PASSWORD) {
    return Object.assign({}, state, {
      password: action.password
    });
  }
  return state;
}
