import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import account from "./account";
import rooms from "./rooms";
const store = configureStore({
  reducer: {
    auth,
    rooms,
    account
  }
})

export default store