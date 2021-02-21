import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/actions';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { contacts } = this.props;

    if (contacts.some(contact => contact.name === name)) {
      this.props.onSubmit(name);
      return
    }

    this.props.onAddContact(name, number);
    this.props.onSave();

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <>
        <form className={s.container} onSubmit={this.handleSubmit}>
          <label className={s.field}>
            <span className={s.label}>Name</span>
            <input
              className={s.input}
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              required
            />
          </label>
          <label className={s.field}>
            <span className={s.label}>Number</span>
            <input
              className={s.input}
              type="tel"
              name="number"
              value={number}
              onChange={this.handleChange}
              required
            />
          </label>
          <button className={s.button} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
};

const mapStateToProps = state => ({
  contacts: state.contacts.items,
})

const mapDispatchToProps = dispatch => ({
  onAddContact: (name, number) => dispatch(contactsActions.addContact(name, number))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
