import React from "react"
import { Link, useLocation } from "react-router-dom"
import "./NavBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faUserGroup, faHouse, faClipboardCheck, faCalendarDays, faArrowRightFromBracket, faNewspaper } from '@fortawesome/free-solid-svg-icons'


export const NavBar = ({clearUser}) => {
  const location = useLocation();
  return (
    <nav>
      <ul className="navBar">
        <li className="navBar_item">
 

          <Link className={`navbar__link ${location.pathname === '/Home' ? 'active':''}`} to="/Home"> <FontAwesomeIcon icon={faHouse} /> Dashboard</Link>
        </li>
        <li className="navBar_item item_left">
          <Link className={`navbar__link ${location.pathname === '/articles' ? 'active':''}`} to="/articles"> <FontAwesomeIcon icon={faNewspaper} /> Articles</Link>
        </li>
        <li className="navBar_item item_left">
          <Link className={`navbar__link ${location.pathname === '/friends' ? 'active':''}`} to="/friends"> <FontAwesomeIcon icon={faUserGroup} /> Friends</Link>
        </li>
        <li className="navBar_item item_left">
          <Link className={`navbar__link ${location.pathname === '/messages' ? 'active':''}`} to="/messages"> <FontAwesomeIcon icon={faMessage} /> Messages</Link>
        </li>
        <li className="navBar_item item_left">
          <Link className={`navbar__link ${location.pathname === '/tasks' ? 'active':''}`} to="/tasks"> <FontAwesomeIcon icon={faClipboardCheck} /> Tasks</Link>
        </li>
        <li className="navBar_item item_left">
          <Link className={`navbar__link ${location.pathname === '/events' ? 'active':''}`} to="/events"> <FontAwesomeIcon icon={faCalendarDays} /> Events</Link>
        </li>
        <li className="navBar_item item_left">
        {sessionStorage.getItem("nutshell_user") != null ? <Link className="navbar__link" to="/login" onClick={clearUser}> <FontAwesomeIcon icon={faArrowRightFromBracket} /> Logout</Link> : ''}
        </li>
      </ul>
    </nav>
  )
}

