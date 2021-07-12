import React from 'react';

import './styles/NewCard.css';
import expoLogo from '../images/9.png';
import Card from '../components/Card';
import CardForm from '../components/CardForm';

class NewCard extends React.Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    },
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <React.Fragment>
        <section className="NewCard__hero">
          <img className="img-hero" src={expoLogo} alt="Logo" />
        </section>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Card
                firstName={this.state.form.firstName || 'FIRST NAME'}
                lastName={this.state.form.lastName || 'LAST NAME'}
                twitter={this.state.form.twitter || 'twitter'}
                jobTitle={this.state.form.jobTitle || 'Job Title'}
                email={this.state.form.email || 'EMAIL'}
                avatarUrl="https://www.gravatar.com/avatar/6b67c9cfc28b912801998ca3be6082f5?d=identicon"
              />
            </div>

            <div className="col-6">
              <CardForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NewCard;
