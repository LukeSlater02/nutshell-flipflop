import React, { useEffect, useState } from "react";
import "./TaskList.css"
import { getAllTasks } from "../../modules/TaskManager";
import { useNavigate } from "react-router-dom";

// GROUP: display a list of all the tasks from the database

/*
      "id": 1,
      "name": "style tasks",
      "userId": 3,
      "deadline": "2021-07-21",
      "isCompleted": false,
      "completeDate": 0
*/ 

export const TaskList = () => {
    const [tasks, setTasks] = useState([])
    
    const navigate = useNavigate();


  

    useEffect(() => {
        getAllTasks().then(setTasks)
    },[])

    return(
        <>
            <div className ="content__list">
                <h2 className="list__header">Tasks</h2>
                <div className="list__fields">
                    <span className="list__field">Task</span> 
                    <span className="list__field">Deadline</span> 
                    <span className="list__field">Completion</span>
                </div>
                <div className="list__content">
                    {tasks.map(t => (
                         
                        <span key={t.id}>
                            <span className="list__item__name">{t.name}</span>
                            <span className="list__item__date">{t.date}</span> 
                            <span className="list__item">{t.isCompleted ? 'Yes' : 'No'}</span>

                            <button type="button"
                            className="ad__button"
                            onClick={()=>navigate(`/tasks/${t.id}/edit`)}>
                                Edit Task
                            </button>
                            </span>
                        
                    ))}
                </div>
            </div>
            
            <button type="button"
            className="add__button"
            onClick={() => {navigate("/tasks/create")}}>
                Create New Task
            </button>

        </>
    )
}