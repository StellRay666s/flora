import { configureStore } from "@reduxjs/toolkit";

/** Slices */
import userSlice from "redux/slices/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
