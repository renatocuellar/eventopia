import React from 'react';

import './styles/CardsList.css';

class CardsListItem extends React.Component {
  render() {
    return (
      <div className="CardsListItem">
        <img
          className="CardsListItem__avatar"
          src={this.props.badge.avatarUrl}
          alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
        />

        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />@{this.props.badge.twitter}
          <br />
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

class CardsList extends React.Component {
  render() {
    return (
      <div className="CardsList">
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id}>
                <CardsListItem badge={badge} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CardsList;
