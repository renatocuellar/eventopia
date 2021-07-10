import React from 'react';
import { Link } from 'react-router-dom';
import './styles/CardNotFound.css';

function NotFound() {
  return <section className="not-found-page">
  <h1 className="not-found">404: Not Found</h1>
  <Link className="btn btn-primary" to="./">
                Go To Home
              </Link>
  </section>
  
}

export default NotFound;
