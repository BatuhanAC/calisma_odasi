import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import account from "./account";
const store = configureStore({
  reducer: {
    auth,
    account,
  },
});

export default store;
