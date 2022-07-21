import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ children, handleOnClick }) => {
  const navigate = useNavigate();

  return (
    <>
      <button
        className='bg-gray-400 m-5 rounded-lg p-2'
        onClick={handleOnClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
