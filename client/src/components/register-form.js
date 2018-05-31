import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import Input from './input';
import {required, nonEmpty, email} from '../validators';

import './register-form.css'

export class RegisterUserForm extends React.Component {
    onSubmit(values) {
      console.log(values);
      // this.props.dispatch(addList(title));
        return fetch('/test', {
            method: 'GET',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (!res.ok) {
                    if (
                        res.headers.has('content-type') &&
                        res.headers
                            .get('content-type')
                            .startsWith('application/json')
                    ) {
                        // It's a nice JSON error returned by us, so decode it
                        return res.json().then(err => Promise.reject(err));
                    }
                    // It's a less informative error returned by express
                    return Promise.reject({
                        code: res.status,
                        message: res.statusText
                    });
                }
                return;
            })
            .then(() => console.log('Submitted with values', values))
            .catch(err => {
                const {reason, message, location} = err;
                if (reason === 'ValidationError') {
                    // Convert ValidationErrors into SubmissionErrors for Redux Form
                    return Promise.reject(
                        new SubmissionError({
                            [location]: message
                        })
                    );
                }
                return Promise.reject(
                    new SubmissionError({
                        _error: 'Error submitting form, please fill out ALL fields'
                    })
                );
            });
    }

    render() {
        let successMessage;
        if (this.props.submitSucceeded) {
            successMessage = (
                <div className="message message-success">
                    Message submitted successfully
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
    form: 'register',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('register', Object.keys(errors)[0]))
})(RegisterUserForm);
