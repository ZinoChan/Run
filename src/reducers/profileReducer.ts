import { IUserProfile } from '@/types/auth.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IUserProfile = {} as IUserProfile;

const profileRducer = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<IUserProfile>) => {
      return action.payload;
    },
    updateProfileStart(state, action: PayloadAction<Partial<IUserProfile>>) {},
    updateProfileSuccess: (
      state,
      action: PayloadAction<Partial<IUserProfile>>
    ) => {
      return { ...state, ...action.payload };
    },
    clearProfile: () => {
      return {} as IUserProfile;
    },
  },
});

export const {
  setProfile,
  updateProfileStart,
  updateProfileSuccess,
  clearProfile,
} = profileRducer.actions;

export default profileRducer.reducer;
