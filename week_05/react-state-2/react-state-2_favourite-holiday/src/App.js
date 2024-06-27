import React, { useState, useRef } from "react";
import "./styles.css";

export default function App() {
  const [favHoliday, setFavHoliday] = useState("");
  const [favDate, setFavDate] = useState("");
  const holidayInputRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    setFavHoliday(event.target.holiday.value);
    setFavDate(event.target.date.value);
    event.target.reset();
    holidayInputRef.current.focus();
  }

  return (
    <div className="container">
      <h1>Favourite Holiday Data Storage</h1>
      <h2 id="favourite-holiday">Please tell us your favourite holiday!</h2>
      <form
        className="form"
        aria-labelledby="favourite-holiday"
        onSubmit={handleSubmit}
      >
        <label htmlFor="holiday">My Favourite Holiday: </label>
        <input
          id="holiday"
          type="text"
          name="holiday"
          placeholder="e.g. Christmas"
          ref={holidayInputRef}
          // onChange={(event) => setFavHoliday(event.target.value)}
        />
        <label htmlFor="date">Date: </label>
        <input
          id="date"
          type="date"
          name="date"
          // onChange={(event) => setFavDate(event.target.value)}
        />
        <button type="submit" className="form__submit-button">
          Submit
        </button>
      </form>
      <h2>Output of Submitted Data</h2>
      <p>
        Favourite Holiday: <span className="output">{favHoliday}</span>
      </p>
      <p>
        Date: <span className="output">{favDate}</span>
      </p>
    </div>
  );
}
