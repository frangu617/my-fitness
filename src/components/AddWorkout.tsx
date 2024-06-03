import { NavLink } from "react-router-dom";
export default function AddWorkout() {
    const [WOType, setWOType] = useState("");
    const [WODuration, setWODuration] = useState("");
    const [WODistance, setWODistance] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(WOType, WODuration, WODistance);
        // Add the new workout to the database
        // Clear the form
        setWOType("");
        setWODuration("");
        setWODistance("");
    }
    return (
        <>
        <div className="addWorkout">
            <div className="card">
                <h2>New Workout</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="WOType">Workout Type:</label>
                    <input
                        type="text"
                        id="WOType"
                        value={WOType}
                        onChange={(event) => setWOType(event.target.value)}
                    />

                    <label htmlFor="WODuration">Duration:</label>
                    <input
                        type="text"
                        id="WODuration"
                        value={WODuration}
                        onChange={(event) => setWODuration(event.target.value)}
                    />

                    <label htmlFor="WODistance">Distance:</label>
                    <input
                        type="text"
                        id="WODistance"
                        value={WODistance}
                        onChange={(event) => setWODistance(event.target.value)}
                    />

                    <button type="submit">Add Workout</button>  
                </form>
            </div>
        </div>
        </>
    )
}