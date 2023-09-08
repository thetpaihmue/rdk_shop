import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    fetchProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export function fetchP() {
  return async function fetchProductsThunk(dispatch, getState) {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    dispatch(fetchProducts(products));
  };
}
export const { fetchProducts } = apiSlice.actions;
export default apiSlice.reducer;
