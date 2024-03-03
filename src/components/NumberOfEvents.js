import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE }) => {
  const [number, setNumber] = useState(32);
  const handleChange = (event) => {
    setNumber(event.target.value);
    setCurrentNOE(event.target.value);
  };
  return (
    <div id="number-of-events">
      <input
        type="number"
        placeholder="change number of events"
        value={number}
        onChange={handleChange}
      />
      ;
    </div>
  );
};

export default NumberOfEvents;
