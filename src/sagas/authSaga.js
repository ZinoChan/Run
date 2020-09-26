import { call, put } from 'redux-saga/effects';


import { signInWithGoogle, signOut } from '../firebase/firebase';

import {
    ON_AUTHSTATE_FAIL,
    SIGNIN_WITH_GOOGLE,
    SIGNOUT,
    ON_AUTHSTATE_SUCCESS,
} from '../constants/constants';

import {
    setAuthStatus,
    signOutSuccess,
    signInSuccess,
    isAuthenticating
} from '../actions/authActions';

import { clearCart } from '../actions/cartActions';

function* handleError(e) {
    yield put(isAuthenticating(false));

    switch (e.code) {
        case 'auth/network-request-failed':
            yield put(setAuthStatus({ success: false, message: 'Network error has occured. Please try again.'}));
            break;
        default:
            yield put(setAuthStatus({ success: false, message: e.message}));
            break;
    }
}

function* initRequest() {
    yield put(isAuthenticating());
    yield put(setAuthStatus(null));
}

function* authSaga({ type, payload}) {
    switch (type) {
        case SIGNIN_WITH_GOOGLE:
            try {
                yield initRequest();
                yield call(signInWithGoogle);
            }
            catch(e) {
                yield handleError(e);
            }
            break;
        case SIGNOUT:
            try {
                yield initRequest();
                yield call(signOut);
                yield put(clearCart);
                yield put(signOutSuccess());
                yield put(isAuthenticating(false));
            }
            catch(e) {
                yield handleError(e);
            }
            break;
        case ON_AUTHSTATE_SUCCESS:
            yield put(setAuthStatus({sucess: true, message: "successfully signed in."}))
            yield put(isAuthenticating(false));
            yield put(signInSuccess({ 
                id: payload.uid, 
                type: 'client'
            }));
            break;
        
        case ON_AUTHSTATE_FAIL:
            yield put(signOutSuccess());
            break;
        
        default: 
            return;
    }
}

export default authSaga;