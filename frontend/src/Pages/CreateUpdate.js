import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateUpdate = () => {
    const [exercise, setExercise] = useState("");
    const [sets, setSets] = useState(0);
    const [reps, setReps] = useState(0);
    const [weight, setWeight] = useState(0);
    const [notes, setNotes] = useState("");
    const navigate = useNavigate();
  
    const handleCreateWorkout = (e) => {
      const data = {
        exercise,
        sets,
        reps,
        weight,
        notes,
      };

      e.preventDefault();
    axios
      .post("http://localhost:8081/workout", data)
      .then(() => navigate("/updates"))
      .catch((err) => {
        alert("Something went wrong...");
        console.log(err);
      });
  };
