import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

interface UserData {
  name: string;
  weight: number;
  heightFeet: number;
  heightInches: number;
  age: number;
  gender: string;
  bmi: number;
  dailyCalories: number;
}

export default function User() {
  const [userData, setUserData] = useState<UserData>({
    name: "Guest",
    weight: 0,
    heightFeet: 0,
    heightInches: 0,
    age: 0,
    gender: "",
    bmi: 0,
    dailyCalories: 0,
  });

   const [user, setUser] = useState("Guest");

   useEffect(() => {
     const storedUserData = localStorage.getItem("userData");
     if (storedUserData) {
       const parsedUserData = JSON.parse(storedUserData);
       setUser(parsedUserData.name || "Guest");
     }
   }, []);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserData({
        name: parsedUserData.name || "Guest",
        weight: parsedUserData.weight || 0,
        heightFeet: parsedUserData.heightFeet || 0,
        heightInches: parsedUserData.heightInches || 0,
        age: parsedUserData.age || 0,
        gender: parsedUserData.gender || "",
        bmi: parsedUserData.bmi || 0,
        dailyCalories: parsedUserData.dailyCalories || 0,
      });
    }
  }, []);

  const {
    name,
    weight,
    heightFeet,
    heightInches,
    age,
    gender,
    bmi,
    dailyCalories,
  } = userData;

  return (
    <>
        {
          user !== "Guest" ? (
       <div className="user">
        <div className="card">
          <strong>Name: </strong>
          <p>{name}</p>
          <strong>Weight:</strong>
          <p>{weight} lbs</p>
          <strong>Height:</strong>
          <p>
            {heightFeet}'{heightInches}"
          </p>
          <strong>Age:</strong>
          <p>{age}</p>
          <strong>Gender:</strong>
          <p>{gender}</p>
          <strong>BMI:</strong>
          <p>{bmi}</p>
          <strong>Daily Calories:</strong>
          <p>{dailyCalories}</p>
        </div>
       </div>
          ) : (
            <div style={{ display : "flex", flexDirection : "column", justifyContent : "center"}}>
              <h2>Welcome Guest</h2>
              <p>Please {" "}<NavLink to="/sign   up"><button>Sign Up</button></NavLink>
              {" "}to get started</p>
            </div>
          )
        }
    </>
  );
}
