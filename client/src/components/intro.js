import React from 'react';
import {Link} from 'react-router-dom';
import './intro.css';

export default function Intro() {




  return (
    <div className="intro">
      <h1>7 MILLION PAINTINGS</h1>
      <p>This app composes computer generated art.</p>
      <p>Enjoy never before seen art and save images you like to your gallery.</p>
      <p>Coming soon... prints, business cards, &amp; logo designs made with these never before seen images.</p>
      <button id="sign-up" type="submit">
        <Link id="btn" to={ {pathname: '/signup'} }>SIGN UP</Link>
      </button>
      <button id="login">
        <Link id="btn" to={ {pathname: '/login'} }>LOG IN</Link>
      </button>
    </div>
  );
}
