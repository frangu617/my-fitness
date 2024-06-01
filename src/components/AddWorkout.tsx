import { NavLink } from "react-router-dom";
export default function AddWorkout() {
    return (
        <>
        <div className="addWorkout">
            <div className="card">
                <h2>Add Workout</h2>
                <p>This is where new workouts will be added</p>
                <NavLink to = "/today-workout"><button>Add Workout</button></NavLink>
            </div>
        </div>
        </>
    )
}