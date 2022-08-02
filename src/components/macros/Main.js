import React, { useEffect } from "react";
import { RoomBox } from "../micros/RoomBox";
import { storeRooms } from "../../firebase-config";
import { useSelector } from "react-redux";
const Main = () => {
  const rooms = useSelector((state) => state.rooms.rooms);

  return (
    <div className='grid grid-cols-1 gap-5 lg:grid-cols-2 bg-slate-100'>
      <button onClick={() => storeRooms()}>Bas</button>
      {rooms && rooms?.map((room, idx) => <RoomBox key={idx} room={room} />)}
    </div>
  );
};

export default Main;
