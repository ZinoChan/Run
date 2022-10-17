import { IProductRes } from '@/types/products.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IProductRes[] = [];

const productsReducer = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProductsStart() {},
    getProductsSuccess: (state, action: PayloadAction<IProductRes[]>) =>
      action.payload,
  },
});

export const { getProductsStart, getProductsSuccess } = productsReducer.actions;

export default productsReducer.reducer;
