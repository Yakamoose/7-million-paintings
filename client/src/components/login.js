import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import Input from './input';
import {required, nonEmpty, email} from '../validators';

import {connect} from 'react-redux';

import {login} from '../actions';

import './login.css';

export class LogInForm extends React.Component {
  onSubmit(values) {
    login(values);
  }

  render() {
      let successMessage;
      if (this.props.submitSucceeded) {
          successMessage = (
              <div className="message message-success">
                  New user submitted successfully
              </div>
          );
      }

      let errorMessage;
      if (this.props.error) {
          errorMessage = (
              <div className="message message-error">{this.props.error}</div>
          );
      }

      return (
          <form
              onSubmit={this.props.handleSubmit(values =>
                  this.onSubmit(values)
              )}>
              <h1>Log In</h1>

              {successMessage}
              {errorMessage}
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
