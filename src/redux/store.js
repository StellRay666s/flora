import { configureStore } from "@reduxjs/toolkit";

/** Slices */
import userSlice from "redux/slices/userSlice";
import notificationSlice from "redux/slices/notificationSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    notification: notificationSlice,
    cart: cartSlice,
  },
});
