import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCartUsers } from "requests/getCartUser";

export const fetchCartData = createAsyncThunk("cart/fetchCartData", async () => {
  const response = await getCartUsers();

  return response;
});

const initialState = {
  data: [
    {
      product: {},
      count: 0,
      _id: "",
      price: 0,
    },
  ],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setIncreasePrice: (state, action) => {
      const item = state.data.find(item => item._id === action.payload);
      const priceProduct = { price: item.product.price + item.price };
      const count = item.count++;
      const product = Object.assign(item, priceProduct, count);
      state.totalPrice = state.data.reduce((sum, obj) => {
        return sum + obj.price;
      }, 0);
    },
    setDecreasePrice: (state, action) => {
      const item = state.data.find(item => item._id === action.payload);
      const priceProduct = { price: item.price - item.product.price };
      const product = Object.assign(item, priceProduct);
      state.totalPrice = state.totalPrice - item.product.price;
      const count = item.count--;
    },
  },
  extraReducers: {
    [fetchCartData.pending]: state => {
      state = [];
      state.status = "loading";
    },
    [fetchCartData.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.totalPrice = state.data.reduce((sum, obj) => {
        return sum + obj.price;
      }, 0);
      state.status = "loaded";
    },
    [fetchCartData.rejected]: state => {
      state = [];
      state.status = "error";
    },
  },
});

//** Actions */
export const { setIncreasePrice, setDecreasePrice } = cartSlice.actions;

/** Reducer */
export default cartSlice.reducer;
