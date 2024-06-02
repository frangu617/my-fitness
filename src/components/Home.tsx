import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  const [user, setUser] = useState("Guest");

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUser(parsedUserData.name || "Guest");
    }
  }, []);

  return (
    <>
      <div className="card">
        <h2>Welcome to My Fitness</h2>
        {user === "Guest" ? (
          <>
            <p>
              My Fitness is a comprehensive application designed to assist you
              in achieving your fitness goals.
            </p>
            <p>
              To support your journey, this application meticulously tracks a
              range of your statistics and activities.
            </p>
            <p>
              Within My Fitness, you will find valuable tools to monitor your
              workouts and nutrition effectively.
            </p>
            <p>
              To maximize the benefits of this application, please{" "}
              <NavLink to="/signup">
                <button>Register</button>
              </NavLink>
              .
            </p>
          </>
        ) : (
          <>
            <p>
              Welcome, {user}! My Fitness is an application dedicated to help
              you reach your fitness goals.
            </p>
            <p>
              Are you looking to{" "}
              <NavLink to="/today-workout">
                <button>start a new workout</button>
              </NavLink>
              ?
            </p>
            <p>
              or maybe just{" "}
              <NavLink to="/user">
                <button>check your progress</button>
              </NavLink>
            </p>
          </>
        )}
      </div>
    </>
  );
}
