import React from 'react';
import "./EventCard.css";
import { Link } from "react-router-dom";
import { epochDateConverter } from '../util/epochDateConverter';


export const EventCard = ({ event }) => {
  const formattedDate = event?.date && epochDateConverter(event.date, 'eee. MMM do')
  
  return (
        <div className='card-content'>

      <Link className="card-link" to={`/events/${event.id}`}>
       
        <span className="card-name">
          {event.name}
        </span>
        <span className='card-date'>{formattedDate}</span>
        <span className='card-status'>{event.location}</span>
    
      </Link>

        </div>
   
  );
}
