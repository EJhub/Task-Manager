import {Routes, Route, Link} from 'react-router-dom'
import TaskList from './pages/TaskList'
import CompleteTasksList from './pages/CompleteTasksList'

function App() {

  return (
    <Routes>
      <Route path='/' element={<TaskList/>}/>
      <Route path='/complete' element={<CompleteTasksList/>}/>
    </Routes>

  )
}

export default App
