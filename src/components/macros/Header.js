import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const isLoged = false

  return (
    <div className='flex p-5 bg-blue-600 font-bold text-[#fff]'>
      <NavLink className='mx-3 hover:text-[#d8d8d8]' to={""}>
        Main
      </NavLink>
      {
      isLoged ? 
      <>
        <NavLink className='mx-3 hover:text-[#d8d8d8]' to={"/account"}>
          Account
        </NavLink>
      </> 
      : 
      <>
      <NavLink className='mx-3 hover:text-[#d8d8d8]' to={"/login"}>
        Login/SignUp
      </NavLink>
      </>
      }
    </div>     
  );
};

export default Header;
