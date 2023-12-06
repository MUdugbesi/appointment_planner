import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, onAddContact, handleRemoveContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('Marvelous');
  const [phone, setPhone] = useState('800-555-6666');
  const [email, setEmail] = useState('udugbesimarves@gmail.com');
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleNameChange = ({ target }) => {
    setName(target.value);
  };
  const handlePhoneChange = ({ target }) => {
    setPhone(target.value);
  };
  const handleEmailChange = ({ target }) => {
    setEmail(target.value);
  };

  const clearData = () => {
    setEmail('');
    setName('');
    setPhone('');
  };

  const newContact = {
    id: Math.random(),
    name,
    phone,
    email

  };


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!isDuplicate) {
      if (name) {
        onAddContact(newContact);
        clearData();
      }
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  useEffect(() => {
    contacts.map((contact) => {
      if (newContact.name === contact.name) {
        setIsDuplicate(true);
        setName('')
        return alert(`Duplicate- ${newContact.name} has been chosen`);
      } else {
        return setIsDuplicate(false)
      }
    })
  });

  return (
    <div>
      <section>
        <h2>Add Contact</h2>

        <ContactForm
          name={name}
          setName={handleNameChange}
          phone={phone}
          setPhone={handlePhoneChange}
          email={email}
          setEmail={handleEmailChange}
          handleSubmit={handleSubmit}
        />

      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tile={contacts} onclick={handleRemoveContact} />
      </section>
    </div>
  );
};
