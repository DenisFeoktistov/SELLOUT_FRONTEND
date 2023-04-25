import { createSlice } from "@reduxjs/toolkit";

// Define the initial state of the cart
const initialCartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

// Create a slice for the cart
const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    // Add an item to the cart
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
      }

      state.totalQuantity++;
      state.totalPrice += newItem.price;
    },

    // Remove an item from the cart
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }

      state.totalQuantity--;
      state.totalPrice -= existingItem.price;
    },
  },
});
// Export the actions
export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
