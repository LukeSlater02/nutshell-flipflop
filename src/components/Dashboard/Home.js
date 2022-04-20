import React, { useState, useEffect } from "react";
import { TaskDashCard } from "../tasks/TaskDashCard";
import { EventDashCard } from "../events/EventDashCard";
import { FavoritedArticles } from "../articles/FavoritedArticles";
import "./Home.css"

const greetUser = () => {
  if (sessionStorage.getItem('nutshell_user_name') != undefined || null){
    let userName = JSON.parse(sessionStorage.getItem('nutshell_user_name'))
    return <p className="welcome">Welcome, {userName??''}</p>
  }
}

export const Home = () => {
  return(  
  <>
  {greetUser()}
  <div className="dash">
  <FavoritedArticles />
  <TaskDashCard />
  <EventDashCard />


  </div>
  </>
  )
}
Home();