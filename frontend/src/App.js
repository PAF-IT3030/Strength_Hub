import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./Pages/ProfilePage";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import HomePage from "./Pages/HomePage";
import { Box } from "@mui/material";
import Navbar from "./Components/NavBar";
import { store } from "./Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserAction } from "./Redux/Auth/auth.action";

function App() {
  const { auth } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();

  console.log(auth.user, "auth");

  useEffect(() => {
    dispatch(getUserAction(jwt));
  }, [jwt]);
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/*" element={auth.user ? <HomePage /> : <LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/*" element={<LoginPage />} />
      </Routes>
    </Box>
  );
}

export default App;
