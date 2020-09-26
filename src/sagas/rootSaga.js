import { takeLatest } from 'redux-saga/effects';
import * as ACTION from '../constants/constants';
import authSaga from './authSaga';

function* rootSaga() {
    yield takeLatest([
        ACTION.SIGNIN_WITH_GOOGLE,
        ACTION.SIGNOUT,
        ACTION.ON_AUTHSTATE_SUCCESS,
        ACTION.ON_AUTHSTATE_FAIL,
    ], authSaga);
}

export default rootSaga;