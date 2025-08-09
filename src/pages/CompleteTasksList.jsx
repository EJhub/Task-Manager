import React from 'react'
import styles from "../styles/TaskList.module.css";
import NavBar from "../components/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { completeTask, deleteTask } from "../features/tasksSlice";

function CompleteTasksList() {
  const tasks = useSelector(state => state.tasks.tasks)
  const dispatch = useDispatch()
  const completed = tasks.filter(task => task.completed === true)

   const handleComplete = (task) =>{
          dispatch(completeTask(task))
    }
  
      const handleDelete = (taskID) =>{
          dispatch(deleteTask(taskID))
    }
  return (
    <>
     <NavBar/>
        <main className={styles.TaskContainer}>
            
            <h1 className={styles.TaskHeaderr} >Task List</h1>
            <ul className={styles.Tasks}>
            {completed.map(task =>  <li className={styles.TaskLists} key={task.id}>            
                    <h1 className={styles.title}>{task.title}</h1>
                    <p className={styles.description}>{task.description}</p>
                    <h4 style={{color: task.completed ? 'green': 'orange'}}>{task.completed ? 'Complete' : 'Pending'}</h4>
                    <div className={styles.buttonContainer}>
                    <button className={styles.button} onClick={() => handleComplete(task)}>Mark Complete</button>
                    <button className={styles.button} onClick={() => handleDelete(task.id)}>Delete</button>
                    </div>
                </li>
            )}
            </ul>
        </main>

    </>
  )
}

export default CompleteTasksList