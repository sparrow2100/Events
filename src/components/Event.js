import { useState } from "react";

const Event = ({ event }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <li className="event">
      <h3>{event.summary}</h3>
      <p>{new Date(event.created).toUTCString()}</p>
      <p>{event.location}</p>
      {expanded ? (
        <p id="description" className="details">
          {event.description}
        </p>
      ) : null}
      {expanded ? (
        <button
          onClick={() => setExpanded(false)}
          className="details-btn hide-btn"
        >
          hide details
        </button>
      ) : (
        <button onClick={() => setExpanded(true)} className="details-btn">
          show details
        </button>
      )}
    </li>
  );
};

export default Event;
