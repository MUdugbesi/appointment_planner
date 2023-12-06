import React from "react";

export const ContactPicker = ({ contacts, name, value, onchange }) => {

  return (
    <>
      {contacts.length ?
        <select onChange={onchange} value={value}>
          <option value="">No contact selected</option>
          {contacts.map((contact, i) => <option name={name} value={contact.name} key={contact.name}>{contact.name}</option>)}
        </select> :
        <select onChange={onchange}>
          <option>No contact selected</option>
        </select>
      }

    </>
  );
};
