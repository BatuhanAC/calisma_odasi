import React from "react";
import { RoomBox } from "../micros/RoomBox";

const Main = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>
      <RoomBox></RoomBox>
      <RoomBox></RoomBox>
      <RoomBox></RoomBox>
      <RoomBox></RoomBox>
      <RoomBox></RoomBox>
      <RoomBox></RoomBox>
    </div>
  );
};

export default Main;
