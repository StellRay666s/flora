import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    isOpen: false,
    message: "",
    status: true || false,
  },
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotification(state, action) {
      state.data = action.payload;
      console.log(state);
    },
    hiddenNotification(state, action) {
      state.data = action.payload;
      console.log(state);
    },
  },
});

export default notificationSlice.reducer;

export const { setNotification, hiddenNotification } = notificationSlice.actions;
