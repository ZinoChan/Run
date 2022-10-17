import { IUser } from '@/types/auth.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';

const initialState: IUser = {} as IUser;

const authReducer = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    signInStart() {},
    signInWithGoogle() {},
    authSuccess: (state, action: PayloadAction<User>) => {},
    signInSuccess: (state, action: PayloadAction<IUser>) => {
      return action.payload;
    },
    authFailed: () => {},
    signOutStart() {},
    signOutSuccess: () => {},
  },
});

export const {
  signInStart,
  signInSuccess,
  signOutStart,
  signOutSuccess,
  signInWithGoogle,
  authSuccess,
  authFailed,
} = authReducer.actions;

export default authReducer.reducer;
