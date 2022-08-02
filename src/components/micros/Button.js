import React from "react";

const Button = ({ children, handleOnClick, disabled }) => {
  return (
    <>
      <button
        className=' font-bold text-lg bg-blue-500 p-3 rounded-xl text-white text-center cursor-default self-center w-[50%] 
        disabled:bg-blue-200  '
        onClick={handleOnClick}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
