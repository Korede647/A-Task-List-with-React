import React from 'react'
import { Outlet } from 'react-router-dom'
import HomePage from '../components/Home/HomePage'
import Dashboard from '../components/Home/Dashboard'
import Task from '../components/Home/Task'
import NotFound from './NotFound'
import "../components/Home/home.css"

const Home = () => {
  return (
    <>
    <div className="diva">
    <HomePage/>

    <Outlet/>

    <Task/>
    </div>
      
    </>
  )
}

export default Home
