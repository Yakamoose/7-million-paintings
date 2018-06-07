import {REGISTER_USER_SUCCESS, LOGIN_SUCCESS} from './actions';

const initialState = {};

export const millionReducer = (state=initialState, action) => {
  if (action.type === REGISTER_USER_SUCCESS) {
    console.log(action);
    return Object.assign({}, state, {
      firstName: action.newUser.firstName,
      fullName: action.newUser.fullName,
      userName: action.newUser.username,
      email: action.newUser.email,
      id: action.newUser.id
    });
  }
  else if (action.type === LOGIN_SUCCESS) {
    return Object.assign({}, state, {
      firstName: action.user.firstName,
      fullName: action.user.fullName,
      userName: action.user.username,
      email: action.user.email,
      id: action.user.id
    })
  }
  return state;
}
