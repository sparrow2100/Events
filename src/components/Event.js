import { useState } from "react";

const Event = ({ event }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <li>
      <h3>{event.summary}</h3>
      <p>{event.created}</p>
      <p>{event.location}</p>
      {expanded ? <p id="description">{event.description}</p> : null}
      {expanded ? (
        <button onClick={() => setExpanded(false)}>hide details</button>
      ) : (
        <button onClick={() => setExpanded(true)}>show details</button>
      )}
    </li>
  );
};

export default Event;
