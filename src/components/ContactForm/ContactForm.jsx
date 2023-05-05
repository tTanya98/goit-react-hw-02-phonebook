import { Component } from 'react'; 
import sty from './ContactForm.module.css'; 
import PropTypes from 'prop-types'; 

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  onChangeInput = evt => {
    const { name, value } = evt.currentTarget; 
    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <form
          className={sty.formstyle}
          onSubmit={evt => {
            evt.preventDefault(); 
            this.props.addContact(this.state);
            this.resetForm(); 
          }}
        >
          <label className={sty.label}>
            Name
            <br />
            <input
              className={sty.input}
              onChange={this.onChangeInput} 
              value={this.state.name} 
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <br />
          <label htmlFor="">
            Number
            <br />
            <input
              className={sty.input}
              onChange={this.onChangeInput} 
              value={this.state.number} 
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <br />
          <button className={sty.button} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired, 
}