import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postReAuthentication } from "requests/postReAuthentication";

export const fetchUserData = createAsyncThunk("user/fetchUserData", async () => {
  const accessToken = window.localStorage.getItem("accessToken");
  const { data } = await postReAuthentication(accessToken);

  return data.user;
});

const initialState = {
  user: {
    id: null,
    email: null,
    password: null,
    address: null,
    phone: null,
    name: null,
    isAuth: false,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.user.isAuth = true;
    },
    clearUser: state => {
      state.user = initialState;
    },
  },
  extraReducers: {
    [fetchUserData.pending]: state => {
      state.user = [];
      state.status = "loading";
    },
    [fetchUserData.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.user.isAuth = true;
      state.status = "loaded";
    },
    [fetchUserData.rejected]: state => {
      state.user = null;

      state.status = "error";
    },
  },
});

/** Actions */
export const { setUser, clearUser } = userSlice.actions;

/** Reducer */
export default userSlice.reducer;
