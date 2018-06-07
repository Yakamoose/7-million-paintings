import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './nav';
import RegisterUserForm from './register-form';
import Art from './art';
import LogIn from './login';
import Intro from './intro';

import {postNewUser} from '../actions';

import {connect} from 'react-redux';


import './app.css';

export class App extends React.Component {
  postNewUser(user) {
    // this.props.dispatch(postNewUser(user));
    let testUser = {
      firstName: 'Eric',
      lastName: 'Johnson',
      userName: 'yaka',
      password: 'pass'
    }
    this.props.dispatch(postNewUser(testUser));
  }

    render() {
      return (
      <div>
        <NavBar />
        <h1>{this.props.title}</h1>
        <Router>
          <div>
          <Route path="/" component={Intro} />
          <Route path="/art" component={Art} />
          </div>
        </Router>
        <RegisterUserForm
          type="user"
          postNewUser={user => this.postNewUser(user)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  postNewUser
}

const mapStateToProps = state => ({
  user: state.user
});
export default connect(mapStateToProps)(App);
