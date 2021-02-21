import React, { PureComponent } from 'react';
import { CSSTransition } from 'react-transition-group';

import { connect } from 'react-redux';

import Container from './components/Container';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import Sorter from './components/Sorter';
import Modal from './components/UI/Modal/Modal';
import Notice from './components/Notice';

import './styles/animations/Fade.css';
import './styles/animations/ModalAppear.css';
import './styles/animations/NoticeAppear.css';
import './styles/animations/ContactListAppear.css';

class App extends PureComponent {
  state = {
    // sortBy: 'id',
    showModal: false,
    error: false,
    text: ''
  };

  handleRadioChange = event => {
    const { value } = event.target;

    this.setState({
      sortBy: value,
    });
  };

  // getSortContacts = contactsList => {
  //   const { sortBy } = this.state;

  //   if (sortBy === 'abc') {
  //     return contactsList.sort((a, b) => {
  //       const aName = a.name.toLowerCase();
  //       const bName = b.name.toLowerCase();
  //       if (aName < bName) {
  //         return -1;
  //       }
  //       if (aName > bName) {
  //         return 1;
  //       }

  //       return 0;
  //     });
  //   }

  //   if (sortBy === 'id') {
  //     return contactsList.sort((a, b) => {
  //       if (a.id < b.id) {
  //         return -1;
  //       }
  //       if (a.id > b.id) {
  //         return 1;
  //       }

  //       return 0;
  //     });
  //   }
  // };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  showNotice = (contactName) => {
    this.setState({
        text: `${contactName} is already in contacts!`,
        error: true,
        showModal: false,
    });
    
    setTimeout(() => {
        this.setState({ error: false, })
    }, 2000);
  }

  render() {
    const { sortBy, showModal, error, text } = this.state;
    // const sortedContacts = this.getSortContacts(this.props.contacts);
    // console.log(this.props.contacts);

    return (
      <Container>
        <Header onClick={this.toggleModal} />
        
        <CSSTransition
          in={error}
          unmountOnExit
          classNames="notice"
          timeout={250}
        >
          <Notice text={text} />
        </CSSTransition>
        

        <CSSTransition
          in={showModal}
          unmountOnExit
          classNames="modal"
          timeout={500}
        >
          <Modal onClose={this.toggleModal}>
            <ContactForm onSave={this.toggleModal} onSubmit={this.showNotice} />
          </Modal>
        </CSSTransition>

        <CSSTransition
          in={this.props.contacts.length > 1}
          unmountOnExit
          classNames="fade"
          timeout={250}
        >
          <div>
            <Filter />
            {/* <Sorter value={sortBy} onRadioChange={this.handleRadioChange} /> */}
          </div>
        </CSSTransition>
        

        <CSSTransition
          in={true}
          appear={true}
          unmountOnExit
          classNames="item-fade"
          timeout={500}
        >
          <ContactList />
        </CSSTransition>
        
      </Container>
    );
  }
};

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

export default connect(mapStateToProps)(App);
// export default App;
