import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './state/cartSlice';
import productsReducer from './state/productSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
