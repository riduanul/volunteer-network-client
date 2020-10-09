import React, { useContext, useEffect } from "react";
import { UserContext } from "../../App";
import Header from "../Header/Header";
import Activities from "../Activities/Activities";

const Home = () => {
  const [
    loggedInUser,
    setLoggedInUser,
    activityInfo,
    setActivityInfo,
  ] = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((res) => res.json())
      .then((data) => setActivityInfo(data));
  }, []);

  return (
    <div>
      <div>
        <Header />
      </div>

      <div>
        {activityInfo.map((activity) => (
          <Activities key={activity.id} activities={activity}></Activities>
        ))}
      </div>
    </div>
  );
};

export default Home;
