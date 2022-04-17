import React from 'react';
import "./TaskCard.css";
import { Link } from "react-router-dom";


export const TaskCard = ({ task, handleDeleteTask }) => {
  return (
        <div className='card-content'>

      <Link className="card-link" to={`/tasks/${task.id}`}>
       
        <span className="card-name">
          {task.name}
        </span>
        <span className='card-date'>{task.date}</span>
        <span className='card-status'>{task.isComplete? 'Yes': 'No'}</span>
    
      </Link>

        </div>
   
  );
}
