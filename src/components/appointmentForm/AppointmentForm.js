import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={title} onChange={setTitle} placeholder="Enter appointement description" />
        <input type="date" name="date" value={date} min={getTodayString()} onChange={setDate} />
        <input type="time" name="time" value={time} onChange={setTime} />
        <ContactPicker contacts={contacts} name="contact" value={contact} onchange={setContact} />
        <input type="submit" value="Submit" />

      </form>
    </>
  );
};
