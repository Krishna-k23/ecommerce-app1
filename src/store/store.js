import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/productSlice'; // Assuming product-related logic is here

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;
