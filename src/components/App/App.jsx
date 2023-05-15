import { Container, TitleMain, TitleSec } from './App.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <TitleMain>Phonebook</TitleMain>
      <ContactForm />
      <TitleSec>Contacts</TitleSec>
      {contacts.length === 0 ? (
        <p>
          There are no contacts in your phone book yet. Please add contacts.
        </p>
      ) : (
        <>
          <Filter />
          <ContactList />
        </>
      )}
    </Container>
  );
};

export default App;
