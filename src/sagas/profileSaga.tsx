import firebaseInstance from '@/firebase/firebase';
import { isAuthenticating, setAuthStatus } from '@/reducers/appReducer';
import {
  updateProfileStart,
  updateProfileSuccess,
} from '@/reducers/profileReducer';
import { IUserProfile } from '@/types/auth.interface';
import { IProfileSaga } from '@/types/saga.interface';
import { call, put } from 'redux-saga/effects';

function* initRequest() {
  yield put(isAuthenticating(true));
  yield put(setAuthStatus(null));
}

function* handleError(err: any) {
  yield put(isAuthenticating(false));
}

function* profileSaga({ type, payload }: IProfileSaga) {
  switch (type) {
    case updateProfileStart.type:
      try {
        yield initRequest();
        const updatedProfile: IUserProfile = yield call(
          firebaseInstance.updateProfile,
          payload.id,
          payload.updates
        );
        yield put(updateProfileSuccess(updatedProfile));
        yield put(isAuthenticating(false));
      } catch (err) {
        handleError(err);
      }
      break;
    default:
      return;
  }
}

export default profileSaga;
