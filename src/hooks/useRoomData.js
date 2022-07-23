import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const fetchRooms = () => {
  return axios.get("http://localhost:4000/rooms");
};

export const useRoomsData = (onSuccess, onError) => {
  return useQuery(["rooms"], fetchRooms, {
    onSuccess,
    onError,
    refetchOnMount: true,
  });
};
