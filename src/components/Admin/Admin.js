import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Admin.css";
import logo from "../../resource/logos/logo.png";
import trash from "../../resource/logos/trash-2 9.png";

const Admin = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch("https://pacific-badlands-82158.herokuapp.com//activityData")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`https://pacific-badlands-82158.herokuapp.com//delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          const newActivity = activities.filter(
            (activity) => activity._id !== id
          );
          setActivities(newActivity);
        }
      });
  };

  return (
    <div>
      <div className="con-md-12">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex ml-0 align-items-center nav-bar">
            <Link to="/">
              <img src={logo} alt="logo" width="200" />
            </Link>
            <div className="linkalign-items-right ml-3 mt-4">
              <h5>
                <b>Volunteer Register List</b>{" "}
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2 ml-5 mt-5">
          <a href="list">Volunteer Register List</a> <br />
          <a href="list">Add Event</a>
        </div>
        <div className="bg-color">
          <div className="col-md-10 table-style">
            <table>
              <th>
                <td>Name</td>
                <td>Email Id</td>
                <td>Registration Date</td>
                <td>Volunteer list</td>
                <td>Action</td>
              </th>

              {activities.map((activity) => (
                <tr>
                  <td>{activity.name}</td>
                  <td>{activity.email}</td>
                  <td>{activity.date}</td>
                  <td>{activity.title}</td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(activity._id)}
                  >
                    <img
                      style={{ color: "red" }}
                      src={trash}
                      alt="trash"
                      width="10"
                    />
                  </button>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
