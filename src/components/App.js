import { Component } from "react";
import { connect } from 'react-redux';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import contactsOperations from '../redux/contacts/contacts-operations'
import contactsSelectors from '../redux/contacts/contacts-selectors'

class App extends Component {

  componentDidMount() {
  this.props.fetchContacts();
}

  render() {
    return (
      <div>
       
    <h1>Phonebook</h1>
    <ContactForm />

    <h2>Contacts</h2> 
    <Filter />
        <ContactList />
        
        {this.props.isLoadingContacts && <h1>Загружаем...</h1>}

  </div>
    )
  }
}


const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
});
  
const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
