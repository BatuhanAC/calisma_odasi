import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import rooms from "./rooms";
const store = configureStore({
  reducer: {
    auth,
    rooms,
  },
});

export default store;
