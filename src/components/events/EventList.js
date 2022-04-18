import React, { useEffect, useState } from "react";
import "./EventList.css"
import { getAllEvents, deleteEvent } from "../../modules/EventManager";
import { useNavigate } from "react-router-dom";
import { EventCard } from "./EventCard";

// GROUP: display a list of all the events from the database

export const EventList = () => {

    const [events, setEvents] = useState([])

    const navigate = useNavigate();

    const handleDeleteEvent = id => {
        deleteEvent(id)
        .then(() => getAllEvents().then(setEvents));
    };

    useEffect(() => {
        getAllEvents().then(setEvents)
    }, [])

    return (
        <>
            <div className="event__list" key={events.length}>
                <h2 className="list__header">Event List</h2>
                <div className="list__fields">
                    <span className="list__field eventHeader">Name</span>
                     <span className="list__field dateHeader">Date</span>
                      <span className="list__field statusHeader">City</span>
                </div>
                <div className="list__content">
                    {events.map(e => (
                             <EventCard
                             key={e.id}
                             event={e}
                             handleDeleteEvent={handleDeleteEvent} />
                       
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