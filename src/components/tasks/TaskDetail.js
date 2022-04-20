import React, { useState, useEffect } from "react";
import { getTaskById, deleteTask } from "../../modules/TaskManager";
import { useParams, useNavigate } from "react-router-dom"
import { epochDateConverter } from "../util/epochDateConverter";
import "./TaskDetail.css";

export const TaskDetail = () => {
  const [task, setTask] = useState({name: '', detail:'',userId:'', deadline: '', isCompleted:'', completeDate:'', date: ''});
  const [isLoading, setIsLoading] = useState(true);

  const formattedDate = task?.date && epochDateConverter(task.date, 'MM/dd/yyy')
  const formattedDeadline = task?.deadline && epochDateConverter(task.deadline, 'MM/dd/yyy')
  const formattedCompleteDate = task?.completeDate && epochDateConverter(task.completeDate, 'MM/dd/yyy')

  const {taskId} = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    setIsLoading(true);
    deleteTask(taskId).then(() =>
      navigate("/tasks")
    );
  };

  useEffect(() => {
    getTaskById(taskId)
      .then(task=>{
        setTask(task)
      })
     
  }, [taskId]);
  return (
    <div className="detailsContainer">
    <section className="task">
      <h2>{task.name}</h2>
      <div className="task__date"><span className="detailsLabel">Date:</span> {formattedDate}</div>
      <div className="task__deadline"><span className="detailsLabel">Deadline: </span>{formattedDeadline}</div>
      <div className="task__isCompleted"><span className="detailsLabel">Completed: </span> {task.isCompleted=== false ? "Not Completed" : "Completed"}</div>
      <div className="task__completeDate"><span className="detailsLabel">Complete Date: </span> {task.completeDate === 0 ? "Not Completed" : formattedCompleteDate}</div>
      <div className="task__detail"><span className="detailsLabel">Details: </span> {task.detail}</div><br />
      <div className="detailsContainer">
      <button type="button" className="ad__button" onClick={()=>navigate(`/tasks/${task.id}/edit`)}>
      Edit
      </button>
      <button type="button"  onClick={()=>handleDelete(task.id)}>
      Delete
      </button>
      </div>
    </section>
    </div>
  );
};