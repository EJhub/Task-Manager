import { useState } from "react";
import NavBar from "../components/NavBar";
import styles from "../styles/TaskList.module.css";
import AddTask from "../features/AddTask";
import { useSelector, useDispatch } from "react-redux";
import { completeTask, editTask, deleteTask } from "../features/tasksSlice";


function TaskList() {
    const tasks = useSelector(state => state.tasks.tasks)
    const [editId, setEditId] = useState(null)
    const [editForm, setEditForm] = useState({title: '', description: ''})
    const dispatch = useDispatch()
    
    const pending = tasks.filter(task => task.completed === false)
    const handleEdit = (task) =>{
        setEditId(task.id)
        setEditForm({title: task.title, description: task.description})
    }
    const [modal, setModal] = useState(false)

    const handleOpenModal = () =>{
        setModal(true)
    }

    const handleComplete = (task) =>{
        dispatch(completeTask(task))
    }

    const handleDelete = (taskID) =>{
        dispatch(deleteTask(taskID))
    }

    const handleUpdate = (taskID) =>{
        dispatch(editTask({id: taskID, title: editForm.title, description: editForm.description}))
        setEditId(null)
        setEditForm({title: '', description: ''})
    }
    const handleCloseEdit = () =>{
        setEditId(null)
        setEditForm({title: '', description: ''})
    }
  return (
    <>
     <NavBar/>
        <main className={styles.TaskContainer}>
            
            <h1 className={styles.TaskHeaderr} >Task List</h1>
            <button className={styles.Add} onClick={handleOpenModal}>Add Task</button>

            {pending.length === 0 ? (<div className={styles.noTasks}>
                        <p>No pending tasks! Great job!</p>
                    </div>): (<ul className={styles.Tasks}>
            {pending.map(task =>  <li className={styles.TaskLists} key={task.id}>
                            {editId === task.id ? (
                                <div className={styles.editContainer}>
                                    <label htmlFor="title">Task Title:</label>
                    <input 
                        id='title' 
                        name='title' 
                        placeholder="Title" 
                        value={editForm.title} 
                        onChange={(e) => setEditForm({...editForm, title: e.target.value})}
                        className={styles.editInput}
                    />
                    <label htmlFor="description">Description:</label>
                    <textarea 
                        id="description" 
                        name="description" 
                        placeholder="Description" 
                        value={editForm.description} 
                        onChange={(e) => setEditForm({...editForm, description: e.target.value})}
                        className={styles.editTextarea}
                    />
                    <div className={styles.editButtonContainer}>
                        <button 
                            className={`${styles.editButton} ${styles.updateButton}`} 
                            onClick={() => handleUpdate(task.id)}
                        >
                            Update
                        </button> 
                        <button 
                            className={`${styles.editButton} ${styles.cancelButton}`} 
                            onClick={handleCloseEdit}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
                            ):(
                  <>
                    <h1 className={styles.title}>{task.title}</h1>
                    <p className={styles.description}>{task.description}</p>
                    <h4 style={{color: task.completed ? 'green': 'orange'}}>{task.completed ? 'Complete' : 'Pending'}</h4>
                    <div className={styles.buttonContainer}>
                    <button className={styles.button} onClick={() => handleComplete(task)}>Mark Complete</button>
                    <button className={styles.button} onClick={() => handleEdit(task)}>Edit</button>
                    <button className={styles.button} onClick={() => handleDelete(task.id)}>Delete</button>
                    </div>
                 </>
                )}
                </li>
            )}
            </ul>)}
            
        </main>

        {modal && (
            <AddTask
            setModal={setModal}
            />
        )}
    </>
  )
}

export default TaskList