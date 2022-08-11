import { configureStore } from "@reduxjs/toolkit";

/** Slices */
import userSlice from "redux/slices/userSlice";
import notifeSlice from "./slices/notifeSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    notife: notifeSlice,
  },
});
