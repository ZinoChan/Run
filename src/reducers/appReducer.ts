import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthStatus, IReqStatus } from '@/types/auth.interface';

type initState = {
  loading: boolean;
  isAuthenticating: boolean;
  authStatus: null | IAuthStatus;
  requestStatus: null | IReqStatus;
};

const initialState: initState = {
  loading: false,
  isAuthenticating: false,
  authStatus: null,
  requestStatus: null,
};

const appReducer = createSlice({
  name: 'app',
  initialState,
  reducers: {
    isLoading: (state, action: PayloadAction<boolean>) => {
      return { ...state, loading: action.payload };
    },
    isAuthenticating: (state, action: PayloadAction<boolean>) => {
      return { ...state, isAuthenticating: action.payload };
    },
    setAuthStatus: (state, action: PayloadAction<null | IAuthStatus>) => {
      return { ...state, authStatus: action.payload };
    },
    setRequestStatus: (state, action: PayloadAction<null | IReqStatus>) => {
      return { ...state, requestStatus: action.payload };
    },
  },
});

export const { isLoading, isAuthenticating, setAuthStatus, setRequestStatus } =
  appReducer.actions;

export default appReducer.reducer;
