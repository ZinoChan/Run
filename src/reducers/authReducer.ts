import { IUser } from '@/types/auth.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';

const initialState: IUser = {} as IUser;

const authReducer = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    signIn(
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) {},
    createAccount(
      state,
      action: PayloadAction<{
        fullName: string;
        email: string;
        password: string;
      }>
    ) {},
    signInWithGoogle() {},
    authSuccess: (state, action: PayloadAction<User>) => {},
    signInSuccess: (state, action: PayloadAction<IUser>) => {
      return action.payload;
    },
    authFailed: () => {},
    signOutStart() {},
    signOutSuccess: () => {
      return {} as IUser;
    },
  },
});

export const {
  signIn,
  createAccount,
  signInSuccess,
  signOutStart,
  signOutSuccess,
  signInWithGoogle,
  authSuccess,
  authFailed,
} = authReducer.actions;

export default authReducer.reducer;
