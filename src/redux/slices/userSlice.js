import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    email: null,
    password: null,
    address: null,
    phone: null,
    name: null,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = { ...initialState, ...payload };
    },
    clearUser: state => {
      state.user = initialState;
    },
  },
});

export default userSlice.reducer;
