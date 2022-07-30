import React from "react";

const Button = ({ children, handleOnClick }) => {

  return (
    <>
      <button
        className='font-bold text-lg bg-blue-500 p-3 rounded-xl text-white text-center cursor-default self-center w-[50%]'
        onClick={handleOnClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
