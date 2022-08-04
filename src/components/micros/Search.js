import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineMicrophone } from "react-icons/hi";
export const Search = ({ passKeywords }) => {
  const [keywords, setKeywords] = useState("");

  return (
    <div className='max-w-2xl mx-auto'>
      <form className='flex items-center'>
        <label htmlFor='voice-search' className='sr-only'>
          Search
        </label>
        <div className='relative w-full'>
          <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none text-gray-500'>
            <AiOutlineSearch />
          </div>
          <input
            type='text'
            id='voice-search'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5'
            placeholder='Search Mockups, Logos, Design Templates...'
            required
            onChange={(e) => setKeywords(e.target.value)}
          />
          <button
            type='button'
            className='flex absolute inset-y-0 right-0 items-center pr-3 text-gray-500'
          >
            <HiOutlineMicrophone />
          </button>
        </div>
        <button
          type='submit'
          className='inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
          onClick={(e) => {
            e.preventDefault();
            passKeywords(keywords);
          }}
        >
          <AiOutlineSearch size={18} />
          Search
        </button>
      </form>
    </div>
  );
};
