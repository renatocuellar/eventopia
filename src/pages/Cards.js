import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Cards.css';
import eventLogo from '../images/9.png';
import CardsList from '../components/CardList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../api';

class Cards extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();
    this.intervalId = setInterval(this.fetchData, 5000);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.cards.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <div className="Cards">
          <div className="Cards__hero">
            <div className="Cards__container">
              <img
                className="Cards_conf-logo"
                src={eventLogo}
                alt="event Logo"
              />
            </div>
          </div>
        </div>

        <div className="Cards__container">
          <div className="Cards__buttons">
            <Link to="/cards/new" className="btn btn-primary">
              New Attendant
            </Link>
          </div>

          <CardsList cards={this.state.data} />
        </div>
      </React.Fragment>
    );
  }
}

export default Cards;
