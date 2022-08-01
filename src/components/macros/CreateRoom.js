import React, { useState } from "react";
import { AiOutlineDownCircle } from "react-icons/ai";
import { Link, Element } from "react-scroll";
export const CreateRoom = () => {
  const [name, setName] = useState(null);
  return (
    <>
      {/** Getting Room Name */}
      <div className='w-full h-screen bg-slate-100 flex flex-col items-center pt-48'>
        <div>
          <div className='flex flex-col items-center'>
            <p className='text-4xl font-bold text-blue-500 mt-2 cursor-default'>
              First of all
            </p>
            <p className='text-2xl font-bold text-blue-500 mt-2 cursor-default'>
              Lets choose a name for your room
            </p>
          </div>
          <div className='flex flex-col items-center justify-center mt-2'>
            <input
              type='text'
              placeholder='write your room name'
              className='py-3 px-4 w-full rounded shadow font-thin placeholder-blue-300 focus:outline-none focus:shadow-lg focus:shadow-slate-200 duration-100 shadow-gray-100'
            />
            <div className='mt-5'>
              <button>
                <Link name='name' to='lessonAndTopic' smooth spy offset={-400}>
                  <AiOutlineDownCircle
                    size={40}
                    className='text-blue-500 hover:text-blue-600'
                  />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/** Getting Room Lesson and Topic */}
      <div className='w-full h-screen bg-slate-100 flex flex-col items-center pt-48 '>
        <div>
          <p className='text-4xl font-bold text-blue-500 mt-2 cursor-default'>
            Can you tell us
          </p>
          <div className='flex flex-col items-center'>
            <p className='text-2xl font-bold text-blue-500 mt-2 cursor-default'>
              Lesson
            </p>
            <select
              id='countries'
              class='py-3 mt-2 px-4 w-full rounded shadow font-thin placeholder-blue-300 focus:outline-none focus:shadow-lg focus:shadow-slate-200 duration-100 shadow-gray-100'
            >
              <option selected>Choose a lesson</option>
              <option value='US'>United States</option>
              <option value='CA'>Canada</option>
              <option value='FR'>France</option>
              <option value='DE'>Germany</option>
            </select>
          </div>{" "}
          <div className='flex flex-col items-center'>
            <p className='text-2xl font-bold text-blue-500 mt-2 cursor-default'>
              Topic
            </p>
            <select
              id='countries'
              class='py-3 mt-2 px-4 w-full rounded shadow font-thin placeholder-blue-300 focus:outline-none focus:shadow-lg focus:shadow-slate-200 duration-100 shadow-gray-100'
            >
              <option selected>Choose a topic</option>
              <option value='US'>United States</option>
              <option value='CA'>Canada</option>
              <option value='FR'>France</option>
              <option value='DE'>Germany</option>
            </select>
          </div>
        </div>
        <Link
          name='lessonAndTopic'
          to='educationLevel'
          smooth
          spy
          offset={-400}
        >
          <AiOutlineDownCircle
            size={40}
            className='text-blue-500 hover:text-blue-600'
          />
        </Link>
      </div>
      {/** Getting Room Education Level */}
      <div className='w-full h-screen bg-slate-100 flex flex-col items-center pt-48'>
        <p>Please specify the variaty of education level for your room</p>
        <input type='text' placeholder='' />
        <Link name='educationLevel' to='maxUser' smooth spy offset={-400}>
          <AiOutlineDownCircle
            size={40}
            className='text-blue-500 hover:text-blue-600'
          />
        </Link>
      </div>
      {/** Getting Room Max User */}
      <div className='w-full h-screen bg-slate-100 flex flex-col items-center pt-48'>
        <p>Can You tell us maximum user</p>
        <input type={"number"} name='' id='' />
        <Link name='maxUser' to='roomType' smooth spy offset={-400}>
          <AiOutlineDownCircle
            size={40}
            className='text-blue-500 hover:text-blue-600'
          />
        </Link>
      </div>
      {/** Getting Room Type */}
      <div
        name='roomType'
        className='w-full h-screen bg-slate-100 flex flex-col items-center '
      >
        <p>
          Lastly do you prefer text chat, voice chat, whiteboard or all of them
        </p>{" "}
        <input type={"number"} name='' id='' />
      </div>
    </>
  );
};
