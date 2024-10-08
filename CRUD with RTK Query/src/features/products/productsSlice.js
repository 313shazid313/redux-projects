import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

//* to run the server
//* npm install json-server
//* npx json-server -p 3000 -w src/database/db.json


export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
