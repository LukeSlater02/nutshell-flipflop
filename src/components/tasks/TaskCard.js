import React, {useState} from 'react';
import "./TaskCard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark} from '@fortawesome/free-solid-svg-icons'
import { epochDateConverter } from '../util/epochDateConverter';
import { format } from 'date-fns';
import { updateTask } from '../../modules/TaskManager';


export const TaskCard = ({ task, handleDeleteTask }) => {

  const [ tasks, setTask ] = useState(false)

  const formattedDate = task?.deadline && epochDateConverter(task.deadline, 'eee. MMM do')

  const handleCompletionChange = (task) => {
    task.isCompleted === true ? task.isCompleted = false : task.isCompleted = true ;
    if(task.completeDate === 0){
      task.completeDate = new Date().getTime()/1000
    }
    if(task.isCompleted === false && task.completeDate == 1){
      task.completeDate = 0
    }
    updateTask(task)
    .then(task.isCompleted === false ? setTask(true) : setTask(false))
  }


  return (
        <div className='card-content'>

      <Link className="card-link" to={`/tasks/${task.id}` }>
       
        <span className="card-name">
          {task.name}
        </span>
        <span className='card-date'>{formattedDate}</span>
    
      </Link>
        {task.isCompleted ? <button onClick={()=> handleCompletionChange(task)} className='card-status-done'><FontAwesomeIcon icon={faCheck} /></button> :
        <button onClick={()=> handleCompletionChange(task)} className='card-status-not-done'><FontAwesomeIcon icon={faCheck} /></button>}

        </div>
   
  );
}
