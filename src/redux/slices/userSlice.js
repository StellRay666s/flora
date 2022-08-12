import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postReAuth } from "requests/postReAuth";

export const fetchUserData = createAsyncThunk("user/fetchUserData", async () => {
  const accessToken = window.localStorage.getItem("accessToken");
  const { data } = await postReAuth(accessToken);

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
  extraReducers: {
    [fetchUserData.pending]: state => {
      state.user = [];
      state.status = "loading";
    },
    [fetchUserData.fulfilled]: (state, action) => {
      state.user = action.payload;
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
