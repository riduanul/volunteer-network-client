import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../resource/logos/logo.png";

const Header = () => {
  return (
    <div className="header header-img">
      <div className="container">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="d-flex ml-0 align-items-center nav-bar">
            <img src={logo} alt="logo" width="200" />

            <div className=" nav-bar">
              <Link to="/">Home</Link>
              <Link to="/donation">Donation</Link>
              <Link to="/Events">Events</Link>
              <Link to="/Blog">Blog</Link>
              <Link to="/register">
                <button className="btn btn-primary">Register</button>
              </Link>
              <Link to="/admin">
                
                <button className="btn btn-dark b">Admin</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="search-btn">
          <h1>I GROW BY HELPING PEOPLE IN NEED</h1>
          <input
            className="search-field"
            type="serch"
            placeholder="Search...."
          />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
