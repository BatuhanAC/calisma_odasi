import React from "react";

const Input = ({ placeholder, setState, type, children, min, max }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      min={min}
      max={max}
      onChange={(e) => {
        setState(e.target.value);
      }}
      className='border-2 p-3 w-full border-blue-200 focus:border-blue-600 outline-none  rounded-2xl '
    >
      {children}
    </input>
  );
};

export default Input;
