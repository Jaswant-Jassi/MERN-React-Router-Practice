import React from "react";
import Navigation from "../Components/Navigation";
import { Routes, Route, Navigate } from "react-router-dom";

export default function Admin() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="*" element={<Navigate to={"/"} rplace="true" />} />
      </Routes>
    </>
  );
}
