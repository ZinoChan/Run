import { ICart } from '@/types/cart.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ICart[] = [];

const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICart>) => {
      return state.some(
        (item) =>
          item.id === action.payload.id &&
          item.size.id === action.payload.size.id
      )
        ? state
        : [...state, { ...action.payload, quantity: 1 }];
    },
    removeFromCart: (state, action: PayloadAction<string>) =>
      state.filter((item) => item.id !== action.payload),
    addQty: (state, action: PayloadAction<string>) => {
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
    },
    minusQty: (state, action: PayloadAction<string>) => {
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });
    },
    clearCart: () => [],
  },
});

export const { addToCart, removeFromCart, addQty, minusQty, clearCart } =
  cartReducer.actions;

export default cartReducer.reducer;
