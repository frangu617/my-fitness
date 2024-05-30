import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import Home from "./components/Home";
import User from "./components/User";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import PastWorkout from "./components/PastWorkout";
import TodayWorkout from "./components/TodayWorkout";
import Logout from "./components/Logout";

function App() {
  return (
    <Router>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/past-workout" element={<PastWorkout />} />
          <Route path="/today-workout" element={<TodayWorkout />} />
          <Route path="/nav-bar" element={<NavBar />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
