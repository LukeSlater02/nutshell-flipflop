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
    <section className="task">
      <h3 className="task__name">{task.name}</h3>
      <div className="task__date">Date: {formattedDate}</div>
      <div className="task__deadline">Deadline: {formattedDeadline}</div>
      <div className="task__isCompleted">Completed: {task.isCompleted=== false ? "Not Completed" : task.isCompleted}</div>
      <div className="task__completeDate">Complete Date: {task.completeDate === 0 ? "Not Completed" : task.completeDate}</div>
      <div className="task__detail">Details: {task.detail}</div><br />
      <button type="button" className="ad__button" onClick={()=>navigate(`/tasks/${task.id}/edit`)}>
      Edit
      </button>
      <button type="button"  onClick={()=>handleDelete(task.id)}>
      Delete
      </button>
    </section>
  );
};