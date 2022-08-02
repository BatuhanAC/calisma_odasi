import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    name: "",
    surname: "",
    username: "",
    job:"",
    education:"",
    birthday:"",
  }  
}

const account = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAccount: (state, action) => {
      state.data = action.payload
    }
  }
})

export const {setAccount} = account.actions
export default account.reducer