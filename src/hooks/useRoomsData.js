import { useQuery } from "@tanstack/react-query";
import { getAllRooms } from "../firebase-config";
const fetchRooms = () => {
  return getAllRooms();
};

export const useRoomsData = (onSuccess, onError) => {
  return useQuery(
    ["rooms"],
    fetchRooms,

    {
      onSuccess,
      onError,
      refetchOnWindowFocus: true,
      refetchOnMount: true,
    }
  );
};
