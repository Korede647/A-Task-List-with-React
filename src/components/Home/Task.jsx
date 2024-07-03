import React, { useState } from 'react'
import "./task.css"
import { TASK_URL } from '../Api_url';
import axios from 'axios'; 

const Task = () => {

      const [head, setHead] = useState("");
      const [category, setCategory] = useState("");
      const [item, setItem] = useState("");
      const [startDate, setStartDate] = useState("");
      const [endDate, setEndDate] = useState("");
      const [status, setStatus] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault()
        const myToken = localStorage.getItem("Token")

        try{
            const response = await axios.post(TASK_URL, {
                  head,
                  category,
                  item,
                  startDate,
                  endDate,
                  status
            }, {
                headers: {Authorization: `Bearer ${myToken}`}
            })
            console.log(response.data);
        }catch(error){
            console.log(error.response.data.data);
        }
    }

  return (
    <>
      <div className="taskdiv">

        <form className='formdiv' onSubmit={handleSubmit}>
            <div className="flexme">
                 
            <div className="forminputs1">
             <label htmlFor="">Title</label>
             <input 
             type="text" 
             placeholder='Name Of Task'
             value={head}
             onChange={(e) => setHead(e.target.value)}
             />
             </div>
             <div className="forminputs1">
             <label htmlFor="">Category</label>
             <select 
             value={category} 
             onChange={(e) => setCategory(e.target.value)} 
             >
                <option value="category">Category Of Task </option>
                <option value="Important">Important</option>
                <option value="Crucial">Crucial</option>
             </select>
             </div>

            </div>

             <div className="forminputs">
             <label htmlFor="">Description</label>
             <textarea 
             type="text" 
             placeholder='Description Of Task' 
             value={item}
             onChange={(e) => setItem(e.target.value)}
             />
             </div>
             <div className="forminputs">
             <label htmlFor="">Status</label>
            <select value={status}
            onChange={(e) => setStatus(e.target.value)}
            >
                <option value="status">Set Task Status</option>
                <option value="Incomplete">Incomplete</option>
            </select>
             </div>
             <div className="flexme">
             <div className="forminputs1">
             <label htmlFor="">Start Date</label>
             <input 
             type="date" 
             value={startDate}
             onChange={(e) => setStartDate(e.target.value)} />
             </div>
             <div className="forminputs1">
             <label htmlFor="">End Date</label>
             <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)} 
              />
             </div>
             </div>

             <button className='submitButton' type='submit'>Submit</button>
        </form>

      </div>
    </>
  )
}

export default Task
