import React from "react";
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faUserGroup, faHouse, faClipboardCheck, faCalendarDays, faArrowRightFromBracket, faNewspaper } from '@fortawesome/free-solid-svg-icons'

export const Footer = () => {
    return (
        <footer>
            <img className="logo" src={"elebirdriders-white.png"} />
            <img className="team" src={"lukepic.png"}/> <img className="team" src={"andrewpic.png"}/> <p></p> <img className="team" src={"derickpic.png"}/> <img className="team" src={"nathanpic.png"}/>
            <p>&copy; Elephant Bird Riders - C55</p>
        </footer>
    )
}   