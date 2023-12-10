import React, { useContext, useState } from "react";
import Admin from "./Admin";
import Guest from "./Guest";
import User from "./User";
import { GlobalContext } from "./Context/context";
import GuestHome from "./Guest/pages/GuestHome";


export default function App() {
  let { user } = useContext(GlobalContext);

  console.log(useContext(GlobalContext));

  const Roles = {
    Admin: Admin,
    User: User,
    Guest: Guest,
  };

  const getComponentByRoles = (params) => Roles[params] || Roles["User"];

  const CurrentUser = getComponentByRoles(user?.role);

  return (
    <>
      <GuestHome/>
     
      <CurrentUser />
    </>
  );
}
