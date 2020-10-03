import { takeLatest } from 'redux-saga/effects';
import * as ACTIONS from '../constants/constants';
import authSaga from './authSaga';
import productsSaga from './productsSaga'

function* rootSaga() {
    yield takeLatest([
        ACTIONS.SIGNIN_WITH_GOOGLE,
        ACTIONS.SIGNOUT,
        ACTIONS.ON_AUTHSTATE_SUCCESS,
        ACTIONS.ON_AUTHSTATE_FAIL,
    ], authSaga);

    yield takeLatest([
        ACTIONS.GET_PRODUCTS
    ], productsSaga);

;
}

export default rootSaga;