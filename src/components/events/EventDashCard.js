import React, { useEffect, useState } from 'react';
import "../Dashboard/Home.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark} from '@fortawesome/free-solid-svg-icons'
import { getAllEvents } from '../../modules/EventManager';


export const EventDashCard = () => {
  let today= new Date().getTime()/1000;
  
  
  const[events, setEvents] = useState([])
  const {eventId} = useParams();


  useEffect(() => {
  getAllEvents().then(setEvents)
 
},[])


  return (

    <>
      <div className="dash__content">
      <h2 className="dash__header">Upcoming Events</h2>
      {events.filter(event=>event.date > today).map(e =>( 

        <div className='card-dash-content' key={e.id}>

      <Link className="event-card-dash-link" to={`/events/${e.id}` }>
       
        <span className="card-dash-name">{e.name}</span>
       
        
    
      </Link>
      </div>
      ))}
      </div>
  </>
  );
}