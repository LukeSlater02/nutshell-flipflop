import React, { useState, useEffect } from "react";
import { getEventById, deleteEvent } from "../../modules/EventManager";
import { useParams, useNavigate } from "react-router-dom"
import "./EventDetail.css";
import { epochDateConverter } from "../util/epochDateConverter";

export const EventDetail = () => {
  const [event, setEvent] = useState({name: '', date: '', location: ''});
  const [isLoading, setIsLoading] = useState(true);
  const formattedDate = event?.date && epochDateConverter(event.date, 'MM/dd/yyy')
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
    <div className="detailsContainer">
    <section className="event">
      <h2>{event.name}</h2>
      <div className="event__date"><span className="detailsLabel">Date: </span>{formattedDate}</div>
      <div className="event__location"><span className="detailsLabel">Location: </span>{event.location}</div><br />
      <div className="detailsContainer">
      <button type="button" className="ad__button" onClick={()=>navigate(`/events/${event.id}/edit`)}>
      Edit
      </button>
      <button type="button"  onClick={()=>handleDelete()}>
      Delete
      </button>
      </div>
    </section>
    </div>
  );
};