import React, { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import { updateEvent, getEventById } from "../../modules/EventManager"
import "./EventEditForm.css"
import { epochDateConverter } from "../util/epochDateConverter";


export const EventEditForm = () => {
    const [event, setEvent] = useState({ name: "", date: "", location: "" });
    const [isLoading, setIsLoading] = useState(false);
  
    const {eventId} = useParams();
    const navigate = useNavigate();
    const formattedDate = event?.date ? epochDateConverter(event?.date, 'yyy-MM-dd') : ''
    const handleFieldChange = e => {
      const stateToChange = { ...event };
      stateToChange[e.target.id] = e.target.value;
      setEvent(stateToChange);
    };
  
    const updateExistingEvent = e => {
        e.preventDefault()
        setIsLoading(true);

        const editedEvent = {
            id: eventId,
            name: event.name,
            date: event.date,
            location: event.location
          };

          updateEvent(editedEvent)
    .then(() => navigate("/events")
    )
  }

  useEffect(() => {
    getEventById(eventId)
      .then(event => {
        setEvent(event);
        setIsLoading(false);
      });
  }, []);

  return(
    <>
            <form className="event__edit__form">
                <h2 className="event__edit__header">Edit Event</h2>

                <fieldset className="event__edit__fields">
                    <div>
                        <label htmlFor="date">Date:</label>
                        <input type="date" id="date" onChange={handleFieldChange} required className="form-control" placeholder="event date" value={formattedDate}/>
                    </div>
                </fieldset>

                <fieldset className="event__edit__fields">
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" onChange={handleFieldChange} required className="form-control name" placeholder="event name" value={event.name}/>
                    </div>
                </fieldset>


                <fieldset className="event__edit__fields">
                    <div>
                        <label htmlFor="location">Location:</label>
                        <input type="text" id="location" onChange={handleFieldChange} required className="form-control location" placeholder="event location" value={event.location}/>
                    </div>
                </fieldset>

                <button 
				    type="button" 
				    className="submit__event__button"
				    disabled={isLoading}
				    onClick={updateExistingEvent}>
				    Save Event
                </button>

                <button 
				    type="button" 
				    className="cancel__event__button"
				    disabled={isLoading}
				    onClick={()=>navigate("/events")}>
				    Cancel
                </button>

            </form>
        </>





  )
}
