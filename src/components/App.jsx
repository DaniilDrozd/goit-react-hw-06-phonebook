import { useSelector, useDispatch } from 'react-redux';
import { addContact,deleteContact} from '../redux/contactSlice'; 
import { filterSelector, setFilter } from './redux/filterSlice';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import css from './app.module.css';

const App = () => {
  const dispatch = useDispatch(); 
  const filter = useSelector(filterSelector); 
  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className={css.appContainer}>
      <h1>Телефонная книга</h1>
      <ContactForm onSubmit={(contact) => dispatch(addContact(contact))} />
      <h2 className={css.h2Style}>Контакты</h2>
      <Filter value={filter} onChangeFilter={handleFilterChange} />
      <ContactList contacts={getViewContacts()} onDelete={deleteContact} /> 
    </div>
  );
}

export default App;
