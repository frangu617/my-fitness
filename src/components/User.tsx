import { useEffect, useState } from "react";

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
    <div className = "card">
        {
          user !== "Guest" ? (
       <div className="card">
        <p>Name: </p>
        <p>{name}</p>
        <p>Weight:</p>
        <p>{weight} lbs</p>
        <p>Height:</p>
        <p>
          {heightFeet}'{heightInches}"
        </p>
        <p>Age:</p>
        <p>{age}</p>
        <p>Gender:</p>
        <p>{gender}</p>
        <p>BMI:</p>
        <p>{bmi}</p>
        <p>Daily Calories:</p>
        <p>{dailyCalories}</p>
       </div>
          ) : (
            <div style={{ display : "flex", flexDirection : "column", justifyContent : "center"}}>
              <h2>Welcome Guest</h2>
              <p>Please {" "}<button>sign up</button></p>
              <p>to get started</p>
            </div>
          )
        }
    </div>
  );
}
