import React, { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import { updateTask, getTaskById } from "../../modules/TaskManager"
import "./TaskEditForm.css"


export const TaskEditForm = () => {
    const [task, setTask] = useState({ name: "", date: "", deadline:"", isCompleted:"", completeDate:"", detail:"",});
    const [isLoading, setIsLoading] = useState(false);
  
    const {taskId} = useParams();
    const navigate = useNavigate();
  
    const handleFieldChange = t => {
      const stateToChange = { ...task };
      stateToChange[t.target.id] = t.target.value;
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
                        <input type="date" id="date" onChange={handleFieldChange} required className="form-control" placeholder="task date" value={task.date}/>
                    </div>
                </fieldset>

                <fieldset className="task__edit__fields">
                    <div>
                        <label htmlFor="deadline">Deadline:</label>
                        <input type="date" id="date" onChange={handleFieldChange} required className="form-control " placeholder="task deadline" value={task.deadline}/>
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
                        <input type="date" id="completeDate" onChange={handleFieldChange} required className="form-control" placeholder="task completeDate" value={task.completeDate}/>
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