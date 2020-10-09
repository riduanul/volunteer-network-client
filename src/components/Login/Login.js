import React, { useContext, useState } from "react";
import "./login.css";
import logo from "../../resource/logos/logo.png";
import googleLogo from "../../resource/logos/google.png";

import { UserContext } from "../../App";
import { Link, useHistory, useLocation } from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleLogin = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        var token = result.credential.accessToken;
        var user = result.user;
        var { displayName, email } = user;
        var loginInfo = { name: displayName, email: email };
        setLoggedInUser(loginInfo);
        history.replace(from);
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        var email = error.email;
        var credential = error.credential;
      });
  };

  return (
    <div>
      <div className="logo-login">
        <Link to="/">
          <img src={logo} alt="logo" width="300" />
        </Link>
      </div>
      <div className="login">
        <h4>Login with</h4>
        <div>
          <button onClick={handleGoogleLogin} className="login-btn">
            <span>
              <img src={googleLogo} alt="img" width="18" />
            </span>{" "}
            Login with google
          </button>{" "}
          <br />
          <small>
            {" "}
            Don't have any account? <Link to="/register">
              Create account
            </Link>{" "}
          </small>
        </div>
      </div>
    </div>
  );
};

export default Login;
