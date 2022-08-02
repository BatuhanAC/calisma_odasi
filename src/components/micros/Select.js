import React from "react";

const Select = ({ children }) => {
  return (
    <select className='border-2 p-3 w-full border-blue-200 focus:border-blue-600 outline-none rounded-2xl font-semibold'>
      {children}
    </select>
  );
};

export default Select;
