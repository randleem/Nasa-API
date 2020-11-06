import React, { useState } from "react";

function Calendar() {
  let current_datetime = new Date();
  let formatted_date =
    current_datetime.getFullYear() +
    "-" +
    (current_datetime.getMonth() + 1) +
    "-" +
    current_datetime.getDate();

  const [date, setDate] = useState(formatted_date);

  return (
    <div>
      <label>Select your Birthday:</label>
      <input
        onChange={(e) => setDate(e.target.value)}
        type="date"
        id="input-date"
        name="date"
      />
      <p>{date}</p>
    </div>
  );
}

export default Calendar;
