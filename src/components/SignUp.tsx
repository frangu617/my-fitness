import React, { useState } from "react";


export default function SignUp() {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState(0);
  const [heightFeet, setHeightFeet] = useState(0);
  const [heightInches, setHeightInches] = useState(0);
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const heightInCentimeters = (heightFeet * 12 + heightInches) * 2.54;
    const bmi =
      weight / ((heightInCentimeters / 100) * (heightInCentimeters / 100));
    const dailyCalories = calculateDailyCalories(bmi, age, gender);

    const userData = {
      name,
      weight,
      heightFeet,
      heightInches,
      age,
      gender,
      bmi,
      dailyCalories,
    };

    localStorage.setItem("userData", JSON.stringify(userData));
    console.log(`User data saved: ${JSON.stringify(userData)}`);
  };

  function calculateDailyCalories(bmi: number, age: number, gender: string) {
    if (gender === "male") {
      bmi = 10 * weight +
        6.25 * (heightFeet * 12 + heightInches) * 2.54 -
        5 * age +
        5
      return (
        bmi
      );
    } else if (gender === "female") {
      bmi =  10 * weight +
        6.25 * (heightFeet * 12 + heightInches) * 2.54 -
        5 * age -
        161
      return (
       bmi
      );
    } else {
      return 0;
    }
  }

  return (
    <div className="card">
      <form onSubmit={handleSubmit} className="signup">
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          Gender:
          <select
            value={gender}
            onChange={(event) => setGender(event.target.value)}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="non-binary">Non-binary</option>
          </select>
        </label>
        <label>
          Weight (lbs):
          <input
            type="number"
            value={weight}
            onChange={(event) => setWeight(parseInt(event.target.value))}
          />
        </label>
        <label>
          Height (feet and inches):
          <input
            type="number"
            value={heightFeet}
            placeholder="feet"
            onChange={(event) => setHeightFeet(parseInt(event.target.value))}
          />
          <input
            type="number"
            value={heightInches}
            placeholder="inches"
            onChange={(event) => setHeightInches(parseInt(event.target.value))}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(event) => setAge(parseInt(event.target.value))}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
