import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { edTypeBorderColor, edTypeColor } from "../../utils/constants";

export const RoomBox = ({ room }) => {
  const navigate = useNavigate();
  console.log(room);
  return (
    <div className=' w-auto p-6 m-5 bg-white rounded-xl shadow-xl hover:shadow-2xl'>
      <div className='mt-4'>
        <div className=' flex flex-row'>
          <h1 className='text-2xl font-bold text-gray-700 mr-5'>
            {room?.name}
          </h1>
          <div className=' flex flex-row'>
            {room?.selectedRooomTypes.map((type, idx) => {
              return (
                <div className='flex flex-row px-2  cursor-text justify-center items-center '>
                  <AiOutlineCheckCircle
                    className='mx-1 text-blue-600'
                    size={15}
                  />
                  {type.label}
                </div>
              );
            })}
          </div>
        </div>
        <p className='text-md font-bold mt-2  text-gray-700'>
          {room?.lesson.charAt(0).toUpperCase() + room?.lesson.slice(1)}
        </p>
        <p className='text-sm mt-2 font-medium text-gray-700'>
          {room?.topic.charAt(0).toUpperCase() + room?.topic.slice(1)}
        </p>
        <div className='mt-3 space-x-4 inline-grid grid-cols-2 sm:grid-cols-4 p-1'>
          {room.selectedEducationLevels.map((el, idx) => {
            return (
              <div key={idx} className='block my-1'>
                <div
                  className={`flex flex-row justify-between p-1  border-4 rounded-full cursor-pointer ${edTypeBorderColor(
                    el.value
                  )} hover:scale-105 transition transform duration-200`}
                >
                  <p className='px-2  text-sm font-semibold text-gray-700'>
                    {el.label}
                  </p>
                  <span
                    className={`inline-block h-5 w-5 ${edTypeColor(
                      el.value
                    )} rounded-full`}
                  >
                    {" "}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className='mt-4 mb-2 flex justify-between pl-4 pr-2'>
          <p className='block text-xl font-semibold text-blue-400 cursor-auto hover:cursor-pointer hover:text-blue-700 transition duration-1000'>
            @{room?.createdBy}
          </p>
          <button
            className='text-lg block font-semibold py-2 px-6 text-green-100 hover:text-white bg-blue-400 rounded-lg shadow hover:shadow-md transition duration-300'
            onClick={() => navigate("/session", { state: { room } })}
          >
            Giriş
          </button>
        </div>
      </div>
    </div>
  );
};
