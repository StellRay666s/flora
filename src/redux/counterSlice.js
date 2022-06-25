import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
  },

  reducers: {
    addUser(state, action) {
      state.users.push({
        id: new Date().toISOString(),
        name: action.payload,
        email: action.payload,
        adress: action.payload,
        phone: action.payload,
      });
    },
  },
});
export const { addUser } = registerSlice.actions;

export default registerSlice.reducer;
