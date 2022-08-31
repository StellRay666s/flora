import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    isOpen: false,
    message: "",
    status: "",
  },
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotification(state, action) {
      state.data = action.payload;
    },
    hiddenNotification(state, action) {
      state.data = action.payload;
    },
  },
});

export default notificationSlice.reducer;

export const { setNotification, hiddenNotification } = notificationSlice.actions;
