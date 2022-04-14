const remoteURL = "http://localhost:8088"

export const getAllEvents = () => {
    return fetch(`${remoteURL}/events`).then(res => res.json())
}

export const getEventById = (id) => {
    return fetch(`${remoteURL}/events/${id}`).then(res => res.json())
}

export const deleteEvent = id => {
    return fetch(`${remoteURL}/events/${id}`, {
        method: "DELETE"
    }).then(res => res.json())
}

export const addEvent = newEvent => {
    return fetch(`${remoteURL}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newEvent)
    }).then(res => res.json())
  }