import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import apiSlice from "./apiSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    api: apiSlice,
  },
});

export default store;
