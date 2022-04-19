import React, { useState, useEffect } from "react";
import { TaskDashCard } from "../tasks/TaskDashCard";
import { useNavigate } from "react-router-dom";
import { EventDashCard } from "../events/EventDashCard";
import { FavoritedArticles } from "../articles/FavoritedArticles";


export const Home = () => {
  return(  
  
  <>
  <FavoritedArticles />
  <TaskDashCard />
  <EventDashCard />

  </>
  )
}
Home();