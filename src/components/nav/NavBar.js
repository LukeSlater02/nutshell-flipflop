import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = ({clearUser}) => {
  return (
    <nav>
      <ul  className="navBar">
        <li className="navBar_item">
          <Link className="nav_link" to="/">Articles</Link>
        </li>
        <li className="navBar_item item_left">
          <Link className="nav_link" to="/friends">Friends</Link>
        </li>
        <li className="navBar_item item_left">
          <Link className="nav_link" to="/messages">Messages</Link>
        </li>
        <li className="navBar_item item_left">
          <Link className="nav_link" to="/tasks">Tasks</Link>
        </li>
        <li className="navBar_item item_left">
          <Link className="nav_link" to="/events">Events</Link>
        </li>
        <li className="navBar_item item_left">
          <Link className="nav_link" to="/login" onClick={clearUser}>Logout</Link>
        </li>
      </ul>
    </nav>
  )
}
