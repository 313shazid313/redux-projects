import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

//* to run the server
//* npm install json-server
//* npx json-server -p 3000 -w src/database/db.json

//! Read products
const URL = "http://localhost:3000/products";
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get(URL);
    return res.data;
  }
);
//! delete products
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    await axios.delete(`${URL}/${id}`);
    return id;
  }
);

//! create product
export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (product) => {
    const res = await axios.post(URL, product);
    return res.data;
  }
);

//! update product
export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (id, product) => {
    const res = await axios.put(`${URL}/${id}`, product);
    // return res.data;
    console.log(res.data)
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      state.products = null;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
      state.error = null;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.products.push(action.payload);
    });
    // builder.addCase(updateProduct.fulfilled, (state, action) => {
    //   state.products.push(action.payload);
    // });
  },
});

export default productsSlice.reducer;
