import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RegistrationDetails from "./components/RegistrationDetails/RegistrationDetails";
import Admin from "./components/Admin/Admin";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({ email: "" });
  const [activityInfo, setActivityInfo] = useState([]);
  return (
    <UserContext.Provider
      value={[loggedInUser, setLoggedInUser, activityInfo, setActivityInfo]}
    >
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/register/:title">
            <Register />
          </PrivateRoute>
          <Route path="/registrationDetails">
            <RegistrationDetails />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
