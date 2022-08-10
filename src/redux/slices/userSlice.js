import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: null,
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

/** Actions */
export const { setUser, clearUser } = userSlice.actions;

/** Reducer */
export default userSlice.reducer;
