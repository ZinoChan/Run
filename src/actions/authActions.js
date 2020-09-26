import * as type from '../constants/constants';

export const signInWithGoogle = () => ({
    type: type.SIGNIN_WITH_GOOGLE
});

export const signOut = () => ({
    type: type.SIGNOUT
});

export const signOutSuccess = () => ({
    type: type.SIGNOUT_SUCCESS
});

export const signInSuccess = auth => ({
    type: type.SIGNIN_SUCCESS,
    payload: auth
  });


export const setAuthStatus = status => ({
    type: type.SET_AUTH_STATUS,
    payload: status
});

export const onAuthStateChanged = () => ({
    type: type.ON_AUTHSTATE_CHANGED
});

export const onAuthStateSuccess = user => ({
    type: type.ON_AUTHSTATE_SUCCESS,
    payload: user
});

export const onAuthStateFail = error => ({
    type: type.ON_AUTHSTATE_FAIL,
    payload: error
});

export const isAuthenticating = (bool = true) => ({
    type: type.IS_AUTHENTICATING,
    payload: bool
});

