import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.loggedIn = action.payload.loggedIn;
    },    
  },
});

export const { setLogin } = authSlice.actions;
export default authSlice.reducer;