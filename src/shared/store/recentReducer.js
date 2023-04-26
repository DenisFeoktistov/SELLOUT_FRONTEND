import { createSlice } from '@reduxjs/toolkit';

const recentSlice = createSlice({
  name: 'recent',
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      const { product } = action.payload;
      // Убедитесь, что товара еще нет в массиве
      if (state.find((p) => p.id === product.id)) {
        return;
      }
      // Оставить только последние 7 просмотренных товаров
      if (state.length === 7) {
        state.pop();
      }
      // Добавить новый товар в начало массива
      state.unshift(product);
    },
  },
});

export const { addProduct } = recentSlice.actions;

export default recentSlice.reducer;