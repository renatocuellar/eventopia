import React from 'react';

import './styles/Card.css';
import eventLogo from '../images/9.png';
import Gravatar from './Gravatar'

class Card extends React.Component {
  render() {
    return (
      <section className="Card">
        <container className="Card__header">
          <img src={eventLogo} alt="Logo del evento" />
        </container>

        <container className="Card__section-name">
          <img
            className="Card__avatar"
            src={this.props.avatarUrl}
            alt="Avatar"
          />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </container>

        <container className="Card__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </container>

        <container className="Card__footer">#ExpoGlobant</container>
      </section>
    );
  }
}

export default Card;
