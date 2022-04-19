import React, { useState } from "react";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import "./Nutshell.css";

//set state for IsAuthenticated. check for nutshell user logged in.
// do it in paren there so it can be passed to AppViews and Navbar. 
//this component renders the page. 

export const Nutshell = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("nutshell_user") !== null);

    const setAuthUser = (user) => {
        sessionStorage.setItem("nutshell_user", JSON.stringify(user.id))
        sessionStorage.setItem("nutshell_user_name", JSON.stringify(user.firstName))
        setIsAuthenticated(sessionStorage.getItem("nutshell_user") !== null)
    }
    
    const clearUser = () => {
        sessionStorage.clear();
        setIsAuthenticated(sessionStorage.getItem("nutshell_user") !== null)
      }
    
return (
  <>
  <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated}/>
  <ApplicationViews setAuthUser={setAuthUser}
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}/>
  </>
)}

//setIsAuthenticated being passed to children.... can still use it, just can't change it. 
