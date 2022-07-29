import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const isLoged = true

  return (
    <div className='flex p-5 bg-blue-600 font-bold text-[#fff]'>
      <NavLink className='mx-3 hover:text-[#d8d8d8]' to={""}>
        Main
      </NavLink>
      {
      isLoged ? 
      <>
        <NavLink className='mx-3 hover:text-[#d8d8d8]' to={"Account"}>
          Account
        </NavLink>
      </> 
      : 
      <>
      <NavLink className='mx-3 hover:text-[#d8d8d8]' to={"Login"}>
        Login/SignUp
      </NavLink>
      </>
      }
    </div>     
  );
};

export default Header;
