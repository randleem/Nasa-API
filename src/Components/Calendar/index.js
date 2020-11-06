import React, { useState } from "react";
import GalaxyViewer from "../Galaxy/index";

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
      <p className="imageTitle">Select Your Birthday:</p>
      <input
        onChange={(e) => setDate(e.target.value)}
        type="date"
        id="input-date"
        name="date"
        min="1995-07-01"
        max="2020-11-06"
      />
      <GalaxyViewer date={date} />
    </div>
  );
}

export default Calendar;
