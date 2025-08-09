import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    tasks:[{
        id:1,
        title:'task1',
        description:'des2',
        completed:false
    }]
}


const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers:{
        addTask: (state, action)  =>{
            const maxId = state.tasks.length > 0 ? Math.max(...state.tasks.map(task => task.id)) : 0;
            const newTask = {
                id: maxId + 1,
                title: action.payload.title,
                description: action.payload.description,
                completed: false
            }
            state.tasks.push(newTask)
        },
        completeTask: (state, action) => {
            state.tasks = state.tasks.map(task => task.id === action.payload.id ? {...task, completed: !task.completed} : task)
        },
        deleteTask: (state, action) =>{
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
        editTask: (state, action) =>{
            const {id, title, description} = action.payload
            const task = state.tasks.find(task => task.id === id)
            if(task){
                task.title = title
                task.description = description
            }
        }
    }
})

export const {addTask, completeTask, deleteTask, editTask} = tasksSlice.actions;
export default tasksSlice.reducer