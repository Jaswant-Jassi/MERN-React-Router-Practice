import React from "react";
import SignupPage from './pages/signupPage';
import LoginPage from "./pages/loginPage";

import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/404Page";
import GuestHome from "./pages/GuestHome";



export default function Guest() {
  return (
    <>
      {/* <GuestHome/> */}
    <Routes>
      <Route path="/" element={<h1>i am dashboard - guest</h1>} />
      <Route path="/signup" element={<SignupPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    
    </>
  );
}
