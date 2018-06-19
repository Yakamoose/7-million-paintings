import React from 'react';
import {Link} from 'react-router-dom';

import './nav.css';


export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.info);
  }

  onLogOutClick(e) {
    e.preventDefault();
    localStorage.clear();
    // window.location clears state, and returns loggedIn value to false
    window.location = '/';
  }


  render() {
    // console.log('nav bar render');
    // console.log(this.props.info);

    //onClick dispatch action to to window.location to '/' so will lose state

    if(this.props.info.loggedIn === true) {
      return (
        <nav>
          <ul>
            <li className="nav-left to-gallery">
              <Link to={'./gallery'}>GALLERY</Link>
            </li>
            <li className="nav-right to-login">
                <span onClick={this.onLogOutClick}>LOG OUT</span>
            </li>
            <li className="title">
              <Link className="glitch" data-text="7 MILLION PAINTINGS" to={'/art'}>7 MILLION PAINTINGS</Link>
            </li>

          </ul>
        </nav>
      );
    }
    else {
      return (
        <nav>
          <ul>
            <li className="nav-right to-login">
                <Link to={'/login'}>LOG IN</Link>
            </li>
            <li className="title">
              <Link className="glitch" data-text="7 MILLION PAINTINGS" to={'/'}>7 MILLION PAINTINGS</Link>
            </li>
          </ul>
        </nav>
      );
    }
  }
}
