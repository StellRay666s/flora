import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: 0,
};
export const useSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default useSlice.reducer;
