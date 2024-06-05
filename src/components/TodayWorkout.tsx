import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function TodayWorkout() {
  const [user, setUser] = useState("Guest");
  const [cardio, setCardio] = useState("");
  const [cardioDuration, setCardioDuration] = useState(0);
  const [cardioStartHeartRate, setCardioStartHeartRate] = useState(0);
  const [cardioMaxHeartRate, setCardioMaxHeartRate] = useState(0);
  const [cardioCaloriesBurned, setCardioCaloriesBurned] = useState(0);
  const [cardioEffort, setCardioEffort] = useState(0);
  const [workoutLogged, setWorkoutLogged] = useState(false);
  const [todaysWorkout, setTodaysWorkout] = useState<{
    cardio?: string;
    duration?: number;
    startHeartRate?: number;
    maxHeartRate?: number;
    caloriesBurned?: number;
    effort?: number;
  } | null>(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUser(parsedUserData.name || "Guest");
    }
  }, []);

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();
  let wday = today.getDay();
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Save the workout with today's date
    const workoutData = {
      date: `${mm}/${dd}/${yyyy}`,
      cardio: cardio,
      duration: cardioDuration,
      startHeartRate: cardioStartHeartRate,
      maxHeartRate: cardioMaxHeartRate,
      caloriesBurned: cardioCaloriesBurned,
      effort: cardioEffort,
    };

    // Save the workout data to localStorage
    localStorage.setItem("workout", JSON.stringify(workoutData));

    // Indicate that workout has been logged
    setTodaysWorkout(workoutData);
    setWorkoutLogged(true);

    // Clear form inputs after submission
    setCardio("");
    setCardioDuration(0);
    setCardioStartHeartRate(0);
    setCardioMaxHeartRate(0);
    setCardioCaloriesBurned(0);
    setCardioEffort(0);
  };

  // Retrieve the logged workout data from localStorage
  useEffect(() => {
    const storedWorkout = localStorage.getItem("workout");
    if (storedWorkout) {
      const parsedWorkout = JSON.parse(storedWorkout);
      setTodaysWorkout(parsedWorkout);
      setWorkoutLogged(true);
    }
  }, []);

  return (
    <>
      <div className="card">
        {user === "Guest" ? (
          <>
            <h2>Welcome to Today's Workout</h2>
            <p>
              To log a new workout, please{" "}
              <NavLink to="/signup">
                <button>Sign Up</button>
              </NavLink>
            </p>
          </>
        ) : (
          <div className="card">
            <h2>Today's workout</h2>
            <h4>
              {week[wday]} - {mm}/{dd}/{yyyy}
            </h4>
            {workoutLogged && todaysWorkout ? (
              <table className="table-container">
                <thead>
                  <tr>
                    <th>Type of Cardio</th>
                    <th>Duration (min)</th>
                    <th>Starting Heart Rate</th>
                    <th>Max Heart Rate</th>
                    <th>Calories Burned</th>
                    <th>Effort</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{todaysWorkout.cardio}</td>
                    <td>{todaysWorkout.duration}</td>
                    <td>{todaysWorkout.startHeartRate}</td>
                    <td>{todaysWorkout.maxHeartRate}</td>
                    <td>{todaysWorkout.caloriesBurned}</td>
                    <td>{todaysWorkout.effort}</td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <div className="user">
                <form onSubmit={handleSubmit}>
                  <label> Today's Cardio</label>
                  <input
                    type="text"
                    id="cardio"
                    value={cardio}
                    onChange={(event) => setCardio(event.target.value)}
                  />
                  <label>Duration (in minutes):</label>
                  <input
                    type="number"
                    id="cardioDuration"
                    value={cardioDuration}
                    onChange={(event) =>
                      setCardioDuration(parseInt(event.target.value))
                    }
                  />
                  <label>Start Heart Rate:</label>
                  <input
                    type="number"
                    id="cardioStartHeartRate"
                    value={cardioStartHeartRate}
                    onChange={(event) =>
                      setCardioStartHeartRate(parseInt(event.target.value))
                    }
                  />
                  <label>Max Heart Rate:</label>
                  <input
                    type="number"
                    id="cardioMaxHeartRate"
                    value={cardioMaxHeartRate}
                    onChange={(event) =>
                      setCardioMaxHeartRate(parseInt(event.target.value))
                    }
                  />
                  <label>Calories Burned:</label>
                  <input
                    type="number"
                    id="cardioCaloriesBurned"
                    value={cardioCaloriesBurned}
                    onChange={(event) =>
                      setCardioCaloriesBurned(parseInt(event.target.value))
                    }
                  />
                  <label>Effort (1-10):</label>
                  <input
                    type="number"
                    id="cardioEffort"
                    value={cardioEffort}
                    onChange={(event) =>
                      setCardioEffort(parseInt(event.target.value))
                    }
                  />
                  <button type="submit">Log Workout</button>
                </form>
              </div>
            )}
            <NavLink to="/add-workout">
              <button> Add More Cardio</button>
            </NavLink>
          </div>
        )}
      </div>{" "}
    </>
  );
}
