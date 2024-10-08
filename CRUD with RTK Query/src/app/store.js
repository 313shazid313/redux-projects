import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "../features/products/productsSlice";
import { productsApi } from "../services/productsApi";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [productsApi.reducerPath]: productsApi.reducer,
    productR: productsSlice,
  },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
