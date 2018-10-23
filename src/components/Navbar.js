import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper blue lighten-1">
            <a href="#!" className="brand-logo center">React <span className="">Shopping App</span></a>
            <ul className="right hide-on-med-and-down">
              <li><Link to="/Finalorder" className="waves-effect cyan accent-4 waves-light btn hoverable"><i className="large material-icons">local_grocery_store</i></Link></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
