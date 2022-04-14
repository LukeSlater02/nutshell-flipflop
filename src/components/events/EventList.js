import React, { useEffect, useState } from "react";
import "./EventList.css"
import { getAllEvents } from "../../modules/EventManager";

// GROUP: display a list of all the events from the database

export const EventList = () => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        getAllEvents().then(setEvents)
    }, [])

    return (
        <>
            <div className="content__list">
                <h2 className="list__header">Event List</h2>
                <div className="list__fields">
                    <span className="list__field">Name</span> <span className="list__field">Date</span> <span className="list__field">City</span>
                </div>
                <div className="list__content">
                    {events.map(e => (
                        <>
                            <span className="list__item__name">{e.name}</span> <span className="list__item__date">{e.date}</span> <span className="list__item">{e.location}</span>
                        </>
                    ))}
                </div>
            </div>

            <button className="add__button">Add New Event</button>
        </>
    )
}