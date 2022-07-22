import React from "react";
import NavButton from "../micros/Button";
import { NavLink } from "react-router-dom";
import Button from "../micros/Button";

const Header = () => {
  return (
    <div className='flex p-5 bg-blue-600'>
      <NavLink to={""}>Main</NavLink>
      <NavLink to={"Session"}>Session</NavLink>
      <NavLink to={"Account"}>Account</NavLink>
      <NavLink to={"Login"}>Login</NavLink>
      <NavLink to={"Signup"}>Signup</NavLink>
    </div>
  );
};

export default Header;
