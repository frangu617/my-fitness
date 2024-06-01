import { NavLink } from "react-router-dom";

export default function TodayWorkout() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    let wday = today.getDay();
    let day = Number(dd)
    let month = Number(mm)
    let year = Number(yyyy)

    let dayOfWeek = new Date(year, month, day).getDay();
    let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return (
    <>
    <div className = "newWorkout">
        
            <div className = "card">
                <h2>Today's workout</h2>
                <h4>{week[wday]} - {mm}/{dd}/{yyyy}</h4>
                <NavLink to = "/add-workout"><button> Add Workout</button></NavLink>       
                </div>
        
    </div>    </>
    )
}