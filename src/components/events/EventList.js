import React, { useEffect, useState } from "react";
import "./EventList.css"
import { getAllEvents } from "../../modules/EventManager";
import { useNavigate } from "react-router-dom";

// GROUP: display a list of all the events from the database

export const EventList = () => {

    const [events, setEvents] = useState([])

    const navigate = useNavigate();


    useEffect(() => {
        getAllEvents().then(setEvents)
    }, [])

    return (
        <>
            <div className="content__list">
                <h2 className="list__header">Event List</h2>
                <div className="list__fields">
                    <span className="list__field">Name</span>
                     <span className="list__field">Date</span>
                      <span className="list__field">City</span>
                </div>
                <div className="list__content">
                    {events.map(e => (
                        <>
                            <span key={e.id} className="list__item__name">{e.name}</span>
                             <span key={e.date} className="list__item__date">{e.date}</span>
                              <span key={e.location} className="list__item">{e.location}</span>
                               <button type="button" 
                                className="add__button" 
                                onClick={() => 
                                {navigate(`/events/${e.id}/edit`)}}>Edit Event
                               </button>
                        </>
                    ))}
                </div>
            </div>

            <button type="button"
                className="add__button"
                onClick={() => {navigate("/events/create")}}>
                    Create New Event
                </button>

           
        </>
    )
}