import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "../features/products/productsSlice";
import { productsApi } from "../services/productsApi";
import { setupListeners } from "@reduxjs/toolkit/query";

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

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
//? if i make a delete request "setupListeners" will be use to refetch existing data
setupListeners(store.dispatch);
