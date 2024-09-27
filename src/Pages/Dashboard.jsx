import React from 'react'
import "./dashboard.css"
import SideBar from '../components/Home/SideBar'
import DashProps from '../components/Home/DashProps'

const Dashboard = () => {
  return (
    <div className='mainDiv'>

      <SideBar/>

        <div className="dashboard">
          <DashProps/>
        </div>
          
    </div>
  )
}

export default Dashboard
