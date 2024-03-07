import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [number, setNumber] = useState(32);
  const handleChange = (event) => {
    setNumber(event.target.value);
    setCurrentNOE(event.target.value);
    let typedNumber = event.target.value;
    // error message
    let errorText;
    if (isNaN(typedNumber) || typedNumber <= 0) {
      errorText = "Please enter a positive number.";
    } else {
      errorText = "";
    }
    setErrorAlert(errorText);
  };
  return (
    <div id="number-of-events">
      <label htmlFor="number-of-events-input">Number of Events:</label>
      <input
        type="number"
        placeholder="change number of events"
        value={number}
        onChange={handleChange}
        className="number-of-events-input"
        id="number-of-events-input"
      />
    </div>
  );
};

export default NumberOfEvents;
