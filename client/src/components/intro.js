import React from 'react';
import {Link} from 'react-router-dom';
import './intro.css';

export default function Intro() {




  return (
    <div className="intro">
      <h1>7 MILLION PAINTINGS</h1>
      <p>This app composes computer generated art.</p>
      <button id="sign-up" type="submit">
        <Link to={ {pathname: '/signup'} }>SIGN UP</Link>
      </button>
      <button id="login">
        <Link to={ {pathname: '/login'} }>LOG IN</Link>
      </button>
    </div>
  );
}
