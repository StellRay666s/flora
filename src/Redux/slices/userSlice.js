import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};
export const useSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default useSlice.reducer;
