import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import SideBar from "../components/Home/SideBar";
import "./update.css";
import { UPDATE_URL } from "../components/Api_url";
import { Link } from "react-router-dom";

const UpdateTask = () => {
  const [head, setHead] = useState("");
  const [category, setCategory] = useState("");
  const [item, setItem] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const { id } = useParams();
  const myToken = localStorage.getItem("Token");
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${UPDATE_URL}/${id}`, {
          head,
          item,
          category,
          startDate,
          endDate,
        }, {
          headers: {
            Authorization: `Bearer ${myToken}`}
        })
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data.data);
    }
  };
  return (
    <>
      <div className="updatesDiv">
        <SideBar />
        <div className="update">
          <form
            className="formdiv"
            onSubmit={handleUpdate}
          >
            <h2>Update Task</h2>
            <div className="flexme">
              <div className="forminputs1">
                <label htmlFor="">Title</label>
                <input
                  type="text"
                  placeholder="Name Of Task"
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
                placeholder="Description Of Task"
                value={item}
                onChange={(e) => setItem(e.target.value)}
              />
            </div>

            <div className="flexme">
              <div className="forminputs1">
                <label htmlFor="">Start Date</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
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

            <Link to="/dashboard/taskList">
              {" "}
              <button className="submitButton" type="submit">
                Submit
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateTask;
