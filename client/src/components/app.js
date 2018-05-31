import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './nav';
import RegisterUserForm from './register-form';
import Art from './art';


import './app.css';

export default function App(props) {
    return (
      <div>
        <NavBar />
        <Art />
      </div>
    );
}
