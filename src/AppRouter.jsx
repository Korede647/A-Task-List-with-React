import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from './Pages/SignUp'
import LogIn from './Pages/LogIn'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import Dashboard from './components/Home/Dashboard'
import Task from './components/Home/Task'
import HomePage from './components/Home/HomePage'


const AppRouter = () => {
  return (
    <>
  
  <Router>
    <Routes>
        <Route path='/' element= {<SignUp/>}/>
        <Route path='/login' element= {<LogIn/>} />
        <Route path='/home'>
        <Route path='/home' element= {<Home/>} />
          <Route path='/home/dashboard' element={<Dashboard/>}/>
          <Route path='/home/task' element={<Task/>}/>
        </Route>
        <Route path='*' element={<NotFound/>} />
    </Routes>
  </Router>
      
    </>
  )
}

export default AppRouter
