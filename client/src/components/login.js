import React from 'react';
// import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
// import Input from './input';
// import {required, nonEmpty, email} from '../validators';

import {connect} from 'react-redux';

import {setUsername, setPassword} from '../actions';

import './login.css';

export function LogIn(props) {

  return (
    <form className="login" onSubmit={e => e.preventDefault()}>
      <div className="form-group">
        <input type="text" id="username" placeholder="User Name"
          value={props.username}
          onChange={e => props.dispatch(setUsername(e.target.value))}/>
      </div>
      <div className="form-group">
        <input type="text" id="password" placeholder="Password"
          value={props.password}
          onChange={e => props.dispatch(setPassword(e.target.value))}/>
      </div>
    </form>
  );
}

export const mapStateToProps = state => ({
  username: state.username,
  password: state.password
});

export default connect(mapStateToProps)(LogIn);
