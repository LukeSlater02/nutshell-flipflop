const remoteURL = "http://localhost:8088"

export const getAllTasks = () => {
    return fetch(`${remoteURL}/tasks`).then(res => res.json())
}

export const getTasksById = (id) => {
    return fetch(`${remoteURL}/tasks/${id}`).then(res => res.json())
}

export const deleteTasks = id => {
    return fetch(`${remoteURL}/tasks/${id}`, {
        method: "DELETE"
    }).then(res => res.json())
}

export const addTasks = newTasks => {
    return fetch(`${remoteURL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTasks)
    }).then(res => res.json())
  }