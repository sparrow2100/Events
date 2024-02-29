import { useState } from "react";

const NumberOfEvents = () => {
  const [number, setNumber] = useState(32);
  return (
    <div id="number-of-events">
      <input
        type="number"
        placeholder="change number of events"
        value={number}
        onChange={(changeEvent) => setNumber(changeEvent.target.value)}
      />
      ;
    </div>
  );
};

export default NumberOfEvents;
