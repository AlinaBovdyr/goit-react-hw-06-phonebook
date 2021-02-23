import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsActions from '../../redux/actions';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactListItem from './ContactListItem';
import './ContactListAnim.css'

function ContactList({ contacts, onDeleteContact }) {
  return (
    <TransitionGroup component="ol">
      {contacts.map(({ id, name, number }) => (
          <CSSTransition key={id} timeout={250} classNames="item-fade">
            <ContactListItem
              name={name}
              number={number}
              onDelete={() => onDeleteContact(id)}
            />
          </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func,
};

const getVisibleContacts = (allContacts, filter) => {
    return allContacts.filter(({name}) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    );
};

const getSortContacts = (contactsList, sortBy) => {
    if (sortBy === 'abc') {
      return contactsList.sort((a, b) => {
        const aName = a.name.toLowerCase();
        const bName = b.name.toLowerCase();
        if (aName < bName) {
          return -1;
        }
        if (aName > bName) {
          return 1;
        }

        return 0;
      });
    }

    if (sortBy === 'date') {
      return contactsList.sort((a, b) => {
        if (a.date < b.date) {
          return 1;
        }
        if (a.date > b.date) {
          return -1;
        }

        return 0;
      });
    }
  };

const mapStateToProps = ({ contacts: { items, filter, sorter } }) => {
  const visibleContacts = getVisibleContacts(items, filter);
  return {contacts: getSortContacts(visibleContacts, sorter),}
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsActions.deleteContact(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
