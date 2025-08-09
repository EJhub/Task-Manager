import styles from '../styles/AddTask.module.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from './tasksSlice'

function AddTask({setModal}) {
    const [newTask, setNewTask] = useState({title:'', description:''})
    const dispatch = useDispatch()
    const handleCloseModal = (e) => {
        e.preventDefault();
        setNewTask({title: '', description: ''})
        setModal(false)
    }


  return (
    <div className={styles.modalOverlay}>
        <div className={styles.modal}>
            <div className={styles.modalHeader}>
                <h1>Add Task</h1>
            </div>
            <form className={styles.taskForm}
            onSubmit={(e) => {
                    e.preventDefault();
                    if (newTask.title.trim() !== "" && newTask.description.trim() !== "") {
                    dispatch(addTask({ title: newTask.title, description: newTask.description }));
                    setNewTask({ title: "", description: "" });
                    setModal(false);
                    }
                }}>
                <div className={styles.formGroup}>
                <label htmlFor="title">Task Title:</label>
                <input 
                type='text' 
                name='title' 
                id='title'
                value={newTask.title}
                required
                onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                placeholder='Enter Task Title'
                className={styles.editInput}
                />
                </div>
                <div>
                <label htmlFor="description">Description:</label><br></br>
                <textarea
                id='description'
                name='description'
                placeholder='Enter Description'
                value={newTask.description}
                required
                onChange={(e) => setNewTask({...newTask, description: e.target.value})}
                className={styles.editTextarea}
                rows="4"
                />
                </div>
                <div className={styles.formButtons}>
                <button className={styles.Buttons} type='submit'>Add Task</button>
                <button className={styles.Buttons}type='button'onClick={handleCloseModal}>Cancel</button>
            </div>
            </form>

        </div>
    </div>
  )
}

export default AddTask