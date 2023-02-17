// src/components/Event.js

import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <li>
      <h2>{event && event.summary}</h2>
      <h3>{event && event.location}</h3>
      {showDetails ?
        <p className="details">{event && event.description}</p> :
        null
      }
      {showDetails ?
        <button onClick={() => setShowDetails(false)}>hide details</button> :
        <button onClick={() => setShowDetails(true)}>show details</button>
      }
    </li>
  )
}

export default Event;