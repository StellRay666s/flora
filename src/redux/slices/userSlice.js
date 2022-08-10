import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    email: null,
    password: null,
    adress: null,
    phone: null,
    name: null,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
