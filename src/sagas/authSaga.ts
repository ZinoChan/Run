import { call, put } from 'redux-saga/effects';
import firebaseInstance from '@/firebase/firebase';
import { toast } from 'react-hot-toast';
import { isAuthenticating, setAuthStatus } from '@/reducers/appReducer';
import {
  authSuccess,
  authFailed,
  signInSuccess,
  signInWithGoogle,
  signOutStart,
  signOutSuccess,
  signIn,
  createAccount,
} from '@/reducers/authReducer';
import { IAuthSaga } from '@/types/saga.interface';
import { clearCart } from '@/reducers/cartReducer';
import { UserCredential } from 'firebase/auth';

function* handleError(e: any) {
  yield put(isAuthenticating(false));
  switch (e.code) {
    case 'auth/email-already-in-use':
      yield put(
        setAuthStatus({
          success: false,
          message: 'Email is already in use. Please use another email',
        })
      );
      break;
    case 'auth/wrong-password':
      yield put(
        setAuthStatus({
          success: false,
          message: 'Incorrect email or password',
        })
      );
      break;
    case 'auth/user-not-found':
      yield put(
        setAuthStatus({
          success: false,
          message: 'Incorrect email or password',
        })
      );
      break;
    case 'auth/reset-password-error':
      yield put(
        setAuthStatus({
          success: false,
          message:
            'Failed to send password reset email. Did you type your email correctly?',
        })
      );
      break;
    case 'auth/network-request-failed':
      yield put(
        setAuthStatus({
          success: false,
          message: 'Network error has occured. Please try again.',
        })
      );
      break;
    default:
      yield put(setAuthStatus({ success: false, message: e.message }));
      break;
  }
}

function* initRequest() {
  yield put(isAuthenticating(true));
  yield put(setAuthStatus(null));
}

function* authSaga({ type, payload }: IAuthSaga) {
  switch (type) {
    case signIn.type:
      try {
        yield initRequest();
        const userCredential: UserCredential = yield call(
          firebaseInstance.signIn,
          payload.email,
          payload.password
        );
        if (userCredential?.user) {
          yield put(
            signInSuccess({ id: userCredential.user.uid, type: 'client' })
          );
          toast.success('login successfully');
        }
      } catch (e) {
        yield handleError(e);
      }
      break;
    case signInWithGoogle.type:
      try {
        yield initRequest();
        yield call(firebaseInstance.signInWithGoogle);
      } catch (e) {
        yield handleError(e);
      }
      break;
    case createAccount.type:
      try {
        yield initRequest();
        const userCredential: UserCredential = yield call(
          firebaseInstance.createAccount,
          payload.email,
          payload.password
        );
        let user = {
          fullName: userCredential.user.displayName || 'user',
          avatar: '',
          email: userCredential.user.email || '',
          address: '',
          basket: [],
          role: 'USER',
          dateJoined:
            userCredential.user.metadata.creationTime || new Date().getTime(),
        };
        if (userCredential?.user) {
          yield put(
            signInSuccess({ id: userCredential.user.uid, type: 'client' })
          );
          toast.success('sign up successfully');
        }
        yield call<typeof firebaseInstance.addUser>(
          firebaseInstance.addUser,
          userCredential.user.uid,
          user
        );
        yield put(isAuthenticating(false));
      } catch (e) {
        yield handleError(e);
      }
      break;
    case signOutStart.type:
      try {
        yield initRequest();
        yield call(firebaseInstance.signOut);
        yield put(clearCart());
        yield put(signOutSuccess());
        yield put(isAuthenticating(false));
        yield call(toast.success, 'successfully signed out');
      } catch (e) {
        yield handleError(e);
      }
      break;
    case authSuccess.type:
      yield put(
        setAuthStatus({ success: true, message: 'successfully signed in.' })
      );
      yield put(signInSuccess({ id: payload.uid, type: 'client' }));
      break;

    case authFailed.type:
      yield put(signOutSuccess());
      break;

    default:
      return;
  }
}

export default authSaga;
