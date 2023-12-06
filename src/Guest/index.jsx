import React from "react";
import SignupPage from './pages/signupPage';
import LoginPage from "./pages/loginPage";

import { Routes, Route, Navigate } from "react-router-dom";


export default function Guest() {
  return (
    <Routes>
      <Route path="/" element={<h1>i am dashboard - guest</h1>} />
      <Route path="/signup" element={<SignupPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="*" element={<Navigate to={"/"} rplace="true" />} />
    </Routes>
  );
}
