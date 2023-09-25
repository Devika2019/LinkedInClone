import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';



export const userSlice = createSlice({
  name: "user",
  initialState:{
user : null
  },

  reducers: {
    login: (state, action) => {
   
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },  
});

export const { login, logout, incrementByAmount } = userSlice.actions;

export const selectUser = (state) => state.user.user;



export default userSlice.reducer;
