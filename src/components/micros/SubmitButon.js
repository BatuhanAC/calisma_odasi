import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import React from "react";

export const SubmitButon = ({ children }) => {
  return (
    <button className=' group border-2 border-blue-500  rounded-2xl 0.125rem px-6 py-3 my-2  hover:bg-blue-500 hover:border-blue-500 hover:text-[#fff]'>
      <div className='flex items-center justify-center mr-4'>
        <span className=' group-hover:rotate-180 duration-300 ml-4'>
          <HiArrowNarrowLeft className='' />
        </span>
        <div className='ml-4'>{children}</div>
        <span className=' group-hover:-rotate-180 duration-300 ml-4'>
          <HiArrowNarrowRight className='' />
        </span>
      </div>
    </button>
  );
};
