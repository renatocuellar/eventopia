import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Navbar.css';
import logo from '../images/Logo2.svg';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="Navbar">
        <section className="container-fluid">
          <Link className="Navbar__brand" to="/">
            <img className="Navbar__brand-logo" src={logo} alt="Logo" />
          </Link>
        </section>
      </nav>
    );
  }
}

export default Navbar;
