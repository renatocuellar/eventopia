import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';
import expoGlobantLogo from '../images/9.png';
import conferenceImage from '../images/Conference-01.svg';

export default class Home extends Component {
  render() {
    return (
      <main className="Home">
        <container className="container">
          <section className="row">
            <div className="Home__col col-12 col-md-4">
              <img
                src={expoGlobantLogo}
                alt="Platzi Conf Logo"
                className="img-fluid mb-2"
              />

              <h1>Conference Management System</h1>
              <Link className="btn btn-primary" to="/cards">
                Start
              </Link>
            </div>

            <div className="Home__col d-none d-md-block col-md-8">
              <img
                src={conferenceImage}
                alt="Astronauts"
                className="img-fluid p-4"
              />
            </div>
          </section>
        </container>
      </main>
    );
  }
}
