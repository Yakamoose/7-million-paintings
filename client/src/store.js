import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
// import thunk from 'redux-thunk';

import {millionReducer} from './reducers';

export default createStore(
  combineReducers({
    form:formReducer,
    millionReducer
  })
);
