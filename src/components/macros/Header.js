import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const user = useSelector(state => state.auth.user)
  const isLoged = localStorage.getItem('isLoged')
  return (
    <div className='flex p-5 bg-blue-600 font-bold text-[#fff]'>
      <NavLink className='mx-3 hover:text-[#d8d8d8]' to={""}>
        Main
      </NavLink>
      {
      isLoged === "true" ? 
      <>
        <NavLink className='mx-3 hover:text-[#d8d8d8]' to={"/account"}>
          {user ? user.email : "Account"}
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
