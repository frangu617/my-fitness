import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function TodayWorkout() {
    const [user, setUser] = useState("Guest");

    useEffect(() => {
      const storedUserData = localStorage.getItem("userData");
      if (storedUserData) {
        const parsedUserData = JSON.parse(storedUserData);
        setUser(parsedUserData.name || "Guest");
      }
    }, []);
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    let wday = today.getDay();
    let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return (
      <>
        <div className="card">
            {user === "Guest" ? (
                <>
                <h2>Welcome to Today's Workout</h2>
                <p>To log a new workout, please <NavLink to="/sign-up"><button>Sign Up</button></NavLink></p>
                </> 
            ) : (
          <div className="newWorkout">
            <h2>Today's workout</h2>
            <h4>
              {week[wday]} - {mm}/{dd}/{yyyy}
            </h4>
            <NavLink to="/add-workout">
              <button> Add Workout</button>
            </NavLink>
          </div>
            )}
        </div>{" "}
      </>
    );
}