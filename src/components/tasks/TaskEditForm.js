import React, { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import { updateTask, getTaskById } from "../../modules/TaskManager"
import { epochDateConverter } from "../util/epochDateConverter";
import "./TaskEditForm.css"


export const TaskEditForm = () => {
    const [task, setTask] = useState({ name: "", date: "", deadline:"", isCompleted:false, completeDate:"", detail:"",});
    const [isLoading, setIsLoading] = useState(false);
    console.log(task.date)
    const {taskId} = useParams();
    const navigate = useNavigate();
    const formattedDeadline = task?.deadline ? epochDateConverter(task?.deadline, 'yyy-MM-dd') : ''
    const formattedDate = task?.date ? epochDateConverter(task?.date, 'yyy-MM-dd') : ''
    const formattedCompleteDate = task?.completeDate ? epochDateConverter(task?.completeDate, 'yyy-MM-dd'):''
    const handleFieldChange = t => {
        const isDate = t.target.id === 'date' || 'deadline' || 'completeDate'
        let epochDate = ''
          if(isDate){
             epochDate = new Date(t.target.value).getTime()/ 1000
       
  
         }
      const stateToChange = { ...task };
      stateToChange[t.target.id] =  isDate? epochDate : t.target.value;
      setTask(stateToChange);
    };
  
    const updateExistingTask = t => {
        // t.preventDefault()
        setIsLoading(true);

        const editedTask = {
            id: taskId,
            name: task.name,
            date: task.date,
            deadline: task.deadline,
            detail: task.detail,
            isCompleted: task.isCompleted,
            completeDate: task.completeDate
            
          };

          updateTask(editedTask)
    .then(() => navigate("/tasks")
    )
  }

  useEffect(() => {
    getTaskById(taskId)
      .then(task => {
        setTask(task);
        setIsLoading(false);
      });
  }, []);

  return(
    <>
            <form className="task__edit__form">
                <h2 className="task__edit__header">Edit Task</h2>

                <fieldset className="task__edit__fields">
                    <div>
                        <label htmlFor="date">Date:</label>
                        <input type="date" id="date" onChange={handleFieldChange} required className="form-control" placeholder="task date" value={formattedDate}/>
                    </div>
                </fieldset>

                <fieldset className="task__edit__fields">
                    <div>
                        <label htmlFor="deadline">Deadline:</label>
                        <input type="date" id="deadline" onChange={handleFieldChange} required className="form-control " placeholder="task deadline" value={formattedDeadline}/>
                    </div>
                </fieldset>

                <fieldset className="task__edit__fields">
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" onChange={handleFieldChange} required className="form-control name" placeholder="task name" value={task.name}/>
                    </div>
                </fieldset>
                <fieldset className="task__edit__fields">
                    <div>
                        <label htmlFor="detail">Details:</label>
                        <input type="text" id="detail" onChange={handleFieldChange} required className="form-control name" placeholder="task detail" value={task.detail}/>
                    </div>
                </fieldset>
                <fieldset className="task__edit__fields">
                    <div>
                        <label htmlFor="isCompleted">Completed?:</label>
                        <input type="text" id="isCompleted" onChange={handleFieldChange} required className="form-control name" placeholder="task isCompleted" value={task.isCompleted}/>
                    </div>
                </fieldset>

                <fieldset className="task__edit__fields">
                    <div>
                        <label htmlFor="completeDate">Completion Date:</label>
                        <input type="date" id="completeDate" onChange={handleFieldChange} required className="form-control" placeholder="task completeDate" value={formattedCompleteDate}/>
                    </div>
                </fieldset>

                <button 
				    type="button" 
				    className="submit__task__button"
				    disabled={isLoading}
				    onClick={updateExistingTask}>
				    Save Task
                </button>

                <button 
				    type="button" 
				    className="cancel__task__button"
				    disabled={isLoading}
				    onClick={()=>navigate("/tasks")}>
				    Cancel
                </button>

            </form>
        </>
  )
}