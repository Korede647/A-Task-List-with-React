import React, { useEffect } from "react";
import SideBar from "../components/Home/SideBar";
import "./list.css";
import axios from "axios";
import { GET_URL } from "../components/Api_url";
import { useState } from "react";
import { Link } from "react-router-dom";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const myToken = localStorage.getItem("Token");

  //   const navigate = useNavigate()

  // const handleUpdate = () => {
  // "./UpdateTask:id"
  // }

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(GET_URL, {
        headers: { Authorization: `Bearer ${myToken}` },
      });
      if (response.data.status === "success") { 
        setTasks(response.data.data);
      } else {
        console.log(response.data.message);
        <p>Error Retrieving Tasks</p>
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="tasksDiv">
        <SideBar />
        <div className="listDiv">
          {/* <div className="title"></div>
            <div className="category"></div>
            <div className="description"></div>
            <div className="status"></div>
            <div className="date">
                <div className="start"></div>
                <div className="end"></div>
            </div> */}
          {tasks.length > 0 ? (
            <table id="myTable">
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                </tr>
              </thead>
              <tbody id="tableBody">
                {tasks.map((task) => (
                  <tr key={task._id} className="taskRow">
                    <td>{task.head}</td>
                    <td>{task.category}</td>
                    <td>{task.item}</td>
                    <td>{task.status}</td>
                    <td>{task.startDate}</td>
                    <td>{task.endDate}</td>
                    <td>
                      <button
                        className="btnStuff"
                        style={{
                          backgroundColor: "#e81cff2c",
                          border: "none",
                        }}
                      >
                        <Link
                          to={`/dashboard/UpdateTask/${task._id}`}
                          style={{
                            textDecoration: "none",
                            // color: "#414141",
                            color: "whitesmoke",
                            fontSize: "16px",
                            
                          }}
                        >
                          Update Task
                        </Link>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h4
              style={{
                textAlign: "center",
              }}
            >
              No Tasks Added
            </h4>
          )}
        
        </div>
      </div>
    </>
  );
};

export default TaskList;
