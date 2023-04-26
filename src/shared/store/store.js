import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import recentReducer from './recentReducer';

// Create the store
const store = configureStore({
  reducer: {
    recent: recentReducer,
    cart: cartReducer,
  },
});

export default store;
