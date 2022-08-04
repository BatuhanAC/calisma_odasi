import React, { useEffect, useState } from "react";
import { RoomBox } from "../micros/RoomBox";
import { Search } from "../micros/Search";
import { useRoomsData } from "../../hooks/useRoomsData";

const Main = () => {
  const [keywords, setKeywords] = useState("");

  const onSuccess = (data) => {
    console.log("Perform side effect after data fetching", data);
  };
  const onError = (err) => {
    console.log("Perform side effect after encountering error", err);
  };
  const { data, loading, error } = useRoomsData(onSuccess, onError);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <div className='my-4'>
        <Search passKeywords={setKeywords} />
      </div>{" "}
      <div className='grid grid-cols-1 gap-5 lg:grid-cols-2 bg-slate-100'>
        {data &&
          data.map((room, idx) => {
            return <RoomBox key={idx} room={room} />;
          })}
      </div>
    </>
  );
};

export default Main;
