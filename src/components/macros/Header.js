import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import {FiLogOut} from "react-icons/fi"
import { logout } from "../../firebase-config";


const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const username = useSelector((state) => state.account.data.username)
  const isLogged = localStorage.getItem("isLogged");
  const navigate = useNavigate()
  return (
    <div className='flex p-5 bg-blue-600 font-bold text-[#fff]'>
      <NavLink className='mx-3 hover:text-[#d8d8d8]' to={""}>
        Main
      </NavLink>
      {isLogged === "true" ? (
        <>
          <NavLink className='mx-3 hover:text-[#d8d8d8]' to={"/account"}>
            {user ? username : "Account"}
          </NavLink>
          <NavLink className='mx-3  hover:text-[#d8d8d8]' to={"/create-room"}>
            {" "}
            Create Room
          </NavLink>
          <button className="flex mx-3 text-red-400  hover:text-[#d8d8d8] items-center gap-1" onClick={async () => {await logout(); navigate("/")}}>
            <FiLogOut/>
            Exit
          </button>
        </>
      ) : (
        <>
          <NavLink className='mx-3 hover:text-[#d8d8d8]' to={"/login"}>
            Login/SignUp
          </NavLink>
        </>
      )}
      
    </div>
  );
};

export default Header;
