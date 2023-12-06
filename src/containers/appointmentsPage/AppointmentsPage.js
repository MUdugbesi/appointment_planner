import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({
  appointment,
  onAddAppointment,
  contacts,
  handleFilterClick,
  onchange,
  handleAppointments,
  result,
  handleRemoveClick
}) => {
  /*
  Define state variables for 
  appointment info
  */
  const [name, setName] = useState('Wound Dressing Appointment');
  const [date, setDate] = useState('2023-12-06');
  const [time, setTime] = useState('09:05');
  const [contact, setContact] = useState('Marvelous')

  const clearData = () => {
    setName('');
    setDate('');
    setTime('');
    setContact('')
  }

  const handleSetName = ({ target }) => {
    setName(target.value)
  }
  const handleSetDate = ({ target }) => {
    setDate(target.value)
  }
  const handleSetTime = ({ target }) => {
    setTime(target.value)
  }
  const handleContactChange = ({ target }) => {
    setContact(target.value)
  }

  const newAppointment = {
    id: Math.random(),
    name,
    date,
    time,
    contact
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    if (name) {
      onAddAppointment(newAppointment)
      clearData();
    }
  };
  

  return (
    <div>

      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={contacts}
          contact={contact}
          title={name}
          date={date}
          time={time}
          setTitle={handleSetName}
          setTime={handleSetTime}
          setDate={handleSetDate}
          handleSubmit={handleSubmit}
          setContact={handleContactChange} />
      </section>

      <hr />

      <section>
        <h2>Appointments</h2>
        <TileList
          tile={appointment}
          onclick={handleRemoveClick} />
      </section>

      <section>
        <input
          type="text"
          onChange={onchange} />
        <input
          type="submit"
          value="filter by contact"
          onClick={handleFilterClick} />
      </section>

      <section>
        <p></p>

        <TileList
          tile={result}
          value='result' />
      </section>

      <section>
        {result.length ? <input
          type="submit"
          value="Hide"
          onClick={handleAppointments} /> : ''
        }
      </section>

    </div>
  );
};