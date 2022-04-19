import React, { useState, useEffect } from "react";
import { TaskDashCard } from "../tasks/TaskDashCard";
import { useNavigate } from "react-router-dom";
import { EventDashCard } from "../events/EventDashCard";
import { FavoritedArticles } from "../articles/FavoritedArticles";
import "./Home.css"

let userName = JSON.parse(sessionStorage.getItem('nutshell_user_name'))


export const Home = () => {
  return(  
  <><p className="welcome">Welcome, {userName??''}</p>
  <div className="dash">
  <FavoritedArticles />
  <TaskDashCard />
  <EventDashCard />

  </div>
  </>
  )
}
Home();