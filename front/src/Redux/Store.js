import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './ReducerProducts.js';
import userReducer from './ReducerUsers.js';

export default configureStore({
  reducer: {
    products: productsReducer,
    user: userReducer
  }
})