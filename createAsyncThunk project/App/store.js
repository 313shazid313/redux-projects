import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Features/counter/counterSlice";
import postReducers from "../Features/posts/postSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postReducers,
  },
});

export default store;
