import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([
    {
      id: Math.random(),
      name: 'Adeola',
      phone: '888-555-7777',
      email: 'ade@gmail.com'

    }
  ]);
  const [appointments, setAppointments] = useState([{
    id: Math.random(),
    name: 'Teeth Whitening',
    date: '07-12-2023',
    time: '09:05',
    contact: 'Adeola'

  }]);

  /*
  Implement functions to add data to
  contacts and appointments
  */

  const addContact = (contactObj) => {
    setContacts(prevContacts => [...prevContacts, contactObj])
  }

  const addAppointment = (appointmentsObj) => {
    setAppointments((prevAppointments) => [...prevAppointments, appointmentsObj])
  }

  const [search, setSearch] = useState('');

  const handleSearchChange = ({ target }) => {
    setSearch(target.value)
  }

  const [result, setResult] = useState([])

  const handleFilterClick = () => {
    const result = appointments.filter((val) => val.contact.includes(search));
    if (search) {
      setResult(result)
    }
  }

  const handleAppointment = () => {
    // const result = appointments.filter((val) => val.contact.includes(search));
    setResult([])
  }

  const handleRemoveClick = (idToRemove) => {
    if (appointments) {
      setAppointments((prevAppointments) => prevAppointments.filter((list) => list.id !== idToRemove))
    }
    if (contacts) {
      setContacts((prevContacts) => prevContacts.filter(contact => contact.id !== idToRemove))
    }
  }


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route
        index element={<Navigate to={ROUTES.CONTACTS} replace />} />
      <Route
        path={ROUTES.CONTACTS}
        element={<ContactsPage
          contacts={contacts}
          onAddContact={addContact}
          handleRemoveContact={handleRemoveClick} /> /* Add props to ContactsPage */} />
      <Route
        path={ROUTES.APPOINTMENTS}
        element={<AppointmentsPage
          appointment={appointments}
          onAddAppointment={addAppointment}
          contacts={contacts}
          handleFilterClick={handleFilterClick}
          onchange={handleSearchChange}
          handleAppointments={handleAppointment}
          result={result}
          handleRemoveClick={handleRemoveClick} /> /* Add props to AppointmentsPage */} />
    </Route>
  ));

  return (
    <RouterProvider
      router={router} />
  );
}

export default App;
