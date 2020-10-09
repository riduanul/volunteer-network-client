import React, { useContext, useEffect, useState } from "react";
import "./RegistrationDetails.css";
import logo from "../../resource/logos/logo.png";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const RegistrationDetails = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    fetch(
      "https://pacific-badlands-82158.herokuapp.com/registrationDetails?email=" + loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => {
        setDetail(data);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`https://pacific-badlands-82158.herokuapp.com/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          const newActivity = detail.filter((d) => d._id !== id);
          setDetail(newActivity);
        }
      });
  };

  return (
    <div className="containerr">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex ml-0 align-items-center nav-bar">
          <Link to="/">
            <img src={logo} alt="logo" width="200" />
          </Link>
          <div className="link">
            <Link to="/">Home</Link>
            <Link>Donation</Link>
            <Link>Events</Link>
            <Link>Blog</Link>
            <Link>
              <b>{loggedInUser.name}</b>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div className=" container">
          {detail.map((d) => (
            <div className=" d-flex row justify-content-between ">
              <div className=" d-flex  justify-content-between align-items-center activity">
                <div className="col-md-6 ml-0 pl-0">
                  <img src={d.img} alt="" width="200" height="200" />
                </div>
                <div className="col-md-6 ml-2 ">
                  <h5>
                   <b>{d.title}</b>
                  </h5>
                  <button
                    onClick={() => handleDelete(d._id)}
                    className="btn btn-primary mt-4"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegistrationDetails;
