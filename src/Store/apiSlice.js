import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StatusCode from "../Utilities/StatusCode";

const initialState = {
  products: [],
  status: StatusCode.IDLE,
};

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    // fetchProducts: (state, action) => {
    //   state.products = action.payload;
    //},
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.status = StatusCode.IDLE;
    });
    builder.addCase(getProducts.pending, (state, action) => {
      state.products = [];
      state.status = StatusCode.LOADING;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.status = StatusCode.ERROR;
    });
  },
});

export const getProducts = createAsyncThunk("products/get", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  return products;
});

// export function fetchP() {
//   return async function fetchProductsThunk(dispatch, getState) {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const products = await response.json();
//     dispatch(fetchProducts(products));
//   };
// }
export const { fetchProducts } = apiSlice.actions;
export default apiSlice.reducer;
