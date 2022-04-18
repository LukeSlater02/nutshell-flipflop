import React, { useState, useEffect } from "react";
import { getEventById, deleteEvent } from "../../modules/EventManager";
import { useParams, useNavigate } from "react-router-dom"
import "./EventDetail.css";

export const EventDetail = () => {
  const [event, setEvent] = useState({name: '', date: '', location: ''});
  const [isLoading, setIsLoading] = useState(true);

  const {eventId} = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    setIsLoading(true);
    deleteEvent(eventId).then(() =>
      navigate("/events")
    );
  };

  useEffect(() => {
    getEventById(eventId)
      .then(event=>{
        setEvent(event)
      })
     
  }, [eventId]);
  return (
    <section className="event">
      <h3 className="event__name">{event.name}</h3>
      <div className="event__date">Date: {event.date}</div>
      <div className="event__location">Location: {event.location}</div><br />
      <button type="button" className="ad__button" onClick={()=>navigate(`/events/${event.id}/edit`)}>
      Edit
      </button>
      <button type="button"  onClick={()=>handleDelete()}>
      Delete
      </button>
    </section>
  );
};