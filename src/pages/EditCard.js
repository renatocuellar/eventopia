import React from 'react';

import './styles/EditCard.css';
import expoLogo from '../images/9.png';
import Card from '../components/Card';
import CardForm from '../components/CardForm';
import PageLoading from '../components/PageLoading'
import api from '../api';

class EditCard extends React.Component {
  state = {
    loading: false,
    error: null,
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

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.cards.create(this.state.form);
      this.setState({ loading: false });
      this.props.history.push('/cards')
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    return (
      <React.Fragment>
        <section className="EditCard__hero">
          <img className="img-hero" src={expoLogo} alt="Logo" />
        </section>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Card
                firstName={this.state.form.firstName || 'First Name'}
                lastName={this.state.form.lastName || 'Last Name'}
                twitter={this.state.form.twitter || 'Twitter'}
                jobTitle={this.state.form.jobTitle || 'Job Title'}
                email={this.state.form.email || 'Email'}
                avatarUrl="https://www.gravatar.com/avatar/b4f66246e7ff34e9a4a176fb58d6ecda?d=identicon"
              />
            </div>

            <div className="col-6">
              <CardForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default EditCard;
