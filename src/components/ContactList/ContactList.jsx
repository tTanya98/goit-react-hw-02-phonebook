import PropTypes from 'prop-types';
import sty from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={sty.list}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={sty.item}>
        <p className={sty.contact}>
          {name}............
          {number}
        </p>
        <button
          className={sty.btn}
          type="submit"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;