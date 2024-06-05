import { useState } from "react";

export default function AddWorkout() {
  const [isCardio, setIsCardio] = useState(true); // Default to cardio
  const [workoutName, setWorkoutName] = useState("");
  const [bodyPart, setBodyPart] = useState("");
  const [weight, setWeight] = useState(0);
  const [reps, setReps] = useState(0);
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

  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsCardio(event.target.value === "cardio");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isCardio) {
      // Handle cardio workout submission
      console.log("Cardio workout submitted:", {
        workoutName,
        bodyPart,
        weight,
        reps,
      });
    } else {
      // Handle non-cardio workout submission
      console.log("Non-cardio workout submitted:", {
        workoutName,
        bodyPart,
      });
    }
    // Reset form fields
    setWorkoutName("");
    setBodyPart("");
    setWeight(0);
    setReps(0);
  };

  return (
    <div>
      <h2>Add Workout</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Type of workout:
          <input
            type="radio"
            name="workoutType"
            value="cardio"
            checked={isCardio}
            onChange={handleTypeChange}
          />
          Cardio
          <input
            type="radio"
            name="workoutType"
            value="strength"
            checked={!isCardio}
            onChange={handleTypeChange}
          />
          Strength
        </label>
        <br />
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
          onChange={(event) => setCardioDuration(parseInt(event.target.value))}
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
          onChange={(event) => setCardioEffort(parseInt(event.target.value))}
        />
        <br />
        {!isCardio ? (
          <>
            <label>
              Weight (lbs):
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(parseInt(e.target.value))}
                required
              />
            </label>
            <br />
            <label>
              Reps:
              <input
                type="number"
                value={reps}
                onChange={(e) => setReps(parseInt(e.target.value))}
                required
              />
            </label>
          </>
        ) : null}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
