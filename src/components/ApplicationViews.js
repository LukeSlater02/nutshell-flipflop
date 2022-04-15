import React from "react"
import { Routes, Route, Outlet, Navigate } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { EventList } from "./events/EventList"
import { EventForm } from "./events/EventForm"
import { TaskList } from "./tasks/TaskList"
import { TaskForm } from "./tasks/TaskForm"
import { TaskEditForm } from "./tasks/TaskEditForm"
import { EventEditForm } from "./events/EventEditForm"

export const ApplicationViews = ({isAuthenticated, setAuthUser}) => {
  const PrivateOutlet = () => {
		return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
	}
  return (
    <>
    <Routes>
      <Route path="/" element={<PrivateOutlet/>} >
        <Route path="/friends" element={""} />
        <Route path="/messages" element={""} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/tasks/create" element={<TaskForm />} />
        <Route path="/tasks/:taskId/edit" element={<TaskEditForm />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/events/create" element={<EventForm />} />
        <Route path="/events/:eventId/edit" element={<EventEditForm />} />
      </Route>

      <Route path="/login" element={<Login setAuthUser={setAuthUser}/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </>
  )
}
