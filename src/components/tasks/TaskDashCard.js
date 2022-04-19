import React, { useEffect, useState } from 'react';
import "../Dashboard/Home.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark} from '@fortawesome/free-solid-svg-icons'
import { getAllTasks } from '../../modules/TaskManager';


export const TaskDashCard = () => {
  let today= new Date().getTime()/1000;
  
  
  const[tasks, setTasks] = useState([])
  const {taskId} = useParams();


  useEffect(() => {
  getAllTasks().then(setTasks)
 
},[])


  return (

    <>
      <div className="dash__content">
      <h2 className="dash__header">Upcoming Tasks</h2>
      {tasks.filter(task=>task.deadline > today).map(t =>( 

        <div className='card-dash-content' key={t.id}>

      <Link className="card-dash-link" to={`/tasks/${t.id}` }>
       
        <span className="card-dash-name">{t.name}</span>
       
        <span className='card-dash-status'>{t.isCompleted === false || 0 ? <span className='x'><FontAwesomeIcon icon={faXmark} /></span>: <span className='check'><FontAwesomeIcon icon={faCheck} /></span>}</span>
    
      </Link>
      </div>
      ))}
      </div>
  </>
  );
}