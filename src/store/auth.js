import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: false,
}

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
      if(action.payload) {
        localStorage.setItem('isLogged', true)
      }     
    }
  }
})

export const {setUser} = auth.actions
export default auth.reducer

