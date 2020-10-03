import { call, put} from 'redux-saga/effects';

import { GET_PRODUCTS, SET_REQUEST_STATUS } from '../constants/constants';

import { getProductsSuccess } from '../actions/productsActions';
import { isLoading } from '../actions/appActions';

import {getProducts} from '../firebase/firebase';

function* initRequest(){
    yield put(isLoading(true));
    yield put({type: SET_REQUEST_STATUS, payload: null});
}

function* handleError(e){
    yield put(isLoading(false));
    yield put({type: SET_REQUEST_STATUS, payload: 'Request failed '});
    
}


function* productSaga({type, payload}){
    switch(type){
        case GET_PRODUCTS:
            try {
                yield initRequest();
                const products = yield call(getProducts);
        
                yield put(getProductsSuccess(products));
                yield put(isLoading(false));
                yield put({type: SET_REQUEST_STATUS, payload: null});

            } catch (e) {
                handleError(e);
            }
            break;
        default:
            return;

        }
}

export default productSaga;