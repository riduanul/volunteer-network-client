import React, { useContext, useEffect, useState } from "react";
import "./Register.css";
import logo from "../../resource/logos/logo.png";
import { Link, useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../App";

const Register = () => {
  const [
    loggedInUser,
    setLoggedInUser,
    activityInfo,
    setActivityInfo,
  ] = useContext(UserContext);
  const [date, setDate] = useState(new Date());

  const { title } = useParams();
  const titleInfo = { title: title };
  useEffect(() => {
    fetch("https://pacific-badlands-82158.herokuapp.com/imgRegistration?title=" + title)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        loggedInUser.img = data.img;
      });
  }, []);
  console.log(loggedInUser);
  const history = useHistory();

  const handleRegistration = () => {
    const newRegistration = { ...loggedInUser, ...titleInfo };
    console.log(newRegistration);
    fetch("https://pacific-badlands-82158.herokuapp.com/addActivity", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRegistration),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    history.push("/registrationDetails");
  };

  return (
    <div>
      <div className="logo-img">
        <Link to="/">
          <img src={logo} alt="" width="200" />
        </Link>
      </div>
      <div className="registration">
        <h4>Register as a volunteer</h4>
        <br />
        <div>
          <input
            type="text"
            placeholder="Name"
            defaultValue={loggedInUser.name}
          />
          <br />
          <input
            type="text"
            placeholder="Email"
            defaultValue={loggedInUser.email}
          />
          <br />
          <input type="date" required />
          <br />
          <input type="text" placeholder="Description" required onblur={date} />
          <br />
          <input
            type="text"
            placeholder="Organize books at library"
            defaultValue={title}
          />
          <br />
          <button onClick={handleRegistration} className="btn btn-primary">
            Registration
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
