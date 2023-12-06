import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

export default function User() {
  return (
    <Routes>
      <Route path="/" element={<h1>i am dashboard - user</h1>} />
      <Route path="*" element={<Navigate to={"/"} rplace="true" />} />
    </Routes>
  );
}
