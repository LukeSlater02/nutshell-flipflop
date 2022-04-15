import React from "react"
import { Routes, Route, Outlet, Navigate } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { EventList } from "./events/EventList"
import { EventForm } from "./events/EventForm"
import { TaskList } from "./tasks/TaskList"
import { TaskForm } from "./tasks/TaskForm"
import { FriendList } from "./friends/FriendsList"

export const ApplicationViews = ({isAuthenticated, setAuthUser}) => {
  const PrivateOutlet = () => {
		return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
	}
  return (
    <>
    <Routes>
      <Route path="/" element={<PrivateOutlet/>} >
        <Route path="/friends" element={<FriendList />} />
        <Route path="/messages" element={""} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/tasks/create" element={<TaskForm />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/events/create" element={<EventForm />} />
      </Route>

      <Route path="/login" element={<Login setAuthUser={setAuthUser}/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </>
  )
}
