import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from './Pages/SignUp'
import LogIn from './Pages/LogIn'
import NotFound from './Pages/NotFound'
import Dashboard from './Pages/Dashboard'
import Task from './Pages/Task'
import TaskList from './Pages/TaskList'
import UpdateTask from './Pages/UpdateTask'


const AppRouter = () => {
  return (
    <>
  
  <Router>
    <Routes>
        <Route path='/' element= {<SignUp/>}/>
        <Route path='/login' element= {<LogIn/>} />
        <Route path='*' element={<NotFound/>} />


        <Route path='/dashboard'>
          <Route index element={<Dashboard/>}/>
          <Route path='task' element={<Task/>}/>
          <Route path='taskList' element={<TaskList/>} />
          <Route path='UpdateTask/:id' element={<UpdateTask/>} />
        </Route>
        
    </Routes>
  </Router>
      
    </>
  )
}

export default AppRouter
