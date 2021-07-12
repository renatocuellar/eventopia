import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Cards.css';
import eventLogo from '../images/9.png';
import BadgesList from '../components/CardList';

class Cards extends React.Component {
  constructor(props) {
    super(props);
    console.log('1. constructor()');

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    console.log('3. componentDidMount()');

    this.timeoutId = setTimeout(() => {
      this.setState({
        data: [
          {
            id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
            firstName: 'Maria',
            lastName: 'Rodriguez',
            email: 'mrodriguez@gmail.com',
            jobTitle: 'Legacy Brand Director',
            twitter: 'mrod22221-7573',
            avatarUrl:
              'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
          },
          {
            id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
            firstName: 'Andres',
            lastName: 'Jimenez',
            email: 'anjim@hotmail.com',
            jobTitle: 'Human Research Architect',
            twitter: 'anjim61545',
            avatarUrl:
              'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
          },
          {
            id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
            firstName: 'John',
            lastName: 'Doe',
            email: 'jdoe@hotmail.com',
            jobTitle: 'National Markets Officer',
            twitter: 'Johndoetheoriginal',
            avatarUrl:
              'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
          },
        ],
      });
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('5. componentDidUpdate()');
    console.log({
      prevProps: prevProps,
      prevState: prevState,
    });

    console.log({
      props: this.props,
      state: this.state,
    });
  }

  componentWillUnmount() {
    console.log('6. componentWillUnmount');
    clearTimeout(this.timeoutId);
  }

  render() {
    console.log('2/4. render()');
    return (
      <React.Fragment>
        <header className="Cards">
          <section className="Cards__hero">
            <div className="Cards__container">
              <img
                className="Cards_eventlogo"
                src={eventLogo}
                alt="Conf Logo"
              />
            </div>
          </section>
        </header>

        <main className="Cards__container">
          <section className="Cards__buttons">
            <Link to="/cards/new" className="btn btn-primary">
              New Attendant
            </Link>
          </section>

          <BadgesList badges={this.state.data} />
        </main>
      </React.Fragment>
    );
  }
}

export default Cards;
