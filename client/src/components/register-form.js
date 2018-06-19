import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import axios from "axios";
import history from '../history';


import Input from './input';
import {required, nonEmpty, email} from '../validators';
import {registerSuccess, registerError} from '../actions';
import {connect} from 'react-redux';


import './register-form.css'

export class RegisterUserForm extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstName: '',
      fullName: '',
      id: '',
      email: '',
      username: '',
      loggedIn: false
    }
  };
    onSubmit(user) {
      // console.log(this.state);

      axios({
        method: 'POST',
        url: 'http://localhost:8080/new-user',
        headers: {
          "Content-Type": "application/json"
        },
        data: JSON.stringify(user)
      }).then((res) => {
        // console.log(res.data);
        localStorage.setItem('userId', res.data.id);


        if(res.data.message === 'User already exists') {
          this.props.dispatch(registerError(res.data));

          this.setState ({
            loggedIn: false
          });
        }
        else if (res.data.userName != null) {
          this.props.dispatch(registerSuccess(res.data));

          this.setState ({
            firstName: res.data.firstName,
            fullName: res.data.fullName,
            id: res.data.id,
            email: res.data.email,
            username: res.data.userName,
            loggedIn: true
          });
          history.push('/art');

          console.log(this.state);
        }
      });


      // this.props.dispatch(register(user));
    }

    render() {

        return (
            <form
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <h1>Register New User</h1>

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

const mapStateToProps = (state) => ({
    firstName: state.firstName,
    fullName: state.fullName,
    id: state.id,
    email: state.email,
    username: state.userName,
    loggedIn: state.loggedIn
})



RegisterUserForm = connect(mapStateToProps)(RegisterUserForm);
// const mapDispatchToProps = {
//   register
// }

export default reduxForm({
    form: 'register'
})(RegisterUserForm);
