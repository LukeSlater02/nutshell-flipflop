import React from 'react';
import "./EventCard.css";
import { Link } from "react-router-dom";


export const EventCard = ({ event, handleDeleteEvent }) => {
  return (
    <div className="card">
      <div className="card-content">
       
        <h3>Name: <span className="card-name">
          {event.name}
        </span></h3>
        <p>Breed: {event.date}</p>
        <button type="button" onClick={() => handleDeleteevent(event.id)}>Discharge</button>
        <Link to={`/events/${event.id}`}>
        <button>Details</button>
        </Link>
        <Link to={`/events/${event.id}/edit`}>
    <button>Edit</button>
  </Link>
      </div>
    </div>
  );
}
