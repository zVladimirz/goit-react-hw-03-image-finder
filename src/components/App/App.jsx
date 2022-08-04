import { Component } from 'react';

import { nanoid } from 'nanoid';
import { Wrapper } from './App.styled';
import ContactsView from 'components/ContactsView';
import ContactsFilter from 'components/ContactsFilter';
import ContactForm from 'components/ContactForm';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = ({name, number}, { resetForm }) => {
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    const indexName = this.state.contacts.findIndex(contact => contact.name === name);
    if (indexName === -1){
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
  
    } else {alert(name + " is already in contacts");};


    resetForm();
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContact = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  render() {
    const visibleContact = this.getVisibleContact;
    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
        <ContactsFilter value={this.filter} onChange={this.changeFilter} />
        <ContactsView
          contacts={visibleContact()}
          onDeleteContact={this.deleteContact}
        />
     </Wrapper>
    );
  }
}

export default App;
