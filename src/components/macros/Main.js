import React, { useState, useEffect } from "react";
import { RoomBox } from "../micros/RoomBox";
import axios from "axios";
const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:4000/rooms")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div className='grid grid-cols-1 gap-5 lg:grid-cols-2'>
      {data.map((room) => (
        <RoomBox room={room} />
      ))}
    </div>
  );
};

export default Main;
