const Event = ({ event }) => {
  return (
    <li>
      <h3>{event.summary}</h3>
      <p>{event.created}</p>
      <p>{event.location}</p>
      <button>show details</button>
    </li>
  );
};

export default Event;
