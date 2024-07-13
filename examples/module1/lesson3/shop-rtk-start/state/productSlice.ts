import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Product } from '../types/Product';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

interface ProductState {
  error: string | null;
  items: Product[];
  loading: boolean;
}

const initialState: ProductState = {
  items: [],
  error: null,
  loading: false,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      });
  },
});

export default productSlice.reducer;
