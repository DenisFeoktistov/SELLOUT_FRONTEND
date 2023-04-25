import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";

// Create the store
const store = configureStore({
  reducer: cartReducer,
});

export default store;
