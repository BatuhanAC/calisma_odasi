import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const RoomBox = ({ room }) => {
  const navigate = useNavigate();
  console.log("Oda", room);
  return (
    <div className=' w-auto p-6 m-5 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500'>
      <div className='mt-4'>
        <div className=' flex flex-row'>
          <h1 className='text-2xl font-bold text-gray-700 mr-5'>
            {room?.name}
          </h1>
          <div className=' flex flex-row'>
            {room?.room_type?.audio_chat && (
              <div className='flex flex-row px-2  cursor-text justify-center items-center '>
                <AiOutlineCheckCircle
                  className='mx-1 text-blue-600'
                  size={15}
                />
                Sesli
              </div>
            )}
            {room?.roomType?.text_chat && (
              <div className='flex flex-row px-2  cursor-text justify-center items-center '>
                <AiOutlineCheckCircle
                  className='mx-1 text-blue-600'
                  size={15}
                />
                Yazili
              </div>
            )}
            {room?.roomType?.audioChat && (
              <div className='flex flex-row px-2  cursor-text justify-center items-center '>
                <AiOutlineCheckCircle
                  className='mx-1 text-blue-600'
                  size={15}
                />
                Goruntulu
              </div>
            )}
            {room?.room_type?.whiteboard && (
              <div className='flex flex-row px-2  cursor-text justify-center items-center '>
                <AiOutlineCheckCircle
                  className='mx-1 text-blue-600'
                  size={15}
                />
                Çizimli
              </div>
            )}
          </div>
        </div>
        <p className='text-md font-medium mt-2  text-gray-700'>
          {room?.lesson}
        </p>
        <p className='text-sm mt-2 text-gray-700'>{room?.topic}</p>
        <div className='mt-3 space-x-4 flex p-1'>
          {room?.education_level?.other && (
            <div className='flex flex-row p-1 border-4 rounded-full cursor-pointer hover:border-white-200 hover:scale-105 transition transform duration-200'>
              <p className='text-md mx-1 text-gray-700'>Başka</p>
              <span className='block h-6 w-6 bg-gray-200 rounded-full'> </span>
            </div>
          )}
          {room?.educationLevel?.primary_school && (
            <div className='flex flex-row p-1 border-4 rounded-full cursor-pointer hover:border-blue-200 hover:scale-105 transition transform duration-200'>
              <p className='text-md mx-1 text-gray-700'>İlköğretim</p>
              <span className='block h-6 w-6 bg-blue-400 rounded-full'> </span>
            </div>
          )}
          {room?.educationLevel?.high_school && (
            <div className='flex flex-row p-1 border-4 rounded-full cursor-pointer hover:border-yellow-200 hover:scale-105 transition transform duration-200'>
              <p className='text-md mx-1 text-gray-700'>Lise</p>
              <span className='block h-6 w-6 bg-yellow-400 rounded-full'>
                {" "}
              </span>
            </div>
          )}
          {room?.educationLevel?.university && (
            <div className='flex flex-row p-1 border-4 rounded-full cursor-pointer hover:border-green-200 hover:scale-105 transition transform duration-200'>
              <p className='text-md mx-1 text-gray-700'>Üniversite</p>
              <span className='block h-6 w-6 bg-green-400 rounded-full'> </span>
            </div>
          )}
          {room?.educationLevel?.post_graduate && (
            <div className='flex flex-row p-1 border-4 rounded-full cursor-pointer hover:border-red-200 hover:scale-105 transition transform duration-200'>
              <p className='text-md mx-1 text-gray-700'>Mezun</p>
              <span className='block h-6 w-6 bg-red-400 rounded-full'> </span>
            </div>
          )}
        </div>
        <div className='mt-4 mb-2 flex justify-between pl-4 pr-2'>
          <p className='block text-xl font-semibold text-blue-400 cursor-auto hover:cursor-pointer hover:text-blue-700 transition duration-1000'>
            @{room?.auth?.room_owner_id}
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
