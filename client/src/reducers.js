import {LOGIN_SUCCESS, LOGIN_ERROR, REGISTER_SUCCESS, REGISTER_ERROR} from './actions';

const initialState = {
  loggedIn: false
};

export const millionReducer = (state=initialState, action) => {
  if (action.type === LOGIN_SUCCESS) {
    console.log(action);
    return Object.assign({}, state, {
      firstName: action.firstName,
      fullName: action.fullName,
      id: action.id,
      email: action.email,
      username: action.userName,
      loggedIn: action.loggedIn
    });
  }
  else if(action.type === LOGIN_ERROR) {
    console.log(action);
    return Object.assign({}, state, {
      loggedIn: action.loggedIn
    })
  }
  else if (action.type === REGISTER_SUCCESS) {
    console.log(action);
    return Object.assign({}, state, {
      firstName: action.firstName,
      fullName: action.fullName,
      id: action.id,
      email: action.email,
      username: action.userName,
      loggedIn: action.loggedIn
    })
  }
  else if (action.type === REGISTER_ERROR) {
    console.log(action);
    return Object.assign({}, state, {
      loggedIn: action.loggedIn
    })
  }
  return state;
}
