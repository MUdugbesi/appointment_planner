import React from "react";


export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={setName} name="name" placeholder="Enter name"/>
        <input type="tel" value={phone} onChange={setPhone} name="phone" pattern="^[2-9]\d{2}-\d{3}-\d{4}$" placeholder="800-555-6666" />
        <input type="email" value={email} onChange={setEmail} name="email" placeholder="Enter email address"/>
        <input type="submit" value='Submit' />
      </form>
    </>
  );
};

