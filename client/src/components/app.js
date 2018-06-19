import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions';
import history from '../history'

import React from 'react';
import {Router, Route} from 'react-router-dom';

import NavBar from './nav';
import RegisterUserForm from './register-form';
import Art from './art';
import LogIn from './login';
import Intro from './intro';
import Gallery from './gallery';


import './app.css';



export class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

      return (
      <div>
        <Router history={history}>
          <div>
          <NavBar info={this.props.millionReducer} />
          <Route exact path="/" component={Intro} />
          <Route exact path="/signup" component={RegisterUserForm} />
          <Route exact path="/login"  component={LogIn} />
          <Route exact path="/art" component={Art} />
          <Route exact path="/gallery" component={Gallery} />
          </div>
        </Router>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


// <RegisterUserForm
//   type="user"
//   postNewUser={user => console.log(user)}
// />
