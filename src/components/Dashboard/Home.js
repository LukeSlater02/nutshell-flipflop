import React, { useState, useEffect } from "react";
import { TaskDashCard } from "../tasks/TaskDashCard";
import { useNavigate } from "react-router-dom";
import { EventDashCard } from "../events/EventDashCard";


export const Home = () => {
  return(  
  
  <>
  <TaskDashCard />
  <EventDashCard />
  </>
  )
}
Home();