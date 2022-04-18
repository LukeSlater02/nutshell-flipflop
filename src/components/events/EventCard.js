import React from 'react';
import "./EventCard.css";
import { Link } from "react-router-dom";


export const EventCard = ({ event, handleDeleteEvent }) => {
  
  return (
        <div className='card-content'>

      <Link className="eventCard-link" to={`/events/${event.id}`}>
       
        <span className="card-name">
          {event.name}
        </span>
        <span className='card-date'>{event.date}</span>
        <span className='card-status'>{event.location}</span>
    
      </Link>

        </div>
   
  );
}
