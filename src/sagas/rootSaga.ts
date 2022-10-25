import {
  authFailed,
  authSuccess,
  createAccount,
  signIn,
  signInWithGoogle,
  signOutStart,
} from '@/reducers/authReducer';
import { getProductsStart } from '@/reducers/productsReducer';
import { takeLatest } from 'redux-saga/effects';
import authSaga from './authSaga';
import productsSaga from './productsSaga';

function* rootSaga() {
  yield takeLatest(
    [
      createAccount.type,
      signIn.type,
      signInWithGoogle.type,
      signOutStart.type,
      authSuccess,
      authFailed,
    ],
    authSaga
  );
  yield takeLatest([getProductsStart.type], productsSaga);
}

export default rootSaga;
