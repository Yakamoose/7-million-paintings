import React from 'react';

import './nav.css';

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li className="nav-right to-login"><a href="./index.html">LOG IN</a></li>
        <li className="title"><a href="./index.html">7 MILLION PAINTINGS</a></li>
      </ul>
    </nav>
  );
}
