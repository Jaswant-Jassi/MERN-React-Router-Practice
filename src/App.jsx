import React, { useState } from "react";
import Admin from "./Admin";
import Guest from "./Guest";
import User from "./User";

export default function App() {
  const [userRole, setUserRole] = useState("Guest");
  const ComponentByRoles = {
    Admin: Admin,
    User: User,
    Guest: Guest,
  };

  const GetComponent = (params) =>
    ComponentByRoles[params] || ComponentByRoles["Guest"];


  const CurrentUser = GetComponent(userRole);

  return (
    <>
      
      <CurrentUser />
    </>
  );
}
