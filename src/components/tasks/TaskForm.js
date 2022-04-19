import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import { addTask } from "../../modules/TaskManager";
import "./TaskForm.css"
import { epochDateConverter } from "../util/epochDateConverter";

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
        id: '',
        name: '',
        date: new Date().getTime()/1000,
        deadline: '',
        detail: '',
        isCompleted: false ,
        completeDate: 0
    })


    const [isLoading, setIsLoading] = useState(false)

  const formattedDate = task?.deadline ? epochDateConverter(task.deadline, 'yyyy-MM-dd') : 'ss'
  
    const navigate = useNavigate();
    const handleControlledInputChange = (t) => {
        const isDate = t.target.id === 'deadline'
      let epochDate = ''
        if(t.target.id === 'deadline'){
           epochDate = new Date(t.target.value).getTime()/ 1000
     

       }
       console.log(t.target.value)
        const newTask = {...task}
        let selectedVal = isDate? epochDate : t.target.value;
   

        newTask[t.target.id] = selectedVal;
        setTask(newTask);
    }

    const handleClickSaveEvent = (t) => {
        t.preventDefault();

        if(task.name !== "" && task.date !== "" && task.isCompleted !== "" && task.deadline) {
            setIsLoading(true);
            console.log('payload:',task)
            addTask(task)
            .then(() => navigate('/tasks'))
        } else {
                window.alert("Complete Each Field")
        }
    }
    return(
        
            <form className ="task__form">
                <h2 className ="task__header">Create New Task</h2>

                {/* <fieldset className="task__fields">
                    <div>
                        <label htmlFor="date">Date:</label>
                        <input type="date" id="date" onChange={handleControlledInputChange} required className="form-control" placeholder="task date" value={task.date}/>
                    </div>
                </fieldset> */}

                <fieldset className="task__fields">
                    <div>
                        <label htmlFor="deadline">Deadline:</label>
                        <input type="date" id="deadline" onChange={handleControlledInputChange} required className="form-control deadline " placeholder="task deadline" value={formattedDate}/>
                    </div>
                </fieldset>

                <fieldset className="task__fields">
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" onChange={handleControlledInputChange} required className="form-control name" placeholder="task name" value={task.name}/>
                    </div>
                </fieldset>
                <fieldset className="task__fields">
                    <div>
                        <label htmlFor="detail">Details:</label>
                        <input type="text" id="detail" onChange={handleControlledInputChange} required className="form-control detail" placeholder="task detail" value={task.detail}/>
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