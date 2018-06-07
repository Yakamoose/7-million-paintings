import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import Input from './input';
import {required, nonEmpty, email} from '../validators';
import {postNewUser} from '../actions';
import {connect} from 'react-redux';


import './register-form.css'

export class RegisterUserForm extends React.Component {

    onSubmit(values) {
      // values.type = 'user';
      this.props.postNewUser(values);
      // this.props.dispatch(postNewUser(values));
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
                <h1>Register New User</h1>

                {successMessage}
                {errorMessage}
                <Field
                    name="firstName"
                    type="text"
                    component={Input}
                    label="First Name"
                    validate={[required, nonEmpty]}
                />
                <Field
                    name="lastName"
                    type="text"
                    component={Input}
                    label="Last Name"
                    validate={[required, nonEmpty]}
                />
                <Field
                    name="email"
                    type="email"
                    component={Input}
                    label="Email address"
                    validate={[required, nonEmpty, email]}
                />
                <Field
                    name="userName"
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

const mapDispatchToProps = {
  postNewUser
}

export default reduxForm({
    form: 'register'
})(RegisterUserForm);
