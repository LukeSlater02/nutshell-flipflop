import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addTasks, getAllTasks } from "../../modules/TaskManager";
import "./TaskForm.css"

/*
      "id": 1,
      "name": "style tasks",
      "userId": 3,
      "date": "2021-07-21",
      "isCompleted": false,
      "completeDate": 0
*/ 


export const TaskForm = () => {

    const [task, setTask] = useState({
        name: "",
        date:"",
        isCompleted:false
    })

    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate();

    const handleControlledInputChange = (t) => {
        const newTask = {...task}
        let selectedVal = t.target.value;
   

        newTask[t.target.id] = selectedVal;
        setTask(newTask);
    }

    const handleClickSaveEvent = (t) => {
        t.preventDefault();

        if(task.name !== "" && task.date !== "" && task.isCompleted !== "") {
            setIsLoading(true);
            addTasks(task)
            .then(() => navigate('/tasks'))
        } else {
                window.alert("Complete Each Field")
        }
    }

    return(
        
            <form className ="task__form">
                <h2 className ="task__header">Create New Task</h2>

                <fieldset className="task__fields">
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" onChange={handleControlledInputChange} required className="form-control" placeholder="task name" value={task.name}/>
                    </div>
                </fieldset>

                <fieldset className="task__fields">
                    <div>
                        <label htmlFor="date"></label>
                        <input type="date" id="date" onChange={handleControlledInputChange}required className="form-control" placeholder="task date" value={task.date}/>
                    </div>
                </fieldset>

             

                <button 
				    type="submit" 
				    className="submit__event__button"
				    disabled={isLoading}
				    onClick={handleClickSaveEvent}>
				    Save Task
                </button>
            </form>
        
 
    )
}