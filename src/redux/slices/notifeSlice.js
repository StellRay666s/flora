import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notificates: {
    isOpen: false,
    message: "",
    status: true || false,
  },
};

export const notifSlice = createSlice({
  name: "notif",
  initialState,
  reducers: {
    setNotification(state, action) {
      state.notificates = action.payload;
    },
    hiddenNotification(state, action) {
      state.notificates = action.payload;
    },
  },
});

export default notifSlice.reducer;

export const { setNotification, hiddenNotification } = notifSlice.actions;
