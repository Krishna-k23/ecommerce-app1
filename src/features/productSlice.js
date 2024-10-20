import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts, fetchProductDetails } from '../api'; // API functions

// Fetch products asynchronously
export const getProducts = createAsyncThunk('products/getProducts', async (params) => {
  const response = await fetchProducts(params.limit, params.skip);
  return response.data.products;
});

// Fetch product details asynchronously
export const getProductDetails = createAsyncThunk('products/getProductDetails', async (id) => {
  const response = await fetchProductDetails(id);
  return response.data;
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    productList: [],
    productDetails: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.productList = action.payload;
        state.loading = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(getProductDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductDetails.fulfilled, (state, action) => {
        state.productDetails = action.payload;
        state.loading = false;
      })
      .addCase(getProductDetails.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default productSlice.reducer;
