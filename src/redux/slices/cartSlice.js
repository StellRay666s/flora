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
      const product = state.data.find(boquet => boquet._id === action.payload);
      const priceProduct = { price: product.product.price + product.price };
      const count = product.count++;
      const priceAddition = Object.assign(product, priceProduct, count);
      state.totalPrice = state.data.reduce((sum, obj) => {
        return sum + obj.price;
      }, 0);
    },
    setDecreasePrice: (state, action) => {
      const product = state.data.find(boquet => boquet._id === action.payload);
      const priceProduct = { price: product.price - product.product.price };
      const priceAddition = Object.assign(product, priceProduct);
      state.totalPrice = state.totalPrice - product.product.price;
      const count = product.count--;
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
