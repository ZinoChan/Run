import cartReducer from './cartReducer';
import appReducer from './appReducer';
import authReducer from './authReducer';
import productsReducer from './productsReducer';
import { combineReducers } from '@reduxjs/toolkit';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  app: appReducer,
  cart: cartReducer,
  auth: authReducer,
  products: productsReducer,
  profile: profileReducer,
});

export default rootReducer;
