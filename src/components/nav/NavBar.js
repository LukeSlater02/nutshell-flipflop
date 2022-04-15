import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faUserGroup, faHouse, faClipboardCheck, faCalendarDays, faArrowRightFromBracket, faNewspaper } from '@fortawesome/free-solid-svg-icons'



export const NavBar = ({clearUser}) => {
  return (
    <nav>
      <ul  className="navBar">
        <li className="navBar_item">
          <Link className="nav_link" to="/"> <FontAwesomeIcon icon={faHouse} /> Dashboard</Link>
        </li>
        <li className="navBar_item item_left">
          <Link className="nav_link" to="/articles"> <FontAwesomeIcon icon={faNewspaper} /> Articles</Link>
        </li>
        <li className="navBar_item item_left">
          <Link className="nav_link" to="/friends"> <FontAwesomeIcon icon={faUserGroup} /> Friends</Link>
        </li>
        <li className="navBar_item item_left">
          <Link className="nav_link" to="/messages"> <FontAwesomeIcon icon={faMessage} /> Messages</Link>
        </li>
        <li className="navBar_item item_left">
          <Link className="nav_link" to="/tasks"> <FontAwesomeIcon icon={faClipboardCheck} /> Tasks</Link>
        </li>
        <li className="navBar_item item_left">
          <Link className="nav_link" to="/events"> <FontAwesomeIcon icon={faCalendarDays} /> Events</Link>
        </li>
        <li className="navBar_item item_left">
        {sessionStorage.getItem("nutshell_user") != null ? <Link className="nav_link" to="/login" onClick={clearUser}> <FontAwesomeIcon icon={faArrowRightFromBracket} /> Logout</Link> : ''}
        </li>
      </ul>
    </nav>
  )
}
