import React from 'react';

import './intro.css';

export default function Intro() {




  return (
    <div className="intro">
      <h1>7 MILLION PAINTINGS</h1>
      <p>This app composes computer generated art.</p>
      <button id="sign-up" type="submit">SIGN UP</button>
      <button id="login" href='/art' type="submit">LOG IN</button>
    </div>
  );
}
