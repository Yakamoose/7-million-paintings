import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import axios from "axios";
import history from '../history';

import Input from './input';
import {required, nonEmpty, email} from '../validators';

import {connect} from 'react-redux';


import {loginSuccess, loginError} from '../actions';

import './login.css';

export class LogInForm extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit(user) {
    // console.log(user);

    axios.get(`http://localhost:8080/user/${user.username}/${user.password}`)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem('userId', res.data.id);

        if(res.data.message === 'user not found') {
          this.props.dispatch(loginError(res.data));
        }
        else if(res.data.userName != null) {
          this.props.dispatch(loginSuccess(res.data));
          history.push('/art');
          // window.location = '/art';
        }
      });

  }

  render() {


      return (
          <form
              onSubmit={this.props.handleSubmit(values =>
                  this.onSubmit(values)
              )}>
              <h1>Log In</h1>

              <Field
                  name="username"
                  type="text"
                  component={Input}
                  label="User Name"
                  validate={[required, nonEmpty]}
              />
              <Field
                  name="password"
                  type="password"
                  component={Input}
                  label="Password"
                  validate={[required, nonEmpty]}
              />
              <button
                  type="submit"
                  disabled={this.props.pristine || this.props.submitting}>
                  Submit
              </button>
          </form>
      );
  }

}

export default reduxForm({
  form: 'login'
})(LogInForm);
