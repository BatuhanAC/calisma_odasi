import React from "react";
import NavButton from "../micros/Button";
import { NavLink } from "react-router-dom";
import Button from "../micros/Button";

const Header = () => {
  return (
    <div className='flex p-5 bg-blue-600 font-bold text-[#fff]'>
      <NavLink className='mx-3 hover:text-[#d8d8d8]' to={""}>
        Main
      </NavLink>
      <NavLink className='mx-3 hover:text-[#d8d8d8]' to={"Session"}>
        Session
      </NavLink>
      <NavLink className='mx-3 hover:text-[#d8d8d8]' to={"Account"}>
        Account
      </NavLink>
      <NavLink className='mx-3 hover:text-[#d8d8d8]' to={"Login"}>
        Login
      </NavLink>
      <NavLink className='mx-3 hover:text-[#d8d8d8]' to={"Signup"}>
        Signup
      </NavLink>
    </div>
  );
};

export default Header;
