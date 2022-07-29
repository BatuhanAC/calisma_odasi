import React from "react";
import { RoomBox } from "../micros/RoomBox";
import { useRoomsData } from "../../hooks/useRoomData";

const Main = () => {
  const onSuccess = (data) => {
    console.log({ data });
  };

  const onError = (error) => {
    console.log({ error });
  };

  const { isLoading, data, isError, error, refetch } = useRoomsData(
    onSuccess,
    onError
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>{error}</div>;
  }
  return (
    <div className='grid grid-cols-1 gap-5 lg:grid-cols-2 bg-slate-100'>
      {data.data.map((room) => (
        <RoomBox room={room} />
      ))}
    </div>
  );
};

export default Main;
