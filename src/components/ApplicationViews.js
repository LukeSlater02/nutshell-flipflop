import React from "react"
import { Routes, Route, Outlet, Navigate } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { EventList } from "./events/EventList"
import { EventForm } from "./events/EventForm"
import { EventEditForm } from "./events/EventEditForm"
import { TaskList } from "./tasks/TaskList"
import { TaskEditForm } from "./tasks/TaskEditForm";
import { TaskForm } from "./tasks/TaskForm"
import { FriendList } from "./friends/FriendsList"
import { ArticleList } from "./articles/ArticleList"
import { ArticleForm } from "./articles/ArticleForm"
import { Home } from "./Dashboard/Home"
import { TaskDetail } from "./tasks/TaskDetail"
import { EventDetail } from "./events/EventDetail"


export const ApplicationViews = ({isAuthenticated, setAuthUser}) => {
  const PrivateOutlet = () => {
		return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
	}
  return (
    <>
    <Routes>
      <Route path="/" element={<PrivateOutlet/>} >
        <Route path='/Home' element={<Home/>}/>
        <Route path="/friends" element={<FriendList />} />
        <Route path="/messages" element={""} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/tasks/create" element={<TaskForm />} />
        <Route path="/tasks/:taskId" element={<TaskDetail />} />
        <Route path="/tasks/:taskId/edit" element={<TaskEditForm />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/events/:eventId" element={<EventDetail />} />
        <Route path="/events/:eventId/edit" element={<EventEditForm />}></Route>
        <Route path="/events/create" element={<EventForm />} />
        <Route path="/events/:eventId/edit" element={<EventEditForm />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/create" element={<ArticleForm />} />
      </Route>

      <Route path="/login" element={<Login setAuthUser={setAuthUser}/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </>
  )
}
