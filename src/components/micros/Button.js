import React from "react";

const Button = ({ children, handleOnClick }) => {

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
