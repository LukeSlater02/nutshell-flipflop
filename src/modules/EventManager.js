const remoteURL = "http://localhost:8088"

export const getAllEvents = () => {
    return fetch(`${remoteURL}/events`).then(res => res.json())
}

export const getEventsById = (id) => {
    return fetch(`${remoteURL}/events/${id}`).then(res => res.json())
}

export const deleteEvents = id => {
    return fetch(`${remoteURL}/events/${id}`, {
        method: "DELETE"
    }).then(res => res.json())
}

export const addEvents = newEvents => {
    return fetch(`${remoteURL}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newEvents)
    }).then(res => res.json())
  }