import {configureStore} from '@reduxjs/toolkit'
import taskSlice from './features/tasksSlice'


export const store = configureStore({
    reducer:{
        tasks: taskSlice
    }
})